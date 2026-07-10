import { profile } from "@/content/profile";
import { asset } from "@/lib/asset";

const contactDetails = [
  {
    label: "Email",
    value: profile.links.email,
    href: `mailto:${profile.links.email}`,
  },
  {
    label: "GitHub",
    value: "github.com/esteb37",
    href: profile.links.github,
    external: true,
  },
  {
    label: "LinkedIn",
    value: "/in/esteban-padilla-cerdio",
    href: profile.links.linkedin,
    external: true,
  },
];

export default function BusinessCard() {
  return (
    <main className="flex min-h-screen items-center bg-white p-5 text-black sm:p-8">
      <article className="mx-auto grid w-full max-w-4xl overflow-hidden border-2 border-black bg-white md:grid-cols-[minmax(0,1fr)_18rem]">
        <div className="p-7 sm:p-10 md:p-12">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-black/60">
            Robotics · AI · Research
          </p>
          <h1 className="mt-5 max-w-xl text-4xl font-semibold leading-[0.95] tracking-[-0.055em] sm:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-5 text-base font-medium sm:text-lg">
            {profile.tagline}
          </p>

          <address className="mt-12 max-w-xl border-t border-black not-italic">
            {contactDetails.map(({ label, value, href, external }) => (
              <a
                key={label}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer" : undefined}
                className="grid grid-cols-[5.5rem_minmax(0,1fr)] gap-3 border-b border-black py-3 text-sm transition-colors hover:bg-black hover:px-3 hover:text-white sm:grid-cols-[7rem_minmax(0,1fr)] sm:text-base"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] opacity-60 sm:text-[11px]">
                  {label}
                </span>
                <span className="truncate font-medium">{value}</span>
              </a>
            ))}
          </address>
        </div>

        <div className="flex flex-col items-center justify-center border-t-2 border-black p-8 text-center md:border-l-2 md:border-t-0 sm:p-10">
          <img
            src={asset("qr.png")}
            alt="QR code for Esteban Padilla Cerdio"
            className="h-48 w-48 border border-black bg-white p-2 sm:h-56 sm:w-56"
          />
          <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.2em] text-black/60">
            Scan to connect
          </p>
        </div>
      </article>
    </main>
  );
}
