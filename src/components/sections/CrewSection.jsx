import React from "react";
import { motion, AnimatePresence } from "framer-motion";

// User's My Images - Full Participation Highlights
import depex1 from "../../assets/img/my images/Depex 2026 1.jpeg";
import depex2 from "../../assets/img/my images/Depex 2026 2.jpeg";
import depex3 from "../../assets/img/my images/Depex 2026 3.jpeg";
import depexMit from "../../assets/img/my images/Depex 2026 MIT.jpeg";
import depexMain from "../../assets/img/my images/Depex 2026.jpeg";
import hackfusion1 from "../../assets/img/my images/Hackfusion 3.0 SGGS nanded.jpeg";
import itmCollage from "../../assets/img/my images/ITM Collage Nanded.jpeg";
import sggsMain from "../../assets/img/my images/SGGS.jpeg";

const HIGHLIGHTS = [
    { img: depexMain, title: "Depex 2026", location: "Innovation Hub" },
    { img: depex1, title: "Depex 2026 Showcase", location: "MIT Nanded" },
    { img: depex2, title: "Technical Exhibit", location: "Depex 2026" },
    { img: depex3, title: "State-Level Project Competition", location: "Depex 2026" },
    { img: depexMit, title: "Innovation Pavilion", location: "MIT (Depex 2026)" },
    { img: hackfusion1, title: "Hackfusion 3.0", location: "SGGS Nanded" },
    { img: itmCollage, title: "Project Competition", location: "ITM College Nanded" },
    { img: sggsMain, title: "Campus Highlights", location: "SGGS Nanded" }
];

export default function CrewSection() {
    const [index, setIndex] = React.useState(0);

    // Auto-advance
    React.useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % HIGHLIGHTS.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const next = () => setIndex((index + 1) % HIGHLIGHTS.length);
    const prev = () => setIndex((index - 1 + HIGHLIGHTS.length) % HIGHLIGHTS.length);

    return (
        <section id="crew-section" className="relative w-full py-24 bg-[#050505] overflow-hidden border-t border-white/5 crew-section-anim">

            {/* ── Title: Outside & Above Slider ── */}
            <div className="max-w-[1240px] mx-auto px-10 mb-12 crew-anim">
                <span className="text-[#e87532] text-[0.6rem] font-black tracking-[0.4em] uppercase italic opacity-70">The Journey</span>
                <h2 className="text-4xl md:text-6xl font-outfit font-black text-white mt-2 leading-none uppercase">
                    Our Crew & <span className="text-[#e87532] italic font-serif font-light">Highlights.</span>
                </h2>
            </div>

            <div className="relative h-[110vh] w-full group/slider overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.8)]">
                {/* ── Background: Immersive Image Slider ── */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                        className="absolute inset-0 w-full h-full"
                    >
                        <img
                            src={HIGHLIGHTS[index].img}
                            className="w-full h-full object-cover transition-all duration-700"
                            alt="Highlight"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />
                    </motion.div>
                </AnimatePresence>

                {/* ── Content Overlay: Only Info ── */}
                <div className="absolute inset-0 z-20 max-w-[1240px] mx-auto px-10 flex flex-col justify-end pb-20">
                    <div className="relative">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={HIGHLIGHTS[index].title}
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -20, opacity: 0 }}
                                transition={{ duration: 0.4 }}
                                className="max-w-[600px]"
                            >
                                <div className="flex items-center gap-2 mb-3">
                                    <i className="ri-map-pin-line text-[#e87532] text-sm" />
                                    <span className="text-[0.65rem] font-bold tracking-widest text-[#e87532]/70 uppercase">{HIGHLIGHTS[index].location}</span>
                                </div>
                                <h3 className="text-3xl font-outfit font-black text-white mb-2 uppercase tracking-tight">{HIGHLIGHTS[index].title}</h3>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Manual Navigation Overlay */}
                    <div className="absolute inset-x-10 bottom-20 flex justify-end gap-4 pointer-events-none">
                        <button onClick={(e) => { e.stopPropagation(); prev(); }} className="pointer-events-auto w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-[#e87532] transition-all">
                            <i className="ri-arrow-left-s-line text-2xl" />
                        </button>
                        <button onClick={(e) => { e.stopPropagation(); next(); }} className="pointer-events-auto w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-[#e87532] transition-all">
                            <i className="ri-arrow-right-s-line text-2xl" />
                        </button>
                    </div>
                </div>
            </div>

        </section>
    );
}
