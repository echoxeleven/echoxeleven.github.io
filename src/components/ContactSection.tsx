import { useState, useRef, FormEvent } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import AnimatedSection from "./AnimatedSection";
import { Send, Mail, MapPin, Loader2, CheckCircle } from "lucide-react";

const ContactSection = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setSending(true);
    setError("");

    try {
      await emailjs.sendForm(
        "service_gru98lq", // Replace with your EmailJS service ID
        "template_rtncwxf", // Replace with your EmailJS template ID
        formRef.current,
        "g8cr-vuV7EMmwmPMl" // Replace with your EmailJS public key
      );
      setSent(true);
      formRef.current.reset();
      setTimeout(() => setSent(false), 5000);
    } catch {
      setError("Failed to send message. Please try emailing me directly.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <p className="text-primary font-medium text-sm tracking-wider uppercase mb-2">Get In Touch</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12">
            Let's <span className="text-gradient">Connect</span>
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12">
          <AnimatedSection delay={0.1}>
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Have a project idea, need a developer, or just want to chat? I'm always open to new opportunities and interesting conversations.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Mail size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Email</p>
                    <a href="mailto:pulkeetbairwa19@gmail.com" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                      pulkeetbairwa19@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MapPin size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Location</p>
                    <p className="text-sm font-medium text-foreground">Gurugram, Haryana, India</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="from_name"
                  required
                  placeholder="Your Name"
                  maxLength={100}
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-sm"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="from_email"
                  required
                  placeholder="Your Email"
                  maxLength={255}
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-sm"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Your Message"
                  maxLength={2000}
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-sm resize-none"
                />
              </div>

              {error && <p className="text-sm text-destructive">{error}</p>}

              <motion.button
                type="submit"
                disabled={sending}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-all disabled:opacity-50"
              >
                {sending ? (
                  <Loader2 size={18} className="animate-spin" />
                ) : sent ? (
                  <>
                    <CheckCircle size={18} /> Message Sent!
                  </>
                ) : (
                  <>
                    <Send size={18} /> Send Message
                  </>
                )}
              </motion.button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
