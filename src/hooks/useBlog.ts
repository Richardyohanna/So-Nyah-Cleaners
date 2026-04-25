import { useEffect, useState } from "react";
import { supabase } from "../Client/lib/supabaseClient";

export const useBlogs = () => {
  const [blogs, setBlogs] = useState<any[]>([]);

  const fetchBlogs = async () => {
    const { data } = await supabase
      .from("blogs")
      .select("*")
      .order("created_at", { ascending: false });

    if (data) setBlogs(data);
  };

  useEffect(() => {
    fetchBlogs();

    const channel = supabase
      .channel("blogs-channel")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "blogs" },
        () => fetchBlogs()
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  return { blogs, refresh: fetchBlogs };
};