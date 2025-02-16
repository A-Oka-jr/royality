import { useState, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (document.scrollingElement?.scrollTop ?? 0 > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const toggleNav = () => setNavOpen((prevState) => !prevState);

  // Function to close the navigation menu
  const closeNav = () => setNavOpen(false);

  return (
    <nav
      className={twMerge(
        "absolute left-0 top-0 w-full bg-transparent z-10 h-24 flex items-center",
        isScrolled && "bg-neutral-800 fixed transition-effect"
      )}
    >
      <div className="lg:container justify-between w-full px-3 mx-auto flex items-center relative">
        {/* Logo */}
        <Link to="/" onClick={closeNav}>
          <img src="img/logo-light.png" alt="Royalty Gt logo" width={160} />
        </Link>
        {/* Menu */}
        <div
          className={twMerge(
            "absolute top-[181%] left-0 flex-1 items-center justify-end gap-7 lg:flex lg:static transition-all lg:opacity-100 lg:bg-transparent",
            !navOpen &&
              "opacity-0 w-full pointer-events-none lg:pointer-events-auto",
            navOpen && "opacity-100 bg-neutral-800 w-full pointer-events-auto"
          )}
        >
          <div className="flex flex-col px-5 py-8 gap-6 lg:p-0 lg:flex-row lg:items-center lg:gap-5">
            <Link
              to="/"
              className="text-sm font-light hover:text-primary"
              onClick={closeNav}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-sm font-light hover:text-primary"
              onClick={closeNav}
            >
              About
            </Link>
            <Link
              to="/services"
              className="text-sm font-light hover:text-primary"
              onClick={closeNav}
            >
              Services
            </Link>
            <Link
              to="/cars"
              className="text-sm font-light hover:text-primary"
              onClick={closeNav}
            >
              Cars
            </Link>
            <Link
              to="/contact"
              className="text-sm font-light hover:text-primary"
              onClick={closeNav}
            >
              Contact
            </Link>
          </div>
          <div className="hidden lg:flex items-center gap-3">
            <div className="flex justify-center items-center text-lg w-12 h-12 bg-transparent rounded-full border border-primary color-white hover:bg-primary hover:text-dark transition-effect">
              <i className="ti-rss-alt"></i>
            </div>
            <div>
              <p className="text-xs mb-1 font-light">Need help?</p>
              <h5>+971522218852</h5>
            </div>
          </div>
        </div>
        {/* Hamburger menu */}
        <button onClick={toggleNav} className="flex lg:hidden">
          <span className="p-1">
            <i className="ti-menu text-xl"></i>
          </span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
