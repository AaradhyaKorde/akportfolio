import { projects } from "../../utils/data";
import { useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import dynamic from "next/dynamic";

// Create a dynamic import for Card with SSR disabled
const Card = dynamic(() => import("./Card"), { ssr: false });

export default function Cards() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup function
    return () => {
      lenis.destroy();
    };
  }, []); // Add empty dependency array

  return (
    <main ref={container} className="relative mt-[15vh] md:mt-[15vh]">
      <div className="relative z-20 px-4 md:px-52 pb-8 md:pb-10">
        <div className="w-[100px] md:w-[150px] h-[3px] bg-[#fffff0] mb-3 md:mb-5"></div>
        <h2 className="text-3xl md:text-5xl uppercase font-semibold bg-gradient-to-r from-[#fffff0] to-gray-400 bg-clip-text text-transparent">
          Work Experience
        </h2>
      </div>

      <div className="w-full max-w-[1400px] mx-auto px-2 sm:px-4 md:px-6 lg:px-8 ">
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - i) * 0.01;
          return (
            <Card
              key={`p_${i}`}
              i={i}
              {...project}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </main>
  );
}
