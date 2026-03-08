import { useState } from "react";
import { Send } from "lucide-react";
import { toast } from "sonner";

const ReservationSection = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", date: "", time: "", guests: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) {
      toast.error("Please fill in your name and email.");
      return;
    }
    toast.success("Reservation request sent! We'll confirm shortly.");
    setForm({ name: "", email: "", phone: "", date: "", time: "", guests: "", message: "" });
  };

  const inputClass =
    "w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all";

  return (
    <section id="reservation" className="section-padding bg-secondary/50">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-10">
          <p className="text-terracotta font-semibold text-sm tracking-widest uppercase mb-3">Reserve</p>
          <h2 className="section-title">Book a Table</h2>
          <p className="section-subtitle">Secure your spot for a delightful dining experience.</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-card rounded-2xl p-8 md:p-10 space-y-5"
          style={{ boxShadow: "var(--shadow-hero)" }}
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <input
              className={inputClass}
              placeholder="Your Name *"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              maxLength={100}
            />
            <input
              type="email"
              className={inputClass}
              placeholder="Email Address *"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              maxLength={255}
            />
            <input
              type="tel"
              className={inputClass}
              placeholder="Phone Number"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
            <select
              className={inputClass}
              value={form.guests}
              onChange={(e) => setForm({ ...form, guests: e.target.value })}
            >
              <option value="">Number of Guests</option>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                <option key={n} value={n}>{n} {n === 1 ? "Guest" : "Guests"}</option>
              ))}
            </select>
            <input
              type="date"
              className={inputClass}
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
            />
            <input
              type="time"
              className={inputClass}
              value={form.time}
              onChange={(e) => setForm({ ...form, time: e.target.value })}
            />
          </div>
          <textarea
            className={`${inputClass} resize-none`}
            rows={3}
            placeholder="Special requests or message..."
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            maxLength={1000}
          />
          <button
            type="submit"
            className="w-full py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold flex items-center justify-center gap-2 hover:bg-primary/90 transition-all duration-300 hover:scale-[1.01]"
          >
            <Send className="w-4 h-4" /> Send Reservation Request
          </button>
        </form>
      </div>
    </section>
  );
};

export default ReservationSection;
