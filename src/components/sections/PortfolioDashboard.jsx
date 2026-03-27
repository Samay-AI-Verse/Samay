import React from "react";

const InfoCard = ({ icon, label, val, sub }) => (
    <div className="p-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md hover:bg-white/10 transition-all group">
        <div className="flex items-center gap-3 mb-2">
            <div className="w-9 h-9 bg-[#e87532]/20 rounded-xl flex items-center justify-center group-hover:bg-[#e87532] transition-colors shrink-0">
                <i className={`${icon} text-base text-[#e87532] group-hover:text-white`} />
            </div>
            <div>
                <p className="text-[0.6rem] text-white/40 uppercase tracking-widest font-bold leading-none mb-1">{label}</p>
                <h4 className="text-sm font-outfit font-black text-white leading-tight">{val}</h4>
            </div>
        </div>
        <p className="text-[10px] text-white/50 leading-normal line-clamp-3">{sub}</p>
    </div>
);

export default function PortfolioDashboard() {
    return (
        <div className="relative group w-full max-w-[550px] mx-auto perspective-1000">
            {/* Background decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#e87532]/10 blur-[80px] rounded-full pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#e87532]/10 blur-[80px] rounded-full pointer-events-none" />

            {/* Main Interactive Dashboard */}
            <div className="relative z-10 p-1 border border-white/10 rounded-[40px] bg-gradient-to-br from-white/10 to-transparent backdrop-blur-3xl shadow-2xl transition-transform duration-700 hover:rotate-y-2 hover:rotate-x-2">
                <div className="p-6 bg-[#0a0a0a]/80 rounded-[38px] overflow-hidden">

                    {/* Header: System Status */}
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-[#e87532] rounded-full animate-pulse" />
                            <span className="text-[0.65rem] font-outfit font-bold tracking-[0.2em] text-[#e87532] uppercase">Core Engine Active</span>
                        </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-4">
                        <InfoCard
                            icon="ri-robot-line"
                            label="Intelligence"
                            val="AI Engineering"
                            sub="Specializing in LLM Fine-tuning, RAG pipelines, and Vector Database integration for intelligent systems."
                        />
                        <InfoCard
                            icon="ri-server-line"
                            label="Architecture"
                            val="Backend & Infrastructure"
                            sub="Building robust server-side logic with Python and FastAPI, ensuring high-performance API orchestration."
                        />
                        <InfoCard
                            icon="ri-team-line"
                            label="Systems"
                            val="Agentic Workflows"
                            sub="Designing multi-agent systems that automate complex business processes via voice and chat."
                        />
                        <InfoCard
                            icon="ri-cloud-line"
                            label="DevOps"
                            val="Full-Stack Deployment"
                            sub="Managing the entire lifecycle from Dockerization to Cloud deployment (AWS/Hugging Face) for scalable apps."
                        />
                    </div>

                    {/* Footer: Professional Visibility Hub */}
                    <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between">
                        <span className="text-[0.6rem] font-bold text-white/30 tracking-widest uppercase italic">Presence Hub</span>
                        <div className="flex gap-2">
                            {[
                                { icon: "ri-github-line", name: "GitHub", url: "https://github.com/Samay-AI-Verse" },
                                { icon: "ri-linkedin-line", name: "LinkedIn", url: "https://linkedin.com/in/samay-powade" },
                                {
                                    name: "HuggingFace",
                                    url: "https://huggingface.co/Samay-AI-Verse",
                                    customIcon: (
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M16.51 10.15a2.15 2.15 0 1 1-2.15-2.15 2.15 2.15 0 0 1 2.15 2.15zm-8.6 0a2.15 2.15 0 1 1-2.15-2.15 2.15 2.15 0 0 1 2.15 2.15zm6.81 4.57c0 1.4-1.12 2.53-2.52 2.53a2.53 2.53 0 0 1-2.52-2.53h5.04zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                                        </svg>
                                    )
                                },
                                {
                                    name: "LeetCode",
                                    url: "https://leetcode.com/samay-ai",
                                    customIcon: (
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M22 14.355c0-.742-.564-1.346-1.26-1.346H10.691c-.71 0-1.29.604-1.29 1.346s.58 1.346 1.29 1.346h10.05c.696 0 1.259-.604 1.259-1.346zM15.717 6.353c0-.663-.525-1.2-1.171-1.2H4.444c-.647 0-1.172.537-1.172 1.2 0 .663.525 1.2 1.172 1.2h10.102c.646 0 1.171-.537 1.171-1.2zM22 21.012c0-.742-.564-1.346-1.26-1.346H4.444c-.71 0-1.29.604-1.29 1.346s.58 1.346 1.29 1.346h16.296c.696 0 1.26-.604 1.26-1.346zM15.717 14.355c0-.663-.525-1.2-1.171-1.2H4.444c-.647 0-1.172.537-1.172 1.2 0 .663.525 1.2 1.172 1.2h10.102c.646 0 1.171-.537 1.171-1.2z" />
                                        </svg>
                                    )
                                },
                                { icon: "ri-instagram-line", name: "Instagram", url: "#" },
                            ].map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:bg-[#e87532] hover:text-white hover:border-[#e87532] transition-all group"
                                    title={social.name}
                                >
                                    {social.customIcon ? social.customIcon : <i className={`${social.icon} text-lg transition-transform group-hover:scale-110`} />}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
