
import {
  Home,
  User,
  Code2,
  FolderKanban,
  Mail,
  Menu,
  X,
} from "lucide-react";

const navItems = [
  { name: "Home", id: "home", icon: Home },
  { name: "About", id: "about", icon: User },
  { name: "Skills", id: "skills", icon: Code2 },
  { name: "Projects", id: "projects", icon: FolderKanban },
  { name: "Contact", id: "contact", icon: Mail },
];

export default function Sidebar({
  active,
  setActive,
  menuOpen,
  setMenuOpen,
}) {
  const navigate = (id) => {
    setActive(id);
    setMenuOpen(false);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="fixed left-4 top-4 z- [60] rounded-xl bg-slate-800 p-3 text-white lg:hidden"
        aria-label="Toggle navigation"
      >
        {menuOpen ? <X /> : <Menu />}
      </button>

      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 z-40 bg-black/60 lg:hidden"
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-72 flex-col border-r border-slate-800 bg-[#101a2d] p-6 transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <button
          onClick={() => navigate("home")}
          className="flex items-center gap-3 text-left"
        >
          <div className="grid h-12 w-12 place-items-center rounded-xl bg-cyan-400 text-xl font-black text-slate-950">
            S
          </div>

          <div>
            <h2 className="font-bold text-white">MY PORTFOLIO</h2>
            <p className="text-xs text-slate-400">
              Frontend Developer
            </p>
          </div>
        </button>

        <div className="my-9 rounded-2xl border border-slate-700 bg-slate-900/60 p-5 text-center">

            <div className="mx-auto h-20 w-20 overflow-hidden rounded-full border-2 border-cyan-400">
  <img
    src="/profile.jpeg"
    alt="My Profile"
    className="h-full w-full object-cover"
  />
</div>

          <h3 className="mt-4 font-bold text-white">Soumya Ranjan Mohanty</h3>
          <p className="mt-1 text-sm text-slate-400">
            React Developer
          </p>

          <span className="mt-3 inline-block rounded-full bg-emerald-400/10 px-3 py-1 text-xs text-emerald-400">
            Available for work
          </span>
        </div>

        <p className="mb-3 text-xs uppercase tracking-widest text-slate-500">
          Navigation
        </p>

        <nav className="space-y-2">
          {navItems.map(({ name, id, icon: Icon }) => (
            <button
              key={id}
              onClick={() => navigate(id)}
              className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 transition ${
                active === id
                  ? "bg-cyan-400 font-semibold text-slate-950"
                  : "text-slate-400 hover:bg-slate-800 hover:text-white"
              }`}
            >
              <Icon size={19} />
              {name}
            </button>
          ))}
        </nav>

        <div className="mt-auto">
          <div className="mb-5 flex justify-center gap-4">
            <a
              href="https://github.com/soumyaranjanmohanty9784"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="rounded-lg border border-slate-700 p-3 text-slate-400 hover:text-cyan-300"
            >
              <span className="text-sm font-bold">GH</span>
            </a>

            <a
              href="https://www.linkedin.com/in/soumya-ranjan-mohanty-960020270/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="rounded-lg border border-slate-700 p-3 text-slate-400 hover:text-cyan-300"
            >
              <span className="text-sm font-bold">in</span>
            </a>
          </div>

          <p className="text-center text-xs text-slate-500">
            © 2026 Soumya Ranjan Mohanty
          </p>
        </div>
      </aside>
    </>
  );
}
