import logo from "../assets/logo.png";
import "./Footer.css";
import { useNavigate } from "react-router-dom";
import { getServiceBySlug } from "../data/servicesData";

const Footer = () => {

  
    const spaceCleaning = getServiceBySlug("space-cleaning");
    const facadeCleaning = getServiceBySlug("facade-cleaning");
    const fumigationCleaning = getServiceBySlug("fumigation");
    const gardening = getServiceBySlug("gardening");
    const carpetRevamp = getServiceBySlug("carpet-revamp");
    const facilityManagement = getServiceBySlug("facility-management");
    const eventCleaning = getServiceBySlug("event-cleaning");
    const upholsteryCleaning = getServiceBySlug("upholstery-cleaning");
    const training = getServiceBySlug("training-consulting");

  const navigate = useNavigate();
  return (
    <section
      id="footer"
      className="bottom-0 bg-[var(--primary)] px-4 sm:px-6 md:px-10 lg:px-10 pt-16 sm:pt-8 lg:pt-10 pb-10"
    >

      <div className="bg-[var(--primary)] mt-10 flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap justify-between gap-10 lg:gap-6">
        <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10 max-w-[320px]">
          <img src={logo} alt="" className="w-[130px] sm:w-[150px] bg-white p-3 h-auto cursor-pointer" onClick={() => navigate("/")} />
          <p className="!text-[#fffff2] max-w-[300px] text-sm sm:text-base leading-7">
            Complete Space Care from deep cleaning to total facility solutions
            (delivered with eco-friendly, safe, and responsible cleaning practices)
          </p>
        </div>

        <div className="flex flex-col gap-2 min-w-[180px]">
          <h6 className="font-bold mb-4 sm:mb-6 lg:mb-8 text-[18px] sm:text-[20px] !text-[#fffff2] max-w-[300px]">
            Services
          </h6>
          <p onClick={() => navigate(`/service/${spaceCleaning?.slug}`)}  className="!text-[#fffff2] cursor-pointer max-w-[300px] text-sm sm:text-base">
            Space Cleaning
          </p>
          <p onClick={() => navigate(`/service/${facadeCleaning?.slug}`)} className="!text-[#fffff2] cursor-pointer max-w-[300px] text-sm sm:text-base">
            Facade Cleaning
          </p>
          <p onClick={() => navigate(`/service/${fumigationCleaning?.slug}`)} className="!text-[#fffff2] cursor-pointer max-w-[300px] text-sm sm:text-base">
            Fumigation
          </p>
          <p onClick={() => navigate(`/service/${gardening?.slug}`)} className="!text-[#fffff2] cursor-pointer max-w-[300px] text-sm sm:text-base">
            Gardening
          </p>
          <p onClick={() => navigate(`/service/${carpetRevamp?.slug}`)} className="!text-[#fffff2]  cursor-pointer max-w-[300px] text-sm sm:text-base">
            Carpet Revamp
          </p>
          <p onClick={() => navigate(`/service/${facilityManagement?.slug}`)} className="!text-[#fffff2] cursor-pointer max-w-[300px] text-sm sm:text-base">
            Facility Management
          </p>
          <p onClick={() => navigate(`/service/${eventCleaning?.slug}`)} className="!text-[#fffff2] cursor-pointer max-w-[300px] text-sm sm:text-base">
            Event Cleaning
          </p>
          <p onClick={() => navigate(`/service/${upholsteryCleaning?.slug}`)} className="!text-[#fffff2] cursor-pointer max-w-[300px] text-sm sm:text-base">
            Upholstery Cleaning
          </p>
          <p onClick={() => navigate(`/service/${training?.slug}`)} className="!text-[#fffff2] cursor-pointer max-w-[300px] text-sm sm:text-base">
            Training & Consulting
          </p>
        </div>

        <div className="flex flex-col gap-2 min-w-[180px]">
          <h6 className="font-bold mb-4 sm:mb-6 lg:mb-8 text-[18px] sm:text-[20px] !text-[#fffff2] max-w-[300px]">
            Company
          </h6>
          <p onClick={() => navigate("/about")} className="!text-[#fffff2] max-w-[300px] cursor-pointer text-sm sm:text-base">
            About Us
          </p>
          <p onClick={() => navigate("/blog")} className="!text-[#fffff2] max-w-[300px] cursor-pointer text-sm sm:text-base">
            Blog
          </p>
          <p onClick={() => navigate("/about#team")} className="!text-[#fffff2] max-w-[300px] cursor-pointer text-sm sm:text-base">
            Team
          </p>
          <p onClick={() => navigate("/services")} className="!text-[#fffff2] max-w-[300px] cursor-pointer text-sm sm:text-base">
            Service
          </p>
          <p onClick={() => navigate("/contact")} className="!text-[#fffff2] max-w-[300px] cursor-pointer text-sm sm:text-base">
            Contact
          </p>
        </div>

        <div className="flex flex-col gap-2 min-w-[180px]">
          <h6 className="font-bold mb-4 sm:mb-6 lg:mb-8 text-[18px] sm:text-[20px] !text-[#fffff2] max-w-[300px]">
            Contact
          </h6>
          <p className="!text-[#fffff2] max-w-[300px] text-sm sm:text-base">
            Ahmadu Bello Way, NTA Headquaters Axis, Area 11 Garki Abuja
          </p>
          <p className="!text-[#fffff2] max-w-[300px] text-sm sm:text-base">
            +234 909 478 2495
          </p>
          <p className="!text-[#fffff2] max-w-[300px] text-sm sm:text-base">
            sonyahintegratedventures@gmail.com
          </p>
        </div>
      </div>

      <div className="pt-5">
         <div className="w-full lg:max-w-[500px]">
                <div className="bg-white rounded-2xl p-3 sm:p-4 shadow-2xl">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input type="email" placeholder="Enter your email address"
                      className="h-[52px] sm:h-[56px] px-4 sm:px-5 rounded-xl bg-[rgba(246,243,242,1)] w-full outline-none text-[var(--primary)] placeholder:text-[var(--primary)]/60 text-sm sm:text-base" />
                    <button className="h-[52px] sm:h-[56px] px-6 sm:px-7 rounded-xl bg-[var(--primary)] text-white font-medium transition-all duration-300 hover:opacity-90 hover:scale-[1.02] whitespace-nowrap">Subscribe</button>
                  </div>
                  <p className="text-[12px]! sm:text-sm! text-[#666]! mt-3 px-1 leading-6">By subscribing, you agree to receive email updates from So-nyah Cleaners.</p>
                </div>
           </div>
      </div>


      <div className="flex flex-col md:flex-row w-full justify-between items-start md:items-center border-t-2 border-white pt-4 gap-4 md:gap-5 mt-12 sm:mt-16 lg:mt-20">
        <p className="flex-1 !text-white text-sm sm:text-base">
          © 2024 So-nyah Cleaners
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-5">
          <button className="hover:underline !text-white text-left sm:text-center">
            Privacy Policy
          </button>
          <button className="hover:underline !text-white text-left sm:text-center">
            Terms Of Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default Footer;