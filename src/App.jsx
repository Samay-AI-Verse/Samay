import { useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/* ── Hooks ── */
import { useLenis } from "./hooks/useLenis";
import { useCurtainGsap } from "./hooks/useCurtainGsap";
import { useSectionAnimations } from "./hooks/useSectionAnimations";
import { useBlackSectionGsap } from "./hooks/useBlackSectionGsap";

/* ── Layout ── */
import LoadingOverlay from "./components/effects/LoadingOverlay";
import Sidebar from "./components/layout/Sidebar";
import Navbar from "./components/layout/Navbar";
import ScrollProgress from "./components/layout/ScrollProgress";

/* ── Sections ── */
import LandingHero from "./components/sections/LandingHero";
import FeaturesSection from "./components/sections/FeaturesSection";
import AboutSection from "./components/sections/AboutSection";
import BlackSection from "./components/sections/BlackSection";
import InnovationSection from "./components/sections/InnovationSection";
import ProjectSection from "./components/sections/ProjectSection";
import CertificationsSection from "./components/sections/CertificationsSection";
import CrewSection from "./components/sections/CrewSection";
import FooterSection from "./components/sections/FooterSection";

/* ── Global styles & fonts ── */
import "remixicon/fonts/remixicon.css";
import "@fontsource/outfit/300.css";
import "@fontsource/outfit/400.css";
import "@fontsource/outfit/700.css";
import "@fontsource/outfit/900.css";
import "./App.css";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [showContent, setShowContent] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  /* Scroll-driven animations — start once overlay is gone */
  useLenis(showContent);
  useCurtainGsap(showContent);
  useSectionAnimations(showContent);
  useBlackSectionGsap(showContent);

  return (
    <div className="bg-[#050505] min-h-screen text-[#f4ede6]">
      <ScrollProgress />
      <LoadingOverlay onComplete={() => setShowContent(true)} />

      <Navbar onMenuClick={() => setMenuOpen(true)} />

      <div className="relative">
        {/* Hero & Intro block */}
        <div className="animation-block relative h-screen w-full overflow-hidden">
          <LandingHero />
          <FeaturesSection />
        </div>

        {/* About / Bio Section */}
        <AboutSection />
        <BlackSection />

        {/* Innovation & Impact Section */}
        <InnovationSection />

        {/* Full Project Grid Showcase */}
        <ProjectSection />

        <CertificationsSection />
        <CrewSection />
        <FooterSection />
      </div>
      <Sidebar isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </div>
  );
}
