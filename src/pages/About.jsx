
import SectionHeading from "../components/SectionHeading";

export default function About({ navigate }) {
  const details = [
    {
      title: "Clean Code",
      text: "Writing organized and reusable code.",
    },
    {
      title: "Responsive Design",
      text: "Creating layouts for mobile and desktop.",
    },
    {
      title: "Continuous Learning",
      text: "Learning new technologies through projects.",
    },
    {
      title: "Problem Solving",
      text: "Solving problems step by step.",
    },
  ];

  return (
    <section
      id="about"
      className="border-t border-slate-800 px-6 py-24 sm:px-12 lg:px-16"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Discover my story"
          title="About"
          accent="Me"
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-7 sm:p-10">
            <h3 className="text-2xl font-bold text-white">
              Passionate{" "}
              <span className="text-cyan-300">
                Frontend Developer
              </span>
            </h3>

            <p className="mt-5 leading-8 text-slate-400">
              I am a web development learner who enjoys creating
              clean user interfaces and responsive websites. I work
              with HTML, CSS, JavaScript, React and Tailwind CSS.
            </p>

            <p className="mt-4 leading-8 text-slate-400">
              My goal is to improve my coding skills by building
              real-world projects and learning modern technologies.
            </p>

            <button
              onClick={() => navigate("contact")}
              className="mt-6 font-semibold text-cyan-300 hover:text-cyan-200"
            >
              Let's connect →
            </button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {details.map((item, index) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition hover:-translate-y-1 hover:border-cyan-400/50"
              >
                <p className="text-sm font-bold text-cyan-300">
                  0{index + 1}
                </p>

                <h3 className="mt-4 font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
