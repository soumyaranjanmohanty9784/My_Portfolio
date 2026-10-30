import { ExternalLink, FolderKanban } from "lucide-react";
import SectionHeading from "../components/SectionHeading";

const projects = [
  {
    title: "FLAVORIZ",
    description:
      "The Master Chefs Coocking Recipies",
    tech: ["HTML", "CSS"],
    image: "/images/flavoriz.png",
    liveLink: "https://practice2-mauve.vercel.app/",
  },
  {
    title: "Blinkit Shopping Cart",
    description:
      "Blinkit shopping cart with product details, total price and checkout.",
    tech: ["JavaScript", "HTML", "Tailwind CSS"],
    image: "/images/blinkit_clone.png",
    liveLink: "https://blinkitclone-eight.vercel.app/",
  },
  {
    title: "UsabilityHub Landing Page Clone",
    description:
      "UsabilityHub Landing Page Clone",
    tech: ["HTML","Tailwind"],
    image: "/images/Usabilityhub.png",
    liveLink: "https://tailwindassignment.vercel.app/",
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
              className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/50"
            >
              {/* Project Image */}
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} live project`}
                className="relative block h-48 overflow-hidden bg-gradient-to- br from-cyan-400/20 to-blue-600/10"
              >
                <img
                  src={project.image}
                  alt={`${project.title} project screenshot`}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />

                <div className="absolute inset-0 grid place-items-center bg-slate-950/20">
                  <div className="grid h-16 w-16 place-items-center rounded-2xl border border-cyan-300/20 bg-slate-950/80 text-cyan-300 backdrop-blur-sm transition group-hover:scale-110">
                    <FolderKanban size={30} />
                  </div>
                </div>
              </a>

              {/* Project Details */}
              <div className="p-6">
                <p className="text-sm font-medium text-cyan-300">
                  PROJECT 0{index + 1}
                </p>

                <h3 className="mt-3 text-xl font-bold text-white">
                  {project.title}
                </h3>

                <p className="mt-3 min-h-20 leading-7 text-slate-400">
                  {project.description}
                </p>

                {/* Technologies */}
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

                {/* Live Demo Button */}
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-lg bg-cyan-400 px-4 py-2.5 font-semibold text-slate-950 transition hover:bg-cyan-300"
                >
                  Live Demo
                  <ExternalLink size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}