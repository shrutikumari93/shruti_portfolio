import { useState } from "react";
import { SiLeetcode } from "react-icons/si";
import ThemeToggle from "./ThemeToggle";

import {
  FaHome,
  FaUser,
  FaFileAlt,
  FaCode,
  FaProjectDiagram,
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaBars,
  FaTimes,
} from "react-icons/fa";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeSidebar = () => {
    setIsOpen(false);
  };

  // Reusable Classes
  const navLink =
    "flex items-center gap-4 rounded-lg px-4 py-3 text-gray-400 transition-all duration-300 hover:bg-primary hover:text-white hover:translate-x-2";

  const socialIcon =
    "flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-white transition-all duration-300 hover:bg-primary hover:scale-110";

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-primary text-xl text-white shadow-lg transition-all duration-300 hover:bg-primary-dark lg:hidden"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/60 lg:hidden"
          onClick={closeSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-40 h-screen w-72 overflow-y-auto bg-[#040b14] px-5 py-6 text-white transition-transform duration-300
        ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        {/* Profile */}
        <div className="flex flex-col items-center">

          <img
            src="/images/profileimage.jpg"
            alt="Shruti Kumari"
            className="h-36 w-36 rounded-full border-8 border-slate-700 object-cover"
          />

          <h2 className="mt-5 text-2xl font-bold">
            Shruti Kumari
          </h2>

          <p className="mt-2 text-sm text-gray-400">
            Software Engineer
          </p>

          {/* Social Icons */}
          <div className="mt-5 flex gap-3">

            <a
              href="https://github.com/shrutikumari93"
              target="_blank"
              rel="noreferrer"
              className={socialIcon}
            >
              <FaGithub />
            </a>

            <a
              href="http://www.linkedin.com/in/shruti-kumari93"
              target="_blank"
              rel="noreferrer"
              className={socialIcon}
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://leetcode.com/u/shrutikumari8388/"
              target="_blank"
              rel="noopener noreferrer"
                className={socialIcon}
              
              aria-label="LeetCode"
            >
              <SiLeetcode />
            </a>
            
          </div>
        </div>

        {/* Navigation */}
        <nav className="mt-10">

          <ul className="space-y-2">

            <li>
              <a
                href="#home"
                onClick={closeSidebar}
                className={navLink}
              >
                <FaHome className="text-lg" />
                Home
              </a>
            </li>

            <li>
              <a
                href="#about"
                onClick={closeSidebar}
                className={navLink}
              >
                <FaUser className="text-lg" />
                About
              </a>
            </li>

            <li>
              <a
                href="#resume"
                onClick={closeSidebar}
                className={navLink}
              >
                <FaFileAlt className="text-lg" />
                Resume
              </a>
            </li>

            <li>
              <a
                href="#skills"
                onClick={closeSidebar}
                className={navLink}
              >
                <FaCode className="text-lg" />
                Skills
              </a>
            </li>

            <li>
              <a
                href="#projects"
                onClick={closeSidebar}
                className={navLink}
              >
                <FaProjectDiagram className="text-lg" />
                Projects
              </a>
            </li>

            <li>
              <a
                href="#contact"
                onClick={closeSidebar}
                className={navLink}
              >
                <FaEnvelope className="text-lg" />
                Contact
              </a>
            </li>

          </ul>

        </nav>

 

        <div className="absolute bottom-6 left-6">
  <ThemeToggle />
</div>

      </aside>
    </>
  );
}

export default Sidebar;