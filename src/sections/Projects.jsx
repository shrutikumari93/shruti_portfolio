import {
  FaGithub,
  FaExternalLinkAlt,
  FaStar,
} from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title: "AI Career Intelligence Platform",
      image: "/images/ai.png",
      featured: true,
      description:
        "An AI-powered MERN platform that analyzes resumes and job descriptions, provides ATS insights, generates interview questions, and offers personalized career guidance using Google Gemini AI.",
      tech: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Gemini AI",
        "JWT",
      ],
      github: "https://github.com/shrutikumari93/Ai_Resume",
      demo: "https://ai-resume-lime-phi.vercel.app/",
    },
    {
      title: "Tic Tac Toe Game",
      image: "/images/tictac.png",
      description:
        "A simple 2-player TicTacToe game built using Java and Swing with a user-friendly interface.",
      tech: ["Java", "Swing", "OOP"],
      github: "https://github.com/shrutikumari93/TicTacToeGame/",
      demo: "https://github.com/shrutikumari93/TicTacToeGame/",
    },
    {
      title: "CraftShop Website",
      image: "/images/craft.jpg",
      description:
        "Modern responsive business website built with React and Tailwind CSS featuring reusable components and clean UI.",
      tech: ["React", "Tailwind", "JavaScript"],
      github: "https://github.com/shrutikumari93/craft_shop_website",
      demo: "https://shrutikumari93.github.io/craft_shop_website/",
    },
    // {
    //   title: "Personal Portfolio",
    //   image: "/images/portfolio.jpg",
    //   description:
    //     "Responsive developer portfolio showcasing projects, resume, certifications and skills with dark/light mode support.",
    //   tech: ["React", "Tailwind", "JavaScript"],
    //   github: "#",
    //   demo: "#",
    // },
  ];

  const featured = projects[0];
  const others = projects.slice(1);

  return (
    <section
      id="projects"
      className="bg-[#f8fbff] py-20 px-6 lg:px-16 dark:bg-slate-950"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}

        <h2 className="text-4xl font-bold text-primary">
          Projects
        </h2>

        <div className="mt-3 h-1 w-24 rounded-full bg-gradient-to-r from-sky-500 to-cyan-500"></div>

        <p className="mt-6 max-w-3xl text-gray-600 leading-8 dark:text-gray-300">
          A collection of projects demonstrating my expertise in frontend,
          full-stack development, Java programming and AI-powered web
          applications.
        </p>

        {/* ================= Featured Project ================= */}

        <div className="group mt-14 overflow-hidden rounded-3xl border border-sky-100 bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-purple-300 hover:shadow-2xl dark:border-slate-700 dark:bg-slate-900">

          <div className="grid lg:grid-cols-2">

            {/* Image */}

            <div className="overflow-hidden">

              <img
                src={featured.image}
                alt={featured.title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />

            </div>

            {/* Content */}

            <div className="p-10">

              <span className="inline-flex items-center gap-2 rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-700">
                <FaStar />
                Featured Project
              </span>

              <h3 className="mt-6 text-3xl font-bold text-gray-800 dark:text-white">
                {featured.title}
              </h3>

              <p className="mt-5 leading-8 text-gray-600 dark:text-gray-300">
                {featured.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">

                {featured.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-sky-100 px-4 py-2 text-sm font-medium text-sky-700 transition hover:bg-purple-600 hover:text-white"
                  >
                    {item}
                  </span>
                ))}

              </div>

              <div className="mt-10 flex gap-4">

                <a
                  href={featured.demo}
                  className="flex items-center gap-2 rounded-lg bg-sky-600 px-6 py-3 font-semibold text-white transition hover:bg-purple-600"
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </a>

                <a
                  href={featured.github}
                  className="flex items-center gap-2 rounded-lg border border-sky-500 px-6 py-3 font-semibold text-sky-700 transition hover:border-purple-600 hover:bg-purple-600 hover:text-white dark:text-white"
                >
                  <FaGithub />
                  GitHub
                </a>

              </div>

            </div>

          </div>

        </div>

        {/* ================= Other Projects ================= */}

        <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {others.map((project) => (

            <div
              key={project.title}
              className="group overflow-hidden rounded-2xl border border-sky-100 bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-purple-300 hover:shadow-2xl dark:border-slate-700 dark:bg-slate-900"
            >

              <div className="overflow-hidden">

                <img
                  src={project.image}
                  alt={project.title}
                  className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
                />

              </div>

              <div className="p-6">

                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                  {project.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-7 dark:text-gray-300">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">

                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-sky-100 px-3 py-1 text-sm font-medium text-sky-700 transition hover:bg-purple-600 hover:text-white"
                    >
                      {item}
                    </span>
                  ))}

                </div>

                <div className="mt-8 flex justify-between">

                  <a
                    href={project.demo}
                    className="flex items-center gap-2 font-semibold text-sky-600 transition hover:text-purple-600"
                  >
                    <FaExternalLinkAlt />
                    Demo
                  </a>

                  <a
                    href={project.github}
                    className="flex items-center gap-2 font-semibold text-sky-600 transition hover:text-purple-600"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;