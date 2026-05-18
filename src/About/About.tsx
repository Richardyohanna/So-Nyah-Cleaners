import { useEffect, useRef, useState } from "react";
import team from "../assets/team.jpeg";
import facade from "../assets/facade hero.png";
import StatsSection from "../component/ui/stat-section";
import { useNavigate } from "react-router-dom";

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

const fadeIn = (visible: boolean, delay = 0): React.CSSProperties => ({
  opacity: visible ? 1 : 0,
  transition: `opacity 0.7s ease ${delay}ms`,
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

  return (
    <div
      ref={ref as React.Ref<HTMLDivElement>}
      key={teamData.id}
      className="w-full max-w-full sm:max-w-[320px] mx-auto"
      style={fadeUp(isVisible, index * 100)}
    >
      <img
        src={teamData.image}
        alt={teamData.name}
        className="w-full h-[240px] sm:h-[260px] object-cover rounded-t-xl"
      />
      <div className="border-t-4 border-[var(--primary)] pt-3">
        <h3 className="text-xl sm:text-2xl font-bold tracking-wide">{teamData.name}</h3>
        <h4 className="text-[var(--primary)] font-bold">{teamData.position}</h4>
        <p className="pt-3 text-sm sm:text-base leading-7">{teamData.word}</p>
      </div>
    </div>
  );
}

// ── Data ─────────────────────────────────────────────────────────────────────
type HeroImage = { id: number; image: string };
const heroImages: HeroImage[] = [{ id: 1, image: team }];

const teams: TeamData[] = [
  { id: 1, image: facade, name: "So-nyah Manager", position: "CEO & Founder", word: "With 12 years in the industry, Sarah built SparkClean on the belief that professional cleaning should be both exceptional and ethical. She personally certifies every new hire." },
  { id: 2, image: facade, name: "So-nyah Manager", position: "CEO & Founder", word: "With 12 years in the industry, Sarah built SparkClean on the belief that professional cleaning should be both exceptional and ethical. She personally certifies every new hire." },
  { id: 3, image: facade, name: "So-nyah Manager", position: "CEO & Founder", word: "With 12 years in the industry, Sarah built SparkClean on the belief that professional cleaning should be both exceptional and ethical. She personally certifies every new hire." },
  { id: 4, image: facade, name: "So-nyah Manager", position: "CEO & Founder", word: "With 12 years in the industry, Sarah built SparkClean on the belief that professional cleaning should be both exceptional and ethical. She personally certifies every new hire." },
  { id: 5, image: facade, name: "So-nyah Manager", position: "CEO & Founder", word: "With 12 years in the industry, Sarah built SparkClean on the belief that professional cleaning should be both exceptional and ethical. She personally certifies every new hire." },
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

  const teamRef = useRef<HTMLElement>(null);
  const [teamVisible, setTeamVisible] = useState(false);

  useEffect(() => {
    const pairs: [React.RefObject<HTMLElement | HTMLDivElement | null>, (v: boolean) => void][] = [
      [heroRef, setHeroVisible],
      [missionRef, setMissionVisible],
      [visionRef, setVisionVisible],
      [teamRef, setTeamVisible],
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
    <div className="bg-white pb-16">

      {/* ── ABOUT HERO ──────────────────────────────────────────────────────── */}
      <section id="about-us" className="pt-20 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20">

        {/* Heading — animate in on mount */}
        <div style={{ animation: "aboutHeadIn 0.75s ease 0.1s both" }}>
          <style>{`
            @keyframes aboutHeadIn {
              from { opacity: 0; transform: translateY(28px); }
              to   { opacity: 1; transform: translateY(0); }
            }
            @keyframes underlineDraw {
              from { width: 0; }
              to   { width: 100px; }
            }
          `}</style>
          <h3 className="text-[var(--primary)] head text-[28px] sm:text-[34px] lg:text-[42px] xl:text-[48px] tracking-normal! font-bold">
            About Us
          </h3>
          <div
            className="border-b-[5px] border-[var(--primary)]"
            style={{ animation: "underlineDraw 0.7s ease 0.4s both", width: 0 }}
          />
        </div>

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
                  <button onClick={() => navigate("/contact")} className="bg-[var(--primary)] text-white px-5 py-3 rounded-3xl font-semibold transition-all duration-300 hover:scale-105 w-full sm:w-auto">
                    Contact Us
                  </button>
                  <button onClick={() => navigate("/services")} className="bg-[var(--bg-section)] text-[var(--primary)] px-5 py-3 rounded-3xl font-semibold transition-all duration-300 hover:scale-105 w-full sm:w-auto">
                    View Our Services
                  </button>
                </div>
              </div>
            </div>

            {/* RIGHT — image slides in from right */}
            <div
              className="relative flex w-full lg:w-1/2 items-center justify-center mt-2 lg:mt-10 rounded-[24px] sm:rounded-[32px]"
              style={slideRight(heroVisible, 150)}
            >
              <div className="relative w-full max-w-[700px] h-[260px] sm:h-[340px] md:h-[420px] lg:h-[500px] overflow-hidden">
                <img
                  src={team}
                  alt="Our team"
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>

          <StatsSection />
        </section>
      </section>

      {/* ── OUR MISSION ─────────────────────────────────────────────────────── */}
      <section
        id="our-mission"
        ref={missionRef}
        className="px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 mt-20"
      >
        <div className="mt-10">
          <div style={fadeUp(missionVisible, 0)}>
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
          </div>

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
      <section
        id="our-vision"
        ref={visionRef}
        className="px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 mt-20"
      >
        <div className="mt-10">
          <div style={fadeUp(visionVisible, 0)}>
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
          </div>

          <p
            className="text-[15px] mt-5 sm:text-[16px] leading-7 text-[var(--accent-text)]"
            style={fadeUp(visionVisible, 200)}
          >
            To be a globally revered cleaning brand, synonymous with luxury,
            precision, and uncompromising excellence.
          </p>
        </div>

        <div
          className="relative rounded-2xl w-full h-[220px] sm:h-[260px] md:h-[300px] mt-6 overflow-hidden bg-cover bg-top"
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
        </div>
      </section>

      {/* ── OUR TEAM ────────────────────────────────────────────────────────── */}
      <section
        id="our-team"
        ref={teamRef}
        className="px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 pt-20"
      >
        <div style={fadeUp(teamVisible, 0)}>
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
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-10 pt-10">
          {teams.map((teamData, index) => (
            <AnimatedTeamCard key={teamData.id} teamData={teamData} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;