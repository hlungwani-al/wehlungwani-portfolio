"use client";

import Navbar from "./navbar/navbar";
import Footer from "./footer/footer";
import { TypeAnimation } from "react-type-animation";
import { useState, useCallback } from "react";
import { loadFull } from "tsparticles";
import Particles from "@tsparticles/react";
import type { Engine } from "@tsparticles/engine";
import Image from "next/image";

export default function Home() {
  const projectDetails = [
    {
      id: 1,
      src: "/images/project1.png",
      title: "Car Wash Service",
      description:
        "A web application designed for a car wash service, allowing customers to book appointments and view services offered.",
      url: "https://rgcarwash.web.app/",
    },
    {
      id: 2,
      src: "/images/project2.png",
      title: "Personal Portfolio",
      description:
        "A personal portfolio built using React, showcasing my skills and projects as a full-stack developer.",
      url: "https://wehlungwani.web.app",
    },
    {
      id: 3,
      src: "/images/project3.png",
      title: "Security Service Website",
      description:
        "A website for a security service company, providing information on their services and allowing clients to request quotes.",
      url: "https://northernshieldsecurity01.web.app",
    },
  ];
  // Particles initialization
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
  });
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    description: false,
  });

  const validateEmail = (email: string) =>
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const nameValid = formData.name.trim() !== "";
    const emailValid = validateEmail(formData.email);
    const descriptionValid = formData.description.trim() !== "";

    setErrors({
      name: !nameValid,
      email: !emailValid,
      description: !descriptionValid,
    });

    if (nameValid && emailValid && descriptionValid) {
      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            access_key: "f25d35cc-0d90-4ecf-aede-8f64d3703ef9",
            subject: "New Contact Form Submission",
            from_name: formData.name,
            email: formData.email,
            message: formData.description,
          }),
        });

        if (response.ok) {
          alert("Thanks for reaching out! I'll get back to you soon.");
          setFormData({ name: "", email: "", description: "" });
        } else {
          alert("Submission failed. Please try again later.");
        }
      } catch (error) {
        console.error("Form submission error:", error);
      }
    }
  };

  return (
    <div className="relative text-[#1e295e]">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: { value: "#1a1a2e" } },
          particles: {
            number: { value: 80 },
            color: { value: "#ffffff" },
            move: {
              enable: true,
              speed: 1.5,
              direction: "none",
              random: true,
              straight: false,
            },
            opacity: { value: 0.7 },
            size: { value: 2.5 },
            shape: { type: "circle" },
            links: {
              enable: true,
              distance: 150,
              color: "#ffffff",
              opacity: 0.4,
              width: 1,
            },
          },
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "grab",
                parallax: { enable: true, force: 60 },
              },
            },
          },
        }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "calc(100% - 5px)",
          height: "100%",
          zIndex: -1,
        }}
      />

      <Navbar />

      <main className="flex flex-col">
        {/* Hero Section */}
        <section
          id="home"
          className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#1a1a2e] to-[#16213e]"
        >
          <div className="text-center space-y-6">
            <h2 className="text-5xl font-bold text-[#e94560] animate-float">
              <TypeAnimation
                sequence={[
                  "Full Stack Architect",
                  2000,
                  "AI Engineer",
                  2000,
                  "Cloud Explorer",
                  2000,
                ]}
                speed={40}
                repeat={Infinity}
              />
            </h2>
            <p className="text-xl text-gray-300 mt-4 animate-fade-in">
              We Hlungwani, Building tomorrow&apos;s solutions today
            </p>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="min-h-screen flex items-center justify-center bg-[#0f3460] text-gray-100"
        >
          <div className="max-w-4xl px-4 text-center">
            <h2 className="text-4xl font-bold mb-8 animate-slide-up">
              About Me
            </h2>
            <p className="text-lg leading-relaxed animate-fade-in-delay">
              Microsoft-certified AI engineer and full-stack developer
              specializing in building intelligent, high-performance
              applications. Expertise in:
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8 animate-stagger">
              <div className="p-6 bg-[#16213e] rounded-lg shadow-xl">
                <h3 className="text-xl font-semibold mb-3 text-[#e94560]">
                  Backend
                </h3>
                <p>Java • Spring Boot • Node.js • PostgreSQL</p>
              </div>
              <div className="p-6 bg-[#16213e] rounded-lg shadow-xl">
                <h3 className="text-xl font-semibold mb-3 text-[#e94560]">
                  Frontend
                </h3>
                <p>
                  Angular • React • Next •TypeScript • Tailwind • Bootstrap{" "}
                </p>
              </div>
              <div className="p-6 bg-[#16213e] rounded-lg shadow-xl">
                <h3 className="text-xl font-semibold mb-3 text-[#e94560]">
                  AI/ML
                </h3>
                <p>Azure AI • Computer Vision</p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="projects"
          className="min-h-screen flex items-center justify-center bg-[#2c3e50] transition-all duration-500"
        >
          <div className="text-center max-w-4xl px-4">
            <h2 className="text-4xl font-bold mb-12 text-[#e94560] animate-slide-up">
              Featured Projects
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 animate-stagger">
              {projectDetails.map((project) => (
                <a
                  key={project.id}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative bg-[#16213e] rounded-xl p-6 shadow-2xl transform transition-all hover:scale-105"
                >
                  <Image
                    src={project.src}
                    alt={project.title}
                    width={400}
                    height={200}
                    className="rounded-lg mb-4 animate-pulse"
                  />
                  <h3 className="text-2xl font-bold mb-2 text-white">
                    {project.title}
                  </h3>
                  <p className="text-lg text-gray-300">{project.description}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="min-h-screen flex items-center justify-center bg-[#0f3460]"
        >
          <div className="w-full max-w-2xl px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#e94560] mb-4 animate-slide-up">
                Let&apos;s Connect
              </h2>
              <p className="text-lg text-gray-300 animate-fade-in">
                Ready to bring your vision to life? Let&apos;s collaborate!
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="bg-[#16213e] p-8 rounded-2xl shadow-2xl animate-pop-in"
            >
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full p-3 rounded-lg bg-[#1a1a2e] text-gray-100 ${
                      errors.name
                        ? "border-2 border-red-500"
                        : "border-transparent"
                    }`}
                  />
                  {errors.name && (
                    <p className="text-red-400 mt-1">Please enter your name</p>
                  )}
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full p-3 rounded-lg bg-[#1a1a2e] text-gray-100 ${
                      errors.email
                        ? "border-2 border-red-500"
                        : "border-transparent"
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-400 mt-1">
                      Please enter a valid email
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">Message</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full p-3 rounded-lg bg-[#1a1a2e] text-gray-100 ${
                      errors.description
                        ? "border-2 border-red-500"
                        : "border-transparent"
                    }`}
                  />
                  {errors.description && (
                    <p className="text-red-400 mt-1">
                      Please enter your message
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#e94560] text-white py-3 rounded-lg font-semibold
                    hover:bg-[#d1344e] transition-colors duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
