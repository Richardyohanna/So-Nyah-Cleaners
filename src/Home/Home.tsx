import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getServiceBySlug } from "../data/servicesData";


import before1 from "../assets/enhanced-bg2.png";
import after1 from "../assets/enhanced-bg1.png";
import bgCover from "../assets/enhanced-bg3.png";
import bgCover2 from "../assets/enhanced-bg4.png";

import after from "../assets/after 1.jpeg";
import before from "../assets/before 1.jpeg";
import after2 from "../assets/after 2.jpeg";
import before2 from "../assets/before 2.jpeg";

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
  logoWidth?: string;
  logoHeight?: string;
};

const clients: Clients[] = [
  {
    id: 1,
    image: client1,
    companyName: "FIRS",
    logoWidth: "w-full",
    logoHeight: "h-[90px]",
  },
  {
    id: 2,
    image: client2,
    companyName: "EFCC",
    logoWidth: "w-full",
    logoHeight: "h-[80px]",
  },
  {
    id: 3,
    image: client3,
    companyName: "NTA",
    logoWidth: "w-full",
    logoHeight: "h-[80px]",
  },
  {
    id: 4,
    image: client4,
    companyName: "",
    logoWidth: "w-full",
    logoHeight: "h-[150px]",
  },
  {
    id: 5,
    image: client5,
    companyName: "",
    logoWidth: "w-full",
    logoHeight: "h-[1000px]",
  },
  {
    id: 6,
    image: client6,
    companyName: "",
    logoWidth: "w-full",
    logoHeight: "h-[150px]",
  },
  {
    id: 7,
    image: client7,
    companyName: "",
    logoWidth: "w-full",
    logoHeight: "h-[100px]",
  },
  {
    id: 8,
    image: client8,
    companyName: "",
    logoWidth: "w-full",
    logoHeight: "h-[120px]",
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
    }, 5000);

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
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/30 to-transparent" />
          </div>
        </div>

        {/* Foreground content */}
       <div className="relative z-10 flex lg:flex-row flex-col justify-center lg:justify-between w-full gap-8 lg:gap-12 items-start lg:items-center min-h-screen px-4 sm:px-6 md:px-10 lg:px-20 py-10 lg:py-0">
          {/* LEFT / TEXT SECTION */}
          <div className="relative mt-2 w-full max-w-[880px] rounded-[32px]">
            <div className="relative z-10">
              <div>
                <h1 className="text-[42px] sm:text-[54px] md:text-[66px] lg:text-[86px] leading-[1] lg:leading-[1] mt-5 tracking-[1px] sm:tracking-[2px] md:tracking-[3px] lg:tracking-[4px] font-bold text-white">
                  Cleaning Spaces,
                  <br />
                  
                    Creating <br />
                    <span className="text-[var(--primary)] ">
                    Happy 
                    Faces
                  </span>
                </h1>

                <p className="max-w-[520px] !text-white mt-5 text-sm sm:text-base leading-7">
                  Complete Space Care from deep cleaning to total facility solutions (delivered with eco-friendly, safe, and responsible cleaning practices)
                </p>

                <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 mt-6 w-full sm:w-auto">
                  <button 
                    onClick={()=> navivgate(`/services`)} 
                    className="bg-white text-[var(--primary)] px-5 py-3 shadow-xl font-semibold transition-all duration-300 hover:scale-105 hover:bg-[var(--primary)] hover:text-white w-full sm:w-auto  "> 
                   
                    Schedule a Visit
                  </button>

                  <button 
                    onClick={()=> navivgate(`/services`)}  
                     className="bg-transparent   text-white! px-5 py-3  shadow-xl font-semibold transition-all duration-300 hover:scale-105 hover:bg-[var(--primary)] hover:text-white w-full sm:w-auto  border-2!  border-white! hover:border-transparent!">
                    View Our Services
                  </button>
                </div>
              </div>
            </div>
          </div>

      {/* QUICK LINKS */}
      <div className="flex lg:flex-col flex-row gap-2 sm:gap-3 items-center lg:self-center">
        <button className="w-[43px] h-[43px] sm:w-[49px] sm:h-[49px] lg:w-[54px] lg:h-[54px] rounded-full border-[2px] lg:border-[3px] border-white flex items-center justify-center transition-all duration-300 ease-in-out hover:border-[var(--primary)] hover:bg-[var(--primary)] hover:scale-110">
          <img
            src={facebook}
            alt="Facebook"
            className="w-[25px] h-[25px] sm:w-[29px] sm:h-[29px] lg:w-[34px] lg:h-[34px] object-contain transition-all duration-300"
          />
        </button>

        <button className="w-[43px] h-[43px] sm:w-[49px] sm:h-[49px] lg:w-[54px] lg:h-[54px] rounded-full border-[2px] lg:border-[3px] border-white flex items-center justify-center transition-all duration-300 ease-in-out hover:border-[var(--primary)] hover:bg-[var(--primary)] hover:scale-110">
          <img
            src={instagram}
            alt="Instagram"
            className="w-[25px] h-[25px] sm:w-[29px] sm:h-[29px] lg:w-[34px] lg:h-[34px] object-contain transition-all duration-300"
          />
        </button>

        <button className="w-[43px] h-[43px] sm:w-[49px] sm:h-[49px] lg:w-[54px] lg:h-[54px] rounded-full border-[2px] lg:border-[3px] border-white flex items-center justify-center transition-all duration-300 ease-in-out hover:border-[var(--primary)] hover:bg-[var(--primary)] hover:scale-110">
          <img
            src={twiter}
            alt="Twitter"
            className="w-[25px] h-[25px] sm:w-[29px] sm:h-[29px] lg:w-[34px] lg:h-[34px] object-contain transition-all duration-300"
          />
        </button>

        <button className="w-[43px] h-[43px] sm:w-[49px] sm:h-[49px] lg:w-[54px] lg:h-[54px] rounded-full border-[2px] lg:border-[3px] border-white flex items-center justify-center transition-all duration-300 ease-in-out hover:border-[var(--primary)] hover:bg-[var(--primary)] hover:scale-110">
          <img
            src={mail}
            alt="Mail"
            className="w-[25px] h-[25px] sm:w-[29px] sm:h-[29px] lg:w-[32px] lg:h-[34px] object-contain transition-all duration-300"
          />
        </button>
      </div>
        </div>
      </section>

      {/* SERVICE SECTION */}
      <section id="service" className="mt-20 px-4 sm:px-6 md:px-10 lg:px-20">
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
      <section id="clients" className="w-full mt-25 px-4 sm:px-6 md:px-10 py-10 bg-[var(--primary)]">
        <h3 className="text-white! head text-[32px] sm:text-[38px] lg:text-[48px] leading-[1] font-bold items-center text-center">
          Our Clients
        </h3>

        <h4 className="text-center text-white text-sm sm:text-base mt-2">
          Trust by most recognized names
        </h4>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-y-8 gap-x-6 bg-white mt-10 place-items-center">
          {clients.map((client) => (
            <div
              key={client.id}
              className="w-full flex items-center justify-center"
            >
              <div className="w-[140px] h-[100px] flex items-center justify-center">
                <img
                  src={client.image}
                  alt={client.companyName}
                  className={`
                    object-contain transition-all duration-300 hover:scale-105
                    ${client.logoWidth || "w-[100px]"}
                    ${client.logoHeight || "h-[70px]"}
                  `}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="mt-20 px-4 sm:px-6 md:px-10 lg:px-20">
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

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center w-full gap-4 sm:gap-6">
            {getVisibleReviews().map((review, index) => {
              const isMiddle = index === 1 && getVisibleReviews().length === 3;

              return (
                <div
                  key={`${review.id}-${index}`}
                  className={`w-full max-w-[380px] h-[350px] sm:h-[380px] overflow-hidden p-5 sm:p-6 flex flex-col justify-between gap-4 rounded-3xl transition-all duration-500 transform ${
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
      <section id="blog" className="mt-20 min-h-[700px] overflow-hidden px-4 sm:px-6 md:px-10 lg:px-20">
        <div className="flex items-center justify-between gap-4 flex-nowrap ">
          <div className="flex gap-2 sm:gap-3 flex-nowrap shrink-0">
            <button
              onClick={() => {
                setBlogGallery("Blog");
              }}
              className={`text-[var(--primary)] whitespace-nowrap text-[22px]! sm:text-[26px]! lg:text-[30px]! leading-[1] ${
                isBlogGallery === "Blog"
                  ? "border-r! border-b! font-bold!"
                  : ""
              } p-3 border-[var(--primary)]`}
            >
              Blog
            </button>

            <button
              onClick={() => {
                setBlogGallery("Gallery");
              }}
              className={`text-[var(--primary)] whitespace-nowrap text-[22px]! sm:text-[26px]! lg:text-[30px]! leading-[1] ${
                isBlogGallery === "Gallery"
                  ? "border-l! border-b! font-bold!"
                  : ""
              } p-3 border-[var(--primary)]`}
            >
              Gallery
            </button>
          </div>

          <button className="flex flex-row items-center justify-between gap-3 shrink-0 whitespace-nowrap">
            <span className="text-[var(--primary)] font-bold whitespace-nowrap">
              View all
            </span>

            <img src={expand} alt="expand" className="shrink-0" />
          </button>
        </div>

        <div className=" pt-3">
          {isBlogGallery === "Blog" && (
            <div className="overflow-x-auto pt-10 overflow-y-visible scrollbar-hide">
              <div className="grid grid-flow-col auto-cols-[280px] lg:auto-cols-[320px] gap-6 lg:gap-10 bg-transparent">
                {blogs.map((article, index) => (
                  <div
                    key={index}
                    className="w-full cursor-pointer border border-[#0000001a] rounded-2xl overflow-hidden bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-[var(--primary)] group"
                  >
                    <img
                      src={article.image}
                      alt="Blog1"
                      className="w-full h-[180px] object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    <div className="p-6 sm:p-8 lg:p-10 flex flex-col gap-3">
                      <h5 className="text-[var(--text-sub-h)] transition-colors duration-300 group-hover:text-[var(--primary)] text-sm">
                        {article.category}
                      </h5>

                      <h4 className="text-[18px] sm:text-[20px] font-bold transition-colors duration-300 group-hover:text-[var(--primary)]">
                        {article.title}
                      </h4>

                      <p className="transition-colors duration-300 group-hover:text-[#555] text-sm sm:text-base line-clamp-3">
                        {article.article}
                      </p>

                      <div className="flex gap-3 items-center mt-auto">
                        <img
                          src={article.aurthor_image}
                          alt=""
                          className="w-10 h-10 rounded-full object-cover"
                        />

                        <p className="transition-colors duration-300 group-hover:text-[var(--primary)] text-sm sm:text-base">
                          By {article.aurthor}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {isBlogGallery === "Gallery" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-6">
              {[
                {
                  before: before,
                  after: after,
                  title: "Office Cleaning",
                },
                {
                  before: before1,
                  after: after1,
                  title: "Compound Maintenance",
                },
                {
                  before: before2,
                  after: after2,
                  title: "Residential Cleaning",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-3xl overflow-hidden border border-[#00000014] shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="flex flex-row h-[220px] overflow-hidden relative">
                    <div className="relative w-1/2 h-full overflow-hidden">
                      <img
                        src={item.before}
                        alt="Before"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      <div className="absolute top-3 left-3 bg-black/70 text-white text-xs sm:text-sm px-3 py-1 rounded-full">
                        Before
                      </div>
                    </div>

                    <div className="relative w-1/2 h-full overflow-hidden">
                      <img
                        src={item.after}
                        alt="After"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      <div className="absolute top-3 right-3 bg-[var(--primary)] text-white text-xs sm:text-sm px-3 py-1 rounded-full">
                        After
                      </div>
                    </div>

                    <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-white/70 -translate-x-1/2" />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>


      {/* FLOATING WHATSAPP */}
      <button className="fixed z-[1000] rounded-3xl flex px-4 sm:px-5 lg:px-6 bottom-4 sm:bottom-6 lg:bottom-10 right-4 sm:right-6 lg:right-17 shadow-xl text-white bg-[var(--text-sub-h)] py-3 items-center gap-2 sm:gap-3 text-sm sm:text-base">
        <span className="hidden xs:inline">Chat with Us</span>
        <span className="sm:hidden">Chat</span>
        <img src={whatsApp} alt="" className="w-5 h-5 sm:w-auto sm:h-auto" />
      </button>
    </div>
  );
};

export default Home;