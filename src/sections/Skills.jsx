import {
  FaLaptopCode,
  FaServer,
  FaDatabase,
  FaJava,
  FaTools,
  FaBook,
} from "react-icons/fa";

function Skills() {
  const skills = [
    {
      icon: <FaLaptopCode />,
      title: "Frontend Development",
      description:
        "Building responsive and interactive user interfaces using modern frontend technologies.",
      tech: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React.js",
        "Tailwind CSS",
        "Bootstrap",
      ],
    },
    {
      icon: <FaServer />,
      title: "Backend Development",
      description:
        "Developing scalable backend applications and RESTful APIs using Node.js.",
      tech: [
        "Node.js",
        "Express.js",
        "REST API",
        "JWT",
        "CRUD",
      ],
    },
    {
      icon: <FaDatabase />,
      title: "Database",
      description:
        "Working with SQL and NoSQL databases to manage application data efficiently.",
      tech: [
        "MongoDB",
        "MySQL",
        "PostgreSQL",
      ],
    },
    {
      icon: <FaJava />,
      title: "Programming Languages",
      description:
        "Strong programming fundamentals for solving real-world software problems.",
      tech: [
        "Java",
        "JavaScript",
        "C",
      ],
    },
    {
      icon: <FaTools />,
      title: "Tools & Platforms",
      description:
        "Tools used for development, collaboration and version control.",
      tech: [
        "Git",
        "GitHub",
        "VS Code",
        "Postman",
        "Figma",
      ],
    },
    {
      icon: <FaBook />,
      title: "Core Computer Science",
      description:
        "Fundamental concepts that strengthen software development skills.",
      tech: [
        "DSA",
        "OOP",
        "DBMS",
        "Operating System",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="bg-[#f8fbff] py-20 px-6 lg:px-16 dark:bg-slate-950"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}

        <h2 className="text-4xl font-bold text-primary">
          Skills
        </h2>

        <div className="mt-3 h-1 w-24 rounded-full bg-gradient-to-r from-sky-500 to-cyan-500"></div>

        <p className="mt-6 max-w-3xl leading-8 text-gray-600 dark:text-gray-300">
          My technical expertise includes frontend development, backend
          technologies, databases, programming languages, development tools,
          and core computer science fundamentals.
        </p>

        {/* Skill Cards */}

        <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {skills.map((skill, index) => (

            <div
              key={index}
              className="group rounded-2xl border border-sky-100 bg-white p-7 shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-purple-300 hover:shadow-2xl dark:border-slate-700 dark:bg-slate-900"
            >

              {/* Icon */}

              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-r from-sky-500 to-cyan-500 text-3xl text-white shadow-lg transition-all duration-300 group-hover:from-purple-600 group-hover:to-fuchsia-600">

                {skill.icon}

              </div>

              {/* Title */}

              <h3 className="text-xl font-bold text-gray-800 dark:text-white">

                {skill.title}

              </h3>

              {/* Description */}

              <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300">

                {skill.description}

              </p>

              {/* Skills */}

              <div className="mt-6 flex flex-wrap gap-3">

                {skill.tech.map((item) => (

                  <span
                    key={item}
                    className="cursor-pointer rounded-full bg-sky-100 px-4 py-2 text-sm font-medium text-sky-700 transition-all duration-300 hover:scale-105 hover:bg-purple-600 hover:text-white"
                  >
                    {item}
                  </span>

                ))}

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;