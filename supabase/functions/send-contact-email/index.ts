// supabase/functions/send-contact-email/index.ts

import "@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const SUPABASE_URL = Deno.env.get("SUPABASE_URL");
const SUPABASE_SERVICE = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

if (!RESEND_API_KEY) throw new Error("Missing RESEND_API_KEY");
if (!SUPABASE_URL) throw new Error("Missing SUPABASE_URL");
if (!SUPABASE_SERVICE) throw new Error("Missing SUPABASE_SERVICE_ROLE_KEY");

const SONYAH_EMAIL = Deno.env.get("SONYAH_EMAIL") ?? "sonyahintegratedventures@gmail.com";
const SITE_URL = Deno.env.get("SITE_URL") ?? "https://sonyahcleaners.com";

// ⚠️ Use onboarding@resend.dev until your domain is verified
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
    const {
      firstName,
      lastName,
      phone,
      email,
      area,
      service,
      preferredDate,
      details,
    } = await req.json();

    const fullName = `${firstName} ${lastName}`;

    // ✅ SAVE SUBSCRIBER
    if (email) {
      await supabase.from("subscribers").upsert(
        {
          email,
          first_name: firstName,
          subscribed: true,
        },
        { onConflict: "email" }
      );
    }

    // ✅ SEND CLIENT EMAIL
    if (email) {await sendEmail(
          email,
          "Thank you for contacting So-Nyah Cleaners 🌿",
          `<!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8"/>
          <link href="https://fonts.googleapis.com/css2?family=Jost:wght@400;600;700&display=swap" rel="stylesheet">
        </head>

        <body style="margin:0;padding:0;background:#f6f3f2;font-family:'Jost', Arial, sans-serif;">
        <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 16px;">
          <tr><td align="center">

            <table width="600" cellpadding="0" cellspacing="0"
              style="max-width:600px;background:#fff;border-radius:18px;overflow:hidden;
                    box-shadow:0 4px 24px rgba(0,0,0,0.08);">

              <!-- HEADER -->
              <tr>
                <td style="background:#791E7E;padding:30px;text-align:center;">

                  <!-- LOGO -->
                  <img src="../assets/logo.png"
                      alt="So-nyah Cleaners"
                      width="80"
                      style="display:block;margin:0 auto 12px;" />

                  <h1 style="color:#fff;margin:0;font-size:22px;font-weight:700;">
                    So-nyah Cleaners
                  </h1>

                  <p style="color:#ffffffcc;margin:6px 0 0;font-size:12px;">
                    CLEANING SPACES · CREATING HAPPY FACES
                  </p>
                </td>
              </tr>

              <!-- CONTENT -->
              <tr>
                <td style="padding:35px 40px;">

                  <h2 style="color:#791E7E;margin:0 0 12px;font-size:20px;">
                    Hello, ${firstName}! 👋
                  </h2>

                  <p style="color:#444;font-size:15px;line-height:1.8;">
                    We’ve received your request and our team will contact you shortly.
                  </p>

                  <!-- SUMMARY BOX -->
                  <div style="background:#f4e9f6;border-radius:12px;padding:20px;margin:25px 0;">
                    <p style="margin:0 0 10px;font-weight:600;color:#791E7E;">
                      Request Summary
                    </p>

                    <p style="margin:4px 0;"><strong>Service:</strong> ${service}</p>
                    <p style="margin:4px 0;"><strong>Area:</strong> ${area}</p>
                    <p style="margin:4px 0;"><strong>Phone:</strong> ${phone}</p>
                  </div>

                  <!-- CTA -->
                  <div style="text-align:center;margin:25px 0;">
                    <a href="${SITE_URL}/blog"
                      style="background:#791E7E;color:#fff;text-decoration:none;
                            padding:14px 30px;border-radius:999px;
                            font-weight:600;font-size:14px;">
                      Visit Our Blog →
                    </a>
                  </div>

                  <p style="color:#777;font-size:13px;">
                    Need urgent help? Call us: <strong>+234 909 478 2495</strong>
                  </p>

                </td>
              </tr>

              <!-- FOOTER -->
              <tr>
                <td style="background:#791E7E;padding:18px;text-align:center;">
                  <p style="color:#ffffffaa;font-size:11px;margin:0;">
                    © ${new Date().getFullYear()} So-nyah Cleaners
                  </p>
                </td>
              </tr>

            </table>

          </td></tr>
        </table>
        </body>
        </html>`
        );
    }

    // ✅ SEND INTERNAL EMAIL
    await sendEmail(
      SONYAH_EMAIL,
      `New Request — ${fullName}`,
      `<p><strong>Name:</strong> ${fullName}</p>
       <p><strong>Service:</strong> ${service}</p>
       <p><strong>Phone:</strong> ${phone}</p>
       <p><strong>Area:</strong> ${area}</p>
       <p><strong>Details:</strong> ${details ?? "-"}</p>`
    );

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...cors, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (err) {
    console.error("send-contact-email error:", err);

    return new Response(
      JSON.stringify({ error: (err as Error).message }),
      {
        headers: { ...cors, "Content-Type": "application/json" },
        status: 500,
      }
    );
  }
});