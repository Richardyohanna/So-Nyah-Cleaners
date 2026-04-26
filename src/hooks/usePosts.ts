// src/hooks/usePosts.ts
import { useEffect, useState } from "react";
import { supabase, type Post } from "../Client/lib/supabase";

interface UsePostsOptions {
  limit?: number;
  status?: "published" | "draft" | "all";
}

export function usePosts({ limit, status = "published" }: UsePostsOptions = {}) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      setError(null);

      let query = supabase
        .from("posts")
        .select("*")
        .order("created_at", { ascending: false });

      if (status !== "all") {
        query = query.eq("status", status);
      }

      if (limit) {
        query = query.limit(limit);
      }

      const { data, error } = await query;

      if (error) {
        setError(error.message);
      } else {
        setPosts((data as Post[]) ?? []);
      }

      setLoading(false);
    };

    fetch();
  }, [limit, status]);

  return { posts, loading, error };
}

export function usePost(id: string) {
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetch = async () => {
      setLoading(true);
      setError(null);

      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .eq("id", id)
        .eq("status", "published")
        .single();

      if (error) {
        setError(error.message);
      } else {
        setPost(data as Post);
      }

      setLoading(false);
    };

    fetch();
  }, [id]);

  return { post, loading, error };
}