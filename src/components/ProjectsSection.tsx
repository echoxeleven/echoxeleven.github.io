import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { ExternalLink, Github, X } from "lucide-react";

const projects = [
  {
    title: "Minecraft Network",
    category: "Game Servers",
    description: "Built and managed a high performance Minecraft network handling 1000+ concurrent players with custom plugins, anti cheat systems, and optimized server infrastructure.",
    tech: ["Java", "PaperMC", "Redis", "MySQL", "Linux"],
    highlights: ["Custom plugin development", "Performance optimization", "Player management systems"],
  },
  {
    title: "Multi-Purpose Discord Bot",
    category: "Bot Development",
    description: "Feature rich Discord bot with moderation tools, music playback, leveling systems, custom commands, and economy features. Serving multiple large communities.",
    tech: ["Node.js", "Discord.js", "MongoDB", "REST APIs"],
    highlights: ["Auto-moderation", "Custom economy system", "Slash commands"],
  },
  {
    title: "Web Dashboard",
    category: "Web Development",
    description: "Full stack admin dashboard for server management with real-time analytics, user management, and configuration panels. Built with modern React and API integrations.",
    tech: ["React", "TypeScript", "Tailwind", "Express", "PostgreSQL"],
    highlights: ["Real-time data", "Role-based access", "API integrations"],
  },
  {
    title: "Infrastructure Automation",
    category: "DevOps",
    description: "Automated deployment pipelines and server provisioning for multiple VPS instances. Includes monitoring, auto scaling, and backup systems.",
    tech: ["Docker", "Nginx", "Bash", "CI/CD", "Cloudflare"],
    highlights: ["Zero-downtime deploys", "Auto backups", "Performance monitoring"],
  },
  {
    title: "Community Platform",
    category: "Full Stack",
    description: "Custom community management platform with forums, events, announcements, and integrated Discord webhooks. Designed for gaming communities.",
    tech: ["Next.js", "MongoDB", "Socket.io", "Discord API"],
    highlights: ["Real-time chat", "Event management", "Discord integration"],
  },
  {
    title: "Performance Optimizer",
    category: "Tools",
    description: "Suite of tools for analyzing and optimizing server performance including JVM tuning, network optimization, and resource monitoring dashboards.",
    tech: ["Python", "Java", "Grafana", "Prometheus"],
    highlights: ["JVM profiling", "Network analysis", "Resource dashboards"],
  },
];

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="section-padding bg-card/50">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <p className="text-primary font-medium text-sm tracking-wider uppercase mb-2">Portfolio</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12">
            Featured <span className="text-gradient">Projects</span>
          </h2>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <AnimatedSection key={project.title} delay={idx * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                onClick={() => setSelectedProject(project)}
                className="card-warm p-6 cursor-pointer h-full flex flex-col"
              >
                <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full w-fit mb-3">
                  {project.category}
                </span>
                <h3 className="font-heading font-semibold text-foreground text-lg mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 flex-1 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.slice(0, 3).map((t) => (
                    <span key={t} className="text-xs px-2 py-0.5 rounded bg-secondary text-secondary-foreground">
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="text-xs px-2 py-0.5 rounded bg-secondary text-secondary-foreground">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/20 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-background border border-border rounded-2xl p-6 md:p-8 max-w-lg w-full max-h-[80vh] overflow-y-auto"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                    {selectedProject.category}
                  </span>
                  <h3 className="font-heading font-bold text-xl text-foreground mt-2">{selectedProject.title}</h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-muted-foreground hover:text-foreground transition-colors p-1"
                >
                  <X size={20} />
                </button>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">{selectedProject.description}</p>

              <div className="mb-6">
                <h4 className="font-heading font-semibold text-sm text-foreground mb-2">Key Highlights</h4>
                <ul className="space-y-1.5">
                  {selectedProject.highlights.map((h) => (
                    <li key={h} className="text-sm text-muted-foreground flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-heading font-semibold text-sm text-foreground mb-2">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((t) => (
                    <span key={t} className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
