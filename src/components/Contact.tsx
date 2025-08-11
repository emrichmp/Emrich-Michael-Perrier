import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import emailjs from "@emailjs/browser";

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
    threshold: 0.1
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

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/emrichmp",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      )
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/emrich-michael-perrier/",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      )
    },
    {
      name: "Upwork",
      url: "https://www.upwork.com/freelancers/emrichmichaelperrier",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 122.88 122.88">
          <path
            fill="currentColor"
            d="M18.43,0h86.02c10.18,0,18.43,8.25,18.43,18.43v86.02c0,10.18-8.25,18.43-18.43,18.43H18.43 C8.25,122.88,0,114.63,0,104.45l0-86.02C0,8.25,8.25,0,18.43,0L18.43,0z"
          />
          <path
            fill="#1f2937"
            d="M85.73,71.26c-4.08,0-7.92-1.73-11.38-4.54l0.84-3.98l0.02-0.14c0.77-4.22,3.14-11.33,10.51-11.33 c5.52,0,10.01,4.49,10.01,10.01C95.74,66.79,91.25,71.26,85.73,71.26L85.73,71.26L85.73,71.26z M85.73,41.14 c-9.41,0-16.68,6.1-19.66,16.15c-4.51-6.79-7.94-14.93-9.94-21.79H46.01v26.33c0,5.21-4.22,9.43-9.43,9.43 c-5.21,0-9.43-4.22-9.43-9.43V35.47h-10.1V61.8c0,10.78,8.76,19.63,19.54,19.63s19.54-8.86,19.54-19.63v-4.42 c1.97,4.1,4.37,8.26,7.3,11.9l-6.19,29.14h10.34l4.49-21.12c3.94,2.52,8.45,4.1,13.63,4.1c11.09,0,20.11-9.07,20.11-20.18 C105.82,50.16,96.82,41.14,85.73,41.14L85.73,41.14z"
          />
        </svg>
      )
    },
    {
      name: "Calendly",
      url: "https://calendly.com/emrichmp/",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24">
          <circle fill="currentColor" cx="12" cy="12" r="12" />
          <path
            fill="#1f2937"
            d="M19.655 14.262c0.281 0 0.557 0.023 0.828 0.064 0 0.005 -0.005 0.01 -0.005 0.014 -0.105 0.267 -0.234 0.534 -0.381 0.786l-1.219 2.106c-1.112 1.936 -3.177 3.127 -5.411 3.127h-2.432c-2.23 0 -4.294 -1.191 -5.412 -3.127l-1.218 -2.106a6.251 6.251 0 0 1 0 -6.252l1.218 -2.106C6.736 4.832 8.8 3.641 11.035 3.641h2.432c2.23 0 4.294 1.191 5.411 3.127l1.219 2.106c0.147 0.252 0.271 0.519 0.381 0.786 0 0.004 0.005 0.009 0.005 0.014 -0.267 0.041 -0.543 0.064 -0.828 0.064 -1.816 0 -2.501 -0.607 -3.291 -1.306 -0.764 -0.676 -1.711 -1.517 -3.44 -1.517h-1.029c-1.251 0 -2.387 0.455 -3.2 1.278 -0.796 0.805 -1.233 1.904 -1.233 3.099v1.411c0 1.196 0.437 2.295 1.233 3.099 0.813 0.823 1.949 1.278 3.2 1.278h1.034c1.729 0 2.676 -0.841 3.439 -1.517 0.791 -0.703 1.471 -1.306 3.287 -1.301Zm0.005 -3.237c0.399 0 0.794 -0.036 1.179 -0.11 -0.002 -0.004 -0.002 -0.01 -0.002 -0.014 -0.073 -0.414 -0.193 -0.823 -0.349 -1.218 0.731 -0.12 1.407 -0.396 1.986 -0.819 0 -0.004 -0.005 -0.013 -0.005 -0.018 -0.331 -1.085 -0.832 -2.101 -1.489 -3.03 -0.649 -0.915 -1.435 -1.719 -2.331 -2.395 -1.867 -1.398 -4.088 -2.138 -6.428 -2.138 -1.448 0 -2.855 0.28 -4.175 0.841 -1.273 0.543 -2.423 1.315 -3.407 2.299S2.878 6.552 2.341 7.83c-0.557 1.324 -0.842 2.726 -0.842 4.175 0 1.448 0.281 2.855 0.842 4.174 0.542 1.274 1.314 2.423 2.298 3.407s2.129 1.761 3.407 2.299c1.324 0.556 2.727 0.841 4.175 0.841 2.34 0 4.561 -0.74 6.428 -2.137a10.815 10.815 0 0 0 2.331 -2.396c0.652 -0.929 1.158 -1.949 1.489 -3.03 0 -0.004 0.005 -0.014 0.005 -0.018 -0.579 -0.423 -1.255 -0.699 -1.986 -0.819 0.161 -0.395 0.276 -0.804 0.349 -1.218 0.005 -0.009 0.005 -0.014 0.005 -0.023 0.869 0.166 1.692 0.506 2.404 1.035 0.685 0.505 0.552 1.075 0.446 1.416C22.184 20.437 17.619 24 12.221 24c-6.625 0 -12 -5.375 -12 -12s5.37 -12 12 -12c5.398 0 9.963 3.563 11.471 8.464 0.106 0.341 0.239 0.915 -0.446 1.421 -0.717 0.529 -1.535 0.873 -2.404 1.034 0.128 0.716 0.128 1.45 0 2.166 -0.387 -0.074 -0.782 -0.11 -1.182 -0.11 -4.184 0 -3.968 2.823 -6.736 2.823h-1.029c-1.899 0 -3.15 -1.357 -3.15 -3.095v-1.411c0 -1.738 1.251 -3.094 3.15 -3.094h1.034c2.768 0 2.552 2.823 6.731 2.827Z"
          />
        </svg>
      )
    },
    {
      name: "Email",
      url: "mailto:emrichmichaelperrier@gmail.com",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      )
    }
  ];

  return (
    <section id="contact" className="section-padding" ref={ref}>
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="heading-secondary mb-6">Get In Touch</h2>
          <p className="text-body text-gray-400 max-w-3xl mx-auto">
            I'm always interested in new opportunities, collaborations, and interesting projects.
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-light uppercase tracking-wide mb-8">Send a Message</h3>

            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-[#21131D] border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#f6828c] transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-[#21131D] border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#f6828c] transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-[#21131D] border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#f6828c] transition-colors resize-none"
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-[#371e30] hover:bg-[#4a2a3f] disabled:bg-gray-600 border border-[#f59ca9] hover:border-[#f6828c] text-[#f59ca9] hover:text-[#f6828c] rounded-lg font-medium transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </motion.button>

              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-900/20 border border-green-500/30 rounded-lg text-green-400 text-center"
                >
                  Thank you! Your message has been sent successfully.
                </motion.div>
              )}

              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-900/20 border border-red-500/30 rounded-lg text-red-400 text-center"
                >
                  Sorry, there was an error sending your message. Please try again.
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-light uppercase tracking-wide mb-8">Let's Connect</h3>

            <div className="space-y-8">
              {/* Social Links */}
              <div>
                <h4 className="text-lg font-medium text-white mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#f59ca9] hover:text-[#f6828c] transition-colors duration-200"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    >
                      <div className="w-6 h-6">{social.icon}</div>
                    </motion.a>
                  ))}
                </div>

                {/* Résumé Button */}
                <motion.a
                  href="https://docs.google.com/document/d/1LlwHtLDJWqDncr79VObXi--MImGA6dua7uNbmwehm4M/edit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-6 px-6 py-3 bg-[#371e30] border border-[#f59ca9] rounded-lg text-[#f59ca9] hover:text-[#f6828c] hover:border-[#f6828c] transition-colors duration-200 font-medium"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  Résumé
                </motion.a>
              </div>

              {/* Contact Details */}
              <div>
                <h4 className="text-lg font-medium text-white mb-4">Contact Details</h4>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <svg
                      className="w-5 h-5 text-[#f59ca9] mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="text-gray-300">emrichmichaelperrier@gmail.com</span>
                  </div>
                  <div className="flex items-center">
                    <svg
                      className="w-5 h-5 text-[#f59ca9] mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span className="text-gray-300">Los Angeles, CA</span>
                  </div>
                  <div className="flex items-center">
                    <svg
                      className="w-5 h-5 text-[#f59ca9] mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-gray-300">Available for new opportunities!</span>
                  </div>
                </div>
              </div>

              {/* Availability */}
              <div className="bg-[#21131D] rounded-lg p-6 border border-gray-700">
                <h4 className="text-lg font-medium text-white mb-3">Current Availability</h4>
                <p className="text-gray-300 mb-4">
                  I'm currently available for freelance projects and full-time opportunities. I'm
                  particularly interested in:
                </p>
                <ul className="space-y-2">
                  {[
                    "Full-stack development projects",
                    "Custom portfolio websites for creatives",
                    "Sr Developer roles",
                    "React/TypeScript applications",
                    "App integration with AI",
                    "API development and integration",
                    "Technical consulting",
                    "AI Development Coaching (Cursor, Replit, etc...)"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <span className="text-[#f6828c] mr-3 text-xs">•</span>
                      <span className="text-gray-300 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
