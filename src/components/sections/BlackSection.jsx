import React from "react";

const AIGraphic = ({ filled }) => (
    <svg viewBox="0 0 200 200" className="w-full h-full">
        <g
            stroke={filled ? "none" : "#e87532"}
            fill={filled ? "#e87532" : "none"}
            strokeWidth={filled ? "0" : "1"}
        >
            {/* Central Node */}
            <circle cx="100" cy="100" r="15" />
            
            {/* Connected Nodes */}
            <circle cx="50" cy="50" r="8" />
            <circle cx="150" cy="50" r="8" />
            <circle cx="50" cy="150" r="8" />
            <circle cx="150" cy="150" r="8" />
            <circle cx="100" cy="40" r="8" />
            <circle cx="100" cy="160" r="8" />
            
            {/* Connection Lines */}
            <line x1="100" y1="100" x2="50" y2="50" strokeDasharray="4 4" />
            <line x1="100" y1="100" x2="150" y2="50" strokeDasharray="4 4" />
            <line x1="100" y1="100" x2="50" y2="150" strokeDasharray="4 4" />
            <line x1="100" y1="100" x2="150" y2="150" strokeDasharray="4 4" />
            <line x1="100" y1="100" x2="100" y2="40" strokeDasharray="4 4" />
            <line x1="100" y1="100" x2="100" y2="160" strokeDasharray="4 4" />
        </g>
    </svg>
);

export default function BlackSection() {
    return (
        <section
            id="black-ai-section"
            className="w-full relative h-[100vh] overflow-hidden bg-[#0a0a0a]"
        >
            {/* Background column dividers */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
                <div className="w-full h-full flex divide-x divide-[#e87532] divide-dashed md:divide-solid">
                    {[...Array(6)].map((_, i) => <div key={i} className="flex-1 w-full h-full border-[#e87532]" />)}
                </div>
            </div>

            {/* Top/Bottom border lines */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-[#e87532] opacity-20 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#e87532] opacity-20 pointer-events-none" />

            {/* Main content grid */}
            <div className="relative z-10 w-full h-full max-w-[1700px] mx-auto px-8 grid grid-cols-1 md:grid-cols-3 items-center">

                {/* Left Text */}
                <div className="flex flex-col justify-start h-full pt-[30vh]">
                    <h2 className="text-[2.5rem] md:text-[3vw] lg:text-[3.5vw] font-[500] leading-[1.1] tracking-tight text-[#f4ede6] font-['Outfit']">
                        Precision in Data.
                        <br />
                        Innovation in AI.
                        <br />
                        <span className="text-[#e87532]">Scalable Solutions.</span>
                    </h2>
                </div>

                {/* Center SVG Graphic */}
                <div className="relative w-full aspect-square flex items-end justify-center min-w-[350px] max-w-[550px] mx-auto">
                    {/* Unfilled Outline */}
                    <div className="absolute inset-0 w-full h-full text-[#e87532]">
                        <AIGraphic filled={false} />
                    </div>

                    {/* Filled Overlay animated dynamically by GSAP */}
                    <div id="ai-fill-wrapper" className="absolute bottom-0 left-0 w-full overflow-hidden" style={{ height: "0%" }}>
                        <div className="absolute bottom-0 left-0 w-full text-[#e87532]" style={{ aspectRatio: '1 / 1' }}>
                            <AIGraphic filled={true} />
                        </div>
                    </div>
                </div>

                {/* Right Text */}
                <div className="flex flex-col justify-end h-full pb-[30vh]">
                    <h2 className="text-[2.5rem] md:text-[3vw] lg:text-[3.5vw] font-[500] leading-[1.1] tracking-tight text-[#f4ede6] font-['Outfit'] md:text-left pl-0 md:pl-12">
                        End-to-End
                        <br />
                        Model Pipelines
                        <br />
                        <span className="text-[#e87532]">Deployable Systems.</span>
                    </h2>
                </div>

            </div>
        </section>
    );
}
