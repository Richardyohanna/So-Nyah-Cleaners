import { useNavigate } from "react-router-dom";
import { servicesData } from "../data/servicesData";

const Service = () => {
  const navigate = useNavigate();



  return (
    <div className="bg-white pd-20 sm:pb-20 md:pb-20 lg:pd-20">
      <section id="general-service" className="px-4 sm:px-6 md:px-10 lg:px-20 flex flex-col gap-10">
        <div className="mt-30">
          <h3 className="text-[var(--primary)] head text-[32px] sm:text-[38px] lg:text-[48px] leading-[1.1] font-bold items-center text-center">
            Our  Services
          </h3>
        </div>

        <div className="mt-3 sm:mt-4 md:mt-6 lg:mt-10 flex gap-8 md:gap-10 justify-center flex-wrap w-full">
          {servicesData.map((service, index) => (
            <div
              key={index}
               onClick={() => navigate(`/service/${service.slug}`)}
              className="w-full sm:max-w-[323px] flex flex-col cursor-pointer group transition-all duration-300 hover:-translate-y-2"
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
          ))}
        </div>


      </section>
    </div>
  );
};

export default Service;