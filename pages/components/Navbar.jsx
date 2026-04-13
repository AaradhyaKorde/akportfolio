import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingDown = currentScrollPos > prevScrollPos;
      const isAtTop = currentScrollPos < 10;

      if (Math.abs(currentScrollPos - prevScrollPos) > 5) {
        setVisible(!isScrollingDown || isAtTop);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  useEffect(() => {
    if (mobileMenuRef.current) {
      if (isOpen) {
        document.body.style.overflow = "hidden";
        gsap.fromTo(
          mobileMenuRef.current,
          {
            opacity: 0,
            height: 0,
            transformOrigin: "top",
          },
          {
            opacity: 1,
            height: "100vh",
            duration: 0.3,
            ease: "power2.out",
          }
        );
      } else {
        document.body.style.overflow = "unset";
        gsap.to(mobileMenuRef.current, {
          opacity: 0,
          height: 0,
          duration: 0.3,
          ease: "power2.in",
        });
      }
    }
  }, [isOpen]);

  return (
    <nav
      className={`fixed w-full md:w-[75%] left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-in-out bg-[#101314]/80 backdrop-blur-sm md:rounded-full shadow-lg mt-0 md:mt-8 border border-[#36454F] ${
        visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}>
      <div className="max-w-7xl mx-auto ">
        <div className="flex justify-between items-center h-16 ">
          {/* Logo section replaced with name in Montserrat */}
          <div className="flex items-center pl-5 sm:pl-10 ">
            <Link href="/">
              <span className="text-2xl text-[#fffff0] font-[Montserrat] tracking-wide">
                Aaradhya Korde
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-8">
              {/* Navigation Links */}
              <Link
                href="#AboutMe"
                className="text-[#FFFFF0] flex items-center text-[14px] xl:text-[14px] hover:text-red-200 relative after:absolute after:bottom-[-15px] after:left-0 after:h-[4px] after:w-0 after:bg-[#FFFFF0] after:transition-all after:duration-300 hover:after:w-full">
                About Me
              </Link>
              <Link
                href="#WorkExperience"
                className="text-[#FFFFF0] flex items-center text-[14px] xl:text-[14px] hover:text-red-200 relative after:absolute after:bottom-[-15px] after:left-0 after:h-[4px] after:w-0 after:bg-[#FFFFF0] after:transition-all after:duration-300 hover:after:w-full">
                Work Experience
              </Link>
         
              <Link
                href="#SkillsTech"
                className="text-[#FFFFF0] flex items-center text-[14px] xl:text-[14px] hover:text-red-200 relative after:absolute after:bottom-[-15px] after:left-0 after:h-[4px] after:w-0 after:bg-[#FFFFF0] after:transition-all after:duration-300 hover:after:w-full">
                Skills & Tech
              </Link>
            </div>
          </div>

          <div className="hidden lg:flex items-center pr-8">
            <Link
              href="/Contact"
              className="bg-[#FFFFF0] text-black text-[14px] xl:text-[14px] rounded-full px-3 py-1.5 sm:px-4 sm:py-2 hover:bg-[#000000] hover:text-[#fffff0]">
              Contact Me
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center pr-2">
            <button
              className="outline-none mobile-menu-button p-2 text-[#fffff0]"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu">
              <svg
                className={`w-6 h-6 transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          ref={mobileMenuRef}
          className="lg:hidden fixed w-full left-0 bg-[#101314] z-50 overflow-y-auto"
          style={{ height: 0, opacity: 0, top: "64px" }}>
          <div className="px-4 pt-2 pb-3 space-y-2">
            {/* Mobile Navigation Links */}
            <Link
              href="/About"
              className="block py-2 text-gray-100 hover:text-red-200">
              About Us
            </Link>
            <Link
              href="/Insights"
              className="block py-2 text-gray-100 hover:text-red-200">
              Insights
            </Link>
            <Link
              href="/Careers"
              className="block py-2 text-gray-100 hover:text-red-200">
              Careers
            </Link>

            {/* Mobile CTA Button */}
            <div className="pt-4">
              <Link
                href="/Contact"
                className="block w-full text-center bg-[#FFFFF0] text-black rounded-full px-4 py-2 hover:bg-black hover:text-[#fffff0]">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
