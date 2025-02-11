import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#18191b] text-gray-400 py-4 px-6">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Copyright Text */}
        <p className="text-sm">&copy; {new Date().getFullYear()} Abdur Razzak. All rights reserved.</p>

        {/* Social Links */}
        <div className="flex gap-6 text-xl">
          <a
            href="https://github.com/fabrazzak"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/1abdur-razzak/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.facebook.com/Abdurrazzak309/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition duration-300"
          >
            <FaFacebook />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
