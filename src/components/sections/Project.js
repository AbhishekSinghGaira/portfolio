"use client";
import FluidGlass from "@/components/card/fluidglass";

export default function Projects() {
  return (
    <section className="w-full bg-black text-white overflow-hidden flex items-center justify-center px-4 sm:px-8 md:px-16 py-20 sm:py-24 lg:py-32">
      <div className="w-full max-w-7xl h-[80vh] sm:h-[90vh] md:h-screen">
        <FluidGlass
          mode="lens"
          lensProps={{
            navItems: [
              { label: "Portfolio", link: "/" },
              { label: "About", link: "/about" },
              { label: "Projects", link: "/projects" },
            ],
            scale: 0.2, // You can tweak this per screen if needed
            ior: 1.2,
            thickness: 10,
            chromaticAberration: 0.08,
          }}
        />
      </div>
    </section>
  );
}
