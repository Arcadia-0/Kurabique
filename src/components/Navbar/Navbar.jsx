import { useState, useEffect, useRef } from "react";
import {Link} from "react-router-dom"
import logo from "../../assets/logo.png";
import { FaArrowUp, FaBars, FaSearch, FaInstagram } from "react-icons/fa"; // Instagram ve Search ikonları

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false); // Back to top butonu için state
  const [searchOpen, setSearchOpen] = useState(false); // Arama açılma durumu
  const searchRef = useRef(null); // Arama kutusunun dışına tıklama kontrolü için ref

  // Scroll eventini takip et
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false); 
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Arama kutusunun dışına tıklanırsa kapat
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", 
    });
  };

  return (
    <nav className="text-primary shadow-md  w-full top-0 left-0 z-50 ">
      <div className="container mx-auto py-4 flex items-center justify-between relative">
        {/* Logo */}
        <img src={logo} alt="Logo" className="h-12" />

        {/* Hamburger Button (Mobile) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-3xl absolute right-4 top-4"
        >
          {menuOpen ? <FaBars className="transform rotate-45" /> : <FaBars />}
        </button>

        {/* Menü (Desktop ve Mobile) */}
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } lg:flex lg:space-x-8 lg:items-center w-full lg:w-auto mt-4 lg:mt-0 justify-center`}
        >
          <ul className="flex flex-col lg:flex-row lg:space-x-8 text-center lg:text-left">
            <li>
              <Link to="/cookies"
               
                className="text-xl font-semibold hover:text-primary transition duration-300"
              >
                Kurabiyeler
              </Link>
            </li>
            <li>
              <Link to="/cakes"
                
                className="text-xl font-semibold hover:text-primary transition duration-300"
              >
                Kekler
              </Link>
            </li>
            <li>
              <a
                href="#chocolate"
                className="text-xl font-semibold hover:text-primary transition duration-300"
              >
                Çikolata
              </a>
            </li>
            <li>
              <a
                href="#gifts"
                className="text-xl font-semibold hover:text-primary transition duration-300"
              >
                Hediyelik
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-xl font-semibold hover:text-primary transition duration-300"
              >
                İletişim
              </a>
            </li>
          </ul>
        </div>

        <div className="flex items-center space-x-4 lg:space-x-8">
          {/* Search Icon, show on both mobile and desktop */}
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="text-2xl text-primary hover:text-secondary transition duration-300 hidden lg:block"
          >
            <FaSearch />
          </button>

          {/* Arama kutusu */}
          {searchOpen && (
            <div
              ref={searchRef}
              className="absolute top-14 right-0 bg-white shadow-lg p-2 rounded-md w-64 lg:w-80"
            >
              <input
                type="text"
                placeholder="Ara..."
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
          )}

          {/* Instagram Icon, visible on mobile and desktop */}
          <a
            href="https://www.instagram.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-primary hover:text-secondary transition duration-300 hidden lg:block"
          >
            <FaInstagram />
          </a>
      
        </div>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed z-50 bottom-4 right-4 p-3 bg-secondary text-black rounded-full shadow-lg hover:bg-primary transition"
          aria-label="Back to top"
        >
          <FaArrowUp size={24} />
        </button>
      )}
    </nav>
  );
};

export default Navbar;
