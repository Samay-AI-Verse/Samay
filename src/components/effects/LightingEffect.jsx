import React, { useEffect, useRef, useState } from "react";

/**
 * LightingEffect — v2: Neural Sensor
 * ────────────────────────────────
 * A high-fidelity cursor tracking system with:
 * - Ambient spotlight glow
 * - Precision tech-rings (rotating)
 * - Dynamic cursor coordinates
 */
export default function LightingEffect() {
    const sensorRef = useRef(null);
    const [coords, setCoords] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            const el = sensorRef.current;
            if (el) {
                const rect = el.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                setCoords({ x: Math.round(x), y: Math.round(y) });
                
                // Update Spotlight Position
                el.style.setProperty('--x', `${x}px`);
                el.style.setProperty('--y', `${y}px`);
            }
        };

        const parent = sensorRef.current?.parentElement;
        if (parent) {
            parent.addEventListener("mousemove", handleMouseMove);
            return () => parent.removeEventListener("mousemove", handleMouseMove);
        }
    }, []);

    return (
        <div
            ref={sensorRef}
            className="absolute inset-0 pointer-events-none z-[15] overflow-hidden"
            style={{
                background: `radial-gradient(700px circle at var(--x, 50%) var(--y, 50%), rgba(232, 117, 50, 0.04), transparent 75%)`,
            }}
        >
            {/* Visual Cursor Tracker */}
            <div 
                className="absolute transition-transform duration-75 ease-out flex items-center justify-center p-8"
                style={{
                    left: 'var(--x, -100px)',
                    top: 'var(--y, -100px)',
                    transform: 'translate(-50%, -50%)',
                }}
            >
                {/* Outer Ring */}
                <div className="absolute w-24 h-24 rounded-full border border-[#e87532]/20 animate-[spin_10s_linear_infinite]" />
                
                {/* Inner Pulsing Dot */}
                <div className="w-1.5 h-1.5 bg-[#e87532] rounded-full shadow-[0_0_15px_#e87532] animate-pulse" />
                
                {/* Tech Crosshair */}
                <div className="absolute w-12 h-[1px] bg-[#e87532]/40" />
                <div className="absolute h-12 w-[1px] bg-[#e87532]/40" />

                {/* Coordinate Readout */}
                <div className="absolute top-10 left-10 flex flex-col items-start opacity-40">
                    <span className="text-[0.45rem] font-black font-outfit text-[#e87532] tracking-tighter uppercase whitespace-nowrap">
                        NS-ACT: {coords.x} / {coords.y}
                    </span>
                    <span className="text-[0.4rem] font-bold text-white/50 tracking-widest leading-none mt-1">SENS_INIT_TRUE</span>
                </div>
            </div>

            <style>{`
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
            `}</style>
        </div>
    );
}
