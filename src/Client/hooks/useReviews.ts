import { useEffect, useState, useCallback } from "react";
import { supabase } from "../lib/supabase";
import type { Review } from "../lib/supabase";

interface UseReviewsOptions {
  status?: "pending" | "approved" | "rejected";
  limit?: number;
}

export function useReviews(options: UseReviewsOptions = {}) {
  const { status = "approved", limit } = options;
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchReviews = useCallback(async () => {
    setLoading(true);
    setError(null);

    let query = supabase
      .from("reviews")
      .select("*")
      .eq("status", status)
      .order("created_at", { ascending: false });

    if (limit) query = query.limit(limit);

    const { data, error: fetchError } = await query;

    if (fetchError) {
      setError(fetchError.message);
      setReviews([]);
    } else {
    console.log(data, "This is the data");
      setReviews(data ?? []);
    }
    setLoading(false);
  }, [status, limit]);

  useEffect(() => {
    fetchReviews();
  }, [fetchReviews]);

  return { reviews, loading, error, refetch: fetchReviews };
}

// ── Standalone submit function ───────────────────────────────────────────────
// Kept separate from the hook above so the review FORM doesn't trigger an
// unnecessary fetch of the approved-reviews list.
interface SubmitReviewInput {
  name: string;
  role?: string;
  review: string;
  rating?: number;
}

export async function submitReview(input: SubmitReviewInput) {
  const { error } = await supabase.from("reviews").insert({
    name: input.name.trim(),
    role: input.role?.trim() || null,
    review: input.review.trim(),
    rating: input.rating ?? null,
    status: "approved",
  });

  if (error) {
    throw new Error(error.message);
  }
}