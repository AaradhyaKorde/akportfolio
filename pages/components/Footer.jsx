import React from "react";

const Footer = () => {
  return (
    <footer className="relative w-full overflow-hidden bg-[#101314] border-t border-[#36454F]">
      {/* Subtle blurred accents in footer background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-10 h-56 w-56 rounded-full bg-[#FFFFF0]/10 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-56 w-56 rounded-full bg-[#6a3c3c]/10 blur-3xl" />
      </div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-8 py-12 sm:py-20">
        <h2 className="text-center text-4xl sm:text-5xl font-[Montserrat] font-semibold bg-gradient-to-r from-[#fffff0] via-[#afa18f] to-[#6a3c3c] bg-clip-text text-transparent tracking-wide">
          Aaradhya Korde
        </h2>
        <p className="mt-4 text-center text-[#afa18f] text-lg sm:text-2xl font-light">
          Crafting digital experiences with passion and precision
        </p>
        <div className="mt-10 flex items-center justify-center gap-6">
          {/* Email */}
          <a
            href="mailto:aaradhyakorde.dev@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
            className="h-12 w-12 rounded-xl border border-[#36454F] bg-[#101314] text-[#fffff0] flex items-center justify-center hover:bg-[#363036]/60 hover:text-[#6a3c3c] transition-colors"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path
                d="M2.25 6.75A2.25 2.25 0 0 1 4.5 4.5h15a2.25 2.25 0 0 1 2.25 2.25v10.5A2.25 2.25 0 0 1 19.5 19.5h-15A2.25 2.25 0 0 1 2.25 17.25V6.75Zm1.95-.75l7.8 6.23 7.8-6.23A.75.75 0 0 0 19.5 5.25h-15a.75.75 0 0 0-.3.75Zm16.05 1.47-6.841 5.47a2.25 2.25 0 0 1-2.493 0l-6.841-5.47V17.25c0 .414.336.75.75.75h15a.75.75 0 0 0 .75-.75V7.47Z"
                fill="currentColor"
              />
            </svg>
          </a>
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/aaradhya-korde/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="h-12 w-12 rounded-xl border border-[#36454F] bg-[#101314] text-[#fffff0] flex items-center justify-center hover:bg-[#363036]/60 hover:text-[#6a3c3c] transition-colors"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4.983 3.5C4.983 4.88 3.87 6 2.5 6S0 4.88 0 3.5S1.113 1 2.5 1S4.983 2.12 4.983 3.5ZM0.37 8H4.63V23H0.37V8ZM8 8H12.08V10.05H12.14C12.71 8.97 14.1 7.83 16.18 7.83C20.51 7.83 21.31 10.68 21.31 14.38V23H17.05V15.36C17.05 13.54 17.02 11.2 14.53 11.2C12 11.2 11.61 13.18 11.61 15.22V23H7.35V8H8Z" />
            </svg>
          </a>
          {/* GitHub */}
          <a
            href="https://github.com/AaradhyaKorde"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="h-12 w-12 rounded-xl border border-[#36454F] bg-[#101314] text-[#fffff0] flex items-center justify-center hover:bg-[#363036]/60 hover:text-[#6a3c3c] transition-colors"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0.5C5.372 0.5 0 5.872 0 12.5C0 17.803 3.438 22.303 8.205 23.89C8.805 24.003 9.025 23.63 9.025 23.31C9.025 23.021 9.014 22.256 9.008 21.245C5.672 21.97 4.968 19.658 4.968 19.658C4.422 18.272 3.633 17.903 3.633 17.903C2.546 17.16 3.715 17.176 3.715 17.176C4.918 17.261 5.551 18.411 5.551 18.411C6.621 20.244 8.356 19.715 9.04 19.409C9.149 18.632 9.459 18.101 9.801 17.8C7.138 17.497 4.344 16.468 4.344 11.875C4.344 10.566 4.812 9.497 5.579 8.658C5.455 8.355 5.044 7.135 5.697 5.483C5.697 5.483 6.705 5.16 8.999 6.714C9.957 6.447 10.983 6.314 12 6.309C13.017 6.314 14.043 6.447 15.003 6.714C17.295 5.16 18.302 5.483 18.302 5.483C18.957 7.135 18.547 8.355 18.423 8.658C19.191 9.497 19.656 10.566 19.656 11.875C19.656 16.48 16.857 17.493 14.187 17.79C14.617 18.16 15 18.894 15 20.02C15 21.635 14.985 22.938 14.985 23.31C14.985 23.633 15.201 24.009 15.81 23.888C20.564 22.299 24 17.801 24 12.5C24 5.872 18.627 0.5 12 0.5Z" />
            </svg>
          </a>
        </div>
      </div>
      <div className="border-t border-[#36454F]">
        <p className="text-center text-[#afa18f] px-4 py-8 text-xs sm:text-sm font-[Montserrat]">
          © {new Date().getFullYear()} Aaradhya Korde. Built with passion using modern web technologies.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
