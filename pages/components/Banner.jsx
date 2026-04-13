import React from "react";
import Marquee from "react-fast-marquee";

const marqueeItems = [
  "Full-Stack Developer (MERN)",
  "3+ Years Experience",
  "React.js ● Node.js ● TypeScript",
  "Led multi-tenant healthcare SaaS at Steer Health",
  "Boosted dashboard efficiency by ~40%",
  "Reduced UI latency by ~60% (Virtualized 200k+ rows)",
  "Expert in RBAC, audit logs, traceability",
  "Optimized API usage: −30% redundant calls",
  "Built scalable agent systems: 1000+ users live",
  "Integrated CI/CD (GitHub Actions, Docker)",
  "Testing: 50+ cases (Jest, RTL), −30% bugs",
  "DevOps: AWS (EC2, S3), Docker, Nginx, Sentry",
  "Real-time logistics dashboard (Project-44)",
];

const Banner = () => {
  return (
    <div className="bg-[#FFFFF0] py-4 sm:py-6 md:py-4 w-full">
      <div className="max-w-[1300px] mx-auto">
        <Marquee speed={35} gradient={false}>
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

export default Banner;
