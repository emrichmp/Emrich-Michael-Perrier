const linkClassName = "hover:text-brand-accent transition-colors duration-200";

const Footer = () => {
  return (
    <footer className="border-t border-brand-border py-8 px-6 sm:px-12 lg:px-24">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-4">
        <p className="label-mono text-ink-muted">© 2025 Emrich-Michael Perrier</p>
        <div className="flex flex-col items-end gap-1">
          <span className="text-xs font-light text-ink-muted">
            Designed and coded by yours truly. Built with React & TypeScript,
          </span>
          <span className="text-xs font-light text-ink-muted">
            deployed with{" "}
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClassName}
            >
              Vercel
            </a>
            . Set in{" "}
            <a
              href="https://rsms.me/inter/"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClassName}
            >
              Inter
            </a>{" "}
            &{" "}
            <a
              href="https://www.jetbrains.com/legalnotice/jetbrainsmono/"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClassName}
            >
              JetBrains Mono
            </a>
            .
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
