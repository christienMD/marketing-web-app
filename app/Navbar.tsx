"use client";

import Link from "next/link";
import React from "react";
import Logo from "./components/Logo";
import Sidebar from "./components/Sidebar";

const Navbar = () => {
  return (
    <nav className="h-16 bg-marketing-black-bg">
      <div className="container mx-auto max-w-7xl h-full px-4">
        <header className="flex items-center justify-between h-full">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Logo />
            </Link>
          </div>

          {/* Navigation links */}
          <div className="hidden md:flex items-center justify-center flex-grow gap-6 text-white uppercase">
            <Link
              href="#"
              className="text-xs hover:text-orange-500 transition-colors"
            >
              Home
            </Link>
            <Link
              href="#"
              className="text-xs hover:text-orange-500 transition-colors"
            >
              Service
            </Link>
            <Link
              href="#"
              className="text-xs hover:text-orange-500 transition-colors"
            >
              Features
            </Link>
            <Link
              href="#"
              className="text-xs hover:text-orange-500 transition-colors"
            >
              Portfolio
            </Link>
            <Link
              href="#"
              className="text-xs hover:text-orange-500 transition-colors"
            >
              Blog
            </Link>
            <Link
              href="#"
              className="text-xs hover:text-orange-500 transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Sidebar for mobile */}
          <div className="md:hidden">
            <Sidebar />
          </div>
        </header>
      </div>
    </nav>
  );
};

export default Navbar;
