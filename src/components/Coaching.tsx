import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface CoachingService {
  id: number
  title: string
  description: string
  features: string[]
  duration: string
  price: string
  category: 'powerlifting' | 'ai-development'
  image: string
  ctaText: string
  ctaLink: string
}

const Coaching = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const coachingServices: CoachingService[] = [
    {
      id: 1,
      title: "Powerlifting Coaching",
      description: "Comprehensive strength training programs designed to maximize your powerlifting potential. From beginners to advanced lifters, I'll help you achieve your strength goals.",
      features: [
        "Personalized training programs",
        "Form analysis and correction",
        "Nutrition guidance",
        "Competition preparation",
        "Progress tracking",
        "24/7 support"
      ],
      duration: "12 weeks minimum",
      price: "Starting at $150/month",
      category: "powerlifting",
      image: "/coaching/powerlifting.jpg",
      ctaText: "Start Powerlifting Journey",
      ctaLink: "https://calendly.com/emrichmp/powerlifting-consultation"
    },
    {
      id: 2,
      title: "AI Development Coaching",
      description: "Learn to build AI-powered applications and integrate cutting-edge AI technologies into your projects. Perfect for developers looking to expand their AI capabilities.",
      features: [
        "AI/ML fundamentals",
        "API integration (OpenAI, Claude)",
        "Custom AI applications",
        "Best practices & architecture",
        "Project portfolio building",
        "Code review & optimization"
      ],
      duration: "8 weeks minimum",
      price: "Starting at $200/month",
      category: "ai-development",
      image: "/coaching/ai-development.jpg",
      ctaText: "Start AI Development Journey",
      ctaLink: "https://calendly.com/emrichmp/ai-development-consultation"
    }
  ]

  const testimonials = [
    {
      id: 1,
      name: "Sarah M.",
      role: "Powerlifter",
      content: "Emrich's coaching helped me increase my total by 100kg in just 6 months. His attention to form and personalized programming made all the difference.",
      category: "powerlifting"
    },
    {
      id: 2,
      name: "Alex K.",
      role: "Full-Stack Developer",
      content: "Working with Emrich on AI development was incredible. He helped me build a complete AI-powered application from scratch. Highly recommend!",
      category: "ai-development"
    },
    {
      id: 3,
      name: "Mike R.",
      role: "Intermediate Lifter",
      content: "The form analysis and programming adjustments were game-changing. I finally hit my goal of a 500lb deadlift thanks to Emrich's guidance.",
      category: "powerlifting"
    }
  ]

  return (
    <section 
      id="coaching" 
      className="section-padding bg-gray-900"
      ref={ref}
    >
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="heading-secondary mb-6">Coaching Services</h2>
          <p className="text-body text-gray-400 max-w-3xl mx-auto">
            I offer specialized coaching in two areas I'm passionate about: powerlifting and AI development. 
            Whether you're looking to build strength or build AI applications, I'll help you achieve your goals.
          </p>
        </motion.div>

        {/* Coaching Services */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid lg:grid-cols-2 gap-12 mb-20"
        >
          {coachingServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-gray-600 transition-colors"
            >
              {/* Service Header */}
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                    service.category === 'powerlifting' 
                      ? 'bg-red-900/30 text-red-400 border border-red-700' 
                      : 'bg-blue-900/30 text-blue-400 border border-blue-700'
                  }`}>
                    {service.category === 'powerlifting' ? 'Powerlifting' : 'AI Development'}
                  </span>
                  <span className="text-lg font-medium text-white">{service.price}</span>
                </div>
                
                <h3 className="text-2xl font-light mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                
                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-lg font-medium text-white mb-3">What's Included:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <svg className="w-4 h-4 mr-3 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">Duration: {service.duration}</span>
                  <a
                    href={service.ctaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                      service.category === 'powerlifting'
                        ? 'bg-red-600 hover:bg-red-700 text-white'
                        : 'bg-blue-600 hover:bg-blue-700 text-white'
                    }`}
                  >
                    {service.ctaText}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-light text-center mb-12">What My Clients Say</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="bg-gray-800 rounded-lg p-6 border border-gray-700"
              >
                <div className="flex items-center mb-4">
                  <div className={`w-3 h-3 rounded-full mr-3 ${
                    testimonial.category === 'powerlifting' ? 'bg-red-500' : 'bg-blue-500'
                  }`}></div>
                  <div>
                    <div className="font-medium text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-gray-300 italic">"{testimonial.content}"</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center"
        >
          <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
            <h3 className="text-2xl font-light mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Whether you're looking to build strength or build AI applications, I'm here to help you achieve your goals. 
              Let's discuss your objectives and create a personalized plan for success.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://calendly.com/emrichmp/powerlifting-consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
              >
                Powerlifting Consultation
              </a>
              <a
                href="https://calendly.com/emrichmp/ai-development-consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                AI Development Consultation
              </a>
              <a
                href="mailto:emrichmp@gmail.com"
                className="px-6 py-3 border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white rounded-lg transition-colors"
              >
                Email Me
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Coaching 