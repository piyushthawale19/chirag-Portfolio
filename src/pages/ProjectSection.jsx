import React from "react";
import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "PORTFOLIO",
    description: "Implemented dark/light mode, resume download, and image showcase.",
    image: "/Image/Portfolio.png",
    tags: ["React", "Node.js", "Stripe"],
    demoUrl: "#",
    githubUrl: "https://github.com/divinerchirag/portfolio",
  },
  {
    id: 2,
    title: "NETFLIX CLONE",
    description: "Responsive site with React, Node, Express, MongoDB, Tailwind.",
    image: "/Image/Netflix.jpg",
    tags: ["React", "TailwindCSS", "Supabase"],
    demoUrl: "#",
    githubUrl: "https://github.com/divinerchirag/netflix-clone",
  },
  {
    id: 3,
    title: "SMART DEVELOPER ASSISTANT",
    description: "Modern Developer AI Assistant using Google Gemini API.",
    image: "/Image/SDA.jpeg",
    tags: ["TypeScript", "D3.js", "Next.js"],
    demoUrl: "#",
    githubUrl: "https://github.com/divinerchirag/sda",
  },
];

export const ProjectSection = () => {
  return (
    <section id="project" className="py-2 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 mt-6 text-center">
          Featured <span className="text-orange-500">Project</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold underline mb-3">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

                <div className="flex space-x-3">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-3"
            href="https://github.com/divinerchirag"
            target="_blank"
            rel="noopener noreferrer"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
