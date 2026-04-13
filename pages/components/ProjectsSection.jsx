import React, { useRef, useEffect } from "react";

// Project data as before
const projects = [
  {
    icon: "👜",
    category: "Healthcare SaaS",
    title: "Steer Health",
    description:
      "Built and optimized core features for a multi-tenant healthcare platform used by clinics and hospitals.",
    tags: [
      "React.js",
      "Node.js",
      "MongoDB",
      "JWT/OAuth",
      "Express",
      "Axios",
      "Redux",
      "TypeScript",
    ],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    icon: "🚚",
    category: "Logistics Platform",
    title: "Project-44",
    description:
      "Built a real-time dashboard, fast data tables, and seamless payment integration for high-volume logistics workflows.",
    tags: [
      "React.js",
      "Redux",
      "Node.js",
      "Socket.IO",
      "TailwindCSS",
      "Payment Gateway",
      "Virtualization",
    ],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    icon: "💼",
    category: "Centralized Platform",
    title: "Claimant Mitra",
    description:
      "Built a digital ecosystem for agents and sub-agents with RBAC, secure auth, and real-time operations.",
    tags: [
      "React.js",
      "Node.js",
      "MongoDB",
      "RBAC",
      "Centralized Platform",
      "Authentication",
    ],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    icon: "⛏️",
    category: "Blockchain & Mining",
    title: "Blockchain ",
    description:
      "Designed and launched a blockchain ledger, mining simulator, real-time UI, and Discord gamification tools.",
    tags: [
      "Electron.js",
      "Next.js",
      "Python",
      "Discord API",
      "Node.js",
      "JavaScript",
      "Web 3",
      "Blockchain",
    ],
    demoUrl: "#",
    githubUrl: "#",
  },
];

// Slow, continuous, seamless slide: use CSS animation that repeats infinitely, with double list
const SLIDE_DURATION = 32; // seconds; increase for slower speed

const ProjectsSection = () => {
  // For seamless infinite loop, duplicate projects
  const displayProjects = [...projects, ...projects];

  return (
    <section className="relative bg-[#101314] py-16 md:py-24 overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-8 top-10 h-56 w-56 rounded-full bg-[#fffff0]/5 blur-3xl" />
        <div className="absolute right-10 bottom-16 h-56 w-56 rounded-full bg-[#6a3c3c]/10 blur-3xl" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-10 md:mb-14">
          <div className="w-[100px] md:w-[150px] h-[3px] bg-[#fffff0] mb-3 md:mb-5" />
          <h2 className="text-3xl md:text-5xl uppercase font-semibold bg-gradient-to-r from-[#fffff0] to-[#afa18f] bg-clip-text text-transparent">
            Projects
          </h2>
        </div>
        {/* Slow, seamless, never-pausing continuous slider */}
        <div className="relative w-full overflow-x-hidden">
          <div
            className="flex"
            style={{
              width: "200%",
              animation: `slideProjects ${SLIDE_DURATION}s linear infinite`,
            }}
          >
            {displayProjects.map((project, idx) => (
              <article
                key={project.title + "-" + idx}
                className="min-w-[260px] max-w-[320px] w-full flex-shrink-0 mr-6 last:mr-0 rounded-2xl border border-[#36454F] bg-[#14181d]/90 p-5 md:p-6 shadow-lg"
                style={{
                  flex: "0 0 25%",
                }}
              >
                <div className="rounded-xl border border-[#36454F] bg-gradient-to-br from-[#afa18f]/20 via-[#6a3c3c]/10 to-[#fffff0]/10 p-6 flex flex-col items-center justify-center">
                  <span className="text-4xl mb-3" aria-hidden="true">
                    {project.icon}
                  </span>
                  <p className="text-[#afa18f] text-sm tracking-wide text-center">
                    {project.category}
                  </p>
                </div>
                <h3 className="mt-6 text-3xl font-semibold text-[#fffff0]">
                  {project.title}
                </h3>
                <p className="mt-3 text-[#afa18f] text-base leading-relaxed">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-[#fffff0]/10 border border-[#fffff0]/20 text-[#fffff0]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex gap-3">
                  <a
                    href={project.demoUrl}
                    className="flex-1 text-center rounded-xl border border-[#fffff0]/30 bg-[#fffff0]/10 px-4 py-2.5 text-[#fffff0] font-medium hover:bg-[#fffff0]/20 transition-colors"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex-1 text-center rounded-xl border border-[#36454F] px-4 py-2.5 text-[#fffff0] font-medium hover:border-[#fffff0]/40 hover:bg-[#fffff0]/5 transition-colors"
                  >
                    GitHub
                  </a>
                </div>
              </article>
            ))}
          </div>
          {/* KEY: Custom slider animation definition */}
          <style jsx>{`
            @keyframes slideProjects {
              0% {
                transform: translateX(0%);
              }
              100% {
                transform: translateX(-50%);
              }
            }
          `}</style>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
