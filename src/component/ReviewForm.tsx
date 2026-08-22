import { useState } from "react";
import { submitReview } from "../Client/hooks/useReviews";

const ReviewForm = () => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(5);
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !review.trim()) {
      setStatus("error");
      setErrorMessage("Please fill in your name and your review.");
      return;
    }

    setSubmitting(true);
    setStatus("idle");
    setErrorMessage("");

    try {
      await submitReview({ name, role, review, rating });
      setStatus("success");
      setName("");
      setRole("");
      setReview("");
      setRating(5);
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (status === "success") {
    return (
      <div className="w-full max-w-[560px] mx-auto text-center bg-white border border-[#00000014] p-8 sm:p-10">
        <h4 className="text-[var(--primary)] text-xl sm:text-2xl font-bold mb-3">Thank you!</h4>
        <p className="text-[var(--accent-text)] text-sm sm:text-base mb-6">
          Your review has been submitted and will appear on our site once it's approved.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="bg-[var(--primary)] text-white px-6 py-3 font-semibold transition-all duration-300 hover:scale-105"
        >
          Leave another review
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-[560px] mx-auto bg-white border border-[#00000014] p-6 sm:p-8 md:p-10 flex flex-col gap-4"
    >
      <div className="flex flex-col gap-1">
        <label className="text-sm font-semibold text-[var(--primary)]">Your Name *</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g. Asmau Buba"
          className="border border-[#00000022] px-4 py-3 text-sm sm:text-base focus:outline-none focus:border-[var(--primary)]"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm font-semibold text-[var(--primary)]">Role / Company (optional)</label>
        <input
          type="text"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          placeholder="e.g. Household Owner"
          className="border border-[#00000022] px-4 py-3 text-sm sm:text-base focus:outline-none focus:border-[var(--primary)]"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm font-semibold text-[var(--primary)]">Rating</label>
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => setRating(star)}
              className={`text-2xl! leading-none transition-colors duration-200 ${
                star <= rating ? "text-[#FFD700]!" : "text-[#00000022]!"
              }`}
              aria-label={`Rate ${star} stars`}
            >
              ★
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm font-semibold text-[var(--primary)]">Your Review *</label>
        <textarea
          value={review}
          onChange={(e) => setReview(e.target.value)}
          placeholder="Tell us about your experience with So-nyah Cleaners…"
          rows={5}
          className="border! border-[#00000022]! px-4 py-3 text-sm! sm:text-base! resize-none! focus:outline-none! focus:border-[var(--primary)]!"
        />
      </div>

      {status === "error" && <p className="text-red-600! text-sm!">{errorMessage}</p>}

      <button
        type="submit"
        disabled={submitting}
        className="bg-[var(--primary)] text-white px-6 py-3 font-semibold transition-all duration-300 hover:scale-105 disabled:opacity-60 disabled:hover:scale-100 w-full sm:w-auto self-start"
      >
        {submitting ? "Submitting…" : "Submit Review"}
      </button>
    </form>
  );
};

export default ReviewForm;