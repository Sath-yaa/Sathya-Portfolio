import { useState } from "react";
import axios from "axios";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://sathya-portfolio-b.onrender.com/api/contact", form);
      if (res.status === 200) {
        setStatus("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message.");
      }
    } catch (error) {
      console.error(error);
      setStatus("Error connecting to server.");
    }
  };

  return (
    <section id="contact" className="py-16 px-6 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold text-blue-700 mb-8">Contact Me</h2>
      <form className="max-w-md mx-auto space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full px-4 py-2 border rounded"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full px-4 py-2 border rounded"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="4"
          className="w-full px-4 py-2 border rounded"
          value={form.message}
          onChange={handleChange}
          required
        />
        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
          Send Message
        </button>
      </form>
      {status && <p className="mt-4 text-green-600">{status}</p>}
    </section>
  );
}
