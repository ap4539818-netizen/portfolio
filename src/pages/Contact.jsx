import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    alert(`Thank you, ${formData.name}! Your message has been sent.`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="container mx-auto px-6 md:px-16 py-12 animate-[fadeIn_0.8s_ease-out]">
      
      {/* 1. Page Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-sm font-semibold text-purple-400 tracking-widest uppercase mb-2">
          Let's Connect
        </h2>
        <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
          Contact <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Me</span>
        </h1>
        <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 rounded-full"></div>
      </div>

      {/* 2. Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
        
        {/* Left Column: Contact Info Cards */}
        <div className="space-y-6">
          <div className="bg-[#1f0703]/60 border border-purple-900/30 p-8 rounded-2xl backdrop-blur-sm shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
            <p className="text-gray-300 leading-relaxed mb-8">
              Have a project in mind, a question, or just want to say hi? Feel free to reach out to me!
            </p>

            <div className="space-y-6">
              {/* Email Info */}
              <div className="flex items-center gap-4">
                <div className="p-4 bg-purple-950/60 border border-purple-500/30 rounded-full text-purple-400">
                  📧
                </div>
                <div>
                  <h4 className="text-xs text-gray-400 font-semibold uppercase">Email</h4>
                  <a href="mailto:ap4539818@gmail.com" className="text-white hover:text-purple-400 transition font-medium">
                    ap4539818@gmail.com
                  </a>
                </div>
              </div>

              {/* Location Info */}
              <div className="flex items-center gap-4">
                <div className="p-4 bg-purple-950/60 border border-purple-500/30 rounded-full text-purple-400">
                  📍
                </div>
                <div>
                  <h4 className="text-xs text-gray-400 font-semibold uppercase">Location</h4>
                  <p className="text-white font-medium">India</p>
                </div>
              </div>

              {/* Status Info */}
              <div className="flex items-center gap-4">
                <div className="p-4 bg-purple-950/60 border border-purple-500/30 rounded-full text-purple-400">
                  💼
                </div>
                <div>
                  <h4 className="text-xs text-gray-400 font-semibold uppercase">Opportunity</h4>
                  <p className="text-green-400 font-medium">Open for Internships & Full-Time Roles</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="bg-[#1f0703]/60 border border-purple-900/30 p-8 rounded-2xl backdrop-blur-sm shadow-xl hover:border-purple-500/40 transition duration-300">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Name Input */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your name"
                className="w-full px-4 py-3 bg-[#140503] border border-purple-900/40 rounded-xl text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition duration-300 placeholder-gray-500"
              />
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Your Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-[#140503] border border-purple-900/40 rounded-xl text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition duration-300 placeholder-gray-500"
              />
            </div>

            {/* Message Input */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Write your message here..."
                className="w-full px-4 py-3 bg-[#140503] border border-purple-900/40 rounded-xl text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition duration-300 placeholder-gray-500 resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold rounded-xl shadow-lg shadow-purple-900/40 transition-all duration-300 hover:scale-[1.02]"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>

    </div>
  );
};

export default Contact;
