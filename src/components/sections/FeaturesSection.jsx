import React from "react";
import PortfolioDashboard from "./PortfolioDashboard";

/**
 * FeaturesSection — LAYER 2 (z-[60])
 */
export default function FeaturesSection() {
    return (
        <div
            id="features-section"
            className="features-inner absolute inset-0 z-[60] flex items-center justify-center overflow-hidden"
            style={{
                opacity: 0,
                transform: 'translateY(20px)',
                pointerEvents: 'none',
                background: 'linear-gradient(to bottom, #0a0a0a 0%, #1a1a1a 100%)',
            }}
        >
            {/* Soft glow orb */}
            <div style={{
                position: 'absolute', top: '50%', left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '60vw', height: '60vw',
                background: 'radial-gradient(ellipse at center, rgba(232,117,50,0.15) 0%, rgba(232,117,50,0.05) 45%, transparent 70%)',
                borderRadius: '50%', pointerEvents: 'none',
            }} />

            <div className="relative z-10 container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-16 px-10">

                {/* ── Left Copy ── */}
                <div className="text-left space-y-4">
                    <div style={{ margin: '0 0 0px' }}>
                        <span style={{
                            fontFamily: "'Outfit', sans-serif", fontWeight: 900,
                            fontSize: 'clamp(1.4rem, 2.5vw, 2.2rem)',
                            color: '#f4ede6', letterSpacing: '0.04em',
                        }}>Samay</span>
                        <sup style={{ fontSize: '0.5em', color: '#e87532', opacity: 0.7, marginLeft: '2px', verticalAlign: 'super' }}>™</sup>
                    </div>

                    <p style={{
                        color: '#e87532', fontSize: '1rem', fontWeight: 800,
                        letterSpacing: '0.15em', textTransform: 'uppercase',
                        margin: '10px 0', fontFamily: "'Outfit', sans-serif"
                    }}>
                        AI Engineer
                    </p>

                    <h2 style={{
                        fontFamily: "'Outfit', sans-serif", fontWeight: 900,
                        fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
                        color: '#f4ede6', margin: '0 0 20px 0', lineHeight: 1.1, letterSpacing: '-0.02em',
                    }}>
                        Building Intelligence.<br />
                        <span style={{ color: '#e87532' }}>Engineered for Scale.</span>
                    </h2>

                    <p style={{
                        color: '#f4ede6', opacity: 0.8, fontSize: '1.1rem', fontWeight: 400,
                        lineHeight: 1.6, fontFamily: "'Outfit', sans-serif", maxWidth: '500px', margin: 0,
                    }}>
                        I specialize in building smart systems with **LLMs** and **Computer Vision**. From data pipelines to live deployments, I turn complex AI research into real-world impact.
                    </p>

                    {/* Step pills */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '10px', paddingTop: '8px' }}>
                        {[
                            { label: 'Backend Architecture', icon: 'ri-server-line' },
                            { label: 'AI Integration', icon: 'ri-brain-line' },
                            { label: 'Cloud Deployment', icon: 'ri-cloud-line' },
                        ].map((step, idx, arr) => (
                            <React.Fragment key={step.label}>
                                <span style={{
                                    display: 'flex', alignItems: 'center', gap: '6px',
                                    padding: '8px 16px',
                                    background: 'rgba(232,117,50,0.1)',
                                    border: '1px solid rgba(232,117,50,0.2)',
                                    color: '#f4ede6', borderRadius: '999px',
                                    fontSize: '0.78rem', fontWeight: 600,
                                    backdropFilter: 'blur(8px)', letterSpacing: '0.03em',
                                }}>
                                    <i className={step.icon} style={{ fontSize: '0.9rem', color: '#e87532' }} />
                                    {step.label}
                                </span>
                                {idx < arr.length - 1 && (
                                    <i className="ri-arrow-right-line" style={{ color: '#e87532', opacity: 0.4, fontSize: '0.85rem' }} />
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>

                {/* ── Right: Creative Portfolio Stats ── */}
                <PortfolioDashboard />

            </div>
        </div>
    );
}
