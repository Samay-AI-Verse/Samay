import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ROWS, COLS } from "../constants/gridConfig";

/**
 * useFooterCurtainGsap
 * Scroll-driven GSAP animations for the footer:
 *  • Curtain closes over the delivery section.
 *  • Curtain opens to reveal the footer.
 *
 * @param {boolean} showContent - true when SVG intro has finished
 */
export function useFooterCurtainGsap(showContent) {
    useGSAP(() => {
        if (!showContent) return;

        // ── CURTAIN WIPE ──────────────────────────────────────────────────────
        // Each cube starts rolled UP (scaleY 0 from top)
        gsap.set(".footer-grid-cube", {
            scaleY: 0,
            opacity: 1,
            transformOrigin: "top center",
        });

        const cubeTl = gsap.timeline({
            scrollTrigger: {
                trigger: ".footer-wipe-container",
                start: "bottom bottom", // ONLY pins when the scrolling reaches the VERY BOTTOM of the delivery section
                end: "+=350%",
                scrub: 0.8,
                pin: true,
                anticipatePin: 1,
                invalidateOnRefresh: true,
            },
        });

        // Phase 1 — CURTAIN CLOSES: right→left within each row, bottom rows first
        cubeTl.to(".footer-grid-cube", {
            scaleY: 1,
            duration: 1.4,
            stagger: (i) => {
                const reversedCol = (COLS - 1) - i;
                return reversedCol * 0.15;
            },
            // Orange-tinted dark color or deep orange? 
            // Let's go with a semi-transparent orange over dark for the wipe
            backgroundColor: "#e87532",
            ease: "power3.inOut",
        })

            // Phase 2 — Delivery fades out behind closed curtain
            .to("#delivery-section", {
                opacity: 0,
                filter: "blur(10px)",
                duration: 0.5,
                ease: "power2.in",
            }, "-=0.5")

            // Phase 3a — footer fades in behind closed curtain (opacity 1)
            .to(".footer-inner", {
                opacity: 1,
                pointerEvents: "auto",
                duration: 0.1,
            }, "open1")

            // Phase 3b — CURTAIN OPENS
            .to(".footer-grid-cube", {
                backgroundColor: "#0a0a0a", // transitions to dark
                duration: 0.3,
                ease: "none"
            }, "open1")

            .to(".footer-grid-cube", {
                scaleY: 0,
                transformOrigin: "bottom center", // open upwards
                duration: 1.4,
                stagger: (i) => {
                    return i * 0.15;
                },
                ease: "power3.inOut",
            }, "open1+=0.2");

    }, [showContent]);
}
