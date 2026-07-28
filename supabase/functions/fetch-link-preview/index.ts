// supabase/functions/fetch-link-preview/index.ts
import { serve } from "https://deno.land/std/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

serve(async (req) => {
  // Preflight — the browser sends this before the real POST
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { url } = await req.json();
    if (!url) {
      return new Response(JSON.stringify({ error: "Missing url" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const res = await fetch(url, {
      headers: { "User-Agent": "Mozilla/5.0 (compatible; SoNyahBot/1.0)" },
    });

    if (!res.ok) {
      return new Response(JSON.stringify({ error: `Source returned ${res.status}` }), {
        status: 200, // keep 200 so supabase-js doesn't throw a generic FunctionsHttpError
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const html = await res.text();

    const getMeta = (prop: string) => {
      const patterns = [
        new RegExp(`<meta[^>]+property=["']${prop}["'][^>]+content=["']([^"']+)["']`, "i"),
        new RegExp(`<meta[^>]+content=["']([^"']+)["'][^>]+property=["']${prop}["']`, "i"),
        new RegExp(`<meta[^>]+name=["']${prop}["'][^>]+content=["']([^"']+)["']`, "i"),
      ];
      for (const re of patterns) {
        const match = html.match(re);
        if (match?.[1]) return match[1];
      }
      return null;
    };

    const preview = {
      title: getMeta("og:title") ?? getMeta("twitter:title"),
      description: getMeta("og:description") ?? getMeta("twitter:description") ?? getMeta("description"),
      image: getMeta("og:image") ?? getMeta("twitter:image"),
      siteName: getMeta("og:site_name"),
      sourceUrl: url,
    };

    return new Response(JSON.stringify(preview), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: String(e) }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});