import Image from "next/image";
import HeroSection from "../components/HeroSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-white font-sans">
      <HeroSection />
      {/* About Me */}
      <section className="max-w-3xl mx-auto px-4 py-8" id="about">
        <h2 className="text-2xl font-bold mb-4">👨‍🎓 About Me</h2>
        <p>
          I'm a dedicated JEE 2026 aspirant who doesn't just focus on academics. I'm passionate about coding, UI/UX design, mobile app development, AI projects, and occasionally video editing and creative tech builds. I believe in balancing productivity and creativity to achieve both academic and technical excellence.
        </p>
      </section>

      {/* Skills */}
      <section className="max-w-3xl mx-auto px-4 py-8" id="skills">
        <h2 className="text-2xl font-bold mb-4">🛠️ Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-2">Languages</h3>
            <ul className="list-disc list-inside">
              <li>Python</li>
              <li>JavaScript</li>
              <li>HTML / CSS</li>
              <li>C++</li>
              <li>Kotlin (for Android development)</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Frameworks / Libraries</h3>
            <ul className="list-disc list-inside">
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
            <ul className="list-disc list-inside">
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
            <ul className="list-disc list-inside">
              <li>UI/UX design principles</li>
              <li>Real-time apps & socket programming</li>
              <li>AI integration basics</li>
              <li>Cybersecurity fundamentals (learning phase)</li>
              <li>Strong time and task management</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects & Builds */}
      <section className="max-w-3xl mx-auto px-4 py-8" id="projects">
        <h2 className="text-2xl font-bold mb-4">💻 Projects & Builds</h2>
        <ol className="list-decimal list-inside space-y-4">
          <li>
            <strong>JEE PYQ Practice App</strong><br/>
            <span className="text-sm">Spaced-repetition based PYQ app for JEE practice with session tracking<br/>Tech Used: Python, Tkinter</span>
          </li>
          <li>
            <strong>AI Resume Builder</strong><br/>
            <span className="text-sm">Auto-suggestion based resume generator with export functionality<br/>Tech Used: Django, HTML, CSS</span>
          </li>
          <li>
            <strong>Spotify Pomodoro Timer</strong><br/>
            <span className="text-sm">Study timer synced with Spotify playlists for focus sessions<br/>Tech Used: HTML, CSS, JavaScript, Spotify Web SDK</span>
          </li>
          <li>
            <strong>School ERP System + Admin App</strong><br/>
            <span className="text-sm">GUI-based school management system with an Android admin companion<br/>Tech Used: Python (Tkinter), SQLite, Kotlin (Jetpack Compose)</span>
          </li>
          <li>
            <strong>Chat Application</strong><br/>
            <span className="text-sm">Real-time messaging with media sharing, voice/video calls, and OTP login<br/>Tech Used: Kotlin, Firebase, Jetpack Compose</span>
          </li>
          <li>
            <strong>3D Portfolio Website</strong><br/>
            <span className="text-sm">Interactive portfolio with Formula 1 car and chessboard animations<br/>Tech Used: Three.js, React.js, Cursor plugin</span>
          </li>
          <li>
            <strong>Creative Video Projects</strong><br/>
            <span className="text-sm">Blender and Kdenlive-based cinematic scenes, Marvel-style transitions<br/>Tools Used: Blender, Kdenlive</span>
          </li>
        </ol>
      </section>

      {/* Academics */}
      <section className="max-w-3xl mx-auto px-4 py-8" id="academics">
        <h2 className="text-2xl font-bold mb-4">📚 Academics</h2>
        <ul className="list-disc list-inside">
          <li>Board: CBSE</li>
          <li>Target Exam: JEE Advanced 2026</li>
          <li>Subjects: Physics, Chemistry, Mathematics, Computer Science</li>
          <li>School: Beersheba Senior Secondary School, Nainital</li>
        </ul>
      </section>

      {/* Goals */}
      <section className="max-w-3xl mx-auto px-4 py-8" id="goals">
        <h2 className="text-2xl font-bold mb-4">🚀 Current Goals</h2>
        <ul className="list-disc list-inside">
          <li>Excel in JEE and secure a top rank</li>
          <li>Launch open-source productivity tools</li>
          <li>Build a professional-grade portfolio website</li>
          <li>Learn advanced AI and cybersecurity after JEE</li>
          <li>Continue experimenting with creative tech projects</li>
        </ul>
      </section>

      {/* Creative Projects */}
      <section className="max-w-3xl mx-auto px-4 py-8" id="creative">
        <h2 className="text-2xl font-bold mb-4">🎨 Creative Projects</h2>
        <ul className="list-disc list-inside">
          <li>Designed a Marvel-style animated credit sequence using Blender</li>
          <li>Built particle-based video transitions with Kdenlive</li>
          <li>Experimented with 3D UI elements and interactive animations</li>
        </ul>
      </section>

      {/* Contact / Socials */}
      <section className="max-w-3xl mx-auto px-4 py-8" id="contact">
        <h2 className="text-2xl font-bold mb-4">📫 Contact / Socials</h2>
        <ul className="list-none space-y-2">
          <li>📧 Email: <a href="mailto:abhishek.dev@email.com" className="text-blue-600 dark:text-blue-400 underline">abhishek.dev@email.com</a></li>
          <li>🧠 GitHub: <a href="https://github.com/coderBhai" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline">coderBhai</a></li>
          <li>💬 Discord: <span className="font-mono">coderBhai#1234</span></li>
          <li>🌐 Portfolio Website: <span className="italic">abhishek.codes (Coming Soon)</span></li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-500 dark:text-gray-400">
        &copy; {new Date().getFullYear()} Abhishek | Built with Next.js & Tailwind CSS
      </footer>
    </div>
  );
}
