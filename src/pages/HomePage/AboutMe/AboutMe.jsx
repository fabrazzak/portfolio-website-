"use client";

import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <section id="about"  className="relative bg-[#18191b] text-white py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.h2
          className="text-5xl md:text-6xl font-extrabold text-[#FFCB2F] text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          About Me
        </motion.h2>

        {/* Intro Section */}
        <motion.div
          className="bg-[#222429] p-10 md:p-12 rounded-xl shadow-2xl text-lg leading-relaxed mb-16"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p>
            Hey there! I'm <span className="text-[#FFCB2F] font-semibold">Abdur Razzak</span>, a passionate{" "}
            <span className="text-[#FFCB2F]">MERN Stack Developer</span> and{" "}
            <span className="text-[#FFCB2F]">WordPress Expert</span> who loves building high-performance, user-friendly
            web applications with a focus on cutting-edge technologies and seamless user experiences.
          </p>
        </motion.div>

        {/* Animated Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Programming Journey */}
          <motion.div
            className="bg-[#222429] p-10 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:bg-[#2C2F34]"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-[#FFCB2F] mb-4">🚀 My Programming Journey</h3>
            <p>
              I began as a <span className="text-[#FFCB2F]">WordPress developer</span> before diving into{" "}
              <span className="text-[#FFCB2F]">React.js</span> and <span className="text-[#FFCB2F]">Next.js</span>.
              Now, I specialize in building scalable, responsive web applications with the best user experience and UI
              design.
            </p>
          </motion.div>

          {/* Favorite Work */}
          <motion.div
            className="bg-[#222429] p-10 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:bg-[#2C2F34]"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            <h3 className="text-2xl font-semibold text-[#FFCB2F] mb-4">💡 What I Love to Work On</h3>
            <ul className="space-y-3 text-lg text-gray-300">
              <li>✅ Scalable, high-performance web applications</li>
              <li>✅ Custom WordPress themes & plugins</li>
              <li>✅ Interactive frontend animations & transitions</li>
              <li>✅ Exploring and implementing emerging technologies</li>
            </ul>
          </motion.div>

          {/* Beyond Coding */}
          <motion.div
            className="bg-[#222429] p-10 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:bg-[#2C2F34]"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold text-[#FFCB2F] mb-4">🎯 Beyond Coding</h3>
            <p>
              When I'm not coding, you'll find me watching{" "}
              <span className="text-[#FFCB2F]">cricket</span>, experimenting with{" "}
              <span className="text-[#FFCB2F]">ethical hacking</span>, or reading up on the latest in{" "}
              <span className="text-[#FFCB2F]">web design trends</span>.
            </p>
          </motion.div>

          {/* Why Work With Me */}
          <motion.div
            className="bg-[#222429] p-10 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:bg-[#2C2F34]"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          >
            <h3 className="text-2xl font-semibold text-[#FFCB2F] mb-4">🚀 Why Work With Me?</h3>
            <p>
              I bring <span className="text-[#FFCB2F]">creativity</span>, <span className="text-[#FFCB2F]">problem-solving</span>, and
              a strong sense of <span className="text-[#FFCB2F]">dedication</span> to every project. Let’s work
              together and create something extraordinary! 💛
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
