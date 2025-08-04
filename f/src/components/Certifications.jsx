export default function Certifications() {
  const certificates = [
    {
      name: "Design Thinking A Primer - NPTEL[Elite]",
      image: "/nptl.png",
    },
    {
      name: "DevOps,DataOps,MLOps - Coursera",
      image: "/duke.png",
    },
    {
      name: "Advanced Relational Database and SQL - Coursera",
      image: "/sql.png",
    },
    {
      name: "TechA Web Development using HTML and CSS Foundation - Infosys |Springboard ",
      image: "/Htmlcss.png",
    },
    {
      name: "TechA Python Programming Foundation Certication - Infosys |Springboard ",
      image: "/python.png",
    },
    {
      name: "Write PQL Queries - Celonis Academy",
      image: "/pql.png",
    },
  ];

  return (
    <section id="certification" className="py-16 px-6 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold text-blue-700 mb-6">My Certifications</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {certificates.map((cert, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow hover:shadow-2xl p-4 transition duration-300"
          >
            <div className="overflow-hidden rounded-t-lg">
              <img
                src={cert.image}
                alt={cert.name}
                className="w-full h-64 object-cover transform transition duration-500 ease-in-out hover:scale-105 hover:brightness-110"
              />
            </div>
            <div className="mt-4 text-gray-700 font-semibold text-sm sm:text-base">
              {cert.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
