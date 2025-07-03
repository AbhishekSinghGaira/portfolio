"use client";
import { useRef } from "react";
import FluidGlass from "../card/fluidglass";

export default function Projects() {
  const containerRef = useRef(null);

  const handleMouseEnter = () => {
    // 🔒 Lock page scroll
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    // ✅ Allow FluidGlass scroll
    const fluidCanvas = containerRef.current.querySelector(".fluid-glass-wrapper");
    if (fluidCanvas) {
      fluidCanvas.style.pointerEvents = "auto";
    }
  };

  const handleMouseLeave = () => {
    // 🔓 Unlock page scroll
    document.body.style.overflow = "auto";
    document.documentElement.style.overflow = "auto";

    // ❌ Prevent FluidGlass scroll when not hovered
    const fluidCanvas = containerRef.current.querySelector(".fluid-glass-wrapper");
    if (fluidCanvas) {
      fluidCanvas.style.pointerEvents = "none";
    }
  };

  return (
    <section
      id="projects"
      className="relative w-full h-screen bg-transparent overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={containerRef}
    >
      {/* ⭐️ Add this wrapper class to control pointer events */}
      <div className="fluid-glass-wrapper pointer-events-none w-full h-full">
        <FluidGlass
          mode="lens" // bar or cube if you want
          lensProps={{
            chromaticAberration: 0.1,
            thickness: 5,
            ior: 1.15,
            transmission: 1,
            roughness: 0,
            color: "#ffffff",
            attenuationDistance: 0.25,
            attenuationColor: "#ffffff",
          }}
        />
      </div>
    </section>
  );
}
