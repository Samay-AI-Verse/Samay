import React from "react";
import bgImage from "../../assets/img/my images/SGGS.jpeg";
import LightingEffect from "../effects/LightingEffect";

export default function LandingHero() {
  return (
    <div
      className="landing-content absolute inset-0 z-10 overflow-hidden"
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

          {/* Single BG Image Overlay - Optimized for "Full Image" view */}
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

          {/* Giant brand title - Centered */}
          <div className="hero-text" style={{
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

          {/* Relocated Taglines - Bottom Right */}
          <div className="absolute bottom-[8%] right-[5%] z-10 text-right space-y-1 opacity-60">
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
