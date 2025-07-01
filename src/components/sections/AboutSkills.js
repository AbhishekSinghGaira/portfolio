import PixelCard from '../card/PixelCard';

const AboutSkills = () => {
  return (
    <div className="flex justify-center items-center min-h-[80vh] w-full">
      <PixelCard variant="pink" className="w-full max-w-2xl h-[500px]">
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white">
          <h2 className="text-4xl font-bold mb-4">👨‍🎓 About Me</h2>
          <p className="text-lg text-center px-8 mb-6">
            I'm a dedicated JEE 2026 aspirant who doesn't just focus on academics. I'm passionate about coding, UI/UX design, mobile app development, AI projects, and occasionally video editing and creative tech builds.
          </p>
        </div>
      </PixelCard>
    </div>
  );
};

export default AboutSkills; 