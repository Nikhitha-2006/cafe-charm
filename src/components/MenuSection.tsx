import { useState } from "react";
import { Star } from "lucide-react";

import menuCoffee from "@/assets/menu-coffee.jpg";
import menuIcedCoffee from "@/assets/menu-iced-coffee.jpg";
import menuCappuccino from "@/assets/menu-cappuccino.jpg";
import menuChai from "@/assets/menu-chai.jpg";
import menuColdBrew from "@/assets/menu-coldbrew.jpg";
import menuHotChoc from "@/assets/menu-hotchoc.jpg";
import menuLassi from "@/assets/menu-lassi.jpg";
import menuSnack from "@/assets/menu-snack.jpg";
import menuMuffin from "@/assets/menu-muffin.jpg";
import menuSandwich from "@/assets/menu-sandwich.jpg";
import menuWrap from "@/assets/menu-wrap.jpg";
import menuSmoothie from "@/assets/menu-smoothie.jpg";
import menuSalad from "@/assets/menu-salad.jpg";
import menuFries from "@/assets/menu-fries.jpg";
import menuEggsBenedict from "@/assets/menu-eggsbenedict.jpg";
import menuDessert from "@/assets/menu-dessert.jpg";
import menuTiramisu from "@/assets/menu-tiramisu.jpg";
import menuBrownie from "@/assets/menu-brownie.jpg";
import menuCheesecake from "@/assets/menu-cheesecake.jpg";
import menuGulabJamun from "@/assets/menu-gulabjamun.jpg";
import menuSpecial from "@/assets/menu-special.jpg";
import menuPizza from "@/assets/menu-pizza.jpg";
import menuButterChicken from "@/assets/menu-butterchicken.jpg";

type MenuItem = {
  name: string;
  desc: string;
  price: string;
  image: string;
  popular?: boolean;
};

const categories: Record<string, MenuItem[]> = {
  Coffee: [
    { name: "Masala Chai", desc: "Traditional spiced tea brewed with cardamom, ginger & cinnamon", price: "₹79", image: menuChai, popular: true },
    { name: "Cappuccino", desc: "Rich espresso with thick, creamy frothed milk", price: "₹129", image: menuCappuccino },
    { name: "Flat White", desc: "Velvety steamed milk over a double shot of espresso", price: "₹149", image: menuCoffee, popular: true },
    { name: "Hot Chocolate", desc: "Rich Belgian cocoa topped with whipped cream & cocoa dust", price: "₹139", image: menuHotChoc },
    { name: "Iced Caramel Macchiato", desc: "Espresso layered with vanilla milk and caramel drizzle", price: "₹179", image: menuIcedCoffee },
    { name: "Cold Brew", desc: "Slow-steeped 18-hour cold brew with a smooth, bold finish", price: "₹159", image: menuColdBrew },
    { name: "Mango Lassi", desc: "Creamy yogurt blended with fresh Alphonso mango pulp", price: "₹99", image: menuLassi },
  ],
  Snacks: [
    { name: "Blueberry Muffin", desc: "Freshly baked with organic blueberries and oat crumble", price: "₹99", image: menuMuffin },
    { name: "Crispy Fries", desc: "Golden seasoned fries served with signature dipping sauce", price: "₹119", image: menuFries },
    { name: "Grilled Cheese Sandwich", desc: "Crispy golden bread with melted cheddar and herbs", price: "₹149", image: menuSandwich },
    { name: "Smoothie Bowl", desc: "Berry smoothie topped with granola, fresh fruits & chia seeds", price: "₹169", image: menuSmoothie },
    { name: "Paneer Tikka Wrap", desc: "Spiced paneer, fresh veggies, mint chutney in a soft wrap", price: "₹179", image: menuWrap, popular: true },
    { name: "Avocado Toast", desc: "Sourdough, smashed avocado, poached egg, microgreens", price: "₹199", image: menuSnack, popular: true },
    { name: "Caesar Salad", desc: "Crisp romaine, garlic croutons, parmesan shavings, tangy dressing", price: "₹189", image: menuSalad },
    { name: "Eggs Benedict", desc: "Poached eggs on English muffin with hollandaise & chives", price: "₹229", image: menuEggsBenedict },
  ],
  Desserts: [
    { name: "Gulab Jamun", desc: "Soft milk dumplings soaked in rose-cardamom sugar syrup", price: "₹89", image: menuGulabJamun, popular: true },
    { name: "Brownie with Ice Cream", desc: "Warm fudgy brownie topped with vanilla ice cream & chocolate drizzle", price: "₹169", image: menuBrownie },
    { name: "Classic Tiramisu", desc: "Layered mascarpone, espresso-soaked ladyfingers, cocoa", price: "₹199", image: menuTiramisu },
    { name: "Chocolate Lava Cake", desc: "Warm molten center with raspberry coulis and fresh berries", price: "₹219", image: menuDessert, popular: true },
    { name: "Strawberry Cheesecake", desc: "Creamy New York cheesecake with fresh strawberry compote", price: "₹229", image: menuCheesecake },
  ],
  "Special Dishes": [
    { name: "Margherita Pizza", desc: "Wood-fired crust, fresh mozzarella, basil, San Marzano tomatoes", price: "₹299", image: menuPizza },
    { name: "Butter Chicken with Naan", desc: "Creamy tomato gravy with tender chicken, served with fresh naan", price: "₹329", image: menuButterChicken, popular: true },
    { name: "Truffle Pasta", desc: "Hand-rolled linguine, parmesan cream, fresh truffle shavings", price: "₹349", image: menuSpecial, popular: true },
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
