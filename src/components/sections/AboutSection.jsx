import React from "react";
import personalImg from "../../assets/img/person/actual image.png";

export default function AboutSection() {
    return (
        <section id="about-me" className="relative w-full py-24 bg-[#0a0a0a] text-[#f4ede6]">
            <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="about-anim relative rounded-3xl overflow-hidden border border-[#e87532]/20 shadow-2xl group">
                    <img 
                        src={personalImg} 
                        alt="Samay Powade" 
                        className="w-full h-auto grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />
                </div>

                <div className="about-anim space-y-8">
                    <div className="space-y-6 text-base md:text-lg opacity-85 leading-relaxed font-outfit">
                        <p>
                            I’m <strong className="text-[#e87532] font-semibold">Samay Santosh Powade</strong>, an AI Engineer focused on building real-world AI systems using LLMs and retrieval-based workflows.
                        </p>
                        <p>
                            I develop applications that connect conversational AI with structured data and operational processes, turning AI capabilities into usable systems rather than just prototypes.
                        </p>
                        
                        <div className="py-2 space-y-3">
                            <p className="text-[#e87532] text-xs font-black tracking-widest uppercase">Key Implementations:</p>
                            <ul className="space-y-3 list-none">
                                {[
                                    "A RAG-based document system for querying private data",
                                    "A voice-based AI assistant with end-to-end speech and NLP pipeline",
                                    "Sanjeevani — AI-powered pharmacy system managing orders, refills & inventory"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <i className="ri-checkbox-circle-fill text-[#e87532] mt-1 opacity-60" />
                                        <span className="text-white/80">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <p>
                            I work across the full pipeline — from designing AI workflows and integrating models to building backend systems that support real-world use.
                        </p>
                        
                        <p className="pt-2 italic text-[#e87532]/80 text-sm font-medium">
                            Interested in building production-ready AI systems. Open to AI Engineering internships and collaborations.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <a href="assets/pdf/Samay copy.pdf" download className="px-10 py-5 bg-[#e87532] text-white rounded-xl font-bold font-outfit flex items-center gap-3 hover:bg-[#c65e25] transition-all shadow-[0_10px_30px_rgba(232,117,50,0.3)]">
                            <i className="ri-download-line text-2xl" /> Download AI Resume
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
