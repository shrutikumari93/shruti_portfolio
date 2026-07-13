function Resume() {
  return (
    <section
      id="resume"
      className="min-h-screen bg-[#f8fbff] px-6 py-20 text-gray-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white lg:px-16"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-primary dark:text-sky-400">
          Resume
        </h2>

        <div className="mt-3 h-1 w-24 rounded-full bg-primary dark:bg-sky-400"></div>

        <p className="mt-6 max-w-4xl leading-8 text-gray-600 dark:text-gray-300">
          A summary of my education, internship experience, and certifications
          that demonstrate my continuous learning journey and passion for
          software development.
        </p>

        {/* Timeline */}
        <div className="mt-16 grid gap-16 lg:grid-cols-2">

          {/* Education */}
          <div>
            <h3 className="mb-8 text-2xl font-bold text-gray-800 dark:text-white">
              Education
            </h3>

            {/* B.Tech */}
            <div className="relative border-l-2 border-primary pb-10 pl-8 dark:border-sky-400">
              <div className="absolute -left-[9px] top-2 h-4 w-4 rounded-full bg-primary dark:bg-sky-400"></div>

              <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                Bachelor of Technology
              </h4>

              <span className="mt-2 inline-block rounded bg-slate-200 px-3 py-1 text-sm font-semibold text-gray-900 dark:bg-slate-800 dark:text-gray-200">
                2023 - Present
              </span>

              <p className="mt-3 font-semibold text-gray-900 dark:text-gray-100">
                IMS Engineering College, Ghaziabad
              </p>

              <p className="mt-3 leading-7 text-gray-600 dark:text-gray-300">
                Pursuing B.Tech in Computer Science with a strong
                foundation in software development, databases, web technologies
                and problem-solving.
              </p>
            </div>

            {/* 12th */}
            <div className="relative border-l-2 border-primary pb-10 pl-8 dark:border-sky-400">
              <div className="absolute -left-[9px] top-2 h-4 w-4 rounded-full bg-primary dark:bg-sky-400"></div>

              <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                Senior Secondary (Science)
              </h4>

              <span className="mt-2 inline-block rounded bg-slate-200 px-3 py-1 text-sm font-semibold text-gray-900 dark:bg-slate-800 dark:text-gray-200">
                2022 - 2023
              </span>

              <p className="mt-3 font-semibold text-gray-900 dark:text-gray-100">
                Shri Guru Nanak Girls Inter College
              </p>

              <p className="mt-2 text-gray-600 dark:text-gray-300">
                UP Board • Percentage: <strong>78%</strong>
              </p>
            </div>

            {/* 10th */}
            <div className="relative border-l-2 border-primary pl-8 dark:border-sky-400">
              <div className="absolute -left-[9px] top-2 h-4 w-4 rounded-full bg-primary dark:bg-sky-400"></div>

              <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                High School
              </h4>

              <span className="mt-2 inline-block rounded bg-slate-200 px-3 py-1 text-sm font-semibold text-gray-900 dark:bg-slate-800 dark:text-gray-200">
                2020 - 2021
              </span>

              <p className="mt-3 font-semibold text-gray-900 dark:text-gray-100">
                Nav Uday Public School
              </p>

              <p className="mt-2 text-gray-600 dark:text-gray-300">
                CBSE • Percentage: <strong>68%</strong>
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div>
            <h3 className="mb-8 text-2xl font-bold text-gray-800 dark:text-white">
              Experience & Languages
            </h3>

            {/* Experience */}
            <div className="relative border-l-2 border-primary pb-10 pl-8 dark:border-sky-400">
              <div className="absolute -left-[9px] top-2 h-4 w-4 rounded-full bg-primary dark:bg-sky-400"></div>

              <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                MERN Stack Development Virtual Intern
              </h4>

              <span className="mt-2 inline-block rounded bg-slate-200 px-3 py-1 text-sm font-semibold text-gray-900 dark:bg-slate-800 dark:text-gray-200">
                EduSkills Academy
              </span>

              <p className="mt-2 italic text-gray-500 dark:text-gray-400">
                8 Weeks Virtual Internship
              </p>

              <p className="mt-4 leading-7 text-gray-600 dark:text-gray-300">
                Completed an 8-week virtual internship focused on MERN Stack
                Development. Built responsive web applications using React,
                Node.js, Express.js and MongoDB while working with REST APIs,
                CRUD operations and authentication.
              </p>
            </div>

            {/* Hindi */}
            <div className="relative border-l-2 border-primary pb-10 pl-8 dark:border-sky-400">
              <div className="absolute -left-[9px] top-2 h-4 w-4 rounded-full bg-primary dark:bg-sky-400"></div>

              <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                Hindi
              </h4>

              <span className="mt-2 inline-block rounded bg-slate-200 px-3 py-1 text-sm font-semibold text-gray-900 dark:bg-slate-800 dark:text-gray-200">
                Native
              </span>

              <p className="mt-3 text-gray-600 dark:text-gray-300">
                Native proficiency in reading, writing and speaking.
              </p>
            </div>

            {/* English */}
            <div className="relative border-l-2 border-primary pl-8 dark:border-sky-400">
              <div className="absolute -left-[9px] top-2 h-4 w-4 rounded-full bg-primary dark:bg-sky-400"></div>

              <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                English
              </h4>

              <span className="mt-2 inline-block rounded bg-slate-200 px-3 py-1 text-sm font-semibold text-gray-900 dark:bg-slate-800 dark:text-gray-200">
                Professional Working Proficiency
              </span>

              <p className="mt-3 text-gray-600 dark:text-gray-300">
                Comfortable with technical documentation, presentations and
                professional communication.
              </p>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-24">
          <h3 className="text-3xl font-bold text-gray-800 dark:text-white">
            Certifications
          </h3>

          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {/* EduSkills */}
            <CertificateCard
              title="MERN Stack Development"
              organization="EduSkills Academy"
              description="Successfully completed an 8-week virtual internship focused on MERN Stack Development."
              link="/certificates/Course_Certificate_1369133.pdf"
            />

            {/* IBM */}
            <CertificateCard
              title="IBM SkillsBuild"
              organization="IBM"
              description="Completed IBM Design AI Fundamentals certification, learning AI concepts, design thinking, and responsible AI principles."
              link="/certificates/IBMDesignAIFundamentals.pdf"
            />

            {/* GFG */}
            <CertificateCard
              title="Java Programming"
              organization="GeeksForGeeks"
              description="Completed a certification in Java programming, covering core concepts, OOP principles, and problem-solving."
              link="/certificates/gfg.pdf"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function CertificateCard({ title, organization, description, link }) {
  return (
    <div className="rounded-xl bg-white p-6 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl dark:bg-slate-900 dark:shadow-slate-950/50">
      <h4 className="text-xl font-bold text-gray-900 dark:text-white">
        {title}
      </h4>

      <p className="mt-2 font-semibold text-primary dark:text-sky-400">
        {organization}
      </p>

      <p className="mt-4 text-gray-600 dark:text-gray-300">
        {description}
      </p>

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-block rounded-lg bg-primary px-5 py-2 text-white transition hover:bg-purple-600 dark:bg-sky-600 dark:hover:bg-purple-600"
      >
        View Certificate
      </a>
    </div>
  );
}

export default Resume;