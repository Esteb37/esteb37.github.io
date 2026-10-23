import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  id: string;
  label: string;
  title: string;
  description?: string;
  /** Extra content rendered under the title, beside `aside`. */
  intro?: ReactNode;
  /** Shown to the right of the title and intro on wide screens. */
  aside?: ReactNode;
  children: ReactNode;
  className?: string;
};

export default function Section({
  id,
  label,
  title,
  description,
  intro,
  aside,
  children,
  className = "",
}: Props) {
  return (
    <section
      id={id}
      className={`relative scroll-mt-16 py-10 sm:py-12 ${className}`}
    >
      <div className="container-page">
        <div
          className={
            aside
              ? "grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,24rem)] lg:gap-14"
              : undefined
          }
        >
          <div className="min-w-0">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <span className="section-label">{label}</span>
              <h2 className="section-title">{title}</h2>
              {description ? <p className="section-sub">{description}</p> : null}
            </motion.div>
            {intro ? <div className="mt-8">{intro}</div> : null}
          </div>
          {aside}
        </div>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}
