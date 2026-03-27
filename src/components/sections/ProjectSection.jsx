import React from "react";

// Project Images
import sanjeevaniImg from "../../assets/img/portfolio/sanjeevani_new.png";
import callingImg from "../../assets/img/portfolio/chetanalabs.png";
import droneImg from "../../assets/img/portfolio/trinetra_drone.png";
import sarathiImg from "../../assets/img/portfolio/sarathi_astra.png";
import astraImg from "../../assets/img/portfolio/dream_weaver.png";
import loanImg from "../../assets/img/projects/loan_prediction.png";
import churnImg from "../../assets/img/projects/churn_predictor.png";

const PROJECTS = [
    {
        title: "Churn Predictor AI",
        cat: "Predictive Analytics",
        img: churnImg,
        desc: "End-to-end AI application for identifying at-risk customers with high-precision retention scoring.",
        tags: ["Scikit-Learn", "FastAPI", "Pandas"],
        github: "https://github.com/Samay-AI-Verse/customer-churn-prediction"
    },
    {
        title: "SHAKTI",
        cat: "Women Safety AI",
        img: sanjeevaniImg,
        desc: "AI-powered women safety platform with emergency triggers and real-time situational awareness.",
        tags: ["Python", "YOLO", "Edge AI"],
        github: "https://github.com/Samay-AI-Verse/Chatbot-Women-Sefty"
    },
    {
        title: "Calling Assistant",
        cat: "Voice Automation",
        img: callingImg,
        desc: "Conversational AI for HR automation, screening, and large-scale interview management.",
        tags: ["Vapi AI", "NLP", "HR Tech"],
        github: "https://github.com/Samay-AI-Verse/ChetanaLabs-"
    },
    {
        title: "Sarathi Astra",
        cat: "Advanced RAG System",
        img: sarathiImg,
        desc: "High-density document intelligence engine providing context-aware Q&A and semantic data extraction.",
        tags: ["LangChain", "Vector DB", "LLMs"],
        github: "https://github.com/Samay-AI-Verse/Sarthi-Astra"
    },
    {
        title: "Loan Prediction",
        cat: "Machine Learning",
        img: loanImg,
        desc: "End-to-end predictive model for banking risk assessment and automated credit scoring.",
        tags: ["Scikit-Learn", "FastAPI", "ML"],
        github: "https://github.com/Samay-AI-Verse"
    }
];

export default function ProjectSection() {
    return (
        <section id="project-section" className="w-full py-20 md:py-24 bg-[#0a0a0a] text-[#f4ede6]">
            {/* Header */}
            <div className="mob-anim max-w-[1200px] mx-auto px-5 md:px-6 mb-10 md:mb-16">
                <span className="text-[#e87532] font-outfit font-bold tracking-[0.2em] uppercase text-sm">Full Gallery</span>
                <h2 className="text-4xl md:text-5xl font-outfit font-black mt-2 leading-tight uppercase">
                    Technical <span className="text-[#e87532]">Builds.</span>
                </h2>
                <div className="w-20 h-1 bg-[#e87532] mt-5 md:mt-6 opacity-40" />
            </div>

            {/* ── Desktop: horizontal swipe (unchanged) ── */}
            <div className="hidden md:flex max-w-full overflow-x-auto pb-12 px-6 md:px-12 gap-8 no-scrollbar snap-x snap-mandatory">
                {PROJECTS.map((proj, i) => (
                    <div
                        key={i}
                        className="project-anim group relative bg-[#151515] border border-white/5 rounded-3xl overflow-hidden hover:border-[#e87532]/30 transition-all duration-500 shadow-xl min-w-[400px] snap-center"
                    >
                        {/* Project Image */}
                        <div className="relative h-64 w-full overflow-hidden bg-[#1a1a1a]">
                            <img
                                src={proj.img}
                                alt={proj.title}
                                className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#151515] to-transparent opacity-60" />
                            <div className="absolute top-4 left-4 px-3 py-1 bg-[#e87532]/20 border border-[#e87532]/30 backdrop-blur-md rounded-[10px]">
                                <span className="text-[0.65rem] font-bold text-[#e87532] uppercase tracking-wider">{proj.cat}</span>
                            </div>
                        </div>
                        <div className="p-8">
                            <h3 className="text-xl font-outfit font-black mb-3 group-hover:text-[#e87532] transition-colors">{proj.title}</h3>
                            <p className="text-xs opacity-60 leading-relaxed mb-6 line-clamp-2 h-[2.5rem]">{proj.desc}</p>
                            <div className="flex items-center justify-between gap-4 mt-auto pt-6 border-t border-white/5">
                                <div className="flex flex-wrap gap-2">
                                    {proj.tags.map(tag => (
                                        <span key={tag} className="text-[0.62rem] font-bold px-3 py-1 bg-white/5 rounded-full border border-white/10 opacity-70">{tag}</span>
                                    ))}
                                </div>
                                <a href={proj.github} target="_blank" rel="noreferrer"
                                    className="p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-[#e87532] hover:border-[#e87532] transition-all group/git">
                                    <i className="ri-github-line text-lg group-hover/git:scale-110 transition-transform" />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* ── Mobile: horizontal swipe ── */}
            <div className="md:hidden flex overflow-x-auto pb-10 px-5 gap-5 no-scrollbar snap-x snap-mandatory">
                {PROJECTS.map((proj, i) => (
                    <div
                        key={i}
                        className="mob-anim group relative bg-[#151515] border border-white/5 rounded-2xl overflow-hidden active:border-[#e87532]/40 transition-all duration-300 shadow-lg min-w-[280px] snap-center"
                    >
                        {/* Image */}
                        <div className="relative h-44 w-full overflow-hidden bg-[#1a1a1a]">
                            <img
                                src={proj.img}
                                alt={proj.title}
                                className="w-full h-full object-cover grayscale-[30%] transition-all duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#151515] to-transparent opacity-70" />
                            <div className="absolute top-3 left-3 px-2.5 py-1 bg-[#e87532]/20 border border-[#e87532]/30 backdrop-blur-md rounded-lg">
                                <span className="text-[0.6rem] font-bold text-[#e87532] uppercase tracking-wider">{proj.cat}</span>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-5">
                            <h3 className="text-base font-outfit font-black mb-2">{proj.title}</h3>
                            <p className="text-xs opacity-50 leading-relaxed mb-4 line-clamp-2 h-[2.5rem]">{proj.desc}</p>
                            <div className="flex items-center justify-between gap-3 pt-4 border-t border-white/5">
                                <div className="flex flex-wrap gap-1.5">
                                    {proj.tags.slice(0, 2).map(tag => (
                                        <span key={tag} className="text-[0.6rem] font-bold px-2 py-0.5 bg-white/5 rounded-full border border-white/10 opacity-70">{tag}</span>
                                    ))}
                                </div>
                                <a href={proj.github} target="_blank" rel="noreferrer"
                                    className="p-2.5 bg-white/5 border border-white/10 rounded-xl hover:bg-[#e87532] hover:border-[#e87532] transition-all shrink-0">
                                    <i className="ri-github-line text-base" />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}

                {/* 'See All' Card */}
                <div className="mob-anim flex-shrink-0 w-[180px] snap-center flex items-center justify-center">
                    <a 
                        href="https://github.com/Samay-AI-Verse" 
                        target="_blank" 
                        rel="noreferrer"
                        className="flex flex-col items-center gap-3 group"
                    >
                        <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center bg-white/5 group-active:bg-[#e87532] transition-all">
                            <i className="ri-arrow-right-line text-xl opacity-60 group-active:opacity-100" />
                        </div>
                        <span className="text-[0.65rem] font-black uppercase tracking-[0.2em] opacity-40 group-active:opacity-100 transition-all">See All</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
