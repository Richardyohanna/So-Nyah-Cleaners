import addressIcon from "../assets/address.png";
import inquiryIcon from "../assets/inquiry.png";


import linkedlnIcon from "../assets/icons8-linkedin-50.png";
import instagramIcon from "../assets/icons8-instagram-50.png";
import twiterIcon from "../assets/icons8-twitter-50.png";
import mailtoIcon from "../assets/@Icon.png";

const Contact = () => {
  return (
    <div className="bg-white pb-10">
      <section
        id="contact"
        className="pt-10 px-4 sm:px-6 md:px-10 lg:px-14 xl:px-16 2xl:px-20"
      >
        <div className="justify-center flex flex-col items-center">
          <h3 className="text-[var(--primary)] tracking-normal! leading-[1] head text-center text-[20px] sm:text-[24px] lg:text-[20px] xl:text-[28px] font-bold">
            Please tell So-nyah Team  The service you need
          </h3>
          <div className="border-b-[5px] pt-2 w-[500px]! sm:w-[120px] border-[var(--primary)]"></div>
        </div>

        <div className="flex flex-col lg:flex-row justify-center gap-10 lg:gap-14 xl:gap-20 pt-10 lg:pt-15">


        {/* Form */}
        <div className="bg-[var(--primary)]  flex flex-col p-5 sm:p-8 lg:p-10 w-full lg:max-w-[600px]">
        <form>
            <label className="flex justify-center text-2xl sm:text-3xl text-white font-bold tracking-wide text-center">
            Get a Free Estimate
            </label>
            <p className="!text-[#ffffffaa] justify-center flex text-center text-sm sm:text-base mt-2">
            We Respond within 1 hours, 7 days a week
            </p>

            <div className="flex flex-col md:flex-row pt-6 sm:pt-8 justify-between gap-5 md:gap-6">
            <div className="flex flex-col w-full gap-2">
                <label className="font-bold text-white text-base sm:text-xl">
                First Name
                </label>
                <input
                placeholder="Type your firstname"
                className="bg-white p-3 px-4 text-sm sm:text-base outline-none border-2 border-transparent focus:border-[#e7d6ff] focus:ring-2 focus:ring-[#e7d6ff] transition-all duration-300"
                />
            </div>

            <div className="flex flex-col w-full gap-2">
                <label className="font-bold text-white text-base sm:text-xl">
                Surname
                </label>
                <input
                placeholder="Type your surname"
                className="bg-white p-3 px-4 text-sm sm:text-base outline-none border-2 border-transparent focus:border-[#e7d6ff] focus:ring-2 focus:ring-[#e7d6ff] transition-all duration-300"
                />
            </div>
            </div>

            <div className="flex flex-col md:flex-row pt-5 justify-between gap-5 md:gap-6">
            <div className="flex flex-col w-full gap-2">
                <label className="font-bold text-white text-base sm:text-xl">
                Phone / WhatsApp
                </label>
                <input
                placeholder="+234 8*** ***"
                className="bg-white p-3 px-4 text-sm sm:text-base outline-none border-2 border-transparent focus:border-[#e7d6ff] focus:ring-2 focus:ring-[#e7d6ff] transition-all duration-300"
                />
            </div>

            <div className="flex flex-col w-full gap-2">
                <label className="font-bold text-white text-base sm:text-xl">
                Area in Abuja
                </label>
                <select className="bg-white p-3 px-4 text-sm sm:text-base outline-none border-2 border-transparent focus:border-[#e7d6ff] focus:ring-2 focus:ring-[#e7d6ff] transition-all duration-300">
                <option value="">Select your area</option>
                <option value="Maitama">Maitama</option>
                <option value="Asokoro">Asokoro</option>
                <option value="Wuse">Wuse</option>
                <option value="Wuse 2">Wuse 2</option>
                <option value="Garki">Garki</option>
                <option value="Jabi">Jabi</option>
                <option value="Utako">Utako</option>
                <option value="Gwarinpa">Gwarinpa</option>
                <option value="Life Camp">Life Camp</option>
                <option value="Lokogoma">Lokogoma</option>
                <option value="Katampe">Katampe</option>
                <option value="Durumi">Durumi</option>
                <option value="Apo">Apo</option>
                <option value="Lugbe">Lugbe</option>
                <option value="Kubwa">Kubwa</option>
                </select>
            </div>
            </div>

            <div className="flex flex-col pt-5 w-full gap-2">
            <label className="font-bold text-white text-base sm:text-xl">
                Service Needed
            </label>
            <select className="bg-white p-3 px-4 text-sm sm:text-base outline-none border-2 border-transparent focus:border-[#e7d6ff] focus:ring-2 focus:ring-[#e7d6ff] transition-all duration-300">
                <option value="">Select a service</option>
                <option value="Residential Deep Clean">Residential Deep Clean</option>
                <option value="Post-Construction Cleaning">Post-Construction Cleaning</option>
                <option value="Office Cleaning">Office Cleaning</option>
                <option value="Home Cleaning">Home Cleaning</option>
                <option value="Upholstery Cleaning">Upholstery Cleaning</option>
                <option value="Carpet Revamp">Carpet Revamp</option>
                <option value="Pest Control / Fumigation">Pest Control / Fumigation</option>
                <option value="Facade Cleaning">Facade Cleaning</option>
            </select>
            </div>

            <div className="flex flex-col pt-5 w-full gap-2">
            <label className="font-bold text-white text-base sm:text-xl">
                Preferred Date
            </label>
            <input
                type="date"
                className="bg-white p-3 px-4 text-sm sm:text-base outline-none border-2 border-transparent focus:border-[#e7d6ff] focus:ring-2 focus:ring-[#e7d6ff] transition-all duration-300"
            />
            </div>

            <div className="flex flex-col pt-5 w-full gap-2">
            <label className="font-bold text-white text-base sm:text-xl">
                Additional Details (Optional)
            </label>
            <textarea
                placeholder="Tell us more about what you need"
                rows={6}
                className="bg-white p-3 px-4 text-sm sm:text-base outline-none border-2 border-transparent focus:border-[#e7d6ff] focus:ring-2 focus:ring-[#e7d6ff] transition-all duration-300 resize-none min-h-[160px]"
            />
            </div>
        </form>

        <button className="flex mt-10 rounded-2xl sm:mt-12  p-3 px-10 justify-center self-center items-center bg-white text-[var(--primary)] text-lg sm:text-xl font-bold max-w-[200px] w-full sm:w-auto transition-all duration-300 hover:bg-[#f3e8ff] hover:scale-105 hover:shadow-xl">
            Send
        </button>
        </div>

         <div className="flex flex-col gap-8 sm:gap-10 w-full lg:max-w-[420px]">
            <div className="flex gap-4 sm:gap-5 items-start">
              <div className="p-3 bg-[var(--bg-section)] h-[40px] w-[40px] rounded-full flex items-center justify-center shrink-0">
                <img src={addressIcon} alt="" className="w-5 h-5 object-contain" />
              </div>
              <div>
                <h4 className="text-lg sm:text-xl text-[var(--primary)] font-bold tracking-wide">
                  ADDRESS
                </h4>
                <p className="text-sm sm:text-base">
                  Ahmadu Bello Way, NTA Headquaters Axis, Area 11 Garki Abuja
                </p>
              </div>
            </div>

            <div className="flex gap-4 sm:gap-5 items-start">
              <div className="p-3 bg-[var(--bg-section)] h-[40px] w-[40px] rounded-full flex items-center justify-center shrink-0">
                <img src={inquiryIcon} alt="" className="w-5 h-5 object-contain" />
              </div>
              <div>
                <h4 className=" text-[var(--primary)]  text-lg sm:text-xl font-bold tracking-wide">
                  INQUIRIES
                </h4>
                <p className="text-sm sm:text-base">+234 (0) 909 478 2495</p>
                <p className="text-[var(--primary)] text-sm sm:text-base">
                  Mon-Sat: 8am - 6pm
                </p>
              </div>
            </div>

            <div className="flex gap-4 sm:gap-5 items-start">
              <div className="p-3 bg-[var(--bg-section)] h-[40px] w-[40px] rounded-full flex items-center justify-center shrink-0">
                <img src={mailtoIcon} alt="" className="w-5 h-5 object-contain" />
              </div>
              <div>
                <h4 className=" text-[var(--primary)]  text-lg sm:text-xl font-bold tracking-wide">
                  EMAIL
                </h4>
                <p className="text-sm sm:text-base break-all sm:break-normal">
                  sonyahintegratedventures@gmail.com
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-[var(--primary)]  text-xl sm:text-2xl font-black tracking-wide">
                CONNECT WITH US
              </h3>

              <div className="flex pt-3 gap-3 sm:gap-4 flex-wrap">


                <button onClick={() =>  window.open("https://instagram.com/sonyah_cleaners?utm_source=qr&igsh=MWRtdG9ud3YzNDFoZQ==", "_blank")}>
                  <img
                    src={instagramIcon}
                    alt="instagram"
                    className="w-8 h-8 sm:w-12 sm:h-12"
                  />
                </button>

                <button onClick={() =>  window.open("https://www.linkedin.com/in/uchenna-linda-nzewigbo-b81b8aa1/", "_blank")}>
                  <img
                    src={linkedlnIcon}
                    alt="linkedin"
                    className="w-8 h-8 sm:w-12 sm:h-12"
                  />
                </button>

                <button>
                  <img
                    src={twiterIcon}
                    alt="twitter"
                    className="w-8 h-8 sm:w-12 sm:h-12"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;