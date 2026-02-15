import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const skillCategories = [
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "Java", "C++", "HTML/CSS"],
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "Vue.js"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "REST APIs", "Discord.js"],
  },
  {
    title: "DevOps & Infra",
    skills: ["Linux/VPS", "Docker", "Nginx", "Cloudflare"],
  },
  {
    title: "Databases",
    skills: ["MongoDB", "MySQL", "Redis", "Firebase"],
  },
  {
    title: "Specialties",
    skills: ["Minecraft Servers", "Performance Tuning", "Community Mgmt", "Bot Development"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding bg-card/50">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <p className="text-primary font-medium text-sm tracking-wider uppercase mb-2">Skills & Tech</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12">
            My <span className="text-gradient">Toolkit</span>
          </h2>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, catIdx) => (
            <AnimatedSection key={cat.title} delay={catIdx * 0.1}>
              <div className="card-warm p-6 h-full">
                <h3 className="font-heading font-semibold text-foreground mb-4">{cat.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, i) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: catIdx * 0.05 + i * 0.03 }}
                      className="px-3 py-1.5 text-xs font-medium rounded-full bg-secondary text-secondary-foreground hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
