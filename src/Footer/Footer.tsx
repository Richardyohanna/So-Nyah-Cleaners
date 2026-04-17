import logo from "../assets/logo.jpeg"
import "./Footer.css";

const Footer = ()=> {

    return(
          <section id="footer" className=" pt-10 bg-[var(--primary)] pb-30 pt-30 flex px-10 justify-between" > 
            
            <div className="flex flex-col gap-10">

              <img src={logo} alt="" className="w-[150px] h-[40px]"/>
              <p className="text-[#fffff2]! max-w-[300px]">
                Redefining the standards of hygiene in
                the nation through eco-conscious innovation
                and editorial-grade precision.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h6 className="font-bold mb-8 text-[20px] text-[#fffff2]! max-w-[300px]">Services</h6>
              <p className="text-[#fffff2]! max-w-[300px]">Residential Deep Clean</p>
              <p className="text-[#fffff2]! max-w-[300px]">Post-Construction</p>
              <p className="text-[#fffff2]! max-w-[300px]">Corporate Sanctuary</p>
              <p className="text-[#fffff2]! max-w-[300px]">Eco-Commitment</p>
            </div>
            <div className="flex flex-col gap-2">
              <h6 className="font-bold mb-8 text-[20px] text-[#fffff2]! max-w-[300px]">Company</h6>
              <p className="text-[#fffff2]! max-w-[300px]">About Us</p>
              <p className="text-[#fffff2]! max-w-[300px]">Blog</p>
              <p className="text-[#fffff2]! max-w-[300px]">Team</p>
              <p className="text-[#fffff2]! max-w-[300px]">Contact</p>
            </div>
            <div>
              <h6 className="font-bold mb-8 text-[20px] text-[#fffff2]! max-w-[300px]">Contact</h6> 
              <p className="text-[#fffff2]! max-w-[300px]">Maitama, Abuja, Nigeria</p>
              <p className="text-[#fffff2]! max-w-[300px]">+234 (0) *** ***</p>
              <p className="text-[#fffff2]! max-w-[300px]">info@sonyah.com</p>
            </div>
      </ section>
    )
}

export default Footer;