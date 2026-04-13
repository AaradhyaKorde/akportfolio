import { useState } from "react";
import { motion } from "framer-motion";
import useMousePosition from "../../utils/useMousePosition";

export default function Text1() {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 40;

  return (
    <main className="min-h-[60vh] sm:h-screen relative mt-32 sm:mt-72 md:mt-80 lg:mt-0 overflow-x-hidden">
      <div className="flex flex-col items-center justify-center px-4 sm:px-8 md:px-52 absolute  top-0 sm:top-24 left-0 w-full">
        <div className="w-[80px] sm:w-[100px] md:w-[150px] h-[2px] sm:h-[3px] bg-[#fffff0] mb-2 sm:mb-3 md:mb-5"></div>
        <h2 className="text-2xl sm:text-3xl md:text-5xl uppercase font-semibold bg-gradient-to-r from-[#fffff0] to-gray-400 bg-clip-text text-transparent text-center">
          My Foundation lies in
        </h2>
      </div>
      <motion.div
        className="w-full  h-full flex items-center justify-center text-black text-base xs:text-lg sm:text-3xl md:text-4xl lg:text-5xl xl:text-[64px] leading-relaxed xs:leading-relaxed sm:leading-tight md:leading-tight lg:leading-tight xl:leading-[66px] cursor-default absolute bg-[#6a3c3c]"
        style={{
          maskImage: "url('/assets/mask.svg')",
          maskRepeat: "no-repeat",
          maskSize: "40px",
        }}
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}>
        <div
          className="w-screen p-3 sm:p-4 md:p-8 lg:p-10"
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}>
          <p className="mb-3 sm:mb-4 md:mb-12 lg:mb-16 px-2 sm:px-0 text-center sm:text-left">
            You have the right to perform your duty,
          </p>
          <p className="ml-0 sm:ml-2 md:ml-16 lg:ml-28 px-2 sm:px-0 text-center sm:text-left">
            but never to the fruits of action.
          </p>
        </div>
      </motion.div>

      <div className="w-full h-full flex items-center justify-center text-[#afa18f] text-base xs:text-lg sm:text-3xl md:text-4xl lg:text-5xl xl:text-[70px] leading-relaxed xs:leading-relaxed sm:leading-tight md:leading-tight lg:leading-tight xl:leading-[66px] cursor-default">
        <div className="w-screen p-3 sm:p-4 md:p-8 lg:p-10">
          <p className="mb-3 sm:mb-4 md:mb-12 lg:mb-16 px-2 sm:px-0 text-center sm:text-left">
            कर्मण्येवाधिकारस्ते मा फलेषु कदाचन ।
          </p>
          <p className="ml-0 sm:ml-2 md:ml-16 lg:ml-28 px-2 sm:px-0 text-center sm:text-left">
            मा कर्मफलहेतुर्भुर्मा ते संगोऽस्त्वकर्मणि ॥
          </p>
        </div>
      </div>
    </main>
  );
}
