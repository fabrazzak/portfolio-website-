import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo-2.png";
import { FaBars, FaTimes, FaHome, FaUser, FaTools, FaBriefcase, FaProjectDiagram, FaPhone } from "react-icons/fa"; // Import icons
import { HashLink } from "react-router-hash-link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-[#1F1F1F] text-white shadow-lg sticky top-0 z-30">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img className="w-24" src={logo} alt="Logo" />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex space-x-6 text-lg font-medium">
          {[
            { name: "Home", to: "/#banner", icon: <FaHome /> },
            { name: "About Me", to: "/#about", icon: <FaUser /> },
            { name: "My Skill", to: "/#skills", icon: <FaTools /> },
            { name: "Experience", to: "/#experience", icon: <FaBriefcase /> },
            { name: "Projects", to: "/#projects", icon: <FaProjectDiagram /> },
            { name: "Contact", to: "/#contact", icon: <FaPhone /> }
          ].map((item, index) => (
            <li key={index} className="flex items-center space-x-2">             
              <HashLink  className={({ isActive }) =>
                  `flex gap-2  flex-row items-center hover:text-gray-300 transition-all duration-300 ${isActive ? "text-purple-400" : "text-white"}`
                }
                to={item.to}
                scroll={(el) => el.scrollIntoView({ behavior: 'auto', block: 'end' })}
              >
               
               <span className="flex  gap-2 content-center items-center"> {item.icon} {item.name}</span>
              </HashLink>;
            </li>
          ))}
        </ul>

        {/* Resume Button */}
        <a
          href="https://drive.google.com/file/d/13wGGxM6y_-M5FT3jY3LOTccnx2BZlrm4/view?usp=sharing"
          className="hidden lg:inline-block bg-[#FFCB2F] text-black font-bold px-5 py-2 rounded-md transition-all duration-300"
        >
          Download Resume
        </a>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-2xl focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-[#1F1F1F] shadow-md py-4">
          <ul className="flex flex-col items-center space-y-4 text-lg font-medium">
            {[
               { name: "Home", to: "/#banner", icon: <FaHome /> },
               { name: "About Me", to: "/#about", icon: <FaUser /> },
               { name: "My Skill", to: "/#skills", icon: <FaTools /> },
               { name: "Experience", to: "/#experience", icon: <FaBriefcase /> },
               { name: "Projects", to: "/#projects", icon: <FaProjectDiagram /> },
               { name: "Contact", to: "/#contact", icon: <FaPhone /> }
            ].map((item, index) => (
              <li key={index} className="flex items-center space-x-2">
                <HashLink
                  to={item.to}
                  className="flex gap-2  items-center hover:text-gray-300 transition-all duration-300 text-white"
                  onClick={toggleMenu}
                >
                  {item.icon}
                  <span >{item.name}</span>
                </HashLink>
              </li>
            ))}
          </ul>

          <div className="text-center mt-4">
            <a
              href="https://drive.google.com/file/d/13wGGxM6y_-M5FT3jY3LOTccnx2BZlrm4/view?usp=sharing"
              className="bg-[#FFCB2F] text-black px-5 py-2 rounded-md font-semibold hover:bg-yellow-400 transition-all duration-300"
            >
            Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
