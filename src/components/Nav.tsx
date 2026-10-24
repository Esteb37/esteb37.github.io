import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useScrollSpy } from "@/lib/useScrollSpy";

const links = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "research", label: "Research" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  // { id: "map", label: "Map" },
  { id: "contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const active = useScrollSpy(links.map((l) => l.id));

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-border/80 bg-bg/85 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between">
        <a
          href="#top"
          className="flex items-center gap-2.5 text-[15px] font-semibold tracking-tight text-ink"
          aria-label="Home"
        >
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-[11px] font-semibold text-white">
            EPC
          </span>
          <span className="hidden sm:inline">Esteban Padilla Cerdio</span>
        </a>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-1">
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
                    active === link.id
                      ? "bg-accent-soft text-accent-deep"
                      : "text-ink-muted hover:text-ink"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="rounded-lg border border-border bg-bg-elevated p-2 text-ink-muted transition-colors hover:text-ink md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-border bg-bg md:hidden">
          <ul className="container-page flex flex-col py-2">
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                  className={`block rounded-lg px-3 py-3 text-sm font-medium transition-colors ${
                    active === link.id
                      ? "text-accent"
                      : "text-ink-muted hover:text-ink"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  );
}
