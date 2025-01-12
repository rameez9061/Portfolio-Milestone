"use client";

import "remixicon/fonts/remixicon.css";
import Link from "next/link";
import { useState } from "react";

export default function Page() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <div
        className={`navbar fixed w-[100vw] bg-black flex items-center justify-center transition-all duration-500 ${
          isExpanded ? "h-[100vh] bg-white" : "h-[10vh] bg-black"
        }`}
      >
        {/* Toggle Button */}
        <button
          onClick={handleToggle}
          aria-expanded={isExpanded}
          className="bg-transparent absolute right-6 top-3 z-50"
        >
          <i
            className={`ri-menu-3-line font-black text-black text-[10vw] sm:text-[8vw] md:text-[5vw] lg:text-[3vw] ${
              isExpanded ? "text-black" : "text-white"
            }`}
          ></i>
        </button>

        {/* Menu List */}
        {isExpanded && (
          <div className="lists flex flex-col items-center justify-center space-y-4 sm:space-y-6 md:space-y-8">
            <Link href="/" onClick={() => setIsExpanded(false)}>
              <h1 className="font-black text-[10vw] sm:text-[7vw] md:text-[5vw] leading-[1] hover:text-gray-500 transition-all">
                Home
              </h1>
            </Link>
            <Link href="/About" onClick={() => setIsExpanded(false)}>
              <h1 className="font-black text-[10vw] sm:text-[7vw] md:text-[5vw] leading-[1] hover:text-gray-500 transition-all">
                About
              </h1>
            </Link>
            <Link href="/Contact" onClick={() => setIsExpanded(false)}>
              <h1 className="font-black text-[10vw] sm:text-[7vw] md:text-[5vw] leading-[1] hover:text-gray-500 transition-all">
                Contact
              </h1>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
