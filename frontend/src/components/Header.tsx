import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white shadow-lg fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-5">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="logo">
            <h2 className="text-primary-gold text-3xl font-bold leading-tight">
              PureNest
            </h2>
            <span className="text-text-light text-sm font-normal">
              Premium Bird's Nest
            </span>
          </div>

          {/* Navigation */}
          <nav
            className={`${isMenuOpen ? "flex" : "hidden"} md:flex flex-col md:flex-row absolute md:relative top-full md:top-auto left-0 md:left-auto right-0 md:right-auto bg-white md:bg-transparent shadow-lg md:shadow-none p-8 md:p-0 gap-8 md:gap-8`}
          >
            <a
              href="#home"
              className="text-text-dark font-medium text-base transition-all duration-300 hover:text-primary-gold relative group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-gold to-accent-light-gold transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#products"
              className="text-text-dark font-medium text-base transition-all duration-300 hover:text-primary-gold relative group"
            >
              Products
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-gold to-accent-light-gold transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#benefits"
              className="text-text-dark font-medium text-base transition-all duration-300 hover:text-primary-gold relative group"
            >
              Benefits
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-gold to-accent-light-gold transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#about"
              className="text-text-dark font-medium text-base transition-all duration-300 hover:text-primary-gold relative group"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-gold to-accent-light-gold transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#contact"
              className="text-text-dark font-medium text-base transition-all duration-300 hover:text-primary-gold relative group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-gold to-accent-light-gold transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>

          {/* Header Actions */}
          <div className="flex items-center gap-4">
            {/* Cart Button */}
            <button className="bg-gradient-to-r from-primary-gold to-accent-light-gold text-white px-4 py-3 rounded-full cursor-pointer flex items-center gap-2 font-semibold transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg">
              <span className="text-lg">🛒</span>
              <span className="bg-white text-primary-gold px-2 py-1 rounded-full text-sm min-w-[20px] text-center">
                0
              </span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden flex flex-col gap-1 cursor-pointer"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <span className="w-6 h-0.5 bg-text-dark transition-all duration-300"></span>
              <span className="w-6 h-0.5 bg-text-dark transition-all duration-300"></span>
              <span className="w-6 h-0.5 bg-text-dark transition-all duration-300"></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
