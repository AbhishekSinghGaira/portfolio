"use client";
import { useEffect } from "react";
import FluidGlass from "@/components/card/fluidglass";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Projects() {


  return (
    <section className="h-screen w-full overflow-hidden bg-black text-white flex items-center justify-center relative">
      <div className="w-full h-full reveal-project">
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
