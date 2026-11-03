import { useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle2 } from "lucide-react";
import SectionHeading from "../components/SectionHeading";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const savedMessages = JSON.parse(
      localStorage.getItem("portfolioContacts") || "[]",
    );

    const newMessage = {
      ...form,
      id: Date.now(),
      submittedAt: new Date().toISOString(),
    };

    localStorage.setItem(
      "portfolioContacts",
      JSON.stringify([...savedMessages, newMessage]),
    );

    setForm(initialForm);
    setSuccess("Your message has been saved successfully!");

    setTimeout(() => setSuccess(""), 4000);
  };

  const inputStyle =
    "mt-2 w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400";

  return (
    <section
      id="contact"
      className="border-t border-slate-800 px-6 py-24 sm:px-12 lg:px-16"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Have a project in mind?"
          title="Contact"
          accent="Me"
        />

        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h3 className="text-2xl font-bold text-white">
              Let's work together!
            </h3>

            <p className="mt-4 max-w-md leading-8 text-slate-400">
              Have a project idea, a question or an opportunity? Send me a
              message through this contact form.
            </p>

            <div className="mt-8 space-y-5">
              {/* Email */}
              <div className="flex items-center gap-4">
                <span className="rounded-xl border border-slate-700 p-3 text-cyan-300">
                  <Mail size={20} />
                </span>
                <div>
                  <p className="text-xs text-slate-500">Email</p>
                  <p className="mt-1 text-white">
                    soumyaranjanmohanty9784@gmail.com
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4">
                <span className="rounded-xl border border-slate-700 p-3 text-cyan-300">
                  <Phone size={20} />
                </span>
                <div>
                  <p className="text-xs text-slate-500">Phone</p>
                  <p className="mt-1 text-white">9938128045</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4">
                <span className="rounded-xl border border-slate-700 p-3 text-cyan-300">
                  <MapPin size={20} />
                </span>
                <div>
                  <p className="text-xs text-slate-500">Location</p>
                  <p className="mt-1 text-white">Bhubaneswar, Odisha, India</p>
                </div>
              </div>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/soumya-ranjan-mohanty-960020270?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <span className="rounded-xl border border-slate-700 p-3 text-cyan-300 group-hover:border-cyan-400 transition">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2ZM8.34 18H5.67V9.5h2.67ZM7 8.34a1.55 1.55 0 1 1 0-3.1 1.55 1.55 0 0 1 0 3.1ZM18.33 18h-2.66v-4.14c0-.99-.02-2.26-1.38-2.26-1.39 0-1.6 1.08-1.6 2.19V18h-2.67V9.5h2.56v1.16h.04a2.81 2.81 0 0 1 2.52-1.38c2.7 0 3.19 1.78 3.19 4.09Z" />
                  </svg>
                </span>
                <div>
                  <p className="text-xs text-slate-500">LinkedIn</p>
                  <p className="mt-1 text-white group-hover:text-cyan-300 transition">
                    Visit My LinkedIn Profile
                  </p>
                </div>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/iam_soumya_ranjan_mohanty?exln=dHVyMm1qYW9vaTly"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <span className="rounded-xl border border-slate-700 p-3 text-cyan-300 group-hover:border-cyan-400 transition">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                  </svg>
                </span>
                <div>
                  <p className="text-xs text-slate-500">Instagram</p>
                  <p className="mt-1 text-white group-hover:text-cyan-300 transition">
                    Follow Me on Instagram
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 sm:p-8"
          >
            {success && (
              <p
                role="status"
                className="mb-5 flex items-center gap-2 rounded-xl bg-emerald-400/10 p-4 text-sm text-emerald-300"
              >
                <CheckCircle2 size={19} />
                {success}
              </p>
            )}

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-sm text-slate-300">
                Your Name
                <input
                  className={inputStyle}
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
              </label>

              <label className="text-sm text-slate-300">
                Email Address
                <input
                  className={inputStyle}
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@gmail.com"
                  required
                />
              </label>
            </div>

            <label className="mt-5 block text-sm text-slate-300">
              Subject
              <input
                className={inputStyle}
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="Enter subject"
                required
              />
            </label>

            <label className="mt-5 block text-sm text-slate-300">
              Message
              <textarea
                className={`${inputStyle} min-h-36 resize-y`}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Write your message..."
                required
              />
            </label>

            <button
              type="submit"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 py-3.5 font-bold text-slate-950 transition hover:bg-cyan-300"
            >
              <Send size={18} />
              Submit Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
