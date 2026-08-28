import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import About from "./pages/About";
import Project from "./pages/Project";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <div className="min-h-screen bg-[#140503] text-white flex flex-col justify-between selection:bg-purple-500 selection:text-white font-sans">
      
      {/* 1. Glassmorphism Navigation Bar */}
      <nav className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-16 py-4 bg-[#1f0703]/80 backdrop-blur-md border-b border-purple-900/20 shadow-lg">
        <h1 className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-2xl md:text-3xl font-extrabold text-transparent transition-transform duration-300 hover:scale-105 cursor-pointer tracking-wider">
          PORTFOLIO
        </h1>
        
        <div className="flex gap-6 md:gap-8 font-medium text-sm md:text-base">
          {[
            { name: "HOME", path: "/" },
            { name: "ABOUT", path: "/about" },
            { name: "PROJECTS", path: "/project" },
            { name: "CONTACT", path: "/contact" },
          ].map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="relative text-gray-300 transition-colors duration-300 hover:text-purple-400 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-purple-500 hover:after:w-full after:transition-all after:duration-300"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>

      {/* 2. Main Body & Page Routing */}
      <main className="flex-grow flex items-center justify-center">
        <Routes>
          <Route
            path="/"
            element={
              <div className="container mx-auto px-6 md:px-16 py-12 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
                
                {/* Left Content Column */}
                <div className="max-w-xl text-center md:text-left">
                  
                  {/* Status Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-semibold mb-6">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                    Available for Work
                  </div>

                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight">
                    Hi, I'm{" "}
                    <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                      Aayush 👋
                    </span>
                  </h1>

                  <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-purple-300/90 tracking-wide">
                    Frontend Developer
                  </h2>

                  <p className="mt-5 text-gray-400 text-base md:text-lg leading-relaxed">
                    Final-year B.Tech CS student passionate about crafting clean, modern, and interactive web applications with exceptional user experiences.
                  </p>

                  {/* Action Buttons & Social Links */}
                  <div className="mt-8 flex flex-wrap items-center justify-center md:justify-start gap-4">
                    <Link
                      to="/project"
                      className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold rounded-full shadow-lg shadow-purple-900/40 transition-all duration-300 hover:scale-105"
                    >
                      View Work
                    </Link>

                    {/* Social Media Links */}
                    <div className="flex items-center gap-3 ml-2">
                      <a
                        href="https://www.linkedin.com/in/aayush-pandey-5b4452380/"
                        target="_blank"
                        rel="noreferrer"
                        className="p-3 bg-[#1f0703] border border-purple-500/20 rounded-full hover:border-purple-500 transition-all duration-300 hover:scale-110 shadow-md"
                        title="LinkedIn"
                      >
                        <img className="h-6 w-6 object-contain" src="linkdin.gif" alt="LinkedIn" />
                      </a>

                      <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=ap4539818@gmail.com"
                        className="p-3 bg-[#1f0703] border border-purple-500/20 rounded-full hover:border-purple-500 transition-all duration-300 hover:scale-110 shadow-md"
                        title="Email"
                      >
                        <img className="h-6 w-6 object-contain" src="g.png" alt="Email" />
                      </a>

                      <a
                        href="https://github.com/ap4539818-netizen"
                        target="_blank"
                        rel="noreferrer"
                        className="p-3 bg-white border rounded-full hover:border-purple-500 transition-all duration-300 hover:scale-110 shadow-md"
                        title="GitHub"
                      >
                        <img className="h-6 w-6 object-contain" src="img.png" alt="GitHub" />
                      </a>
                    </div>
                  </div>

                </div>

                {/* Right Image Column with Glowing Ring */}
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-xl opacity-50 group-hover:opacity-80 transition duration-500"></div>
                  <img
                    src="ayush.jpeg"
                    alt="Aayush"
                    className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full object-cover border-4 border-purple-400/40 shadow-2xl transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

              </div>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="py-4 text-center text-xs text-gray-500 border-t border-purple-900/10">
        © {new Date().getFullYear()} Aayush. Built with React & Tailwind CSS.
      </footer>
    </div>
  );
};

export default App;