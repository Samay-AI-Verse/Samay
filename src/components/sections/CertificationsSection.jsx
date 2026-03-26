import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import cert1 from "../../assets/img/certifications/1.png";
import cert2 from "../../assets/img/certifications/2.png";
import cert3 from "../../assets/img/certifications/3.png";
import cert4 from "../../assets/img/certifications/4.png";
import cert5 from "../../assets/img/certifications/5.png";
import cert6 from "../../assets/img/certifications/6.png";
import cert7 from "../../assets/img/certifications/7.png";
import cert8 from "../../assets/img/certifications/8.png";
import cert9 from "../../assets/img/certifications/9.png";
import cert10 from "../../assets/img/certifications/10.png";
import cert11 from "../../assets/img/certifications/11.png";

const CERTS = [
    { img: cert1, title: "Data Analysis Essentials" },
    { img: cert2, title: "GenAI Foundations" },
    { img: cert3, title: "LLM Orchestration" },
    { img: cert4, title: "Vector Database Mastery" },
    { img: cert5, title: "Cloud Deployment" },
    { img: cert6, title: "Full Stack Development" },
    { img: cert7, title: "Machine Learning" },
    { img: cert8, title: "Deep Learning" },
    { img: cert9, title: "NLP Specialization" },
    { img: cert10, title: "Computer Vision" },
    { img: cert11, title: "Azure AI Engineering" }
];

export default function CertificationsSection() {
    const [selectedCert, setSelectedCert] = useState(null);
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        const { current } = scrollRef;
        if (current) {
            const scrollAmount = current.offsetWidth * 0.8;
            current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth"
            });
        }
    };

    return (
        <section id="certifications" className="w-full py-32 bg-[#0a0a0a] text-[#f4ede6] relative overflow-hidden">
            {/* Background decorative glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[#e87532]/5 blur-[150px] rounded-full pointer-events-none" />

            <div className="max-w-[1400px] mx-auto px-6 mb-16 flex flex-col md:flex-row items-end justify-between gap-8 relative z-10">
                <div className="text-left">
                    <span className="text-[#e87532] font-outfit font-bold tracking-[0.4em] uppercase text-[0.65rem] opacity-80">Credentials</span>
                    <h2 className="text-4xl md:text-6xl font-outfit font-black mt-3 tracking-tight leading-none">
                        Verified <span className="text-[#e87532]">Expertise</span>
                    </h2>
                </div>
                
                {/* Navigation Arrows */}
                <div className="flex gap-4">
                    <button 
                        onClick={() => scroll("left")}
                        className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#e87532] hover:border-[#e87532] transition-all group"
                    >
                        <i className="ri-arrow-left-s-line text-2xl group-hover:scale-110 transition-transform" />
                    </button>
                    <button 
                        onClick={() => scroll("right")}
                        className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#e87532] hover:border-[#e87532] transition-all group"
                    >
                        <i className="ri-arrow-right-s-line text-2xl group-hover:scale-110 transition-transform" />
                    </button>
                </div>
            </div>

            {/* Horizontal Slider */}
            <div 
                ref={scrollRef}
                className="flex gap-8 overflow-x-auto pb-12 px-6 md:px-[calc((100vw-1400px)/2+24px)] snap-x no-scrollbar scroll-smooth"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {CERTS.map((cert, i) => (
                    <div
                        key={i}
                        onClick={() => setSelectedCert(cert)}
                        className="flex-shrink-0 w-[280px] md:w-[400px] snap-center cursor-pointer group"
                    >
                        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/5 bg-white/[0.02] backdrop-blur-sm group-hover:border-[#e87532]/40 transition-all duration-700 shadow-2xl">
                            <img
                                src={cert.img}
                                alt={cert.title}
                                className="w-full h-full object-cover grayscale-[60%] group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-40 transition-opacity" />
                            
                            {/* Overlay content */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                <span className="text-[#e87532] text-[0.6rem] font-bold tracking-widest uppercase mb-1 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Validation Verified</span>
                                <h4 className="text-xl font-bold font-outfit leading-tight translate-y-2 group-hover:translate-y-0 transition-transform duration-500 delay-75">{cert.title}</h4>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Lightbox / Modal Modal */}
            <AnimatePresence>
                {selectedCert && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[1000] flex items-center justify-center p-4 sm:p-6 md:p-10 bg-[#0a0a0a]/95 backdrop-blur-xl overflow-y-auto"
                        onClick={() => setSelectedCert(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            className="relative max-w-[1000px] w-full bg-[#1a1a1a] rounded-2xl md:rounded-[40px] p-2 border border-white/10 shadow-[0_0_120px_rgba(0,0,0,0.8)] overflow-hidden my-auto"
                            onClick={e => e.stopPropagation()}
                        >
                            {/* Certificate Image - Full View */}
                            <div className="relative w-full max-h-[85vh] overflow-hidden rounded-xl md:rounded-[32px]">
                                <img 
                                    src={selectedCert.img} 
                                    alt={selectedCert.title} 
                                    className="w-full h-full object-contain block mx-auto shadow-2xl"
                                />
                            </div>
                            
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedCert(null)}
                                className="absolute top-4 right-4 md:top-8 md:right-8 w-12 h-12 md:w-16 md:h-16 rounded-full bg-black/60 md:bg-black/40 backdrop-blur-md flex items-center justify-center border border-white/20 hover:bg-[#e87532] hover:border-[#e87532] transition-all z-[1001] shadow-2xl group"
                            >
                                <i className="ri-close-line text-2xl md:text-3xl text-white group-hover:rotate-90 transition-transform" />
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </section>
    );
}
