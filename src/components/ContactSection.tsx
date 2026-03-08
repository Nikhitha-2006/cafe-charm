import { MapPin, Phone, Mail, Clock } from "lucide-react";

const info = [
  { icon: MapPin, label: "Address", value: "123 Maple Street, Downtown, CA 90210" },
  { icon: Phone, label: "Phone", value: "(555) 234-5678" },
  { icon: Mail, label: "Email", value: "hello@freshbitecafe.com" },
  { icon: Clock, label: "Hours", value: "Mon–Fri 7am–8pm · Sat–Sun 8am–9pm" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <p className="text-terracotta font-semibold text-sm tracking-widest uppercase mb-3">Find Us</p>
          <h2 className="section-title">Come Say Hello</h2>
          <p className="section-subtitle">We'd love to see you! Drop by or get in touch anytime.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Info cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {info.map((item) => (
              <div
                key={item.label}
                className="bg-card rounded-xl p-6 transition-all duration-300 hover:-translate-y-1"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center mb-3">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="font-heading font-semibold text-foreground text-sm mb-1">{item.label}</p>
                <p className="text-muted-foreground text-sm">{item.value}</p>
              </div>
            ))}
          </div>

          {/* Map */}
          <div className="rounded-xl overflow-hidden h-[300px] lg:h-full min-h-[300px]" style={{ boxShadow: "var(--shadow-card)" }}>
            <iframe
              title="FreshBite Café Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.7!2d-118.4!3d34.06!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDAzJzM2LjAiTiAxMTjCsDI0JzAwLjAiVw!5e0!3m2!1sen!2sus!4v1"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
