'use client'

import { motion } from 'framer-motion'
import { profile, education, experiences, projects } from '@/data/profile'
import { GraduationCap, MapPin, Mail } from 'lucide-react'
import { AIBadge } from './AIBadge'

export function About() {
  return (
    <section id="about" className="section-padding" style={{
      background: `linear-gradient(135deg, var(--color-background, #ffffff) 0%, var(--color-primary-50, #f9fafb) 100%)`
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
              About Me
            </h2>
            <div className="w-24 h-1 bg-accent-600 mx-auto mb-4"></div>
            <div className="flex items-center justify-center space-x-2">
              <AIBadge>AI-enhanced content</AIBadge>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - About Text */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {/* Decorative Element */}
              <div className="absolute -top-4 -left-4 w-24 h-24 rounded-lg overflow-hidden opacity-10">
                <div className="w-full h-full bg-gradient-to-br from-accent-200 to-accent-400 rounded-lg"></div>
              </div>
              <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-6">
                {profile.name}
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {profile.about}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                {profile.mission}
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin size={20} className="text-accent-600" />
                  <span className="text-gray-700">{profile.location}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail size={20} className="text-accent-600" />
                  <a
                    href={`mailto:${profile.email}`}
                    className="text-gray-700 hover:text-accent-600 transition-colors duration-200"
                  >
                    {profile.email}
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Education & Stats */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Education */}
              <div>
                <h4 className="text-xl font-serif font-semibold text-gray-900 mb-4 flex items-center">
                  <GraduationCap size={24} className="text-accent-600 mr-2" />
                  Education
                </h4>
                <div className="space-y-4">
                  {education.map((edu, index) => (
                    <div key={index} className="card">
                      <h5 className="font-semibold text-gray-900">{edu.degree}</h5>
                      <p className="text-accent-600 font-medium">{edu.institution}</p>
                      <p className="text-gray-600">{edu.year}</p>
                      {edu.description && (
                        <p className="text-gray-700 mt-2">{edu.description}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="card text-center">
                  <div className="text-3xl font-bold text-accent-600 mb-2">
                    {experiences.length}+
                  </div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="card text-center">
                  <div className="text-3xl font-bold text-accent-600 mb-2">
                    {projects.filter(p => p.featured).length}
                  </div>
                  <div className="text-gray-600">Featured Projects</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
