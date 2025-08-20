'use client'

import { motion } from 'framer-motion'
import { projects, profile } from '@/data/profile'
import { Github, ExternalLink, Star } from 'lucide-react'
import { AIBadge } from './AIBadge'

export function Projects() {
  const featuredProjects = projects.filter(project => project.featured)

  return (
    <section id="projects" className="section-padding" style={{
      background: `linear-gradient(135deg, var(--color-background, #ffffff) 0%, var(--color-primary-50, #f9fafb) 100%)`
    }}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-accent-600 mx-auto mb-4"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-4">
              A selection of my recent work showcasing my expertise in AI, biomedical engineering, and software development.
            </p>
            <div className="flex items-center justify-center space-x-2">
              <AIBadge>AI-curated selection</AIBadge>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="card h-full flex flex-col hover:shadow-lg transition-all duration-300">
                  {/* Project Image */}
                  <div className="relative mb-4 overflow-hidden rounded-lg">
                    <div className="aspect-video bg-gradient-to-br from-accent-100 to-accent-200 flex items-center justify-center">
                      {project.image ? (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="text-4xl font-serif font-bold text-accent-600">
                          {project.title.split(' ').map(word => word[0]).join('')}
                        </span>
                      )}
                    </div>
                    {project.featured && (
                      <div className="absolute top-2 right-2">
                        <Star size={20} className="text-yellow-500 fill-current" />
                      </div>
                    )}
                  </div>

                  {/* Project Content */}
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-xl font-serif font-semibold text-gray-900 mb-2 group-hover:text-accent-600 transition-colors duration-200">
                      {project.title}
                    </h3>

                    <p className="text-gray-700 mb-4 flex-1 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 4).map((tech, techIndex) => (
                          <span key={techIndex} className="tag text-xs">
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="tag text-xs">
                            +{project.technologies.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Project Links */}
                    <div className="flex items-center space-x-3 mt-auto pt-4 border-t border-gray-100">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-1 text-gray-600 hover:text-gray-900 transition-colors duration-200"
                        >
                          <Github size={16} />
                          <span className="text-sm">Code</span>
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-1 text-gray-600 hover:text-gray-900 transition-colors duration-200"
                        >
                          <ExternalLink size={16} />
                          <span className="text-sm">Live</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Empty State */}
          {featuredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center py-12"
            >
              <div className="text-gray-500 text-lg">
                Project details will be added here. Update the data in <code className="bg-gray-100 px-2 py-1 rounded">src/data/profile.ts</code> to add your projects.
              </div>
            </motion.div>
          )}

          {/* View All Projects Button */}
          {featuredProjects.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <a
                href={profile.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center space-x-2"
              >
                <Github size={20} />
                <span>View All Projects on GitHub</span>
              </a>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
