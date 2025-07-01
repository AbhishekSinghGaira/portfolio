"use client";
import FluidGlass from "@/components/card/fluidglass";
import Squares from "@/components/animations/square";

export default function Projects() {
  return (
    <section className="w-full bg-black text-white overflow-hidden relative flex items-center justify-center px-4 sm:px-8 md:px-16 py-20 sm:py-24 lg:py-32">

      {/* 🔵 Animated Square Background */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <Squares
          speed={0.75}
          direction="diagonal"
          borderColor="#222"
          hoverFillColor="#232334"
          squareSize={40}
        />
      </div>

      {/* 🔴 3D FluidGlass Component */}
      <div className="relative z-10 w-full max-w-7xl h-[80vh] sm:h-[90vh] md:h-screen">
        <FluidGlass
          mode="lens"
          lensProps={{
            navItems: [
              { label: "Portfolio", link: "/" },
              { label: "About", link: "/about" },
              { label: "Projects", link: "/projects" },
            ],
            scale: 0.2,
            ior: 1.2,
            thickness: 10,
            chromaticAberration: 0.08,
          }}
        />
      </div>
    </section>
  );
}
