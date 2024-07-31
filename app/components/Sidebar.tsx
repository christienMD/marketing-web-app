"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleCategoryToggle = () => {
    setIsCategoryOpen(!isCategoryOpen);
  };

  return (
    <div>
      <button onClick={handleToggle} className="text-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="23"
          height="19"
          viewBox="0 0 23 19"
          className="cursor-pointer"
          onClick={handleToggle}
        >
          <rect y="16" width="23" height="3" rx="1.5" fill="#555"></rect>
          <rect width="23" height="3" rx="1.5" fill="#555"></rect>
          <rect y="8" width="23" height="3" rx="1.5" fill="#555"></rect>
        </svg>
      </button>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black transition-opacity duration-300 ${
          isOpen ? "opacity-50" : "opacity-0 pointer-events-none"
        }`}
        onClick={handleToggle}
      />

      {/* Sidebar */}
      <div
        id="docs-sidebar"
        className={`fixed top-0 left-0 h-full max-w-xs w-64 z-[60] bg-marketing-black-bg text-white transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        role="dialog"
        tabIndex={-1}
      >

        <nav className="hs-accordion-group p-6 w-full flex flex-col flex-wrap">
          <ul className="space-y-1.5">
            <li>
              <Link
                href="/"
                className="block py-2 px-2.5 text-base text-white rounded-lg hover:bg-marketing-black-bg/50 hover:text-marketing-orange-100"
              >
                <Logo />
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block py-2 px-2.5 text-base text-white rounded-lg hover:bg-marketing-black-bg/50 hover:text-marketing-orange-100"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block py-2 px-2.5 text-base text-white rounded-lg hover:bg-marketing-black-bg/50 hover:text-marketing-orange-100"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/lists"
                className="block py-2 px-2.5 text-base text-white rounded-lg hover:bg-marketing-black-bg/50 hover:text-marketing-orange-100"
              >
                Feautures
              </Link>
            </li>
            <li>
              <Link
                href="/lists"
                className="block py-2 px-2.5 text-base text-white rounded-lg hover:bg-marketing-black-bg/50 hover:text-marketing-orange-100"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                href="/lists"
                className="block py-2 px-2.5 text-base text-white rounded-lg hover:bg-marketing-black-bg/50 hover:text-marketing-orange-100"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/lists"
                className="block py-2 px-2.5 text-base text-white rounded-lg hover:bg-marketing-black-bg/50 hover:text-marketing-orange-100"
              >
                Contact
              </Link>
            </li>
           
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
