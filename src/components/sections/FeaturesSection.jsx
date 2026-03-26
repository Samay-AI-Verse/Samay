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
                <div className="text-left space-y-6">
                    <p style={{
                        color: '#e87532', fontSize: '0.7rem', fontWeight: 700,
                        letterSpacing: '0.18em', textTransform: 'uppercase',
                        margin: 0, fontFamily: "'Outfit', sans-serif", opacity: 0.9,
                    }}>AI & MACHINE LEARNING</p>

                    <div style={{ margin: '6px 0 2px' }}>
                        <span style={{
                            fontFamily: "'Outfit', sans-serif", fontWeight: 900,
                            fontSize: 'clamp(1rem, 2vw, 1.5rem)',
                            color: '#f4ede6', letterSpacing: '0.04em',
                        }}>Samay</span>
                        <sup style={{ fontSize: '0.5em', color: '#e87532', opacity: 0.7, marginLeft: '2px', verticalAlign: 'super' }}>™</sup>
                    </div>

                    <h2 style={{
                        fontFamily: "'Outfit', sans-serif", fontWeight: 900,
                        fontSize: 'clamp(2rem, 4vw, 3.6rem)',
                        color: '#f4ede6', margin: 0, lineHeight: 1.05, letterSpacing: '-0.02em',
                    }}>
                        Crafting Intelligence<br />
                        <span style={{ fontFamily: "Georgia, serif", fontStyle: 'italic', fontWeight: 700, color: '#e87532' }}>
                            From Data to Deployment
                        </span>
                    </h2>

                    <p style={{
                        color: '#f4ede6', opacity: 0.75, fontSize: '1rem', fontWeight: 400,
                        lineHeight: 1.7, fontFamily: "'Outfit', sans-serif", maxWidth: '460px', margin: 0,
                    }}>
                        Architecting scalable neural systems. From transformer-based LLM orchestration to high-throughput compute-vision inference. I build the technical backbone that powers autonomous intelligence.
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
