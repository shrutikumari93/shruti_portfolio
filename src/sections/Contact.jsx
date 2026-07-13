import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
} from "react-icons/fa";

function Contact() {
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    setStatus("Sending...");
    setIsSending(true);

    const formData = new FormData(e.target);

    
    formData.append(
      "access_key",
      "import.meta.env.VITE_WEB3FORMS_ACCESS_KEY"
    );

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (data.success) {
        setStatus("Message sent successfully!");
        e.target.reset();
      } else {
        console.error("Web3Forms Error:", data);
        setStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("Failed to send message. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="bg-[#f8fbff] px-6 py-20 lg:px-16 dark:bg-slate-950"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-primary">
          Contact
        </h2>

        <div className="mt-3 h-1 w-24 rounded-full bg-primary"></div>

        <p className="mt-6 max-w-3xl leading-8 text-gray-600 dark:text-gray-300">
          I'm always interested in discussing new opportunities, internships,
          freelance projects, or collaborations. Feel free to reach out.
        </p>

        <div className="mt-14 grid gap-10 lg:grid-cols-2">

          {/* Contact Information */}
          <div className="rounded-2xl bg-white p-8 shadow-lg dark:bg-slate-900">
            <ContactItem
              icon={<FaMapMarkerAlt />}
              title="Location"
              text="Ghaziabad, Uttar Pradesh, India"
            />

            <ContactItem
              icon={<FaEnvelope />}
              title="Email"
              text="shrutiverma9355@gmail.com"
            />

            <ContactItem
              icon={<FaPhoneAlt />}
              title="Phone"
              text="+91 9355659927"
            />

            <h3 className="mb-4 mt-10 text-xl font-semibold dark:text-white">
              Connect With Me
            </h3>

            <div className="flex gap-4">
              <a
                href="https://github.com/shrutikumari93"
                target="_blank"
                rel="noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-100 text-xl text-sky-600 transition hover:bg-purple-600 hover:text-white"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>

              <a
                href="YOUR_LINKEDIN_URL"
                target="_blank"
                rel="noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-100 text-xl text-sky-600 transition hover:bg-purple-600 hover:text-white"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-2xl bg-white p-8 shadow-lg dark:bg-slate-900">
            <form onSubmit={sendEmail} className="space-y-6">

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-sky-500 dark:bg-slate-800 dark:text-white"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-sky-500 dark:bg-slate-800 dark:text-white"
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-sky-500 dark:bg-slate-800 dark:text-white"
              />

              <textarea
                name="message"
                rows="6"
                placeholder="Write your message..."
                required
                className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-sky-500 dark:bg-slate-800 dark:text-white"
              />

              <button
                type="submit"
                disabled={isSending}
                className="flex items-center gap-2 rounded-lg bg-sky-600 px-8 py-3 font-semibold text-white transition hover:bg-purple-600 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <FaPaperPlane />
                {isSending ? "Sending..." : "Send Message"}
              </button>

              {status && (
                <p
                  className={`font-medium ${
                    status.includes("successfully")
                      ? "text-green-600"
                      : status.includes("Failed")
                      ? "text-red-600"
                      : "text-sky-600"
                  }`}
                >
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({ icon, title, text }) {
  return (
    <div className="mb-8 flex items-start gap-5">
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-sky-100 text-2xl text-sky-600">
        {icon}
      </div>

      <div>
        <h3 className="text-xl font-semibold dark:text-white">
          {title}
        </h3>

        <p className="mt-2 text-gray-600 dark:text-gray-300">
          {text}
        </p>
      </div>
    </div>
  );
}

export default Contact;