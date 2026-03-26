import { useEffect } from 'react';
import gsap from 'gsap';

/**
 * LoadingOverlay
 *
 * Dark-themed full-screen overlay with transparent cut-outs:
 *   • 6-petal logo mark above the text
 *   • "SAMAY.AI" lettering
 *
 * GSAP timeline (self-contained):
 *   0.0s  Mask group scale 0 → 1  (logo + text appear as transparent windows)
 *   0.8s  Gentle counter-rotation settle
 *   1.4s  Slow 10° rotation  +
 *   1.4s  Scale explodes to 10×  →  overlay becomes fully transparent
 *   3.8s  Overlay DOM node removed, onComplete() called
 */
export default function LoadingOverlay({ onComplete }) {
    useEffect(() => {
        const tl = gsap.timeline();

        // 1 — Stroke reveals
        tl.fromTo('.loading-text-stroke', 
            { strokeDashoffset: 1000, strokeDasharray: 1000 },
            { strokeDashoffset: 0, duration: 2, ease: 'power2.inOut' }
        );

        // 2 — Fill appears & Scaler starts
        tl.to('.loading-text-stroke', { fill: 'black', duration: 0.8 }, '-=0.5');

        // 3 — Scale explosion
        tl.to('.vi-mask-group', {
            scale: 25,
            duration: 2.2,
            ease: 'expo.inOut',
            transformOrigin: '50% 50%',
            opacity: 0,
            onUpdate: function () {
                if (this.progress() >= 0.9) {
                    const el = document.querySelector('.svg-overlay');
                    if (el) el.remove();
                    onComplete?.();
                    this.kill();
                }
            },
        });
    }, []); 

    return (
        <div
            className="svg-overlay"
            style={{
                position: 'fixed', top: 0, left: 0,
                width: '100%', height: '100vh',
                zIndex: 200, overflow: 'hidden',
                background: '#0a0a0a'
            }}
        >
            <svg
                viewBox="0 0 800 600"
                preserveAspectRatio="xMidYMid slice"
                style={{ width: '100%', height: '100%', display: 'block' }}
            >
                <defs>
                    <mask id="rxMask">
                        <rect width="100%" height="100%" fill="white" />
                        <g className="vi-mask-group">
                            <text
                                x="50%" y="52%"
                                fontSize="120"
                                textAnchor="middle"
                                dominantBaseline="middle"
                                fontFamily="'Outfit', sans-serif"
                                fontWeight="900"
                                letterSpacing="15"
                                fill="none"
                                stroke="black"
                                strokeWidth="2"
                                className="loading-text-stroke"
                            >
                                SAMAY
                            </text>
                        </g>
                    </mask>
                </defs>

                <rect width="100%" height="100%" fill="#f0ede6" mask="url(#rxMask)" />
            </svg>
        </div>
    );
}
