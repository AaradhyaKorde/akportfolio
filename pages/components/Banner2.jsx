
import React from "react";
import Marquee from "react-fast-marquee";

const marqueeItems = [
  "Full-Stack Development (MERN Stack)",
  "3+ Years Industry Experience",
  "React.js • Node.js • TypeScript",
  "CI/CD, Docker, AWS, Sentry Integration",
  "Performance-driven: -60% UI latency, +40% dashboard efficiency",
  "Scalable SaaS/agent systems for 1000+ users",
  "Robust audit trails, RBAC, DevOps best practices",
  "Real-time dashboards, optimized API calls",
  "Quality-driven: Jest, RTL, -30% bugs in production",
];

const Banner2 = () => {
  return (
    <div className="bg-[#FFFFF0] py-4 sm:py-6 md:py-4 w-full">
      <div className="max-w-[1300px] mx-auto">
        <Marquee speed={40} gradient={false}>
          {marqueeItems.map((item, idx) => (
            <span
              key={idx}
              className="text-lg sm:text-xl md:text-lg font-bold mx-8 text-gray-800 whitespace-nowrap"
            >
              ✷ {item}
            </span>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Banner2;
