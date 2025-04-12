import React from "react";
import Chatbot from "./components/Chatbot";

export default function PortfolioSite() {
  return (
    <div className="font-sans bg-white text-gray-800">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 shadow-md sticky top-0 bg-white z-50">
        <h1 className="text-2xl font-bold">Your Name</h1>
        <nav className="space-x-4 text-sm font-medium">
          <a href="#about" className="hover:underline">About</a>
          <a href="#resume" className="hover:underline">Resume</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-b from-gray-100 to-white">
        <div className="max-w-2xl mx-auto">
          <img
            src="profile.jpeg"
            alt="Headshot"
            className="w-32 h-32 rounded-full mx-auto mb-4 shadow-md object-cover"
          />
          <h2 className="text-4xl font-semibold mb-2">Hi, I'm Your Name</h2>
          <p className="text-lg text-gray-600 mb-6">
            Brief intro or tagline goes here. Something snappy and clear.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-4xl mx-auto px-6 py-16">
        <h3 className="text-2xl font-semibold mb-4">About Me</h3>
        <p className="text-gray-700 leading-relaxed">
          Placeholder text for your bio. Discuss your passion, background, and what
          makes you unique as a developer. Keep it concise and engaging.
        </p>
      </section>

      {/* Resume Section */}
      <section id="resume" className="bg-gray-100 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold mb-4">Resume</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Highlight key roles, accomplishments, and relevant experiences. Include links
            or buttons to download the full resume.
          </p>
          <a
            href="/path-to-your-resume.pdf"
            className="inline-block px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
            download
          >
            Download Resume
          </a>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-4xl mx-auto px-6 py-16">
        <h3 className="text-2xl font-semibold mb-4">Projects</h3>
        <p className="text-gray-700 leading-relaxed mb-8">
          List out portfolio projects here with brief descriptions, links to GitHub,
          live demos, or case studies.
        </p>
        {/* Placeholder project */}
        <div className="bg-white shadow rounded p-4 mb-4">
          <h4 className="font-bold text-lg">Project Title</h4>
          <p className="text-gray-600">Short description of the project, technologies used, and link to GitHub.</p>
        </div>
      </section>

      {/* Chatbot Section */}
      <section className="bg-gray-50 px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold mb-4">Ask Me Anything</h3>
          <Chatbot />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-4xl mx-auto px-6 py-16">
        <h3 className="text-2xl font-semibold mb-4">Contact Me</h3>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-300 p-3 rounded"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border border-gray-300 p-3 rounded"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full border border-gray-300 p-3 rounded"
          ></textarea>
          <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800">
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 py-6 border-t">
        <p>
          &copy; {new Date().getFullYear()} Your Name. Built with ❤️. View my work on
          <a
            href="https://github.com/paulnicholsen27"
            className="ml-1 text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </p>
      </footer>
    </div>
  );
}
