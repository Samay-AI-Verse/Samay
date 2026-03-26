import React from "react";

const projectBoxStyle = {
    width: "380px",
    height: "550px",
    border: "2px solid rgba(232,117,50,0.3)",
    borderRadius: "24px",
    background: "rgba(10,10,10,0.85)",
    backdropFilter: "blur(20px)",
    position: "relative",
    overflow: "hidden",
    boxShadow: "0 40px 80px rgba(0,0,0,0.5)",
    flexShrink: 0,
    display: "flex",
    flexDirection: "column"
};

export default function DeliverySection() {
    return (
        <section id="delivery-section" style={{
            minHeight: "100vh",
            background: "linear-gradient(180deg, #0a0a0a 0%, #1a1a1a 100%)",
            padding: "100px 6vw 120px",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            overflow: "hidden"
        }}>
            {/* Header */}
            <div className="delivery-anim" style={{ textAlign: "center", marginBottom: "60px", maxWidth: "800px" }}>
                <p style={{ color: "#e87532", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.24em", textTransform: "uppercase", fontFamily: "'Outfit', sans-serif", margin: "0 0 16px" }}>
                    Project Showcase
                </p>
                <h2 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 900, fontSize: "clamp(2rem, 5vw, 4rem)", color: "#f4ede6", margin: "0 0 24px", lineHeight: 1.05 }}>
                    Innovation & <span style={{ fontFamily: "Georgia, serif", fontStyle: "italic", fontWeight: 400, color: "#e87532", display: "inline-block" }}>Impact.</span>
                </h2>
                <p style={{ color: "#f4ede6", opacity: 0.65, fontSize: "1.05rem", lineHeight: 1.6, fontFamily: "'Outfit', sans-serif", margin: "0 auto" }}>
                    Explore a curated selection of my work in AI, autonomous systems, and scalable software architecture — built to bridge the gap between concept and reality.
                </p>
            </div>

            {/* Projects Container */}
            <div className="delivery-anim" style={{ display: "flex", gap: "4vw", flexWrap: "wrap", justifyContent: "center", width: "100%", alignItems: "center" }}>

                {/* ── Sanjeevani ── */}
                <div style={{ ...projectBoxStyle, transform: "rotate(-1deg) translateY(-10px)", transition: "transform 0.4s ease" }}
                    onMouseEnter={e => e.currentTarget.style.transform = "rotate(0deg) translateY(-20px)"}
                    onMouseLeave={e => e.currentTarget.style.transform = "rotate(-1deg) translateY(-10px)"}>

                    <div style={{ height: "200px", background: "linear-gradient(135deg, #e8753233, #e8753266)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <i className="ri-hospital-line" style={{ fontSize: "5rem", color: "#e87532" }} />
                    </div>

                    <div style={{ padding: "30px", flex: 1, display: "flex", flexDirection: "column" }}>
                        <h3 style={{ color: "#f4ede6", fontSize: "1.5rem", fontWeight: 800, fontFamily: "'Outfit', sans-serif", margin: "0 0 8px" }}>Sanjeevani</h3>
                        <p style={{ color: "#e87532", fontSize: "0.8rem", fontWeight: 700, margin: "0 0 20px" }}>Healthcare AI Ecosystem</p>

                        <p style={{ color: "#f4ede6", opacity: 0.7, fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "25px" }}>
                            A multi-tenant healthcare delivery dashboard optimizing pharmaceutical supply chains with real-time safety validation and merchant analytics.
                        </p>

                        <div style={{ marginTop: "auto", display: "flex", gap: "10px" }}>
                            <span style={{ padding: "6px 12px", background: "rgba(232,117,50,0.1)", border: "1px solid rgba(232,117,50,0.2)", borderRadius: "99px", fontSize: "0.7rem", color: "#f4ede6" }}>React</span>
                            <span style={{ padding: "6px 12px", background: "rgba(232,117,50,0.1)", border: "1px solid rgba(232,117,50,0.2)", borderRadius: "99px", fontSize: "0.7rem", color: "#f4ede6" }}>Safety AI</span>
                        </div>
                    </div>
                </div>

                {/* ── Calling Assistant ── */}
                <div style={{ ...projectBoxStyle, transform: "rotate(1deg) translateY(10px)", transition: "transform 0.4s ease" }}
                    onMouseEnter={e => e.currentTarget.style.transform = "rotate(0deg) translateY(0px)"}
                    onMouseLeave={e => e.currentTarget.style.transform = "rotate(1deg) translateY(10px)"}>

                    <div style={{ height: "200px", background: "linear-gradient(135deg, #00c9ff33, #92fe9d33)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <i className="ri-mic-line" style={{ fontSize: "5rem", color: "#00c9ff" }} />
                    </div>

                    <div style={{ padding: "30px", flex: 1, display: "flex", flexDirection: "column" }}>
                        <h3 style={{ color: "#f4ede6", fontSize: "1.5rem", fontWeight: 800, fontFamily: "'Outfit', sans-serif", margin: "0 0 8px" }}>Calling Assistant</h3>
                        <p style={{ color: "#00c9ff", fontSize: "0.8rem", fontWeight: 700, margin: "0 0 20px" }}>Voice AI & Automation</p>

                        <p style={{ color: "#f4ede6", opacity: 0.7, fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "25px" }}>
                            AI-powered conversational agent for HR automation, automating candidate screening, interview scheduling, and calling workflows.
                        </p>

                        <div style={{ marginTop: "auto", display: "flex", gap: "10px" }}>
                            <span style={{ padding: "6px 12px", background: "rgba(0,201,255,0.1)", border: "1px solid rgba(0,201,255,0.2)", borderRadius: "99px", fontSize: "0.7rem", color: "#f4ede6" }}>Vapi AI</span>
                            <span style={{ padding: "6px 12px", background: "rgba(0,201,255,0.1)", border: "1px solid rgba(0,201,255,0.2)", borderRadius: "99px", fontSize: "0.7rem", color: "#f4ede6" }}>NLP</span>
                        </div>
                    </div>
                </div>

                {/* ── Sarathi Astra ── */}
                <div style={{ ...projectBoxStyle, transform: "rotate(-1deg) translateY(20px)", transition: "transform 0.4s ease" }}
                    onMouseEnter={e => e.currentTarget.style.transform = "rotate(0deg) translateY(0px)"}
                    onMouseLeave={e => e.currentTarget.style.transform = "rotate(-1deg) translateY(20px)"}>

                    <div style={{ height: "200px", background: "linear-gradient(135deg, #8e2de233, #4a00e033)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <i className="ri-brain-line" style={{ fontSize: "5rem", color: "#8e2de2" }} />
                    </div>

                    <div style={{ padding: "30px", flex: 1, display: "flex", flexDirection: "column" }}>
                        <h3 style={{ color: "#f4ede6", fontSize: "1.5rem", fontWeight: 800, fontFamily: "'Outfit', sans-serif", margin: "0 0 8px" }}>Sarathi Astra</h3>
                        <p style={{ color: "#8e2de2", fontSize: "0.8rem", fontWeight: 700, margin: "0 0 20px" }}>Advanced RAG System</p>

                        <p style={{ color: "#f4ede6", opacity: 0.7, fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "25px" }}>
                            Intelligent document interaction engine providing context-aware Q&A and semantic insight extraction from massive datasets.
                        </p>

                        <div style={{ marginTop: "auto", display: "flex", gap: "10px" }}>
                            <span style={{ padding: "6px 12px", background: "rgba(142,45,226,0.1)", border: "1px solid rgba(142,45,226,0.2)", borderRadius: "99px", fontSize: "0.7rem", color: "#f4ede6" }}>LangChain</span>
                            <span style={{ padding: "6px 12px", background: "rgba(142,45,226,0.1)", border: "1px solid rgba(142,45,226,0.2)", borderRadius: "99px", fontSize: "0.7rem", color: "#f4ede6" }}>Vector DB</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
