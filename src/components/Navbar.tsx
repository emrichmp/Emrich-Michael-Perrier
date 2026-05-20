import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "About", href: "#about", id: "about" },
  { name: "Projects", href: "#projects", id: "projects" },
  { name: "Experience", href: "#experience", id: "experience" },
  { name: "Contact", href: "#contact", id: "contact" }
];

const socialLinks = [
  {
    name: "Upwork",
    href: "https://www.upwork.com/freelancers/emrichmichaelperrier",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 122.88 122.88" aria-hidden="true">
        <path
          fill="currentColor"
          d="M18.43,0h86.02c10.18,0,18.43,8.25,18.43,18.43v86.02c0,10.18-8.25,18.43-18.43,18.43H18.43 C8.25,122.88,0,114.63,0,104.45l0-86.02C0,8.25,8.25,0,18.43,0L18.43,0z"
        />
        <path
          fill="#0c0c0c"
          d="M85.73,71.26c-4.08,0-7.92-1.73-11.38-4.54l0.84-3.98l0.02-0.14c0.77-4.22,3.14-11.33,10.51-11.33 c5.52,0,10.01,4.49,10.01,10.01C95.74,66.79,91.25,71.26,85.73,71.26L85.73,71.26L85.73,71.26z M85.73,41.14 c-9.41,0-16.68,6.1-19.66,16.15c-4.51-6.79-7.94-14.93-9.94-21.79H46.01v26.33c0,5.21-4.22,9.43-9.43,9.43 c-5.21,0-9.43-4.22-9.43-9.43V35.47h-10.1V61.8c0,10.78,8.76,19.63,19.54,19.63s19.54-8.86,19.54-19.63v-4.42 c1.97,4.1,4.37,8.26,7.3,11.9l-6.19,29.14h10.34l4.49-21.12c3.94,2.52,8.45,4.1,13.63,4.1c11.09,0,20.11-9.07,20.11-20.18 C105.82,50.16,96.82,41.14,85.73,41.14L85.73,41.14z"
        />
      </svg>
    )
  },
  {
    name: "GitHub",
    href: "https://github.com/emrichmp",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    )
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/emrich-michael-perrier/",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    )
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/emrichmp/",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    )
  },
  {
    name: "Email",
    href: "mailto:emrichmichaelperrier@gmail.com",
    icon: (
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    )
  }
];

const socialLinkClassName =
  "group relative text-ink-muted hover:text-brand-accent hover:-translate-y-0.5 transition-all duration-200";

const socialTooltipClassName =
  "pointer-events-none absolute left-full top-1/2 z-10 ml-3 -translate-y-1/2 whitespace-nowrap label-mono text-[10px] text-ink-muted opacity-0 translate-x-0 transition-all duration-100 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:text-brand-accent";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight =
        document.getElementById("hero")?.offsetHeight ?? window.innerHeight;
      setIsScrolled(window.scrollY > heroHeight);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ["about", "projects", "experience", "contact"];
    const visibility = new Map<string, number>();

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          visibility.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0);
        });

        let bestId: string | null = null;
        let bestRatio = 0;

        sectionIds.forEach(id => {
          const ratio = visibility.get(id) ?? 0;
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestId = id;
          }
        });

        if (bestId && bestRatio > 0) {
          setActiveSection(bestId);
        }
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1]
      }
    );

    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-500 ease-in-out ${
          isScrolled
            ? "bg-brand-base/90 backdrop-blur-sm border-brand-border/50"
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="px-6 sm:px-12 lg:px-24 h-16 flex items-center justify-between">
          <button
            type="button"
            onClick={() => scrollToSection("#hero")}
            className="text-sm font-light text-ink-primary hover:text-brand-accent transition-colors duration-300"
          >
            Emrich Perrier
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map(item => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => scrollToSection(item.href)}
                  className="flex flex-col items-center gap-1.5 group"
                >
                  <span
                    className={`w-1 h-1 rounded-full bg-brand-accent transition-opacity duration-200 ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                    aria-hidden="true"
                  />
                  <span
                    className={`label-mono transition-colors duration-200 ${
                      isActive ? "text-ink-primary" : "text-ink-muted group-hover:text-ink-primary"
                    }`}
                  >
                    {item.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-1 text-ink-muted hover:text-ink-primary transition-colors duration-200"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center relative" aria-hidden="true">
              <span
                className={`block w-5 h-px bg-current transition-all duration-300 absolute ${
                  isMobileMenuOpen ? "rotate-45 translate-y-0" : "-translate-y-1.5"
                }`}
              />
              <span
                className={`block w-5 h-px bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`block w-5 h-px bg-current transition-all duration-300 absolute ${
                  isMobileMenuOpen ? "-rotate-45 translate-y-0" : "translate-y-1.5"
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "calc(100vh - 4rem)" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden overflow-hidden bg-brand-base/95 backdrop-blur-sm border-t border-brand-border"
            >
              <div className="flex flex-col items-center justify-center h-full gap-8 py-12">
                {navItems.map(item => {
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={item.name}
                      type="button"
                      onClick={() => scrollToSection(item.href)}
                      className="flex flex-col items-center gap-2"
                    >
                      <span
                        className={`w-1 h-1 rounded-full bg-brand-accent transition-opacity duration-200 ${
                          isActive ? "opacity-100" : "opacity-0"
                        }`}
                        aria-hidden="true"
                      />
                      <span
                        className={`label-mono text-lg transition-colors duration-200 ${
                          isActive ? "text-ink-primary" : "text-ink-muted hover:text-ink-primary"
                        }`}
                      >
                        {item.name}
                      </span>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Fixed bottom-left social links */}
      <div className="hidden sm:flex fixed bottom-8 left-8 z-50 flex-col items-center gap-4">
        {socialLinks.map(link => {
          const isMailto = link.href.startsWith("mailto:");
          return (
            <a
              key={link.name}
              href={link.href}
              {...(isMailto ? {} : { target: "_blank", rel: "noopener noreferrer" })}
              className={socialLinkClassName}
              aria-label={link.name}
            >
              <span className={socialTooltipClassName} aria-hidden="true">
                {link.name}
              </span>
              {link.icon}
            </a>
          );
        })}
        <div className="w-px h-16 bg-brand-border mt-3" aria-hidden="true" />
      </div>
    </>
  );
};

export default Navbar;
