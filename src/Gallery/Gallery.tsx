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
import eventcleaningVideo from "../assets/eventcleaningvideo.mp4";
//import teamAtwork4 from "../assets/teamAtWork 4.jpeg";
import teamAtwork5 from "../assets/teamAtWork 5.jpeg";
import teamAtwork6 from "../assets/teamAtWork 6.jpeg";

import pecna1  from "../assets/PECNA AWARD1.jpeg";
import pecna2 from  "../assets/PECNA AWARD2.jpeg";
import pecna3 from "../assets/PECNA AWARD3.png";

import fumigation2 from "../assets/fumigation1.png";
import fumigation3 from "../assets/fumigation2.png";

import church2 from "../assets/church2.png";
import church3 from "../assets/church3.png";
import church4 from "../assets/church4.png"
import church5 from "../assets/church5.png"

import team from "../assets/team.jpeg";

import upholstery from "../assets/Upholstery.jpeg";

import fumigation1 from "../assets/fumigationImage.jpeg";
import eventmanagement from "../assets/Event Management.jpeg";
import gardening from "../assets/Gardening Care.jpeg";
import facilitymanagement from "../assets/Facility Management.jpeg";
import postconstruction from "../assets/Post Construction.jpeg";

import church_charity from "../assets/church_charity.jpg";

import postConstruction1 from "../assets/post_construction1.jpg";
import postConstruction2 from "../assets/post_construction2.jpg";
import postConstruction3 from "../assets/post_construction3.jpg";
import postConstruction4 from "../assets/post_construction4.jpg";
import postConstruction5 from "../assets/post_construction5.jpg";
import postConstruction6 from "../assets/post_construction6.jpg";
import postConstruction7 from "../assets/post_construction7.jpg";
import postConstruction8 from "../assets/post_construction8.jpg";


import spaceCare from "../assets/Space Care.mp4";
import upholsteryVideo from "../assets/upholstery.mp4";

// Example: import a video the same way you import images.
// Vite/CRA will bundle it and give you a URL string, just like an image import.
// import fumigationClip from "../assets/fumigation-clip.mp4";
// import fumigationClipPoster from "../assets/fumigation-clip-poster.jpeg";

// ── Scroll animation helpers ─────────────────────────────────────────────────
const fadeUp = (visible: boolean, delay = 0): React.CSSProperties => ({
  opacity: visible ? 1 : 0,
  transform: visible ? "translateY(0px)" : "translateY(36px)",
  transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
});

// ── Categories ────────────────────────────────────────────────────────────────
const CATEGORIES = [
  "All",
  "Space Care",
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
  // "image" (default when omitted) or "video"
  mediaType?: "image" | "video";
  before?: string;
  after?: string;
  image?: string;
  // src for a video item
  video?: string;
  // optional thumbnail shown before the video loads/plays; falls back to first frame if omitted
  poster?: string;
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
  const isVideo = item.mediaType === "video";

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

        <div className="relative h-[460px] md:h-[460px] overflow-hidden">
          {isVideo ? (
            <>
              <video
                src={item.video}
                poster={item.poster}
                muted
                loop
                playsInline
                preload="metadata"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                onMouseEnter={(e) => e.currentTarget.play().catch(() => {})}
                onMouseLeave={(e) => {
                  e.currentTarget.pause();
                  e.currentTarget.currentTime = 0;
                }}
              />
              {/* Play badge so it reads as a video in the grid, not a static photo */}
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-black/50 flex items-center justify-center">
                  <div
                    className="w-0 h-0 ml-1"
                    style={{
                      borderTop: "9px solid transparent",
                      borderBottom: "9px solid transparent",
                      borderLeft: "14px solid white",
                    }}
                  />
                </div>
              </div>
            </>
          ) : (
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
            />
          )}
        </div>
    </div>
  );
}

// ── Gallery items data (each tagged with a category) ─────────────────────────
const galleryItems: GalleryItem[] = [
  {
  type: "single",
  mediaType: "video",
  video:spaceCare,
  poster:spaceCare, 
  title: "Space Care",
  category: "Space Care",
  },

    {
  type: "single",
  mediaType: "video",
  video:upholsteryVideo,
  poster:upholsteryVideo, 
  title: "Upholstery",
  category: "Upholstery Cleaning",
  },
  { type: "single", image: after, title: "Office Cleaning", category: "Space Care" },
  { type: "single", image: after2, title: "Residential Cleaning", category: "Space Care" },
  { type: "single", image: after1, title: "Compound Maintenance", category: "Church Cleaning Charity Project" },
  { type: "single", image: teamAtwork6, title: "Space Care", category: "Space Care" },
  { type: "single", image: teamAtwork5, title: "Fumigation", category: "Fumigation" },
  //{ type: "single", image: teamAtwork4, title: "Event Management", category: "Event Management" },
  { type: "single", image: teamAtwork3, title: "Space Care", category: "Space Care" },
  { type: "single", image: fumigation2, title: "Fumigation", category: "Fumigation" },
  { type: "single", image: postConstruction2, title: "Post Construction Cleaning", category: "Post Construction" },
  { type: "single", image: teamAtwork2, title: "Space Care", category: "Space Care" },
  { type: "single", image: postConstruction1, title: "Post Construction Cleaning", category: "Post Construction" },
  { type: "single", image: fumigation3, title: "Fumigation", category: "Fumigation" },
  { type: "single", image: teamAtwork, title: "Church Cleaning Charity Projecte", category: "Church Cleaning Charity Project" },
  { type: "single", image: team, title: "Church Cleaning Charity Project", category: "Church Cleaning Charity Project" },
  { type: "single", image: upholstery, title: "Upholstery Cleaning", category: "Upholstery Cleaning" },
  //{ type: "single", image: fumigation, title: "Fumigation", category: "Fumigation" },
  { type: "single", image: postConstruction3, title: "Post Construction Cleaning", category: "Post Construction" },
  { type: "single", image: fumigation1, title: "Fumigation", category: "Fumigation" },
  { type: "single", image: eventmanagement, title: "Event Management", category: "Event Management" },
 // { type: "single", image: eventcleaningVideo, title: "Event Management", category: "Event Management" },
 {
  type: "single",
  mediaType: "video",
  video:eventcleaningVideo,
  poster:eventcleaningVideo, 
  title: "Event Cleaning",
  category: "Event Management",
  }, 
 { type: "single", image: gardening, title: "Gardening Care", category: "Gardening Care" },
  { type: "single", image: facilitymanagement, title: "Facility Management", category: "Facility Management" },
  { type: "single", image: postconstruction, title: "Post Construction Cleaning", category: "Post Construction" },
  //{ type: "single", image: church1, title: "Church Cleaning Charity Project", category: "Church Cleaning Charity Project" },
  { type: "single", image: postConstruction4, title: "Post Construction Cleaning", category: "Post Construction" },
  { type: "single", image: church2, title: "Church Cleaning Charity Project", category: "Church Cleaning Charity Project" },
  { type: "single", image: postConstruction5, title: "Post Construction Cleaning", category: "Post Construction" },
  { type: "single", image: church3, title: "Church Cleaning Charity Project", category: "Church Cleaning Charity Project" },
  { type: "single", image: postConstruction6, title: "Post Construction Cleaning", category: "Post Construction" },
  { type: "single", image: church4, title: "Church Cleaning Charity Project", category: "Church Cleaning Charity Project" },
  { type: "single", image: postConstruction7, title: "Post Construction Cleaning", category: "Post Construction" },
  { type: "single", image: church5, title: "Church Cleaning Charity Project", category: "Church Cleaning Charity Project" },
  { type: "single", image: postConstruction8, title: "Post Construction Cleaning", category: "Post Construction" },
  { type: "single", image: pecna1, title: "Prime Environment Cleaners Network Association (PECNA) Award Night", category: "Prime Environment Cleaners Network Association (PECNA) Award Night" },
  { type: "single", image: church_charity, title: "Church Cleaning Charity Project", category: "Church Cleaning Charity Project" },
  { type: "single", image: pecna2, title: "Prime Environment Cleaners Network Association (PECNA) Award Night", category: "Prime Environment Cleaners Network Association (PECNA) Award Night" },
  { type: "single", image: pecna3, title: "Prime Environment Cleaners Network Association (PECNA) Award Night", category: "Prime Environment Cleaners Network Association (PECNA) Award Night" },

  // ── Example video entries — drop your imported clip in `video`, add `mediaType: "video"` ──
  // {
  //   type: "single",
  //   mediaType: "video",
  //   video: fumigationClip,
  //   poster: fumigationClipPoster,
  //   title: "Fumigation in Action",
  //   category: "Fumigation",
  // },
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

              <div className=" overflow-hidden">
                {expandedGalleryItem.mediaType === "video" ? (
                  <video
                    src={expandedGalleryItem.video}
                    poster={expandedGalleryItem.poster}
                    controls
                    autoPlay
                    className="w-full max-h-[75vh] object-contain"
                  />
                ) : (
                  <img
                    src={expandedGalleryItem.image}
                    alt={expandedGalleryItem.title}
                    className="w-full max-h-[75vh] object-contain"
                  />
                )}
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Gallery;