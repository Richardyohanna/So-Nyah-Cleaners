// ─── lib/supabase.ts ──────────────────────────────────────────────────────────
// Install: npm install @supabase/supabase-js
// Add to your .env:
//   VITE_SUPABASE_URL=https://your-project.supabase.co
//   VITE_SUPABASE_ANON_KEY=your-anon-key

import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// ─── Types ────────────────────────────────────────────────────────────────────
export type PostStatus = "published" | "draft";

export interface BlogPost {
  id: string;
  title: string;
  introduction: string;
  detail: string;          // HTML from rich editor
  image_url: string | null;
  hashtags: string[];
  status: PostStatus;
  author: string;
  created_at: string;
  updated_at: string;
}

// ─── SQL to run in Supabase SQL Editor ───────────────────────────────────────
/*
create table if not exists blog_posts (
  id          uuid primary key default gen_random_uuid(),
  title       text not null,
  introduction text not null default '',
  detail      text not null default '',
  image_url   text,
  hashtags    text[] default '{}',
  status      text not null default 'draft' check (status in ('published','draft')),
  author      text not null default 'So-Nyah Editorial',
  created_at  timestamptz default now(),
  updated_at  timestamptz default now()
);

-- Enable row-level security (adjust policies to your auth setup)
alter table blog_posts enable row level security;

-- Allow public read of published posts
create policy "Public can read published posts"
  on blog_posts for select
  using (status = 'published');

-- Allow authenticated users full access (for admin)
create policy "Authenticated users full access"
  on blog_posts for all
  using (auth.role() = 'authenticated');

-- Storage bucket for blog images (run in Supabase dashboard > Storage)
-- Create a bucket called "blog-images" and set it to public
*/

// ─── Service Functions ────────────────────────────────────────────────────────

/** Upload an image file and return its public URL */
export async function uploadImage(file: File): Promise<string> {
  const ext = file.name.split(".").pop();
  const path = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;

  const { error } = await supabase.storage
    .from("blog-images")
    .upload(path, file, { cacheControl: "3600", upsert: false });

  if (error) throw new Error(`Image upload failed: ${error.message}`);

  const { data } = supabase.storage.from("blog-images").getPublicUrl(path);
  return data.publicUrl;
}

/** Create a new post (publish or save draft) */
export async function createPost(payload: {
  title: string;
  introduction: string;
  detail: string;
  imageFile: File | null;
  hashtags: string[];
  status: PostStatus;
  author?: string;
}): Promise<BlogPost> {
  let image_url: string | null = null;

  if (payload.imageFile) {
    image_url = await uploadImage(payload.imageFile);
  }

  const { data, error } = await supabase
    .from("blog_posts")
    .insert({
      title: payload.title,
      introduction: payload.introduction,
      detail: payload.detail,
      image_url,
      hashtags: payload.hashtags,
      status: payload.status,
      author: payload.author ?? "So-Nyah Editorial",
    })
    .select()
    .single();

  if (error) throw new Error(`Failed to create post: ${error.message}`);
  return data as BlogPost;
}

/** Update an existing post */
export async function updatePost(
  id: string,
  payload: Partial<{
    title: string;
    introduction: string;
    detail: string;
    imageFile: File | null;
    hashtags: string[];
    status: PostStatus;
  }>
): Promise<BlogPost> {
  let image_url: string | undefined = undefined;

  if (payload.imageFile) {
    image_url = await uploadImage(payload.imageFile);
  }

  const updates: Record<string, unknown> = {
    updated_at: new Date().toISOString(),
  };
  if (payload.title !== undefined) updates.title = payload.title;
  if (payload.introduction !== undefined) updates.introduction = payload.introduction;
  if (payload.detail !== undefined) updates.detail = payload.detail;
  if (payload.hashtags !== undefined) updates.hashtags = payload.hashtags;
  if (payload.status !== undefined) updates.status = payload.status;
  if (image_url !== undefined) updates.image_url = image_url;

  const { data, error } = await supabase
    .from("blog_posts")
    .update(updates)
    .eq("id", id)
    .select()
    .single();

  if (error) throw new Error(`Failed to update post: ${error.message}`);
  return data as BlogPost;
}

/** Delete a post */
export async function deletePost(id: string): Promise<void> {
  const { error } = await supabase.from("blog_posts").delete().eq("id", id);
  if (error) throw new Error(`Failed to delete post: ${error.message}`);
}

/** Fetch all published posts (for public Blog page) */
export async function getPublishedPosts(): Promise<BlogPost[]> {
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("status", "published")
    .order("created_at", { ascending: false });

  if (error) throw new Error(error.message);
  return (data ?? []) as BlogPost[];
}

/** Fetch all posts (for admin) */
export async function getAllPosts(): Promise<BlogPost[]> {
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw new Error(error.message);
  return (data ?? []) as BlogPost[];
}

/** Fetch a single post by id */
export async function getPostById(id: string): Promise<BlogPost | null> {
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("id", id)
    .single();

  if (error) return null;
  return data as BlogPost;
}

// ─── Real-time subscription ───────────────────────────────────────────────────
/**
 * Subscribe to live changes on published posts.
 * Use this in Blog.tsx to keep the list up to date without refreshing.
 *
 * Example:
 *   const unsub = subscribeToPublishedPosts((posts) => setPosts(posts));
 *   return () => unsub(); // call in useEffect cleanup
 */
export function subscribeToPublishedPosts(
  onUpdate: (posts: BlogPost[]) => void
) {
  // Initial load
  getPublishedPosts().then(onUpdate);

  const channel = supabase
    .channel("public:blog_posts")
    .on(
      "postgres_changes",
      { event: "*", schema: "public", table: "blog_posts" },
      async () => {
        // Re-fetch on any change
        const fresh = await getPublishedPosts();
        onUpdate(fresh);
      }
    )
    .subscribe();

  return () => {
    supabase.removeChannel(channel);
  };
}