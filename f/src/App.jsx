import { useEffect } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import ContactForm from "./components/ContactForm";
import Projects from "./components/Projects";

function App() {
  useEffect(() => {
    const element = document.getElementById("home");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <>
      <Navbar />
      <main className="pt-16">
        <HeroSection />
        <Skills />
        <Certifications />
        <Projects />
        <ContactForm />
      </main>
    </>
  );
}

export default App;
