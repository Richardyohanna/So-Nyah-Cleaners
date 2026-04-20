import { useEffect, useRef, useState } from "react";

const stats = [
  {
    number: 500,
    suffix: "+",
    label: "Happy Clients",
  },
  {
    number: 700,
    suffix: "+",
    label: "Cleaned Spaces",
  },
  {
    number: 7,
    suffix: "",
    label: "Years of Experience",
  },
];

export default function StatsSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [startCount, setStartCount] = useState(false);
  const [counts, setCounts] = useState([0, 0, 0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!startCount) return;

    const intervals = stats.map((stat, index) => {
      let current = 0;
      const increment = Math.ceil(stat.number / 60);

      return setInterval(() => {
        current += increment;

        if (current >= stat.number) {
          current = stat.number;
          clearInterval(intervals[index]);
        }

        setCounts((prev) => {
          const updated = [...prev];
          updated[index] = current;
          return updated;
        });
      }, 30);
    });

    return () => intervals.forEach((interval) => clearInterval(interval));
  }, [startCount]);

  return (
    <div
      ref={sectionRef}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-16 lg:mt-20 text-center"
    >
      {stats.map((stat, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center"
        >
          <h2 className="text-[42px] sm:text-[54px] lg:text-[68px] font-bold text-[#7a0b8d] leading-none transition-all duration-500">
            {counts[index]}
            {stat.suffix}
          </h2>

          <p className="mt-4 text-[16px] sm:text-[18px] lg:text-[22px] tracking-[1px] sm:tracking-[2px] text-[#6b6470] uppercase font-bold">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}