import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const skills = [
    {
      category: "Frontend",
      items: [
        "React",
        "VueJS",
        "TypeScript",
        "JavaScript(ES6)",
        "HTML",
        "CSS",
        "Tailwind CSS",
        "Next.js",
        "Quasar"
      ]
    },
    {
      category: "Backend & Database",
      items: ["Ruby", "Rails", "Node.js", "MongoDB", "SQL", "Supabase", "Firebase"]
    },
    { category: "E-commerce & CMS", items: ["Shopify", "Hydrogen", "Sanity", "HubSpot"] },
    { category: "Cloud & DevOps", items: ["AWS", "Cloudflare", "Git", "OAuth", "Vercel"] },
    {
      category: "Tools & Services",
      items: ["Figma", "Stripe", "DocuSign", "SendGrid", "EmailJS", "VideoSDK", "Redux"]
    }
  ];

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="heading-secondary mb-6">About Me</h2>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-12 items-start mb-16">
          {/* Profile Picture */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-1 flex justify-center lg:justify-start"
          >
            <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-gray-700 shadow-2xl">
              {/* Placeholder for profile picture */}
              <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <div className="text-6xl mb-2">📸</div>
                  <p className="text-sm">Add your photo here</p>
                </div>
              </div>
              {/* Uncomment and replace with actual image */}
              {/* <img 
                src="/path-to-your-photo.jpg" 
                alt="Emrich-Michael Perrier" 
                className="w-full h-full object-cover"
              /> */}
            </div>
          </motion.div>

          {/* Bio Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <div className="space-y-6 text-body text-gray-300">
              <p>
                I'm <span className="text-white font-medium">Emrich</span>, a Top Rated Plus Full
                Stack Developer with 5+ years of experience building web applications that actually
                ship — and stick. From startups to agencies to direct clients, I've worked across
                industries like e-commerce, analytics, media, and AI tooling, bringing high-traffic
                platforms to life using modern tech stacks like React, Vue, TypeScript, Next.js, and
                Ruby on Rails.
              </p>

              <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-8 rounded-xl border border-gray-700/50 shadow-xl backdrop-blur-sm">
                <div className="flex items-center mb-6">
                  <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-sm font-bold">★</span>
                  </div>
                  <h4 className="text-white font-semibold text-xl">Key Highlights</h4>
                </div>
                <div className="grid gap-4">
                  <div className="flex items-start group hover:bg-gray-700/30 p-3 rounded-lg transition-all duration-300">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <div>
                      <span className="text-gray-300">
                        Led full-stack development of{" "}
                        <span className="text-white font-semibold bg-gradient-to-r from-orange-500/20 to-orange-600/20 px-1 rounded">
                          Open & Run
                        </span>
                        , a business management platform built from scratch using React, Supabase,
                        and Stripe.
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start group hover:bg-gray-700/30 p-3 rounded-lg transition-all duration-300">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <div>
                      <span className="text-gray-300">
                        Spearheaded the migration of{" "}
                        <span className="text-white font-semibold bg-gradient-to-r from-orange-500/20 to-orange-600/20 px-1 rounded">
                          Tango Analytics'
                        </span>{" "}
                        map viewer to Vue 3 + Quasar 2.
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start group hover:bg-gray-700/30 p-3 rounded-lg transition-all duration-300">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <div>
                      <span className="text-gray-300">
                        Built and maintained apps for brands like{" "}
                        <span className="text-white font-semibold bg-gradient-to-r from-orange-500/20 to-orange-600/20 px-1 rounded">
                          OnlyFans (OFTV)
                        </span>
                        ,{" "}
                        <span className="text-white font-semibold bg-gradient-to-r from-orange-500/20 to-orange-600/20 px-1 rounded">
                          La Ligne
                        </span>
                        , and{" "}
                        <span className="text-white font-semibold bg-gradient-to-r from-orange-500/20 to-orange-600/20 px-1 rounded">
                          The Lemonade Creative
                        </span>
                        .
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start group hover:bg-gray-700/30 p-3 rounded-lg transition-all duration-300">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <div>
                      <span className="text-gray-300">
                        Regularly design and develop sleek portfolio websites for creatives like
                        cinematographers and directors — sites that actually feel like them.
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <p>
                Whether I'm diving into a legacy codebase or building something from the ground up,
                my focus is always the same: write clean, maintainable code, communicate clearly,
                and deliver early momentum that earns long-term trust. I'm also big on staying
                up-to-date and adapting — I've picked up entire frameworks mid-project to meet
                client needs.
              </p>

              <p>
                With over <span className="text-white font-medium">$100K earned on Upwork</span> and
                a <span className="text-white font-medium">100% satisfaction rate</span>, I bring
                both experience and reliability to the table. If you're looking for someone who can
                hop in fast, figure things out, and get real work done — let's talk.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-light uppercase tracking-wide mb-8 text-center">
            Skills & Technologies
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="bg-gray-800/30 p-6 rounded-lg border border-gray-700"
              >
                <h4 className="text-lg font-medium text-white mb-4">{skillGroup.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map(skill => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded-full border border-gray-600 hover:border-orange-500 hover:text-orange-400 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="grid grid-cols-2 md:grid-cols-5 gap-8 pt-4 border-t border-gray-800"
        >
          {[
            { number: "30+", label: "Projects Completed" },
            { number: "5+", label: "Years Experience" },
            { number: "100%", label: "Client Satisfaction" },
            { number: "$100K+", label: "Earned on Upwork" },
            { number: "100%", label: "Job Success Score" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-light text-white mb-2">{stat.number}</div>
              <div className="text-gray-400 text-sm uppercase tracking-wide">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
