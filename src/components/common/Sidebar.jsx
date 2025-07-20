import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  LayoutDashboard,
  Calendar,
  Users,
  Truck,
  DollarSign,
  Settings,
  ChevronRight,
  ChevronDown,
  User,
} from "lucide-react";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuItems = [
    {
      name: "Dashboard",
      icon: LayoutDashboard,
      path: "/admin",
    },
    {
      name: "Bookings",
      icon: Calendar,
      path: "/bookings",
      subItems: [
        { name: "All Bookings", path: "/bookings" },
        { name: "New Booking", path: "/bookings" },
        { name: "Calendar", path: "/bookings" },
      ],
    },
    {
      name: "Drivers",
      icon: Users,
      path: "/drivers",
      subItems: [
        { name: "All Drivers", path: "/drivers" },
        { name: "Add Driver", path: "/drivers" },
        { name: "Live Tracking", path: "/drivers/tracking" },
      ],
    },
    {
      name: "Rides",
      icon: Truck,
      path: "/rides",
      subItems: [
        { name: "Active Rides", path: "/rides/active" },
        { name: "Ride History", path: "/rides/history" },
      ],
    },
    {
      name: "Earnings",
      icon: DollarSign,
      path: "/earnings",
    },
    {
      name: "Settings",
      icon: Settings,
      path: "/settings",
    },
  ];

  const toggleMenu = (index) => {
    if (activeMenu === index) {
      setActiveMenu(null);
    } else {
      setActiveMenu(index);
    }
  };

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && isMobile && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      <aside
        className={`sidebar fixed top-0 left-0 h-full z-30 transition-all duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <div className="h-full flex flex-col bg-gray-800 text-white">
          {/* Logo */}
          <div className="flex items-center justify-center h-16 px-4 border-b border-gray-700">
            <h1 className="text-xl font-bold">eWaste Admin</h1>
          </div>

          {/* Menu items */}
          <nav className="flex-1 overflow-y-auto py-4">
            <ul className="space-y-1 px-2">
              {menuItems.map((item, index) => (
                <li key={index}>
                  {item.subItems ? (
                    <>
                      <button
                        onClick={() => toggleMenu(index)}
                        className={`w-full flex items-center justify-between p-3 rounded-lg ${
                          location.pathname.startsWith(item.path)
                            ? "bg-gray-700 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white"
                        }`}
                      >
                        <div className="flex items-center">
                          <item.icon className="h-5 w-5 mr-3" />
                          <span>{item.name}</span>
                        </div>
                        {activeMenu === index ? (
                          <ChevronDown className="h-4 w-4" />
                        ) : (
                          <ChevronRight className="h-4 w-4" />
                        )}
                      </button>
                      {activeMenu === index && (
                        <ul className="ml-8 mt-1 space-y-1">
                          {item.subItems.map((subItem, subIndex) => (
                            <li key={subIndex}>
                              <Link
                                to={subItem.path}
                                className={`block p-2 rounded-md text-sm ${
                                  location.pathname === subItem.path
                                    ? "text-white bg-blue-600"
                                    : "text-gray-300 hover:text-white hover:bg-gray-700"
                                }`}
                              >
                                {subItem.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <Link
                      to={item.path}
                      className={`flex items-center p-3 rounded-lg ${
                        location.pathname === item.path
                          ? "bg-gray-700 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white"
                      }`}
                    >
                      <item.icon className="h-5 w-5 mr-3" />
                      <span>{item.name}</span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Sidebar footer */}
          <div className="p-4 border-t border-gray-700">
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-gray-600 flex items-center justify-center">
                <User className="h-5 w-5 text-white" />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-white">Admin User</p>
                <p className="text-xs text-gray-400">Super Admin</p>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
