import Link from "next/link";
import React from "react";
import Logo from "./components/Logo";

const Navbar = () => {
  return (
    <nav className="h-16 bg-marketing-black-bg">
      <div className="container mx-auto max-w-7xl h-full relative">
        <header className="flex items-center justify-center h-full">
          {/* Navigation links */}
          <div className="flex items-center gap-4 text-white uppercase">
            <Link
              href="#"
              className="text-sm hover:text-orange-500 transition-colors"
            >
              Home
            </Link>
            <Link
              href="#"
              className="text-sm hover:text-orange-500 transition-colors"
            >
              Service
            </Link>
            <Link
              href="#"
              className="text-sm hover:text-orange-500 transition-colors"
            >
              Features
            </Link>
            <Link
              href="#"
              className="text-sm hover:text-orange-500 transition-colors"
            >
              Portfolio
            </Link>
            <Link
              href="#"
              className="text-sm hover:text-orange-500 transition-colors"
            >
              Blog
            </Link>
            <Link
              href="#"
              className="text-sm hover:text-orange-500 transition-colors"
            >
              Contact
            </Link>
          </div>
        </header>

        {/* Logo */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
          <Link href="/" className="flex-shrink-0">
            <Logo />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
