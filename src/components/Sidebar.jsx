import React, { useContext } from "react";
import {
  LayoutDashboard,
  Trophy,
  Gift,
  User,
  Repeat,
  Menu,
  ChevronLeft,
  Users,
  Recycle,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const navItems = [
  { label: "View Products", icon: <LayoutDashboard />, to: "/" },
  { label: "Leaderboard", icon: <Trophy />, to: "/leaderboard" },
  { label: "Rewards", icon: <Gift />, to: "/rewards" },
  { label: "Profile", icon: <User />, to: "/consumer" },
  { label: "Recycle", icon: <Repeat />, to: "/recycle" },
  { label: "Become a Supplier", icon: <Users />, to: "/supplier-register" },
  { label: "Why Sustainability", icon: <Recycle />, to: "/why-sustainability" },
];

const Sidebar = () => {
  const { sidebarCollapsed, setSidebarCollapsed } = useContext(AppContext);
  const location = useLocation();

  return (
    <div
      className={`fixed top-16 left-0 h-[calc(100vh-64px)] bg-white border-r shadow-sm transition-all duration-300 ${
        sidebarCollapsed ? "w-16" : "w-60"
      }`}
    >
      <div className="flex items-center justify-between p-4 border-b">
        <h1
          className={`font-bold text-green-600 text-lg font-quicksand ${
            sidebarCollapsed && "hidden"
          }`}
        >
          EcoTote
        </h1>
        <button onClick={() => setSidebarCollapsed(!sidebarCollapsed)}>
          {sidebarCollapsed ? <Menu /> : <ChevronLeft />}
        </button>
      </div>

      <nav className="mt-4 flex flex-col space-y-2">
        {navItems.map((item, idx) => (
          <Link
            key={idx}
            to={item.to}
            className={`flex items-center gap-4 px-4 py-2 mx-2 rounded-lg hover:bg-green-100 transition ${
              location.pathname === item.to
                ? "bg-green-200 text-green-800 font-semibold"
                : "text-gray-600"
            }`}
          >
            <span className="w-5">{item.icon}</span>
            {!sidebarCollapsed && <span>{item.label}</span>}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
