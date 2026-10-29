
import { useState } from "react";

import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = (id) => {
    setActive(id);
    setMenuOpen(false);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-[#0b1120] text-slate-300">
      <Sidebar
        active={active}
        setActive={setActive}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      <main className="lg:ml-72">
        <Home navigate={navigate} />
        <About navigate={navigate} />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer className="border-t border-slate-800 px-6 py-7 text-center text-sm text-slate-500 lg:ml-72">
        Built with React & Tailwind CSS | © 2026 Soumya Ranjan Mohanty
      </footer>
    </div>
  );
}

export default App;
