
import {  useState } from "react";
 

import before1 from "../assets/enhanced-bg2.png";
import after1 from "../assets/enhanced-bg1.png";

import after from "../assets/after 1.jpeg";
import before from "../assets/before 1.jpeg";
import after2 from "../assets/after 2.jpeg";
import before2 from "../assets/before 2.jpeg";



import teamAtwork from "../assets/teamAtWork.jpeg";
import teamAtwork2 from "../assets/teamAtWork 2.jpeg";
import teamAtwork3 from "../assets/teamAtWork 3.jpeg";
import teamAtwork4 from "../assets/teamAtWork 4.jpeg";
import teamAtwork5 from "../assets/teamAtWork 5.jpeg";
import teamAtwork6 from "../assets/teamAtWork 6.jpeg";
import teamAtwork7 from "../assets/teamAtWork 7.jpeg";
import team from "../assets/team.jpeg";



const Gallery = () => {



  const [expandedGalleryItem, setExpandedGalleryItem] = useState<null | {
    type: string; before?: string; after?: string; image?: string; title: string;
  }>(null);

    return (

        <section>
                      {/* ── GALLERY TAB (completely unchanged from your original) ────────── */}
  
                        <>
                          <div className="overflow-x-auto pt-6 sm:pt-8 lg:pt-10 scrollbar-hide">
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
                              {[
                                { type: "before-after", before: before, after: after, title: "Office Cleaning" },
                                { type: "before-after", before: before1, after: after1, title: "Compound Maintenance" },
                                { type: "before-after", before: before2, after: after2, title: "Residential Cleaning" },
                                { type: "single", image: after1, title: "Post Cleaning Result" },
                                { type: "single", image: before1, title: "Interior Space Care" },
                                { type: "single", image: teamAtwork7, title: "Interior Space Care" },
                                { type: "single", image: teamAtwork6, title: "Interior Space Care" },
                                { type: "single", image: teamAtwork5, title: "Fumigation" },
                                { type: "single", image: teamAtwork4, title: "Interior Space Care" },
                                { type: "single", image: teamAtwork3, title: "Interior Space Care" },
                                { type: "single", image: teamAtwork2, title: "Interior Space Care" },
                                { type: "single", image: teamAtwork, title: "Interior Space Care" },
                                { type: "single", image: team, title: "Space Care" },
                              ].map((item, index) => (
                                <div key={index} onClick={() => setExpandedGalleryItem(item)}
                                  className="group bg-white rounded-3xl overflow-hidden border border-[#00000014] shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer">
                                  {item.type === "before-after" ? (
                                    <div className="flex flex-row h-[220px] md:h-[240px] overflow-hidden relative">
                                      <div className="relative w-1/2 h-full overflow-hidden">
                                        <img src={item.before} alt="Before" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                        <div className="absolute top-3 left-3 bg-black/70 text-white text-xs sm:text-sm px-3 py-1 rounded-full">Before</div>
                                      </div>
                                      <div className="relative w-1/2 h-full overflow-hidden">
                                        <img src={item.after} alt="After" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                        <div className="absolute top-3 right-3 bg-[var(--primary)] text-white text-xs sm:text-sm px-3 py-1 rounded-full">After</div>
                                      </div>
                                      <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-white/70 -translate-x-1/2" />
                                    </div>
                                  ) : (
                                    <div className="relative h-[220px] md:h-[240px] overflow-hidden">
                                      <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                      <div className="absolute top-3 left-3 bg-[var(--primary)] text-white text-xs sm:text-sm px-3 py-1 rounded-full">Gallery</div>
                                    </div>
                                  )}
                                  <div className="p-5 sm:p-6">
                                    <h4 className="text-[18px] sm:text-[20px] font-bold text-[var(--primary)]">{item.title}</h4>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
            
                          {expandedGalleryItem && (
                            <div className="fixed inset-0 z-[2000] bg-black/80 flex items-center justify-center p-4 sm:p-6" onClick={() => setExpandedGalleryItem(null)}>
                              <div className="relative bg-white rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-auto p-4 sm:p-6" onClick={(e) => e.stopPropagation()}>
                                <button onClick={() => setExpandedGalleryItem(null)} className="absolute top-4 right-4 bg-[var(--primary)] text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold hover:scale-105 transition-all duration-300">×</button>
                                <h3 className="text-[var(--primary)] text-xl sm:text-2xl font-bold mb-5 pr-12">{expandedGalleryItem.title}</h3>
                                {expandedGalleryItem.type === "before-after" ? (
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                                    <div className="relative rounded-2xl overflow-hidden">
                                      <img src={expandedGalleryItem.before} alt="Before" className="w-full max-h-[70vh] object-cover" />
                                      <div className="absolute top-3 left-3 bg-black/70 text-white text-sm px-3 py-1 rounded-full">Before</div>
                                    </div>
                                    <div className="relative rounded-2xl overflow-hidden">
                                      <img src={expandedGalleryItem.after} alt="After" className="w-full max-h-[70vh] object-cover" />
                                      <div className="absolute top-3 right-3 bg-[var(--primary)] text-white text-sm px-3 py-1 rounded-full">After</div>
                                    </div>
                                  </div>
                                ) : (
                                  <div className="rounded-2xl overflow-hidden">
                                    <img src={expandedGalleryItem.image} alt={expandedGalleryItem.title} className="w-full max-h-[75vh] object-cover" />
                                  </div>
                                )}
                              </div>
                            </div>
                          )}
                        </>

        </section>

    )
}

export default Gallery