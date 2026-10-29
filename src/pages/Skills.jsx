
import { Code2 } from "lucide-react";
import SectionHeading from "../components/SectionHeading";

const skills = [
  { name: "HTML", level: "90%" },
  { name: "CSS", level: "80%" },
  { name: "JavaScript", level: "70%" },
  { name: "React", level: "65%" },
  { name: "Tailwind CSS", level: "80%" },
  { name: "Git & GitHub", level: "60%" },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-slate-800 px-6 py-24 sm:px-12 lg:px-16"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="My technical knowledge"
          title="My"
          accent="Skills"
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition hover:-translate-y-1 hover:border-cyan-400/50"
            >
              <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-cyan-400/10 text-cyan-300">
                <Code2 size={25} />
              </div>

              <div className="mb-3 flex items-center justify-between gap-2">
                <h3 className="font-bold text-white">
                  {skill.name}
                </h3>
                <span className="text-sm text-cyan-300">
                  {skill.level}
                </span>
              </div>

              <div className="h-2 overflow-hidden rounded-full bg-slate-700">
                <div
                  className="h-full rounded-full 'bg-gradient-to-r' from-cyan-400 to-blue-500"
                  style={{ width: skill.level }}
                />
              </div>
            </div>
          ))}
        </div>

        <p className="mt-5 text-xs text-slate-500">
          Update skill levels according to your actual experience.
        </p>
      </div>
    </section>
  );
}
