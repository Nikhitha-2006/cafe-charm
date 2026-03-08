import { useState } from "react";
import { Star } from "lucide-react";

import menuCoffee from "@/assets/menu-coffee.jpg";
import menuIcedCoffee from "@/assets/menu-iced-coffee.jpg";
import menuSnack from "@/assets/menu-snack.jpg";
import menuMuffin from "@/assets/menu-muffin.jpg";
import menuDessert from "@/assets/menu-dessert.jpg";
import menuTiramisu from "@/assets/menu-tiramisu.jpg";
import menuSpecial from "@/assets/menu-special.jpg";

type MenuItem = {
  name: string;
  desc: string;
  price: string;
  image: string;
  popular?: boolean;
};

const categories: Record<string, MenuItem[]> = {
  Coffee: [
    { name: "Flat White", desc: "Velvety steamed milk over a double shot of espresso", price: "₹375", image: menuCoffee, popular: true },
    { name: "Iced Caramel Macchiato", desc: "Espresso layered with vanilla milk and caramel drizzle", price: "₹459", image: menuIcedCoffee },
  ],
  Snacks: [
    { name: "Avocado Toast", desc: "Sourdough, smashed avocado, poached egg, microgreens", price: "₹749", image: menuSnack, popular: true },
    { name: "Blueberry Muffin", desc: "Freshly baked with organic blueberries and oat crumble", price: "₹329", image: menuMuffin },
  ],
  Desserts: [
    { name: "Chocolate Lava Cake", desc: "Warm molten center with raspberry coulis and fresh berries", price: "₹699", image: menuDessert, popular: true },
    { name: "Classic Tiramisu", desc: "Layered mascarpone, espresso-soaked ladyfingers, cocoa", price: "₹625", image: menuTiramisu },
  ],
  "Special Dishes": [
    { name: "Truffle Pasta", desc: "Hand-rolled linguine, parmesan cream, fresh truffle shavings", price: "₹1,169", image: menuSpecial, popular: true },
  ],
};

const categoryKeys = Object.keys(categories);

const MenuSection = () => {
  const [active, setActive] = useState(categoryKeys[0]);

  return (
    <section id="menu" className="section-padding bg-secondary/50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <p className="text-terracotta font-semibold text-sm tracking-widest uppercase mb-3">Our Menu</p>
          <h2 className="section-title">Crafted with Love</h2>
          <p className="section-subtitle">Fresh ingredients, bold flavors, and a passion for perfection.</p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categoryKeys.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                active === cat
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-card text-muted-foreground hover:bg-muted"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {categories[active].map((item) => (
            <div key={item.name} className="menu-card">
              <div className="relative h-52 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  loading="lazy"
                />
                {item.popular && (
                  <span className="popular-badge flex items-center gap-1">
                    <Star className="w-3 h-3" /> Popular
                  </span>
                )}
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-heading text-lg font-semibold text-foreground">{item.name}</h3>
                  <span className="text-terracotta font-bold text-lg shrink-0">{item.price}</span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
