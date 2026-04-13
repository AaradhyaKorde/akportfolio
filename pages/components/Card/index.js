"use client";
import { useEffect, useRef, useState } from "react";
import { useTransform, motion, useScroll } from "framer-motion";

const Card = ({
  i,
  role,
  company,
  duration,
  keyAchievements = [],
  techStack = [],
  color,
  progress,
  range,
  targetScale,
}) => {
  const container = useRef(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const scale = useTransform(
    progress || scrollYProgress,
    range || [0, 1],
    [1, targetScale || 1]
  );

  const currentScale = isMounted ? scale : 1;
  const bulletColors = ["#6a3c3c", "#afa18f", "#FFFFF0", "#36454f"];

  if (!isMounted) {
    return null;
  }

  return (
    <div
      ref={container}
      className="min-h-screen flex items-start justify-center sticky top-24 px-4 sm:px-6"
    >
      <motion.div
        className="flex flex-col relative h-auto min-h-[520px] sm:min-h-[560px] w-full max-w-[1100px] rounded-[18px] sm:rounded-[28px] p-5 sm:p-8 lg:p-12 origin-top border border-[#36454F] shadow-xl bg-[#101314]/90"
        style={{
          backgroundColor: color ? color : "transparent",
          scale: currentScale,
          top: `${i * 20}px`,
        }}
      >
        <div className="absolute inset-0 pointer-events-none">
          {/* Subtle accents as faded, soft gradients */}
          <div className="absolute -left-20 top-10 h-56 w-56 rounded-full bg-[#FFFFF0]/10 blur-3xl" />
          <div className="absolute right-0 bottom-0 h-56 w-56 rounded-full bg-[#6a3c3c]/10 blur-3xl" />
        </div>

        <div className="relative z-10">
          <h2 className="m-0 text-2xl sm:text-3xl md:text-4xl font-[Montserrat] font-semibold bg-gradient-to-r from-[#fffff0] via-[#afa18f] to-[#6a3c3c] bg-clip-text text-transparent leading-tight tracking-wide">
            {role}
          </h2>
          <h3 className="mt-1 text-[#afa18f] text-xl sm:text-2xl font-medium font-[Montserrat]">
            {company}
          </h3>
          <p className="mt-1 text-[#FFFFF0]/60 text-sm sm:text-base font-light">
            {duration}
          </p>

          <h4 className="mt-7 text-[#FFFFF0] text-lg sm:text-xl font-semibold font-[Montserrat] tracking-tight">
            Key Achievements
          </h4>

          <ul className="mt-4 space-y-4">
            {keyAchievements.map((achievement, idx) => (
              <li
                key={`${achievement.slice(0, 24)}-${idx}`}
                className="flex items-start gap-4 text-[#fffff0] text-sm sm:text-base font-light leading-relaxed"
              >
                <span
                  className="mt-2 block h-3 w-3 rounded-full flex-shrink-0 shadow"
                  style={{
                    backgroundColor: bulletColors[idx % bulletColors.length],
                  }}
                />
                <span>{achievement}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            {techStack.map((tech, idx) => (
              <span
                key={`${tech}-${idx}`}
                className="px-3 py-1.5 rounded-full text-xs sm:text-sm text-[#fffff0] bg-[#6a3c3c]/60 border border-[#36454F] font-[Montserrat] font-medium tracking-wide"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
