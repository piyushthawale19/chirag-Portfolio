import { useState } from "react";
import { cn } from "../lib/utils";

const skills = [
  // Frontend
  { name: "HTML/CSS", level: 90, category: "frontend" },
  { name: "JavaScript", level: 75, category: "frontend" },
  { name: "React.js", level: 70, category: "frontend" },
  { name: "Bootstrap", level: 85, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },

  // Backend
  { name: "Node.js", level: 80, category: "backend" },
  { name: "Express", level: 75, category: "backend" },
  { name: "MongoDB", level: 70, category: "backend" },
  { name: "MySQL", level: 80, category: "backend" },

  // Tools
  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "WordPress", level: 80, category: "tools" },
  { name: "Excel", level: 80, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
  { name: "WIX Studio", level: 90, category: "tools" },
  { name: "ChatGPT", level: 75, category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section
      id="skills"
      className="py-24 relative bg-black text-white"
    >
      <div className="container mx-auto max-w-6xl px-6">
        {/* Title */}
        <h2 className="text-4xl font-extrabold mb-16 text-center tracking-tight">
          My <span className="text-orange-400">Skills</span>
        </h2>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-6 py-2 rounded-full font-medium shadow-md transition-all duration-300 capitalize",
                activeCategory === category
                  ? "bg-orange-400 text-white shadow-lg scale-105"
                  : "bg-gray-800 text-white hover:bg-gray-700 hover:shadow"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-gray-900 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-700"
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
                <span className="text-sm font-medium text-gray-400">
                  {skill.level}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-gray-700 h-3 rounded-full overflow-hidden relative">
                {/* Purple Main Bar */}
                <div
                  className="progress-fill bg-orange-400 h-3 rounded-full"
                  style={{ "--progress-width": `${skill.level}%` }}
                />
                {/* Orange Highlight Line */}
                <div
                  className="absolute top-0 left-0 h-1rounded-full"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
