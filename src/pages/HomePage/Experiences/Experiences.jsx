import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      position: "Front-End Web Developer (remote)",
      company: "SEOOCEAN, United States",
      duration: "02.02.2024 – 06.09.2024",
      responsibilities: [
        "Transform UI/UX designs into responsive, user-friendly websites using Sass, Flexbox, and Grid.",
        "Enhance website performance, accessibility, and responsiveness across devices.",
        "Collaborate with designers and SEO specialists to deliver impactful web interfaces.",
        "Develop clean, reusable CSS components for efficient and scalable design solutions."
      ]
    },
    {
        "position": "Junior Full Stack Web Developer (Upwork)",
        "company": "Upwork Freelancing Platform",
        "duration": "12.2021 – Present",
        "responsibilities": [
          "Deliver seamless full-stack web development solutions with expertise in MERN stack and WordPress customization.",
          "Develop responsive and user-friendly websites using React, Next.js, and WordPress, ensuring compatibility across all devices.",
          "Work closely with clients to understand their unique needs and deliver tailored solutions to meet project requirements.",
          "Utilize SEO best practices and performance optimization techniques to enhance website rankings and reduce load times."
        ]
      }
      
    
  ];

  return (
    <section id="experience" className="bg-gradient-to-r from-[#1e1e1e] to-[#18191b] text-white py-20 px-6 md:px-12">
      {/* About Me Section */}
    

      {/* My Experience Section */}
      <h2 className="text-5xl md:text-6xl font-extrabold text-[#FFCB2F] text-center mb-16 tracking-wide">
        My Experience
      </h2>

      {/* Experience list with motion animation */}
      <div className="experience-list space-y-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="experience-item flex justify-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.3 }}
          >
            <div className="experience-card p-8 bg-[#2D2D2D] rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105 w-full max-w-4xl">
              <div className="flex flex-col sm:flex-row sm:space-x-6">
                {/* Left: Icon/Position */}
                <div className="flex-none w-full sm:w-1/3">
                  <div className="text-4xl text-[#FFCB2F] mb-4">
                    {/* You can use an icon here or leave it empty */}
                  </div>
                  <h3 className="text-2xl font-semibold text-[#FFCB2F]">{exp.position}</h3>
                  <p className="text-lg text-white mt-2">{exp.company}</p>
                  <p className="text-md text-white mb-4">{exp.duration}</p>
                </div>

                {/* Right: Responsibilities */}
                <div className="flex-1">
                  <ul className="list-disc pl-6 text-white text-lg">
                    {exp.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="mb-2">{responsibility}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
