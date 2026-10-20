export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container-page flex flex-col items-start justify-between gap-3 py-8 text-sm text-ink-subtle sm:flex-row sm:items-center">
        <div>
          © {new Date().getFullYear()} Esteban Padilla Cerdio · Built with React,
          Vite & Tailwind.
        </div>
        <div>Zürich, Switzerland · Open to relocate</div>
      </div>
    </footer>
  );
}
