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
        <section id="crew-section" className="relative w-full py-16 md:py-24 bg-[#050505] overflow-hidden border-t border-white/5 crew-section-anim">

            {/* ── Title: Outside & Above Slider ── */}
            <div className="mob-anim max-w-[1240px] mx-auto px-5 md:px-10 mb-8 md:mb-12 crew-anim">
                <span className="text-[#e87532] text-[0.6rem] font-black tracking-[0.4em] uppercase italic opacity-70">The Journey</span>
                <h2 className="text-3xl md:text-6xl font-outfit font-black text-white mt-2 leading-none uppercase">
                    Our Crew & <span className="text-[#e87532] italic font-serif font-light">Highlights.</span>
                </h2>
            </div>

            {/* ── Image Slider ── Mobile: 65vw height | Desktop: 110vh ── */}
            <div className="relative h-[65vw] md:h-[110vh] w-full group/slider overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.7)]"
                style={{ minHeight: '260px', maxHeight: '600px' }}
            >
                {/* Background: Immersive Image Slider */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 1.04 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        className="absolute inset-0 w-full h-full"
                    >
                        <img
                            src={HIGHLIGHTS[index].img}
                            className="w-full h-full object-cover"
                            alt="Highlight"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />
                    </motion.div>
                </AnimatePresence>

                {/* Content Overlay */}
                <div className="absolute inset-0 z-20 max-w-[1240px] mx-auto px-5 md:px-10 flex flex-col justify-end pb-8 md:pb-20">
                    <div className="relative">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={HIGHLIGHTS[index].title}
                                initial={{ y: 14, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -14, opacity: 0 }}
                                transition={{ duration: 0.35 }}
                                className="max-w-[600px]"
                            >
                                <div className="flex items-center gap-2 mb-2">
                                    <i className="ri-map-pin-line text-[#e87532] text-sm" />
                                    <span className="text-[0.6rem] font-bold tracking-widest text-[#e87532]/70 uppercase">{HIGHLIGHTS[index].location}</span>
                                </div>
                                <h3 className="text-xl md:text-3xl font-outfit font-black text-white mb-2 uppercase tracking-tight">{HIGHLIGHTS[index].title}</h3>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Dot indicators (mobile) + arrow buttons (both) */}
                    <div className="flex items-center justify-between mt-4">
                        {/* Dots */}
                        <div className="flex gap-1.5">
                            {HIGHLIGHTS.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setIndex(i)}
                                    className="transition-all duration-300"
                                    style={{
                                        width: i === index ? '20px' : '6px',
                                        height: '6px',
                                        borderRadius: '3px',
                                        background: i === index ? '#e87532' : 'rgba(255,255,255,0.3)',
                                    }}
                                />
                            ))}
                        </div>

                        {/* Arrow buttons */}
                        <div className="flex gap-3">
                            <button onClick={(e) => { e.stopPropagation(); prev(); }}
                                className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-[#e87532] active:bg-[#e87532] transition-all">
                                <i className="ri-arrow-left-s-line text-xl" />
                            </button>
                            <button onClick={(e) => { e.stopPropagation(); next(); }}
                                className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-[#e87532] active:bg-[#e87532] transition-all">
                                <i className="ri-arrow-right-s-line text-xl" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}
