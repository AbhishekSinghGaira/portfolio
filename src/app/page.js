"use client";
import HeroSection from "../components/sections/HeroSection";
import AboutSkills from "../components/sections/AboutSkills";
import Skills from "../components/sections/Skills";
import ClickSpark from "../components/animations/clickspark";
import Squares from "../components/animations/square";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { ReactLenis } from "lenis/react";
import Contact from "@/components/sections/contact";
import Projects from "@/components/sections/Project"; // NOTE: Correct path

export default function Home() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".reveal").forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <ReactLenis root>
      <ClickSpark>
        <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-white font-sans relative overflow-x-hidden">
          {/* 🔷 Squares Background */}
          <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
            <Squares
              speed={0.75}
              borderColor="#222"
              hoverFillColor="#232334"
              squareSize={40}
              direction="diagonal"
            />
          </div>

          <div className="relative z-10">
            {/* 🔶 Hero Section */}
            <section className="hero reveal">
              <HeroSection />
            </section>

            {/* 🔶 About + Skills */}
            <section className="main reveal">
              <AboutSkills />
              <Skills />
            </section>

            {/* 🔶 Projects (NOW separate section) */}
            <section className="projects">
              <Projects />
            </section>

            {/* 🔶 Contact */}
            <section className="footer reveal">
              <Contact />
            </section>
          </div>
        </div>
      </ClickSpark>
    </ReactLenis>
  );
}
