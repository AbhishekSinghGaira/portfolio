"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Particles from "../animations/Particles";

export default function Contact() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".reveal",
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".reveal",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20 bg-white dark:bg-gray-900 text-gray-900 dark:text-white relative">
      
      {/* 🔵 Particle BG just behind form */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={500}
          particleSpread={10}
          speed={0.5}
          particleBaseSize={200}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* 🔴 Glassmorphic Form */}
      <div className="relative z-10 w-full max-w-2xl reveal">
        <div className="backdrop-blur-xl bg-white/10 dark:bg-white/10 border border-white/30 dark:border-white/20 shadow-lg p-10 rounded-2xl transition-all duration-300 space-y-8">
          <h2 className="text-4xl font-bold text-center text-white">Get in Touch</h2>

          <form className="space-y-6">
            <div>
              <label className="block mb-1 text-sm font-medium text-white">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border border-white/30 rounded-lg bg-white/10 text-white placeholder-white/70 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-white">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full p-3 border border-white/30 rounded-lg bg-white/10 text-white placeholder-white/70 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-white">Message</label>
              <textarea
                rows={5}
                placeholder="Your message..."
                className="w-full p-3 border border-white/30 rounded-lg bg-white/10 text-white placeholder-white/70 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 px-6 bg-blue-600/80 hover:bg-blue-700/80 transition-colors duration-200 text-white font-semibold rounded-lg shadow-md"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
