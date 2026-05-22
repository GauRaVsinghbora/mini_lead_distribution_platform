"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Request Service", path: "/request-service" },
    { name: "Test Tools", path: "/test-tools" },
    
  ];

  return (
    <nav className="border-b px-6 py-4">
      <div className="flex justify-between items-center">
        <Link href="/" className="font-bold text-xl">
          Lead Distribution System
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex gap-6">
          {links.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`${
                pathname === link.path
                  ? "text-blue-500 font-bold"
                  : "text-gray-400"
              } hover:text-white transition`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Hamburger button (mobile only) */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8 focus:outline-none"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span
            className={`block h-0.5 w-6 bg-current transition-transform duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-current transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-current transition-transform duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-48 opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-4 pb-2">
          {links.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              onClick={() => setMenuOpen(false)}
              className={`${
                pathname === link.path
                  ? "text-blue-500 font-bold"
                  : "text-gray-400"
              } hover:text-white transition`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}