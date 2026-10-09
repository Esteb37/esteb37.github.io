import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useScrollSpy } from "@/lib/useScrollSpy";

const links = [
  { id: "about", label: "About" },
  { id: "research", label: "Research" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const active = useScrollSpy(links.map((l) => l.id));

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-border/60 bg-bg/70 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between">
        <a
          href="#top"
          className="flex items-center gap-2 font-mono text-sm tracking-tight text-ink"
          aria-label="Home"
        >
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-accent/40 bg-accent/10 text-accent">
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
                  className={`rounded-md px-3 py-2 text-sm transition-colors ${
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
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="rounded-md border border-border p-2 text-ink-muted md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-border bg-bg/95 md:hidden">
          <ul className="container-page flex flex-col py-2">
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                  className={`block rounded-md px-3 py-3 text-sm transition-colors ${
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
