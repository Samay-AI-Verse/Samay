import React from "react";

const InfoCard = ({ icon, label, val, sub }) => (
    <div className="p-5 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md hover:bg-white/10 transition-all group">
        <div className="flex items-center gap-4 mb-3">
            <div className="w-10 h-10 bg-[#e87532]/20 rounded-xl flex items-center justify-center group-hover:bg-[#e87532] transition-colors">
                <i className={`${icon} text-lg text-[#e87532] group-hover:text-white`} />
            </div>
            <div>
                <p className="text-[0.65rem] text-white/40 uppercase tracking-widest font-bold">{label}</p>
                <h4 className="text-lg font-outfit font-black text-white">{val}</h4>
            </div>
        </div>
        <p className="text-xs text-white/50 leading-relaxed">{sub}</p>
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
                <div className="p-8 bg-[#0a0a0a]/80 rounded-[38px] overflow-hidden">

                    {/* Header: System Status */}
                    <div className="flex items-center justify-between mb-10">
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-[#e87532] rounded-full animate-pulse" />
                            <span className="text-[0.65rem] font-outfit font-bold tracking-[0.2em] text-[#e87532] uppercase">Core Engine Active</span>
                        </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-4">
                        <InfoCard
                            icon="ri-server-line"
                            label="Architecture"
                            val="Backend & Infrastructure"
                            sub="Building robust server-side logic with Python and FastAPI, ensuring high-performance API orchestration."
                        />
                        <InfoCard
                            icon="ri-robot-line"
                            label="Intelligence"
                            val="AI Engineering"
                            sub="Specializing in LLM Fine-tuning, RAG pipelines, and Vector Database integration for intelligent systems."
                        />
                        <InfoCard
                            icon="ri-cloud-line"
                            label="DevOps"
                            val="Full-Stack Deployment"
                            sub="Managing the entire lifecycle from Dockerization to Cloud deployment (AWS/Hugging Face) for scalable apps."
                        />
                        <InfoCard
                            icon="ri-team-line"
                            label="Systems"
                            val="Agentic Workflows"
                            sub="Designing multi-agent systems that automate complex business processes via voice and chat."
                        />
                    </div>

                    {/* Footer: Knowledge Visualization (abstract) */}
                    <div className="mt-10 pt-8 border-t border-white/10 flex items-center justify-between">
                        <div className="flex -space-x-3">
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className={`w-8 h-8 rounded-full border border-[#0a0a0a] bg-[#1a1a1a] flex items-center justify-center overflow-hidden`}>
                                    <div className="w-4 h-4 rounded-full bg-[#e87532]/20 border border-[#e87532]/40" />
                                </div>
                            ))}
                            <div className="w-8 h-8 rounded-full border border-[#0a0a0a] bg-[#1a1a1a] flex items-center justify-center text-[10px] text-white/50 font-bold">+12</div>
                        </div>
                        <button className="text-[0.65rem] font-outfit font-bold px-4 py-2 bg-[#e87532]/10 border border-[#e87532]/30 rounded-full text-[#e87532] hover:bg-[#e87532] hover:text-white transition-all">
                            VIEW CAPABILITIES
                        </button>
                    </div>
                </div>
            </div>

            {/* Floating floating "Badge" */}
            <div className="absolute -right-6 top-1/4 translate-x-1/2 -translate-y-1/2 bg-[#e87532] text-white py-3 px-6 rounded-2xl font-black font-outfit text-sm rotate-12 shadow-2xl z-20">
                AI OPTIMIZED
            </div>
        </div>
    );
}
