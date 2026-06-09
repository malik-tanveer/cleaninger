import { Link, useLocation } from "react-router-dom";
import { FiArrowRight, FiChevronDown } from "react-icons/fi";
import logo1 from "/logo1.svg";
import logo2 from "/logo2.png";

function Navbar() {
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  return (
    <nav
      className={`top-0 left-0 w-full z-50 ${
        isHomePage ? "absolute" : "relative bg-white shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          
          {/* Logo */}

          <Link to="/">
            <img
              src={isHomePage ? logo1 : logo2}
              alt="Logo"
              className="h-12 w-auto"
            />
          </Link>

          {/* Menu */}
          <ul
            className={`hidden lg:flex items-center gap-10 font-semibold ${
              isHomePage ? "text-white" : "text-black"
            }`}
          >
            <li>
              <Link
                to="/"
                className="hover:text-yellow-400 duration-300"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/services"
                className="hover:text-yellow-400 duration-300"
              >
                Services
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                className="hover:text-yellow-400 duration-300"
              >
                About
              </Link>
            </li>

            {/* Pages Dropdown */}
            <li className="relative group">
              <button className="flex items-center gap-1 hover:text-yellow-400 duration-300">
                Pages
                <FiChevronDown />
              </button>

              <div className="absolute top-full left-0 mt-4 w-64 bg-white rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 overflow-hidden z-50">
                
                <Link
                  to="/"
                  className="block px-5 py-3 text-black hover:bg-gray-100"
                >
                  Home
                </Link>

                <Link
                  to="/home2"
                  className="block px-5 py-3 text-black hover:bg-gray-100"
                >
                  Home 2
                </Link>

                <Link
                  to="/about"
                  className="block px-5 py-3 text-black hover:bg-gray-100"
                >
                  About
                </Link>

                <Link
                  to="/services"
                  className="block px-5 py-3 text-black hover:bg-gray-100"
                >
                  Services
                </Link>

                <Link
                  to="/service-static"
                  className="block px-5 py-3 text-black hover:bg-gray-100"
                >
                  Service Static
                </Link>

                <Link
                  to="/pricing"
                  className="block px-5 py-3 text-black hover:bg-gray-100"
                >
                  Pricing
                </Link>

                <Link
                  to="/blog"
                  className="block px-5 py-3 text-black hover:bg-gray-100"
                >
                  Blog
                </Link>

                <Link
                  to="/contact"
                  className="block px-5 py-3 text-black hover:bg-gray-100"
                >
                  Contact
                </Link>

                <Link
                  to="/privacy-policy"
                  className="block px-5 py-3 text-black hover:bg-gray-100"
                >
                  Privacy Policy
                </Link>
              </div>
            </li>
          </ul>

          {/* Contact Button */}
          <Link
            to="/contact"
            className="bg-[#4B4BFF] hover:bg-[#3c3cff] transition-all duration-300 px-6 py-3 rounded-xl flex items-center gap-3 font-semibold text-white"
          >
            Contact us

            <span className="bg-white text-black p-2 rounded-lg">
              <FiArrowRight />
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;