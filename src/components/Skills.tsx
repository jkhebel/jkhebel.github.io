'use client'

import { motion } from 'framer-motion'
import { skills } from '@/data/profile'
import { AIBadge } from './AIBadge'

export function Skills() {
  return (
    <section id="skills" className="section-padding" style={{
      background: `linear-gradient(135deg, var(--color-primary-50, #f9fafb) 0%, var(--color-primary-100, #f3f4f6) 50%, var(--color-accent-50, #e3f2fd) 100%)`
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
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-accent-600 mx-auto mb-4"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-4">
              A comprehensive overview of my technical skills and areas of expertise.
            </p>
            <div className="flex items-center justify-center space-x-2">
              <AIBadge>AI-optimized categorization</AIBadge>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillCategory, index) => (
              <motion.div
                key={skillCategory.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="card h-full">
                  <h3 className="text-xl font-serif font-semibold text-gray-900 mb-4">
                    {skillCategory.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillCategory.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="tag"
                        style={{
                          backgroundColor: 'var(--color-accent-50, #e3f2fd)',
                          color: 'var(--color-accent-700, #1976d2)',
                          borderColor: 'var(--color-accent-200, #90caf9)'
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Skills Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="card p-8">
              <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-4">
                Technical Focus Areas
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-accent-600 mb-2">AI & Machine Learning</h4>
                  <p className="text-gray-600">
                    Deep learning, computer vision, and data analysis for biomedical applications.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-accent-600 mb-2">Software Engineering</h4>
                  <p className="text-gray-600">
                    Full-stack development, mobile apps, and scalable system architecture.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-accent-600 mb-2">Biomedical Engineering</h4>
                  <p className="text-gray-600">
                    Medical device design, signal processing, and clinical research applications.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
