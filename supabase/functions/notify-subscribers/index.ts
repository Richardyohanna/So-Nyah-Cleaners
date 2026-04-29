// supabase/functions/notify-subscribers/index.ts

import "@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const SUPABASE_URL = Deno.env.get("SUPABASE_URL");
const SUPABASE_SERVICE = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

if (!RESEND_API_KEY) throw new Error("Missing RESEND_API_KEY");
if (!SUPABASE_URL) throw new Error("Missing SUPABASE_URL");
if (!SUPABASE_SERVICE) throw new Error("Missing SUPABASE_SERVICE_ROLE_KEY");

const SITE_URL = Deno.env.get("SITE_URL") ?? "https://sonyahcleaners.com";
const FROM_EMAIL = Deno.env.get("FROM_EMAIL") ?? "onboarding@resend.dev";

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE);

const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

async function sendEmail(to: string, subject: string, html: string) {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: `So-Nyah Cleaners <${FROM_EMAIL}>`,
      to,
      subject,
      html,
    }),
  });

  if (!res.ok) {
    const error = await res.text();
    throw new Error(error);
  }

  return res.json();
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: cors });
  }

  try {
    const { postId, title, introduction } = await req.json();

    const { data: subscribers, error } = await supabase
      .from("subscribers")
      .select("email, first_name")
      .eq("subscribed", true);

    if (error) throw error;

    if (!subscribers || subscribers.length === 0) {
      return new Response(JSON.stringify({ sent: 0 }), {
        headers: { ...cors, "Content-Type": "application/json" },
      });
    }

    const postUrl = `${SITE_URL}/blog/${postId}`;

    const results = await Promise.allSettled(
      subscribers.map((sub) =>
        sendEmail(
          sub.email,
          `New Post: ${title}`,
          `<p>Hello ${sub.first_name ?? "there"},</p>
           <p>${introduction ?? ""}</p>
           <a href="${postUrl}">Read more</a>`
        )
      )
    );

    const sent = results.filter((r) => r.status === "fulfilled").length;
    const failed = results.filter((r) => r.status === "rejected").length;

    return new Response(
      JSON.stringify({ sent, failed, total: subscribers.length }),
      {
        headers: { ...cors, "Content-Type": "application/json" },
      }
    );
  } catch (err) {
    console.error("notify-subscribers error:", err);

    return new Response(
      JSON.stringify({ error: (err as Error).message }),
      {
        headers: { ...cors, "Content-Type": "application/json" },
        status: 500,
      }
    );
  }
});