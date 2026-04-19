import logo from "../assets/logo.jpeg";
import "./Footer.css";

const Footer = () => {
  return (
    <section
      id="footer"
      className="bottom-0 bg-[var(--primary)] px-4 sm:px-6 md:px-10 lg:px-10 pt-16 sm:pt-20 lg:pt-30 pb-10"
    >
      <div className="bg-[var(--primary)] flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap justify-between gap-10 lg:gap-6">
        <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10 max-w-[320px]">
          <img src={logo} alt="" className="w-[130px] sm:w-[150px] h-auto" />
          <p className="!text-[#fffff2] max-w-[300px] text-sm sm:text-base leading-7">
            Redefining the standards of hygiene in the nation through
            eco-conscious innovation and editorial-grade precision.
          </p>
        </div>

        <div className="flex flex-col gap-2 min-w-[180px]">
          <h6 className="font-bold mb-4 sm:mb-6 lg:mb-8 text-[18px] sm:text-[20px] !text-[#fffff2] max-w-[300px]">
            Services
          </h6>
          <p className="!text-[#fffff2] max-w-[300px] text-sm sm:text-base">
            Residential Deep Clean
          </p>
          <p className="!text-[#fffff2] max-w-[300px] text-sm sm:text-base">
            Post-Construction
          </p>
          <p className="!text-[#fffff2] max-w-[300px] text-sm sm:text-base">
            Corporate Sanctuary
          </p>
          <p className="!text-[#fffff2] max-w-[300px] text-sm sm:text-base">
            Eco-Commitment
          </p>
        </div>

        <div className="flex flex-col gap-2 min-w-[180px]">
          <h6 className="font-bold mb-4 sm:mb-6 lg:mb-8 text-[18px] sm:text-[20px] !text-[#fffff2] max-w-[300px]">
            Company
          </h6>
          <p className="!text-[#fffff2] max-w-[300px] text-sm sm:text-base">
            About Us
          </p>
          <p className="!text-[#fffff2] max-w-[300px] text-sm sm:text-base">
            Blog
          </p>
          <p className="!text-[#fffff2] max-w-[300px] text-sm sm:text-base">
            Team
          </p>
          <p className="!text-[#fffff2] max-w-[300px] text-sm sm:text-base">
            Contact
          </p>
        </div>

        <div className="flex flex-col gap-2 min-w-[180px]">
          <h6 className="font-bold mb-4 sm:mb-6 lg:mb-8 text-[18px] sm:text-[20px] !text-[#fffff2] max-w-[300px]">
            Contact
          </h6>
          <p className="!text-[#fffff2] max-w-[300px] text-sm sm:text-base">
            Maitama, Abuja, Nigeria
          </p>
          <p className="!text-[#fffff2] max-w-[300px] text-sm sm:text-base">
            +234 (0) *** ***
          </p>
          <p className="!text-[#fffff2] max-w-[300px] text-sm sm:text-base">
            info@sonyah.com
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row w-full justify-between items-start md:items-center border-t-2 border-white pt-4 gap-4 md:gap-5 mt-12 sm:mt-16 lg:mt-20">
        <p className="flex-1 !text-white text-sm sm:text-base">
          © 2024 So-Nyah Cleaners
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