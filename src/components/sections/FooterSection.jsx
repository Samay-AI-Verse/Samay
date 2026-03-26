

const NAV_COLS = [
    {
        heading: "Expertise",
        links: [
            { name: "AI Engineer", href: "#features-section" },
            { name: "ML Engineering", href: "#features-section" },
            { name: "Backend Architecture", href: "#features-section" },
            { name: "Full Stack Systems", href: "#features-section" },
        ],
    },
    {
        heading: "Projects",
        links: [
            { name: "Sanjeevani AI", href: "https://shivanyarxai.netlify.app/" },
            { name: "Calling Assistant", href: "#innovation-section" },
            { name: "Trinetra Drone", href: "#innovation-section" },
            { name: "RAG Document Hub", href: "#innovation-section" },
        ],
    },
    {
        heading: "Connect",
        links: [
            { name: "GitHub", href: "https://github.com/Samay-AI-Verse" },
            { name: "LinkedIn", href: "https://www.linkedin.com/in/samay-p-103259269" },
            { name: "Hugging Face", href: "https://huggingface.co/Samay-AI-Verse" },
            { name: "LeetCode", href: "https://leetcode.com/u/Samay-AI-Verse/" },
            { name: "Instagram", href: "https://www.instagram.com/samay__.23/" },
        ],
    },
];

const TEXT = {
    fontFamily: "'Outfit', sans-serif",
    color: "#f4ede6",
};

export default function FooterSection() {
    return (
        <section id="footer-section" className="footer-section-anim" style={{
            background: "#0a0a0a",
            position: "relative",
            overflow: "hidden",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
        }}>



            <div className="grid grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_1.2fr] gap-10 px-6 py-12 md:px-[6vw] md:pt-[64px] md:pb-[48px]">

                {NAV_COLS.map(col => (
                    <div key={col.heading} className="footer-anim" style={{ position: "relative", zIndex: 10 }}>
                        <p style={{ ...TEXT, fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", margin: "0 0 18px", opacity: 0.5, color: "#e87532" }}>{col.heading}</p>
                        {col.links.map(link => (
                            <a key={link.name} href={link.href} target={link.href.startsWith('http') ? "_blank" : "_self"} style={{
                                ...TEXT, display: "block", fontSize: "0.85rem", fontWeight: 500,
                                textDecoration: "none", marginBottom: "10px", opacity: 0.75,
                                transition: "opacity 0.2s",
                            }}
                                onMouseEnter={e => e.currentTarget.style.opacity = 1}
                                onMouseLeave={e => e.currentTarget.style.opacity = 0.75}
                            >{link.name}</a>
                        ))}
                    </div>
                ))}

                <div className="footer-anim text-left lg:text-right" style={{ position: "relative", zIndex: 10 }}>
                    <p style={{ ...TEXT, fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", opacity: 0.5, margin: "0 0 12px", lineHeight: 1.6 }}>
                        READY TO COLLABORATE?<br />REACH OUT FOR AI INNOVATIONS:
                    </p>
                    <a href="mailto:samaypowade9@gmail.com" style={{
                        ...TEXT, fontSize: "clamp(0.9rem, 1.8vw, 1.4rem)", fontWeight: 700, textDecoration: "none",
                        display: "block", marginBottom: "28px", transition: "color 0.2s",
                    }}
                        onMouseEnter={e => e.currentTarget.style.color = "#e87532"}
                        onMouseLeave={e => e.currentTarget.style.color = "#f4ede6"}
                    >
                        samaypowade23@gmail.com
                    </a>

                    <a href="https://www.linkedin.com/in/samay-p-103259269/" target="_blank" style={{ ...TEXT, fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", textDecoration: "none", opacity: 0.55, transition: "color 0.2s" }}
                        onMouseEnter={e => e.currentTarget.style.color = "#e87532"}
                        onMouseLeave={e => e.currentTarget.style.color = "#f4ede6"}
                    >
                        LINKEDIN
                    </a>
                </div>
            </div>



            <div className="flex flex-col md:flex-row justify-between items-center gap-3 border-t border-[#e87532]/20 px-6 py-5 md:px-[6vw] relative z-10">
                <p style={{ ...TEXT, fontSize: "0.65rem", opacity: 0.45, margin: 0 }}>© 2026 Samay.AI Portfolio</p>
                <p style={{ ...TEXT, fontSize: "0.65rem", opacity: 0.45, margin: 0 }}>PRECISION & INNOVATION</p>
            </div>
        </section >
    );
}
