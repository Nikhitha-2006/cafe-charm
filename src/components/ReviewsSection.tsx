import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Sarah Mitchell",
    text: "The best flat white in town! The cozy atmosphere and friendly staff make every visit feel like coming home.",
    rating: 5,
    role: "Regular since 2019",
  },
  {
    name: "James Carter",
    text: "Their avocado toast is next level. Fresh, perfectly seasoned, and the portion is generous. A must-try!",
    rating: 5,
    role: "Food Blogger",
  },
  {
    name: "Emily Rodriguez",
    text: "I hosted my birthday brunch here and it was magical. The team went above and beyond to make it special.",
    rating: 5,
    role: "Event Host",
  },
];

const ReviewsSection = () => {
  return (
    <section id="reviews" className="section-padding bg-secondary/50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <p className="text-terracotta font-semibold text-sm tracking-widest uppercase mb-3">Testimonials</p>
          <h2 className="section-title">What Our Guests Say</h2>
          <p className="section-subtitle">Real stories from our beloved community.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="bg-card rounded-2xl p-8 relative transition-all duration-300 hover:-translate-y-1"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <Quote className="w-8 h-8 text-terracotta/30 mb-4" />
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-warm-gold text-warm-gold" />
                ))}
              </div>
              <p className="text-foreground/80 text-sm leading-relaxed mb-6">"{r.text}"</p>
              <div>
                <p className="font-heading font-semibold text-foreground">{r.name}</p>
                <p className="text-muted-foreground text-xs">{r.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
