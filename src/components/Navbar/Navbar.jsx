import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "../../data/data";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [active, setActive] = useState("/");

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const handleLinkClick = (href) => {
    setActive(href);
    setMobileDrawerOpen(false);
  };

  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 py-5 backdrop-blur-sm p-7">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <Link to="/">
              <span className="text-4xl font-stylish text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 tracking-wide font-extrabold transition-transform hover:scale-110 duration-300 text-shadow">
                _Portfolio
              </span>
            </Link>
          </div>
          <ul className="hidden lg:flex space-x-12">
            {navItems.map((item, index) => (
              <li key={index} onClick={() => handleLinkClick(item.href)}>
                <Link
                  className={`font-normal text-xl ${
                    location.pathname === item.href
                      ? "text-orange-400 border-t-4 font-extrabold border-red-500"
                      : "text-gray-400"
                  }`}
                  to={item.href}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? (
                <X className="text-white" />
              ) : (
                <Menu className="text-white" />
              )}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 mt-3 bg-dark-teal bg-opacity-90 backdrop-blur-sm w-full p-12 flex flex-col justify-center items-center lg:hidden transition-transform duration-300 ease-in-out">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4 text-center">
                  <Link
                    className={
                      location.pathname === item.href
                        ? "text-yellow-500 font-extrabold"
                        : "text-gray-950 font-extrabold"
                    }
                    to={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
