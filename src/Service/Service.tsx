import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { servicesData } from "../data/servicesData";

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

// ── Animated card wrapper — each card observes itself ───────────────────────
function AnimatedServiceCard({
  service,
  index,
  onClick,
}: {
  service: (typeof servicesData)[0];
  index: number;
  onClick: () => void;
}) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div
      ref={ref as React.Ref<HTMLDivElement>}
      onClick={onClick}
      className="w-full sm:max-w-[323px] flex flex-col cursor-pointer group transition-all duration-300 hover:-translate-y-2"
      style={fadeUp(isVisible, index * 80)}
    >
      <div className="overflow-hidden rounded-2xl">
        <img
          src={service.heroImage}
          alt="service"
          className="rounded-2xl h-[260px] sm:h-[320px] lg:max-h-[360px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-row mt-3 gap-4 sm:gap-5">
        <h3 className="text-3xl sm:text-4xl text-[var(--service-number)] shrink-0 transition-colors duration-300 group-hover:text-[var(--primary)]">
          0{service.id}
        </h3>

        <div className="w-full min-w-0 gap-3 flex flex-col items-start">
          <h4 className="text-base sm:text-lg font-bold transition-colors duration-300 group-hover:text-[var(--primary)]">
            {service.title}
          </h4>

          <p className="break-words transition-colors duration-300 group-hover:text-[#555] line-clamp-3 text-sm sm:text-base">
            {service.shortDescription}
          </p>

          <button className="text-[var(--primary)] transition-all duration-300 hover:underline group-hover:translate-x-1">
            Read More...
          </button>
        </div>
      </div>
    </div>
  );
}

const Service = () => {
  const navigate = useNavigate();

  // Header reveal
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true);
          obs.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="bg-white pd-20 sm:pb-20 md:pb-20 lg:pd-20">
      <section id="general-service" className="px-4 sm:px-6 md:px-10 lg:px-20 flex flex-col gap-10">

        {/* Header */}
        <div
          ref={headerRef}
          className="mt-10 flex flex-col items-center"
          style={fadeUp(headerVisible, 0)}
        >
          <h3 className="text-[var(--primary)] head text-[32px] sm:text-[38px] lg:text-[48px] tracking-normal! font-bold items-center text-center">
            Our Services
          </h3>

          {/* Underline */}
          <div
            className="border-b sm:border-b-2 md:border-b-4 lg:border-b-5 border-[var(--primary)] items-center text-center flex"
            style={{
              width: headerVisible ? "200px" : "0px",
              transition: "width 0.7s ease 0.3s",
              overflow: "hidden",
            }}
          />
        </div>

        {/* Cards grid — each card self-animates */}
        <div className="mt-3 sm:mt-4 md:mt-6 lg:mt-10 flex gap-8 md:gap-10 justify-center flex-wrap w-full">
          {servicesData.map((service, index) => (
            <AnimatedServiceCard
              key={index}
              service={service}
              index={index}
              onClick={() => navigate(`/service/${service.slug}`)}
            />
          ))}
        </div>

      </section>
    </div>
  );
};

export default Service;