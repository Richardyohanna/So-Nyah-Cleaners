// src/pages/Blog.tsx
import { useState, useMemo, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { usePosts } from "../hooks/usePosts";
import BlogSearch from "./BlogSearch";

import back from "../assets/icons8-less-than-50.png";
import next from "../assets/icons8-greater-than-50.png";

const POSTS_PER_PAGE = 8;

function SkeletonCard() {
  return (
    <div className="w-full border border-[#0000001a] rounded-2xl overflow-hidden bg-white animate-pulse">
      <div className="w-full h-[200px] sm:h-[220px] bg-gray-200" />
      <div className="p-5 sm:p-6 lg:p-7 flex flex-col gap-3 min-h-[240px]">
        <div className="h-3 w-24 bg-gray-200 rounded" />
        <div className="h-5 w-3/4 bg-gray-200 rounded" />
        <div className="h-4 w-full bg-gray-200 rounded" />
        <div className="h-4 w-2/3 bg-gray-200 rounded" />
        <div className="flex gap-3 items-center mt-auto pt-2">
          <div className="w-10 h-10 rounded-full bg-gray-200" />
          <div className="h-4 w-32 bg-gray-200 rounded" />
        </div>
      </div>
    </div>
  );
}

function EmptyState({ filtered }: { filtered: boolean }) {
  return (
    <div className="col-span-full flex flex-col items-center justify-center py-20 text-gray-400">
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="mb-4">
        {filtered ? (
          <>
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
            <line x1="8" y1="11" x2="14" y2="11" />
          </>
        ) : (
          <>
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
          </>
        )}
      </svg>
      <p className="text-base font-medium">
        {filtered ? "No articles match your search." : "No articles published yet."}
      </p>
      <p className="text-sm mt-1">
        {filtered ? "Try a different keyword or category." : "Check back soon!"}
      </p>
    </div>
  );
}

const Blog = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const { posts, loading, error } = usePosts({ status: "published" });

  // ── Pre-fill from URL query params (?search=x&category=y) ─────────────────
  // This lets BlogDetail hashtag/search clicks land here with filters active
  const [searchQuery, setSearchQuery] = useState(() => searchParams.get("search") ?? "");
  const [activeCategory, setActiveCategory] = useState(() => searchParams.get("category") ?? "all");
  const [currentPage, setCurrentPage] = useState(1);

  // Keep URL in sync with filter state
  useEffect(() => {
    const params: Record<string, string> = {};
    if (searchQuery) params.search = searchQuery;
    if (activeCategory !== "all") params.category = activeCategory;
    setSearchParams(params, { replace: true });
  }, [searchQuery, activeCategory]);

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    setCurrentPage(1);
  };

  const handleCategoryChange = (slug: string) => {
    setActiveCategory(slug);
    setCurrentPage(1);
  };

  // ── Filter logic (all client-side — posts are already fetched) ────────────
  const filteredPosts = useMemo(() => {
    let result = posts;

    if (activeCategory !== "all") {
      result = result.filter((post) =>
        post.hashtags?.some(
          (tag) =>
            tag.toLowerCase().replace(/\s+/g, "-") === activeCategory ||
            tag.toLowerCase() === activeCategory.replace(/-/g, " ")
        )
      );
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (post) =>
          post.title?.toLowerCase().includes(q) ||
          post.introduction?.toLowerCase().includes(q) ||
          post.content?.replace(/<[^>]+>/g, " ").toLowerCase().includes(q) ||
          post.hashtags?.some((tag) => tag.toLowerCase().includes(q))
      );
    }

    return result;
  }, [posts, activeCategory, searchQuery]);

  const isFiltered = searchQuery.trim() !== "" || activeCategory !== "all";
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const paginated = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  const goTo = (page: number) => {
    setCurrentPage(page);
    document.getElementById("blogs")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-10 py-8 sm:py-10 bg-white pb-16 sm:pb-20 overflow-x-hidden">

      <BlogSearch
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
      />

      <section id="blogs" className="mt-8 sm:mt-10">

        {/* Filter summary bar */}
        {isFiltered && !loading && (
          <div className="mb-5 flex items-center gap-3 flex-wrap">
            <p className="text-sm text-gray-500">
              {filteredPosts.length === 0
                ? "No results"
                : `${filteredPosts.length} article${filteredPosts.length === 1 ? "" : "s"} found`}
              {searchQuery && (
                <span> for <strong className="text-[var(--primary)]">"{searchQuery}"</strong></span>
              )}
              {activeCategory !== "all" && (
                <span> in <strong className="text-[var(--primary)] capitalize">{activeCategory.replace(/-/g, " ")}</strong></span>
              )}
            </p>
            <button
              onClick={() => { handleSearchChange(""); handleCategoryChange("all"); }}
              className="text-xs text-[var(--primary)] border border-[var(--primary)]/30 rounded-full px-3 py-1 hover:bg-[var(--primary)] hover:text-white transition-all duration-200"
            >
              Clear filters ✕
            </button>
          </div>
        )}

        {error && (
          <div className="text-center py-10 text-red-500">
            <p>Failed to load posts: {error}</p>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">

          {loading && Array.from({ length: 8 }).map((_, i) => <SkeletonCard key={i} />)}

          {!loading && !error && filteredPosts.length === 0 && (
            <EmptyState filtered={isFiltered} />
          )}

          {!loading && !error && paginated.map((article) => (
            <div
              key={article.id}
              onClick={() => navigate(`/blog/${article.id}`)}
              className="w-full cursor-pointer border border-[#0000001a] rounded-2xl overflow-hidden bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-[var(--primary)] group"
            >
              <div className="w-full h-[200px] sm:h-[220px] md:h-[210px] lg:h-[220px] overflow-hidden bg-gray-100">
                {article.image_url ? (
                  <img src={article.image_url} alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-100">
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#d1d5db" strokeWidth="1.5">
                      <rect x="3" y="3" width="18" height="18" rx="3"/>
                      <circle cx="8.5" cy="8.5" r="1.5"/>
                      <path d="M21 15l-5-5L5 21"/>
                    </svg>
                  </div>
                )}
              </div>

              <div className="p-5 sm:p-6 lg:p-7 flex flex-col gap-3 min-h-[240px]">

                {/* Clickable hashtag pills — filter without navigating away */}
                <div className="flex flex-wrap gap-1.5">
                  {article.hashtags?.slice(0, 2).map((tag) => (
                    <button
                      key={tag}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCategoryChange(tag.toLowerCase().replace(/\s+/g, "-"));
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className="text-[10px] sm:text-xs tracking-wide uppercase font-medium px-2.5 py-1 rounded-full bg-[rgba(246,243,242,1)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white transition-colors duration-200"
                    >
                      {tag}
                    </button>
                  ))}
                  {(!article.hashtags || article.hashtags.length === 0) && (
                    <span className="text-[10px] sm:text-xs tracking-wide uppercase text-[var(--text-sub-h)]">Article</span>
                  )}
                </div>

                <h4 className="text-[18px] sm:text-[20px] lg:text-[22px] font-bold leading-snug transition-colors duration-300 group-hover:text-[var(--primary)]">
                  {article.title || "Untitled"}
                </h4>

                <p
                  className="transition-colors duration-300 group-hover:text-[#555] text-sm sm:text-base leading-7 line-clamp-3 text-gray-600"
                  dangerouslySetInnerHTML={{
                    __html: article.introduction || article.content?.replace(/<[^>]+>/g, " ").slice(0, 120) + "…",
                  }}
                />

                <div className="flex gap-3 items-center mt-auto pt-2">
                  <div className="w-10 h-10 rounded-full bg-[rgba(246,243,242,1)] flex items-center justify-center shrink-0">
                    <span className="text-[var(--primary)] text-sm font-semibold">S</span>
                  </div>
                  <div>
                    <p className="transition-colors duration-300 group-hover:text-[var(--primary)] text-sm sm:text-base font-medium">
                      By So-Nyah Editorial
                    </p>
                    <p className="text-xs text-gray-400">
                      {new Date(article.created_at).toLocaleDateString("en-GB", {
                        day: "numeric", month: "short", year: "numeric",
                      })}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {!loading && totalPages > 1 && (
          <section className="flex gap-3 sm:gap-5 justify-center items-center mt-10 sm:mt-12 flex-wrap">
            <button onClick={() => goTo(Math.max(1, currentPage - 1))} disabled={currentPage === 1}
              className="rounded-full border border-[var(--primary)] w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center transition-all duration-300 hover:bg-[var(--primary)] hover:scale-105 group disabled:opacity-40 disabled:cursor-not-allowed">
              <img src={back} alt="back" className="w-4 h-4 sm:w-5 sm:h-5 group-hover:brightness-0 group-hover:invert" />
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button key={page} onClick={() => goTo(page)}
                className={`rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center font-semibold transition-all duration-300 hover:scale-105 ${
                  page === currentPage
                    ? "bg-[var(--primary)] text-white"
                    : "border border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white"
                }`}>
                {page}
              </button>
            ))}

            <button onClick={() => goTo(Math.min(totalPages, currentPage + 1))} disabled={currentPage === totalPages}
              className="rounded-full border border-[var(--primary)] w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center transition-all duration-300 hover:bg-[var(--primary)] hover:scale-105 group disabled:opacity-40 disabled:cursor-not-allowed">
              <img src={next} alt="next" className="w-4 h-4 sm:w-5 sm:h-5 group-hover:brightness-0 group-hover:invert" />
            </button>
          </section>
        )}

        {/* Newsletter */}
        <section className="mt-12 sm:mt-14 lg:mt-16">
          <div className="relative overflow-hidden rounded-[28px] bg-[var(--primary)] px-5 sm:px-8 md:px-10 lg:px-14 py-8 sm:py-10 lg:py-12 text-white">
            <div className="absolute top-0 right-0 w-[180px] sm:w-[240px] h-[180px] sm:h-[240px] bg-white/10 rounded-full blur-3xl -translate-y-1/3 translate-x-1/4 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[160px] sm:w-[220px] h-[160px] sm:h-[220px] bg-white/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />
            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div className="max-w-[620px]">
                <span className="inline-block bg-white/15 border border-white/20 rounded-full px-4 py-2 text-xs sm:text-sm tracking-wide uppercase mb-4">Newsletter</span>
                <h2 className="text-[28px] sm:text-[34px] md:text-[40px] lg:text-[46px] font-semibold leading-tight">Get fresh cleaning insights delivered weekly.</h2>
                <p className="mt-4 text-sm! sm:text-base! md:text-lg! text-white/85! leading-7 max-w-[560px]">Subscribe to receive practical cleaning tips, wellness-focused articles, eco-friendly ideas, and updates from So-nyah Cleaners straight to your inbox.</p>
                <div className="mt-5 flex flex-wrap gap-3 text-xs sm:text-sm text-white/85">
                  <span className="bg-white/10 border border-white/15 px-3 py-2 rounded-full">Weekly tips</span>
                  <span className="bg-white/10 border border-white/15 px-3 py-2 rounded-full">No spam</span>
                  <span className="bg-white/10 border border-white/15 px-3 py-2 rounded-full">Unsubscribe anytime</span>
                </div>
              </div>
              <div className="w-full lg:max-w-[500px]">
                <div className="bg-white rounded-2xl p-3 sm:p-4 shadow-2xl">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input type="email" placeholder="Enter your email address"
                      className="h-[52px] sm:h-[56px] px-4 sm:px-5 rounded-xl bg-[rgba(246,243,242,1)] w-full outline-none text-[var(--primary)] placeholder:text-[var(--primary)]/60 text-sm sm:text-base" />
                    <button className="h-[52px] sm:h-[56px] px-6 sm:px-7 rounded-xl bg-[var(--primary)] text-white font-medium transition-all duration-300 hover:opacity-90 hover:scale-[1.02] whitespace-nowrap">Subscribe</button>
                  </div>
                  <p className="text-[12px]! sm:text-sm! text-[#666]! mt-3 px-1 leading-6">By subscribing, you agree to receive email updates from So-nyah Cleaners.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Blog;