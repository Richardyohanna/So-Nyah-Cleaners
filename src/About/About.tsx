import { useEffect, useRef, useState } from "react";
import team from "../assets/team.jpeg";
import facade from "../assets/facade hero.png";
import StatsSection from "../component/ui/stat-section";
import { useNavigate } from "react-router-dom";
import about from "../assets/about2.mp4";
import ceo from "../assets/CEO.png";

// ── Scroll animation helpers ─────────────────────────────────────────────────
function useScrollReveal(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLElement | null>(null);
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
      { threshold: 0.08, rootMargin: "0px 0px -30px 0px", ...options }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}

const fadeUp = (visible: boolean, delay = 0): React.CSSProperties => ({
  opacity: visible ? 1 : 0,
  transform: visible ? "translateY(0px)" : "translateY(36px)",
  transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
});

const slideLeft = (visible: boolean, delay = 0): React.CSSProperties => ({
  opacity: visible ? 1 : 0,
  transform: visible ? "translateX(0px)" : "translateX(-40px)",
  transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
});

const slideRight = (visible: boolean, delay = 0): React.CSSProperties => ({
  opacity: visible ? 1 : 0,
  transform: visible ? "translateX(0px)" : "translateX(40px)",
  transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
});

// ── Per-card animated wrapper ────────────────────────────────────────────────
type TeamData = {
  id: number;
  image: string;
  name: string;
  position: string;
  word: string;
};

function AnimatedTeamCard({ teamData, index }: { teamData: TeamData; index: number }) {
  const { ref, isVisible } = useScrollReveal();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    // next tick so the transition actually animates in
    requestAnimationFrame(() => setModalVisible(true));
  };

  const closeModal = () => {
    setModalVisible(false);
    setTimeout(() => setIsModalOpen(false), 250);
  };

  useEffect(() => {
    if (!isModalOpen) return;
    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isModalOpen]);

  return (
    <>
      <div
        ref={ref as React.Ref<HTMLDivElement>}
        key={teamData.id}
        className="w-full max-w-full flex flex-col  items-center sm:max-w-[320px] mx-auto"
        style={fadeUp(isVisible, index * 100)}
      >
      <div className="w-72 h-72 rounded-full overflow-hidden mx-auto">
        <img
          src={teamData.image}
          alt={teamData.name}
          className="w-full h-full object-cover"
          style={{
            objectPosition: "center 18%",
          }}
        />
      </div>
        <h3 className="text-[20px]! text-center pt-3! sm:text-2xl font-bold tracking-wide">
          {teamData.name}
        </h3>
        <h4 className="text-[var(--primary)] text-center font-bold">{teamData.position}</h4>
        <p className="pt-3 text-sm sm:text-base text-center leading-7 line-clamp-3">
          {teamData.word}
        </p>

        <div className="flex items-center justify-center pt-3">
          <button
            type="button"
            onClick={openModal}
            className="bg-[var(--primary)] text-lg! text-white px-5 py-2  font-semibold transition-all duration-300 hover:bg-purple-900 hover:scale-105"
          >
            Read more
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4 sm:px-6"
          style={{
            opacity: modalVisible ? 1 : 0,
            transition: "opacity 0.25s ease",
          }}
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-2xl max-w-md w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 relative shadow-2xl"
            style={{
              opacity: modalVisible ? 1 : 0,
              transform: modalVisible ? "translateY(0px) scale(1)" : "translateY(20px) scale(0.97)",
              transition: "opacity 0.25s ease, transform 0.25s ease",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeModal}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full text-[var(--primary)] hover:bg-[var(--bg-section)] text-xl font-bold transition-colors cursor-pointer"
              aria-label="Close"
            >
              &times;
            </button>

            <div className="w-72 h-72 rounded-full overflow-hidden mx-auto">
              <img
                src={teamData.image}
                alt={teamData.name}
                className="w-full h-full object-cover"
                style={{
                  objectPosition: "center 18%",
                }}
              />
            </div>

            {/* <img
              src={teamData.image}
              alt={teamData.name}
              className="w-24 h-24 sm:w-28 sm:h-28 w-full h-full object-cover object-center rounded-full mx-auto"
            /> */}
            <h3 className="text-xl sm:text-2xl text-center pt-4 font-bold tracking-wide">
              {teamData.name}
            </h3>
            <h4 className="text-[var(--primary)] text-center font-bold pt-1">
              {teamData.position}
            </h4>
            <div className="border-b-[3px] border-[var(--primary)] w-[60px] mx-auto mt-3" />
            <p className="pt-5 text-sm sm:text-base text-[var(--accent-text)] text-left leading-7 whitespace-pre-line">
              {teamData.word}
            </p>
          </div>
        </div>
      )}
    </>
  );
}

// ── Data ─────────────────────────────────────────────────────────────────────
type HeroImage = { id: number; image: string };
const heroImages: HeroImage[] = [{ id: 1, image: team }];

const teams: TeamData[] = [
  { id: 1, image: ceo, name: "Uchenna Linda Nzewigbo", position: "Founder/Managing Director", word: `Uchenna Linda Nzewigbo is the Founder and Managing Director So-nyah Integrated Ventures Ltd, a company committed to delivering professional cleaning, facility management, maintenance, and environmental solutions.
With 7 years in the cleaning industry and driven by excellence, Uchenna has built So-nyah with a strong focus on professionalism, reliability, and customer satisfaction. He believes that clean and well-maintained spaces contribute to healthier lives, better productivity, and happier communities.

Beyond business, Uchenna is dedicated to promoting higher standards within the cleaning industry through leadership, collaboration, and continuous learning. Her vision is to build a trusted brand known for quality service, integrity, and lasting impact.` },
  { id: 2, image: facade, name: "Amanda Essien-Nsa", position: "Chief Operating Officer", word: `Amanda Essien-Nsa serves as the Chief Operating Officer of So-nyah Integrated Ventures Ltd, where she plays a key role in driving the company's operational excellence and business growth. Since joining the organization over three years ago, she has consistently demonstrated exceptional dedication, strategic thinking, and a strong commitment to delivering results.

With a background in Political Science, Amanda has been instrumental in securing major business opportunities while ensuring projects are executed to the highest professional standards. Her ability to build lasting client relationships, coordinate teams effectively, and oversee seamless operations has contributed significantly to the company's continued growth and reputation for excellence.

Beyond her role at So-nyah, she is also an accomplished event planner and entrepreneur, successfully managing her own event planning business. Her diverse experience, attention to detail, and passion for service excellence bring valuable insight to every project she leads.

Amanda remains committed to advancing the vision of So-nyah Integrated Ventures Ltd, ensuring that every client receives an exceptional and credible service.`},
  { id: 3, image: facade, name: "Shedrack Emmanuel", position: "Manager", word: `Shedrack Emmanuel serves as the Manager at So-nyah Integrated Ventures Ltd, where he has been a dedicated member of the team for over three years. Through consistent performance, hands-on experience, and professional training supported by the company, he has developed strong expertise in cleaning operations, facility support, and environmental services.

Known for his reliability, willingness to learn, and commitment to continuous improvement, Shedrack plays an important role in ensuring that projects are executed efficiently and to the high standards that So-nyah is known for.` },
  { id: 4, image: facade, name: "So-nyah Manager", position: "Head Site Supervisor", word: "With 12 years in the industry, Sarah built SparkClean on the belief that professional cleaning should be both exceptional and ethical. She personally certifies every new hire." },
 
];

// ── Component ────────────────────────────────────────────────────────────────
const About = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (heroImages.length <= 1) return;
    const interval = window.setInterval(() => {}, 4000);
    return () => window.clearInterval(interval);
  }, []);

  // Section refs
  const heroRef = useRef<HTMLDivElement>(null);
  const [heroVisible, setHeroVisible] = useState(false);

  const missionRef = useRef<HTMLElement>(null);
  const [missionVisible, setMissionVisible] = useState(false);

  const visionRef = useRef<HTMLElement>(null);
  const [visionVisible, setVisionVisible] = useState(false);

  
  

  useEffect(() => {
    const pairs: [React.RefObject<HTMLElement | HTMLDivElement | null>, (v: boolean) => void][] = [
      [heroRef, setHeroVisible],
      [missionRef, setMissionVisible],
      [visionRef, setVisionVisible],
      
    ];

    const observers = pairs.map(([ref, setter]) => {
      const el = ref.current;
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setter(true);
            obs.unobserve(el);
          }
        },
        { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
      );
      obs.observe(el);
      return obs;
    });

    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  return (

    <>
   
      <section className="relative flex items-center justify-center overflow-hidden bg-[var(--primary)] px-4 py-5 sm:px-5 sm:py-6">
          
          <h3 className="text-white! head text-[32px] sm:text-[38px] lg:text-[48px] tracking-normal! font-bold items-center text-center">
            ABOUT US
          </h3>
      </section>
    <div className="bg-white pb-16">



      {/* ── ABOUT HERO ──────────────────────────────────────────────────────── */}
      <section id="about-us" className="px-4 pt-8 sm:px-6 sm:pt-12 md:px-10 lg:px-16 lg:pt-16 xl:px-20">

        {/* Heading — animate in on mount
        // <div style={{ animation: "aboutHeadIn 0.75s ease 0.1s both" }}>
        //   <style>{`
        //     @keyframes aboutHeadIn {
        //       from { opacity: 0; transform: translateY(28px); }
        //       to   { opacity: 1; transform: translateY(0); }
        //     }
        //     @keyframes underlineDraw {
        //       from { width: 0; }
        //       to   { width: 100px; }
        //     }
        //   `}</style>
        //   <h3 className="text-[var(--primary)] head text-[28px] sm:text-[34px] lg:text-[42px] xl:text-[48px] tracking-normal! font-bold">
        //     About Us
        //   </h3>
        //   <div
        //     className="border-b-[5px] border-[var(--primary)]"
        //     style={{ animation: "underlineDraw 0.7s ease 0.4s both", width: 0 }}
        //   />
        // </div> */}

        <section id="hero" className="relative bg-transparent">
          <div
            ref={heroRef}
            className="relative z-10 flex flex-col lg:flex-row justify-between w-full gap-10 lg:gap-12 items-center lg:items-start"
          >
            {/* LEFT — text slides in from left */}
            <div
              className="relative w-full lg:w-1/2"
              style={slideLeft(heroVisible, 0)}
            >
              <div className="relative z-10">
                <p className="w-full max-w-full lg:max-w-[520px] text-[15px] sm:text-[16px] leading-7 text-[var(--accent-text)] mt-5">
                  
                                 
                  
                  Sonyah is more than a cleaning company; we are a detail obsessed
                  service brand built for people who value excellence. We understand
                  that your space is a reflection of you, and we treat it with the
                  same level of care, precision, and respect it deserves.
                  <br /><br />
                  From Residental to Corporate environments, our approach is simple:
                  deliver a flawless finish, every time. We combine skilled
                  professionals, refined processes, and a deep commitment to quality
                  to create spaces that don't just look clean; they feel elevated.
                  <br /><br />
                  At So-nyah Cleaners, we don't just clean. We restore order, enhance
                  comfort, and give you the confidence that your environment is exactly
                  as it should be.
                </p>

                <div
                  className="flex flex-col sm:flex-row gap-4 sm:gap-5 mt-6"
                  style={fadeUp(heroVisible, 250)}
                >
                  <button onClick={() => navigate("/contact")} className="bg-[var(--primary)] text-white px-5 py-3 font-semibold transition-all duration-300 hover:scale-105 w-full sm:w-auto">
                    Contact Us
                  </button>
                  <button onClick={() => navigate("/services")} className="bg-[var(--bg-section)] text-[var(--primary)] px-5 py-3 font-semibold transition-all duration-300 hover:scale-105 w-full sm:w-auto">
                    View Our Services
                  </button>
                </div>
              </div>
            </div>

            {/* RIGHT — image slides in from right */}
            <div
              className="relative flex w-full lg:w-1/2 items-center justify-center mt-2 lg:mt-10 "
              style={slideRight(heroVisible, 150)}
            >
              <div className="relative w-full max-w-[700px] h-[260px] sm:h-[340px] md:h-[420px] lg:h-[500px] overflow-hidden">
                {/* <img
                  src={team}
                  alt="Our team"
                  className="absolute inset-0 w-full h-full object-cover object-top"
                /> */}

                <video 
                  width= "100%"
                  height= "100%"
                  controls
                  autoPlay
                  playsInline
                  loop
                  className="object-bottom inset-0 max:h-114 "
                >
                  <source src={about} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>

          <StatsSection />
        </section>
      </section>

       <section       
       id="our-mission"
        ref={missionRef}
         className="relative mt-12 flex items-center justify-center overflow-hidden bg-[var(--primary)] px-4 py-5 sm:mt-16 sm:px-5 lg:mt-20">
          <h3 className="text-white! head text-[32px] sm:text-[38px] lg:text-[48px] tracking-normal! font-bold items-center text-center">
            OUR MISSION
          </h3>
      </section>

      {/* ── OUR MISSION ─────────────────────────────────────────────────────── */}
      <section
  
        className="px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 mt-10"
      >
        <div className="mt-10">
          {/* <div style={fadeUp(missionVisible, 0)}>
            <h3 className="text-[var(--primary)] head text-[28px] sm:text-[34px] lg:text-[42px] xl:text-[48px] tracking-normal! font-bold">
              Our Mission
            </h3>
            <div
              className="border-b-[5px] border-[var(--primary)]"
              style={{
                width: missionVisible ? "100px" : "0px",
                transition: "width 0.7s ease 0.3s",
                overflow: "hidden",
              }}
            />
          </div> */}

          <p
            className="text-[15px] mt-5 sm:text-[16px] leading-7 text-[var(--accent-text)]"
            style={fadeUp(missionVisible, 200)}
          >
            To deliver exceptional, detail obsessed cleaning services
            that transform spaces and exceed client expectations at every touchpoint.
          </p>
        </div>
      </section>

{/* ── OUR VISION ──────────────────────────────────────────────────────── */}
      <section  id="our-vision" ref={visionRef} className="relative mt-12 flex items-center justify-center overflow-hidden bg-[var(--primary)] px-4 py-5 sm:mt-16 sm:px-5 lg:mt-20">
          
          <h3 className="text-white! head text-[32px] sm:text-[38px] lg:text-[48px] tracking-normal! font-bold items-center text-center">
            OUR VISION
          </h3>
      </section>

      
      <section
          
        className="px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 mt-10"
      >
        <div className="mt-10">
          {/* <div style={fadeUp(visionVisible, 0)}>
            <h3 className="text-[var(--primary)] head text-[28px] sm:text-[34px] lg:text-[42px] xl:text-[48px] tracking-normal! font-bold">
              Our Vision
            </h3>
            <div
              className="border-b-[5px] border-[var(--primary)]"
              style={{
                width: visionVisible ? "100px" : "0px",
                transition: "width 0.7s ease 0.3s",
                overflow: "hidden",
              }}
            />
          </div> */}

          <p
            className="text-[15px] mt-5 sm:text-[16px] leading-7 text-[var(--accent-text)]"
            style={fadeUp(visionVisible, 200)}
          >
            To be a globally revered cleaning brand, synonymous with luxury,
            precision, and uncompromising excellence.
          </p>
        </div>

        {/* <div
          className="relative  w-full h-[220px] sm:h-[260px] md:h-[300px] mt-6 overflow-hidden bg-cover bg-top"
          style={{
            backgroundImage: `url(${facade})`,
            ...fadeIn(visionVisible, 350),
          }}
        >
           <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" /> 
          <div
            className="relative z-10 h-full flex items-end p-4 sm:p-6 md:p-8 text-white"
            style={fadeUp(visionVisible, 500)}
          >
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-wide">
                The Elite Fleet
              </h2>
              <p className="max-w-full sm:max-w-[600px] text-white! text-sm sm:text-base mt-2 leading-6">
                Every team member undergoes 120 hours of specialized training in <br />
                "The So-nyah Method".
              </p>
            </div>
          </div>
        </div> */}
      </section>

      {/* ── OUR CORE VALUE ──────────────────────────────────────────────────────── */}
      <section  id="our-vision" ref={visionRef} className="relative mt-12 flex items-center justify-center overflow-hidden bg-[var(--primary)] px-4 py-5 sm:mt-16 sm:px-5 lg:mt-20">
          
          <h3 className="text-white! head text-[32px] sm:text-[38px] lg:text-[48px] tracking-normal! font-bold items-center text-center">
            OUR CORE VALUES
          </h3>
      </section>

      
      <section          
        className="px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 mt-10"
      >
        <div className="mt-10">
          <p
            className="text-[15px] mt-5 sm:text-[16px] leading-7 text-[var(--accent-text)]"
            style={fadeUp(visionVisible, 200)}
          >
            <b>Excellence in Every Detail -</b> We believe exceptional results come from careful attention to detail. From post-construction cleaning to facility management, we approach every task with precision, thoroughness, and a commitment to quality.

            <br />
            <br />
            <b>Reliability & Integrity -</b> Our word is our bond. We honor our commitments, arrive prepared, communicate honestly, and consistently deliver the results we promise.
            <br />
            <br />
            <b>Professionalism -</b> We conduct ourselves with discipline, respect, and accountability. From our appearance to our service delivery, we maintain standards that inspire confidence and trust.

            <br />
            <br />
            <b>Punctuality & Proactive Service -</b> We value time. By arriving early, planning ahead, and responding promptly, we ensure our clients experience a smooth and dependable service every time.

            <br />
            <br />
            <b>People, Relationships & Culture -</b> Cleaning is more than a service; it is a relationship. We treat clients, employees, and partners with respect, build lasting connections, and promote a culture of teamwork, trust, and care.
          </p>
        </div>

      </section>



      <section       
      
          id="our-team"
          // ref={teamRef}
          className="bg-[var(--primary)] mt-20 p-5 relative overflow-hidden flex justify-center items-center">
          
          <h3 className="text-white! head text-[32px] sm:text-[38px] lg:text-[48px] tracking-normal! font-bold items-center text-center">
            OUR TEAM
          </h3>
      </section>
      {/* ── OUR TEAM ────────────────────────────────────────────────────────── */}
      <section

        className="px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 pt-10"
      >
        {/* <div style={fadeUp(teamVisible, 0)}>
          <h3 className="text-[var(--primary)] head text-[28px] sm:text-[34px] lg:text-[42px] xl:text-[48px] tracking-normal! font-bold">
            Our Team
          </h3>
          <div
            className="border-b-[5px] border-[var(--primary)]"
            style={{
              width: teamVisible ? "100px" : "0px",
              transition: "width 0.7s ease 0.3s",
              overflow: "hidden",
            }}
          />
        </div> */}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2  xl:grid-cols-4 gap-8 lg:gap-30 pt-10">
          {teams.map((teamData, index) => (
            <AnimatedTeamCard key={teamData.id} teamData={teamData} index={index} />
          ))}
        </div>
      </section>
    </div>

    </>
  );
};

export default About;