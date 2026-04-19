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

import { useEffect} from "react";



//import CustomButton from "../component/ui/custom-button";
//import before1 from "../assets/before 1.jpeg";
//import after1 from "../assets/after 1.jpeg";
import team from "../assets/team.png";






type HeroImage = {
  id: number;
  image: string;
};

const heroImages: HeroImage[] = [
  {
    id: 1,
    image: team,
  }

  // add more images here
  // { id: 3, image: before2 },
  // { id: 4, image: after2 },
];




const About = () => {

 // const [currentHeroImageIndex, setCurrentHeroImageIndex] = useState(0);




  useEffect(() => {
    if (heroImages.length <= 1) return;

    const interval = window.setInterval(() => {
     // setCurrentHeroImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);

    return () => window.clearInterval(interval);
  }, []);



    return (
        <div className="bg-white pb-15">
            <section id="about-us" className="px-20">
                <div className="pt-25">
                    <h3 className="text-[var(--primary)]  head text-[32px] sm:text-[38px] lg:text-[48px] leading-[1.1] font-bold ">
                        About Us
                    </h3>
                    <div className="border-b-5 w-[100px] border-[var(--primary)]">

                    </div>
                </div>
            </section>

            <section id="hero" className="relative px-20 mt-10 bg-transparent " > 
                <div className="relative z-10 flex flex-row justify-between w-full gap-12 items-start ">
                    
                     {/* LEFT / TEXT SECTION */} 
                <div className="relative  w-full "> 
                    <div className="relative z-10"> 
                        <div> 
                            <p className="max-w-[520px] text-[var(--accent-text)] mt-5"> 
                               At So-Nyah Cleaners, we believe a clean environment is more than appearance — it is comfort, confidence, health, and peace of mind.

                                Founded with a commitment to excellence, we provide premium cleaning solutions for homes, offices, commercial spaces, furniture, carpets, and post-construction environments. Our mission is to redefine the standards of hygiene through eco-conscious practices, attention to detail, and a deep understanding of what clean truly means.

                                We do not simply clean spaces — we restore freshness, improve comfort, and create environments where people can feel safe, productive, and proud.

                                Whether it is a family home, a busy office, a newly completed building, or a cherished piece of furniture, our team approaches every project with professionalism, precision, and care. We combine modern cleaning methods with trusted products to deliver results that are visible, lasting, and refreshing.

                                What makes So-Nyah different is our dedication to quality, reliability, and customer satisfaction. We understand that every client and every space is unique, which is why we tailor our services to meet specific needs and expectations.

                                At So-Nyah Cleaners, our goal is simple: to create cleaner spaces, healthier environments, and happier faces.
                            </p> 
                        <div className="flex flex-row gap-5 mt-5"> 
                            <button className="bg-[var(--primary)] text-white px-5 py-2 rounded-3xl font-semibold transition-all duration-300 hover:scale-105 "> 
                                Contact Us
                            </button> 
                            <button className="bg-[var(--bg-section)] text-[var(--primary)] px-5 py-2 rounded-3xl font-semibold transition-all duration-300 hover:scale-105 "> 
                                View Our Services 
                            </button> 
                        </div> 
                        </div> 
                    </div> 
                </div> 
                    
                    {/* RIGHT / IMAGE SECTION */} 
                <div className="relative flex flex-row  w-full h-full gap-4 items-center justify-center mt-10 rounded-[32px]"> 
                    <div className="relative  w-[700px] h-[500px] overflow-hidden"> 
                      {/*}  {heroImages.map((item, index) => ( 
                            <img key={item.id} src={item.image} alt={`Hero image ${index + 1}`} 
                            className={`absolute inset-0 w-full h-full object-cover rounded-2xl transition-opacity duration-1000 ease-in-out ${ index === currentHeroImageIndex ? "opacity-100" : "opacity-0" }`} />
                         ))}  */}

                      <img src={team} alt=""
                            className={`absolute inset-0 w-full h-full object-cover `} />
                   
                     </div> 
                </div> 
             </div> 

             <div className="flex justify-between mt-20">
                 <div className="  flex flex-col items-center justify-center ">                   
                    <h2 className="text-[68px] font-bold text-[#7a0b8d] leading-none ">
                        500+
                    </h2>
                    <p className="mt-4 text-[22px] tracking-[2px] text-[#6b6470] uppercase text-2xl font-bold!">
                        Happy Clients
                    </p>
                 </div>

                <div className="  flex flex-col flex-1 items-center justify-center ">                   
                    <h2 className="text-[68px] font-bold text-[#7a0b8d] leading-none "> {/*//drop-shadow-[0_8px_12px_rgba(122,11,141,0.1)] */}
                        700+
                    </h2>
                    <p className="mt-4 text-[22px] tracking-[2px] text-[#6b6470] uppercase text-2xl font-bold!">
                        Cleaned Spaces
                    </p>
                 </div>

                 <div className="  flex flex-col items-center justify-center ">                   
                    <h2 className="text-[68px] font-bold text-[#7a0b8d] leading-none ">
                        7
                    </h2>
                    <p className="mt-4 text-[22px] tracking-[2px] text-[#6b6470] uppercase text-2xl font-bold!">
                         Years of Experience
                    </p>
                 </div>
                    

                
             </div>
            </section>

            <section id="our-vision" className="px-20 mt-20">
                <div className="">
                    <h3 className="text-[var(--primary)]  head text-[32px] sm:text-[38px] lg:text-[48px] leading-[1.1] font-bold ">
                       Our Vision
                    </h3>
                    <div className="border-b-5 w-[100px] border-[var(--primary)]">

                    </div>
                </div>

                <div className="mt-10">
                    
                    <p>
                        Our vision is to become the most trusted name in eco-conscious cleaning, transforming homes, 
                        offices, and commercial spaces into healthier, brighter, and happier environments. We strive 
                        to redefine the standards of hygiene through innovation, professionalism, and care, while 
                        creating spaces that inspire comfort, confidence, and peace of mind.

                        At So-Nyah Cleaners, we envision a future where every environment is not only clean, but truly 
                        refreshed — creating happy faces everywhere we serve.
                    </p>
                </div>
            </section>
        </div>
    )
}

export default About;