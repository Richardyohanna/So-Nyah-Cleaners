import { useEffect } from "react";
import team from "../assets/team.jpeg";
import facade from "../assets/facade hero.png";
import StatsSection from "../component/ui/stat-section";
import { useNavigate } from "react-router-dom";

type HeroImage = {
  id: number;
  image: string;
};

const heroImages: HeroImage[] = [
  {
    id: 1,
    image: team,
  },
];

type TeamData = {
  id: number;
  image: string;
  name: string;
  position: string;
  word: string;
};

const teams: TeamData[] = [
  {
    id: 1,
    image: facade,
    name: "So-nyah Manager",
    position: "CEO & Founder",
    word: "With 12 years in the industry, Sarah built SparkClean on the belief that professional cleaning should be both exceptional and ethical. She personally certifies every new hire.",
  },
  {
    id: 2,
    image: facade,
    name: "So-nyah Manager",
    position: "CEO & Founder",
    word: "With 12 years in the industry, Sarah built SparkClean on the belief that professional cleaning should be both exceptional and ethical. She personally certifies every new hire.",
  },
  {
    id: 3,
    image: facade,
    name: "So-nyah Manager",
    position: "CEO & Founder",
    word: "With 12 years in the industry, Sarah built SparkClean on the belief that professional cleaning should be both exceptional and ethical. She personally certifies every new hire.",
  },
  {
    id: 4,
    image: facade,
    name: "So-nyah Manager",
    position: "CEO & Founder",
    word: "With 12 years in the industry, Sarah built SparkClean on the belief that professional cleaning should be both exceptional and ethical. She personally certifies every new hire.",
  },
  {
    id: 5,
    image: facade,
    name: "So-nyah Manager",
    position: "CEO & Founder",
    word: "With 12 years in the industry, Sarah built SparkClean on the belief that professional cleaning should be both exceptional and ethical. She personally certifies every new hire.",
  },
];

const About = () => {

  const navigate = useNavigate();

  useEffect(() => {
    if (heroImages.length <= 1) return;

    const interval = window.setInterval(() => {
      // image slider logic here if needed later
    }, 4000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="bg-white  pb-16">
      <section id="about-us" className="pt-20 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20">
        <div>
          <h3 className="text-[var(--primary)] head text-[28px] sm:text-[34px] lg:text-[42px] xl:text-[48px] tracking-normal! font-bold">
            About Us
          </h3>
          <div className="border-b-[5px] w-[80px] sm:w-[100px] border-[var(--primary)]"></div>
        </div>

      <section
        id="hero"
        className="relative bg-transparent"
      >
        <div className="relative z-10 flex flex-col lg:flex-row justify-between w-full gap-10 lg:gap-12 items-center lg:items-start">
          {/* LEFT / TEXT SECTION */}
          <div className="relative w-full lg:w-1/2">
            <div className="relative z-10">
              <div>
                <p className="w-full max-w-full lg:max-w-[520px] text-[15px] sm:text-[16px] leading-7 text-[var(--accent-text)] mt-5">
                    Sonyah is more than a cleaning company; we are a detail obsessed 
                    service brand built for people who value excellence. We understand 
                    that your space is a reflection of you, and we treat it with the 
                    same level of care, precision, and respect it deserves.
                  <br />
                  <br />
                    From Residental to Corporate environments, our approach is simple: 
                    deliver a flawless finish, every time. We combine skilled 
                    professionals, refined processes, and a deep commitment to quality 
                    to create spaces that don’t just look clean; they feel elevated.

                  <br />
                  <br />
                    At So-nyah Cleaners, we don’t just clean. We restore order, enhance 
                    comfort, and give you the confidence that your environment is exactly
                    as it should be.

                </p>

                <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 mt-6">
                  <button onClick={() => navigate("/contact")} className="bg-[var(--primary)] text-white px-5 py-3 rounded-3xl font-semibold transition-all duration-300 hover:scale-105 w-full sm:w-auto">
                    Contact Us
                  </button>
                  <button onClick={() => navigate("/services")} className="bg-[var(--bg-section)] text-[var(--primary)] px-5 py-3 rounded-3xl font-semibold transition-all duration-300 hover:scale-105 w-full sm:w-auto">
                    View Our Services
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT / IMAGE SECTION */}
          <div className="relative flex w-full lg:w-1/2 items-center justify-center mt-2 lg:mt-10 rounded-[24px] sm:rounded-[32px]">
            <div className="relative w-full max-w-[700px] h-[260px] sm:h-[340px] md:h-[420px] lg:h-[500px] overflow-hidden ">
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


    {/** Our Mission */}
    <section
        id="our-mission"
        className="px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 mt-20"
      >


        <div className="mt-10">

        <div>
          <h3 className="text-[var(--primary)] head text-[28px] sm:text-[34px] lg:text-[42px] xl:text-[48px] tracking-normal! font-bold">
            Our Mission
          </h3>
          <div className="border-b-[5px]  w-[80px] sm:w-[100px] border-[var(--primary)]"></div>
        </div>

          <p className="text-[15px] mt-5 sm:text-[16px] leading-7 text-[var(--accent-text)]">
              To deliver exceptional, detail obsessed cleaning services 
              that transform spaces and exceed client expectations at every touchpoint.
          </p>
      </ div>

    </section>

      <section
        id="our-vision"
        className="px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 mt-20"
      >


        <div className="mt-10">

        <div>
          <h3 className="text-[var(--primary)] head text-[28px] sm:text-[34px] lg:text-[42px] xl:text-[48px] tracking-normal! font-bold">
            Our Vision
          </h3>
          <div className="border-b-[5px]  w-[80px] sm:w-[100px] border-[var(--primary)]"></div>
        </div>

          <p className="text-[15px] mt-5 sm:text-[16px] leading-7 text-[var(--accent-text)]">
              To be a globally revered cleaning brand, synonymous with luxury, 
              precision, and uncompromising excellence.

          </p>
        </div>

        <div
          className="relative rounded-2xl w-full h-[220px] sm:h-[260px] md:h-[300px] mt-6 overflow-hidden bg-cover bg-top"
          style={{
            backgroundImage: `url(${facade})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

          <div className="relative z-10 h-full flex items-end p-4 sm:p-6 md:p-8 text-white">
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

      <section
        id="our-team"
        className="px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 pt-20"
      >
        <div>
          <h3 className="text-[var(--primary)] head text-[28px] sm:text-[34px] lg:text-[42px] xl:text-[48px] tracking-normal! font-bold">
            Our Team
          </h3>
          <div className="border-b-[5px] w-[80px] sm:w-[100px] border-[var(--primary)]"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-10 pt-10">
          {teams.map((teamData) => (
            <div key={teamData.id} className="w-full max-w-full sm:max-w-[320px] mx-auto">
              <img
                src={teamData.image}
                alt={teamData.name}
                className="w-full h-[240px] sm:h-[260px] object-cover rounded-t-xl"
              />
              <div className="border-t-4 border-[var(--primary)] pt-3">
                <h3 className="text-xl sm:text-2xl font-bold tracking-wide">
                  {teamData.name}
                </h3>
                <h4 className="text-[var(--primary)] font-bold">
                  {teamData.position}
                </h4>
                <p className="pt-3 text-sm sm:text-base leading-7">
                  {teamData.word}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;