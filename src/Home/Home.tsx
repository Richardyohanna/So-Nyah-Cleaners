import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";


import CustomButton from "../component/ui/custom-button";
import before1 from "../assets/before 1.jpeg";
import after1 from "../assets/after 1.jpeg";
import before2 from "../assets/before 2.jpeg";
import after2 from "../assets/after 2.jpeg";
import guarantee from "../assets/gurrantee.png";
import logoTransition from "../assets/logo_without_text.png";
import whatsApp from "../assets/whatsApp.png";
import botanicalLeaf from "../assets/botanical-leaf.png"
import pet from "../assets/pet.png"
import water from "../assets/water.png"

type HeroSlide = {
  id: number;
  titleTop: string;
  titleBottom: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  guaranteeValue: string;
  guaranteeText: string;
};

const heroSlides: HeroSlide[] = [
  {
    id: 1,
    titleTop: "Cleaning Spaces,",
    titleBottom: "Creating Happy Faces",
    description:
      "Experience the tranquility of a truly pure home. Our botanical-based cleaning solutions and meticulous attention to detail create sanctuaries that breathe.",
    beforeImage: before1,
    afterImage: after1,
    guaranteeValue: "100%",
    guaranteeText: "NON-TOXIC GUARANTEE",
  },
  {
    id: 2,
    titleTop: "Fresh Homes,",
    titleBottom: "Peaceful Living",
    description:
      "We restore beauty, comfort, and hygiene to every space with safe, eco-conscious cleaning that leaves your environment refreshed and welcoming.",
    beforeImage: before2,
    afterImage: after2,
    guaranteeValue: "24/7",
    guaranteeText: "TRUSTED CLEANING CARE",
  },
];

const HEADER_HEIGHT = 66;

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [textCoverActive, setTextCoverActive] = useState(false);
  const [imageCoverActive, setImageCoverActive] = useState(false);

  const timersRef = useRef<number[]>([]);

  const currentSlide = heroSlides[currentIndex];

  useEffect(() => {
    const runAnimation = () => {
      setTextCoverActive(true);
      console.log(textCoverActive);

      const t1 = window.setTimeout(() => {
        setImageCoverActive(true);
      }, 250);

      const t2 = window.setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
      }, 700);

      const t3 = window.setTimeout(() => {
        setTextCoverActive(false);
        setImageCoverActive(false);
      }, 1400);

      timersRef.current.push(t1, t2, t3);
    };

    const interval = window.setInterval(runAnimation, 5000);

    return () => {
      window.clearInterval(interval);
      timersRef.current.forEach((id) => window.clearTimeout(id));
    };
  }, []);

  

  return (
    <div className="overflow-hidden bg-white px-20 flex flex-col gap-10 pb-20">
      
      <section
        id="hero"
        className="relative bg-white flex items-center justify-between overflow-hidden mt-5 "
        style={{ minHeight: `calc(100vh - ${HEADER_HEIGHT}px)` }}
      >
       {/*} <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url(${heroImage})`,
          }}
        /> */}

        <div className="relative z-10 flex flex-row justify-between w-full gap-12 items-center  min-h-screen">
          {/* LEFT / TEXT SECTION */}
          <div className="relative mt-2 w-full max-w-[620px] rounded-[32px]">
            {/* logo text cover */}


            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide.id}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -28 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative z-10 "
              >

                <div>
                  <h1 className="text-[96px] leading-[0.95] mt-5 tracking-[-4px] font-medium text-[var(--primary)]">
                    {currentSlide.titleTop}
                    <br />
                    <span className="text-[var(--text-sub-h)]">
                      {currentSlide.titleBottom.split(" ").map((word, index, arr) => (
                        <span key={index}>
                          {word}
                          {index !== arr.length - 1 && <br />}
                        </span>
                      ))}
                    </span>
                  </h1>

                  <p className="max-w-[520px] text-[var(--accent-text)] mt-5">
                    {currentSlide.description}
                  </p>

                  <div className="flex flex-row gap-5 mt-5">
                    <CustomButton text="Schedule a visit" />
                    <button className="bg-[var(--bg-section)] text-[var(--primary)] px-5 py-2 rounded-3xl shadow-xl font-semibold transition-all duration-300 hover:scale-105 hover:bg-white">
                      View Our Services
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT / IMAGE SECTION */}
          <div className="relative flex flex-row max-w-[644px] max-h-[698px] w-full h-full gap-4   items-center justify-center mt-10 rounded-[32px]">
            {/* logo image cover */}
            <motion.div
                initial={{ y: "120%" }}
                animate={
                    imageCoverActive
                    ? { y: "0%", opacity: 1 }
                    : { y: "120%", opacity: 0 }
                }
                transition={{ duration: 0.75, ease: "easeInOut" }}
                className="absolute inset-0 z-20 rounded-[32px] bg-white/95 backdrop-blur-sm flex items-center justify-center overflow-hidden"
                >
                <img
                    src={logoTransition}
                    alt="So-Nyah logo transition"
                    className="w-[160px] h-[160px] object-contain"
                />
                </motion.div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide.id}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.03 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative flex flex-row w-full h-full gap-4"
              >
                {/* Before */}
                <div className="relative rounded-2xl w-full h-full overflow-hidden">
                  <img
                    src={currentSlide.beforeImage}
                    alt="Cannot load before image"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                  <p className="absolute top-1 p-1 px-4 rounded-2xl left-1 text-white text-2xl">
                    BEFORE
                  </p>
                </div>

                {/* After */}
                <div className="relative rounded-2xl overflow-hidden w-full h-full">
                  <img
                    src={currentSlide.afterImage}
                    alt="Cannot load after image"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                  <p className="absolute top-1 p-1 px-4 rounded-2xl left-1 text-white text-2xl">
                    AFTER
                  </p>
                </div>

                {/* Guarantee */}
                <div className="absolute -bottom-4  -left-20 bg-white px-3 rounded-2xl p-4 flex gap-x-4 shadow-xl ">
                  <div className="bg-[var(--text-sub-h)] rounded-full w-[48px] h-[48px] flex items-center justify-center">
                    <img
                      src={guarantee}
                      alt="guarantee icon"
                      className="w-5 h-5 object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-[var(--primary)] font-bold text-lg">
                      {currentSlide.guaranteeValue}
                    </p>
                    <p className="text-[16px] text-[var(--accent-text)]">
                      {currentSlide.guaranteeText}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>


      </section>
      
      <section id="friendly-difference"
          className="mt-10"
      >
          <h2 className="text-[var(--primary)] text-[58px] leading-[1] text-bold tracking-[4px]">The Eco-Friendly <br/> <span className="text-[var(--text-sub-h)]">Difference</span></h2>
          
          <div className="flex flex-row mt-10 justify-between">
            <p className="max-w-[600px] text-[var(--accent-text)]">
              We believe that a clean home shouldn't come at the cost of your health or the
              environment. Our signature Abuja Green Protocol ensures safety for the whole
              family.
            </p>
            <p className="text-[var(--text-sub-h)] p-4 rounded-xl h-fit items-center bg-[var(--accent-bg)]">Safe for Pets & Newborns</p>
          </div>

          <div className="mt-10 flex flex-row gap-5">

              <div className="flex flex-col gap-3">
                <div>
                  <img src={botanicalLeaf} alt="Cannot load Botanical icon" />
                </div>
                <h4 className="font-bold -mt-2">Botanical Agents</h4>
                <p>
                  We exclusively use plant-based surfactants and
                  essential oil extracts that eliminate bacteria
                  without leaving volatile organic compounds
                  (VOCs) in your air.
                </p>
            </div>
            

            <div className="flex flex-col gap-3">
                <div>
                  <img src={pet} alt="Cannot load Botanical icon" />
                </div>
                <h4 className="font-bold -mt-2">Pet-First Policy</h4>
                <p>
                  Our cleaning solutions are strictly pH-balanced
                  and fragrance-free to protect the sensitive paws
                  and respiratory systems of your beloved pets.
                </p>
            </div>


            <div className="flex flex-col gap-3">
                <div>
                  <img src={water} alt="Cannot load Botanical icon" />
                </div>
                <h4 className="font-bold -mt-2">Botanical Agents</h4>
                <p>
                  In line with Abuja's environmental goals, we utilize
                  low-moisture technology that saves up to 40%
                  more water than traditional deep-cleaning
                  methods.
                </p>
            </div>
            <div>

            </div>
            <div>

            </div>
          </div>
      </section>

       <button className="fixed z-1000 rounded-3xl flex px-6 bottom-10 right-10 shadow-xl text-white bg-[var(--text-sub-h)] p-3 items-center gap-3">
          Chat with Us <img src={whatsApp} alt="" />
        </button>
    </div>
  );
};

export default Home;