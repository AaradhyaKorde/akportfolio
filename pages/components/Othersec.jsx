import React from "react";
import Link from "next/link";

const Industries = () => {
  return (
    <>
      <section className="w-full min-h-screen py-8 sm:py-16 md:py-24 lg:py-52 sm:mt-0 mt-32 px-4 sm:px-8 md:px-16 lg:px-32">
        <div className="w-[100px] sm:w-[150px] h-[3px] bg-[#fffff0] mb-3 sm:mb-5"></div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl uppercase font-semibold text-left mb-8 sm:mb-12 md:mb-16 bg-gradient-to-r from-[#fffff0] to-gray-400 bg-clip-text text-transparent">
          Crafting Success Stories Together
        </h2>
        <div className="grid lg:max-w-[1400px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 relative z-10 py-5 sm:py-8 lg:py-0 w-full mx-auto gap-4 sm:gap-6 lg:gap-8">
          <Link href="/othersections/Midnight">
            <div
              className="flex flex-col py-8 sm:py-12 md:py-16 lg:py-24 relative group/feature border border-neutral-700 sm:border-none sm:lg:border-r sm:lg:border-l sm:lg:border-b rounded-2xl sm:rounded-3xl"
              style={{
                backgroundImage: "url('/images/other1.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}>
              <div className="opacity-0 group-hover/feature:opacity-40 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-400 to-transparent pointer-events-none rounded-2xl sm:rounded-3xl"></div>

              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold relative z-50 px-3 sm:px-4 md:px-6 lg:px-10">
                <div className="absolute left-0 inset-y-0 h-6 sm:h-8 group-hover/feature:h-8 sm:group-hover/feature:h-10 w-1 rounded-tr-full rounded-br-full bg-neutral-700 group-hover/feature:bg-[#FFFFF0] transition-all duration-200 origin-center"></div>
                <h2 className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
                  The Midnight Code Guild
                </h2>
              </div>
            </div>
          </Link>
          <Link href="https://socialdevs.in">
            <div
              className="flex flex-col py-8 sm:py-12 md:py-16 lg:py-28 relative group/feature border border-neutral-700 sm:border-none sm:lg:border-r sm:lg:border-l sm:lg:border-b rounded-2xl sm:rounded-3xl"
              style={{
                backgroundImage: "url('/images/1.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}>
              <div className="opacity-0 group-hover/feature:opacity-40 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-400 to-transparent pointer-events-none rounded-2xl sm:rounded-3xl"></div>

              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold relative z-50 px-3 sm:px-4 md:px-6 lg:px-10">
                <div className="absolute left-0 inset-y-0 h-6 sm:h-8 group-hover/feature:h-8 sm:group-hover/feature:h-10 w-1 rounded-tr-full rounded-br-full bg-neutral-700 group-hover/feature:bg-[#FFFFF0] transition-all duration-200 origin-center"></div>
                <h2 className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-100">
                  socialdevs.in
                </h2>
              </div>
            </div>
          </Link>

          <Link href="/othersections/Hackathon">
            <div
              className="flex flex-col py-8 sm:py-12 md:py-16 lg:py-28 relative group/feature border border-neutral-700 sm:border-none sm:lg:border-r sm:lg:border-l sm:lg:border-b rounded-2xl sm:rounded-3xl"
              style={{
                backgroundImage: "url('/images/4.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}>
              <div className="opacity-0 group-hover/feature:opacity-40 transition duration-200 absolute inset-0 rounded-2xl sm:rounded-3xl h-full w-full bg-gradient-to-t from-neutral-400 to-transparent pointer-events-none"></div>

              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold relative z-50 px-3 sm:px-4 md:px-6 lg:px-10">
                <div className="absolute left-0 inset-y-0 h-6 sm:h-8 group-hover/feature:h-8 sm:group-hover/feature:h-10 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-[#FFFFF0] transition-all duration-200 origin-center"></div>
                <h2 className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
                  Hackathons
                </h2>
              </div>
            </div>
          </Link>

          <Link href="/othersections/Mentorship">
            <div
              className="flex flex-col py-8 sm:py-12 md:py-16 lg:py-24 relative group/feature border border-neutral-700 sm:border-none sm:lg:border-r sm:lg:border-l sm:lg:border-b rounded-2xl sm:rounded-3xl"
              style={{
                backgroundImage: "url('/images/2.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}>
              <div className="opacity-0 group-hover/feature:opacity-40 transition duration-200 absolute inset-0 rounded-2xl sm:rounded-3xl h-full w-full bg-gradient-to-t from-neutral-400 to-transparent pointer-events-none"></div>

              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold relative z-50 px-3 sm:px-4 md:px-6 lg:px-10">
                <div className="absolute left-0 inset-y-0 h-6 sm:h-8 group-hover/feature:h-8 sm:group-hover/feature:h-10 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-[#FFFFF0] transition-all duration-200 origin-center"></div>
                <h2 className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-100">
                  Mentorship Programs
                </h2>
              </div>
            </div>
          </Link>

          <Link href="/othersections/Test">
            <div
              className="flex flex-col py-8 sm:py-12 md:py-16 lg:py-24 relative group/feature border border-neutral-700 sm:border-none sm:lg:border-r sm:lg:border-l sm:lg:border-b rounded-2xl sm:rounded-3xl"
              style={{
                backgroundImage: "url('/images/3.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}>
              <div className="opacity-0 group-hover/feature:opacity-40 transition duration-200 absolute inset-0 rounded-2xl sm:rounded-3xl h-full w-full bg-gradient-to-t from-neutral-400 to-transparent pointer-events-none"></div>

              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold relative z-50 px-3 sm:px-4 md:px-6 lg:px-8">
                <div className="absolute left-0 inset-y-0 h-6 sm:h-8 group-hover/feature:h-8 sm:group-hover/feature:h-10 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-[#FFFFF0] transition-all duration-200 origin-center"></div>
                <h2 className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-100">
                  Noxalgo Employability Test
                </h2>
              </div>
            </div>
          </Link>

          <Link href="/othersections/Ssb">
            <div
              className="flex flex-col py-8 sm:py-12 md:py-16 lg:py-28 relative group/feature border border-neutral-700 sm:border-none sm:lg:border-r sm:lg:border-l sm:lg:border-b rounded-2xl sm:rounded-3xl"
              style={{
                backgroundImage: "url('/images/5.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: 1,
              }}>
              <div className="opacity-0 group-hover/feature:opacity-40 transition duration-200 absolute inset-0 rounded-2xl sm:rounded-3xl h-full w-full bg-gradient-to-t from-neutral-400 to-transparent pointer-events-none"></div>

              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold relative z-50 px-3 sm:px-4 pt-2">
                <div className="absolute left-0 inset-y-0 h-6 sm:h-8 group-hover/feature:h-8 sm:group-hover/feature:h-10 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-[#FFFFF0] transition-all duration-200 origin-center"></div>
                <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-50">
                  Mission SSB
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Industries;
