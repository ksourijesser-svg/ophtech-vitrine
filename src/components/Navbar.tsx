"use client";

import { useEffect, useState } from "react";
import { Eye, Menu, X } from "lucide-react";

const links = [
  { href: "#fonctionnalites", label: "Fonctionnalités" },
  { href: "#modules", label: "Modules" },
  { href: "#workflow", label: "Comment ça marche" },
  { href: "#tarifs", label: "Tarifs" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-luna-300/15 bg-luna-900/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-luna-100 to-luna-300 text-luna-900 shadow-glow">
            <Eye className="h-5 w-5" strokeWidth={2.4} />
          </span>
          <span className="text-lg font-semibold tracking-tight text-cloud">
            Ophtech
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-cloud/70 transition-colors hover:text-luna-100"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#demo"
            className="rounded-full px-4 py-2 text-sm font-medium text-cloud/80 transition-colors hover:text-luna-100"
          >
            Se connecter
          </a>
          <a
            href="#demo"
            className="rounded-full bg-gradient-to-r from-luna-100 to-luna-300 px-5 py-2.5 text-sm font-semibold text-luna-900 shadow-glow transition-transform hover:scale-[1.03]"
          >
            Demander une démo
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-luna-300/20 text-cloud lg:hidden"
          aria-label="Menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-luna-300/15 bg-luna-900/95 px-5 py-4 backdrop-blur-xl lg:hidden">
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-cloud/80 transition-colors hover:bg-luna-300/10 hover:text-luna-100"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#demo"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-gradient-to-r from-luna-100 to-luna-300 px-5 py-2.5 text-center text-sm font-semibold text-luna-900"
            >
              Demander une démo
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
