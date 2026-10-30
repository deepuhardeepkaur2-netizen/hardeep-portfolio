
"use client";

import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const linkClass =
    "block py-3 text-base font-medium text-[#2d266d] transition duration-300 hover:text-[#f5a623] md:py-0 md:text-lg lg:text-xl";

  return (
   

<header className="relative z-50 w-full max-w-none bg-[#eef2f7] ">


      <div className="mx-auto flex min-h-[90px] max-w-[1140px] items-center justify-between px-4 py-3 sm:px-6 md:min-h-[100px] md:px-5 md:py-4">
        {/* Logo */}
        <a
          href="/"
          aria-label="Home"
          onClick={closeMenu}
          className="shrink-0"
        >
          <img
            src="./../images/logo.png"
            alt="Logo"
            className="h-auto w-[65px] object-contain sm:w-[85px] md:w-[75px]"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center lg:flex">
          <ul className="flex items-center gap-7 xl:gap-[45px]">
            <li>
              <a href="/" className={linkClass}>
                Home
              </a>
            </li>
            <li>
              <a href="#services" className={linkClass}>
                Services
              </a>
            </li>
            <li>
              <a href="#about" className={linkClass}>
                About
              </a>
            </li>
            <li>
              <a href="#portfolio" className={linkClass}>
                Portfolio
              </a>
            </li>
          </ul>
        </nav>

        {/* Desktop Contact Button */}
        <a
          href="#contact"
          className="hidden items-center justify-center rounded-full bg-[#f5a623] px-7 py-3 text-lg font-semibold text-white transition duration-300 hover:-translate-y-[3px] hover:bg-[#e99a0b] lg:inline-flex xl:px-[43px] xl:py-4 xl:text-xl"
        >
          Contact
        </a>

        {/* Mobile / Tablet Hamburger */}
        <button
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-12 w-12 shrink-0 flex-col items-center justify-center gap-[6px] rounded-lg border border-[#f5a623] bg-[#f5a623] transition hover:bg-white focus-visible:outline-2 focus-visible:outline-[#f5a623] lg:hidden"
        >
          <span
            className={`h-[2px] w-6 rounded-full bg-[#ffffff] transition-all duration-300 ${
              menuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-[2px] w-6 rounded-full bg-[#ffffff] transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-[2px] w-6 rounded-full bg-[#ffffff] transition-all duration-300 ${
              menuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile / Tablet Dropdown Menu */}
    <div
    id="mobile-navigation"
    className={`overflow-hidden shadow-md shadow-black/10 transition-all duration-300 ease-in-out lg:hidden ${
        menuOpen
            ? "visible max-h-[420px] opacity-100"
            : "invisible max-h-0 opacity-0"
    }`}
>
        <nav className="mx-0 max-w-[1140px] px-5 pb-5 pt-4 text-center bg-[#eef2f7]">
          <ul className="flex flex-col items-center gap-5">
            <li>
              <a href="/" onClick={closeMenu} className={linkClass}>
                Home
              </a>
            </li>
            <li>
              <a href="#services" onClick={closeMenu} className={linkClass}>
                Services
              </a>
            </li>
            <li>
              <a href="#about" onClick={closeMenu} className={linkClass}>
                About
              </a>
            </li>
            <li>
              <a href="#portfolio" onClick={closeMenu} className={linkClass}>
                Portfolio
              </a>
            </li>
            <li className="mt-3">
              <a
                href="#contact"
                onClick={closeMenu}
                className="inline-flex items-center justify-center rounded-full bg-[#f5a623] px-8 py-3 text-base font-semibold text-white transition duration-300 hover:bg-[#e99a0b]"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
