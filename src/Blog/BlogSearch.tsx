import { useRef, useState } from "react";

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

const BlogSearch = () => {

const [activeCategory, setActiveCategory] = useState("all");
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
    )

}

export default BlogSearch;