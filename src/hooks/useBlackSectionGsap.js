import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * useBlackSectionGsap
 * Handles the scroll-triggered pinning and bottom-to-top AI node fill effect 
 * for the BlackSection (AI Analytics).
 */
export function useBlackSectionGsap(showContent) {
    useGSAP(() => {
        if (!showContent) return;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#black-ai-section",
                start: "top top",
                end: "+=120%",
                scrub: 1,
                pin: true,
                anticipatePin: 1,
            }
        });

        // Set initial state of the fill to 0 height
        gsap.set("#ai-fill-wrapper", { height: "0%" });

        // Animate up to 100% height to reveal the fully filled graphic
        tl.to("#ai-fill-wrapper", { height: "100%", ease: "none" });

    }, [showContent]);
}
