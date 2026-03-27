"use client";

import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "#services", label: "Services" },
    { href: "#work",     label: "Work" },
    { href: "#contact",  label: "Contact Us", cta: true },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md border-b border-black/10 dark:border-white/10 bg-white/80 dark:bg-dark/80 transition-colors duration-300">
      <div className="flex justify-between items-center px-[5%] py-6">
        {/* Logo */}
        <div className="font-display font-extrabold text-2xl tracking-widest cursor-none">
          TRISS<span className="font-light text-primary">MCALLEN</span>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8 items-center">
            {links.map((link) =>
              link.cta ? (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="px-6 py-2 rounded-full border border-primary text-primary font-display font-semibold hover:bg-primary hover:text-dark transition-all cursor-none dark:hover:text-dark"
                  >
                    {link.label}
                  </a>
                </li>
              ) : (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm font-medium hover:text-primary transition-colors cursor-none text-dark dark:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              )
            )}
          </ul>
          <ThemeToggle />
        </div>

        {/* Mobile right side — theme toggle + hamburger */}
        <div className="flex md:hidden items-center gap-4">
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            className="flex flex-col justify-center items-center w-10 h-10 gap-[6px] cursor-none"
          >
            <span
              className={`block h-[2px] w-6 bg-current transition-all duration-300 origin-center ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-6 bg-current transition-all duration-300 ${
                menuOpen ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-6 bg-current transition-all duration-300 origin-center ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-64 border-t border-black/10 dark:border-white/10" : "max-h-0"
        } bg-white/95 dark:bg-dark/95 backdrop-blur-md`}
      >
        <ul className="flex flex-col px-[5%] py-6 gap-6">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={
                  link.cta
                    ? "inline-block px-6 py-3 rounded-full border border-primary text-primary font-display font-semibold hover:bg-primary hover:text-dark transition-all cursor-none"
                    : "block text-lg font-medium hover:text-primary transition-colors cursor-none text-dark dark:text-white"
                }
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
