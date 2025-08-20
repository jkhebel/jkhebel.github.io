'use client'

import { motion } from 'framer-motion'
import { experiences } from '@/data/profile'
import { Calendar, MapPin } from 'lucide-react'
import { AIBadge } from './AIBadge'

export function Experience() {
  return (
    <section id="experience" className="section-padding" style={{
      background: `linear-gradient(135deg, var(--color-primary-50, #f9fafb) 0%, var(--color-primary-100, #f3f4f6) 50%, var(--color-accent-50, #e3f2fd) 100%)`
    }}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
              Experience
            </h2>
            <div className="w-24 h-1 bg-accent-600 mx-auto mb-4"></div>
            <div className="flex items-center justify-center space-x-2">
              <AIBadge>AI-enhanced descriptions</AIBadge>
            </div>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5" style={{ backgroundColor: 'var(--color-primary-200, #e5e7eb)' }}></div>

            <div className="space-y-12">
              {experiences.map((experience, index) => (
                <motion.div
                  key={experience.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex items-start ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 -translate-y-2 w-4 h-4 rounded-full border-4 shadow-md z-10" style={{ backgroundColor: 'var(--color-accent-600, #2196f3)', borderColor: 'var(--color-primary-50, #ffffff)' }}></div>

                  {/* Content Card */}
                  <div className={`ml-12 md:ml-0 md:w-5/12 ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}>
                    <div className="card">
                      {/* Header */}
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-serif font-semibold text-gray-900">
                            {experience.position}
                          </h3>
                          {experience.current && (
                            <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                              Current
                            </span>
                          )}
                        </div>
                        <h4 className="text-lg font-medium text-accent-600 mb-2">
                          {experience.company}
                        </h4>
                      </div>

                      {/* Meta Info */}
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                        <div className="flex items-center space-x-1">
                          <Calendar size={16} />
                          <span>
                            {experience.startDate} - {experience.current ? 'Present' : experience.endDate}
                          </span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin size={16} />
                          <span>{experience.location}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        {experience.description}
                      </p>

                      {/* Technologies */}
                      <div className="mb-4">
                        <h5 className="text-sm font-medium text-gray-900 mb-2">Technologies:</h5>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className="tag">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Achievements */}
                      {experience.achievements.length > 0 && (
                        <div>
                          <h5 className="text-sm font-medium text-gray-900 mb-2">Key Achievements:</h5>
                          <ul className="space-y-1">
                            {experience.achievements.map((achievement, achievementIndex) => (
                              <li key={achievementIndex} className="text-sm text-gray-700 flex items-start">
                                <span className="text-accent-600 mr-2">•</span>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Empty State */}
          {experiences.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center py-12"
            >
              <div className="text-gray-500 text-lg">
                Experience details will be added here. Update the data in <code className="bg-gray-100 px-2 py-1 rounded">src/data/profile.ts</code> to add your work experience.
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
