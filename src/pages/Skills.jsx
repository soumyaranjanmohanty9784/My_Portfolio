import SectionHeading from "../components/SectionHeading";

const skills = [
  {
    name: "HTML",
    level: "90%",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    level: "80%",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    level: "70%",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "React",
    level: "65%",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Tailwind CSS",
    level: "80%",
    logo: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
  },
  {
    name: "Git & GitHub",
    level: "60%",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
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
              className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/50"
            >
              <div className="mb-5 grid h-14 w-14 place-items-center rounded-xl border border-slate-700 bg-slate-800/80 p-3">
                <img
                  src={skill.logo}
                  alt={`${skill.name} logo`}
                  className="h-full w-full object-contain"
                  loading="lazy"
                />
              </div>

              <div className="mb-3 flex items-center justify-between gap-2">
                <h3 className="font-bold text-white">
                  {skill.name}
                </h3>

                <span className="text-sm font-medium text-cyan-300">
                  {skill.level}
                </span>
              </div>

              <div className="h-2 overflow-hidden rounded-full bg-slate-700">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-700"
                  style={{ width: skill.level }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}