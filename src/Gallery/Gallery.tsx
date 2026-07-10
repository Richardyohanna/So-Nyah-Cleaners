import { useEffect, useRef, useState } from "react";

// import before1 from "../assets/enhanced-bg2.png";
import after1 from "../assets/enhanced-bg1.png";

import after from "../assets/after 1.jpeg";
// import before from "../assets/before 1.jpeg";
import after2 from "../assets/after 2.jpeg";
// import before2 from "../assets/before 2.jpeg";
import expand from "../assets/expand.png";

import teamAtwork from "../assets/teamAtWork.jpeg";
import teamAtwork2 from "../assets/teamAtWork 2.jpeg";
import teamAtwork3 from "../assets/teamAtWork 3.jpeg";
import teamAtwork4 from "../assets/teamAtWork 4.jpeg";
import teamAtwork5 from "../assets/teamAtWork 5.jpeg";
import teamAtwork6 from "../assets/teamAtWork 6.jpeg";

import pecna1  from "../assets/PECNA AWARD1.jpeg";
import pecna2 from  "../assets/PECNA AWARD2.jpeg";
import pecna3 from "../assets/PECNA AWARD3.png";


import church1 from "../assets/church1.png";
import church2 from "../assets/church2.png";
import church3 from "../assets/church3.png";
import church4 from "../assets/church4.png"
import church5 from "../assets/church5.png"

import team from "../assets/team.jpeg";

import upholstery from "../assets/Upholstery.jpeg";
import fumigation from "../assets/fumigation hero.png";
import eventmanagement from "../assets/Event Management.jpeg";
import gardening from "../assets/Gardening Care.jpeg";
import facilitymanagement from "../assets/Facility Management.jpeg";
import postconstruction from "../assets/Post Construction.jpeg";

// ── Scroll animation helpers ─────────────────────────────────────────────────
const fadeUp = (visible: boolean, delay = 0): React.CSSProperties => ({
  opacity: visible ? 1 : 0,
  transform: visible ? "translateY(0px)" : "translateY(36px)",
  transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
});

// ── Categories ────────────────────────────────────────────────────────────────
const CATEGORIES = [
  "All",
  "Interior Space Care",
  "Fumigation",
  "Upholstery Cleaning",
  "Event Management",
  "Gardening Care",
  "Facility Management",
  "Post Construction",
  "Church Cleaning Charity Project",
  "Prime Environment Cleaners Network Association (PECNA) Award Night",
  
] as const;

type Category = (typeof CATEGORIES)[number];

// ── Per-card animated wrapper — each card self-observes ──────────────────────
type GalleryItem = {
  type: string;
  before?: string;
  after?: string;
  image?: string;
  title: string;
  category: Category;
};

function AnimatedGalleryCard({
  item,
  index,
  onClick,
}: {
  item: GalleryItem;
  index: number;
  onClick: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -20px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Stagger within each row of 4 by index mod 4
  const rowDelay = (index % 4) * 80;

  return (
    <div
      ref={ref}
      onClick={onClick}
      className="group bg-white  overflow-hidden border border-[#00000014] shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
      style={fadeUp(isVisible, rowDelay)}
    >
       <img src={expand} alt="expand" className="absolute z-30 right-0 bg-white p-1 shrink-0" />
      {/* {item.type === "before-after" ? (
        <div className="flex flex-row h-[220px] md:h-[240px] overflow-hidden relative">
          <div className="relative w-1/2 h-full overflow-hidden">
            <img
              src={item.before}
              alt="Before"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute top-3 left-3 bg-black/70 text-white text-xs sm:text-sm px-3 py-1 ">
              Before
            </div>
          </div>
          <div className="relative w-1/2 h-full overflow-hidden">
            <img
              src={item.after}
              alt="After"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute top-3 right-3 bg-[var(--primary)] text-white text-xs sm:text-sm px-3 py-1 ">
              After
            </div>
          </div>
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-white/70 -translate-x-1/2" />
        </div>
      ) : ( */}
        <div className="relative h-[220px] md:h-[240px] overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* <div className="absolute top-3 left-3 bg-[var(--primary)] text-white text-xs sm:text-sm px-3 py-1 ">
            {item.category}
          </div> */}
        </div>
      {/* // )} */}
      {/* <div className="p-5 sm:p-6">
        <h4 className="text-[18px] sm:text-[20px] font-bold text-[var(--primary)]">
          {item.title}
        </h4>
      </div> */}
    </div>
  );
}

// ── Gallery items data (each tagged with a category) ─────────────────────────
const galleryItems: GalleryItem[] = [
  // { type: "before-after", before, after, title: "Office Cleaning", category: "Before & After" },
  // { type: "before-after", before: before1, after: after1, title: "Compound Maintenance", category: "Before & After" },
  // { type: "before-after", before: before2, after: after2, title: "Residential Cleaning", category: "Before & After" },
  { type: "single", image: after, title: "Office Cleaning", category: "Interior Space Care" },
  { type: "single", image: after2, title: "Residential Cleaning", category: "Interior Space Care" },
  { type: "single", image: after1, title: "Compound Maintenance", category: "Interior Space Care" },
  // { type: "single", image: before1, title: "Interior Space Care", category: "Interior Space Care" },
  { type: "single", image: teamAtwork6, title: "Interior Space Care", category: "Interior Space Care" },
  { type: "single", image: teamAtwork5, title: "Fumigation", category: "Fumigation" },
  { type: "single", image: teamAtwork4, title: "Event Management", category: "Event Management" },
  { type: "single", image: teamAtwork3, title: "Interior Space Care", category: "Interior Space Care" },
  { type: "single", image: teamAtwork2, title: "Interior Space Care", category: "Interior Space Care" },
  { type: "single", image: teamAtwork, title: "Interior Space Care", category: "Interior Space Care" },
  { type: "single", image: team, title: "Space Care", category: "Interior Space Care" },
  { type: "single", image: upholstery, title: "Upholstery Cleaning", category: "Upholstery Cleaning" },
  { type: "single", image: fumigation, title: "Fumigation", category: "Fumigation" },
  { type: "single", image: eventmanagement, title: "Event Management", category: "Event Management" },
  { type: "single", image: gardening, title: "Gardening Care", category: "Gardening Care" },
  { type: "single", image: facilitymanagement, title: "Facility Management", category: "Facility Management" },
  { type: "single", image: postconstruction, title: "Post Construction Cleaning", category: "Post Construction" },
  { type: "single", image: church1, title: "Church Cleaning Charity Project", category: "Church Cleaning Charity Project" },
  { type: "single", image: church2, title: "Church Cleaning Charity Project", category: "Church Cleaning Charity Project" },
  { type: "single", image: church3, title: "Church Cleaning Charity Project", category: "Church Cleaning Charity Project" },
  { type: "single", image: church4, title: "Church Cleaning Charity Project", category: "Church Cleaning Charity Project" },
  { type: "single", image: church5, title: "Church Cleaning Charity Project", category: "Church Cleaning Charity Project" }, //Prime Environment Cleaners Network Association (PECNA) Award Night
  { type: "single", image: pecna1, title: "Prime Environment Cleaners Network Association (PECNA) Award Night", category: "Prime Environment Cleaners Network Association (PECNA) Award Night" },
  { type: "single", image: pecna2, title: "Prime Environment Cleaners Network Association (PECNA) Award Night", category: "Prime Environment Cleaners Network Association (PECNA) Award Night" },
  { type: "single", image: pecna3, title: "Prime Environment Cleaners Network Association (PECNA) Award Night", category: "Prime Environment Cleaners Network Association (PECNA) Award Night" },
];

// ── Component ────────────────────────────────────────────────────────────────
const Gallery = () => {
  const [expandedGalleryItem, setExpandedGalleryItem] = useState<GalleryItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  // Only show categories that actually have items, plus "All"
  const availableCategories = CATEGORIES.filter(
    (cat) => cat === "All" || galleryItems.some((item) => item.category === cat)
  );

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <>
      <section className="relative flex items-center justify-center overflow-hidden bg-[var(--primary)] px-4 py-5 sm:px-5 sm:py-6">
        <h3 className="text-white! head text-[32px] sm:text-[38px] lg:text-[48px] tracking-normal! font-bold items-center text-center">
          GALLERY
        </h3>
      </section>

      <section className="bg-white p-4 sm:p-6 md:p-8 lg:p-10">
        {/* Category filter pills */}
        <div className="mb-6 flex flex-wrap justify-center gap-2 sm:mb-8 sm:gap-3 md:gap-4">
          {availableCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 sm:px-6 py-2.5  text-[13px] sm:text-sm font-semibold tracking-wide uppercase transition-all duration-300 border-2 ${
                activeCategory === cat
                  ? "bg-[var(--primary)] text-white border-[var(--primary)]"
                  : "bg-white text-[var(--text)] border-[var(--border)] hover:border-[var(--primary)] hover:text-[var(--primary)]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="overflow-x-auto pt-2 scrollbar-hide">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
            {filteredItems.map((item, index) => (
              <AnimatedGalleryCard
                key={`${activeCategory}-${index}`}
                item={item}
                index={index}
                onClick={() => setExpandedGalleryItem(item)}
              />
            ))}
          </div>

          {filteredItems.length === 0 && (
            <p className="text-center text-[var(--text)]/60 py-16">
              No images in this category yet.
            </p>
          )}
        </div>

        {expandedGalleryItem && (
          <div
            className="fixed inset-0 z-[2000] bg-black/80 flex items-center justify-center p-4 sm:p-6"
            onClick={() => setExpandedGalleryItem(null)}
          >
            <div
              className="relative bg-white  max-w-6xl w-full max-h-[90vh] overflow-auto p-4 sm:p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setExpandedGalleryItem(null)}
                className="absolute top-4 right-4 bg-[var(--primary)] text-white w-10 h-10  flex items-center justify-center text-xl font-bold hover:scale-105 transition-all duration-300"
              >
                ×
              </button>
              <h3 className="text-[var(--primary)] text-xl sm:text-2xl font-bold mb-5 pr-12">
                {expandedGalleryItem.title}
              </h3>

              {/* {expandedGalleryItem.type === "before-after" ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div className="relative  overflow-hidden">
                    <img
                      src={expandedGalleryItem.before}
                      alt="Before"
                      className="w-full max-h-[70vh] object-cover"
                    />
                    <div className="absolute top-3 left-3 bg-black/70 text-white text-sm px-3 py-1 ">
                      Before
                    </div>
                  </div>
                  <div className="relative  overflow-hidden">
                    <img
                      src={expandedGalleryItem.after}
                      alt="After"
                      className="w-full max-h-[70vh] object-cover"
                    />
                    <div className="absolute top-3 right-3 bg-[var(--primary)] text-white text-sm px-3 py-1 ">
                      After
                    </div>
                  </div>
                </div>
              ) : ( */}
                <div className=" overflow-hidden">
                  <img
                    src={expandedGalleryItem.image}
                    alt={expandedGalleryItem.title}
                    className="w-full max-h-[75vh] object-cover"
                  />
                </div>
              {/* )} */}
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Gallery;