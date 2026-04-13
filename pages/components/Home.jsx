import React from "react";
import Image from "next/image";

const Home = () => {
  return (
    <>
      <div className="relative h-[104vh] sm:h-screen bg-black flex items-center justify-center overflow-hidden">
        {/* Left Side: Text Content */}
        <div className="absolute w-full md:w-1/2 px-6 md:px-0 md:left-0 flex items-center justify-center z-10 md:pl-20 mt-40 md:mt-0">
          <div className="flex flex-col items-center md:items-start justify-center h-full my-20 md:my-52">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-normal text-[#fffff0] mb-6 md:mb-8 text-center md:text-left font-[Montserrat]">
              Hi, I&apos;m
            </h1>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-normal text-[#fffff0] mb-6 md:mb-8 text-center md:text-left font-[Montserrat]">
              AARADHYA
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal text-[#fffff0] mb-6 md:mb-8 text-center md:text-left font-[Montserrat]">
              Full-Stack Developer
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-xl text-gray-300 max-w-2xl text-center md:text-left px-4 md:px-0">
              &quot;Turning complex ideas into seamless products. I specialize in building scalable web apps with the MERN stack — fast, reliable, and built to grow.&quot;
            </p>
          </div>
        </div>
        {/* Right Side: Image */}
        <div className="hidden md:flex absolute right-0 top-0 h-full w-1/2 items-center justify-center z-10">
          <div className="flex items-center justify-center h-full">
            <div className="flex items-center justify-center rounded-full overflow-hidden shadow-2xl border-[6px] border-[#fffff0] bg-black"
              style={{ width: "480px", height: "480px", minWidth: "320px", minHeight: "320px" }}>
              <Image
                src="/images/ak.jpeg"
                alt="AARADHYA Portrait"
                width={480}
                height={480}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
