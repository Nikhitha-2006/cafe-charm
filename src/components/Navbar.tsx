import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-card/95 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <a href="#home" className="font-heading text-2xl font-bold text-primary">
          FreshBite<span className="text-terracotta">.</span>
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors duration-200"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#reservation"
              className="px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors"
            >
              Book a Table
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-card/98 backdrop-blur-lg border-t border-border animate-fade-in">
          <ul className="flex flex-col items-center gap-4 py-6">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-base font-medium text-foreground/80 hover:text-primary"
                  onClick={() => setMobileOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#reservation"
                className="px-6 py-2.5 rounded-full bg-primary text-primary-foreground font-semibold"
                onClick={() => setMobileOpen(false)}
              >
                Book a Table
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
