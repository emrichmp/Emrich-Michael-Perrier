import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="heading-secondary mb-6">About Emrich-Michael Perrier</h2>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-16 items-center mb-8">
          {/* Profile Picture */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-1 flex justify-center lg:justify-start lg:pt-8"
          >
            <div className="relative group">
              {/* Background gradient ring */}
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition duration-500"></div>

              {/* Main image container */}
              <div className="relative w-72 h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-gray-700/50 shadow-2xl bg-gradient-to-br from-gray-800 to-gray-900 group-hover:border-orange-500/50 transition-all duration-500">
                <img
                  src="/About/emrich.png"
                  alt="Emrich-Michael Perrier"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Floating accent elements */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 animate-pulse"></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-300"></div>
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
                I'm <span className="text-white font-medium">Emrich-Michael Perrier</span>, a Top
                Rated Plus Full Stack Developer in Los Angeles with 5+ years of experience building
                web applications that actually ship — and stick. From startups to agencies to direct
                clients, I've worked across industries like e-commerce, analytics, media, and AI
                tooling, bringing high-traffic platforms to life using modern tech stacks like
                React, Vue, TypeScript, Next.js, and Ruby on Rails.
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

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="grid grid-cols-2 md:grid-cols-5 gap-8"
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
