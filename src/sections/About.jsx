import {
  FaUser,
  FaGraduationCap,
  FaLaptopCode,
  FaMapMarkerAlt,
  FaEnvelope,
  FaCheckCircle,
} from "react-icons/fa";

function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-white py-20 px-6 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-primary">About Me</h2>

        <div className="mt-3 h-1 w-24 rounded-full bg-primary"></div>

        <p className="mt-6 max-w-4xl leading-8 text-gray-600">
          I'm a final-year B.Tech student majoring in Computer Science at IMS
          Engineering College, Ghaziabad. Passionate about software development
          and modern web technologies, I enjoy building responsive,
          user-friendly web applications and solving real-world problems
          through clean and efficient code.
        </p>

        {/* About Content */}
        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
          {/* Left Image */}
          <div className="flex justify-center">
            <img
              src="/images/profileimage.jpg"
              alt="Shruti Kumari"
              className="w-[360px] rounded-xl shadow-xl object-cover"
            />
          </div>

          {/* Right Content */}
          <div>
            <h3 className="text-3xl font-bold text-gray-800">
            Full Stack Web Developer
            </h3>

            <p className="mt-4 italic leading-8 text-gray-600">
              I am passionate about building scalable web applications and
              continuously exploring modern technologies. I believe in writing
              clean, maintainable code and creating solutions that provide
              meaningful user experiences.
            </p>

            {/* Personal Information */}
            <div className="mt-8 grid gap-x-10 gap-y-5 sm:grid-cols-2">
              <div className="flex items-center gap-3">
                <FaUser className="text-primary" />
                <span>
                  <strong>Name:</strong> Shruti Kumari
                </span>
              </div>

              <div className="flex items-center gap-3">
                <FaLaptopCode className="text-primary" />
                <span>
                  <strong>Role:</strong> Software Engineer
                </span>
              </div>

              <div className="flex items-center gap-3">
                <FaGraduationCap className="text-primary" />
                <span>
                  <strong>Degree:</strong> B.Tech (Computer Science)
                </span>
              </div>

              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-primary" />
                <span>
                  <strong>Location:</strong> Ghaziabad, U.P.
                </span>
              </div>

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-primary text-lg" />
                <span>
                  <strong>Email:</strong> shrutiverma9355@gmail.com
                </span>
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-primary" />
                <span>
                  <strong>Status:</strong> Open to Internship & Full-time
                </span>
              </div>
            </div>

            {/* Bottom Description */}
            <p className="mt-8 leading-8 text-gray-600">
              My experience includes developing full-stack web applications
              using the MERN stack, integrating REST APIs, and designing
              responsive interfaces with React and Tailwind CSS. I am actively
              seeking internship and entry-level opportunities where I can
              apply my skills, learn from experienced professionals, and
              contribute to real-world software projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;