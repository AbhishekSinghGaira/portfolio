'use client'
import ScrollFloat from '../animations/ScrollFloat';

const Skills = () => {
  return (
    <div className="flex flex-col items-center w-full min-h-[60vh] px-4">
      <div className="w-full max-w-4xl bg-black/60 rounded-2xl p-8 md:p-12 shadow-xl text-white mb-8">
        <div className="flex justify-center mb-4">
          <ScrollFloat textClassName="text-9xl md:text-7xl font-extrabold text-center" animationDuration={1.5}>Skills</ScrollFloat>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold mb-2">Languages</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Python</li>
              <li>JavaScript</li>
              <li>HTML / CSS</li>
              <li>C++</li>
              <li>Kotlin (for Android development)</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Frameworks / Libraries</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>React.js</li>
              <li>Next.js</li>
              <li>Node.js</li>
              <li>Tailwind CSS</li>
              <li>Django</li>
              <li>Jetpack Compose</li>
              <li>Socket.IO</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Tools & Technologies</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Firebase</li>
              <li>Git & GitHub</li>
              <li>Blender</li>
              <li>Kdenlive</li>
              <li>Figma</li>
              <li>SQLite</li>
              <li>Three.js</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Other Skills</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>UI/UX design principles</li>
              <li>Real-time apps & socket programming</li>
              <li>AI integration basics</li>
              <li>Cybersecurity fundamentals (learning phase)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills; 