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
      <div className="min-h-screen flex items-center justify-center bg-white">
        <h2 className="text-3xl font-bold text-[var(--primary)]">
          Service not found
        </h2>
      </div>
    );
  }

  return (
    <div className="bg-white pb-20">
      <section
        id="service-hero"
        className="relative overflow-hidden"
        style={{ minHeight: `calc(100vh - ${HEADER_HEIGHT}px)` }}
      >
        <div className="absolute z-100 top-25 left-10">
          <button
            onClick={() => navigate(-1)}
            className="border-3! border-white! text-[var(--primary)] px-5 py-2 font-semibold transition-all duration-300 hover:scale-105 hover:bg-[var(--primary)]"
          >
            <img
              src={back}
              alt=""
              className="w-[40px] h-[40px] invert brightness-0"
            />
          </button>
        </div>

        <div className="absolute inset-0">
          <img
            src={service.heroImage}
            alt={service.title}
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/40" />

          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/25 to-transparent"></div>
          </div>
        </div>

        <div className="relative z-10 flex flex-row justify-between w-full gap-12 items-center min-h-screen px-20">
          <div className="relative mt-2 w-full max-w-[820px] rounded-[32px]">
            <div className="relative z-10">
              <div>
                <h1 className="text-[86px] leading-[0.95] mt-5 tracking-[4px] font-bold text-white">
                  {service.title}
                </h1>

                <p className="max-w-[520px] text-[#fffff0]! mt-5">
                  {service.intro}
                </p>

                <div className="flex flex-row gap-5 mt-5"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="details" className="flex justify-between mt-10 gap-20 px-20">
        <div className="flex flex-col max-w-[790px] ">
          <h2 className="font-bold text-3xl">Our Meticulous Process</h2>
          <p className="mt-4">{service.processIntro}</p>

          <div className="mt-5 flex flex-col gap-5">
            {service.processSteps.map((step, index) => (
              <div className="flex gap-5" key={index}>
                <p className="p-4 bg-[var(--index-section)] max-w-[30px] text-center rounded-full items-center justify-center max-h-[30px] flex">
                  {index + 1}
                </p>
                <div>
                  <h4 className="font-bold">{step.title}</h4>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col ">
          <div className="max-w-[363px] max-h-[372px] rounded-2xl bg-[#E5E2E1] p-10">
            <h3 className="font-bold text-2xl ">Book This Service</h3>
            <p className="mt-2">
              Experience the transformation. Estimates Provided within 2 hours
            </p>

            <div className="mt-10 flex justify-between ">
              <p className="font-bold">Starting from </p>
              <p className="font-black text-[var(--primary)]!">
                {service.startingFrom}
              </p>
            </div>

            <div className="mt-3 flex justify-between ">
              <p className="font-bold">Duration</p>
              <p className="font-black text-[var(--primary)]!">
                {service.duration}
              </p>
            </div>

            <div className="mt-3 flex justify-between ">
              <p className="font-bold">Crew Size </p>
              <p className="font-black text-[var(--primary)]!">
                {service.crewSize}
              </p>
            </div>

            <div className="flex justify-center-safe mt-10">
              <CustomButton text={service.ctaText} />
            </div>
          </div>

          <div className="flex flex-col mt-10 ">
            <h3 className="font-bold text-2xl">Common Questions</h3>

            {service.faqs.map((faq, index) => (
              <div key={index}>
                <h4 className="font-bold text-[var(--primary)] mt-4">
                  {faq.question}
                </h4>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="why-choose-us" className="flex bg-black justify-between text-white mt-10 p-10 px-10">
        <div className="flex flex-col justify-center">
          <h2 className="text-[48px] leading-[1]">
            WHY CHOOSE
            <br />
            <span className="text-[48px] text-[var(--text-sub-h)]">
              SO-NYAH CLEANERS
            </span>
          </h2>

          <div className="flex flex-col justify-center  items-center">
            {service.whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="flex gap-4 mt-10 ml-5 items-center justify-center"
              >
                <div className="w-[40px] h-[40px] rounded-full items-center bg-[var(--accent-bg)] flex justify-center">
                  <img src={item.icon} alt="" className="object-contain " />
                </div>

                <div>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden">
          <img src={service.whyChooseImage} alt={service.title} />
        </div>
      </section>

      <section id="ready-for-transformation" className="flex justify-center">
        <div className="max-w-[828px] max-h-[380px] mt-20 gap-5 flex flex-col justify-center items-center p-10 rounded-2xl bg-gradient-to-br from-[var(--primary)] via-white to-[var(--primary)]">
          <h2 className="text-[48px] font-bold">Ready for a transformation?</h2>
          <p className="text-center th">
            Send us a photo on WhatsApp and we'll tell you exactly what we can
            do. No guesswork, just expert results.
          </p>

          <button className="rounded-lg flex px-5 shadow text-white bg-[var(--text-sub-h)] p-2 items-center gap-3">
            Chat with Us <img src={whatsApp} alt="" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;