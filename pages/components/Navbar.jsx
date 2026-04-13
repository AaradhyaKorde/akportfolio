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

  // Function to handle close menu when any nav link clicked on mobile
  const handleMobileNavClick = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed w-full md:w-[75%] left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-in-out bg-[#101314]/80 backdrop-blur-sm md:rounded-full shadow-lg mt-0 md:mt-8 border border-[#36454F] ${
        visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <div className="max-w-7xl mx-auto ">
        <div className="flex justify-between items-center h-16 ">
          {/* Logo section replaced with name in Montserrat */}
          <div className="flex items-center pl-5 sm:pl-10 ">
            <Link href="/" legacyBehavior>
              <a className="focus:outline-none" tabIndex={0}>
                <span className="text-2xl text-[#fffff0] font-[Montserrat] tracking-wide">
                  Aaradhya Korde
                </span>
              </a>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-8">
              {/* Navigation Links */}
              <Link href="#AboutMe" legacyBehavior>
                <a className="text-[#FFFFF0] flex items-center text-[14px] xl:text-[14px] hover:text-red-200 relative after:absolute after:bottom-[-15px] after:left-0 after:h-[4px] after:w-0 after:bg-[#FFFFF0] after:transition-all after:duration-300 hover:after:w-full focus:outline-none">
                  About Me
                </a>
              </Link>
              <Link href="#WorkExperience" legacyBehavior>
                <a className="text-[#FFFFF0] flex items-center text-[14px] xl:text-[14px] hover:text-red-200 relative after:absolute after:bottom-[-15px] after:left-0 after:h-[4px] after:w-0 after:bg-[#FFFFF0] after:transition-all after:duration-300 hover:after:w-full focus:outline-none">
                  Work Experience
                </a>
              </Link>
              <Link href="#SkillsTech" legacyBehavior>
                <a className="text-[#FFFFF0] flex items-center text-[14px] xl:text-[14px] hover:text-red-200 relative after:absolute after:bottom-[-15px] after:left-0 after:h-[4px] after:w-0 after:bg-[#FFFFF0] after:transition-all after:duration-300 hover:after:w-full focus:outline-none">
                  Skills & Tech
                </a>
              </Link>
              <Link href="#Projects" legacyBehavior>
                <a className="text-[#FFFFF0] flex items-center text-[14px] xl:text-[14px] hover:text-red-200 relative after:absolute after:bottom-[-15px] after:left-0 after:h-[4px] after:w-0 after:bg-[#FFFFF0] after:transition-all after:duration-300 hover:after:w-full focus:outline-none">
                  Projects
                </a>
              </Link>
            </div>
          </div>
          <div className="hidden lg:flex items-center pr-8">
            <Link href="/Contact" legacyBehavior>
              <a className="bg-[#FFFFF0] text-black text-[14px] xl:text-[14px] rounded-full px-3 py-1.5 sm:px-4 sm:py-2 hover:bg-[#000000] hover:text-[#fffff0] focus:outline-none">
                Contact Me
              </a>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center pr-2">
            <button
              className="outline-none mobile-menu-button p-2 text-[#fffff0] focus:ring focus:ring-[#FFFFF0] rounded"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              <svg
                className={`w-6 h-6 transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
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
          className={`lg:hidden fixed w-full left-0 bg-[#101314] z-50 overflow-y-auto transition-all duration-300 ${
            isOpen ? "pointer-events-auto" : "pointer-events-none"
          }`}
          style={{ height: 0, opacity: 0, top: "64px" }}
          aria-hidden={!isOpen}
        >
          <div className="px-4 pt-2 pb-6 flex flex-col space-y-3">
            {/* Mobile Navigation Links */}
            <Link href="#AboutMe" legacyBehavior>
              <a
                onClick={handleMobileNavClick}
                className="block py-3 text-[#FFFFF0] text-base font-medium hover:text-red-200 focus:outline-none focus:text-red-200 transition-colors"
              >
                About Me
              </a>
            </Link>
            <Link href="#WorkExperience" legacyBehavior>
              <a
                onClick={handleMobileNavClick}
                className="block py-3 text-[#FFFFF0] text-base font-medium hover:text-red-200 focus:outline-none focus:text-red-200 transition-colors"
              >
                Work Experience
              </a>
            </Link>
            <Link href="#SkillsTech" legacyBehavior>
              <a
                onClick={handleMobileNavClick}
                className="block py-3 text-[#FFFFF0] text-base font-medium hover:text-red-200 focus:outline-none focus:text-red-200 transition-colors"
              >
                Skills & Tech
              </a>
            </Link>
            <Link href="#Projects" legacyBehavior>
              <a
                onClick={handleMobileNavClick}
                className="block py-3 text-[#FFFFF0] text-base font-medium hover:text-red-200 focus:outline-none focus:text-red-200 transition-colors"
              >
                Projects
              </a>
            </Link>
            {/* Mobile CTA Button */}
            <div className="pt-4">
              <Link href="/Contact" legacyBehavior>
                <a
                  onClick={handleMobileNavClick}
                  className="block w-full text-center bg-[#FFFFF0] text-black rounded-full px-4 py-2 hover:bg-black hover:text-[#fffff0] font-medium focus:outline-none transition-colors"
                >
                  Contact Me
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
