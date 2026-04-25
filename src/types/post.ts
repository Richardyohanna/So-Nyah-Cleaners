// src/types/post.ts
export interface Post {
  id: string;
  title: string;
  introduction: string;
  body: string;
  image_url: string | null;
  hashtags: string[];
  meta_description: string;
  status: 'draft' | 'published';
  created_at: string;
  updated_at: string;
}