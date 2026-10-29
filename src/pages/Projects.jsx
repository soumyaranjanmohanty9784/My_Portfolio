
import { FolderKanban } from "lucide-react";
import SectionHeading from "../components/SectionHeading";

const projects = [
  {
    title: "Student Registration",
    description:
      "A registration form that stores student details in Local Storage.",
    tech: ["Javascript", "Tailwind CSS", "Local Storage"],
  },
  {
    title: "Blinkit Shopping Cart",
    description:
      "Blinkit shopping cart with product details, total price and checkout.",
    tech: ["JavaScript", "HTML", "Tailwind CSS"],
  },
  {
    title: "Posts API",
    description:
      "Fetch posts from an API and display them in responsive cards.",
    tech: ["React", "Fetch API", "REST API"],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-slate-800 px-6 py-24 sm:px-12 lg:px-16"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="My recent work"
          title="Featured"
          accent="Projects"
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 transition hover:-translate-y-2 hover:border-cyan-400/50"
            >
              <div className="grid h-44 place-items-center 'bg-gradient-to-br' from-cyan-400/20 to-blue-600/10">
                <div className="grid h-20 w-20 place-items-center rounded-2xl border border-cyan-300/20 bg-slate-950/60 text-cyan-300">
                  <FolderKanban size={36} />
                </div>
              </div>

              <div className="p-6">
                <p className="text-sm text-cyan-300">
                  PROJECT 0{index + 1}
                </p>

                <h3 className="mt-3 text-xl font-bold text-white">
                  {project.title}
                </h3>

                <p className="mt-3 min-h-20 leading-7 text-slate-400">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-slate-800 px-3 py-1.5 text-xs text-cyan-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
