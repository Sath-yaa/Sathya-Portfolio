import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaJava,
  FaPython,
} from "react-icons/fa";
import { SiMongodb, SiTailwindcss } from "react-icons/si";

export default function Skills() {
  const techStack = [
    { name: "HTML5", icon: <FaHtml5 />, color: "text-orange-500" },
    { name: "CSS3", icon: <FaCss3Alt />, color: "text-blue-600" },
    { name: "JavaScript", icon: <FaJs />, color: "text-yellow-400" },
    { name: "React", icon: <FaReact />, color: "text-cyan-400" },
    { name: "Node.js", icon: <FaNodeJs />, color: "text-green-600" },
    { name: "MongoDB", icon: <SiMongodb />, color: "text-green-700" },
    { name: "Git", icon: <FaGitAlt />, color: "text-red-600" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-sky-400" },
  ];

  const languages = [
    { name: "Java", icon: <FaJava />, color: "text-[#f89820]" },
    { name: "Python", icon: <FaPython />, color: "text-blue-500" },
  ];

  const renderCard = (item) => (
    <div
      key={item.name}
      className={`group relative flex flex-col items-center justify-center p-6 bg-white/30 backdrop-blur-md border border-white/20 rounded-2xl shadow-md hover:shadow-xl transition duration-300 hover:scale-105 cursor-pointer`}
    >
      <div
        className={`text-5xl mb-3 ${item.color} drop-shadow-md group-hover:animate-bounce`}
      >
        {item.icon}
      </div>
      <div className="text-lg font-semibold text-gray-700">{item.name}</div>

      {/* Tooltip */}
      <div className="absolute bottom-full mb-2 opacity-0 group-hover:opacity-100 transition text-sm bg-black text-white px-2 py-1 rounded shadow-lg pointer-events-none">
        {item.name}
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 px-6 bg-gradient-to-br from-white via-blue-50 to-purple-100">
      {/* Tech Stack */}
      <h2 className="text-4xl font-bold text-blue-800 text-center mb-12 drop-shadow-sm">
        My Tech Stack
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-6xl mx-auto mb-20">
        {techStack.map(renderCard)}
      </div>

      {/* Languages */}
      <h1 className="text-4xl font-bold text-purple-800 text-center mb-8 drop-shadow-sm">
        Languages
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
        {languages.map(renderCard)}
      </div>
    </section>
  );
}
