// import "@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const SUPABASE_URL = Deno.env.get("SUPABASE_URL");
const SUPABASE_SERVICE = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

if (!RESEND_API_KEY) {
  throw new Error("Missing RESEND_API_KEY");
}

if (!SUPABASE_URL) {
  throw new Error("Missing SUPABASE_URL");
}

if (!SUPABASE_SERVICE) {
  throw new Error("Missing SUPABASE_SERVICE_ROLE_KEY");
}

const FROM_EMAIL =
  Deno.env.get("FROM_EMAIL") ??
  "info@sonyahintegratedventures.com";

const SITE_URL =
  Deno.env.get("SITE_URL") ??
  "https://www.sonyahintegratedventures.com";

const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_SERVICE
);

const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods":
    "POST, OPTIONS",
};

async function sendEmail(
  to: string,
  subject: string,
  html: string
) {
  const res = await fetch(
    "https://api.resend.com/emails",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `So-nyah Cleaners <${FROM_EMAIL}>`,
        to,
        subject,
        html,
      }),
    }
  );

  if (!res.ok) {
    const error = await res.text();
    throw new Error(error);
  }

  return res.json();
}

Deno.serve(async (req) => {
  // CORS
  if (req.method === "OPTIONS") {
    return new Response("ok", {
      headers: cors,
    });
  }

  try {
    const { email } = await req.json();

    // Validate email
    if (!email || typeof email !== "string") {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Email address is required.",
        }),
        {
          status: 400,
          headers: {
            ...cors,
            "Content-Type": "application/json",
          },
        }
      );
    }

    const normalizedEmail = email
      .trim()
      .toLowerCase();

    // Basic email validation
    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(normalizedEmail)) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Please enter a valid email address.",
        }),
        {
          status: 400,
          headers: {
            ...cors,
            "Content-Type": "application/json",
          },
        }
      );
    }

    // Check if already subscribed
    const { data: existingSubscriber, error: existingError } =
      await supabase
        .from("subscribers")
        .select("email, subscribed")
        .eq("email", normalizedEmail)
        .maybeSingle();

    if (existingError) {
      throw existingError;
    }

    // Already subscribed
    if (existingSubscriber?.subscribed) {
      return new Response(
        JSON.stringify({
          success: true,
          alreadySubscribed: true,
          message: "You are already subscribed.",
        }),
        {
          status: 200,
          headers: {
            ...cors,
            "Content-Type": "application/json",
          },
        }
      );
    }

    // Save subscriber
    const { error: insertError } = await supabase
      .from("subscribers")
      .upsert(
        {
          email: normalizedEmail,
          subscribed: true,
        },
        {
          onConflict: "email",
        }
      );

    if (insertError) {
      throw insertError;
    }

    // Send welcome email
    await sendEmail(
      normalizedEmail,
      "Welcome to So-nyah Cleaners 🌿",
      `
        <!DOCTYPE html>
        <html>
        <body style="
          margin:0;
          padding:40px 16px;
          background:#f6f3f2;
          font-family:Arial,sans-serif;
        ">

          <table
            width="100%"
            cellpadding="0"
            cellspacing="0"
          >
            <tr>
              <td align="center">

                <table
                  width="600"
                  cellpadding="0"
                  cellspacing="0"
                  style="
                    max-width:600px;
                    background:#ffffff;
                    border-radius:18px;
                    overflow:hidden;
                  "
                >

                  <!-- HEADER -->
                  <tr>
                    <td style="
                      background:#791E7E;
                      padding:35px;
                      text-align:center;
                    ">

                      <img
                        src="https://pltuxx4q1i7colum.public.blob.vercel-storage.com/logo.png"
                        alt="So-nyah Cleaners"
                        width="80"
                        style="display:block;margin:0 auto 15px;"
                      />

                      <h1 style="
                        color:#ffffff;
                        margin:0;
                        font-size:24px;
                      ">
                        So-nyah Cleaners
                      </h1>

                    </td>
                  </tr>

                  <!-- CONTENT -->
                  <tr>
                    <td style="
                      padding:40px;
                    ">

                      <h2 style="
                        color:#791E7E;
                        margin-top:0;
                      ">
                        Thank you for subscribing! 🌿
                      </h2>

                      <p style="
                        color:#444;
                        line-height:1.8;
                      ">
                        You're now subscribed to So-nyah Cleaners.
                      </p>

                      <p style="
                        color:#444;
                        line-height:1.8;
                      ">
                        We'll send you updates, useful cleaning tips,
                        company news and new articles from our blog.
                      </p>

                      <div style="
                        text-align:center;
                        margin:30px 0;
                      ">

                        <a
                          href="${SITE_URL}/blog"
                          style="
                            display:inline-block;
                            background:#791E7E;
                            color:#ffffff;
                            text-decoration:none;
                            padding:14px 30px;
                            border-radius:999px;
                            font-weight:bold;
                          "
                        >
                          Visit Our Blog →
                        </a>

                      </div>

                      <p style="
                        color:#777;
                        font-size:13px;
                      ">
                        If you didn't subscribe to this newsletter,
                        you can simply ignore this email.
                      </p>

                    </td>
                  </tr>

                  <!-- FOOTER -->
                  <tr>
                    <td style="
                      background:#791E7E;
                      padding:18px;
                      text-align:center;
                    ">

                      <p style="
                        color:#ffffffaa;
                        font-size:11px;
                        margin:0;
                      ">
                        © ${new Date().getFullYear()}
                        So-nyah Cleaners
                      </p>

                    </td>
                  </tr>

                </table>

              </td>
            </tr>
          </table>

        </body>
        </html>
      `
    );

    return new Response(
      JSON.stringify({
        success: true,
        message: "Successfully subscribed.",
      }),
      {
        status: 200,
        headers: {
          ...cors,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("subscribe error:", error);

    return new Response(
      JSON.stringify({
        success: false,
        error:
          error instanceof Error
            ? error.message
            : "Something went wrong.",
      }),
      {
        status: 500,
        headers: {
          ...cors,
          "Content-Type": "application/json",
        },
      }
    );
  }
});