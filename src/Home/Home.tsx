
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getServiceBySlug } from "../data/servicesData";
import { usePosts } from "../hooks/usePosts";  

import before1 from "../assets/enhanced-bg2.png";
import after1 from "../assets/enhanced-bg1.png";
import bgCover from "../assets/enhanced-bg3.png";
import bgCover2 from "../assets/enhanced-bg4.png";

import after from "../assets/after 1.jpeg";
import before from "../assets/before 1.jpeg";
import after2 from "../assets/after 2.jpeg";
import before2 from "../assets/before 2.jpeg";

import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedinWhite.png";
import mail from "../assets/mailto.png";

import client1 from "../assets/client1.png";
import client2 from "../assets/client2.png";
import client3 from "../assets/client3.png";
import client4 from "../assets/client4.png";
import client5 from "../assets/client5.png";
import client6 from "../assets/client6.png";
import client7 from "../assets/client7.png";
import client8 from "../assets/client8.png";

import whatsApp from "../assets/whatsApp.png";
import expand from "../assets/expand.png";
import nine9 from "../assets/99.png";
import star from "../assets/star.png";

import teamAtwork from "../assets/teamAtWork.jpeg";
import teamAtwork2 from "../assets/teamAtWork 2.jpeg";
import teamAtwork3 from "../assets/teamAtWork 3.jpeg";
import teamAtwork4 from "../assets/teamAtWork 4.jpeg";
import teamAtwork5 from "../assets/teamAtWork 5.jpeg";
import teamAtwork6 from "../assets/teamAtWork 6.jpeg";
import teamAtwork7 from "../assets/teamAtWork 7.jpeg";
import team from "../assets/team.jpeg";



type Clients = {
  id: number;
  image: string;
  companyName: string;
  logoWidth?: string;
  logoHeight?: string;
};

const clients: Clients[] = [
  { id: 1, image: client1, companyName: "FIRS", logoWidth: "w-full", logoHeight: "h-[90px]" },
  { id: 2, image: client2, companyName: "EFCC", logoWidth: "w-full", logoHeight: "h-[80px]" },
  { id: 3, image: client3, companyName: "NTA", logoWidth: "w-full", logoHeight: "h-[80px]" },
  { id: 4, image: client4, companyName: "", logoWidth: "w-full", logoHeight: "h-[150px]" },
  { id: 5, image: client5, companyName: "", logoWidth: "w-full", logoHeight: "h-[1000px]" },
  { id: 6, image: client6, companyName: "", logoWidth: "w-full", logoHeight: "h-[150px]" },
  { id: 7, image: client7, companyName: "", logoWidth: "w-full", logoHeight: "h-[100px]" },
  { id: 8, image: client8, companyName: "", logoWidth: "w-full", logoHeight: "h-[120px]" },
];

type HeroImage = { id: number; image: string };
const heroImages: HeroImage[] = [
  { id: 1, image: before1 },
  { id: 4, image: after1 },
  { id: 3, image: bgCover },
  { id: 2, image: bgCover2 },
];

type Review = { id: number; review: string; name: string; role: string; image?: string };
const reviews: Review[] = [
  { id: 1, review: "Excellent work! My husband was genuinely surprised when he entered the house even the kids noticed the difference. Truly impressive results.", name: "Asma'u Buba", role: "", image: "" },
  { id: 2, review: "My husband specifically mentioned the depth and thoroughness of the cleaning your team carried out. Thank you for such a detailed job", name: "Pee Dinnah2", role: "", image: "" },
  { id: 3, review: "I would give the service an 8.5 out of 10. This is not due to any dissatisfaction, but rather room for improvement. Overall, I am very satisfied with the service, and my husband shares the same opinion.", name: "Ms. Summi", role: "", image: "" },
];

const HEADER_HEIGHT = 66;

// ── Blog card skeleton ────────────────────────────────────────────────────────
function BlogSkeleton() {
  return (
    <div className="w-[260px] sm:w-[280px] md:w-[300px] lg:w-[320px] border border-[#0000001a] rounded-2xl overflow-hidden bg-white animate-pulse flex-shrink-0">
      <div className="w-full h-[180px] md:h-[190px] bg-gray-200" />
      <div className="p-6 flex flex-col gap-3">
        <div className="h-3 w-20 bg-gray-200 rounded" />
        <div className="h-5 w-4/5 bg-gray-200 rounded" />
        <div className="h-4 w-full bg-gray-200 rounded" />
      </div>
    </div>
  );
}

const Home = () => {
  const navigate = useNavigate();

  const [isBlogGallery, setBlogGallery] = useState("Blog");
  const [reviewStartIndex, setReviewStartIndex] = useState(0);
  const [currentHeroImageIndex, setCurrentHeroImageIndex] = useState(0);

  // ── Fetch latest 4 published posts from Supabase ──────────────────────────
  const { posts: livePosts, loading: postsLoading } = usePosts({ status: "published", limit: 4 });

  const spaceCleaning = getServiceBySlug("space-cleaning");
  const facadeCleaning = getServiceBySlug("post-construction");
  const fumigationCleaning = getServiceBySlug("facade-cleaning");
  const gardening = getServiceBySlug("facility-management");

  const [expandedGalleryItem, setExpandedGalleryItem] = useState<null | {
    type: string; before?: string; after?: string; image?: string; title: string;
  }>(null);

  const [showChatBubble, setShowChatBubble] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowChatBubble(true);
      setTimeout(() => setShowChatBubble(false), 3000);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (heroImages.length <= 1) return;
    const interval = window.setInterval(() => {
      setCurrentHeroImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => window.clearInterval(interval);
  }, []);

  const getVisibleReviews = () => {
    if (reviews.length <= 3) return reviews;
    return [
      reviews[reviewStartIndex % reviews.length],
      reviews[(reviewStartIndex + 1) % reviews.length],
      reviews[(reviewStartIndex + 2) % reviews.length],
    ];
  };

  const nextReviews = () => setReviewStartIndex((prev) => (prev + 1) % reviews.length);
  const prevReviews = () => setReviewStartIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

  useEffect(() => {
    if (reviews.length <= 3) return;
    const interval = window.setInterval(() => {
      setReviewStartIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => window.clearInterval(interval);
  }, []);

  const showNavigation = reviews.length > 3;

  return (
    <div className="overflow-hidden w-full bg-white flex flex-col gap-10 pb-20">

      {/* ── HERO SECTION (unchanged) ─────────────────────────────────────────── */}
      <section id="hero" className="relative overflow-hidden" style={{ minHeight: `calc(100vh - ${HEADER_HEIGHT}px)` }}>
        <div className="absolute inset-0">
          {heroImages.map((item, index) => (
            <img key={item.id} src={item.image} alt={`Hero background ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${index === currentHeroImageIndex ? "opacity-100" : "opacity-0"}`} />
          ))}
          <div className="absolute inset-0 bg-black/20 sm:bg-black/30 lg:bg-black/40" />
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/15 to-transparent sm:from-black/70 sm:via-black/25 lg:from-black/85 lg:via-black/30" />
          </div>
        </div>
        <div className="relative z-10 flex flex-col lg:flex-row justify-center lg:justify-between w-full gap-8 md:gap-10 lg:gap-12 items-start lg:items-center min-h-[calc(100vh-66px)] px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 py-10 md:py-14 lg:py-0">
          <div className="relative mt-2 w-full max-w-[880px] rounded-[32px]">
            <div className="relative z-10">
              <div>
                <h1 className="text-[40px] tracking-normal! sm:text-[54px] md:text-[60px] lg:text-[72px] xl:text-[86px] leading-[1] mt-5 font-bold text-white">
                  Cleaning Spaces,<br /><span>Creating <br />Happy Faces</span>
                </h1>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 mt-6 w-full sm:w-auto">
                  <button onClick={() => navigate(`/contact`)} className="bg-white text-[var(--primary)] px-5 md:px-6 py-3 rounded-2xl shadow-xl font-semibold transition-all duration-300 hover:scale-105 hover:bg-[var(--primary)] hover:text-white w-full sm:w-auto">
                    Schedule a Visit
                  </button>
                  <button onClick={() => navigate(`/services`)} className="bg-transparent text-white! px-5 md:px-6 py-3 rounded-2xl shadow-xl font-semibold transition-all duration-300 hover:scale-105 hover:bg-[var(--primary)] hover:text-white w-full sm:w-auto border-2! border-white! hover:border-transparent!">
                    View Our Services
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row lg:flex-col gap-2 sm:gap-3 md:gap-4 items-center lg:self-center">
           

              <button onClick={()=> window.open('https://www.instagram.com/sonyah_cleaners?utm_source=qr&igsh=MWRtdG9ud3YzNDFoZQ%3D%3D', '_blank')} className="w-[43px] h-[43px] sm:w-[49px] sm:h-[49px] md:w-[52px] md:h-[52px] lg:w-[54px] lg:h-[54px] rounded-full border-[2px] lg:border-[3px] border-white flex items-center justify-center transition-all duration-300 ease-in-out hover:border-[var(--primary)] hover:bg-[var(--primary)] hover:scale-110">
                <img src={instagram} className="w-[25px] h-[25px] sm:w-[29px] sm:h-[29px] md:w-[31px] md:h-[31px] lg:w-[34px] lg:h-[34px] object-contain transition-all duration-300" />
              </button>

              <button onClick={()=> window.open('https://www.linkedin.com/in/uchenna-linda-nzewigbo-b81b8aa1/', '_blank')} className="w-[43px] h-[43px] sm:w-[49px] sm:h-[49px] md:w-[52px] md:h-[52px] lg:w-[54px] lg:h-[54px] rounded-full border-[2px] lg:border-[3px] border-white flex items-center justify-center transition-all duration-300 ease-in-out hover:border-[var(--primary)] hover:bg-[var(--primary)] hover:scale-110">
                <img src={linkedin} className="w-[25px] h-[25px] sm:w-[29px] sm:h-[29px] md:w-[31px] md:h-[31px] lg:w-[34px] lg:h-[34px] object-contain transition-all duration-300" />
              </button>

             <button onClick={()=> window.open('mailto:info@sonyahcleaners.com', '_blank')} className="w-[43px] h-[43px] sm:w-[49px] sm:h-[49px] md:w-[52px] md:h-[52px] lg:w-[54px] lg:h-[54px] rounded-full border-[2px] lg:border-[3px] border-white flex items-center justify-center transition-all duration-300 ease-in-out hover:border-[var(--primary)] hover:bg-[var(--primary)] hover:scale-110">
                <img src={mail} className="w-[25px] h-[25px] sm:w-[29px] sm:h-[29px] md:w-[31px] md:h-[31px] lg:w-[34px] lg:h-[34px] object-contain transition-all duration-300" />
              </button>

          </div>
        </div>
      </section>

      {/* ── SERVICE SECTION (unchanged) ──────────────────────────────────────── */}
      <section id="service" className="mt-20 px-4 sm:px-6 md:px-8 lg:px-10">
        <h3 className="text-[var(--primary)] head text-[32px] sm:text-[38px] md:text-[42px] lg:text-[48px] tracking-normal! font-bold items-center text-center">
          Our Specialized Services
        </h3>
        <div className="mt-10 flex gap-8 md:gap-8 lg:gap-10 justify-center flex-wrap w-full">
          {[spaceCleaning, facadeCleaning, fumigationCleaning, gardening].map((service, idx) => (
            service && (
              <div key={idx} onClick={() => navigate(`/service/${service.slug}`)}
                className="w-full sm:max-w-[323px] md:max-w-[340px] lg:max-w-[323px] flex flex-col cursor-pointer group transition-all duration-300 hover:-translate-y-2">
                <div className="overflow-hidden rounded-2xl">
                  <img src={service.heroImage} alt="service" className="rounded-2xl h-[260px] sm:h-[320px] md:h-[300px] lg:max-h-[360px] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="flex flex-row mt-3 gap-4 sm:gap-5">
                  <h3 className="text-3xl sm:text-4xl text-[var(--service-number)] shrink-0 transition-colors duration-300 group-hover:text-[var(--primary)]">0{service.id}</h3>
                  <div className="w-full min-w-0 gap-3 flex flex-col items-start">
                    <h4 className="text-base sm:text-lg font-bold transition-colors duration-300 group-hover:text-[var(--primary)]">{service.title}</h4>
                    <p className="break-words transition-colors duration-300 group-hover:text-[#555] line-clamp-3 text-sm sm:text-base">{service.shortDescription}</p>
                    <button className="text-[var(--primary)] transition-all duration-300 hover:underline group-hover:translate-x-1">Read More...</button>
                  </div>
                </div>
              </div>
            )
          ))}
          <button onClick={() => navigate("/services")} className="flex flex-row items-center justify-between gap-3 h-fit self-start md:self-center lg:self-start transition-all duration-300 hover:translate-x-[3px] group">
            <span className="text-[var(--primary)] font-bold">View all Services</span>
            <img src={expand} alt="expand" className="shrink-0 transition-all duration-300 group-hover:scale-110" />
          </button>
        </div>
      </section>

      {/* ── OUR CLIENTS (unchanged) ──────────────────────────────────────────── */}
      <section id="clients" className="w-full mt-25 px-4 sm:px-6 md:px-8 lg:px-10 py-10 bg-[var(--primary)]">
        <h3 className="text-white! tracking-normal! head text-[32px] sm:text-[38px] md:text-[42px] lg:text-[48px] font-bold items-center text-center">Our Clients</h3>
        <h4 className="text-center text-white text-sm sm:text-base mt-2">Trust by most recognized names</h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-8 gap-y-8 gap-x-6 bg-white mt-10 place-items-center p-4 sm:p-6 md:p-8 rounded-2xl">
          {clients.map((client) => (
            <div key={client.id} className="w-full flex items-center justify-center">
              <div className="w-[120px] sm:w-[130px] md:w-[140px] h-[90px] md:h-[100px] flex items-center justify-center">
                <img src={client.image} alt={client.companyName} className={`object-contain transition-all duration-300 hover:scale-105 ${client.logoWidth || "w-[100px]"} ${client.logoHeight || "h-[70px]"}`} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── REVIEWS (unchanged) ──────────────────────────────────────────────── */}
      <section id="reviews" className="mt-20 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20">
        <h3 className="text-[var(--primary)] tracking-normal! head text-[32px] sm:text-[38px] md:text-[42px] lg:text-[48px] leading-[1] font-bold items-center text-center">Voices Of Contentment</h3>
        <h4 className="text-center text-[var(--accent-text)] text-sm sm:text-base mt-2">Trust earned through every polished surface.</h4>
        <div className="mt-8 flex justify-center items-center gap-2 sm:gap-4">
          
          {/* ⬅️ PREV BUTTON */}
          {showNavigation && (
            <button
              onClick={prevReviews}
              className="hidden md:flex w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-[#00000018] items-center justify-center text-[var(--primary)] transition-all duration-300 hover:bg-[var(--primary)] hover:text-white shrink-0"
            >
              ←
            </button>
          )}

          {/* REVIEWS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center w-full gap-4 sm:gap-6">
            {getVisibleReviews().map((review, index) => {
              const isMiddle = index === 1 && getVisibleReviews().length === 3;

              return (
                <div
                  key={`${review.id}-${index}`}
                  className={`w-full max-w-[380px] h-[340px] sm:h-[360px] md:h-[370px] lg:h-[380px] overflow-hidden p-5 sm:p-6 flex flex-col justify-between gap-4 rounded-3xl transition-all duration-500 transform ${
                    isMiddle
                      ? "bg-[var(--primary)] text-white shadow-2xl xl:scale-105"
                      : "bg-white border border-[#00000014] text-black hover:-translate-y-2 hover:shadow-xl"
                  }`}
                >
                  <div className="flex justify-end px-2">
                    <img
                      src={nine9}
                      alt="quote"
                      className={`shrink-0 transition-all duration-300 ${
                        isMiddle ? "opacity-100" : "opacity-70"
                      }`}
                    />
                  </div>

                  <div className="flex gap-1">
                    {[...Array(5)].map((_, starIndex) => (
                      <img
                        key={starIndex}
                        src={star}
                        alt="star"
                        className={`w-4 h-4 sm:w-5 sm:h-5 ${
                          isMiddle ? "brightness-0 invert" : ""
                        }`}
                      />
                    ))}
                  </div>

                  <p
                    className={`leading-relaxed transition-colors duration-300 text-sm sm:text-base overflow-hidden line-clamp-6 ${
                      isMiddle ? "!text-white" : "text-[var(--accent-text)]"
                    }`}
                  >
                    "{review.review}"
                  </p>

                  <div className="flex items-center gap-3 mt-3">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
                        isMiddle
                          ? "bg-white text-[var(--primary)]"
                          : "bg-[var(--primary)] text-white"
                      }`}
                    >
                      {review.name.charAt(0)}
                    </div>

                    <div>
                      <h6
                        className={`font-bold transition-colors duration-300 text-sm sm:text-base ${
                isMiddle ? "text-white" : "text-[var(--primary)]"
              }`}
            >
                        {review.name}
                      </h6>

                      <p
                        className={`text-xs sm:text-sm transition-colors duration-300 ${
                          isMiddle
                            ? "!text-white/80"
                            : "text-[var(--accent-text)]"
                        }`}
                      >
                        {review.role}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ➡️ NEXT BUTTON */}
          {showNavigation && (
            <button
              onClick={nextReviews}
              className="hidden md:flex w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-[#00000018] items-center justify-center text-[var(--primary)] transition-all duration-300 hover:bg-[var(--primary)] hover:text-white shrink-0"
            >
              →
            </button>
          )}
        </div>
      </section>

      {/* ── BLOG / GALLERY SECTION ────────────────────────────────────────────── */}
      <section id="blog" className="mt-20 min-h-[700px] overflow-hidden px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="flex flex-nowrap items-center justify-between gap-3 whitespace-nowrap w-full">
          <div className="flex flex-nowrap gap-2 sm:gap-3 whitespace-nowrap">
            {["Blog", "Gallery"].map((tab) => (
              <button key={tab} onClick={() => setBlogGallery(tab)}
                className={`shrink-0 px-4 sm:px-5 md:px-6 min-w-[90px] sm:min-w-[120px] md:min-w-[150px] lg:min-w-[200px] py-3 rounded-3xl font-semibold transition-all duration-300 hover:scale-105 whitespace-nowrap text-[16px] sm:text-[20px] lg:text-[24px] xl:text-[30px] leading-[1] ${isBlogGallery === tab ? "bg-[var(--primary)] !text-white" : "bg-[var(--bg-section)] !text-[var(--primary)]"}`}>
                {tab}
              </button>
            ))}
          </div>
          <button onClick={() => isBlogGallery === "Blog" ? navigate("/blog") : navigate("/gallery")}
            className="flex flex-row items-center justify-between gap-3 shrink-0 whitespace-nowrap ml-2">
            <span className="text-[var(--primary)] font-bold whitespace-nowrap">View all</span>
            <img src={expand} alt="expand" className="shrink-0" />
          </button>
        </div>

        <div className="pt-3">
          {/* ── BLOG TAB — now from Supabase ─────────────────────────────────── */}
          {isBlogGallery === "Blog" && (
            <div className="overflow-x-auto pt-6 sm:pt-8 lg:pt-10 overflow-y-visible scrollbar-hide">
              <div className="grid grid-flow-col auto-cols-[260px] sm:auto-cols-[280px] md:auto-cols-[300px] lg:auto-cols-[320px] gap-6 lg:gap-10 bg-transparent">

                {/* Skeletons while loading */}
                {postsLoading && Array.from({ length: 4 }).map((_, i) => <BlogSkeleton key={i} />)}

                {/* No posts yet */}
                {!postsLoading && livePosts.length === 0 && (
                  <div className="col-span-full flex flex-col items-center justify-center py-16 text-gray-400">
                    <p className="text-sm">No articles published yet.</p>
                  </div>
                )}

                {/* Live posts */}
                {!postsLoading && livePosts.map((article) => (
                  <div key={article.id} onClick={() => navigate(`/blog/${article.id}`)}
                    className="w-full cursor-pointer border border-[#0000001a] rounded-2xl overflow-hidden bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-[var(--primary)] group">

                    {/* Thumbnail */}
                    <div className="w-full h-[180px] md:h-[190px] overflow-hidden bg-gray-100">
                      {article.image_url ? (
                        <img src={article.image_url} alt={article.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gray-100">
                          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#d1d5db" strokeWidth="1.5">
                            <rect x="3" y="3" width="18" height="18" rx="3"/>
                            <circle cx="8.5" cy="8.5" r="1.5"/>
                            <path d="M21 15l-5-5L5 21"/>
                          </svg>
                        </div>
                      )}
                    </div>

                    <div className="p-6 sm:p-8 md:p-7 lg:p-10 flex flex-col gap-3">
                      <h5 className="text-[var(--text-sub-h)] transition-colors duration-300 group-hover:text-[var(--primary)] text-sm uppercase">
                        {article.hashtags?.[0] ?? "Article"}
                      </h5>
                      <h4 className="text-[18px] sm:text-[20px] font-bold transition-colors duration-300 group-hover:text-[var(--primary)] line-clamp-2">
                        {article.title}
                      </h4>
                      <p className="transition-colors duration-300 group-hover:text-[#555] text-sm sm:text-base line-clamp-3">
                        {article.introduction || article.content?.replace(/<[^>]+>/g, " ").slice(0, 100) + "…"}
                      </p>
                      <div className="flex gap-3 items-center mt-auto">
                        <div className="w-10 h-10 rounded-full bg-[rgba(246,243,242,1)] flex items-center justify-center shrink-0">
                          <span className="text-[var(--primary)] text-sm font-semibold">S</span>
                        </div>
                        <p className="transition-colors duration-300 group-hover:text-[var(--primary)] text-sm sm:text-base">
                          By So-Nyah Editorial
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ── GALLERY TAB (completely unchanged from your original) ────────── */}
          {isBlogGallery === "Gallery" && (
            <>
              <div className="overflow-x-auto pt-6 sm:pt-8 lg:pt-10 scrollbar-hide">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
                  {[
                    { type: "before-after", before: before, after: after, title: "Office Cleaning" },
                    { type: "before-after", before: before1, after: after1, title: "Compound Maintenance" },
                    { type: "before-after", before: before2, after: after2, title: "Residential Cleaning" },
                    { type: "single", image: after1, title: "Post Cleaning Result" },
                    { type: "single", image: before1, title: "Interior Space Care" },
                    { type: "single", image: teamAtwork7, title: "Interior Space Care" },
                    { type: "single", image: teamAtwork6, title: "Interior Space Care" },
                    { type: "single", image: teamAtwork5, title: "Fumigation" },
                    { type: "single", image: teamAtwork4, title: "Interior Space Care" },
                    { type: "single", image: teamAtwork3, title: "Interior Space Care" },
                    { type: "single", image: teamAtwork2, title: "Interior Space Care" },
                    { type: "single", image: teamAtwork, title: "Interior Space Care" },
                    { type: "single", image: team, title: "Space Care" },
                  ].map((item, index) => (
                    <div key={index} onClick={() => setExpandedGalleryItem(item)}
                      className="group bg-white rounded-3xl overflow-hidden border border-[#00000014] shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer">
                      {item.type === "before-after" ? (
                        <div className="flex flex-row h-[220px] md:h-[240px] overflow-hidden relative">
                          <div className="relative w-1/2 h-full overflow-hidden">
                            <img src={item.before} alt="Before" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute top-3 left-3 bg-black/70 text-white text-xs sm:text-sm px-3 py-1 rounded-full">Before</div>
                          </div>
                          <div className="relative w-1/2 h-full overflow-hidden">
                            <img src={item.after} alt="After" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute top-3 right-3 bg-[var(--primary)] text-white text-xs sm:text-sm px-3 py-1 rounded-full">After</div>
                          </div>
                          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-white/70 -translate-x-1/2" />
                        </div>
                      ) : (
                        <div className="relative h-[220px] md:h-[240px] overflow-hidden">
                          <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                          <div className="absolute top-3 left-3 bg-[var(--primary)] text-white text-xs sm:text-sm px-3 py-1 rounded-full">Gallery</div>
                        </div>
                      )}
                      <div className="p-5 sm:p-6">
                        <h4 className="text-[18px] sm:text-[20px] font-bold text-[var(--primary)]">{item.title}</h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {expandedGalleryItem && (
                <div className="fixed inset-0 z-[2000] bg-black/80 flex items-center justify-center p-4 sm:p-6" onClick={() => setExpandedGalleryItem(null)}>
                  <div className="relative bg-white rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-auto p-4 sm:p-6" onClick={(e) => e.stopPropagation()}>
                    <button onClick={() => setExpandedGalleryItem(null)} className="absolute top-4 right-4 bg-[var(--primary)] text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold hover:scale-105 transition-all duration-300">×</button>
                    <h3 className="text-[var(--primary)] text-xl sm:text-2xl font-bold mb-5 pr-12">{expandedGalleryItem.title}</h3>
                    {expandedGalleryItem.type === "before-after" ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                        <div className="relative rounded-2xl overflow-hidden">
                          <img src={expandedGalleryItem.before} alt="Before" className="w-full max-h-[70vh] object-cover" />
                          <div className="absolute top-3 left-3 bg-black/70 text-white text-sm px-3 py-1 rounded-full">Before</div>
                        </div>
                        <div className="relative rounded-2xl overflow-hidden">
                          <img src={expandedGalleryItem.after} alt="After" className="w-full max-h-[70vh] object-cover" />
                          <div className="absolute top-3 right-3 bg-[var(--primary)] text-white text-sm px-3 py-1 rounded-full">After</div>
                        </div>
                      </div>
                    ) : (
                      <div className="rounded-2xl overflow-hidden">
                        <img src={expandedGalleryItem.image} alt={expandedGalleryItem.title} className="w-full max-h-[75vh] object-cover" />
                      </div>
                    )}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* ── Floating WhatsApp (unchanged) ───────────────────────────────────── */}
      <div className="fixed z-[1000] bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-10 right-4 sm:right-6 md:right-8 lg:right-10 flex flex-col items-end gap-3">
        <div className={`relative max-w-[220px] sm:max-w-[250px] transition-all duration-500 ease-in-out ${showChatBubble ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"}`}>
          <div className="bg-white rounded-2xl shadow-xl border border-[#00000010] px-4 py-3">
            <p className="text-sm sm:text-base text-[14px]! text-[var(--text)] leading-5">Hello, please tell So-nyah Team the service you need 😊</p>
          </div>
          <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white border-r border-b border-[#00000010] rotate-45" />
        </div>
        <button onClick={() => window.open("https://wa.me/message/CXGU4I2ZUXS4I1", "_blank")} className="rounded-3xl flex px-4 sm:px-5 md:px-5 lg:px-6 shadow-xl text-white bg-[var(--text-sub-h)] py-3 items-center gap-2 sm:gap-3 text-sm sm:text-base transition-all duration-300 hover:scale-105 hover:shadow-2xl">
          <span className="hidden xs:inline">Chat with Us</span>
          <span className="sm:hidden">Chat</span>
          <img src={whatsApp} alt="" className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6" />
        </button>
      </div>
    </div>
  );
};

export default Home;