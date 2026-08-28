import React from "react";

const Project = () => {
  // Aap apne real projects ka data yahan update kar sakte hain
  const projectsData = [
   
    {
      id: 2,
      title: "Portfolio Website",
      description:
        "A responsive and modern personal portfolio built with React and Tailwind CSS featuring smooth UI components.",
      tags: ["React.js", "Tailwind CSS", "React Router"],
      github: "https://github.com/ap4539818-netizen",
      demo: "#",
    },
    
  ];

  return (
    <div className="container mx-auto px-6 md:px-16 py-12 animate-[fadeIn_0.8s_ease-out]">
      
      {/* 1. Page Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-sm font-semibold text-purple-400 tracking-widest uppercase mb-2">
          My Recent Work
        </h2>
        <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
          Featured <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Projects</span>
        </h1>
        <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 rounded-full"></div>
      </div>

      {/* 2. Projects Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="bg-[#1f0703]/60 border border-purple-900/30 rounded-2xl p-6 backdrop-blur-sm shadow-xl hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between group"
          >
            <div>
              {/* Project Card Header */}
              <div className="flex justify-between items-center mb-4">
                <span className="text-3xl">📁</span>
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-400 hover:text-purple-400 transition text-sm font-medium"
                    title="Code Repository"
                  >
                    GitHub ↗
                  </a>
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition duration-300 mb-3">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                {project.description}
              </p>
            </div>

            {/* Tech Stack Badges & Live Demo */}
            <div>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-3 py-1 bg-purple-950/80 border border-purple-500/30 text-purple-300 rounded-full font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="block text-center w-full py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold text-sm rounded-xl shadow-md transition-all duration-300"
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Project;