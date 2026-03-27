import { useEffect, useState } from "react";

export default function Navbar({ onMenuClick, onBookDemo }) {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 80);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className="navbar fixed top-0 left-0 w-full py-4 px-6 md:py-7 md:px-10 flex justify-between items-center transition-all duration-500"
            style={{
                zIndex: 100,
                mixBlendMode: 'difference',
            }}
        >
            <style>{`
                :root {
                    --nav-color: #f4ede6;
                    --nav-highlight: #e87532;
                }
                .nav-link {
                    position: relative;
                    color: var(--nav-color);
                    font-size: 0.72rem;
                    font-weight: 700;
                    letter-spacing: 0.18em;
                    text-transform: uppercase;
                    text-decoration: none;
                    transition: all 0.3s ease;
                }
                .nav-link.logo-text {
                    font-size: 1rem;
                    letter-spacing: 0.05em;
                    color: var(--nav-highlight);
                    transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
                }
                .nav-link::after {
                    content: '';
                    position: absolute;
                    width: 0;
                    height: 1px;
                    bottom: -2px;
                    left: 0;
                    background-color: var(--nav-highlight);
                    transition: width 0.3s ease;
                }
                .nav-link:hover::after {
                    width: 100%;
                }
                .nav-link:hover {
                    color: var(--nav-highlight);
                }
            `}</style>
            <div className="flex items-center">
                <button
                    className="nav-link"
                    onClick={onMenuClick}
                    style={{
                        background: 'none', border: 'none', cursor: 'pointer',
                        display: 'flex', alignItems: 'center', gap: '6px', padding: 0,
                    }}
                >
                    MENU
                </button>
            </div>

            {/* Centered Logo on Scroll */}
            <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                style={{
                    opacity: scrolled ? 1 : 0,
                    transform: `translate(-50%, ${scrolled ? '-50%' : '0%'})`,
                    transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
            >
                <a
                    href="#"
                    className="nav-link logo-text font-black"
                    style={{
                        pointerEvents: scrolled ? 'auto' : 'none',
                        display: 'block',
                        color: 'var(--nav-highlight)',
                        fontSize: '1.2rem',
                    }}
                >
                    SAMAY
                </a>
            </div>

            <div className="hidden md:flex items-center gap-[32px]">
                <a
                    href="#footer-section"
                    className="nav-link"
                    onClick={(e) => {
                        e.preventDefault();
                        const target = document.querySelector("#footer-section");
                        if (target) target.scrollIntoView({ behavior: "smooth" });
                    }}
                >
                    CONTACT
                </a>
            </div>
        </div>
    );
}
