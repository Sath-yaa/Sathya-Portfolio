import { FiExternalLink } from "react-icons/fi"; // npm install react-icons

export default function Projects() {
  const projects = [
    {
      title: "To-Do App",
      description: "A simple task management app built with React with Tailwind CSS and MUI-material.For backend Nodejs and MongoDB.The Site is Live Now..!!!",
      image: "/todo.png", // Place this image in your public folder
      link: "https://github.com/Sath-yaa/Sathya-todo",
      installLink: "https://sathya-todo.onrender.com", // Hosted app
      type: "GitHub",
    },
    {
      title: "Sat Eats UI",
      description: "A clean and modern mobile app UI designed in Figma.",
      image: "/figma1.png",
      link: "https://www.figma.com/design/gUI7ufiY4cDycRGVwo4IwA/SatEats?node-id=0-1&t=pvpIUfdxXX8zAOPo-1",
      installLink: "https://www.figma.com/proto/gUI7ufiY4cDycRGVwo4IwA/SatEats?node-id=0-1&t=pvpIUfdxXX8zAOPo-1", // Prototype
      type: "Figma",
    },
    {
      title: "Movie Streamy UI",
      description: "A clean and modern mobile app UI designed in Figma.",
      image: "/figma2.png",
      link: "https://www.figma.com/design/c1oc9JwehJD8KMadnzeEWV/Movie-Streamy-App?node-id=0-1&t=BrJXeYsompNL8XFa-1",
      installLink: "https://www.figma.com/proto/c1oc9JwehJD8KMadnzeEWV/Movie-Streamy-App?node-id=0-1&t=BrJXeYsompNL8XFa-1", // Prototype
      type: "Figma",
    },
  ];

  return (
    <section id="projects" className="py-16 px-6 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold text-blue-700 mb-10">My Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="relative group rounded-lg shadow-lg overflow-hidden cursor-pointer"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-100 object-fit transform group-hover:scale-105 transition duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-center items-center text-white p-4 text-center">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-sm mb-4">{project.description}</p>

              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
              >
                <FiExternalLink className="text-lg" />
                <span>View on {project.type}</span>
              </a>

              {project.installLink && (
                <a
                  href={project.installLink}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 text-sm underline text-blue-300 hover:text-white"
                >
                  {project.type === "Figma" ? "Figma prototype" : "Open in Webpage"}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
