import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaHeart,
} from "react-icons/fa";

import { SiLeetcode } from "react-icons/si";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white py-8 dark:border-slate-700 dark:bg-slate-900">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">

        {/* Left */}

        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold text-primary">
            Shruti Kumari
          </h3>

          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
            Building responsive and user-friendly web applications.
          </p>
        </div>

        {/* Social Icons */}

        <div className="flex items-center gap-3">

          <a
            href="https://github.com/shrutikumari93"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 text-sky-600 transition-all duration-300 hover:scale-110 hover:bg-purple-600 hover:text-white"
          >
            <FaGithub />
          </a>

          <a
            href="http://www.linkedin.com/in/shruti-kumari93"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 text-sky-600 transition-all duration-300 hover:scale-110 hover:bg-purple-600 hover:text-white"
          >
            <FaLinkedinIn />
          </a>

          <a
  href="https://leetcode.com/u/shrutikumari8388/"
  target="_blank"
  rel="noopener noreferrer"
  className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 text-sky-600 transition-all duration-300 hover:scale-110 hover:bg-purple-600 hover:text-white"
  aria-label="LeetCode"
>
  <SiLeetcode />
</a>

        </div>

      </div>

      {/* Bottom Line */}

      <div className="mt-6 border-t border-slate-200 pt-5 text-center dark:border-slate-700">

        <p className="flex flex-wrap items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-400">
          © {year} Shruti Kumari • Made with
          <FaHeart className="text-red-500" />
          using React & Tailwind CSS
        </p>

      </div>

    </footer>
  );
}

export default Footer;