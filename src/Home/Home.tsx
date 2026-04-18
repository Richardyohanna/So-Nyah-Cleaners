//import before2 from "../assets/before 2.jpeg";
//import after2 from "../assets/after 2.jpeg";
//import guarantee from "../assets/gurrantee.png";
//import botanicalLeaf from "../assets/botanical-leaf.png"
/* import pet from "../assets/pet.png"
import water from "../assets/water.png"
import sanctuary1 from "../assets/sanctuary1.png"
import sanctuary2 from "../assets/sanctuary2.png"
import sanctuary3 from "../assets/sanctuary 3.png"
import sanctuary4 from "../assets/sanctuary 4.png" */

import { useEffect, useState } from "react";



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
import service1 from "../assets/service1.png";
import service2 from "../assets/service2.png";
import service3 from "../assets/service3.png";
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
}

const clients: Clients[] =[

  {
    id: 1,
    image: client1,
    companyName: "FIRS"
  },
    {
    id: 2,
    image: client2,
    companyName: "EFCC"
  },
  {
    id: 3,
    image: client3,
    companyName: "NTA"
  },
    {
    id: 4,
    image: client4,
    companyName: ""
  },
      {
    id: 5,
    image: client5,
    companyName: ""
  },
      {
    id: 6,
    image: client6,
    companyName: ""
  },
        {
    id: 7,
    image: client7,
    companyName: ""
  },
        {
    id: 8,
    image: client8,
    companyName: ""
  },
]

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
  }
  // add more images here
  // { id: 3, image: before2 },
  // { id: 4, image: after2 },
];


type Blog = {

  id: number;
  category: string;
  title: string;
  article: string;
  image: string;
  aurthor: string;
  aurthor_image: string;

}

type Service = {
  id: number;
  image: string;
  title: string;
  description: string;
}

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

const services: Service[] = [
  {
    id: 1,
    image: service1,
    title: "SPACE CLEANING ( Pest Control, Deep Cleaning, Office and homes Cleaning)",
    description: `Your space says a lot about you  before you say a single word. 
                  Whether it's your home, your office, or your business premises, 
                  a clean environment isn't a luxury. It's the standard you deserve.`
  },  
  {
    id: 2,
    image: service3,
    title: "UPHOLSRERY CLEANING ",
    description: `Your furniture deserves better than a vacuum. That sofa you love?
                  It's holding more than memories. Over time, sofas, chairs, and mattresses 
                  absorb dust mites, food particles, and bacteria that regular vacuuming 
                  simply cannot reach. The result isn't just visible dirt  it's allergens
                  that affect your family's health every single day.`
  },
  {
    id: 3,
    image: service2,
    title: "CARPET REVAMP",
    description: `The carpet you gave up on we bring it back. What looks like a worn-out, 
                  stained, dull carpet is often just a carpet that has never had a proper
                  professional clean. We see this transformation every week.`
  }
]



const blogs: Blog[] =[
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
  }

]

const HEADER_HEIGHT = 66;

const Home = () => {
  
 
  const [isBlogGallery, setBlogGallery] = useState("Blog");
  const [reviewStartIndex, setReviewStartIndex] = useState(0);
  const [currentHeroImageIndex, setCurrentHeroImageIndex] = useState(0);




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
    <div className="overflow-hidden bg-white flex flex-col gap-10 pb-20">

    {/**Another Hero Section */} 
   {/*} <section
      id="hero"
      className="relative bg-white flex items-center justify-between  mt-5"
      style={{ minHeight: `calc(100vh - ${HEADER_HEIGHT}px)` , backgroundImage: after1 }}
    >
      <div className="relative z-10 flex flex-row justify-between w-full gap-12 items-center min-h-screen">
        
        {/* LEFT / TEXT SECTION */}
      {/*}  <div className="relative mt-2 w-full max-w-[620px] rounded-[32px]">
          <div className="relative z-10">
            <div>
              <h1 className="text-[76px] leading-[0.95] mt-5 tracking-[-4px] font-medium text-[var(--primary)]">
                Cleaning Spaces,
                <br />
                <span className="text-[var(--text-sub-h)]">
                  Creating <br />
                  Happy <br />
                  Faces
                </span>
              </h1>

              <p className="max-w-[520px] text-[var(--accent-text)] mt-5">
                Experience the tranquility of a truly pure home. Our botanical-based
                cleaning solutions and meticulous attention to detail create
                sanctuaries that breathe.
              </p>

              <div className="flex flex-row gap-5 mt-5">
                <CustomButton text="Schedule a visit" />
                <button className="bg-[var(--bg-section)] text-[var(--primary)] px-5 py-2 rounded-3xl shadow-xl font-semibold transition-all duration-300 hover:scale-105 hover:bg-white">
                  View Our Services
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT / IMAGE SECTION */}
      {/*}  <div className="relative flex flex-row max-w-[644px] max-h-[698px] w-full h-full gap-4 items-center justify-center mt-10 rounded-[32px]">
          <div className="relative rounded-2xl w-[700px] h-[600px] overflow-hidden">
            {heroImages.map((item, index) => (
              <img
                key={item.id}
                src={item.image}
                alt={`Hero image ${index + 1}`}
                className={`absolute inset-0 w-full h-full object-cover rounded-2xl transition-opacity duration-1000 ease-in-out ${
                  index === currentHeroImageIndex ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section> */}

    {/** HERO SECTION */}
    <section
      id="hero"
      className="relative mt-5 overflow-hidden"
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

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

          {/* Dark overlay */}
        {/*<div className="absolute inset-0 bg-black/45 z-0"></div> */}


        {/* Gradient overlay behind text */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-transparent"></div>
        </div>

      </div>

      {/* Foreground content */}
      <div className="relative z-10 flex flex-row justify-between w-full gap-12 items-center min-h-screen px-20">
        
        {/* LEFT / TEXT SECTION */}
       <div className="relative mt-2 w-full max-w-[820px] rounded-[32px]">
          <div className="relative z-10">
            <div>
              <h1 
              className="text-[86px] leading-[0.95] mt-5 tracking-[4px] font-bold text-[var(--primary)]"
              style={{
               
                WebkitTextStroke: "0.5px rgba(255,255,255,0.2)",
              }}
              >
                Cleaning Spaces,
                <br />
                <span className="text-white">
                  Creating <br />
                  Happy <br />
                  Faces
                </span>
              </h1>

              <p className="max-w-[520px] text-white! mt-5">
                Experience the tranquility of a truly pure home. Our botanical-based
                cleaning solutions and meticulous attention to detail create
                sanctuaries that breathe.
              </p>

              <div className="flex flex-row gap-5 mt-5">
                <CustomButton text="Schedule a visit" />
                <button className="bg-[var(--bg-section)] text-[var(--primary)] px-5 py-2 rounded-3xl shadow-xl font-semibold transition-all duration-300 hover:scale-105 hover:bg-white">
                  View Our Services
                </button>
              </div>
            </div>
          </div>
        </div>

        {/**Quick Links */}
        <div>
          <button className="w-[60px] h-[60px] rounded-full border-[3px] border-white flex items-center justify-center transition-all duration-300 ease-in-out hover:border-[var(--primary)] hover:bg-[var(--primary)] hover:scale-110">
            <img
              src={facebook}
              alt="Facebook"
              className="w-[38px] h-[38px] object-contain transition-all duration-300"
            />
          </button>

          <button className="w-[60px] h-[60px] rounded-full border-[3px] border-white flex items-center justify-center transition-all duration-300 ease-in-out hover:border-[var(--primary)] hover:bg-[var(--primary)] hover:scale-110">
            <img
              src={instagram}
              alt="Instagram"
              className="w-[38px] h-[38px] object-contain transition-all duration-300"
            />
          </button>

          <button className="w-[60px] h-[60px] rounded-full border-[3px] border-white flex items-center justify-center transition-all duration-300 ease-in-out hover:border-[var(--primary)] hover:bg-[var(--primary)] hover:scale-110">
            <img
              src={twiter}
              alt="Twitter"
              className="w-[38px] h-[38px] object-contain transition-all duration-300"
            />
          </button>

          <button className="w-[60px] h-[60px] rounded-full border-[3px] border-white flex items-center justify-center transition-all duration-300 ease-in-out hover:border-[var(--primary)] hover:bg-[var(--primary)] hover:scale-110">
            <img
              src={mail}
              alt="Mail"
              className="w-[36px] h-[38px] object-contain transition-all duration-300"
            />
          </button>
        </div>
      </div>
    </section>
      
      {/** Service Section */}
      <section id="service" className="mt-15 px-20 ">
        <h3 className="text-[var(--primary)] head text-[var(--primary)] text-[48px] leading-[1] font-bold items-center text-center ">Our Specialized Services</h3>
        <h4 className="text-center text-[var(--accent-text)] ">A THREE-FOLD APPROACH TO PURITY</h4>

        <div className="mt-7 flex gap-10 justify-center flex-wrap w-full">

        {services.map((service,index)=> (
          <div key={index} className="max-w-[323px] flex flex-col cursor-pointer group transition-all duration-300 hover:-translate-y-2">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={service.image}
                  alt="service"
                  className="rounded-2xl max-h-[360px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-row mt-3 gap-5">
                <h3 className="text-4xl text-[var(--service-number)] shrink-0 transition-colors duration-300 group-hover:text-[var(--primary)]">
                  0{service.id}
                </h3>

                <div className="w-full min-w-0 gap-3 flex flex-col items-start">
                  <h4 className="text-lg font-bold transition-colors duration-300 group-hover:text-[var(--primary)]">
                    {service.title}
                  </h4>

                  <p className="break-words transition-colors duration-300 group-hover:text-[#555] line-clamp-3"
                   
                  >
                    {service.description}
                  </p>

                  <button className="text-[var(--primary)] transition-all duration-300 hover:underline group-hover:translate-x-1">
                    Read More...
                  </button>
                </div>
              </div>
          </div>
        ))}


        </div>
      </section>

      {/** Blog Section */}
      <section id="blog" className="mt-15 min-h-[600px] px-20">

        <div className="w-full flex justify-between">
          <div className="flex gap-3">
            <button 
              onClick={()=> {setBlogGallery("Blog")}}
              className={`text-[var(--primary)]! head! text-[var(--primary)]! text-[30px]! leading-[1]! ${isBlogGallery == "Blog" ? " border-r-1! border-b-1!" : ""}  p-3!  border-[var(--primary)]!`}>
                Blog
            </button>
            <button 
              onClick={()=> {setBlogGallery("Gallery")}}
              className={`text-[var(--primary)]! head! text-[var(--primary)]! text-[30px]! leading-[1]! ${isBlogGallery == "Gallery" ? " border-l-1! border-b-1!" : ""} p-3!  border-[var(--primary)]!`}>
                Gallery
            </button>
          </div>
          <button className="flex flex-row items-center justify-between gap-3">
            <span className="text-[var(--primary)] font-bold">View all</span>
            <img src={expand} alt="expand" className="shrink-0" />
          </button>
        </div>

        <div className="justify-start flex flex-wrap gap-10">
          
        {isBlogGallery == "Blog" && blogs.map((article,index) => (

          <div key={index} className="max-w-[300px] cursor-pointer mt-5 border border-[#0000001a] rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-[var(--primary)] group">
            <img
              src={article.image}
              alt="Blog1"
              className="w-full rounded-t-2xl object-cover transition-transform duration-500 group-hover:scale-105"
            />

            <div className="p-10 flex flex-col gap-3">
              <h5 className="text-[var(--text-sub-h)] transition-colors duration-300 group-hover:text-[var(--primary)]">
                  {article.category}
              </h5>

              <h4 className="text-[20px] font-bold transition-colors duration-300 group-hover:text-[var(--primary)]">
                {article.title}
              </h4>

              <p className="transition-colors duration-300 group-hover:text-[#555]">
                {article.article}
              </p>

              <div className="flex gap-3 items-center">
                <img src={article.aurthor_image} alt="" />
                <p className="transition-colors duration-300 group-hover:text-[var(--primary)]">
                  By {article.aurthor}
                </p>
              </div>
            </div>
          </div>

        ))}
        
        

        </div>

        
      </section>

      {/**Our Clients */}
      <section id="clients" className="w-full p-10 bg-[var(--primary)] ">
        
        <h3 className="text-white head text-[48px] leading-[1] font-bold items-center text-center">
          Our Clients
        </h3>
        <h4 className="text-center text-white">
          Trust by most recognized names
        </h4>

        <div className="flex justify-center bg-white mt-10">
          
          {clients.map((client, index)=> (
            <div key={index} className={`${client.id == 2 ? "" : "" }`}>
              <img src={client.image} alt={client.companyName} className="w-full h-[130px] "/>
              {/*<h4 className="">{client.companyName}</h4> */}
            </div>

          ))}

        </div>


      </section>

      {/** Reviews */}
      <section id="reviews" className="mt-15 px-20">
        <h3 className="text-[var(--primary)] head text-[48px] leading-[1] font-bold items-center text-center">
          Voices Of Contentment
        </h3>
        <h4 className="text-center text-[var(--accent-text)]">
          Trust earned through every polished surface.
        </h4>

        <div className="mt-8 flex justify-center items-center gap-4">
          <button
            onClick={prevReviews}
            className="w-12 h-12 rounded-full border border-[#00000018] flex items-center justify-center text-[var(--primary)] transition-all duration-300 hover:bg-[var(--primary)] hover:text-white"
          >
            ←
          </button>

          <div className="flex flex-wrap justify-center w-full gap-6">
            {getVisibleReviews().map((review, index) => {
              const isMiddle = index === 1 || reviews.length === 1;

              return (
                <div
                  key={`${review.id}-${index}`}
                  className={`max-w-[384px] min-h-[320px] p-6 flex flex-col justify-between gap-4 rounded-3xl transition-all duration-500 transform
                    ${
                      isMiddle
                        ? "bg-[var(--primary)] text-white shadow-2xl scale-105"
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
                        className={isMiddle ? "brightness-0 invert" : ""}
                      />
                    ))}
                  </div>

                  <p
                    className={`leading-relaxed transition-colors duration-300 ${
                      isMiddle ? "text-white!" : "text-[var(--accent-text)]"
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
                        className={`font-bold transition-colors duration-300 ${
                          isMiddle ? "text-white" : "text-[var(--primary)]"
                        }`}
                      >
                        {review.name}
                      </h6>

                      <p
                        className={`text-sm transition-colors duration-300 ${
                          isMiddle ? "text-white/80!" : "text-[var(--accent-text)]"
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
            className="w-12 h-12 rounded-full border border-[#00000018] flex items-center justify-center text-[var(--primary)] transition-all duration-300 hover:bg-[var(--primary)] hover:text-white"
          >
            →
          </button>
        </div>
      </section>


    
    

       <button className="fixed z-1000 rounded-3xl flex px-6 bottom-10 right-10 shadow-xl text-white bg-[var(--text-sub-h)] p-3 items-center gap-3">
          Chat with Us <img src={whatsApp} alt="" />
        </button>
    </div>
  );
};

export default Home;