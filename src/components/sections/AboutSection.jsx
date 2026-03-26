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
                    <div>
                        <span className="text-[#e87532] font-outfit font-bold tracking-widest uppercase text-sm">Who I Am</span>
                        <h2 className="text-4xl md:text-5xl font-outfit font-black mt-2 leading-none">
                            Bridging Theory & <span className="text-[#e87532]">Silicon</span>
                        </h2>
                    </div>

                    <div className="space-y-6 text-lg md:text-xl opacity-80 leading-relaxed font-outfit font-light">
                        <p>
                            Hello! I’m <strong className="text-[#e87532] font-semibold">Samay</strong>, a dedicated <strong>AI Engineer & Data Scientist</strong>. 
                            I'm currently a 3rd-year B.Tech student at DBATU with a deep fascination for autonomous systems and cognitive computing.
                        </p>
                        <p>
                            My expertise lies in building end-to-end AI applications—from scraping and cleaning data to training 
                            state-of-the-art models and deploying them into production. I specialize in <b>Generative AI, Large Language Models (LLMs), and Computer Vision.</b>
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <a href="assets/pdf/Samay copy.pdf" download className="px-8 py-4 bg-transparent border border-[#e87532]/40 rounded-xl font-bold font-outfit flex items-center gap-3 hover:bg-[#e87532] hover:text-white transition-all">
                            <i className="ri-download-line text-xl" /> AI Resume
                        </a>
                        <a href="assets/pdf/Samay Full stack.pdf" download className="px-8 py-4 bg-transparent border border-white/20 rounded-xl font-bold font-outfit flex items-center gap-3 hover:bg-white hover:text-black transition-all">
                            <i className="ri-download-line text-xl" /> Full Stack Resume
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
