import { portfolioData } from "../../constants/portfolioData";

/**
 * PhoneMockup
 */
export default function PhoneMockup() {
    return (
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '540px' }}>
            <div style={{ position: 'relative', width: '260px', height: '500px' }}>

                {/* ── Phone Frame ── */}
                <div style={{
                    position: 'relative', width: '100%', height: '100%',
                    background: 'rgba(10,10,10,0.85)',
                    backdropFilter: 'blur(24px)',
                    border: '2px solid rgba(232,117,50,0.3)',
                    borderRadius: '44px',
                    boxShadow: '0 30px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(232,117,50,0.2)',
                    display: 'flex', flexDirection: 'column',
                    overflow: 'hidden', zIndex: 10,
                }}>
                    {/* Notch */}
                    <div style={{
                        width: '90px', height: '22px',
                        background: 'rgba(0,0,0,0.95)',
                        borderRadius: '0 0 18px 18px',
                        margin: '0 auto',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
                    }}>
                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'rgba(232,117,50,0.4)' }} />
                        <div style={{ width: '36px', height: '5px', borderRadius: '4px', background: 'rgba(232,117,50,0.2)' }} />
                    </div>

                    {/* Status bar */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '4px 18px 0' }}>
                        <span style={{ color: '#f4ede6', fontSize: '0.62rem', fontWeight: 700, opacity: 0.7 }}>10:17</span>
                        <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
                            <i className="ri-wifi-line" style={{ color: '#e87532', fontSize: '0.75rem' }} />
                            <i className="ri-cpu-line" style={{ color: '#e87532', fontSize: '0.75rem' }} />
                        </div>
                    </div>

                    {/* App header */}
                    <div style={{
                        display: 'flex', alignItems: 'center', gap: '10px',
                        padding: '10px 16px 8px',
                        borderBottom: '1px solid rgba(232,117,50,0.15)',
                    }}>
                        <div style={{
                            width: '34px', height: '34px', borderRadius: '50%',
                            background: 'linear-gradient(135deg, #e87532, #f5a623)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            boxShadow: '0 3px 10px rgba(232,117,50,0.5)',
                        }}>
                            <i className="ri-brain-fill" style={{ color: '#fff', fontSize: '1rem' }} />
                        </div>
                        <div>
                            <div style={{ color: '#f4ede6', fontWeight: 700, fontSize: '0.78rem', fontFamily: "'Outfit', sans-serif" }}>Samay.AI</div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#e87532' }} />
                                <span style={{ color: '#e87532', fontSize: '0.58rem', fontWeight: 600 }}>Systems Online</span>
                            </div>
                        </div>
                    </div>

                    {/* Skill / Project notification cards */}
                    <div style={{ flex: 1, overflowY: 'hidden', padding: '10px 12px', display: 'flex', flexDirection: 'column', gap: '9px' }}>

                        {/* Gen AI Card */}
                        <div style={{ background: 'rgba(232,117,50,0.1)', border: '1px solid rgba(232,117,50,0.25)', borderRadius: '16px', padding: '11px 14px', display: 'flex', alignItems: 'center', gap: '11px' }}>
                            <div style={{ width: '38px', height: '38px', borderRadius: '12px', flexShrink: 0, background: 'linear-gradient(135deg, #e87532, #f5a623)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <i className="ri-magic-line" style={{ color: '#fff', fontSize: '1.2rem' }} />
                            </div>
                            <div style={{ flex: 1, minWidth: 0 }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <span style={{ color: '#e87532', fontSize: '0.72rem', fontWeight: 700, fontFamily: "'Outfit', sans-serif" }}>Generative AI</span>
                                    <span style={{ color: '#f4ede6', opacity: 0.4, fontSize: '0.58rem' }}>Core</span>
                                </div>
                                <p style={{ color: '#f4ede6', opacity: 0.8, fontSize: '0.68rem', margin: '2px 0 0', lineHeight: 1.4, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                    LLMs, RAG & LangChain
                                </p>
                            </div>
                        </div>

                        {/* Computer Vision Card */}
                        <div style={{ background: 'rgba(6,182,212,0.1)', border: '1px solid rgba(6,182,212,0.25)', borderRadius: '16px', padding: '11px 14px', display: 'flex', alignItems: 'center', gap: '11px' }}>
                            <div style={{ width: '38px', height: '38px', borderRadius: '12px', flexShrink: 0, background: 'linear-gradient(135deg, #06b6d4, #0891b2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <i className="ri-eye-line" style={{ color: '#fff', fontSize: '1.2rem' }} />
                            </div>
                            <div style={{ flex: 1, minWidth: 0 }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <span style={{ color: '#06b6d4', fontSize: '0.72rem', fontWeight: 700, fontFamily: "'Outfit', sans-serif" }}>Vision</span>
                                    <span style={{ color: '#f4ede6', opacity: 0.4, fontSize: '0.58rem' }}>Active</span>
                                </div>
                                <p style={{ color: '#f4ede6', opacity: 0.8, fontSize: '0.68rem', margin: '2px 0 0', lineHeight: 1.4, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                    YOLO & OpenCV Detection
                                </p>
                            </div>
                        </div>

                        {/* MLOps Card */}
                        <div style={{ background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.25)', borderRadius: '16px', padding: '11px 14px', display: 'flex', alignItems: 'center', gap: '11px' }}>
                            <div style={{ width: '38px', height: '38px', borderRadius: '12px', flexShrink: 0, background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <i className="ri-terminal-box-line" style={{ color: '#fff', fontSize: '1.2rem' }} />
                            </div>
                            <div style={{ flex: 1, minWidth: 0 }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <span style={{ color: '#8b5cf6', fontSize: '0.72rem', fontWeight: 700, fontFamily: "'Outfit', sans-serif" }}>MLOps</span>
                                    <span style={{ background: 'rgba(232,117,50,0.2)', color: '#e87532', fontSize: '0.56rem', fontWeight: 700, padding: '2px 7px', borderRadius: '99px' }}>DOCKER</span>
                                </div>
                                <p style={{ color: '#f4ede6', opacity: 0.8, fontSize: '0.68rem', margin: '2px 0 0', lineHeight: 1.4 }}>
                                    Deployment Pipelines Ready
                                </p>
                            </div>
                        </div>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'center', paddingBottom: '12px' }}>
                        <div style={{ width: '100px', height: '4px', borderRadius: '3px', background: 'rgba(232,117,50,0.4)' }} />
                    </div>
                </div>

                {/* ── Floating badges ── */}
                <div className="hidden sm:flex" style={{
                    position: 'absolute', right: '-80px', top: '50px', zIndex: 20,
                    height: '50px', padding: '0 20px 0 14px', borderRadius: '18px',
                    background: 'linear-gradient(135deg, #e87532, #f5a623)',
                    alignItems: 'center', justifyContent: 'center', gap: '8px',
                    boxShadow: '0 15px 35px rgba(232,117,50,0.4)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    transform: 'rotate(4deg)'
                }}>
                    <i className="ri-brain-line" style={{ color: '#fff', fontSize: '1.4rem' }} />
                    <span style={{ color: '#fff', fontWeight: 700, fontFamily: "'Outfit', sans-serif", fontSize: '0.85rem' }}>AI Engineered</span>
                </div>

                <div className="hidden sm:flex" style={{
                    position: 'absolute', left: '-100px', top: '160px', zIndex: 20,
                    height: '50px', padding: '0 20px 0 14px', borderRadius: '20px',
                    background: 'linear-gradient(135deg, #06b6d4, #0891b2)',
                    alignItems: 'center', justifyContent: 'center', gap: '8px',
                    boxShadow: '0 15px 35px rgba(6,182,212,0.4)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    transform: 'rotate(-6deg)'
                }}>
                    <i className="ri-flask-line" style={{ color: '#fff', fontSize: '1.4rem' }} />
                    <span style={{ color: '#fff', fontWeight: 700, fontFamily: "'Outfit', sans-serif", fontSize: '0.85rem' }}>Data Driven</span>
                </div>
            </div>
        </div>
    );
}
