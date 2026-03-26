import React from "react";

export default function MobileProjectCard({ img, title, cat, tags, desc, color = "#e87532", github, live }) {
    return (
        <div className="w-full max-w-[360px] h-[580px] rounded-[48px] bg-[#0a0a0a] border-[3px] border-white/10 p-4 shadow-2xl relative overflow-hidden group">
            {/* Inner "Screen" */}
            <div className="w-full h-full bg-[#111111] rounded-[36px] overflow-hidden flex flex-col border border-white/5 relative">
                
                {/* Visual Header */}
                <div className="h-2/5 w-full relative overflow-hidden">
                    <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111111] to-transparent opacity-60" />
                    
                    {/* Tiny Status Badges */}
                    <div className="absolute top-4 right-6 flex gap-2 opacity-40">
                        {title.includes("Calling") && <i className="ri-mic-line text-xs" />}
                        {title.includes("Drone") && <i className="ri-camera-lens-line text-xs" />}
                    </div>
                </div>

                {/* Content */}
                <div className="p-7 flex-1 flex flex-col">
                    <span className="text-[0.65rem] font-black uppercase tracking-[0.2em]" style={{ color }}>{cat}</span>
                    <h3 className="text-xl font-outfit font-black mt-2 mb-4 text-[#f4ede6]">{title}</h3>
                    <p className="text-xs opacity-50 leading-relaxed mb-6 line-clamp-3">{desc}</p>
                    
                    <div className="flex flex-wrap gap-2 text-[0.6rem] font-bold mb-6">
                        {tags.map(tag => (
                            <span key={tag} className="px-3 py-1 bg-white/5 rounded-full border border-white/10 opacity-60">
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Action Links */}
                    <div className="mt-auto grid grid-cols-2 gap-3 pt-4 border-t border-white/5">
                        <a href={github} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-1.5 py-3 rounded-2xl bg-white/5 border border-white/10 text-[0.62rem] font-black tracking-[0.05em] uppercase hover:bg-white/10 transition-all">
                            <i className="ri-github-fill text-base" />
                            GitHub
                        </a>
                        <a href={live} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-1.5 py-3 rounded-2xl bg-white/10 text-[0.62rem] font-black tracking-[0.05em] uppercase hover:bg-[#e87532] transition-all" style={{ border: `1px solid ${color}` }}>
                            <i className="ri-information-line text-base" />
                            Get More Info
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
