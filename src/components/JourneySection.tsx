import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const milestones = [
  {
    year: "2021",
    title: "Started Coding Journey",
    description: "Began learning HTML, CSS, JavaScript. Built first static websites and fell in love with development.",
    tags: ["HTML/CSS", "JavaScript", "Web Basics"],
  },
  {
    year: "2022",
    title: "Minecraft Server Development",
    description: "Launched and managed multiple Minecraft servers. Learned Java plugin development, server optimization, and community management.",
    tags: ["Java", "Server Admin", "Community"],
  },
  {
    year: "2022",
    title: "Discord Bot Development",
    description: "Built feature-rich Discord bots with Node.js and Discord.js. Automated moderation, created custom commands, and managed large communities.",
    tags: ["Node.js", "Discord.js", "APIs"],
  },
  {
    year: "2023",
    title: "Full Stack & Infrastructure",
    description: "Dove deep into React, Next.js, databases, and cloud infrastructure. Started managing VPS servers and deploying production applications.",
    tags: ["React", "VPS", "Databases"],
  },
  {
    year: "2024",
    title: "Performance & Scale",
    description: "Focused on performance optimization, DevOps practices, and building scalable systems. Docker, CI/CD, and advanced infrastructure.",
    tags: ["Docker", "CI/CD", "DevOps"],
  },
  {
    year: "2025",
    title: "Professional Developer",
    description: "Continuing to grow as a full-stack developer, taking on freelance projects, and contributing to open source. Available for exciting opportunities.",
    tags: ["Freelance", "Open Source", "Growth"],
  },
];

const JourneySection = () => {
  return (
    <section id="journey" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <p className="text-primary font-medium text-sm tracking-wider uppercase mb-2">My Journey</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12">
            The <span className="text-gradient">Roadmap</span>
          </h2>
        </AnimatedSection>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {milestones.map((item, idx) => (
            <AnimatedSection key={idx} delay={idx * 0.1}>
              <div className={`relative flex items-start gap-6 mb-12 ${
                idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}>
                {/* Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 + 0.2, type: "spring" }}
                  className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary border-2 border-background -translate-x-1.5 mt-2 z-10"
                />

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${
                  idx % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"
                }`}>
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                    {item.year}
                  </span>
                  <h3 className="font-heading font-semibold text-lg text-foreground mt-2 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                    {item.description}
                  </p>
                  <div className={`flex flex-wrap gap-1.5 ${idx % 2 === 0 ? "md:justify-end" : ""}`}>
                    {item.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2 py-0.5 rounded bg-secondary text-secondary-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
