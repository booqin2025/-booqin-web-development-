import React from 'react'
import { useState } from "react";
import { Heart, Calendar, Clock, Bell, User, Gift, Percent, Wallet, Headphones, FileText, LogOut } from "lucide-react";

function Sidebar() {
   const [active, setActive] = useState(null);
  const menuSections = [
  {
    title: "Personal & Activity",
    items: [
      { name: "My Wishlist", icon: <Heart size={18} />, link: "/wishlist" },
      { name: "My Bookings", icon: <Calendar size={18} />, link: "/bookings" },
      { name: "Waiting List", icon: <Clock size={18} />, link: "/waiting" },
      { name: "Notifications", icon: <Bell size={18} />, link: "/notifications" },
      { name: "My Profile", icon: <User size={18} />, link: "/profile" },
    ],
  },
  {
    title: "Engagement & Extras",
    items: [
      { name: "Refer & Earn", icon: <Gift size={18} />, link: "/refer" },
      { name: "Offers", icon: <Percent size={18} />, link: "/offers" },
      { name: "My Wallet", icon: <Wallet size={18} />, link: "/wallet" },
    ],
  },
  {
    title: "Support & App Info",
    items: [
      { name: "Feedback & Support", icon: <Headphones size={18} />, link: "/support" },
      { name: "Terms & Conditions", icon: <FileText size={18} />, link: "/terms" },
      { name: "Logout", icon: <LogOut size={18} />, link: "/logout" },
    ],
  },
];
  return (
    <>
    <aside className="w-64 bg-[#062343] text-white min-h-screen flex flex-col justify-between p-4">
      {/* Logo */}
      <div>
        <div className="flex items-center justify-center mb-6">
          <div className="border border-[#245789] px-4 py-6 text-center w-full rounded">
            <h1 className="text-3xl font-semibold text-white tracking-wide">Booqin</h1>
          </div>
        </div>

        {/* Dynamic Sections */}
        {menuSections.map((section, index) => (
          <div key={index} className="mb-5">
            <h2 className="text-sm font-semibold text-gray-400 uppercase mb-2 border-b border-gray-600 pb-1">
              {section.title}
            </h2>
            <ul>
              {section.items.map((item, i) => (
                <li
                  key={i}
                  onClick={() => setActive(item.name)}
                  className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-[#0b3a72] transition ${
                    active === item.name ? "bg-[#0b3a72]" : ""
                  }`}
                >
                  {item.icon}
                  <span className="text-sm">{item.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="text-center border-t border-gray-600 pt-3">
        <p className="text-[#fdbb74] text-sm font-medium cursor-pointer hover:underline">
          Upgrade to Premium for Free!
        </p>
      </div>
    </aside>
  
    </>
  )
}

export default Sidebar