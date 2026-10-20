import { Github, Linkedin, Mail } from "lucide-react";
import type { ReactNode } from "react";
import Section from "./Section";
import { profile } from "@/content/profile";

type ContactLink = {
  label: string;
  value: string;
  href: string;
  icon: ReactNode;
  external?: boolean;
};

const contactLinks: ContactLink[] = [
  {
    label: "Email",
    value: profile.links.email,
    href: `mailto:${profile.links.email}`,
    icon: <Mail size={18} />,
  },
  {
    label: "GitHub",
    value: "github.com/esteb37",
    href: profile.links.github,
    icon: <Github size={18} />,
    external: true,
  },
  {
    label: "LinkedIn",
    value: "/in/esteban-padilla-cerdio",
    href: profile.links.linkedin,
    icon: <Linkedin size={18} />,
    external: true,
  },
];

export default function Contact() {
  return (
    <Section
      id="contact"
      label="Contact"
      title="Let's talk robots."
      description="Always happy to chat about robot learning, navigation, manipulation, perception, or anything embodied AI."
    >
      <div className="grid gap-4 lg:grid-cols-3">
        {contactLinks.map(({ label, value, href, icon, external }) => (
          <a
            key={label}
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noreferrer" : undefined}
            className="surface surface-hover group flex items-center gap-4 p-5"
          >
            <span className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-accent-soft text-accent transition-colors group-hover:bg-accent group-hover:text-white">
              {icon}
            </span>
            <div className="min-w-0">
              <div className="text-sm text-ink-subtle">{label}</div>
              <div className="break-words font-medium text-ink">{value}</div>
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}
