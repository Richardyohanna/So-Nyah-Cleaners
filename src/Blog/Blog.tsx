import { useRef, useState } from "react";

import blog1 from "../assets/blog1.png";
import blog2 from "../assets/blog2.png";
import blog3 from "../assets/blog3.png";

import back from "../assets/icons8-less-than-50.png";
import next from "../assets/icons8-greater-than-50.png";

type Category = {
  name: string;
  slug: string;
};

const categories: Category[] = [
  { name: "All", slug: "all" },
  { name: "Cleaning Tips", slug: "cleaning-tips" },
  { name: "Product Reviews", slug: "product-reviews" },
  { name: "Company News", slug: "company-news" },
  { name: "Customer Stories", slug: "customer-stories" },
  { name: "Seasonal Cleaning", slug: "seasonal-cleaning" },
  { name: "Eco-Friendly", slug: "eco-friendly" },
  { name: "Organizational Tips", slug: "organizational-tips" },
  { name: "DIY Cleaning", slug: "diy-cleaning" },
  { name: "Health & Safety", slug: "health-safety" },
  { name: "Special Offers", slug: "special-offers" },
  { name: "Events & Community", slug: "events-community" },
  { name: "Behind the Scenes", slug: "behind-the-scenes" },
  { name: "Employee Spotlights", slug: "employee-spotlights" },
  { name: "Sustainability", slug: "sustainability" },
  { name: "Customer Q&A", slug: "customer-qa" },
  { name: "Cleaning Myths", slug: "cleaning-myths" },
];

type BlogItem = {
  id: number;
  category: string;
  title: string;
  article: string;
  image: string;
  aurthor: string;
  aurthor_image: string;
};

const blogs: BlogItem[] = [
  {
    id: 1,
    category: "GREEN LIVING",
    title: "5 Eco-Friendly Cleaning Tips For Abuja Homes",
    article: `Protect your home and the city's ecosystem with these simple,
              effective botanical alternatives to harsh chemicals.`,
    image: blog1,
    aurthor: "So-Nyah Editorial",
    aurthor_image: "",
  },
  {
    id: 2,
    category: "GREEN LIVING",
    title: "5 Eco-Friendly Cleaning Tips For Abuja Homes",
    article: `Protect your home and the city's ecosystem with these simple,
              effective botanical alternatives to harsh chemicals.`,
    image: blog2,
    aurthor: "So-Nyah Editorial",
    aurthor_image: "",
  },
  {
    id: 3,
    category: "GREEN LIVING",
    title: "5 Eco-Friendly Cleaning Tips For Abuja Homes",
    article: `Protect your home and the city's ecosystem with these simple,
              effective botanical alternatives to harsh chemicals.`,
    image: blog3,
    aurthor: "So-Nyah Editorial",
    aurthor_image: "",
  },
  {
    id: 4,
    category: "GREEN LIVING",
    title: "5 Eco-Friendly Cleaning Tips For Abuja Homes",
    article: `Protect your home and the city's ecosystem with these simple,
              effective botanical alternatives to harsh chemicals.`,
    image: blog1,
    aurthor: "So-Nyah Editorial",
    aurthor_image: "",
  },
  {
    id: 5,
    category: "GREEN LIVING",
    title: "5 Eco-Friendly Cleaning Tips For Abuja Homes",
    article: `Protect your home and the city's ecosystem with these simple,
              effective botanical alternatives to harsh chemicals.`,
    image: blog1,
    aurthor: "So-Nyah Editorial",
    aurthor_image: "",
  },
  {
    id: 6,
    category: "GREEN LIVING",
    title: "5 Eco-Friendly Cleaning Tips For Abuja Homes",
    article: `Protect your home and the city's ecosystem with these simple,
              effective botanical alternatives to harsh chemicals.`,
    image: blog2,
    aurthor: "So-Nyah Editorial",
    aurthor_image: "",
  },
  {
    id: 7,
    category: "GREEN LIVING",
    title: "5 Eco-Friendly Cleaning Tips For Abuja Homes",
    article: `Protect your home and the city's ecosystem with these simple,
              effective botanical alternatives to harsh chemicals.`,
    image: blog3,
    aurthor: "So-Nyah Editorial",
    aurthor_image: "",
  },
  {
    id: 8,
    category: "GREEN LIVING",
    title: "5 Eco-Friendly Cleaning Tips For Abuja Homes",
    article: `Protect your home and the city's ecosystem with these simple,
              effective botanical alternatives to harsh chemicals.`,
    image: blog1,
    aurthor: "So-Nyah Editorial",
    aurthor_image: "",
  },
];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const handleWheelScroll = (e: React.WheelEvent<HTMLDivElement>) => {
    if (!scrollRef.current) return;
    e.preventDefault();
    scrollRef.current.scrollLeft += e.deltaY;
  };

  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-10 py-8 sm:py-10 bg-white pb-16 sm:pb-20 overflow-x-hidden">
      <section
        id="searchHeader"
        className="
          bg-[rgba(246,243,242,1)]
          backdrop-blur-md
          rounded-2xl sm:rounded-3xl
          flex flex-col lg:flex-row
          lg:items-center
          gap-4 sm:gap-5
          p-4 sm:p-5
          w-full max-w-full
        "
      >
        <input
          type="text"
          placeholder="Search for an article..."
          className="
            bg-white
            px-4 sm:px-5
            rounded-2xl sm:rounded-3xl
            h-[54px] sm:h-[58px]
            w-full lg:w-[380px] xl:w-[420px]
            shrink-0
            outline-none
            text-[var(--primary)]
            placeholder:text-[var(--primary)]/60
          "
        />

        <div
          ref={scrollRef}
          onWheel={handleWheelScroll}
          className="
            flex gap-3 w-full min-w-0
            overflow-x-auto overflow-y-hidden
            whitespace-nowrap
            scroll-smooth
            scrollbar-hide
          "
        >
          {categories.map((category) => {
            const isActive = activeCategory === category.slug;

            return (
              <button
                key={category.slug}
                onClick={() => setActiveCategory(category.slug)}
                className={`
                  shrink-0 rounded-full px-4 sm:px-5 py-2.5 border text-sm sm:text-base
                  transition-all duration-300
                  ${
                    isActive
                      ? "bg-[var(--primary)] text-white border-[var(--primary)]"
                      : "bg-white text-[var(--primary)] border-[var(--primary)]/15 hover:bg-[var(--primary)] hover:text-white"
                  }
                `}
              >
                {category.name}
              </button>
            );
          })}
        </div>
      </section>

      <section id="blogs" className="mt-8 sm:mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
          {blogs.map((article) => (
            <div
              key={article.id}
              className="w-full cursor-pointer border border-[#0000001a] rounded-2xl overflow-hidden bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-[var(--primary)] group"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-[200px] sm:h-[220px] md:h-[210px] lg:h-[220px] object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="p-5 sm:p-6 lg:p-7 flex flex-col gap-3 min-h-[240px]">
                <h5 className="text-[var(--text-sub-h)] transition-colors duration-300 group-hover:text-[var(--primary)] text-xs sm:text-sm tracking-wide">
                  {article.category}
                </h5>

                <h4 className="text-[18px] sm:text-[20px] lg:text-[22px] font-bold leading-snug transition-colors duration-300 group-hover:text-[var(--primary)]">
                  {article.title}
                </h4>

                <p className="transition-colors duration-300 group-hover:text-[#555] text-sm sm:text-base leading-7 line-clamp-3">
                  {article.article}
                </p>

                <div className="flex gap-3 items-center mt-auto pt-2">
                  <div className="w-10 h-10 rounded-full bg-[rgba(246,243,242,1)] flex items-center justify-center shrink-0 overflow-hidden">
                    {article.aurthor_image ? (
                      <img
                        src={article.aurthor_image}
                        alt={article.aurthor}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                    ) : (
                      <span className="text-[var(--primary)] text-sm font-semibold">
                        S
                      </span>
                    )}
                  </div>

                  <p className="transition-colors duration-300 group-hover:text-[var(--primary)] text-sm sm:text-base">
                    By {article.aurthor}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <section className="flex gap-3 sm:gap-5 justify-center items-center mt-10 sm:mt-12 flex-wrap">
          <button className="rounded-full border border-[var(--primary)] w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center transition-all duration-300 hover:bg-[var(--primary)] hover:scale-105 group">
            <img
              src={back}
              alt="back"
              className="w-4 h-4 sm:w-5 sm:h-5 group-hover:brightness-0 group-hover:invert"
            />
          </button>

          <button className="rounded-full text-white w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-[var(--primary)] font-semibold">
            1
          </button>

          <button className="rounded-full border border-[var(--primary)] w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center transition-all duration-300 hover:bg-[var(--primary)] hover:scale-105 group">
            <img
              src={next}
              alt="next"
              className="w-4 h-4 sm:w-5 sm:h-5 group-hover:brightness-0 group-hover:invert"
            />
          </button>
        </section>

        <section className="mt-12 sm:mt-14 lg:mt-16">
          <div className="relative overflow-hidden rounded-[28px] bg-[var(--primary)] px-5 sm:px-8 md:px-10 lg:px-14 py-8 sm:py-10 lg:py-12 text-white">
            <div className="absolute top-0 right-0 w-[180px] sm:w-[240px] h-[180px] sm:h-[240px] bg-white/10 rounded-full blur-3xl -translate-y-1/3 translate-x-1/4 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[160px] sm:w-[220px] h-[160px] sm:h-[220px] bg-white/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div className="max-w-[620px]">
                <span className="inline-block bg-white/15 border border-white/20 rounded-full px-4 py-2 text-xs sm:text-sm tracking-wide uppercase mb-4">
                  Newsletter
                </span>

                <h2 className="text-[28px] sm:text-[34px] md:text-[40px] lg:text-[46px] font-semibold leading-tight">
                  Get fresh cleaning insights delivered weekly.
                </h2>

                <p className="mt-4 text-sm sm:text-base md:text-lg text-white/85! leading-7 max-w-[560px]">
                  Subscribe to receive practical cleaning tips, wellness-focused
                  articles, eco-friendly ideas, and updates from So-Nyah Cleaners
                  straight to your inbox.
                </p>

                <div className="mt-5 flex flex-wrap gap-3 text-xs sm:text-sm text-white/85">
                  <span className="bg-white/10 border border-white/15 px-3 py-2 rounded-full">
                    Weekly tips
                  </span>
                  <span className="bg-white/10 border border-white/15 px-3 py-2 rounded-full">
                    No spam
                  </span>
                  <span className="bg-white/10 border border-white/15 px-3 py-2 rounded-full">
                    Unsubscribe anytime
                  </span>
                </div>
              </div>

              <div className="w-full lg:max-w-[500px]">
                <div className="bg-white rounded-2xl p-3 sm:p-4 shadow-2xl">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      className="h-[52px] sm:h-[56px] px-4 sm:px-5 rounded-xl bg-[rgba(246,243,242,1)] w-full outline-none text-[var(--primary)] placeholder:text-[var(--primary)]/60 text-sm sm:text-base"
                    />

                    <button className="h-[52px] sm:h-[56px] px-6 sm:px-7 rounded-xl bg-[var(--primary)] text-white font-medium transition-all duration-300 hover:opacity-90 hover:scale-[1.02] whitespace-nowrap">
                      Subscribe
                    </button>
                  </div>

                  <p className="text-[12px] sm:text-sm text-[#666] mt-3 px-1 leading-6">
                    By subscribing, you agree to receive email updates from
                    <br />
                    So-Nyah Cleaners.
                  </p>
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