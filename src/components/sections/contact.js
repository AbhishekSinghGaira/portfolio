"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Particles from "../animations/Particles";
import StarBorder from "../animations/starborder";

export default function Contact() {
// Contact.js - Optimize ScrollTrigger
useEffect(() => {
  gsap.registerPlugin(ScrollTrigger);
  
  // Kill animations when unmounted
  const ctx = gsap.context(() => {
    gsap.fromTo(".reveal", 
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".reveal",
          start: "top 90%", // Earlier trigger
          toggleActions: "play none none none", // Remove reverse
          markers: false, // Disable in production
        }
      }
    );
  });
  
  return () => ctx.revert(); // Cleanup
}, []);

  return (
    <div className="relative min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white flex items-center justify-center px-4 py-20 overflow-hidden">
      
      {/* 🔵 Particle Background */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={500}
          particleSpread={10}
          speed={0.5}
          particleBaseSize={200}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* ✨ Star Border Effect Container */}
      <div className="relative z-10 w-full max-w-xl">
        <StarBorder
  as="div"
  className="w-fit mx-auto mt-10"
  color="cyan"
  speed="4s"
>
          <div className="reveal backdrop-blur-xl bg-white/10 border border-white/30 dark:border-white/20 shadow-lg p-10 rounded-2xl transition-all duration-300 space-y-8">
            <h2 className="text-4xl font-bold text-center text-white">
              📫 Contact / Socials
            </h2>

            <div className="text-white text-lg space-y-4 text-center">
              <p>
                📧 <strong>Email:</strong>{" "}
                <a
                  href="mailto:gairaabhishek32@gmail.com"
                  className="underline text-blue-300 hover:text-blue-400"
                >
                  gairaabhishek32@gmail.com
                </a>
              </p>
              <p>
                🧠 <strong>GitHub:</strong>{" "}
                <a
                  href="https://github.com/AbhishekSinghGaira"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-blue-300 hover:text-blue-400"
                >
                  AbhishekSinghGaira
                </a>
              </p>
              <p>
                💬 <strong>Discord:</strong> AbhishekSinghGaira
              </p>
            </div>
          </div>
        </StarBorder>
      </div>
    </div>
  );
}
