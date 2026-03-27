import React from "react";

// On mobile: renders a clean vertical list of skills/roles
// On desktop: unchanged 2×2 grid with hover effects
const MOBILE_SKILLS = [
    { icon: "ri-robot-line",  label: "Intelligence",   val: "AI Engineering",         col: "#e87532" },
    { icon: "ri-server-line", label: "Architecture",   val: "Backend & Infrastructure", col: "#e87532" },
    { icon: "ri-team-line",   label: "Systems",        val: "Agentic Workflows",       col: "#e87532" },
    { icon: "ri-cloud-line",  label: "DevOps",         val: "Full-Stack Deployment",   col: "#e87532" },
];

const SOCIALS = [
    { icon: "ri-github-line",    name: "GitHub",      url: "https://github.com/Samay-AI-Verse" },
    { icon: "ri-linkedin-line",  name: "LinkedIn",    url: "https://linkedin.com/in/samay-powade" },
    {
        name: "HuggingFace", url: "https://huggingface.co/Samay-AI",
        customIcon: (
            <svg width="18" height="18" viewBox="0 0 475 439" className="transition-transform group-hover:scale-110">
                <path d="M235.793 396.126a187.281 187.281 0 00187.285-187.284A187.283 187.283 0 00235.793 21.558 187.287 187.287 0 0048.509 208.842a187.286 187.286 0 00187.284 187.284z" fill="#FFD21E"/>
                <path d="M423.078 208.842A187.283 187.283 0 00235.793 21.558 187.283 187.283 0 0048.509 208.842a187.283 187.283 0 00319.714 132.43 187.284 187.284 0 0054.855-132.43zm-396.127 0a208.842 208.842 0 11417.685 0 208.842 208.842 0 01-417.685 0z" fill="#FF9D0B"/>
                <path d="M296.641 157.912c6.898 2.371 9.593 16.491 16.545 12.827a26.946 26.946 0 008.24-40.841 26.952 26.952 0 00-28.632-8.767 26.942 26.942 0 00-19.055 23.099 26.943 26.943 0 003.014 15.352c3.288 6.198 13.744-3.88 19.941-1.724l-.053.054zm-126.923 0c-6.898 2.371-9.647 16.491-16.545 12.827a26.946 26.946 0 01-8.24-40.841 26.952 26.952 0 0128.632-8.767 26.944 26.944 0 0116.041 38.451c-3.288 6.198-13.797-3.88-19.941-1.724l.053.054z" fill="#3A3B45"/>
                <path d="M234.446 287.205c52.979 0 70.063-47.212 70.063-71.464 0-12.612-8.461-8.624-22.043-1.941-12.557 6.198-29.426 14.768-47.966 14.768-38.75 0-70.063-37.08-70.063-12.827 0 24.252 17.031 71.464 70.063 71.464h-.054z" fill="#FF323D"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M193.863 274.863a46.895 46.895 0 0128.565-24.199c2.155-.646 4.365 3.072 6.682 6.899 2.156 3.665 4.42 7.384 6.683 7.384 2.426 0 4.851-3.665 7.168-7.276 2.426-3.773 4.797-7.438 7.115-6.737a46.403 46.403 0 0126.947 22.474c20.103-15.845 27.486-41.715 27.486-57.667 0-12.612-8.461-8.624-22.043-1.941l-.754.378c-12.45 6.198-29.05 14.39-47.266 14.39-18.216 0-34.762-8.192-47.266-14.39-14.012-6.953-22.797-11.318-22.797 1.563 0 16.438 7.869 43.439 29.48 59.122z" fill="#3A3B45"/>
            </svg>
        )
    },
    {
        name: "LeetCode", url: "https://leetcode.com/u/samay_powade/",
        customIcon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="transition-transform group-hover:scale-110">
                <path d="M13.435 15.54a6 6 0 1 1-1.435-9.54" />
                <path d="M12 13c-1.162 0-2.1-.938-2.1-2.1s.938-2.1 2.1-2.1c1.163 0 2.1.938 2.1 2.1s-.937 2.1-2.1 2.1" />
            </svg>
        )
    },
    { icon: "ri-instagram-line", name: "Instagram", url: "https://www.instagram.com/samay__.23/" },
];

const InfoCard = ({ icon, label, val, sub }) => (
    <div className="p-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md hover:bg-white/10 transition-all group">
        <div className="flex items-center gap-3 mb-2">
            <div className="w-9 h-9 bg-[#e87532]/20 rounded-xl flex items-center justify-center group-hover:bg-[#e87532] transition-colors shrink-0">
                <i className={`${icon} text-base text-[#e87532] group-hover:text-white`} />
            </div>
            <div className="min-w-0">
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

            {/* Main Dashboard shell */}
            <div className="relative z-10 p-1 border border-white/10 rounded-[32px] md:rounded-[40px] bg-gradient-to-br from-white/10 to-transparent backdrop-blur-3xl shadow-2xl transition-transform duration-700 hover:rotate-y-2 hover:rotate-x-2">
                <div className="p-4 md:p-6 bg-[#0a0a0a]/80 rounded-[28px] md:rounded-[38px] overflow-hidden">

                    {/* Header: System Status */}
                    <div className="flex items-center justify-between mb-4 md:mb-6">
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-[#e87532] rounded-full animate-pulse" />
                            <span className="text-[0.65rem] font-outfit font-bold tracking-[0.2em] text-[#e87532] uppercase">Core Engine Active</span>
                        </div>
                    </div>

                    {/* ── Desktop: 2×2 grid (unchanged) ── */}
                    <div className="hidden md:grid grid-cols-2 gap-4">
                        <InfoCard icon="ri-robot-line"  label="Intelligence" val="AI Engineering"          sub="Specializing in LLM Fine-tuning, RAG pipelines, and Vector Database integration for intelligent systems." />
                        <InfoCard icon="ri-server-line" label="Architecture" val="Backend & Infrastructure" sub="Building robust server-side logic with Python and FastAPI, ensuring high-performance API orchestration." />
                        <InfoCard icon="ri-team-line"   label="Systems"      val="Agentic Workflows"        sub="Designing multi-agent systems that automate complex business processes via voice and chat." />
                        <InfoCard icon="ri-cloud-line"  label="DevOps"       val="Full-Stack Deployment"    sub="Managing the entire lifecycle from Dockerization to Cloud deployment (AWS/Hugging Face) for scalable apps." />
                    </div>

                    {/* ── Mobile: vertical skill rows — no clipping ── */}
                    <div className="md:hidden flex flex-col gap-2.5">
                        {MOBILE_SKILLS.map((s) => (
                            <div key={s.label} className="flex items-center gap-3 p-3 bg-white/5 border border-white/10 rounded-xl">
                                <div className="w-8 h-8 bg-[#e87532]/20 rounded-lg flex items-center justify-center shrink-0">
                                    <i className={`${s.icon} text-sm text-[#e87532]`} />
                                </div>
                                <div className="min-w-0">
                                    <p className="text-[0.55rem] text-white/40 uppercase tracking-widest font-bold leading-none mb-0.5">{s.label}</p>
                                    <p className="text-[0.8rem] font-outfit font-black text-white leading-tight">{s.val}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Footer: Social links */}
                    <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-white/10 flex items-center justify-between">
                        <span className="text-[0.6rem] font-bold text-white/30 tracking-widest uppercase italic">Presence Hub</span>
                        <div className="flex gap-1.5 md:gap-2">
                            {SOCIALS.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:bg-[#e87532] hover:text-white hover:border-[#e87532] transition-all group"
                                    title={social.name}
                                >
                                    {social.customIcon ? social.customIcon : <i className={`${social.icon} text-base transition-transform group-hover:scale-110`} />}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
