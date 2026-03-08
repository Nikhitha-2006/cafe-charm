import { useState } from "react";
import { Send, CheckCircle2, CalendarDays, Clock, Users, X } from "lucide-react";
import { toast } from "sonner";

const ReservationSection = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", date: "", time: "", guests: "", message: "" });
  const [confirmation, setConfirmation] = useState<null | { id: string; name: string; date: string; time: string; guests: string }>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) {
      toast.error("Please fill in your name and email.");
      return;
    }
    if (!form.date || !form.time || !form.guests) {
      toast.error("Please select date, time and number of guests.");
      return;
    }

    const bookingId = "FB-" + Date.now().toString(36).toUpperCase().slice(-6);
    setConfirmation({
      id: bookingId,
      name: form.name,
      date: form.date,
      time: form.time,
      guests: form.guests,
    });
    setForm({ name: "", email: "", phone: "", date: "", time: "", guests: "", message: "" });
  };

  const formatDate = (dateStr: string) => {
    try {
      return new Date(dateStr).toLocaleDateString("en-IN", { weekday: "long", day: "numeric", month: "long", year: "numeric" });
    } catch {
      return dateStr;
    }
  };

  const formatTime = (timeStr: string) => {
    try {
      const [h, m] = timeStr.split(":");
      const hour = parseInt(h);
      return `${hour > 12 ? hour - 12 : hour}:${m} ${hour >= 12 ? "PM" : "AM"}`;
    } catch {
      return timeStr;
    }
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
              <option value="">Number of Guests *</option>
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

      {/* Confirmation Modal */}
      {confirmation && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-fade-in">
          <div className="bg-card rounded-2xl p-8 max-w-md w-full relative shadow-2xl animate-scale-in">
            <button
              onClick={() => setConfirmation(null)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center mb-6">
              <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-9 h-9 text-primary" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-foreground">Table Reserved!</h3>
              <p className="text-muted-foreground text-sm mt-1">Your booking has been confirmed</p>
            </div>

            <div className="bg-secondary/50 rounded-xl p-5 space-y-3 mb-6">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Booking ID</span>
                <span className="font-bold text-primary font-mono">{confirmation.id}</span>
              </div>
              <div className="border-t border-border" />
              <div className="flex items-center gap-2 text-sm">
                <Users className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">Guest:</span>
                <span className="font-semibold text-foreground ml-auto">{confirmation.name}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CalendarDays className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">Date:</span>
                <span className="font-semibold text-foreground ml-auto">{formatDate(confirmation.date)}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Clock className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">Time:</span>
                <span className="font-semibold text-foreground ml-auto">{formatTime(confirmation.time)}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Users className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">Guests:</span>
                <span className="font-semibold text-foreground ml-auto">{confirmation.guests} {parseInt(confirmation.guests) === 1 ? "Guest" : "Guests"}</span>
              </div>
            </div>

            <p className="text-xs text-center text-muted-foreground mb-4">
              A confirmation has been sent to your email. Please save your Booking ID for reference.
            </p>

            <button
              onClick={() => setConfirmation(null)}
              className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ReservationSection;
