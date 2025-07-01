"use client";
import Silk from "./Silk";
import ProfileCard from "./ProfileCard";
import BlurText from "./Blur";
import RotatingText from "./Rotatingtext";

export default function HeroSection() {
  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Hyperspeed as background */}
      <div className="absolute inset-0 w-full h-full z-0">
        
        <Silk

        speed={5}

        scale={1}

        color="#7B7481"

        noiseIntensity={1.5}

        rotation={0}

        />
      </div>
      {/* Hero content on top */}
      <header className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center bg-black/40 backdrop-blur-sm rounded-lg p-8">
        {/* <ProfileCard
    avatarUrl="https://your-avatar-url.jpg"
    miniAvatarUrl="https://your-avatar-url.jpg"
    showUserInfo={false} // Hide the default user info bar
     >
    <div className="flex flex-col items-center justify-center w-full h-full text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-2">Abhishek</h1>
        <p className="italic text-gray-200 dark:text-gray-300 mb-4">
        "I study hard, build smarter, and always keep the vibe alive."
        </p>
        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
        JEE isn't just a test — it's a mindset. Build, learn, repeat.
        </span>
    </div>
    </ProfileCard> */}

      <BlurText

      text="Abhishek Singh Gaira"

      delay={150}

      animateBy="words"

      direction="top"

      className="text-8xl mb-8"

      />
    <div className="flex flex-row items-center justify-center gap-3 mb-4 pt-8">
      <span className="text-2xl md:text-5xl ">The</span>
      <RotatingText
        texts={["React Developer", "Django Developer", "Web Developer", "Software Engineer", "Full Stack Developer", "AI/ML Enthusiast"]}
        mainClassName="px-2 sm:px-2 md:px-3 bg-[#2a2630] text-white overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg text-4xl md:text-5xl"
        staggerFrom={"last"}
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "-120%" }}
        staggerDuration={0.025}
        splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
        transition={{ type: "spring", damping: 30, stiffness: 400 }}
        rotationInterval={2000}
      />
    </div>
        </header>
    </div>
  );
} 