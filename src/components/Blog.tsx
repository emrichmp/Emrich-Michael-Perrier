import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface BlogPost {
  id: number
  title: string
  excerpt: string
  date: string
  readTime: string
  tags: string[]
  image: string
  url: string
  platform: string
}

const Blog = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Building Scalable React Applications with TypeScript",
      excerpt: "Learn how to structure large React applications using TypeScript, including best practices for state management, component composition, and performance optimization.",
      date: "March 15, 2024",
      readTime: "8 min read",
      tags: ["React", "TypeScript", "Architecture"],
      image: "/blog/react-typescript.jpg",
      url: "https://medium.com/@yourname/building-scalable-react-applications",
      platform: "Medium"
    },
    {
      id: 2,
      title: "Microservices Architecture: Lessons Learned",
      excerpt: "A deep dive into implementing microservices, covering service discovery, API gateways, and the challenges of distributed systems.",
      date: "February 28, 2024",
      readTime: "12 min read",
      tags: ["Microservices", "Architecture", "DevOps"],
      image: "/blog/microservices.jpg",
      url: "https://dev.to/yourname/microservices-architecture",
      platform: "Dev.to"
    },
    {
      id: 3,
      title: "Optimizing Database Performance in Node.js Applications",
      excerpt: "Practical techniques for improving database performance, including query optimization, connection pooling, and caching strategies.",
      date: "February 10, 2024",
      readTime: "10 min read",
      tags: ["Node.js", "Database", "Performance"],
      image: "/blog/database-optimization.jpg",
      url: "https://yourblog.com/database-optimization",
      platform: "Personal Blog"
    },
    {
      id: 4,
      title: "The Future of Web Development: What's Next?",
      excerpt: "Exploring emerging technologies and trends that will shape the future of web development, from WebAssembly to AI-powered tools.",
      date: "January 25, 2024",
      readTime: "15 min read",
      tags: ["Web Development", "Future Tech", "AI"],
      image: "/blog/future-web.jpg",
      url: "https://medium.com/@yourname/future-of-web-development",
      platform: "Medium"
    },
    {
      id: 5,
      title: "Building Accessible Web Applications",
      excerpt: "A comprehensive guide to creating web applications that are accessible to all users, including those with disabilities.",
      date: "January 12, 2024",
      readTime: "9 min read",
      tags: ["Accessibility", "Web Development", "UX"],
      image: "/blog/accessibility.jpg",
      url: "https://dev.to/yourname/accessible-web-apps",
      platform: "Dev.to"
    },
    {
      id: 6,
      title: "CI/CD Pipeline Best Practices for Modern Applications",
      excerpt: "Setting up robust CI/CD pipelines that ensure code quality, security, and reliable deployments for modern web applications.",
      date: "December 30, 2023",
      readTime: "11 min read",
      tags: ["CI/CD", "DevOps", "Automation"],
      image: "/blog/cicd-pipeline.jpg",
      url: "https://yourblog.com/cicd-best-practices",
      platform: "Personal Blog"
    }
  ]

  return (
    <section 
      id="blog" 
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
          <h2 className="heading-secondary mb-6">Blog & Articles</h2>
          <p className="text-body text-gray-400 max-w-3xl mx-auto">
            Sharing knowledge and insights through technical writing. I write about software development, 
            best practices, and emerging technologies to help others in the developer community.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="group cursor-pointer"
            >
              <a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-gray-600 transition-colors">
                  {/* Image Placeholder */}
                  <div className="aspect-video bg-gray-700 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20" />
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                      <span className="text-sm">Article Image</span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    {/* Platform Badge */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs text-blue-400 font-medium uppercase tracking-wide">
                        {post.platform}
                      </span>
                      <span className="text-xs text-gray-500">
                        {post.readTime}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-light mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {post.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded"
                          >
                            {tag}
                          </span>
                        ))}
                        {post.tags.length > 2 && (
                          <span className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded">
                            +{post.tags.length - 2}
                          </span>
                        )}
                      </div>
                      
                      <span className="text-gray-500 text-xs">
                        {post.date}
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </motion.article>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
            <h3 className="text-2xl font-light mb-4">
              Want to Read More?
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              I regularly write about software development, share tutorials, and discuss industry trends. 
              Follow me on Medium, Dev.to, or subscribe to my newsletter for the latest updates.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://medium.com/@yourname"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                Follow on Medium
              </a>
              <a
                href="https://dev.to/yourname"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white rounded-lg transition-colors"
              >
                Follow on Dev.to
              </a>
              <a
                href="https://yourblog.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white rounded-lg transition-colors"
              >
                Visit My Blog
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Blog 