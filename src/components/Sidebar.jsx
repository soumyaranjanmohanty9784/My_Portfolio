import { useEffect, useState } from "react";

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
  const [showMenuButton, setShowMenuButton] = useState(true);

  // Hide mobile menu button when scrolling
  useEffect(() => {
    const handleScroll = () => {
      setShowMenuButton(window.scrollY < 30);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Automatically update active section while scrolling
  useEffect(() => {
    const sections = navItems
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              a.boundingClientRect.top - b.boundingClientRect.top
          );

        if (visibleSections.length > 0) {
          setActive(visibleSections[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [setActive]);

  // Navigation click
  const navigate = (id) => {
    setActive(id);
    setMenuOpen(false);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className={`fixed left-4 top-4 z-[60] rounded-xl bg-slate-800 p-3 text-white transition-all duration-300 lg:hidden ${
          showMenuButton || menuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-5 pointer-events-none opacity-0"
        }`}
        aria-label="Toggle navigation"
      >
        {menuOpen ? <X /> : <Menu />}
      </button>

      {/* Mobile Overlay */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 z-40 bg-black/60 lg:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-72 flex-col border-r border-slate-800 bg-[#101a2d] p-6 transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        {/* Logo */}
        <button
          onClick={() => navigate("home")}
          className="flex items-center gap-3 text-left"
        >
          <div className="grid h-12 w-12 place-items-center rounded-xl bg-cyan-400 text-xl font-black text-slate-950">
            S
          </div>

          <div>
            <h2 className="font-bold text-white">
              MY PORTFOLIO
            </h2>
            <p className="text-xs text-slate-400">
              Frontend Developer
            </p>
          </div>
        </button>

        {/* Profile */}
        <div className="my-9 rounded-2xl border border-slate-700 bg-slate-900/60 p-5 text-center">
          <div className="mx-auto h-20 w-20 overflow-hidden rounded-full border-2 border-cyan-400">
            <img
              src="/profile.jpeg"
              alt="My Profile"
              className="h-full w-full object-cover"
            />
          </div>

          <h3 className="mt-4 font-bold text-white">
            Soumya Ranjan Mohanty
          </h3>

          <p className="mt-1 text-sm text-slate-400">
            React Developer
          </p>

          <span className="mt-3 inline-block rounded-full bg-emerald-400/10 px-3 py-1 text-xs text-emerald-400">
            Available for work
          </span>
        </div>

        {/* Navigation */}
        <p className="mb-3 text-xs uppercase tracking-widest text-slate-500">
          Navigation
        </p>

        <nav className="space-y-2">
          {navItems.map(({ name, id, icon: Icon }) => (
            <button
              key={id}
              onClick={() => navigate(id)}
              className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 transition-all duration-300 ${
                active === id
                  ? "bg-cyan-400 font-semibold text-slate-950 shadow-lg shadow-cyan-400/20"
                  : "text-slate-400 hover:bg-slate-800 hover:text-white"
              }`}
            >
              <Icon size={19} />
              {name}
            </button>
          ))}
        </nav>

        {/* Social Media */}
        <div className="mt-auto">
          <div className="mb-5 flex justify-center gap-4">

            {/* GitHub */}
            <a
              href="https://github.com/soumyaranjanmohanty9784"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="grid h-11 w-11 place-items-center rounded-xl border border-slate-700 text-slate-400 transition hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-300"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.53v-2.08c-3.1.67-3.76-1.32-3.76-1.32-.5-1.29-1.23-1.63-1.23-1.63-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.7 2.59 1.21 3.22.93.1-.72.39-1.21.7-1.49-2.47-.28-5.07-1.24-5.07-5.5 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.12-1.44 3.05-1.14 3.05-1.14.61 1.54.23 2.68.12 2.96.71.78 1.14 1.77 1.14 2.99 0 4.27-2.6 5.22-5.08 5.5.4.35.75 1.02.75 2.06V22c0 .29.2.64.76.53A11.1 11.1 0 0 0 12 .9Z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/soumya-ranjan-mohanty-960020270/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="grid h-11 w-11 place-items-center rounded-xl border border-slate-700 text-slate-400 transition hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-300"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.45H4.96V9h2.97v9.45ZM6.44 7.71a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44Zm12.01 10.74h-2.97v-4.6c0-1.1-.02-2.51-1.53-2.51-1.53 0-1.76 1.2-1.76 2.43v4.68H9.22V9h2.85v1.29h.04c.4-.74 1.37-1.53 2.82-1.53 3.01 0 3.56 1.98 3.56 4.56v5.13Z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/YOUR_INSTAGRAM_USERNAME/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="grid h-11 w-11 place-items-center rounded-xl border border-slate-700 text-slate-400 transition hover:-translate-y-1 hover:border-pink-400 hover:text-pink-400"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle
                  cx="17.5"
                  cy="6.5"
                  r="1"
                  fill="currentColor"
                  stroke="none"
                />
              </svg>
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}