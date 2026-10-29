
export default function SectionHeading({ eyebrow, title, accent }) {
  return (
    <div className="mb-10">
      <p className="mb-3 text-sm font-bold uppercase tracking-widest text-cyan-300">
        {eyebrow}
      </p>

      <h2 className="text-4xl font-black text-white">
        {title} <span className="text-cyan-300">{accent}</span>
      </h2>
    </div>
  );
}
