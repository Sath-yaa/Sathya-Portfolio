import React, { useEffect } from "react";
import Typewriter from "react-typewriter-effect";
import frontPhoto from "/profile-front.jpg";
import backPhoto from "/profile-back.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faDownload } from "@fortawesome/free-solid-svg-icons";

export default function HeroSection() {
  const colors = [
    "rgba(135,206,250,0.6)", // Sky Blue
    "rgba(255,182,193,0.6)", // Light Pink
  ];

  // Scroll to #home on initial load
  useEffect(() => {
    const element = document.getElementById("home");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden bg-gradient-to-br from-blue-100 via-white to-purple-100 px-4"
    >
      {/* Large Floating Bubbles */}
      <ul className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        {Array.from({ length: 10 }).map((_, i) => (
          <li
            key={i}
            className="big-bubble"
            style={{
              left: `${Math.random() * 100}%`,
              width: `${80 + Math.random() * 100}px`,
              height: `${80 + Math.random() * 100}px`,
              backgroundColor: colors[i % 2],
              animationDuration: `${10 + Math.random() * 10}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></li>
        ))}
      </ul>

      {/* Profile Flip Card */}
      <div className="relative w-40 h-40 mb-6 group perspective z-10">
        <div className="w-full h-full duration-700 transform-style preserve-3d group-hover:rotate-y-180">
          <img
            src={frontPhoto}
            alt="Front"
            className="w-full h-full object-cover rounded-full shadow-2xl ring-4 ring-white transition duration-300 ease-in-out group-hover:scale-105 backface-hidden"
          />
          <img
            src={backPhoto}
            alt="Back"
            className="w-full h-full object-cover rounded-full shadow-2xl ring-4 ring-white absolute top-0 left-0 transform rotate-y-180 backface-hidden"
          />
        </div>
      </div>

      {/* Heading */}
      <h1 className="text-5xl sm:text-6xl font-extrabold text-blue-800 drop-shadow-md z-10 animate-fade-in">
        Hi, I’m Sathya
      </h1>

      {/* Typing effect */}
      <div className="mt-4 text-lg text-gray-800 max-w-xl animate-fade-in delay-200 z-10">
        <Typewriter
          textStyle={{
            fontFamily: "inherit",
            color: "#1f2937",
            fontWeight: "500",
            fontSize: "1.125rem",
          }}
          startDelay={500}
          cursorColor="#3F3D56"
          multiText={[
            "I’m a passionate full-stack developer.",
            "I build user-friendly web applications.",
            "Let's collaborate on impactful projects.",
          ]}
          multiTextDelay={2000}
          typeSpeed={50}
          deleteSpeed={30}
          loop
        />

        {/* Social Links */}
        <div className="flex gap-6 justify-center mt-8">
          <a
            href="https://github.com/Sath-yaa"
            target="_blank"
            rel="noreferrer"
            className="text-gray-700 hover:text-black text-2xl"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://www.linkedin.com/in/sathya-subramaniyam-903897278/"
            target="_blank"
            rel="noreferrer"
            className="text-blue-700 text-2xl"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=sathyaa2315@gmail.com&su=Contact%20from%20Portfolio&body=Hi%20Sathya%2C%0AI%20visited%20your%20portfolio%20and%20wanted%20to%20connect."
  target="_blank"
  rel="noreferrer"
  className="text-red-500 text-2xl"
>
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>

        {/* Download Resume Button */}
        <div className="mt-6">
          <a
            href="/Sathya CV.pdf"
            download
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-3 py-2 rounded-full shadow-md hover:bg-blue-700 transition duration-300"
          >
            <FontAwesomeIcon icon={faDownload} />
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}
