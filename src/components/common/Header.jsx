import { useState, useEffect } from "react";
import { Menu, Bell, Search, User, ChevronDown, LogOut } from "lucide-react";

const Header = ({ toggleSidebar }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`header fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${
        isScrolled ? "shadow-md bg-white" : "bg-white"
      }`}
    >
      <div className="flex items-center justify-between h-16 px-4">
        {/* Mobile menu button */}
        <button
          onClick={toggleSidebar}
          className="md:hidden p-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
        >
          <Menu className="h-6 w-6" />
        </button>

        {/* Search bar */}
        <div className="flex-1 max-w-md mx-4 hidden md:block">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search..."
              className="block w-full pl-10 pr-3 py-2 rounded-md bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Right side icons */}
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-100 relative">
            <Bell className="h-6 w-6" />
            <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
          </button>

          {/* Profile dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              className="flex items-center space-x-2 focus:outline-none"
            >
              <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                <User className="h-5 w-5 text-gray-600" />
              </div>
              <span className="hidden md:inline text-gray-700 text-sm font-medium">
                Admin
              </span>
              <ChevronDown
                className={`h-4 w-4 text-gray-500 transition-transform ${
                  showProfileMenu ? "transform rotate-180" : ""
                }`}
              />
            </button>

            {showProfileMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200">
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                >
                  <User className="h-4 w-4 mr-2" />
                  Profile
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Sign out
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
