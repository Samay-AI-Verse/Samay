import { useEffect, useState } from "react";
import gsap from "gsap";

export default function ScrollProgress() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const updateProgress = () => {
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            if (scrollHeight > 0) {
                const scrollPercentage = (window.scrollY / scrollHeight) * 100;
                setProgress(scrollPercentage);
            }
        };

        window.addEventListener("scroll", updateProgress);
        return () => window.removeEventListener("scroll", updateProgress);
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-[3px] z-[2000] pointer-events-none">
            <div 
                className="h-full bg-[#e87532] transition-all duration-100 ease-out"
                style={{ width: `${progress}%`, boxShadow: '0 0 10px #e87532' }}
            />
        </div>
    );
}
