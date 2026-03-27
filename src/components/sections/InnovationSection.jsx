import React from "react";
import MobileProjectCard from "./MobileProjectCard";

// Project Images
import sanjeevaniImg from "../../assets/img/portfolio/sanjeevani_new.png";
import callingImg from "../../assets/img/portfolio/chetanalabs.png";
import droneImg from "../../assets/img/portfolio/trinetra_drone.png";

const INNOVATIONS = [
    {
        title: "Sanjeevani",
        cat: "Healthcare AI Ecosystem",
        img: sanjeevaniImg,
        desc: "A multi-tenant healthcare delivery dashboard optimizing pharmaceutical supply chains.",
        tags: ["React", "Safety AI", "Analytics"],
        color: "#e87532",
        github: "https://github.com/Samay-AI-Verse/ShivanyaRxAI-System.git",
        live: "https://shivanyarxai.netlify.app/"
    },
    {
        title: "Calling Assistant",
        cat: "Voice AI & Automation",
        img: callingImg,
        desc: "AI-powered conversational agent for HR automation, screening, and interview scheduling.",
        tags: ["Vapi AI", "NLP", "HR Tech"],
        color: "#00c9ff",
        github: "https://github.com/Samay-AI-Verse/ChetanaLabs-",
        live: "#"
    },
    {
        title: "Trinetra Drone",
        cat: "Edge AI & Computer Vision",
        img: droneImg,
        desc: "Autonomous aerial system featuring real-time object detection and intelligent pathfinding.",
        tags: ["YOLOv8", "OpenCV", "Robotics"],
        color: "#8e2de2",
        github: "https://github.com/Samay-AI-Verse/Trinetra",
        live: "#"
    }
];

export default function InnovationSection() {
    return (
        <section id="innovation-section" className="w-full py-24 md:py-32 bg-[#050505] text-[#f4ede6] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#e87532]/5 blur-[120px] rounded-full" />

            {/* Section Header */}
            <div className="mob-anim max-w-[1240px] mx-auto px-5 md:px-6 mb-12 md:mb-20 text-center md:text-left">
                <span className="text-[#e87532] font-outfit font-bold tracking-[0.2em] uppercase text-sm">Innovation Lab</span>
                <h2 className="text-4xl md:text-7xl font-outfit font-black mt-4 leading-none uppercase">
                    Cognitive <br />
                    <span className="text-[#e87532] italic font-serif font-light">Ecosystems.</span>
                </h2>
                <div className="w-24 md:w-32 h-1 bg-[#e87532] mt-6 md:mt-8 opacity-60 mx-auto md:mx-0" />
            </div>

            {/* ── Desktop: 3-col grid (unchanged) ── */}
            <div className="hidden md:grid max-w-[1240px] mx-auto px-6 grid-cols-3 gap-8 justify-center pb-8">
                {INNOVATIONS.map((item, i) => (
                    <div key={i} className="innovation-anim flex justify-center">
                        <MobileProjectCard {...item} />
                    </div>
                ))}
            </div>

            {/* ── Mobile: horizontal swipe ── */}
            <div className="md:hidden flex overflow-x-auto pb-10 px-5 gap-6 no-scrollbar snap-x snap-mandatory">
                {INNOVATIONS.map((item, i) => (
                    <div key={i} className="mob-anim flex-shrink-0 w-[280px] snap-center">
                        <MobileProjectCard {...item} />
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
