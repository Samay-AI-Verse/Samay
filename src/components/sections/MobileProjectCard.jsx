import React from "react";

export default function MobileProjectCard({ img, title, cat, tags, desc, color = "#e87532" }) {
    return (
        <div className="w-full max-w-[360px] h-[540px] rounded-[48px] bg-[#0a0a0a] border-[3px] border-white/10 p-4 shadow-2xl relative overflow-hidden group">
            {/* Inner "Screen" */}
            <div className="w-full h-full bg-[#111111] rounded-[36px] overflow-hidden flex flex-col border border-white/5">
                {/* Visual Header */}
                <div className="h-2/5 w-full relative overflow-hidden">
                    <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111111] to-transparent opacity-60" />
                </div>

                {/* Content */}
                <div className="p-7 flex-1 flex flex-col">
                    <span className="text-[0.65rem] font-black uppercase tracking-[0.2em]" style={{ color }}>{cat}</span>
                    <h3 className="text-xl font-outfit font-black mt-2 mb-4 text-[#f4ede6]">{title}</h3>
                    <p className="text-xs opacity-50 leading-relaxed mb-6">{desc}</p>
                    
                    <div className="mt-auto flex flex-wrap gap-2 text-[0.6rem] font-bold">
                        {tags.map(tag => (
                            <span key={tag} className="px-3 py-1 bg-white/5 rounded-full border border-white/10 opacity-60">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Notch */}
            <div className="absolute top-[22px] left-1/2 -translate-x-1/2 w-24 h-6 bg-[#0a0a0a] rounded-b-xl z-10 flex items-center justify-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
                <div className="w-8 h-1 rounded-full bg-white/5" />
            </div>
        </div>
    );
}
