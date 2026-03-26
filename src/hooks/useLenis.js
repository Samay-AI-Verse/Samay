import { useEffect } from "react";
import Lenis from "lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * useLenis
 * Initialises Lenis smooth scrolling once the intro is done.
 * Higher duration + lower wheelMultiplier = noticeably smoother, more cinematic scroll.
 * @param {boolean} showContent - true when SVG intro has finished
 */
export function useLenis(showContent) {
    useEffect(() => {
        if (!showContent) return;

        const lenis = new Lenis({
            duration: 1.1,          // Shorter, faster response
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
            wheelMultiplier: 1.4,         // Increased for snappier scrolling
            smoothTouch: false,
            touchMultiplier: 1.5,
        });

        // Sync ScrollTrigger with Lenis scroll position (scrollerProxy for accurate scrub)
        ScrollTrigger.scrollerProxy(document.body, {
            scrollTop(value) {
                if (arguments.length) lenis.scrollTo(value);
                return lenis.scroll;
            },
            getBoundingClientRect() {
                return { top: 0, left: 0, right: window.innerWidth, bottom: window.innerHeight, width: window.innerWidth, height: window.innerHeight };
            },
        });
        lenis.on("scroll", ScrollTrigger.update);

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        return () => lenis.destroy();
    }, [showContent]);
}
