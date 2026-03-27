import React from "react";
import bgImage from "../../assets/img/my images/SGGS.jpeg";
import LightingEffect from "../effects/LightingEffect";

export default function LandingHero() {
  return (
    <div
      id="logo-scene"
      className="landing-content relative md:absolute inset-0 z-10 w-full h-screen overflow-hidden"
      style={{ background: 'linear-gradient(to bottom, #0a0a0a 0%, #1a1a1a 100%)' }}
    >
      <div className="main w-full h-full origin-center">
        <div
          className="landing w-full h-full relative"
          style={{ background: 'linear-gradient(to bottom, #0a0a0a 0%, #1a1a1a 100%)' }}
        >
          {/* Soft glow orb */}
          <div style={{
            position: 'absolute', top: '55%', left: '52%',
            transform: 'translate(-50%, -50%)',
            width: '60vw', height: '60vw',
            background: 'radial-gradient(ellipse at center, rgba(232,117,50,0.08) 0%, transparent 70%)',
            borderRadius: '50%', pointerEvents: 'none', zIndex: 1,
          }} />

          {/* Secondary glow */}
          <div style={{
            position: 'absolute', top: '65%', left: '62%',
            transform: 'translate(-50%, -50%)',
            width: '40vw', height: '40vw',
            background: 'radial-gradient(ellipse at center, rgba(232,117,50,0.05) 0%, transparent 65%)',
            borderRadius: '50%', pointerEvents: 'none', zIndex: 1,
          }} />

          {/* Single BG Image Overlay */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              zIndex: 2,
              backgroundImage: `url(${bgImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center 60%',
              opacity: 0.5,
              mixBlendMode: 'screen',
              filter: 'grayscale(0.15) contrast(1.2)',
              pointerEvents: 'none',
            }}
          />

          {/* Giant brand title - Centered (desktop unchanged) */}
          <div className="hero-text hidden md:block" style={{
            position: 'absolute',
            top: '42%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 10,
            textAlign: 'center',
            width: '100%',
            opacity: 0.97,
          }}>
            <h1 style={{
              fontFamily: "'Outfit', sans-serif", fontWeight: 900,
              fontSize: 'clamp(4rem, 20vw, 15rem)',
              color: '#f4ede6', margin: 0, lineHeight: 0.9, letterSpacing: '-0.03em',
              filter: 'drop-shadow(0 10px 40px rgba(0,0,0,0.5))'
            }}>
              Samay
            </h1>
            <p style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(0.8rem, 2.5vw, 1.8rem)',
              color: '#e87532',
              textTransform: 'uppercase',
              letterSpacing: '0.4em',
              marginTop: '0.5rem',
              opacity: 0.8,
              filter: 'drop-shadow(0 4px 10px rgba(0,0,0,0.3))'
            }}>
              AI Engineer
            </p>
          </div>

          {/* ── MOBILE HERO LAYOUT ── */}
          <div className="md:hidden flex flex-col items-center justify-center h-full relative z-10 px-6 text-center">
            {/* Status pill */}
            <div className="mob-anim mob-scale flex items-center gap-2 px-4 py-2 rounded-full border border-[#e87532]/30 bg-[#e87532]/10 backdrop-blur-sm mb-8">
              <span className="mob-pulse-dot w-1.5 h-1.5 rounded-full bg-[#e87532] block" />
              <span style={{ color: '#e87532', fontSize: '0.6rem', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                AI Engineer · Open To Work
              </span>
            </div>

            {/* Big name */}
            <h1 className="mob-anim" style={{
              fontFamily: "'Outfit', sans-serif", fontWeight: 900,
              fontSize: 'clamp(4.5rem, 22vw, 8rem)',
              color: '#f4ede6', margin: 0, lineHeight: 0.88, letterSpacing: '-0.04em',
              filter: 'drop-shadow(0 8px 32px rgba(0,0,0,0.6))'
            }}>
              Samay
            </h1>

            {/* Subtitle */}
            <p className="mob-anim" style={{
              fontFamily: "'Outfit', sans-serif", fontWeight: 700,
              fontSize: '0.75rem',
              color: '#e87532',
              textTransform: 'uppercase',
              letterSpacing: '0.35em',
              marginTop: '0.75rem',
              opacity: 0.85,
            }}>
              AI Engineer
            </p>

            {/* Tagline */}
            <p className="mob-anim mt-6" style={{
              color: '#f4ede6', opacity: 0.55, fontSize: '0.85rem',
              lineHeight: 1.6, fontFamily: "'Outfit', sans-serif",
              maxWidth: '280px',
            }}>
              Crafting intelligent systems — from LLMs to production pipelines.
            </p>

            {/* Skill pills */}
            <div className="mob-anim mob-stagger flex flex-wrap justify-center gap-2 mt-6">
              {['LLM Pipelines', 'RAG Systems', 'FastAPI', 'Agentic AI'].map(tag => (
                <span key={tag} style={{
                  fontSize: '0.65rem', fontWeight: 700,
                  padding: '5px 12px',
                  background: 'rgba(232,117,50,0.08)',
                  border: '1px solid rgba(232,117,50,0.2)',
                  borderRadius: '999px', color: '#f4ede6', letterSpacing: '0.04em',
                }}>{tag}</span>
              ))}
            </div>
          </div>

          {/* Relocated Taglines - Bottom Right (desktop only) */}
          <div className="hidden md:block absolute bottom-[8%] right-[5%] z-10 text-right space-y-1 opacity-60">
            <p style={{
              color: '#e87532', fontSize: '0.65rem', fontWeight: 700,
              letterSpacing: '0.15em', textTransform: 'uppercase', margin: 0
            }}>
              Precision in Data. Innovation in AI.
            </p>
            <p style={{
              color: '#f4ede6', fontSize: '0.8rem', fontWeight: 500,
              margin: 0, opacity: 0.8
            }}>
              Crafting intelligent solutions — for a smarter future.
            </p>
          </div>

          {/* Scroll indicator - Bottom Left */}
          <div className="absolute bottom-[8%] left-[5%] z-10 flex items-center gap-3">
            <i className="ri-arrow-down-line text-[#e87532] animate-bounce" />
            <span style={{ color: '#f4ede6', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.24em', textTransform: 'uppercase', opacity: 0.5 }}>Scroll to Explore</span>
          </div>

        </div>
      </div>

      <LightingEffect />
    </div>
  );
}
