// src/lib/supabase.ts
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    "Missing VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY in your .env file"
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// ── Shared post type ─────────────────────────────────────────────────────────
export interface Post {
  id: string;
  title: string;
  introduction: string;
  content: string;       // rich HTML
  image_url: string | null;
  hashtags: string[];
  meta: string;
  status: "draft" | "published";
  created_at: string;
  updated_at: string;
}