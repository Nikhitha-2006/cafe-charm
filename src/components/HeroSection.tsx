import heroCafe from "@/assets/hero-cafe.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroCafe}
          alt="FreshBite Café interior with fresh pastries and coffee"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso/80 via-espresso/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-32">
        <div className="max-w-2xl">
          <p
            className="text-terracotta font-semibold text-sm tracking-widest uppercase mb-4 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            Welcome to FreshBite Café
          </p>
          <h1
            className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            Where Every Bite
            <br />
            Tells a <span className="italic text-terracotta">Story</span>
          </h1>
          <p
            className="text-primary-foreground/80 text-lg md:text-xl mb-10 max-w-lg opacity-0 animate-fade-up"
            style={{ animationDelay: "0.6s" }}
          >
            Handcrafted coffee, fresh bites, and a cozy atmosphere — your new favorite neighborhood café.
          </p>
          <div
            className="flex flex-wrap gap-4 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.8s" }}
          >
            <a
              href="#menu"
              className="px-8 py-3.5 rounded-full bg-terracotta text-terracotta-foreground font-semibold text-base hover:bg-terracotta/90 transition-all duration-300 hover:scale-105"
            >
              View Menu
            </a>
            <a
              href="#contact"
              className="px-8 py-3.5 rounded-full border-2 border-primary-foreground/30 text-primary-foreground font-semibold text-base hover:bg-primary-foreground/10 transition-all duration-300"
            >
              Visit Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
