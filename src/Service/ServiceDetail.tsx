import back from "../assets/back.png";
import CustomButton from "../component/ui/custom-button";
import whatsApp from "../assets/whatsApp.png";
import { useNavigate, useParams } from "react-router-dom";
import { getServiceBySlug } from "../data/servicesData";

const HEADER_HEIGHT = 66;

const ServiceDetail = () => {
  const navigate = useNavigate();
  const { slug } = useParams();

  const service = slug ? getServiceBySlug(slug) : undefined;

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-[var(--primary)] text-center">
          Service not found
        </h2>
      </div>
    );
  }

  return (
    <div className="bg-white pb-20">
   
      <section
      id="service-hero"
      className="relative overflow-hidden flex justify-center items-center"
      style={{
        minHeight: `calc(60vh - ${HEADER_HEIGHT}px)`,
        maxHeight: `calc(60vh - ${HEADER_HEIGHT}px)`,
      }}
      >
      <div className="absolute z-[100] top-4 sm:top-6 lg:top-8 left-4 sm:left-6 lg:left-8">
        <button
          onClick={() => navigate(-1)}
          className="border-[3px] border-white text-[var(--primary)] px-2 sm:px-3 lg:px-4 py-2 font-semibold transition-all duration-300 hover:scale-105 hover:bg-[var(--primary)]"
        >
          <img
            src={back}
            alt=""
            className="w-[24px] h-[24px] sm:w-[30px] sm:h-[30px] lg:w-[40px] lg:h-[40px] invert brightness-0"
          />
        </button>
      </div>

      <div className="absolute inset-0">
        <img
          src={service.heroImage}
          alt={service.title}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40  sm:bg-black/20 lg:bg-black/40"  />

        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/25 to-transparent sm:from-black/70 sm:via-black/25 lg:from-black/85 lg:via-black/30"></div>
        </div>
      </div>

      <div className="relative z-10 flex items-center w-full h-full px-4 sm:px-6 md:px-10 lg:px-20 pt-20 sm:pt-24 lg:pt-16 pb-8 sm:pb-10">
        <div className="relative w-full max-w-[820px]">
          <div className="relative z-10">
            <h1 className="text-[24px] sm:text-[40px] md:text-[54px] lg:text-[68px] leading-[1.05] sm:leading-[1.1] tracking-[1px] sm:tracking-[2px] md:tracking-[3px] font-bold text-white">
              {service.title}
            </h1>

            {/*<p className="max-w-[520px] !text-[#fffff0] mt-3 sm:mt-5 text-xs sm:text-base leading-5 sm:leading-7">
              {service.intro}
            </p> */}
          </div>
        </div>
      </div>
      </section>

      <section
        id="details"
        className="flex flex-col lg:flex-row justify-between mt-10 gap-10 lg:gap-20 px-4 sm:px-6 md:px-10 lg:px-20"
      >
        <div className="flex flex-col max-w-[790px] w-full">
          {/*<h2 className="font-bold text-2xl sm:text-3xl">Our Meticulous Process</h2> */}
          <p className="mt-4 text-sm sm:text-base">{service.processIntro}</p>

          <section
            id="why-choose-us"
            className="flex flex-col lg:flex-row bg-black justify-between text-white mt-10 p-5 sm:p-8 lg:p-10 px-5 sm:px-8 lg:px-10 gap-8 lg:gap-10"
          >
            <div className="flex flex-col justify-center w-full">
              <h2 className="text-[30px] sm:text-[40px] lg:text-[48px] leading-[1.1]">
                WHY CHOOSE
                <br />
                <span className="text-[30px] sm:text-[40px] lg:text-[48px] text-[var(--text-sub-h)]">
                  So-nyah Cleaners
                </span>
              </h2>

              <div className="flex flex-col justify-center items-start sm:items-center lg:items-center">
                {service.whyChooseUs.map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-4 mt-8 sm:mt-10 ml-0 sm:ml-5 items-start sm:items-center justify-start sm:justify-center"
                  >
                    <div className="w-[40px] h-[40px] rounded-full items-center bg-[var(--accent-bg)] flex justify-center shrink-0">
                      <img src={item.icon} alt="" className="object-contain" />
                    </div>

                    <div>
                      <h4 className="text-base sm:text-lg">{item.title}</h4>
                      <p className="text-sm sm:text-base !text-white">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/*<div className="rounded-2xl overflow-hidden">
              <img src={service.whyChooseImage} alt={service.title} />
            </div> */}
          </section>
        </div>

        <div className="flex flex-col w-full lg:max-w-[420px]">
          <div className="rounded-2xl bg-[#E5E2E1] p-5 sm:p-8 lg:p-10">
            <h3 className="font-bold text-xl sm:text-2xl">Book This Service</h3>
            <p className="mt-2 text-sm sm:text-base">
              Experience the transformation. Estimates Provided within 2 hours
            </p>

            <div className="mt-3 flex justify-between gap-4">
              <p className="font-bold text-sm sm:text-base">Duration</p>
              <p className="font-black text-[var(--primary)] !text-sm sm:!text-base text-right">
                {service.duration}
              </p>
            </div>

            <div className="mt-3 flex justify-between gap-4">
              <p className="font-bold text-sm sm:text-base">Crew Size</p>
              <p className="font-black text-[var(--primary)] !text-sm sm:!text-base text-right">
                {service.crewSize}
              </p>
            </div>

            <div className="flex justify-center-safe mt-10 w-full">
              <CustomButton text={service.ctaText} />
            </div>
          </div>

          <div className="flex flex-col mt-10">
            <h3 className="font-bold text-xl sm:text-2xl">Common Questions</h3>

            {service.faqs.map((faq, index) => (
              <div key={index}>
                <h4 className="font-bold text-[var(--primary)] mt-4 text-base sm:text-lg">
                  {faq.question}
                </h4>
                <p className="text-sm sm:text-base">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="ready-for-transformation"
        className="flex justify-center px-4 sm:px-6 md:px-10"
      >
        <div className="max-w-[828px] w-full mt-14 sm:mt-16 lg:mt-20 gap-5 flex flex-col justify-center items-center p-6 sm:p-8 lg:p-10 rounded-2xl">
          <h2 className="text-[28px] sm:text-[38px] lg:text-[48px] font-bold text-[var(--primary)] text-center">
            Ready for a transformation?
          </h2>
          <p className="text-center text-sm sm:text-base">
            Send us a photo on WhatsApp and we'll tell you exactly what we can
            do. No guesswork, just expert results.
          </p>

          <button className="rounded-lg flex px-4 sm:px-5 shadow text-white bg-[var(--text-sub-h)] p-2 items-center gap-3 text-sm sm:text-base">
            Chat with Us <img src={whatsApp} alt="" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;