import { useEffect } from "react";

/**
 * useMobileIntersect
 * On mobile (< 768px) only: observes all .mob-anim elements and
 * adds .mob-visible when they enter the viewport, triggering CSS transitions.
 * On desktop this hook is completely inert — zero impact.
 *
 * @param {boolean} ready - wait until loading overlay is gone before observing
 */
export function useMobileIntersect(ready) {
  useEffect(() => {
    if (!ready) return;
    if (window.innerWidth >= 768) return; // desktop: do nothing

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("mob-visible");
            // Once revealed, stop watching — keeps things snappy
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    // Observe all existing + future .mob-anim elements
    const attachObservers = () => {
      document.querySelectorAll(".mob-anim").forEach((el) => {
        observer.observe(el);
      });
    };

    attachObservers();

    // Re-attach after a tick in case some render after mount
    const timer = setTimeout(attachObservers, 400);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, [ready]);
}
