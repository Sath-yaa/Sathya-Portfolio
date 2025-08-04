import { useState } from "react";

const links = ["Home", "Skills", "Certification", "Projects", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo + Title */}
        <div className="flex items-center gap-2">
          <img
            src="./logo1.png"
            alt="Logo"
            className="h-10 w-auto sm:h-12 object-contain"
          />
          <h1 className="text-2xl font-bold text-blue-600">Portfolio</h1>
        </div>

        {/* Mobile menu icon */}
        <div className="md:hidden" onClick={() => setOpen(!open)}>
          <button className="text-3xl">&#9776;</button>
        </div>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-6">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <ul className="flex flex-col items-center bg-gray-100 md:hidden">
          {links.map((link) => (
            <li key={link} className="py-2">
              <a
                href={`#${link.toLowerCase()}`}
                className="text-gray-700 hover:text-blue-600"
                onClick={() => setOpen(false)}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
