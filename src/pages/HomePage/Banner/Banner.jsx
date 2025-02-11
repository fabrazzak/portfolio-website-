import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import profileImg from "../../../assets/my-profile-picture.jpg";
import { FaFacebook, FaGithub, FaLinkedin, FaNodeJs, FaTwitter } from "react-icons/fa";



import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiDaisyui, SiNextdotjs, SiMongodb, SiFirebase, SiExpress } from "react-icons/si";

const HtmlIcon = () => <span>HTML5 <FaHtml5 size={40} color="#E44D26" /></span>;
const CssIcon = () => <span>CSS3 <FaCss3Alt size={40} color="#1572B6" /></span>;
const TailwindCssIcon = () => <span>Tailwind CSS <SiTailwindcss size={40} color="#38B2AC" /></span>;
const DaisyUIIcon = () => <span>DaisyUI <SiDaisyui size={40} color="#F6E05E" /></span>;
const JsIcon = () => <span>JS <FaJs size={40} color="#F7DF1E" /></span>;
const ReactIcon = () => <span>React <FaReact size={40} color="#61DAFB" /></span>;
const NextJsIcon = () => <span>Next.js <SiNextdotjs size={40} color="#000000" /></span>;
const MongoDbIcon = () => <span>MongoDB <SiMongodb size={40} color="#47A248" /></span>;
const FirebaseIcon = () => <span>Firebase <SiFirebase size={40} color="#FFCA28" /></span>;
const ExpressJsIcon = () => <span>Express.js <FaNodeJs size={40} color="#8CC84B" /></span>;
const BootstrapIcon = () => <span>Bootstrap <FaBootstrap size={40} color="#563D7C" /></span>;
const MongooseIcon = () => <span>Mongoose <FaDatabase size={40} color="#47A248" /></span>;
const TypeScriptIcon = () => <span>TypeScript <SiTypescript size={40} color="#007ACC" /></span>;
const AntDesignIcon = () => <span>Ant Design <SiAntdesign size={40} color="#0170FE" /></span>;
const ShadCNIcon = () => <span>ShadCN <FaReact size={40} color="#61DAFB" /></span>;  {/* Example for ShadCN */}
const ReduxIcon = () => <span>Redux <FaReact size={40} color="#764ABC" /></span>; {/* Example for Redux */}





// Create the background animation with all skill icons
const Banner = () => {

    const [resetKey, setResetKey] = useState(0);

    const socialLinks = [
        { id: "github", icon: <FaGithub />, url: "https://github.com/fabrazzak", color: "#333" },
        { id: "linkedin", icon: <FaLinkedin />, url: "https://www.linkedin.com/in/fabrazzak/", color: "#0077B5" },
        { id: "twitter", icon: <FaTwitter />, url: "https://twitter.com", color: "#1DA1F2" },
        { id: "facebook", icon: <FaFacebook />, url: "https://www.facebook.com/Abdurrazzak309/", color: "#1877F2" },
    ];
    useEffect(() => {
        // GSAP Background Gradient Animation (vibrant and colorful with black as the final color)
        gsap.to(".bg-gradient", {
            background: "linear-gradient(50deg, #000000, #1A2530, #021526,#18191b)",
            duration: 15,
            repeat: -1,
            yoyo: true,
            ease: "linear",
        });

        // GSAP animations for floating SVG icons
        gsap.fromTo(
            ".floating-icon",
            {
                opacity: 0,
                y: 100,
            },
            {
                opacity: 1,
                y: 0,
                duration: 10,
                repeat: -1,
                yoyo: true,
                stagger: 0.3,
                ease: "power2.inOut",
            }
        );
    }, []);


    const TypingEffect = ({ text, delay = 0, typingSpeed = 200, resetKey }) => {
        const [displayedText, setDisplayedText] = useState("");
        const [index, setIndex] = useState(0);
        const [isCursorVisible, setIsCursorVisible] = useState(true); // Track cursor visibility

        useEffect(() => {
            let interval;
            if (index < text.length) {
                interval = setInterval(() => {
                    setDisplayedText((prev) => prev + text[index]);
                    setIndex((prevIndex) => prevIndex + 1);
                }, typingSpeed);
            } else {
                // After typing is done, hide cursor for a short period before resetting
                setIsCursorVisible(false);
                setTimeout(() => {
                    setDisplayedText(""); // Reset text
                    setIndex(0);
                    setIsCursorVisible(true); // Show the cursor again
                    setResetKey((prevKey) => prevKey + 0); // Trigger resetKey change to restart
                }, 3000); // Delay before restarting the typing effect
            }

            return () => clearInterval(interval); // Cleanup interval on reset
        }, [text, index, typingSpeed, resetKey]);

        return (
            <span className="text-[#ffcc00]">
                {displayedText}
                {/* Show cursor after typing */}
                {isCursorVisible && <span className="cursor">|</span>}
            </span>
        );
    };


    return (
        <section id="banner" className="h-screen content-center bg-black bg-opacity-50 gap-10 grid grid-cols-1 md:grid-cols-2 text-white relative overflow-hidden">
            {/* Animated Gradient Background */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient z-[-1]" />

            {/* Left Content Section */}
            <div className="flex flex-col justify-center items-start text-center md:text-left px-6 relative z-10 max-w-5xl mx-auto">
                {/* Animated Heading */}
                <motion.h1
                    className="text-5xl font-bold"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >Hi,
                    <TypingEffect text="I'm Abdur Razzak" delay={2} resetKey={resetKey} />
                </motion.h1>

                {/* Animated Typing Effect Subtitle */}
                <motion.p
                    className="text-xl mt-4"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 3 }}
                >MERN Stack Developer
                    {/* <TypingEffect
                        text=" | WordPress Expert"
                        delay={0.9}
                        resetKey={resetKey}
                    /> */}
                </motion.p>


                {/* Animated Button */}
                <motion.a
                   href="https://drive.google.com/file/d/13wGGxM6y_-M5FT3jY3LOTccnx2BZlrm4/view?usp=sharing"
                    className="mt-6 bg-[#FFCB2F] hover:[#FFCB2F] text-black font-bold px-8 py-3 rounded-lg shadow-lg transition"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
                    whileHover={{ scale: 1.1, boxShadow: "0px 10px 20px rgba(149, 56, 226, 0.3)" }}
                    whileTap={{ scale: 0.95 }}
                >
                    Download Resume
                </motion.a>

                <div className="mt-6 flex space-x-4">
                    {socialLinks.map(({ id, icon, url, color }) => (
                        <motion.a
                            key={id}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white text-3xl p-2 rounded-lg transition-all"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
                            whileHover={{ scale: 1.2, color }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {icon}
                        </motion.a>
                    ))}
                </div>
            </div>

            {/* Right Image Section */}
            <div className=" md:block relative z-10 mx-auto">
                <motion.img
                    src={profileImg} // Replace with your image URL
                    alt="Abdur Razzak"
                    className="w-96 h-96 object-cover rounded-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 1 }}
                    onMouseMove={{ scale: 1.1 }}  // Added hover scale effect
                />
            </div>

            {/* Floating Background Icons */}
            <div className="absolute top-0 left-0 w-full h-full z-[-1]">
                {[...Array(10)].map((_, index) => (
                    <div
                        key={index}
                        className="floating-icon absolute"
                        style={{
                            top: `${Math.random() * 80}%`, // Random top position
                            left: `${Math.random() * 80}%`, // Random left position
                            opacity: Math.random() * 0.5 + 0.3, // Random opacity for a natural effect
                            animation: `float ${Math.random() * 2 + 5}s ease-in-out infinite`, // Random float timing
                        }}
                    >
                        {/* Randomize Icons */}
                        {index % 16 === 0 && <HtmlIcon />}
                        {index % 16 === 1 && <CssIcon />}
                        {index % 16 === 2 && <TailwindCssIcon />}
                        {index % 16 === 3 && <DaisyUIIcon />}
                        {index % 16 === 4 && <JsIcon />}
                        {index % 16 === 5 && <ReactIcon />}
                        {index % 16 === 6 && <NextJsIcon />}
                        {index % 16 === 7 && <MongoDbIcon />}
                        {index % 16 === 8 && <FirebaseIcon />}
                        {index % 16 === 9 && <ExpressJsIcon />}
                        {index % 16 === 10 && <BootstrapIcon />}
                        {index % 16 === 11 && <MongooseIcon />}
                        {index % 16 === 12 && <TypeScriptIcon />}
                        {index % 16 === 13 && <AntDesignIcon />}
                        {index % 16 === 14 && <ShadCNIcon />}
                        {index % 16 === 15 && <ReduxIcon />}


                    </div>
                ))}
            </div>
        </section>
    );
};

export default Banner;
