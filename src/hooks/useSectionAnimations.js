import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * useSectionAnimations
 * Scroll-triggered entrance animations for all new content sections.
 * Depends on showContent so it runs after intro finishes.
 */
export function useSectionAnimations(showContent) {
    useGSAP(() => {
        if (!showContent) return;

        const sections = [
            ".about-anim",
            ".wa-anim",
            ".sms-anim",
            ".dash-anim",
            ".innovation-anim",
            ".project-anim",
            ".cert-anim",
            ".crew-anim",
            ".footer-anim",
        ];

        sections.forEach((sel) => {
            gsap.fromTo(
                sel,
                { y: 60, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: sel,
                        start: "top 78%",
                        toggleActions: "play none none reverse",
                    },
                    y: 0,
                    opacity: 1,
                    duration: 0.85,
                    stagger: 0.12,
                    ease: "power3.out",
                }
            );
        });
        
        // Ensure ScrollTrigger recalculates after everything is added
        setTimeout(() => {
            ScrollTrigger.refresh();
        }, 500);

    }, [showContent]);
}
