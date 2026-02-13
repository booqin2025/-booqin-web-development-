import { NavLink } from "react-router-dom";
import { Home, Grid, Building, ShoppingBag, ShoppingCart } from "lucide-react";
const BottomNavbar = () => {
  const navItems = [
    { to: "", label: "Home", icon: Home },
    { to: "/categories", label: "Categories", icon: Grid },
    { to: "/salons", label: "Salons", icon: Building },
    { to: "/shop", label: "Shop", icon: ShoppingBag },
    { to: "/cart", label: "Cart", icon: ShoppingCart },
  ];

  return (
    <>
      <nav className="fixed bottom-0 left-0 w-full bg-[#0b2545] text-white flex justify-around py-3 shadow-lg z-50">
        {navItems.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            end
            className={({ isActive }) =>
              `flex flex-col items-center text-xs ${
                isActive ? "text-orange-400" : "text-white"
              }`
            }
          >
            <Icon size={26} />
            <span className="mt-1">{label}</span>
          </NavLink>
        ))}
      </nav>
    </>
  );
};

export default BottomNavbar;
