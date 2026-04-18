import { useNavigate } from "react-router-dom";
import upArrow from "../assets/up-arrow.png";
import { getServiceBySlug } from "../data/servicesData";

const Service = () => {
  const navigate = useNavigate();

  const spaceCleaning = getServiceBySlug("space-cleaning");
  const upholsteryCleaning = getServiceBySlug("upholstery-cleaning");
  const carpetRevamp = getServiceBySlug("carpet-revamp");
  const gardening = getServiceBySlug("gardening");
  const pestControl = getServiceBySlug("fumigation");
  const facilityManagement = getServiceBySlug("facility-management");
  const eventCleaning = getServiceBySlug("event-cleaning");
  const facadeCleaning = getServiceBySlug("facade-cleaning");
  const trainingConsulting = getServiceBySlug("training-consulting");

  return (
    <div className="bg-white">
      <section id="general-service" className="p-20 flex flex-col gap-10">
        <div className="mt-10">
          <h3 className="text-[var(--primary)] head text-[48px] leading-[1] font-bold items-center text-center">
            Our Services
          </h3>
        </div>

        {/* ROW 1 */}
        <div className="flex justify-between gap-10">
          {/* Space Cleaning */}
          {spaceCleaning && (
          <div className=" shadow rounded-2xl transition-all duration-500 ease-in-out hover:-translate-y-3 hover:shadow-2xl hover:bg-[#fafafa] hover:scale-[1.02] cursor-pointer">
            <img src={spaceCleaning.heroImage} className="max-h-[200px] w-full object-cover rounded-t-2xl"/>
            <div
              onClick={() => navigate(`/service/${spaceCleaning.slug}`)}
              className="group bg-[#f6f3f25d] p-5 rounded-2xl gap-4 flex flex-col justify-start items-start "
            >
              <img
                src={spaceCleaning.cardIcon}
                alt={spaceCleaning.title}
                className="shrink-0 object-contain max-w-[27px] max-h-[33px] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
              />

              <h3 className="text-2xl font-bold transition-colors duration-300 group-hover:text-[var(--primary)]">
                {spaceCleaning.title}
              </h3>

              <p className="transition-colors duration-300 text-[#555] group-hover:text-[#333]">
                {spaceCleaning.shortDescription}
              </p>

              <button className="flex items-center gap-2 text-[var(--primary)] font-bold transition-all duration-300 group-hover:gap-3">
                Read More
                <img
                  src={upArrow}
                  alt=""
                  className="max-w-[8.75px] max-h-[8.75px] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </button>
            </div>
            </div>
          )}

          {/* Upholstery Cleaning */}
          {upholsteryCleaning && (
          <div className=" shadow rounded-2xl transition-all duration-500 ease-in-out hover:-translate-y-3 hover:shadow-2xl hover:bg-[#fafafa] hover:scale-[1.02] cursor-pointer">
            <img src={upholsteryCleaning.heroImage} className="max-h-[200px] w-full object-cover rounded-t-2xl"/>
            <div
              onClick={() => navigate(`/service/${upholsteryCleaning.slug}`)}
              className="group  bg-white p-5 rounded-2xl gap-4 flex flex-col justify-start items-start"
            >
              <img
                src={upholsteryCleaning.cardIcon}
                alt={upholsteryCleaning.title}
                className="shrink-0 object-contain max-w-[27px] max-h-[33px] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
              />

              <h3 className="text-2xl font-bold transition-colors duration-300 group-hover:text-[var(--primary)]">
                {upholsteryCleaning.title}
              </h3>

              <p className="transition-colors duration-300 text-[#555] group-hover:text-[#333]">
                {upholsteryCleaning.shortDescription}
              </p>

              <button className="flex items-center gap-2 text-[var(--primary)] font-bold transition-all duration-300 group-hover:gap-3">
                Read More
                <img
                  src={upArrow}
                  alt=""
                  className="max-w-[8.75px] max-h-[8.75px] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </button>
            </div>
            </div>
          )}
        </div>

        {/* ROW 2 */}
        <div className="flex justify-between gap-10">
          {/* Carpet Revamp */}
          {carpetRevamp && (

         <div className=" shadow rounded-2xl transition-all duration-500 ease-in-out hover:-translate-y-3 hover:shadow-2xl hover:bg-[#fafafa] hover:scale-[1.02] cursor-pointer">
            <img src={carpetRevamp.heroImage} className="max-h-[200px] w-full object-cover rounded-t-2xl"/>
            <div
              onClick={() => navigate(`/service/${carpetRevamp.slug}`)}
              className="group  bg-white p-5  gap-4 flex flex-col justify-start items-start "
            >
            
              <img
                src={carpetRevamp.cardIcon}
                alt={carpetRevamp.title}
                className="shrink-0 object-contain max-w-[27px] max-h-[33px] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
              />

              <h3 className="text-2xl font-bold transition-colors duration-300 group-hover:text-[var(--primary)]">
                {carpetRevamp.title}
              </h3>

              <p className="transition-colors duration-300 text-[#555] group-hover:text-[#333]">
                {carpetRevamp.shortDescription}
              </p>

              <button className="flex items-center gap-2 text-[var(--primary)] font-bold transition-all duration-300 group-hover:gap-3">
                Read More
                <img
                  src={upArrow}
                  alt=""
                  className="max-w-[8.75px] max-h-[8.75px] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </button>
            </div>
            </ div>
          )}

          {/* Gardening */}
          {gardening && (
          <div className="shadow rounded-2xl transition-all duration-500 ease-in-out hover:-translate-y-3 hover:shadow-2xl hover:bg-[#fafafa] hover:scale-[1.02] cursor-pointer">
            <img src={gardening.heroImage} className="max-h-[200px] w-full object-cover rounded-t-2xl"/>
            <div
              onClick={() => navigate(`/service/${gardening.slug}`)}
              className="group  bg-[#96f59134] p-5 gap-4 flex flex-col justify-start items-start  "
            >
              <img
                src={gardening.cardIcon}
                alt={gardening.title}
                className="shrink-0 object-contain max-w-[27px] max-h-[33px] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
              />

              <h3 className="text-2xl font-bold transition-colors duration-300 group-hover:text-[var(--primary)]">
                {gardening.title}
              </h3>

              <p className="transition-colors duration-300 text-[#555] group-hover:text-[#333]">
                {gardening.shortDescription}
              </p>

              <button className="flex items-center gap-2 text-[var(--primary)] font-bold transition-all duration-300 group-hover:gap-3">
                Read More
                <img
                  src={upArrow}
                  alt=""
                  className="max-w-[8.75px] max-h-[8.75px] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </button>
            </div>
           </div >
          )}

          {/* Pest Control */}
          {pestControl && (
         <div className="shadow rounded-2xl transition-all duration-500 ease-in-out hover:-translate-y-3 hover:shadow-2xl hover:bg-[#fafafa] hover:scale-[1.02] cursor-pointer">
            <img src={pestControl.heroImage} className="max-h-[200px] w-full object-cover rounded-t-2xl"/>
            <div
              onClick={() => navigate(`/service/${pestControl.slug}`)}
              className="group  bg-[#f0edec33] p-5  gap-4 flex flex-col justify-start items-start "
            >
              <img
                src={pestControl.cardIcon}
                alt={pestControl.title}
                className="transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
              />

              <h3 className="text-2xl font-bold transition-colors duration-300 group-hover:text-[var(--primary)]">
                {pestControl.title}
              </h3>

              <p className="transition-colors duration-300 text-[#555] group-hover:text-[#333]">
                {pestControl.shortDescription}
              </p>

              <button className="flex items-center gap-2 text-[var(--primary)] font-bold transition-all duration-300 group-hover:gap-3">
                Read More
                <img
                  src={upArrow}
                  alt=""
                  className="max-w-[8.75px] max-h-[8.75px] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </button>
            </div>
            </div>
          )}
        </div>

        {/* ROW 3 */}
        <div className="flex justify-center gap-10">
          {/* Facility Management */}
          {facilityManagement && (
          <div className="shadow rounded-2xl transition-all duration-500 ease-in-out hover:-translate-y-3 hover:shadow-2xl hover:bg-[#fafafa] hover:scale-[1.02] cursor-pointer">
            <img src={facilityManagement.heroImage} className="max-h-[200px] w-full object-cover rounded-t-2xl"/>
            <div
              onClick={() => navigate(`/service/${facilityManagement.slug}`)}
              className="group  bg-[#dcd9d932] p-5  gap-4 flex flex-col justify-start items-start  "
            >
              <img
                src={facilityManagement.cardIcon}
                alt={facilityManagement.title}
                className="shrink-0 object-contain max-w-[27px] max-h-[33px] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
              />

              <h3 className="text-2xl font-bold transition-colors duration-300 group-hover:text-[var(--primary)]">
                {facilityManagement.title}
              </h3>

              <p className="transition-colors duration-300 text-[#555] group-hover:text-[#333]">
                {facilityManagement.shortDescription}
              </p>

              <button className="flex items-center gap-2 text-[var(--primary)] font-bold transition-all duration-300 group-hover:gap-3">
                Read More
                <img
                  src={upArrow}
                  alt=""
                  className="max-w-[8.75px] max-h-[8.75px] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </button>
            </div>
            </div>
          )}

          {/* Event Cleaning */}
          {eventCleaning && (
          <div className="shadow  rounded-2xl transition-all duration-500 ease-in-out hover:-translate-y-3 hover:shadow-2xl hover:bg-[#fafafa] hover:scale-[1.02] cursor-pointer">
            <img src={eventCleaning.heroImage} className="max-h-[200px] w-full object-cover rounded-t-2xl"/>
            <div
              onClick={() => navigate(`/service/${eventCleaning.slug}`)}
              className="group  bg-[#7000722e] p-5 gap-4 flex flex-col justify-start items-start "
            >
              <img
                src={eventCleaning.cardIcon}
                alt={eventCleaning.title}
                className="shrink-0 object-contain max-w-[27px] max-h-[33px] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
              />

              <h3 className="text-2xl font-bold transition-colors duration-300 group-hover:text-[var(--primary)]">
                {eventCleaning.title}
              </h3>

              <p className="transition-colors duration-300 text-[#555] group-hover:text-[#333]">
                {eventCleaning.shortDescription}
              </p>

              <button className="flex items-center gap-2 text-[var(--primary)] font-bold transition-all duration-300 group-hover:gap-3">
                Read More
                <img
                  src={upArrow}
                  alt=""
                  className="max-w-[8.75px] max-h-[8.75px] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </button>
            </div>
            </div>
          )}
        </div>

        {/* ROW 4 */}
        <div className="flex justify-between gap-10">
          {/* Facade Cleaning */}
          {facadeCleaning && (
            <div className=" shadow rounded-2xl transition-all duration-500 ease-in-out hover:-translate-y-3 hover:shadow-2xl hover:bg-[#fafafa] hover:scale-[1.02] cursor-pointer">
            <img src={facadeCleaning.heroImage} className="max-h-[200px] w-full object-cover rounded-t-2xl"/>
            <div
              onClick={() => navigate(`/service/${facadeCleaning.slug}`)}
              className="group  bg-white p-5 rounded-2xl gap-4 flex flex-col justify-start items-start  "
            >
              <img
                src={facadeCleaning.cardIcon}
                alt={facadeCleaning.title}
                className="transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
              />

              <h3 className="text-2xl font-bold transition-colors duration-300 group-hover:text-[var(--primary)]">
                {facadeCleaning.title}
              </h3>

              <p className="transition-colors duration-300 text-[#555] group-hover:text-[#333]">
                {facadeCleaning.shortDescription}
              </p>

              <button className="flex items-center gap-2 text-[var(--primary)] font-bold transition-all duration-300 group-hover:gap-3">
                Read More
                <img
                  src={upArrow}
                  alt=""
                  className="max-w-[8.75px] max-h-[8.75px] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </button>
            </div>
            </div>
          )}

          {/* Training & Consulting */}
          {trainingConsulting && (
           <div className="rounded-2xl transition-all duration-500 ease-in-out hover:-translate-y-3 hover:shadow-2xl hover:bg-[#fafafa] hover:scale-[1.02] cursor-pointer shadow">
            <img src={trainingConsulting.heroImage} className="max-h-[200px] w-full object-cover rounded-t-2xl"/>
            <div
              onClick={() => navigate(`/service/${trainingConsulting.slug}`)}
              className="group  bg-[#eae7e751] p-5 rounded-2xl gap-4 flex flex-col justify-start items-start  "
            >
              <img
                src={trainingConsulting.cardIcon}
                alt={trainingConsulting.title}
                className="shrink-0 object-contain max-w-[27px] max-h-[33px] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
              />

              <h3 className="text-2xl font-bold transition-colors duration-300 group-hover:text-[var(--primary)]">
                {trainingConsulting.title}
              </h3>

              <p className="transition-colors duration-300 text-[#555] group-hover:text-[#333]">
                {trainingConsulting.shortDescription}
              </p>

              <button className="flex items-center gap-2 text-[var(--primary)] font-bold transition-all duration-300 group-hover:gap-3">
                Contact with Us
                <img
                  src={upArrow}
                  alt=""
                  className="max-w-[8.75px] max-h-[8.75px] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </button>
            </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Service;