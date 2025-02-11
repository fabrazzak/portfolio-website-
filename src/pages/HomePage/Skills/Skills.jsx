import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { FaCss3Alt, FaHtml5, FaNodeJs, FaReact } from 'react-icons/fa';
import { SiAntdesign, SiFirebase, SiGit, SiGithub, SiMongodb, SiNextdotjs, SiTailwindcss, SiTypescript } from 'react-icons/si';

const Skills = () => {
    const skillsContainer = useRef(null);
    const parentDiv = useRef(null);
    const [parentHeight, setParentHeight] = useState(180); // Default height

    const allSkills = [
        { name: "HTML5", icon: <FaHtml5 size={40} color="#E44D26" /> },
        { name: "CSS3", icon: <FaCss3Alt size={40} color="#1572B6" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss size={40} color="#38B2AC" /> },
        { name: "React", icon: <FaReact size={40} color="#61DAFB" /> },
        { name: "Next.js", icon: <SiNextdotjs size={40} color="#000000" /> },
        { name: "Node.js", icon: <FaNodeJs size={40} color="#8CC84B" /> },
        { name: "MongoDB", icon: <SiMongodb size={40} color="#47A248" /> },
        { name: "Firebase", icon: <SiFirebase size={40} color="#FFCA28" /> },
        { name: "Git", icon: <SiGit size={40} color="#F1502F" /> },
        { name: "GitHub", icon: <SiGithub size={40} color="#181717" /> },
        { name: "Typescript", icon: <SiTypescript size={40} color="#007ACC" /> },
        { name: "Ant Design", icon: <SiAntdesign size={40} color="#0170FE" /> },
    ];

    useEffect(() => {
        const container = skillsContainer.current;
        const items = container.children;

        gsap.to(container, {
            x: '-100%',
            duration: 20,
            repeat: -1,
            ease: 'power1.inOut',
            onUpdate: () => {
                let closestIndex = -1;
                let minDistance = Infinity;
                const centerX = window.innerWidth / 2;

                Array.from(items).forEach((item, index) => {
                    const rect = item.getBoundingClientRect();
                    const distance = Math.abs(centerX - (rect.left + rect.width / 2));
                    if (distance < minDistance) {
                        minDistance = distance;
                        closestIndex = index;
                    }
                });

                Array.from(items).forEach((item, index) => {
                    // Scale up the middle (closest) item
                    if (index === closestIndex) {
                        gsap.to(item, { scale: 1.4, margin: "0 40px", duration: 0.3 });
                        setParentHeight(220); // Adjust parent height when middle card grows
                    } else {
                        gsap.to(item, { scale: 1, margin: "0 10px", duration: 0.3,});
                        setParentHeight(180); // Reset height for other items
                    }
                });
            },
        });
    }, []);

    // Handle hover effect (using GSAP)
    const handleMouseEnter = (e) => {
        gsap.to(e.target, { scale: 1.4, duration: 0.3 });
    };

    const handleMouseLeave = (e) => {
        gsap.to(e.target, { scale: 1, duration: 0.3 });
    };

    return (
        <section id="skills" className="bg-gradient-to-r from-[#1e1e1e] to-[#18191b] text-white py-20 px-6 md:px-12">
            <h2 className="text-5xl md:text-6xl font-extrabold text-[#FFCB2F] text-center mb-16">
                My Skills
            </h2>

            {/* Parent div with dynamic height */}
            <div
                ref={parentDiv}
                style={{ height: `${parentHeight}px`, overflow: "hidden", transition: "height 0.3s ease-in-out" }}
                className="flex justify-center items-center"
            >
                <div className="overflow-hidden w-full">
                    <div ref={skillsContainer} className="skills-container flex gap-6">
                        {allSkills.map((skill, index) => (
                            <div
                                key={index}
                                className="skill-item  flex items-center justify-center flex-col p-8 bg-white/10 backdrop-blur-lg rounded-xl shadow-xl transition-transform"
                                style={{ flex: 1 }}
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                {skill.icon}
                                <p className="text-lg text-white mt-4 font-semibold">{skill.name}</p>
                            </div>
                        ))}

                        {allSkills.map((skill, index) => (
                            <div
                                key={index + allSkills.length}
                                className="skill-item flex items-center justify-center flex-col p-8 bg-white/10 backdrop-blur-lg rounded-xl shadow-xl transition-transform "
                                style={{ flex: 1 }}
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                {skill.icon}
                                <p className="text-lg text-white mt-4 font-semibold">{skill.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
