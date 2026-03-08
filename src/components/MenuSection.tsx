import { useState } from "react";
import { Star } from "lucide-react";

// Hot Beverages
import menuChai from "@/assets/menu-chai.jpg";
import menuGreenTea from "@/assets/menu-greentea.jpg";
import menuEspresso from "@/assets/menu-espresso.jpg";
import menuAmericano from "@/assets/menu-americano.jpg";
import menuCappuccino from "@/assets/menu-cappuccino.jpg";
import menuCoffee from "@/assets/menu-coffee.jpg";
import menuLatte from "@/assets/menu-latte.jpg";
import menuMocha from "@/assets/menu-mocha.jpg";
import menuHotChoc from "@/assets/menu-hotchoc.jpg";
import menuTurmeric from "@/assets/menu-turmeric.jpg";

// Cold Beverages
import menuIcedTea from "@/assets/menu-icedtea.jpg";
import menuLassi from "@/assets/menu-lassi.jpg";
import menuLimeSoda from "@/assets/menu-limesoda.jpg";
import menuColdCoffee from "@/assets/menu-coldcoffee.jpg";
import menuColdBrew from "@/assets/menu-coldbrew.jpg";
import menuIcedCoffee from "@/assets/menu-iced-coffee.jpg";
import menuBerrySmoothie from "@/assets/menu-berrysmoothie.jpg";
import menuOreoShake from "@/assets/menu-oreoshake.jpg";

// Snacks
import menuFries from "@/assets/menu-fries.jpg";
import menuMuffin from "@/assets/menu-muffin.jpg";
import menuCookie from "@/assets/menu-cookie.jpg";
import menuVegPuff from "@/assets/menu-vegpuff.jpg";
import menuSandwich from "@/assets/menu-sandwich.jpg";
import menuClubSandwich from "@/assets/menu-clubsandwich.jpg";
import menuWrap from "@/assets/menu-wrap.jpg";
import menuChickenWrap from "@/assets/menu-chickenwrap.jpg";
import menuSnack from "@/assets/menu-snack.jpg";
import menuSalad from "@/assets/menu-salad.jpg";
import menuSmoothie from "@/assets/menu-smoothie.jpg";
import menuEggsBenedict from "@/assets/menu-eggsbenedict.jpg";

// Desserts
import menuGulabJamun from "@/assets/menu-gulabjamun.jpg";
import menuRasgulla from "@/assets/menu-rasgulla.jpg";
import menuBrownie from "@/assets/menu-brownie.jpg";
import menuTiramisu from "@/assets/menu-tiramisu.jpg";
import menuDessert from "@/assets/menu-dessert.jpg";
import menuCheesecake from "@/assets/menu-cheesecake.jpg";
import menuBlueberryCheesecake from "@/assets/menu-blueberrycheesecake.jpg";
import menuWaffle from "@/assets/menu-waffle.jpg";
import menuSundae from "@/assets/menu-sundae.jpg";

// Main Course
import menuPizza from "@/assets/menu-pizza.jpg";
import menuFarmhousePizza from "@/assets/menu-farmhousepizza.jpg";
import menuPenne from "@/assets/menu-penne.jpg";
import menuAlfredo from "@/assets/menu-alfredo.jpg";
import menuSpecial from "@/assets/menu-special.jpg";
import menuButterChicken from "@/assets/menu-butterchicken.jpg";
import menuPaneerMasala from "@/assets/menu-paneermasala.jpg";
import menuDalMakhani from "@/assets/menu-dalmakhani.jpg";
import menuChickenBiryani from "@/assets/menu-chickenbiryani.jpg";
import menuVegBiryani from "@/assets/menu-vegbiryani.jpg";

// Chef's Specials
import menuNachos from "@/assets/menu-nachos.jpg";
import menuShakshuka from "@/assets/menu-shakshuka.jpg";
import menuTruffleFries from "@/assets/menu-trufflefries.jpg";
import menuAcaiBowl from "@/assets/menu-acaibowl.jpg";
import menuBurger from "@/assets/menu-burger.jpg";
import menuFrenchToast from "@/assets/menu-frenchtoast.jpg";
import menuMatchaLatte from "@/assets/menu-matchalatte.jpg";
import menuBanoffeePie from "@/assets/menu-banoffeepie.jpg";
type MenuItem = {
  name: string;
  desc: string;
  price: string;
  image: string;
  popular?: boolean;
};

const categories: Record<string, MenuItem[]> = {
  "Hot Beverages": [
    { name: "Masala Chai", desc: "Traditional spiced tea brewed with cardamom, ginger & cinnamon", price: "₹49", image: menuChai, popular: true },
    { name: "Green Tea", desc: "Light and refreshing Japanese-style green tea", price: "₹59", image: menuGreenTea },
    { name: "Espresso", desc: "Intense single-origin shot, rich crema finish", price: "₹79", image: menuEspresso },
    { name: "Americano", desc: "Double espresso with hot water for a smooth, long coffee", price: "₹99", image: menuAmericano },
    { name: "Cappuccino", desc: "Rich espresso with thick, creamy frothed milk", price: "₹119", image: menuCappuccino },
    { name: "Flat White", desc: "Velvety steamed milk over a double shot of espresso", price: "₹129", image: menuCoffee, popular: true },
    { name: "Café Latte", desc: "Smooth espresso blended with steamed milk and light foam", price: "₹129", image: menuLatte },
    { name: "Hot Chocolate", desc: "Rich Belgian cocoa topped with whipped cream & cocoa dust", price: "₹139", image: menuHotChoc },
    { name: "Café Mocha", desc: "Espresso, steamed milk, and Belgian chocolate, topped with cream", price: "₹149", image: menuMocha },
    { name: "Turmeric Latte", desc: "Golden milk with turmeric, honey, cinnamon & warm spices", price: "₹119", image: menuTurmeric },
  ],
  "Cold Beverages": [
    { name: "Fresh Lime Soda", desc: "Refreshing lime with soda, mint and a pinch of rock salt", price: "₹59", image: menuLimeSoda },
    { name: "Iced Tea", desc: "Chilled lemon tea with fresh mint and honey", price: "₹69", image: menuIcedTea },
    { name: "Mango Lassi", desc: "Creamy yogurt blended with fresh Alphonso mango pulp", price: "₹89", image: menuLassi, popular: true },
    { name: "Cold Coffee", desc: "Chilled blended coffee with milk and a hint of vanilla", price: "₹119", image: menuColdCoffee },
    { name: "Berry Smoothie", desc: "Mixed berries, banana, yogurt & a drizzle of honey", price: "₹149", image: menuBerrySmoothie },
    { name: "Cold Brew", desc: "Slow-steeped 18-hour cold brew with a smooth, bold finish", price: "₹149", image: menuColdBrew },
    { name: "Oreo Milkshake", desc: "Thick creamy shake blended with Oreo cookies & ice cream", price: "₹159", image: menuOreoShake },
    { name: "Iced Caramel Macchiato", desc: "Espresso layered with vanilla milk and caramel drizzle", price: "₹169", image: menuIcedCoffee, popular: true },
  ],
  Snacks: [
    { name: "Veg Puff", desc: "Flaky pastry filled with spiced potato and peas", price: "₹49", image: menuVegPuff },
    { name: "Chocolate Chip Cookie", desc: "Warm, gooey cookie loaded with Belgian chocolate chips", price: "₹59", image: menuCookie },
    { name: "Blueberry Muffin", desc: "Freshly baked with organic blueberries and oat crumble", price: "₹79", image: menuMuffin },
    { name: "Masala Fries", desc: "Crispy golden fries tossed with chaat masala & lime", price: "₹89", image: menuFries },
    { name: "Grilled Cheese Sandwich", desc: "Crispy golden bread with melted cheddar and herbs", price: "₹129", image: menuSandwich },
    { name: "Smoothie Bowl", desc: "Berry smoothie topped with granola, fresh fruits & chia seeds", price: "₹159", image: menuSmoothie },
    { name: "Paneer Tikka Wrap", desc: "Spiced paneer, fresh veggies, mint chutney in a soft wrap", price: "₹159", image: menuWrap, popular: true },
    { name: "Caesar Salad", desc: "Crisp romaine, garlic croutons, parmesan shavings, tangy dressing", price: "₹169", image: menuSalad },
    { name: "Club Sandwich", desc: "Triple-layered with chicken, egg, lettuce, tomato & mayo", price: "₹169", image: menuClubSandwich },
    { name: "Chicken Tikka Wrap", desc: "Smoky tandoori chicken, onion, peppers in a warm tortilla", price: "₹179", image: menuChickenWrap },
    { name: "Avocado Toast", desc: "Sourdough, smashed avocado, poached egg, microgreens", price: "₹179", image: menuSnack, popular: true },
    { name: "Eggs Benedict", desc: "Poached eggs on English muffin with hollandaise & chives", price: "₹199", image: menuEggsBenedict },
  ],
  Desserts: [
    { name: "Gulab Jamun (2 pcs)", desc: "Soft milk dumplings soaked in rose-cardamom sugar syrup", price: "₹69", image: menuGulabJamun, popular: true },
    { name: "Rasgulla (2 pcs)", desc: "Spongy cottage cheese balls in light sugar syrup", price: "₹69", image: menuRasgulla },
    { name: "Chocolate Brownie", desc: "Rich, fudgy brownie with walnuts and cocoa glaze", price: "₹99", image: menuBrownie },
    { name: "Brownie with Ice Cream", desc: "Warm brownie topped with vanilla ice cream & chocolate drizzle", price: "₹149", image: menuSundae, popular: true },
    { name: "Ice Cream Sundae", desc: "Three scoops with hot fudge, nuts, whipped cream & cherry", price: "₹169", image: menuSundae },
    { name: "Classic Tiramisu", desc: "Layered mascarpone, espresso-soaked ladyfingers, cocoa", price: "₹179", image: menuTiramisu },
    { name: "Nutella Waffle", desc: "Crispy Belgian waffle drizzled with Nutella & fresh bananas", price: "₹179", image: menuWaffle },
    { name: "Chocolate Lava Cake", desc: "Warm molten center with raspberry coulis and fresh berries", price: "₹199", image: menuDessert },
    { name: "Strawberry Cheesecake", desc: "Creamy New York cheesecake with fresh strawberry compote", price: "₹199", image: menuCheesecake, popular: true },
    { name: "Blueberry Cheesecake", desc: "Classic baked cheesecake with tangy blueberry compote", price: "₹199", image: menuBlueberryCheesecake },
  ],
  "Main Course": [
    { name: "Dal Makhani with Rice", desc: "Slow-cooked black lentils in butter cream, served with jeera rice", price: "₹219", image: menuDalMakhani },
    { name: "Penne Arrabiata", desc: "Penne pasta in a spicy tomato sauce with garlic and basil", price: "₹219", image: menuPenne },
    { name: "Veg Biryani", desc: "Aromatic basmati rice with seasonal vegetables & whole spices", price: "₹219", image: menuVegBiryani },
    { name: "Alfredo Pasta", desc: "Creamy white sauce pasta with mushrooms and parmesan", price: "₹239", image: menuAlfredo },
    { name: "Margherita Pizza", desc: "Wood-fired crust, fresh mozzarella, basil, San Marzano tomatoes", price: "₹249", image: menuPizza },
    { name: "Paneer Butter Masala", desc: "Cottage cheese cubes in a rich, creamy tomato-butter gravy", price: "₹249", image: menuPaneerMasala },
    { name: "Chicken Biryani", desc: "Fragrant basmati rice layered with spiced chicken & saffron", price: "₹269", image: menuChickenBiryani, popular: true },
    { name: "Farmhouse Pizza", desc: "Loaded with bell peppers, onions, mushrooms, olives & corn", price: "₹279", image: menuFarmhousePizza },
    { name: "Butter Chicken with Naan", desc: "Creamy tomato gravy with tender chicken, served with naan", price: "₹279", image: menuButterChicken, popular: true },
    { name: "Truffle Pasta", desc: "Hand-rolled linguine, parmesan cream, fresh truffle shavings", price: "₹299", image: menuSpecial, popular: true },
  ],
  "Chef's Specials": [
    { name: "Matcha Latte", desc: "Ceremonial-grade Japanese matcha with oat milk & honey", price: "₹169", image: menuMatchaLatte, popular: true },
    { name: "Loaded Nachos", desc: "Crispy tortilla chips with cheese, jalapeños, salsa & sour cream", price: "₹199", image: menuNachos, popular: true },
    { name: "Truffle Parmesan Fries", desc: "Golden fries drizzled with truffle oil & parmesan shavings", price: "₹199", image: menuTruffleFries },
    { name: "Açaí Power Bowl", desc: "Açaí blend topped with granola, berries, coconut & chia seeds", price: "₹219", image: menuAcaiBowl },
    { name: "Shakshuka", desc: "Poached eggs in spiced tomato sauce, served with crusty sourdough", price: "₹229", image: menuShakshuka, popular: true },
    { name: "Brioche French Toast", desc: "Thick-cut brioche with berries, maple syrup & whipped cream", price: "₹229", image: menuFrenchToast },
    { name: "Crispy Chicken Burger", desc: "Buttermilk fried chicken, coleslaw, pickles on a brioche bun", price: "₹269", image: menuBurger, popular: true },
    { name: "Banoffee Pie", desc: "Biscuit base, banana, toffee, whipped cream & caramel drizzle", price: "₹219", image: menuBanoffeePie },
  ],
};

const categoryKeys = Object.keys(categories);

const MenuSection = () => {
  const [active, setActive] = useState(categoryKeys[0]);
  const items = categories[active] || categories[categoryKeys[0]] || [];

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
          {items.map((item) => (
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
