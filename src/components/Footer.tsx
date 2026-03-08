import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-espresso text-primary-foreground/80">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div>
            <p className="font-heading text-2xl font-bold text-primary-foreground mb-3">
              FreshBite<span className="text-terracotta">.</span>
            </p>
            <p className="text-sm leading-relaxed opacity-70">
              Handcrafted coffee, fresh food, and a warm community — since 2014.
            </p>
          </div>

          <div>
            <p className="font-semibold text-primary-foreground text-sm mb-3">Quick Links</p>
            <ul className="space-y-2 text-sm opacity-70">
              {["Home", "About", "Menu", "Gallery", "Reviews", "Contact"].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} className="hover:opacity-100 transition-opacity">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-semibold text-primary-foreground text-sm mb-3">Follow Us</p>
            <div className="flex gap-3">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-terracotta transition-colors duration-300"
                  aria-label="Social media"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-10 pt-6 text-center text-xs opacity-50">
          © 2024 FreshBite Café. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
