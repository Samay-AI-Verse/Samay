import React from "react";
import personalImg from "../../assets/img/person/actual image.png";
import resumePdf from "../../assets/img/Resume/samay.pdf";

export default function AboutSection() {
    return (
        <section id="about-me" className="relative w-full py-20 md:py-24 bg-[#0a0a0a] text-[#f4ede6]">
            <div className="max-w-[1200px] mx-auto px-5 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">

                {/* Photo */}
                <div className="about-anim mob-anim relative rounded-2xl md:rounded-3xl overflow-hidden border border-[#e87532]/20 shadow-2xl group">
                    <img
                        src={personalImg}
                        alt="Samay Powade"
                        className="w-full h-auto grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />
                </div>

                {/* Text Content */}
                <div className="about-anim mob-anim space-y-6 md:space-y-8">
                    <div className="space-y-5 md:space-y-6 text-base md:text-lg opacity-85 leading-relaxed font-outfit">
                        <div>
                            <span className="text-[#e87532] font-outfit font-bold tracking-widest uppercase text-xs">Origin &amp; Focus</span>
                            <h2 className="text-2xl md:text-5xl font-outfit font-black mt-1 leading-none">
                                Samay Santosh <span className="text-[#e87532]">Powade</span>
                            </h2>
                        </div>

                        <div className="space-y-4">
                            <p className="text-white/90 leading-relaxed font-outfit text-sm md:text-base">
                                I'm an <strong className="text-[#e87532] font-semibold">AI Engineer</strong> focused on building real-world AI systems using LLMs and retrieval-based workflows. I develop applications that connect conversational AI with structured data, turning prototypes into production-ready systems.
                            </p>

                            <p className="text-white/80 leading-relaxed font-outfit text-sm">
                                My core work includes:
                            </p>
                            <ul className="space-y-3 pl-2">
                                {[
                                    { t: "RAG Intel Engine", d: "High-density document system for querying private data with context-aware retrieval." },
                                    { t: "Voice AI Pipeline", d: "End-to-end speech and NLP automation for real-time conversational agents." },
                                    { t: "Sanjeevani AI OS", d: "Integrated pharmacy operating system for managing orders, refills, and inventory." }
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3 group/li">
                                        <div className="w-1 h-1 rounded-full bg-[#e87532] mt-2 shrink-0 group-hover:scale-150 transition-transform" />
                                        <div>
                                            <p className="text-white font-bold text-xs uppercase tracking-wider">{item.t}</p>
                                            <p className="text-xs text-white/50 font-light mt-0.5">{item.d}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Stack info */}
                        <div className="grid grid-cols-2 gap-4 md:gap-6 pt-4 border-t border-white/5">
                            <div className="space-y-1">
                                <p className="text-[#e87532] text-[0.6rem] font-black tracking-widest uppercase">The Focus:</p>
                                <p className="text-xs text-white/70">Agentic Workflows &amp; Backend Reliability</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-[#e87532] text-[0.6rem] font-black tracking-widest uppercase">The Stack:</p>
                                <p className="text-xs text-white/70">FastAPI, Python, AWS, Docker</p>
                            </div>
                        </div>

                        <p className="text-sm text-white/60 font-outfit leading-relaxed italic border-l-2 border-[#e87532] pl-4">
                            I work across the full pipeline — from designing AI workflows to building the high-concurrency backend systems that support real-world use.
                        </p>

                        <p className="text-[#e87532] text-sm font-bold tracking-tight">
                            Open to AI Engineering internships and collaborations.
                        </p>
                    </div>

                    {/* CTA */}
                    <div className="flex flex-wrap gap-4 pt-2">
                        <a
                            href={resumePdf}
                            target="_blank"
                            rel="noreferrer"
                            className="px-8 py-4 md:px-10 md:py-5 bg-[#e87532] text-white rounded-xl font-bold font-outfit flex items-center gap-3 hover:bg-[#c65e25] transition-all shadow-[0_10px_30px_rgba(232,117,50,0.3)] group/btn"
                        >
                            <i className="ri-external-link-line text-xl md:text-2xl group-hover:translate-y-1 transition-transform" /> View AI Resume
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
