"use client";
import { useState } from "react";
import { Home, Calendar, Clock, User } from "lucide-react";

export default function Sidebar({ onSelect }) {
  const [active, setActive] = useState("home");

  const menus = [
    { id: "home", label: "Home", icon: <Home size={20} /> },
    { id: "event", label: "Event", icon: <Calendar size={20} /> },
    { id: "absensi", label: "Absensi", icon: <Clock size={20} /> },
    { id: "profile", label: "Profile", icon: <User size={20} /> },
  ];

  const handleClick = (id) => {
    setActive(id);
    if (onSelect) onSelect(id);
  };

  return (
    <div className="h-screen w-56 bg-green-800 shadow-md flex flex-col p-4">
      <h1 className="text-2xl font-bold">Club<span className="text-orange-500">Zone</span></h1>

      <nav className="flex flex-col gap-4 mt-8">
        {menus.map((menu) => (
          <button
            key={menu.id}
            onClick={() => handleClick(menu.id)}
            className={`flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium transition-all
              ${
                active === menu.id
                  ? "bg-green-700 text-white shadow-sm"
                  : "text-white hover:bg-green-700"
              }`}
          >
            {menu.icon}
            {menu.label}
          </button>
        ))}
      </nav>
    </div>
  );
}
