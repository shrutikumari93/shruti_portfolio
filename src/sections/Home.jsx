import { TypeAnimation } from "react-type-animation";
import { FaDownload, FaArrowRight } from "react-icons/fa";

function Home() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/profileimage.jpg')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Hero Content */}
      <div className="relative z-10 px-6 text-center text-white">
        <p className="mb-3 text-lg font-medium text-primary">
          Hello, I'm
        </p>

        <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
          Shruti Kumari
        </h1>

        {/* Typing Animation */}
        <div className="mt-5 text-xl sm:text-2xl md:text-3xl">
          <span>I'm a </span>

          <TypeAnimation
            sequence={[
              "Frontend Developer",
              1500,
              "Web Developer",
              1500,
              "MERN Stack Developer",
              1500,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="font-semibold text-primary"
          />
        </div>

        {/* Short Introduction */}
        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-300 sm:text-lg">
          I build responsive and user-friendly web applications using modern
          technologies such as React and the MERN stack.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="#projects"
            className="flex items-center gap-2 rounded-lg bg-cyan-600 px-6 py-3 font-medium text-white transition hover:bg-cyan-700"
          >
            View Projects
            <FaArrowRight />
          </a>

          <a
            href="/Shruti_ResumeFullStackUp.pdf"
            download
            className="flex items-center gap-2 rounded-lg border-2 border-cyan-500 px-6 py-3 font-medium text-white transition hover:bg-cyan-500"
          >
            <FaDownload />
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;