import AnimatedSection from "./AnimatedSection";
import { Code2, Server, Users, Zap } from "lucide-react";

const stats = [
  { icon: Code2, label: "Years Coding", value: "3+" },
  { icon: Server, label: "Servers Managed", value: "50+" },
  { icon: Users, label: "Communities Built", value: "10+" },
  { icon: Zap, label: "Projects Delivered", value: "30+" },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <p className="text-primary font-medium text-sm tracking-wider uppercase mb-2">About Me</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            A passionate builder at <span className="text-gradient">18</span>
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <AnimatedSection delay={0.1}>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm <strong className="text-foreground">Pulkeet Bairwa</strong>, also known as <strong className="text-foreground">EchoxEleven</strong> in the dev community. Based in Gurugram, Haryana, I've been immersed in coding since I was 15.
              </p>
              <p>
                From building high performance Minecraft servers that handle thousands of concurrent players, to crafting feature rich Discord bots and deploying production grade web applications, I thrive on turning ideas into reality.
              </p>
              <p>
                My expertise spans the full stack: frontend frameworks, backend APIs, database design, VPS management, and infrastructure optimization. I'm equally comfortable writing clean React components as I am configuring Linux servers.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="card-warm p-5 text-center">
                  <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-heading font-bold text-foreground">{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
