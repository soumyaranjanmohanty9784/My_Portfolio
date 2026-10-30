import { ArrowUpRight, Code2, Sparkles } from "lucide-react";

export default function Home({ navigate }) {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 py-24 sm:px-12 lg:px-16"
    >
      {/* Background Effects */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-cyan-400/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-2">
        {/* Left Content */}
        <div className="order-2 lg:order-1">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
            <Sparkles size={16} />
            Welcome to my portfolio
          </div>

          <p className="mb-3 text-lg font-medium text-slate-400">Hello, I'm</p>

          <h1 className="text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl xl:text-6xl">
            Soumya Ranjan
            <span className="mt-2 block text-cyan-300">Mohanty</span>
          </h1>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <span className="h-1 w-10 rounded-full bg-cyan-400" />
            <h2 className="text-xl font-semibold text-slate-200 sm:text-2xl">
              Frontend Developer
            </h2>
          </div>

          <p className="mt-7 max-w-xl text-base leading-8 text-slate-400">
            I create modern, responsive and user-friendly websites using React,
            JavaScript and Tailwind CSS. I enjoy learning new technologies and
            transforming creative ideas into beautiful web experiences.
          </p>

          {/* Skills Tags */}
          <div className="mt-6 flex flex-wrap gap-2">
            {["React", "JavaScript", "Tailwind CSS", "HTML", "CSS"].map(
              (skill) => (
                <span
                  key={skill}
                  className="rounded-lg border border-slate-700 bg-slate-800/70 px-3 py-2 text-xs font-medium text-cyan-200 transition hover:border-cyan-400/50"
                >
                  {skill}
                </span>
              ),
            )}
          </div>

          {/* Buttons */}

          <div className="mt-9 flex flex-wrap gap-4">
            <button
              onClick={() => navigate("projects")}
              className="flex items-center gap-2 rounded-xl bg-cyan-400 px-6 py-3.5 font-bold text-slate-950 shadow-lg shadow-cyan-400/10 transition hover:-translate-y-1 hover:bg-cyan-300"
            >
              View My Projects
              <ArrowUpRight size={19} />
            </button>

            <button
              onClick={() => navigate("contact")}
              className="rounded-xl border border-slate-600 px-6 py-3.5 font-semibold text-white transition hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-300"
            >
              Contact Me
            </button>

            <a
              href="/images/Soumyaranjan_cv.pdf"
              download="Soumyaranjan_cv.pdf"
              className="flex items-center gap-2 rounded-xl border border-cyan-400/50 bg-cyan-400/10 px-6 py-3.5 font-semibold text-cyan-300 transition hover:-translate-y-1 hover:bg-cyan-400 hover:text-slate-950"
            >
              <icon name="download" size="19px" />
              Download CV
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-10 flex items-center gap-5">
            <span className="text-sm text-slate-500">Connect with me</span>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-sm font-semibold text-slate-400 transition hover:text-cyan-300"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-sm font-semibold text-slate-400 transition hover:text-cyan-300"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Right Profile Image */}
        <div className="order-1 flex justify-center lg:order-2">
          <div className="relative w-full max-w-[360px]">
            {/* Decorative Background */}
            <div className="absolute inset-4 rotate-6 rounded-[35px] bg-gradient-to-br from-cyan-400 to-blue-600 opacity-20 blur-xl" />

            <div className="relative rounded-[30px] border border-cyan-400/30 bg-slate-900/80 p-3 shadow-2xl shadow-cyan-400/10">
              <div className="relative overflow-hidden rounded-[23px] border border-slate-700">
                <img
                  src="/profile.jpeg"
                  alt="Soumya Ranjan Mohanty"
                  className="aspect-[4/5] w-full object-cover object-center transition duration-700 hover:scale-105"
                />

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent p-6 pt-20">
                  <p className="text-lg font-bold text-white">
                    Soumya Ranjan Mohanty
                  </p>
                  <p className="mt-1 text-sm text-cyan-300">
                    Frontend Developer
                  </p>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -left-8 top-10 flex items-center gap-3 rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 shadow-xl">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-cyan-400/10 text-cyan-300">
                  <Code2 size={23} />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">React</p>
                  <p className="text-xs text-slate-400">Developer</p>
                </div>
              </div>

              {/* Bottom Badge */}
              <div className="absolute -bottom-5 -right-5 rounded-2xl border border-slate-700 bg-slate-900 px-5 py-3 shadow-xl">
                <p className="text-sm font-bold text-cyan-300">Creative</p>
                <p className="text-xs text-slate-400">Web Developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
