import React from "react";
import MobileProjectCard from "./MobileProjectCard";

// Project Images
import sanjeevaniImg from "../../assets/img/portfolio/womens_safety_ai.png";
import callingImg from "../../assets/img/portfolio/chetanalabs.png";
import droneImg from "../../assets/img/portfolio/sarathi_astra.png"; // Placeholder for drone project

const INNOVATIONS = [
    {
        title: "Sanjeevani",
        cat: "Healthcare AI Ecosystem",
        img: sanjeevaniImg,
        desc: "A multi-tenant healthcare delivery dashboard optimizing pharmaceutical supply chains.",
        tags: ["React", "Safety AI", "Analytics"],
        color: "#e87532",
        github: "https://github.com/Samay-AI-Verse",
        live: "#"
    },
    {
        title: "Calling Assistant",
        cat: "Voice AI & Automation",
        img: callingImg,
        desc: "AI-powered conversational agent for HR automation, screening, and interview scheduling.",
        tags: ["Vapi AI", "NLP", "HR Tech"],
        color: "#00c9ff",
        github: "https://github.com/Samay-AI-Verse",
        live: "#"
    },
    {
        title: "Autonomous Drone",
        cat: "Edge AI & Computer Vision",
        img: droneImg, 
        desc: "Autonomous aerial system featuring real-time object detection and intelligent pathfinding.",
        tags: ["YOLOv8", "OpenCV", "Robotics"],
        color: "#8e2de2",
        github: "https://github.com/Samay-AI-Verse",
        live: "#"
    }
];

export default function InnovationSection() {
    return (
        <section id="innovation-section" className="w-full py-32 bg-[#050505] text-[#f4ede6] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#e87532]/5 blur-[120px] rounded-full" />

            <div className="max-w-[1200px] mx-auto px-6 mb-20 text-center md:text-left">
                <span className="text-[#e87532] font-outfit font-bold tracking-[0.2em] uppercase text-sm">Innovation Lab</span>
                <h2 className="text-4xl md:text-7xl font-outfit font-black mt-4 leading-none uppercase">
                   Cognitive <br />
                    <span className="text-[#e87532] italic font-serif font-light">Ecosystems.</span>
                </h2>
                <div className="w-32 h-1 bg-[#e87532] mt-8 opacity-60 mx-auto md:mx-0" />
            </div>

            <div className="max-w-[1200px] mx-auto px-6 flex flex-wrap justify-center gap-10">
                {INNOVATIONS.map((item, i) => (
                    <div key={i} className="innovation-anim">
                        <MobileProjectCard {...item} />
                    </div>
                ))}
            </div>
        </section>
    );
}
