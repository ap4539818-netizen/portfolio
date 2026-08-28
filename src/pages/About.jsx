import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  // Skills Data Array
  const skills = [
    { name: "React.js", level: "90%", color: "from-blue-500 to-cyan-400" },
    { name: "JavaScript (ES6+)", level: "85%", color: "from-yellow-400 to-orange-500" },
    { name: "Tailwind CSS", level: "90%", color: "from-teal-400 to-blue-500" },
    { name: "HTML5 & CSS3", level: "95%", color: "from-orange-500 to-red-500" },
    { name: "Git & GitHub", level: "80%", color: "from-gray-400 to-slate-100" },
    { name: "Data Structures (DSA)", level: "75%", color: "from-purple-500 to-indigo-500" },
  ];

  return (
    <div className="container mx-auto px-6 md:px-16 py-12 animate-[fadeIn_0.8s_ease-out]">
      
      {/* 1. Page Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-sm font-semibold text-purple-400 tracking-widest uppercase mb-2">
          Get To Know Me
        </h2>
        <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
          About <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Me</span>
        </h1>
        <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 rounded-full"></div>
      </div>

      {/* 2. Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        {/* Left Column: Personal Info & Education */}
        <div className="space-y-8">
          
          {/* Bio Card */}
          <div className="bg-[#1f0703]/60 border border-purple-900/30 p-8 rounded-2xl backdrop-blur-sm shadow-xl hover:border-purple-500/40 transition duration-300">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-purple-400">👋</span> Who I Am
            </h3>
            <p className="text-gray-300 leading-relaxed">
              I'm a final-year B.Tech Computer Science student with a strong passion for web development. I love building intuitive, performance-driven, and accessible user interfaces.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              My main focus is on modern frontend technology stacks like <span className="text-purple-300 font-semibold">React.js</span> and <span className="text-purple-300 font-semibold">Tailwind CSS</span>. I enjoy turning complex problems into simple, beautiful, and interactive code.
            </p>
          </div>

          {/* Education Card */}
          <div className="bg-[#1f0703]/60 border border-purple-900/30 p-8 rounded-2xl backdrop-blur-sm shadow-xl hover:border-purple-500/40 transition duration-300">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="text-purple-400">🎓</span> Education
            </h3>
            
            <div className="relative border-l-2 border-purple-500/30 pl-6 space-y-6">
              {/* College Degree */}
              <div className="relative">
                <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-purple-500 border-4 border-[#140503]"></span>
                <h4 className="text-lg font-bold text-white">B.Tech in Computer Science</h4>
                <p className="text-purple-300 text-sm font-medium">Final Year (2026- Present)</p>
                <p className="text-gray-400 text-sm mt-1">Focusing on Web Technologies, Software Engineering, and Core CS Fundamentals.</p>
                <h4 className="text-lg font-bold text-white">Completed 10th in 2021</h4>
                <p className="text-purple-300 text-sm font-medium">From KENDRIYA VIDYALAYA OLD CANTT PRAYAGRAJ</p>
                <h4 className="text-lg font-bold text-white">Completed 12th in 2023</h4>
                <p className="text-purple-300 text-sm font-medium">From KENDRIYA VIDYALAYA OLD CANTT PRAYAGRAJ</p>

              </div>
            </div>
          </div>

        </div>

        {/* Right Column: Technical Skills */}
        <div className="bg-[#1f0703]/60 border border-purple-900/30 p-8 rounded-2xl backdrop-blur-sm shadow-xl hover:border-purple-500/40 transition duration-300">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <span className="text-purple-400">⚡</span> Technical Skills
          </h3>

          {/* Skill Bars */}
          <div className="space-y-6">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-200 font-medium">{skill.name}</span>
                  <span className="text-purple-400 text-sm font-semibold">{skill.level}</span>
                </div>
                
                {/* Progress Bar Track */}
                <div className="w-full h-3 bg-purple-950/80 rounded-full overflow-hidden p-0.5 border border-purple-900/30">
                  {/* Progress Bar Fill */}
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                    style={{ width: skill.level }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="mt-10 pt-6 border-t border-purple-900/30 flex justify-center">
            <Link
              to="/contact"
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold rounded-full shadow-lg transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </Link>
          </div>

        </div>

      </div>

    </div>
  );
};

export default About;
