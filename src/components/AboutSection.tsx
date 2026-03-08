import galleryInterior from "@/assets/gallery-interior.jpg";
import { Coffee, Heart, Leaf } from "lucide-react";

const values = [
  { icon: Coffee, title: "Crafted with Care", desc: "Every cup is hand-poured by our skilled baristas using single-origin beans." },
  { icon: Leaf, title: "Locally Sourced", desc: "We partner with local farms to bring you the freshest seasonal ingredients." },
  { icon: Heart, title: "Community First", desc: "More than a café — we're a gathering place for neighbors and friends." },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden" style={{ boxShadow: "var(--shadow-hero)" }}>
              <img
                src={galleryInterior}
                alt="FreshBite Café cozy interior"
                className="w-full h-[400px] lg:h-[500px] object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-terracotta text-terracotta-foreground rounded-2xl p-6 hidden md:block" style={{ boxShadow: "var(--shadow-card)" }}>
              <p className="font-heading text-3xl font-bold">10+</p>
              <p className="text-sm font-medium opacity-90">Years of Serving Joy</p>
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="text-terracotta font-semibold text-sm tracking-widest uppercase mb-3">Our Story</p>
            <h2 className="section-title">
              A Passion for Great<br />Food & Coffee
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-8">
              FreshBite Café was born from a simple idea: create a space where quality meets comfort. 
              Since 2014, we've been roasting our own beans, baking fresh pastries every morning, 
              and welcoming our community with open arms. Every ingredient is chosen with intention, 
              every dish crafted with love.
            </p>

            <div className="grid gap-6">
              {values.map((v) => (
                <div key={v.title} className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                    <v.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-foreground">{v.title}</h3>
                    <p className="text-muted-foreground text-sm">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
