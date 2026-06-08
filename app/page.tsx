"use client";

import { useEffect, useState } from "react";
import {
  FaEnvelope,
  FaLinkedin,
  FaFileAlt,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const aboutSlides = [
  {
    image: "/about_drawing.jpg",
    caption: "Drawing — experimenting with texture and composition through impasto painting.",
  },
  {
    image: "/about_music.jpg",
    caption: "Music — staying connected through virtual band rehearsals during the COVID era.",
  },
  {
    image: "/about_cosplaying.jpg",
    caption: "Cosplay — bringing characters to life through costume design and craftsmanship.",
  },
  {
    image: "/about_wigmaking.jpg",
    caption: "Wig Making — learning new techniques through trial, error, and patience.",
  },
  {
    image: "/about_ceramics.jpg",
    caption: "Ceramics — exploring creativity in a medium completely outside my comfort zone.",
  },
  {
    image: "/about_cooking.jpg",
    caption: "Cooking — learning family traditions by making dumplings from scratch.",
  },
   {
    image: "/about_ECG_leads.jpg",
    caption: "Biomedical Labs — gaining hands-on experience while seeing engineering concepts come to life.",
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % aboutSlides.length);
    }, 7000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % aboutSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? aboutSlides.length - 1 : prev - 1
    );
  };

  return (
    <main className="scroll-smooth">
      <section
        className="relative min-h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/profile.png')" }}
      >
        <div className="absolute inset-0 bg-slate-950/60" />

        <div className="relative z-10 max-w-7xl mx-auto px-8 min-h-screen flex flex-col">
          <nav className="flex justify-between items-center py-8">
            <h1 className="text-xl font-bold text-cyan-300">Ruidi Liu</h1>

            <div className="flex gap-8 text-white">
              <a href="#" className="hover:text-cyan-300 transition">Home</a>
              <a href="#projects" className="hover:text-cyan-300 transition">Projects</a>
              <a href="#about" className="hover:text-cyan-300 transition">About</a>
              <a href="#contact" className="hover:text-cyan-300 transition">Contact</a>
            </div>
          </nav>

          <div className="flex-1 flex items-center">
            <div className="max-w-3xl">
              <p className="uppercase tracking-widest text-cyan-300 font-semibold mb-4">
                AI • UX Design • Healthcare Technology
              </p>

              <h1 className="text-7xl font-bold text-white mb-6">
                Hi, I&apos;m Ruidi Liu
              </h1>

              <p className="text-2xl text-slate-200 mb-6 leading-relaxed">
                Biomedical Engineering Graduate focused on building
                human-centered health technology.
              </p>

              <p className="text-lg text-slate-300 mb-10 max-w-2xl">
                I combine product thinking, user experience design,
                engineering, and artificial intelligence to create meaningful
                healthcare solutions.
              </p>

              <div className="flex gap-4">
                <a
                  href="#selfie"
                  className="bg-cyan-400 text-slate-950 px-8 py-4 rounded-xl font-semibold hover:bg-cyan-300 transition"
                >
                  View Selfie Project
                </a>

                <a
                  href="#contact"
                  className="border border-cyan-300 text-cyan-200 px-8 py-4 rounded-xl hover:bg-cyan-300/10 transition"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-8">
          <p className="text-cyan-700 font-semibold uppercase tracking-wider mb-4">
            Featured Project
          </p>

          <div id="selfie" className="border border-slate-200 rounded-3xl p-10 hover:shadow-xl transition">
            <h2 className="text-4xl font-bold mb-4 text-slate-900">
              Selfie Dental Health AI
            </h2>

            <p className="text-lg text-slate-600 mb-8 max-w-3xl">
              A mobile application that combines image analysis and guided
              questionnaires to provide non-diagnostic oral health risk
              assessments and educational recommendations.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="font-bold text-slate-900 mb-2">My Role</h3>
                <p className="text-slate-600">
                  Product design, UX research, frontend development, backend
                  integration, and AI workflow planning.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-slate-900 mb-2">Tech Stack</h3>
                <p className="text-slate-600">
                  React Native, Expo, TypeScript, FastAPI, Python, AI/ML.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-slate-900 mb-2">Focus Area</h3>
                <p className="text-slate-600">
                  Healthcare accessibility, non-diagnostic screening, and
                  mobile-first UX.
                </p>
              </div>
            </div>

            <div className="flex gap-3 flex-wrap">
              {["React Native", "FastAPI", "AI / ML", "Healthcare UX"].map(
                (tag) => (
                  <span key={tag} className="bg-cyan-100 text-cyan-800 px-4 py-2 rounded-full">
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="bg-slate-50 py-24">
        <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-2 gap-12 items-start">
          <div className="relative rounded-3xl overflow-hidden shadow-xl h-[550px]">
           <img
              src={aboutSlides[currentSlide].image}
              alt={aboutSlides[currentSlide].caption}
              className={`w-full h-full transition-all duration-500 ${
                aboutSlides[currentSlide].contain
                  ? "object-contain p-4 bg-slate-100"
                  : "object-cover"
              }`}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />

            <p className="absolute bottom-6 left-6 right-6 text-white text-lg font-medium">
              {aboutSlides[currentSlide].caption}
            </p>

            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 text-slate-900 p-3 rounded-full hover:bg-white transition"
              aria-label="Previous slide"
            >
              <FaChevronLeft />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 text-slate-900 p-3 rounded-full hover:bg-white transition"
              aria-label="Next slide"
            >
              <FaChevronRight />
            </button>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              About Me
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed">
              &quot;Never try, never know&quot; is probably the phrase that best
              describes how I approach life.
              <br />
              <br />
              I&apos;ve always been curious about how people think, learn, and
              interact with the world around them. That curiosity has led me
              from biomedical engineering and healthcare technology to teaching,
              design, art, and storytelling.
              <br />
              <br />
              As a Biomedical Engineering graduate, I&apos;m particularly
              interested in the intersection of healthcare, technology, and user
              experience. I enjoy taking complex ideas and turning them into
              something people can understand and use.
              <br />
              <br />
              Outside of work, you&apos;ll usually find me drawing, making
              music, gaming, cosplaying, or exploring a new hobby just to see
              where it leads.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-slate-950 text-white py-20">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-4xl font-bold mb-4">Let&apos;s Connect</h2>

          <p className="text-slate-300 mb-8">
            Open to opportunities in Product, UX, Healthcare Technology, and AI.
          </p>

          <div className="flex gap-8 text-3xl">
            <a href="mailto:ruidiliu2002@gmail.com" className="hover:text-cyan-300 transition" aria-label="Email">
              <FaEnvelope />
            </a>

            <a
              href="PASTE_YOUR_LINKEDIN_URL_HERE"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-300 transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a href="/resume.pdf" download className="hover:text-cyan-300 transition" aria-label="Download Resume">
              <FaFileAlt />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}