import React from "react";

// Importing all 11 certificates
import cert1 from "../../assets/img/certifications/1.png";
import cert2 from "../../assets/img/certifications/2.png";
import cert3 from "../../assets/img/certifications/3.png";
import cert4 from "../../assets/img/certifications/4.png";
import cert5 from "../../assets/img/certifications/5.png";
import cert6 from "../../assets/img/certifications/6.png";
import cert7 from "../../assets/img/certifications/7.png";
import cert8 from "../../assets/img/certifications/8.png";
import cert9 from "../../assets/img/certifications/9.png";
import cert10 from "../../assets/img/certifications/10.png";
import cert11 from "../../assets/img/certifications/11.png";

const CERTS = [
    { img: cert1 }, { img: cert2 }, { img: cert3 }, { img: cert4 },
    { img: cert5 }, { img: cert6 }, { img: cert7 }, { img: cert8 },
    { img: cert9 }, { img: cert10 }, { img: cert11 }
];

export default function CertificationsSection() {
    return (
        <section id="certifications" className="w-full py-24 bg-[#0a0a0a] text-[#f4ede6]">
            <div className="max-w-[1200px] mx-auto px-6 text-center mb-16">
                <span className="text-[#e87532] font-outfit font-bold tracking-widest uppercase text-sm">Validations</span>
                <h2 className="text-4xl md:text-5xl font-outfit font-black mt-2">Verified Certifications</h2>
            </div>

            <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {CERTS.map((cert, i) => (
                    <div
                        key={i}
                        className="cert-anim group relative aspect-[4/3] rounded-xl overflow-hidden border border-white/10 hover:border-[#e87532]/40 transition-all cursor-pointer"
                    >
                        <img
                            src={cert.img}
                            alt={`Certification ${i + 1}`}
                            className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <i className="ri-zoom-in-line text-3xl text-white" />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
