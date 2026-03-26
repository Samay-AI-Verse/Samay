import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectCSection() {
    const containerRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                textRef.current,
                { y: 100, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.5,
                    ease: "power4.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 80%",
                        end: "top 20%",
                        scrub: 1,
                    },
                }
            );
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            id="project-c"
            className="relative w-full min-h-screen py-24 flex flex-col items-center justify-center bg-[#0a1103] text-[#f4ede6] overflow-hidden"
        >
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#e87532] via-transparent to-transparent opacity-20" />
            </div>

            <div className="relative z-10 text-center px-6 max-w-4xl">
                <p className="text-[#e87532] font-outfit font-bold tracking-[0.3em] uppercase text-sm mb-6">
                    Project C: The Future
                </p>
                <h2 ref={textRef} className="font-outfit font-black text-6xl md:text-8xl mb-8 leading-none">
                    BEYOND <br />
                    <span className="text-[#e87532] italic font-serif font-light">LIMITS.</span>
                </h2>
                <p className="text-xl md:text-2xl opacity-60 font-outfit max-w-2xl mx-auto leading-relaxed">
                    Exploring the convergence of multi-modal AI and edge computing. 
                    Project C represents the next milestone in autonomous intelligence systems.
                </p>
                
                <div className="mt-16 flex flex-wrap gap-8 justify-center">
                    <div className="project-c-anim p-8 border border-white/10 bg-white/5 rounded-3xl backdrop-blur-xl w-64 text-left">
                        <i className="ri-shining-line text-4xl text-[#e87532] mb-4 block" />
                        <h4 className="font-outfit font-bold text-xl mb-2">Neural Edge</h4>
                        <p className="opacity-50 text-sm">Low-latency inference on decentralized hardware arrays.</p>
                    </div>
                    <div className="project-c-anim p-8 border border-white/10 bg-white/5 rounded-3xl backdrop-blur-xl w-64 text-left">
                        <i className="ri-cloud-windy-line text-4xl text-[#e87532] mb-4 block" />
                        <h4 className="font-outfit font-bold text-xl mb-2">Vision Mesh</h4>
                        <p className="opacity-50 text-sm">Real-time spatial mapping across distributed sensor networks.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
