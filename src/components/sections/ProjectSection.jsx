import React from "react";

// Project Images
import sanjeevaniImg from "../../assets/img/portfolio/womens_safety_ai.png";
import callingImg from "../../assets/img/portfolio/chetanalabs.png";
import droneImg from "../../assets/img/portfolio/trinetra_drone.png";
import sarathiImg from "../../assets/img/portfolio/sarathi_astra.png";
import astraImg from "../../assets/img/portfolio/dream_weaver.png";
import loanImg from "../../assets/img/projects/loan_prediction.png";

const PROJECTS = [
    {
        title: "Trinetra Drone",
        cat: "Computer Vision",
        img: droneImg,
        desc: "Advanced aerial surveillance system for real-time threat detection and spatial mapping.",
        tags: ["YOLO", "Edge AI", "Drones"]
    },
    {
        title: "Dream Weaver (Astra)",
        cat: "Generative Art",
        img: astraImg,
        desc: "AI-driven image and art generation platform leveraging Stable Diffusion and custom LoRA models.",
        tags: ["Diffusion", "Pytorch", "Art"]
    },
    {
        title: "Loan Prediction",
        cat: "Machine Learning",
        img: loanImg,
        desc: "End-to-end predictive model for banking risk assessment and automated credit scoring.",
        tags: ["Scikit-Learn", "FastAPI", "ML"]
    }
];

export default function ProjectSection() {
    return (
        <section id="project-section" className="w-full py-24 bg-[#0a0a0a] text-[#f4ede6]">
            {/* Header matching HTML style but premium */}
            <div className="max-w-[1200px] mx-auto px-6 mb-16">
                <span className="text-[#e87532] font-outfit font-bold tracking-[0.2em] uppercase text-sm">Full Gallery</span>
                <h2 className="text-4xl md:text-5xl font-outfit font-black mt-2 leading-tight uppercase">
                    Technical <span className="text-[#e87532]">Builds.</span>
                </h2>
                <div className="w-20 h-1 bg-[#e87532] mt-6 opacity-40" />
            </div>

            {/* Grid from HTML */}
            <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {PROJECTS.map((proj, i) => (
                    <div 
                        key={i} 
                        className="project-anim group relative bg-[#151515] border border-white/5 rounded-3xl overflow-hidden hover:border-[#e87532]/30 transition-all duration-500 shadow-xl"
                    >
                        {/* Project Image */}
                        <div className="relative h-60 w-full overflow-hidden bg-[#1a1a1a]">
                            <img 
                                src={proj.img} 
                                alt={proj.title} 
                                className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" 
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#151515] to-transparent opacity-60" />
                            
                            {/* Category Tag */}
                            <div className="absolute top-4 left-4 px-3 py-1 bg-[#e87532]/20 border border-[#e87532]/30 backdrop-blur-md rounded-[10px]">
                                <span className="text-[0.65rem] font-bold text-[#e87532] uppercase tracking-wider">{proj.cat}</span>
                            </div>
                        </div>

                        {/* Project Content */}
                        <div className="p-8">
                            <h3 className="text-xl font-outfit font-black mb-3 group-hover:text-[#e87532] transition-colors">{proj.title}</h3>
                            <p className="text-xs opacity-60 leading-relaxed mb-6 line-clamp-2 h-[2.5rem]">{proj.desc}</p>
                            
                            <div className="flex flex-wrap gap-2 mt-auto">
                                {proj.tags.map(tag => (
                                    <span key={tag} className="text-[0.62rem] font-bold px-3 py-1 bg-white/5 rounded-full border border-white/10 opacity-70">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
