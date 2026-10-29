
import { ArrowUpRight, Code2 } from "lucide-react";

export default function Home({ navigate }) {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center px-6 py-24 sm:px-12 lg:px-16"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="mb-5 inline-block rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
            Welcome to my portfolio
          </p>

          <h1 className="text-5xl font-black leading-tight text-white sm:text-6xl">
            Hello, I'm
            <span className="block text-cyan-300">Soumya Ranjan Mohanty</span>
          </h1>

          <h2 className="mt-4 text-2xl font-semibold text-slate-300">
            Frontend Developer
          </h2>

          <p className="mt-6 max-w-xl leading-8 text-slate-400">
            I create modern, responsive and user-friendly websites
            using React, JavaScript and Tailwind CSS. I enjoy
            learning new technologies and building creative
            web applications.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button
              onClick={() => navigate("projects")}
              className="flex items-center gap-2 rounded-xl bg-cyan-400 px-6 py-3 font-bold text-slate-950 hover:bg-cyan-300"
            >
              View Projects <ArrowUpRight size={18} />
            </button>

            <button
              onClick={() => navigate("contact")}
              className="rounded-xl border border-slate-600 px-6 py-3 font-semibold text-white hover:border-cyan-400"
            >
              Contact Me
            </button>
          </div>
        </div>

        <div className="mx-auto w-full max-w-sm rounded-3xl border border-slate-700 bg-slate-800/40 p-8">
          <div className="grid aspect-square place-items-center rounded-2xl border border-cyan-400/20 bg-slate-900">
            <div className="text-center">

                <div className="flex justify-center">
                    <div className="h-64 w-64 overflow-hidden border-4 border-cyan-400 shadow-xl shadow-cyan-400/20">
                           <img
                              src="/profile.jpeg"
                              alt="My Profile"
                              className="h-full w-full object-cover"/>
                     </div>
                </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
