import React from "react";

const skillGroups = [
  {
    title: "Frontend",
    icon: "💻",
    accent: "from-[#fffff0]/20 to-[#fffff0]/5",
    items: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: "🧠",
    accent: "from-[#fffff0]/20 to-[#fffff0]/5",
    items: ["Node.js", "Express", "REST & GraphQL APIs", "Prisma ORM"],
  },
  {
    title: "Database",
    icon: "🗄️",
    accent: "from-[#fffff0]/20 to-[#fffff0]/5",
    items: ["MongoDB", "PostgreSQL", "Redis"],
  },
  {
    title: "DevOps / Cloud",
    icon: "☁️",
    accent: "from-[#fffff0]/20 to-[#fffff0]/5",
    items: ["Docker", "AWS", "CI/CD (GitHub Actions)", "Linux"],
  },
  {
    title: "Mobile Development",
    icon: "📱",
    accent: "from-[#fffff0]/20 to-[#fffff0]/5",
    items: ["React Native", "Expo", "Firebase", "App Store"],
  },
];

const SkillsTech = () => {
  return (
    <section className="relative bg-[#101314] py-16 md:py-24 overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-[#fffff0]/5 blur-3xl" />
        <div className="absolute bottom-0 left-10 h-60 w-60 rounded-full bg-[#fffff0]/5 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-4xl md:text-6xl font-[Montserrat] text-[#fffff0]">
            Skills & Tech
          </h2>
          <div className="w-20 h-1 bg-[#fffff0] mx-auto mt-4 rounded-full opacity-80" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="rounded-2xl border border-[#fffff0] bg-[#fffff0]/10 backdrop-blur-sm p-4 md:p-5 shadow-md"
            >
              <div
                className={`h-12 w-12 rounded-xl bg-gradient-to-br ${group.accent} border border-[#fffff0]/20 flex items-center justify-center text-xl mb-4`}
                aria-hidden="true"
              >
                {group.icon}
              </div>

              <h3 className="text-[#fffff0] text-2xl font-semibold mb-4 min-h-[64px]">
                {group.title}
              </h3>

              <div className="space-y-2">
                {group.items.map((item) => (
                  <p
                    key={item}
                    className="text-sm text-neutral-300 bg-[#fffff0]/5 border border-[#fffff0]/10 rounded-lg py-2 px-3 text-center"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsTech;
