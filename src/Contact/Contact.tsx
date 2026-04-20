import addressIcon from "../assets/address.png";
import inquiryIcon from "../assets/inquiry.png";

import facebookIcon from "../assets/facebook.png";
import linkedlnIcon from "../assets/linkedln.png";
import instagramIcon from "../assets/instagram.png";
import twiterIcon from "../assets/twiter.png";
import mailtoIcon from "../assets/@Icon.png"


const Contact = () => {

    return (
        <div className="bg-white pb-10">
            <section id="contact" className="pt-10 px-20">
                <div>
                    <h3 className="text-[var(--primary)] head text-[28px] sm:text-[34px] lg:text-[42px] xl:text-[48px] leading-[1.1] font-bold">
                        Contact Us:
                    </h3>
                    <div className="border-b-[5px]  w-[80px] sm:w-[100px] border-[var(--primary)]"></div>
                </div>

                <div className="flex pt-10">

                    <div className="flex flex-col gap-10">
                        <div className="flex gap-5">
                            <div className="p-3 bg-[var(--bg-section)] max-h-[40px] max-w-[40px] rounded-full">
                                <img src={addressIcon} alt="" />
                            </div>
                            <div>
                                <h4 className="text-2xl font-bold tracking-wide">Adress</h4>
                                <p>
                                    Suite 402, Luminous Plaza,
                                    Adetokunbo Ademola Crescent,
                                    Wuse II, Abuja, Nigeria
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-5">
                            <div className="p-3 bg-[var(--bg-section)] max-h-[40px] max-w-[40px] rounded-full">
                                <img src={inquiryIcon} alt="" />
                            </div>
                            <div>
                                <h4 className="text-2xl font-bold tracking-wide"> INQUIRIES</h4>
                                <p>
                                    +234 (0) 800 555 7788
                                </p>
                                <p className="text-[var(--primary)]">
                                    Mon-Sat: 8am - 6pm
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-5">
                            <div className="p-3 bg-[var(--bg-section)] max-h-[40px] max-w-[40px] rounded-full">
                                <img src={mailtoIcon} alt="" />
                            </div>
                            <div>
                                <h4 className="text-2xl font-bold tracking-wide">EMAIL</h4>
                                <p>
                                   info@sonyahcleaners.com
                                </p>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-black tracking-wide">
                                CONNECT WITH US
                            </h3>

                            <div className="flex pt-3 gap-3">

                                {/**Facebook */}
                                <button className="bg-[var(--primary)] p-2 rounded-2xl">
                                    <img src={facebookIcon} alt="facebook" />
                                </button>

                                {/**Instagram */}
                                <button className="bg-[var(--primary)] p-2 rounded-2xl">
                                    <img src={instagramIcon} alt="instagtram" />
                                </button>
                    
                                {/**Linkedln*/}
                                <button className="bg-[var(--primary)] p-2 rounded-2xl">
                                    <img src={linkedlnIcon} alt="facebook" />
                                </button>

                                 {/**Twiter*/}
                                <button className="bg-[var(--primary)] p-2 rounded-2xl">
                                    <img src={twiterIcon} alt="facebook" />
                                </button>


                            </div>

                        </div>

                    </div>
                    
                    <div className="">

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact;