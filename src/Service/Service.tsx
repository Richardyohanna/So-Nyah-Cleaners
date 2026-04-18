import broom from "../assets/broom.png";
import upArrow from "../assets/up-arrow.png";
import upholstery from "../assets/chushion.png";
import carpet from "../assets/carpet.png";
import gardening from "../assets/gradening.png";
import pest from "../assets/pest.png";
import facility from "../assets/facility.png";
import eventCleaning from "../assets/event.png";
import facade from "../assets/facade.png";
import training from "../assets/training.png";

const Service = () => {

    return (
        <div className="bg-white">
            <section id="general-service" className="p-20  flex flex-col gap-10">
               

                <div className="flex justify-between gap-10 mt-10">

                {/* Space Cleaning */}
                <div className="group max-h-[345px] bg-[#f6f3f25d] p-5 rounded-2xl gap-4 flex flex-col justify-start items-start shadow transition-all duration-500 ease-in-out hover:-translate-y-3 hover:shadow-2xl hover:bg-white hover:scale-[1.02] cursor-pointer">
                    <img
                    src={broom}
                    alt=""
                    className="shrink-0 object-contain max-w-[27px] max-h-[33px] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
                    />

                    <h3 className="text-2xl font-bold transition-colors duration-300 group-hover:text-[var(--primary)]">
                    Space Cleaning
                    </h3>

                    <p className="transition-colors duration-300 text-[#555] group-hover:text-[#333]">
                    Detailed architectural purification for high-end residential and commercial estates. Every corner, every surface, handled with editorial care.
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

                {/* Upholstery Cleaning */}
                <div className="group max-h-[345px] bg-white p-5 rounded-2xl gap-4 flex flex-col justify-start items-start shadow transition-all duration-500 ease-in-out hover:-translate-y-3 hover:shadow-2xl hover:bg-[#fafafa] hover:scale-[1.02] cursor-pointer">
                    <img
                    src={upholstery}
                    alt=""
                    className="shrink-0 object-contain max-w-[27px] max-h-[33px] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
                    />

                    <h3 className="text-2xl font-bold transition-colors duration-300 group-hover:text-[var(--primary)]">
                    Upholstery Cleaning
                    </h3>

                    <p className="transition-colors duration-300 text-[#555] group-hover:text-[#333]">
                    Preserving the integrity of fine fabrics and leather with specialized organic treatments.
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

                <div className="flex justify-between gap-10">

                {/* Carpet Revamp */}
                <div className="group max-h-[345px] bg-white p-5 rounded-2xl gap-4 flex flex-col justify-start items-start shadow transition-all duration-500 ease-in-out hover:-translate-y-3 hover:shadow-2xl hover:bg-[#fafafa] hover:scale-[1.02] cursor-pointer">
                    <img
                    src={carpet}
                    alt=""
                    className="shrink-0 object-contain max-w-[27px] max-h-[33px] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
                    />

                    <h3 className="text-2xl font-bold transition-colors duration-300 group-hover:text-[var(--primary)]">
                    Carpet Revamp
                    </h3>

                    <p className="transition-colors duration-300 text-[#555] group-hover:text-[#333]">
                    Deep-fiber restoration techniques that breathe life back into premium flooring textiles.
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

                {/* Gardening */}
                <div className="group max-h-[345px] bg-[#96f59134] p-5 rounded-2xl gap-4 flex flex-col justify-start items-start shadow transition-all duration-500 ease-in-out hover:-translate-y-3 hover:shadow-2xl hover:bg-[#d9ffd6] hover:scale-[1.02] cursor-pointer">
                    <img
                    src={gardening}
                    alt=""
                    className="shrink-0 object-contain max-w-[27px] max-h-[33px] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
                    />

                    <h3 className="text-2xl font-bold transition-colors duration-300 group-hover:text-[var(--primary)]">
                    Gardening
                    </h3>

                    <p className="transition-colors duration-300 text-[#555] group-hover:text-[#333]">
                    Sculpting outdoor sanctuaries that complement your indoor purity.
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

                {/* Pest Control */}
                <div className="group max-h-[345px] bg-[#f0edec33] p-5 rounded-2xl gap-4 flex flex-col justify-start items-start shadow transition-all duration-500 ease-in-out hover:-translate-y-3 hover:shadow-2xl hover:bg-[#f7f5f4] hover:scale-[1.02] cursor-pointer">
                    <img
                    src={pest}
                    alt=""
                    className="transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
                    />

                    <h3 className="text-2xl font-bold transition-colors duration-300 group-hover:text-[var(--primary)]">
                    Pest Control
                    </h3>

                    <p className="transition-colors duration-300 text-[#555] group-hover:text-[#333]">
                    Invisibly securing your environment with eco-friendly barrier technologies.
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

                <div className="flex justify-between gap-10">

                {/* Facility Management */}
                <div className="group max-h-[345px] bg-[#dcd9d932] p-5 rounded-2xl gap-4 flex flex-col justify-start items-start shadow transition-all duration-500 ease-in-out hover:-translate-y-3 hover:shadow-2xl hover:bg-[#f1efef] hover:scale-[1.02] cursor-pointer">
                    <img
                    src={facility}
                    alt=""
                    className="shrink-0 object-contain max-w-[27px] max-h-[33px] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
                    />

                    <h3 className="text-2xl font-bold transition-colors duration-300 group-hover:text-[var(--primary)]">
                    Facility Management
                    </h3>

                    <p className="transition-colors duration-300 text-[#555] group-hover:text-[#333]">
                    Comprehensive stewardship for commercial towers and residential complexes.
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

                {/* Event Cleaning */}
                <div className="group max-h-[345px] bg-[#7000722e] p-5 rounded-2xl gap-4 flex flex-col justify-start items-start shadow transition-all duration-500 ease-in-out hover:-translate-y-3 hover:shadow-2xl hover:bg-[#ecd9ec] hover:scale-[1.02] cursor-pointer">
                    <img
                    src={eventCleaning}
                    alt=""
                    className="shrink-0 object-contain max-w-[27px] max-h-[33px] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
                    />

                    <h3 className="text-2xl font-bold transition-colors duration-300 group-hover:text-[var(--primary)]">
                    Event Cleaning
                    </h3>

                    <p className="transition-colors duration-300 text-[#555] group-hover:text-[#333]">
                    Pre-event preparation and post-event restoration for elite gatherings.
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

                <div className="flex justify-between gap-10">

                {/* Facade Cleaning */}
                <div className="group max-h-[345px] bg-white p-5 rounded-2xl gap-4 flex flex-col justify-start items-start shadow transition-all duration-500 ease-in-out hover:-translate-y-3 hover:shadow-2xl hover:bg-[#fafafa] hover:scale-[1.02] cursor-pointer">
                    <img
                    src={facade}
                    alt=""
                    className="transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
                    />

                    <h3 className="text-2xl font-bold transition-colors duration-300 group-hover:text-[var(--primary)]">
                    Facade Cleaning
                    </h3>

                    <p className="transition-colors duration-300 text-[#555] group-hover:text-[#333]">
                    Restoring the brilliance of glass and stone exteriors at any height.
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

                {/* Training & Consulting */}
                <div className="group max-h-[345px] bg-[#eae7e751] p-5 rounded-2xl gap-4 flex flex-col justify-start items-start shadow transition-all duration-500 ease-in-out hover:-translate-y-3 hover:shadow-2xl hover:bg-[#f3f1f1] hover:scale-[1.02] cursor-pointer">
                    <img
                    src={training}
                    alt=""
                    className="shrink-0 object-contain max-w-[27px] max-h-[33px] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
                    />

                    <h3 className="text-2xl font-bold transition-colors duration-300 group-hover:text-[var(--primary)]">
                    Training & Consulting
                    </h3>

                    <p className="transition-colors duration-300 text-[#555] group-hover:text-[#333]">
                    Empowering your in-house teams with Pristine protocols and eco-standards.
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
                            </section>
        </div>
    )
}

export default Service;