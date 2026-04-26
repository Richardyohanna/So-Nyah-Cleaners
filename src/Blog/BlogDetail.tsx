// src/pages/BlogDetail.tsx
import { useParams, useNavigate } from "react-router-dom";
import { usePost, usePosts } from "../hooks/usePosts";
import BlogSearch from "./BlogSearch";
import next from "../assets/icons8-greater-than-50.png";
import share from "../assets/share.png";
import expand from "../assets/expand.png";

function DetailSkeleton() {
  return (
    <div className="animate-pulse mt-3">
      <div className="w-full h-[250px] sm:h-[350px] md:h-[450px] bg-gray-200 rounded-b-3xl" />
      <div className="mt-10 flex flex-col lg:flex-row gap-8 lg:gap-10">
        <div className="flex-1 flex flex-col gap-4">
          <div className="h-6 w-full bg-gray-200 rounded" />
          <div className="h-6 w-5/6 bg-gray-200 rounded" />
          <div className="h-32 w-full bg-gray-100 rounded-xl mt-4" />
          <div className="h-5 w-full bg-gray-200 rounded" />
        </div>
        <div className="w-full lg:max-w-[250px] flex flex-col gap-3 items-center">
          <div className="w-14 h-14 rounded-full bg-gray-200" />
          <div className="h-4 w-24 bg-gray-200 rounded" />
          <div className="h-4 w-32 bg-gray-200 rounded" />
        </div>
      </div>
    </div>
  );
}

function ShareButton({ title, url }: { title: string; url: string }) {
  const handleShare = async () => {
    if (navigator.share) {
      try { await navigator.share({ title, url }); } catch {}
    } else {
      await navigator.clipboard.writeText(url);
      alert("Link copied to clipboard!");
    }
  };
  return (
    <button onClick={handleShare}>
      <img src={share} className="w-[30px] h-[30px]" alt="Share" />
    </button>
  );
}

const BlogDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { post, loading, error } = usePost(id ?? "");
  const { posts: relatedPosts } = usePosts({ status: "published", limit: 6 });
  const related = relatedPosts.filter((p) => p.id !== id).slice(0, 4);

  const formattedDate = post?.created_at
    ? new Date(post.created_at).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })
    : "";

  // On the detail page, searching/clicking a category navigates to /blog with query params
  // Blog.tsx reads those params on mount to pre-fill filters
  const handleDetailSearch = (value: string) => {
    if (value.trim()) navigate(`/blog?search=${encodeURIComponent(value)}`);
  };
  const handleDetailCategory = (slug: string) => {
    navigate(`/blog?category=${slug}`);
  };

  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-10 py-8 sm:py-10 bg-white pb-16 sm:pb-20 overflow-x-hidden">

      <BlogSearch
        searchQuery=""
        onSearchChange={handleDetailSearch}
        activeCategory="all"
        onCategoryChange={handleDetailCategory}
      />

      {/* Breadcrumb */}
      <section>
        <div className="flex flex-wrap mt-8 items-center justify-center gap-2 text-gray-500 text-center">
          <button onClick={() => navigate("/blog")} className="text-xs sm:text-sm hover:text-[var(--primary)]">Blog</button>
          <img src={next} className="w-3 h-3" alt=">" />
          <p className="text-xs sm:text-sm">Article</p>
          {post && (
            <>
              <img src={next} className="w-3 h-3" alt=">" />
              <p className="text-gray-700 text-xs sm:text-sm line-clamp-1 max-w-[200px] sm:max-w-xs">{post.title}</p>
            </>
          )}
        </div>
      </section>

      {loading && <DetailSkeleton />}

      {error && (
        <div className="text-center py-20 text-red-500">
          <p>Could not load this article.</p>
          <button onClick={() => navigate("/blog")} className="mt-4 text-[var(--primary)] underline text-sm">← Back to Blog</button>
        </div>
      )}

      {!loading && !error && post && (
        <section className="mt-3">
          <div
            className="relative rounded-b-3xl w-full min-h-[250px] sm:min-h-[300px] md:min-h-[400px] bg-center bg-cover flex items-end"
            style={{ backgroundImage: post.image_url ? `url(${post.image_url})` : "linear-gradient(135deg, var(--primary), #2d5a8e)" }}
          >
            <div className="absolute inset-0 bg-black/40 rounded-b-3xl" />
            <h3 className="relative text-xl sm:text-3xl md:text-5xl lg:text-[62px] text-white p-4 sm:p-6 leading-tight">{post.title}</h3>
          </div>

          <section className="mt-10 flex flex-col lg:flex-row gap-8 lg:gap-10">
            <div className="flex-1">
              {post.introduction && (
                <p className="text-base! sm:text-lg! md:text-xl! lg:text-[24px]! text-black! leading-relaxed">{post.introduction}</p>
              )}
              {post.meta && (
                <div className="bg-[#F6F3F2] border-l-4 border-[var(--primary)] pl-4 mt-6 mb-8">
                  <h3 className="text-lg! sm:text-xl! italic md:text-[24px] p-3">"{post.meta}"</h3>
                </div>
              )}
              {post.content && (
                <div
                  className="prose prose-lg max-w-none mt-6 text-gray-800 leading-8
                    prose-headings:text-[var(--primary)] prose-headings:font-bold
                    prose-a:text-[var(--primary)] prose-a:underline
                    prose-blockquote:border-l-4 prose-blockquote:border-[var(--primary)] prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:bg-[#F6F3F2]
                    prose-ul:list-disc prose-ol:list-decimal prose-li:ml-4"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              )}

              {/* Clickable hashtags → navigate to /blog filtered by that tag */}
              {post.hashtags?.length > 0 && (
                <div className="mt-10 pb-10 border-b flex flex-wrap gap-3">
                  {post.hashtags.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => navigate(`/blog?category=${tag.toLowerCase().replace(/\s+/g, "-")}`)}
                      className="rounded-2xl bg-[var(--bg-section)] px-3 py-2 text-sm text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white transition-colors duration-200"
                    >
                      #{tag}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="flex flex-col gap-2 w-full items-center lg:max-w-[250px]">
              <div className="w-[50px] h-[50px] rounded-full bg-[var(--primary)] flex items-center justify-center">
                <span className="text-white text-lg font-bold">S</span>
              </div>
              <h4 className="text-lg sm:text-[20px] font-bold">AUTHOR</h4>
              <h3>So-Nyah Editorial</h3>
              {formattedDate && (
                <>
                  <h4 className="mt-5 text-lg sm:text-[20px] font-bold">PUBLISHED ON</h4>
                  <p>{formattedDate}</p>
                </>
              )}
              <h4 className="mt-5 text-lg sm:text-[20px] font-bold">SHARE THIS ARTICLE</h4>
              <ShareButton title={post.title} url={window.location.href} />
              <button onClick={() => navigate("/blog")} className="mt-6 text-sm text-[var(--primary)] underline hover:opacity-80">
                ← Back to all articles
              </button>
            </div>
          </section>

          {/* Newsletter */}
        <section className="mt-12 sm:mt-14 lg:mt-16">
          <div className="relative overflow-hidden rounded-[28px] bg-[var(--primary)] px-5 sm:px-8 md:px-10 lg:px-14 py-8 sm:py-10 lg:py-12 text-white">
            <div className="absolute top-0 right-0 w-[180px] sm:w-[240px] h-[180px] sm:h-[240px] bg-white/10 rounded-full blur-3xl -translate-y-1/3 translate-x-1/4 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[160px] sm:w-[220px] h-[160px] sm:h-[220px] bg-white/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />
            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div className="max-w-[620px]">
                <span className="inline-block bg-white/15 border border-white/20 rounded-full px-4 py-2 text-xs sm:text-sm tracking-wide uppercase mb-4">Newsletter</span>
                <h2 className="text-[28px] sm:text-[34px] md:text-[40px] lg:text-[46px] font-semibold leading-tight">Get fresh cleaning insights delivered weekly.</h2>
                <p className="mt-4 text-sm sm:text-base md:text-lg text-white/85! leading-7 max-w-[560px]">Subscribe to receive practical cleaning tips, wellness-focused articles, eco-friendly ideas, and updates from So-nyah Cleaners straight to your inbox.</p>
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
                  <p className="text-[12px] sm:text-sm text-[#666] mt-3 px-1 leading-6">By subscribing, you agree to receive email updates from So-Nyah Cleaners.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        </section>
      )}

      {/* Related posts */}
      {!loading && related.length > 0 && (
        <section className="mt-20">
          <p className="text-[var(--primary)]!">CONTINUE READING</p>
          <div className="flex sm:flex-row sm:items-center sm:justify-between justify-between w-full gap-4 whitespace-nowrap">
            <h3 className="text-lg! lg:text-3xl! sm:text-xl md:text-[36px] font-bold whitespace-nowrap">You Might Also Like</h3>
            <button onClick={() => navigate("/blog")} className="flex items-center gap-3 transition-all duration-300 hover:translate-x-[3px] group whitespace-nowrap">
              <span className="text-[var(--primary)] font-bold whitespace-nowrap">View all Articles</span>
              <img src={expand} className="transition-all duration-300 group-hover:scale-110" alt=">" />
            </button>
          </div>

          <div className="overflow-x-auto pt-6 sm:pt-8 lg:pt-10 scrollbar-hide">
            <div className="grid grid-flow-col auto-cols-[260px] sm:auto-cols-[280px] md:auto-cols-[300px] lg:auto-cols-[320px] gap-6 lg:gap-10">
              {related.map((article) => (
                <div key={article.id} onClick={() => navigate(`/blog/${article.id}`)}
                  className="border border-[#0000001a] rounded-2xl overflow-hidden bg-white transition-all duration-300 hover:-translate-y-2 hover:border-[var(--primary)] group cursor-pointer">
                  <div className="w-full h-[180px] md:h-[190px] overflow-hidden bg-gray-100">
                    {article.image_url ? (
                      <img src={article.image_url} alt={article.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gray-100">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#d1d5db" strokeWidth="1.5">
                          <rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/>
                        </svg>
                      </div>
                    )}
                  </div>
                  <div className="p-6 sm:p-7 lg:p-8 flex flex-col gap-3">
                    <div className="flex flex-wrap gap-1">
                      {article.hashtags?.slice(0, 1).map((tag) => (
                        <button key={tag}
                          onClick={(e) => { e.stopPropagation(); navigate(`/blog?category=${tag.toLowerCase().replace(/\s+/g, "-")}`); }}
                          className="text-[10px] uppercase tracking-wide font-medium px-2 py-0.5 rounded-full bg-[rgba(246,243,242,1)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white transition-colors">
                          {tag}
                        </button>
                      ))}
                    </div>
                    <h4 className="text-base sm:text-lg font-bold group-hover:text-[var(--primary)] line-clamp-2">{article.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default BlogDetail;