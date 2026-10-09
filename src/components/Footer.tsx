export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container-page flex flex-col items-start justify-between gap-3 py-8 text-xs text-ink-subtle sm:flex-row sm:items-center">
        <div className="font-mono">
          © {new Date().getFullYear()} Esteban Padilla Cerdio · Built with React,
          Vite & Tailwind.
        </div>
        <div className="font-mono">Zürich, Switzerland · Open to relocate</div>
      </div>
    </footer>
  );
}
