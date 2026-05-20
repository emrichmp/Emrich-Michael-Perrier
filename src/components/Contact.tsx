import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import emailjs from "@emailjs/browser";

const fieldClassName =
  "w-full bg-transparent border-b border-brand-border px-0 py-3 text-ink-primary font-light text-sm focus:outline-none focus:border-ink-secondary transition-colors duration-200 placeholder:text-ink-muted placeholder:font-light";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const result = await emailjs.sendForm(
        "service_jtjrhai", // Your EmailJS service ID
        "template_u9uxuf5", // Your EmailJS template ID
        form.current!,
        "eJs2Qqen1BNxtQpCB" // Your EmailJS public key
      );

      if (result.status === 200) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("EmailJS error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-brand-base" ref={ref}>
      <div className="container-max mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <div className="label-mono">Contact</div>
            <div className="accent-line mt-3 mb-8" />
            <p className="text-2xl font-light text-ink-primary leading-relaxed">
              Have a project in mind or just want to talk? I'm always open to the right
              conversation.
            </p>

            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-3">
                <span className="label-mono text-ink-muted">Email</span>
                <span className="text-sm font-light text-ink-secondary">
                  emrichmichaelperrier@gmail.com
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="label-mono text-ink-muted">Location</span>
                <span className="text-sm font-light text-ink-secondary">Los Angeles, CA</span>
              </div>
            </div>

            <p className="mt-8 label-mono text-ink-muted">
              <span className="inline-block w-2 h-2 rounded-full bg-brand-accent mr-2 align-middle" />
              Available for new projects
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 lg:col-start-7"
          >
            <form ref={form} onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="label-mono text-ink-muted mb-2 block">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className={fieldClassName}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="label-mono text-ink-muted mb-2 block">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className={fieldClassName}
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label htmlFor="message" className="label-mono text-ink-muted mb-2 block">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className={`${fieldClassName} resize-none`}
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>

              <div className="mt-8 flex flex-col items-stretch sm:items-end gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting || submitStatus === "success"}
                  className={`label-mono border border-brand-border px-8 py-3 w-full sm:w-auto hover:border-brand-accent hover:text-brand-accent transition-all duration-200 disabled:opacity-60 disabled:hover:border-brand-border ${
                    isSubmitting
                      ? "text-ink-muted"
                      : "text-ink-primary disabled:hover:text-ink-primary"
                  }`}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>

                {submitStatus === "success" && (
                  <p className="label-mono text-brand-accent sm:text-right">Message sent.</p>
                )}
                {submitStatus === "error" && (
                  <p className="label-mono text-red-400 sm:text-right">
                    Something went wrong.
                  </p>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
