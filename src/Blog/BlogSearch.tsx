// src/pages/BlogSearch.tsx
import { useRef } from "react";

export type Category = {
  name: string;
  slug: string;
};

export const categories: Category[] = [
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

interface BlogSearchProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  activeCategory: string;
  onCategoryChange: (slug: string) => void;
}

const BlogSearch = ({
  searchQuery,
  onSearchChange,
  activeCategory,
  onCategoryChange,
}: BlogSearchProps) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const handleWheelScroll = (e: React.WheelEvent<HTMLDivElement>) => {
    if (!scrollRef.current) return;
    e.preventDefault();
    scrollRef.current.scrollLeft += e.deltaY;
  };

  return (
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
      {/* Search input */}
      <div className="relative shrink-0 w-full lg:w-[380px] xl:w-[420px]">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className="text-[var(--primary)]/50"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </div>

        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search for an article..."
          className="
            bg-white
            pl-10 pr-10
            rounded-2xl sm:rounded-3xl
            h-[54px] sm:h-[58px]
            w-full
            outline-none
            text-[var(--primary)]
            placeholder:text-[var(--primary)]/60
            text-sm sm:text-base
          "
        />

        {/* Clear button */}
        {searchQuery && (
          <button
            onClick={() => onSearchChange("")}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--primary)]/40 hover:text-[var(--primary)] transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        )}
      </div>

      {/* Category pills */}
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
              onClick={() => onCategoryChange(category.slug)}
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
  );
};

export default BlogSearch;