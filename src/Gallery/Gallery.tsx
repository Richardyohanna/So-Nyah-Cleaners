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

import yaz1 from "../assets/yaz1.jpeg";
import yaz2 from "../assets/yaz2.jpeg";
import yaz3 from "../assets/yaz3.jpeg";
import yaz4 from "../assets/yaz4.jpeg";
import yaz5 from "../assets/yaz5.jpeg";
import yaz6 from "../assets/yaz6.jpeg";
import yaz7 from "../assets/yaz7.jpeg";
import yaz8 from "../assets/yaz8.jpeg";
import yaz9 from "../assets/yaz9.jpeg";
// import yaz10 from "../assets/yaz10.jpeg";
// import yaz1 from "../assets/yaz1.jpeg";



import SEO from "../component/SEO";

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
  "(EHCON) The Environmental Health Council of Nigeria"
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

function GalleryCard({ item, index, onClick }: { item: GalleryItem; index: number; onClick: () => void }) {
  const isVideo = item.mediaType === "video";
  // Stagger within each row of 4 by index mod 4
  const rowDelay = (index % 4) * 80;

  return (
    <button
      type="button"
      data-gallery-card
      onClick={onClick}
      aria-label={`${isVideo ? "Watch video" : "View image"}: ${item.title}`}
      className="group relative block w-full overflow-hidden border border-[#00000014] bg-white text-left shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl focus-visible:outline-4 focus-visible:outline-(--primary) focus-visible:outline-offset-2"
      style={{
        opacity: 0,
        transform: "translateY(36px)",
        transition: `opacity 0.6s ease ${rowDelay}ms, transform 0.6s ease ${rowDelay}ms, box-shadow 0.5s ease`,
      }}
    >
      <img src={expand} alt="" aria-hidden="true" className="absolute right-0 z-30 shrink-0 bg-white p-1" />
      <div className="relative h-115 overflow-hidden">
        <img
          src={isVideo ? item.poster : item.image}
          alt={isVideo ? "" : item.title}
          loading="lazy"
          decoding="async"
          className="inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
        />
        {isVideo && (
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center" aria-hidden="true">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-black/50">
              <div
                className="ml-1 h-0 w-0"
                style={{
                  borderTop: "9px solid transparent",
                  borderBottom: "9px solid transparent",
                  borderLeft: "14px solid white",
                }}
              />
            </div>
          </div>
        )}
      </div>
    </button>
  );
}

const videoUrl = (filename: string) =>
  `${import.meta.env.BASE_URL}videos/optimized/${encodeURIComponent(filename)}`;
const posterUrl = (filename: string) =>
  `${import.meta.env.BASE_URL}videos/posters/${encodeURIComponent(filename)}`;

// ── Gallery items data (each tagged with a category) ─────────────────────────
const galleryItems: GalleryItem[] = [
        {
  type: "single",
  mediaType: "video",
  video: videoUrl("IMG_1469.mp4"),
  poster: posterUrl("IMG_1469.webp"),
  title: "Prime Environment Cleaners Network Association (PECNA) Award Night",
  category: "Prime Environment Cleaners Network Association (PECNA) Award Night",
  }, 
  {
  type: "single",
  mediaType: "video",
  video: videoUrl("IMG_2304.mp4"),
  poster: posterUrl("IMG_2304.webp"),
  title: "Prime Environment Cleaners Network Association (PECNA) Award Night",
  category: "Prime Environment Cleaners Network Association (PECNA) Award Night",
  }, 
  {
  type: "single",
  mediaType: "video",
  video: videoUrl("Space Care.mp4"),
  poster: posterUrl("Space Care.webp"),
  title: "Space Care",
  category: "Space Care",
  },

    {
  type: "single",
  mediaType: "video",
  video: videoUrl("upholstery.mp4"),
  poster: posterUrl("upholstery.webp"),
  title: "Upholstery",
  category: "Upholstery Cleaning",
  },
  { type: "single", image: after, title: "Office Cleaning", category: "Space Care" },
  { type: "single", image: after2, title: "Residential Cleaning", category: "Space Care" },
  //  { type: "single", image: yaz10, title: "(EHCON) The Environmental Health Council of Nigeria", category: "(EHCON) The Environmental Health Council of Nigeria" },
  { type: "single", image: after1, title: "Compound Maintenance", category: "Church Cleaning Charity Project" },
   { type: "single", image: yaz9, title: "(EHCON) The Environmental Health Council of Nigeria", category: "(EHCON) The Environmental Health Council of Nigeria" },
  { type: "single", image: teamAtwork6, title: "Space Care", category: "Space Care" },
  { type: "single", image: teamAtwork5, title: "Fumigation", category: "Fumigation" },
   { type: "single", image: yaz8, title: "(EHCON) The Environmental Health Council of Nigeria", category: "(EHCON) The Environmental Health Council of Nigeria" },
  //{ type: "single", image: teamAtwork4, title: "Event Management", category: "Event Management" },
  { type: "single", image: teamAtwork3, title: "Space Care", category: "Space Care" },
   { type: "single", image: yaz7, title: "(EHCON) The Environmental Health Council of Nigeria", category: "(EHCON) The Environmental Health Council of Nigeria" },
  { type: "single", image: fumigation2, title: "Fumigation", category: "Fumigation" },
   { type: "single", image: yaz6, title: "(EHCON) The Environmental Health Council of Nigeria", category: "(EHCON) The Environmental Health Council of Nigeria" },
  { type: "single", image: postConstruction2, title: "Post Construction Cleaning", category: "Post Construction" },
  { type: "single", image: teamAtwork2, title: "Space Care", category: "Space Care" },

  { type: "single", image: yaz5, title: "(EHCON) The Environmental Health Council of Nigeria", category: "(EHCON) The Environmental Health Council of Nigeria" },
  { type: "single", image: postConstruction1, title: "Post Construction Cleaning", category: "Post Construction" },
  { type: "single", image: fumigation3, title: "Fumigation", category: "Fumigation" },
  { type: "single", image: teamAtwork, title: "Church Cleaning Charity Projecte", category: "Church Cleaning Charity Project" },
  { type: "single", image: team, title: "Church Cleaning Charity Project", category: "Church Cleaning Charity Project" },
   { type: "single", image: yaz4, title: "(EHCON) The Environmental Health Council of Nigeria", category: "(EHCON) The Environmental Health Council of Nigeria" },
  { type: "single", image: upholstery, title: "Upholstery Cleaning", category: "Upholstery Cleaning" },
  //{ type: "single", image: fumigation, title: "Fumigation", category: "Fumigation" },
  { type: "single", image: postConstruction3, title: "Post Construction Cleaning", category: "Post Construction" },
  { type: "single", image: fumigation1, title: "Fumigation", category: "Fumigation" },

   { type: "single", image: yaz1, title: "(EHCON) The Environmental Health Council of Nigeria", category: "(EHCON) The Environmental Health Council of Nigeria" },
 { type: "single", image: yaz2, title: "(EHCON) The Environmental Health Council of Nigeria", category: "(EHCON) The Environmental Health Council of Nigeria" },
  { type: "single", image: yaz3, title: "(EHCON) The Environmental Health Council of Nigeria", category: "(EHCON) The Environmental Health Council of Nigeria" },
  { type: "single", image: eventmanagement, title: "Event Management", category: "Event Management" },
 // { type: "single", image: eventcleaningVideo, title: "Event Management", category: "Event Management" },
 {
  type: "single",
  mediaType: "video",
  video: videoUrl("eventcleaningvideo.mp4"),
  poster: posterUrl("eventcleaningvideo.webp"),
  title: "Event Cleaning",
  category: "Event Management",
  }, 
   {
  type: "single",
  mediaType: "video",
  video: videoUrl("eventManagementVid1.mp4"),
  poster: posterUrl("eventManagementVid1.webp"),
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
   {
  type: "single",
  mediaType: "video",
  video: videoUrl("eventManagementVid2.mp4"),
  poster: posterUrl("eventManagementVid2.webp"),
  title: "Event Cleaning",
  category: "Event Management",
  }, 
  { type: "single", image: church4, title: "Church Cleaning Charity Project", category: "Church Cleaning Charity Project" },
  { type: "single", image: postConstruction7, title: "Post Construction Cleaning", category: "Post Construction" },
  { type: "single", image: church5, title: "Church Cleaning Charity Project", category: "Church Cleaning Charity Project" },
  { type: "single", image: postConstruction8, title: "Post Construction Cleaning", category: "Post Construction" },
   {
  type: "single",
  mediaType: "video",
  video: videoUrl("eventManagementVid3.mp4"),
  poster: posterUrl("eventManagementVid3.webp"),
  title: "Event Cleaning",
  category: "Event Management",
  }, 
  { type: "single", image: pecna1, title: "Prime Environment Cleaners Network Association (PECNA) Award Night", category: "Prime Environment Cleaners Network Association (PECNA) Award Night" },
  { type: "single", image: church_charity, title: "Church Cleaning Charity Project", category: "Church Cleaning Charity Project" },
  { type: "single", image: pecna2, title: "Prime Environment Cleaners Network Association (PECNA) Award Night", category: "Prime Environment Cleaners Network Association (PECNA) Award Night" },
  { type: "single", image: pecna3, title: "Prime Environment Cleaners Network Association (PECNA) Award Night", category: "Prime Environment Cleaners Network Association (PECNA) Award Night" },

];

// ── Component ────────────────────────────────────────────────────────────────
const Gallery = () => {
  const [expandedGalleryItem, setExpandedGalleryItem] = useState<GalleryItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const galleryGridRef = useRef<HTMLDivElement>(null);
  const modalVideoRef = useRef<HTMLVideoElement>(null);

  // Only show categories that actually have items, plus "All"
  const availableCategories = CATEGORIES.filter(
    (cat) => cat === "All" || galleryItems.some((item) => item.category === cat)
  );

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  useEffect(() => {
    const grid = galleryGridRef.current;
    if (!grid) return;

    const cards = grid.querySelectorAll<HTMLElement>("[data-gallery-card]");
    if (!("IntersectionObserver" in window)) {
      cards.forEach((card) => {
        card.style.opacity = "1";
        card.style.transform = "translateY(0px)";
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const card = entry.target as HTMLElement;
            card.style.opacity = "1";
            card.style.transform = "translateY(0px)";
            observer.unobserve(card);
          }
        });
      },
      { threshold: 0.1, rootMargin: "300px 0px 200px 0px" }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, [activeCategory]);

  useEffect(() => {
    const video = modalVideoRef.current;
    if (!video) return;

    video.play().catch(() => undefined);
    return () => {
      video.pause();
    };
  }, [expandedGalleryItem]);

  useEffect(() => {
    if (!expandedGalleryItem) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setExpandedGalleryItem(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [expandedGalleryItem]);

  return (
    <>

    <SEO
      title="Cleaning Projects & Gallery | So-nyah Cleaners"
      description="View cleaning projects, before-and-after results and professional cleaning work completed by So-nyah Cleaners."
    />

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
          <div ref={galleryGridRef} className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8 xl:grid-cols-4">
            {filteredItems.map((item, index) => (
              <GalleryCard
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
            role="dialog"
            aria-modal="true"
            aria-labelledby="gallery-modal-title"
          >
            <div
              className="relative bg-white  max-w-6xl w-full max-h-[90vh] overflow-auto p-4 sm:p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setExpandedGalleryItem(null)}
                aria-label="Close preview"
                className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center bg-[var(--primary)] text-xl font-bold text-white transition-all duration-300 hover:scale-105 focus-visible:outline-4 focus-visible:outline-white"
              >
                ×
              </button>
              <h3 id="gallery-modal-title" className="mb-5 pr-12 text-xl font-bold text-[var(--primary)] sm:text-2xl">
                {expandedGalleryItem.title}
              </h3>

              <div className=" overflow-hidden">
                {expandedGalleryItem.mediaType === "video" ? (
                  <video
                    key={expandedGalleryItem.video}
                    ref={modalVideoRef}
                    src={expandedGalleryItem.video}
                    poster={expandedGalleryItem.poster}
                    controls
                    playsInline
                    preload="metadata"
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
