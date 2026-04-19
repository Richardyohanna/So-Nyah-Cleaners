import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getServiceBySlug } from "../data/servicesData";

import CustomButton from "../component/ui/custom-button";
import before1 from "../assets/enhanced-bg2.png";
import after1 from "../assets/enhanced-bg1.png";
import bgCover from "../assets/enhanced-bg3.png";
import bgCover2 from "../assets/enhanced-bg4.png";

import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import twiter from "../assets/twiter.png";
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
import blog1 from "../assets/blog1.png";
import blog2 from "../assets/blog2.png";
import blog3 from "../assets/blog3.png";
import nine9 from "../assets/99.png";
import star from "../assets/star.png";

type Clients = {
  id: number;
  image: string;
  companyName: string;
};

const clients: Clients[] = [
  {
    id: 1,
    image: client1,
    companyName: "FIRS",
  },
  {
    id: 2,
    image: client2,
    companyName: "EFCC",
  },
  {
    id: 3,
    image: client3,
    companyName: "NTA",
  },
  {
    id: 4,
    image: client4,
    companyName: "",
  },
  {
    id: 5,
    image: client5,
    companyName: "",
  },
  {
    id: 6,
    image: client6,
    companyName: "",
  },
  {
    id: 7,
    image: client7,
    companyName: "",
  },
  {
    id: 8,
    image: client8,
    companyName: "",
  },
];

type HeroImage = {
  id: number;
  image: string;
};

const heroImages: HeroImage[] = [
  {
    id: 1,
    image: before1,
  },
  {
    id: 4,
    image: after1,
  },
  {
    id: 3,
    image: bgCover,
  },
  {
    id: 2,
    image: bgCover2,
  },
];

type Blog = {
  id: number;
  category: string;
  title: string;
  article: string;
  image: string;
  aurthor: string;
  aurthor_image: string;
};



type Review = {
  id: number;
  review: string;
  name: string;
  role: string;
  image?: string;
};

const reviews: Review[] = [
  {
    id: 1,
    review:
      "I never knew our office could look this luminous. The botanical scents they use are incredible—no chemical smell at all.",
    name: "Dr. Adebayo O.",
    role: "Clinical Director Abuja North",
    image: "",
  },
  {
    id: 2,
    review:
      "Their team completely transformed our apartment after renovation. Every surface looked polished and fresh, and the whole place felt brand new.",
    name: "Mrs. Sarah Ibrahim",
    role: "Homeowner, Wuse II",
    image: "",
  },
  {
    id: 3,
    review:
      "The professionalism was outstanding from start to finish. Our workspace felt healthier, brighter, and far more welcoming for staff and clients.",
    name: "Mr. Daniel Okeke",
    role: "Operations Manager, Maitama",
    image: "",
  },
  {
    id: 4,
    review:
      "From the first visit, their attention to detail stood out. They brought calm, freshness, and a truly premium finish to our space.",
    name: "Amina Yusuf",
    role: "Property Manager, Jabi",
    image: "",
  },
  {
    id: 5,
    review:
      "The service felt thoughtful and refined. Even our guests commented on how clean, light, and pleasant the environment felt afterward.",
    name: "Tunde Bello",
    role: "Hospitality Consultant",
    image: "",
  },
];


const blogs: Blog[] = [
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
];

const HEADER_HEIGHT = 66;

const Home = () => {
  const navivgate = useNavigate();

  const [isBlogGallery, setBlogGallery] = useState("Blog");
  const [reviewStartIndex, setReviewStartIndex] = useState(0);
  const [currentHeroImageIndex, setCurrentHeroImageIndex] = useState(0);

  const spaceCleaning = getServiceBySlug("space-cleaning");
  const facadeCleaning = getServiceBySlug("facade-cleaning");
  const fumigationCleaning = getServiceBySlug("fumigation");

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

  const nextReviews = () => {
    setReviewStartIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReviews = () => {
    setReviewStartIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  useEffect(() => {
    if (reviews.length <= 3) return;

    const interval = window.setInterval(() => {
      setReviewStartIndex((prev) => (prev + 1) % reviews.length);
    }, 3500);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden w-full bg-white flex flex-col gap-10 pb-20">
      {/* HERO SECTION */}
      <section
        id="hero"
        className="relative  overflow-hidden pd-10"
        style={{ minHeight: `calc(100vh - ${HEADER_HEIGHT}px)` }}
      >
        {/* Background image slider */}
        <div className="absolute inset-0">
          {heroImages.map((item, index) => (
            <img
              key={item.id}
              src={item.image}
              alt={`Hero background ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                index === currentHeroImageIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}

          <div className="absolute inset-0 bg-black/40" />

          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-transparent" />
          </div>
        </div>

        {/* Foreground content */}
       <div className="relative z-10 flex lg:flex-row flex-col justify-center lg:justify-between w-full gap-8 lg:gap-12 items-start lg:items-center min-h-screen px-4 sm:px-6 md:px-10 lg:px-20 py-10 lg:py-0">
          {/* LEFT / TEXT SECTION */}
          <div className="relative mt-2 w-full max-w-[880px] rounded-[32px]">
            <div className="relative z-10">
              <div>
                <h1 className="text-[42px] sm:text-[54px] md:text-[66px] lg:text-[86px] leading-[1] lg:leading-[0.95] mt-5 tracking-[1px] sm:tracking-[2px] md:tracking-[3px] lg:tracking-[4px] font-bold text-white">
                  Cleaning Spaces,
                  <br />
                  <span className="text-[var(--primary)]">
                    Creating <br />
                    Happy <br />
                    Faces
                  </span>
                </h1>

                <p className="max-w-[520px] !text-white mt-5 text-sm sm:text-base leading-7">
                  Complete Space Care from deep cleaning to total facility solutions (delivered with eco-friendly, safe, and responsible cleaning practices)
                </p>

                <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 mt-6 w-full sm:w-auto">
                  <div className="w-full sm:w-auto">
                    <CustomButton text="Schedule a visit" />
                  </div>

                  <button className="bg-[var(--bg-section)] text-[var(--primary)] px-5 py-3 rounded-3xl shadow-xl font-semibold transition-all duration-300 hover:scale-105 hover:bg-white w-full sm:w-auto">
                    View Our Services
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="flex lg:flex-col flex-row gap-3 sm:gap-4 items-center lg:self-center">
            <button className="w-[48px] h-[48px] sm:w-[54px] sm:h-[54px] lg:w-[60px] lg:h-[60px] rounded-full border-[2px] lg:border-[3px] border-white flex items-center justify-center transition-all duration-300 ease-in-out hover:border-[var(--primary)] hover:bg-[var(--primary)] hover:scale-110">
              <img
                src={facebook}
                alt="Facebook"
                className="w-[28px] h-[28px] sm:w-[32px] sm:h-[32px] lg:w-[38px] lg:h-[38px] object-contain transition-all duration-300"
              />
            </button>

            <button className="w-[48px] h-[48px] sm:w-[54px] sm:h-[54px] lg:w-[60px] lg:h-[60px] rounded-full border-[2px] lg:border-[3px] border-white flex items-center justify-center transition-all duration-300 ease-in-out hover:border-[var(--primary)] hover:bg-[var(--primary)] hover:scale-110">
              <img
                src={instagram}
                alt="Instagram"
                className="w-[28px] h-[28px] sm:w-[32px] sm:h-[32px] lg:w-[38px] lg:h-[38px] object-contain transition-all duration-300"
              />
            </button>

            <button className="w-[48px] h-[48px] sm:w-[54px] sm:h-[54px] lg:w-[60px] lg:h-[60px] rounded-full border-[2px] lg:border-[3px] border-white flex items-center justify-center transition-all duration-300 ease-in-out hover:border-[var(--primary)] hover:bg-[var(--primary)] hover:scale-110">
              <img
                src={twiter}
                alt="Twitter"
                className="w-[28px] h-[28px] sm:w-[32px] sm:h-[32px] lg:w-[38px] lg:h-[38px] object-contain transition-all duration-300"
              />
            </button>

            <button className="w-[48px] h-[48px] sm:w-[54px] sm:h-[54px] lg:w-[60px] lg:h-[60px] rounded-full border-[2px] lg:border-[3px] border-white flex items-center justify-center transition-all duration-300 ease-in-out hover:border-[var(--primary)] hover:bg-[var(--primary)] hover:scale-110">
              <img
                src={mail}
                alt="Mail"
                className="w-[28px] h-[28px] sm:w-[32px] sm:h-[32px] lg:w-[36px] lg:h-[38px] object-contain transition-all duration-300"
              />
            </button>
          </div>
        </div>
      </section>

      {/* SERVICE SECTION */}
      <section id="service" className="mt-15 px-4 sm:px-6 md:px-10 lg:px-20">
        <h3 className="text-[var(--primary)] head text-[32px] sm:text-[38px] lg:text-[48px] leading-[1.1] font-bold items-center text-center">
          Our Specialized Services
        </h3>



        <div className="mt-10 flex gap-8 md:gap-10 justify-center flex-wrap w-full">
 
            {/*Sapce CLeaning */}
          <div   
              onClick={()=> navivgate(`/service/${spaceCleaning?.slug}`)}           
              className="w-full sm:max-w-[323px] flex flex-col cursor-pointer group transition-all duration-300 hover:-translate-y-2"
            >
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={spaceCleaning?.heroImage}
                  alt="service"
                  className="rounded-2xl h-[260px] sm:h-[320px] lg:max-h-[360px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-row mt-3 gap-4 sm:gap-5">
                <h3 className="text-3xl sm:text-4xl text-[var(--service-number)] shrink-0 transition-colors duration-300 group-hover:text-[var(--primary)]">
                  0{spaceCleaning?.id}
                </h3>

                <div className="w-full min-w-0 gap-3 flex flex-col items-start">
                  <h4 className="text-base sm:text-lg font-bold transition-colors duration-300 group-hover:text-[var(--primary)]">
                    {spaceCleaning?.title}
                  </h4>

                  <p className="break-words transition-colors duration-300 group-hover:text-[#555] line-clamp-3 text-sm sm:text-base">
                    {spaceCleaning?.shortDescription}
                  </p>

                  <button className="text-[var(--primary)] transition-all duration-300 hover:underline group-hover:translate-x-1">
                    Read More...
                  </button>
                </div>
              </div>
            </div>

             {/*Facade CLeaning */}
          <div    
              onClick={()=> navivgate(`/service/${facadeCleaning?.slug}`)}            
              className="w-full sm:max-w-[323px] flex flex-col cursor-pointer group transition-all duration-300 hover:-translate-y-2"
            >
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={facadeCleaning?.heroImage}
                  alt="service"
                  className="rounded-2xl h-[260px] sm:h-[320px] lg:max-h-[360px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-row mt-3 gap-4 sm:gap-5">
                <h3 className="text-3xl sm:text-4xl text-[var(--service-number)] shrink-0 transition-colors duration-300 group-hover:text-[var(--primary)]">
                  0{facadeCleaning?.id}
                </h3>

                <div className="w-full min-w-0 gap-3 flex flex-col items-start">
                  <h4 className="text-base sm:text-lg font-bold transition-colors duration-300 group-hover:text-[var(--primary)]">
                    {facadeCleaning?.title}
                  </h4>

                  <p className="break-words transition-colors duration-300 group-hover:text-[#555] line-clamp-3 text-sm sm:text-base">
                    {facadeCleaning?.shortDescription}
                  </p>

                  <button className="text-[var(--primary)] transition-all duration-300 hover:underline group-hover:translate-x-1">
                    Read More...
                  </button>
                </div>
              </div>
            </div>

             {/*fumigation CLeaning */}
          <div  
              onClick={()=> navivgate(`/service/${fumigationCleaning?.slug}`)}              
              className="w-full sm:max-w-[323px] flex flex-col cursor-pointer group transition-all duration-300 hover:-translate-y-2"
            >
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={fumigationCleaning?.heroImage}
                  alt="service"
                  className="rounded-2xl h-[260px] sm:h-[320px] lg:max-h-[360px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-row mt-3 gap-4 sm:gap-5">
                <h3 className="text-3xl sm:text-4xl text-[var(--service-number)] shrink-0 transition-colors duration-300 group-hover:text-[var(--primary)]">
                  0{fumigationCleaning?.id}
                </h3>

                <div className="w-full min-w-0 gap-3 flex flex-col items-start">
                  <h4 className="text-base sm:text-lg font-bold transition-colors duration-300 group-hover:text-[var(--primary)]">
                    {fumigationCleaning?.title}
                  </h4>

                  <p className="break-words transition-colors duration-300 group-hover:text-[#555] line-clamp-3 text-sm sm:text-base">
                    {fumigationCleaning?.shortDescription}
                  </p>

                  <button className="text-[var(--primary)] transition-all duration-300 hover:underline group-hover:translate-x-1">
                    Read More...
                  </button>
                </div>
              </div>
            </div>

       <button
          onClick={() => navivgate("/services")}
          className="flex flex-row items-center justify-between gap-3 h-fit self-start sm:self-auto transition-all duration-300 hover:translate-x-[3px] group"
        >
          <span className="text-[var(--primary)] font-bold">View all</span>
          <img
            src={expand}
            alt="expand"
            className="shrink-0 transition-all duration-300 group-hover:scale-110"
          />
        </button>
        </div>
      </section>

            {/* OUR CLIENTS */}
      <section id="clients" className="w-full px-4 sm:px-6 md:px-10 py-10 bg-[var(--primary)]">
        <h3 className="text-white! head text-[32px] sm:text-[38px] lg:text-[48px] leading-[1] font-bold items-center text-center">
          Our Clients
        </h3>

        <h4 className="text-center text-white text-sm sm:text-base mt-2">
          Trust by most recognized names
        </h4>

        <div className="flex justify-center bg-white mt-10 flex-wrap">
          {clients.map((client, index) => (
            <div
              key={index}
              className={`w-1/2 sm:w-1/3 md:w-1/4 lg:w-auto flex items-center justify-center`}
            >
              <img
                src={client.image}
                alt={client.companyName}
                className="w-full h-[90px] sm:h-[110px] lg:h-[130px] object-contain"
              />
            </div>
          ))}
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="mt-15 px-4 sm:px-6 md:px-10 lg:px-20">
        <h3 className="text-[var(--primary)] head text-[32px] sm:text-[38px] lg:text-[48px] leading-[1] font-bold items-center text-center">
          Voices Of Contentment
        </h3>

        <h4 className="text-center text-[var(--accent-text)] text-sm sm:text-base mt-2">
          Trust earned through every polished surface.
        </h4>

        <div className="mt-8 flex justify-center items-center gap-2 sm:gap-4">
          <button
            onClick={prevReviews}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-[#00000018] flex items-center justify-center text-[var(--primary)] transition-all duration-300 hover:bg-[var(--primary)] hover:text-white shrink-0"
          >
            ←
          </button>

          <div className="flex flex-wrap justify-center w-full gap-4 sm:gap-6">
            {getVisibleReviews().map((review, index) => {
              const isMiddle = index === 1 || reviews.length === 1;

              return (
                <div
                  key={`${review.id}-${index}`}
                  className={`w-full sm:max-w-[324px] min-h-[300px] sm:min-h-[320px] p-5 sm:p-6 flex flex-col justify-between gap-4 rounded-3xl transition-all duration-500 transform ${
                    isMiddle
                      ? "bg-[var(--primary)] text-white shadow-2xl lg:scale-105"
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
                        className={`w-4 h-4 sm:w-auto sm:h-auto ${isMiddle ? "brightness-0 invert" : ""}`}
                      />
                    ))}
                  </div>

                  <p
                    className={`leading-relaxed transition-colors duration-300 text-sm sm:text-base ${
                      isMiddle ? "!text-white" : "text-[var(--accent-text)]"
                    }`}
                  >
                    "{review.review}"
                  </p>

                  <div className="flex items-center gap-3 mt-3">
                    {review.image ? (
                      <img
                        src={review.image}
                        alt={review.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                    ) : (
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
                          isMiddle
                            ? "bg-white text-[var(--primary)]"
                            : "bg-[var(--primary)] text-white"
                        }`}
                      >
                        {review.name.charAt(0)}
                      </div>
                    )}

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
                          isMiddle ? "!text-white/80" : "text-[var(--accent-text)]"
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

          <button
            onClick={nextReviews}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-[#00000018] flex items-center justify-center text-[var(--primary)] transition-all duration-300 hover:bg-[var(--primary)] hover:text-white shrink-0"
          >
            →
          </button>
        </div>
      </section>


      {/* BLOG SECTION */}
      <section id="blog" className="mt-15 min-h-[600px] px-4 sm:px-6 md:px-10 lg:px-20">
        <div className="w-full flex flex-col sm:flex-row justify-between sm:items-center gap-5">
          <div className="flex gap-2 sm:gap-3 flex-wrap">
            <button
              onClick={() => {
                setBlogGallery("Blog");
              }}
              className={`text-[var(--primary)] text-[22px]! sm:text-[26px]! lg:text-[30px]! leading-[1]  ${
                isBlogGallery === "Blog" ? "border-r! border-b! font-bold!" : ""
              } p-3 border-[var(--primary)]`}
            >
              Blog
            </button>

            <button
              onClick={() => {
                setBlogGallery("Gallery");
              }}
              className={`text-[var(--primary)] text-[22px]! sm:text-[26px]! lg:text-[30px]! leading-[1]  ${
                isBlogGallery === "Gallery" ? "border-l! border-b! font-bold!" : ""
              } p-3 border-[var(--primary)]`}
            >
              Gallery
            </button>
          </div>

          <button className="flex flex-row items-center justify-between gap-3 self-start sm:self-auto">
            <span className="text-[var(--primary)] font-bold">View all</span>
            <img src={expand} alt="expand" className="shrink-0" />
          </button>
        </div>

        <div className="justify-center lg:justify-start flex flex-wrap gap-6 lg:gap-10 mt-4">
          {isBlogGallery === "Blog" &&
            blogs.map((article, index) => (
              <div
                key={index}
                className="w-full sm:max-w-[300px] cursor-pointer mt-5 border border-[#0000001a] rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-[var(--primary)] group"
              >
                <img
                  src={article.image}
                  alt="Blog1"
                  className="w-full h-[220px] object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="p-6 sm:p-8 lg:p-10 flex flex-col gap-3">
                  <h5 className="text-[var(--text-sub-h)] transition-colors duration-300 group-hover:text-[var(--primary)] text-sm">
                    {article.category}
                  </h5>

                  <h4 className="text-[18px] sm:text-[20px] font-bold transition-colors duration-300 group-hover:text-[var(--primary)]">
                    {article.title}
                  </h4>

                  <p className="transition-colors duration-300 group-hover:text-[#555] text-sm sm:text-base">
                    {article.article}
                  </p>

                  <div className="flex gap-3 items-center">
                    <img src={article.aurthor_image} alt="" />
                    <p className="transition-colors duration-300 group-hover:text-[var(--primary)] text-sm sm:text-base">
                      By {article.aurthor}
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>


      {/* FLOATING WHATSAPP */}
      <button className="fixed z-[1000] rounded-3xl flex px-4 sm:px-5 lg:px-6 bottom-4 sm:bottom-6 lg:bottom-10 right-4 sm:right-6 lg:right-10 shadow-xl text-white bg-[var(--text-sub-h)] py-3 items-center gap-2 sm:gap-3 text-sm sm:text-base">
        <span className="hidden xs:inline">Chat with Us</span>
        <span className="sm:hidden">Chat</span>
        <img src={whatsApp} alt="" className="w-5 h-5 sm:w-auto sm:h-auto" />
      </button>
    </div>
  );
};

export default Home;