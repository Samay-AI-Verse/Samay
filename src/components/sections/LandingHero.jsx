import bgImage from "../../assets/img/person/actual image.png"; // Using Samay's image as subtle bg
import HoverGrid from "../effects/HoverGrid";

/**
 * LandingHero — LAYER 1 (z-10)
 */
export default function LandingHero() {
  return (
    <div
      className="landing-content absolute inset-0 z-10 overflow-hidden"
      style={{ background: 'linear-gradient(to bottom, #0a0a0a 0%, #1a1a1a 100%)' }}
    >
      <div className="main w-full h-full rotate-[-10deg] scale-[1.7] origin-center">
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

          {/* BG image overlay - Improved with better contrast and opacity */}
          <div style={{
            position: 'absolute', inset: 0, zIndex: 2,
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover', backgroundPosition: 'center',
            opacity: 0.2, mixBlendMode: 'screen',
            filter: 'grayscale(0.5) contrast(1.1)',
          }} />

          {/* Giant brand title - Centered */}
          <div className="hero-text" style={{
            position: 'absolute',
            top: '40%',
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

      <HoverGrid />
    </div>
  );
}
