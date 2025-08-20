'use client'

import { motion } from 'framer-motion'
import { Palette, Brush, Camera, Sparkles } from 'lucide-react'
import { AIBadge } from './AIBadge'

interface Artwork {
  id: number
  title: string
  description: string
  image: string
  category: 'painting' | 'sketch' | 'digital' | 'photography'
  year: string
  medium?: string
}

const artworks: Artwork[] = [
  {
    id: 1,
    title: "Mountain Landscape",
    description: "A serene mountain painting capturing the beauty of nature's grandeur.",
    image: "/images/mountain.jpg",
    category: "painting",
    year: "2023",
    medium: "Oil on canvas"
  },
  {
    id: 2,
    title: "Abstract Composition",
    description: "An exploration of color and form through abstract expressionism.",
    image: "/images/proprionoise.jpg",
    category: "digital",
    year: "2024",
    medium: "Digital art"
  },
  {
    id: 3,
    title: "Technical Sketch",
    description: "Detailed technical drawing showcasing precision and attention to detail.",
    image: "/images/bts.png",
    category: "sketch",
    year: "2023",
    medium: "Graphite on paper"
  },
  {
    id: 4,
    title: "Floral Study",
    description: "A delicate study of natural forms and organic patterns.",
    image: "/images/flower.png",
    category: "painting",
    year: "2024",
    medium: "Watercolor"
  }
]

const categoryIcons = {
  painting: Palette,
  sketch: Brush,
  digital: Sparkles,
  photography: Camera
}

export function ArtisticPortfolio() {
  return (
    <section id="artistic-portfolio" className="section-padding" style={{
      background: `linear-gradient(135deg, var(--color-primary-50, #f9fafb) 0%, var(--color-accent-50, #e3f2fd) 50%, var(--color-primary-100, #f3f4f6) 100%)`
    }}>
      <div className="container-custom">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
              Artistic Portfolio
            </h2>
            <div className="w-24 h-1 bg-accent-600 mx-auto mb-4"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-4">
              A collection of creative works showcasing artistic expression and visual storytelling.
            </p>
            <div className="flex items-center justify-center space-x-2">
              <AIBadge>AI-curated gallery</AIBadge>
            </div>
          </div>

          {/* Artwork Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artworks.map((artwork, index) => {
              const IconComponent = categoryIcons[artwork.category]
              return (
                <motion.div
                  key={artwork.id}
                  className="group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="card h-full flex flex-col hover:shadow-lg transition-all duration-300 overflow-hidden">
                    {/* Artwork Image */}
                    <div className="relative mb-4 overflow-hidden rounded-lg">
                      <div className="aspect-square bg-gradient-to-br from-accent-100 to-accent-200 flex items-center justify-center">
                        <img
                          src={artwork.image}
                          alt={artwork.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      
                      {/* Category Badge */}
                      <div className="absolute top-3 left-3">
                        <div className="flex items-center space-x-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-gray-700">
                          <IconComponent size={12} />
                          <span className="capitalize">{artwork.category}</span>
                        </div>
                      </div>
                    </div>

                    {/* Artwork Info */}
                    <div className="flex-1 flex flex-col p-4">
                      <h3 className="text-xl font-serif font-semibold text-gray-900 mb-2 group-hover:text-accent-600 transition-colors duration-200">
                        {artwork.title}
                      </h3>
                      <p className="text-gray-700 mb-4 flex-1 leading-relaxed">
                        {artwork.description}
                      </p>
                      
                      {/* Artwork Details */}
                      <div className="flex items-center justify-between text-sm text-gray-500 border-t border-gray-100 pt-3">
                        <span>{artwork.year}</span>
                        {artwork.medium && (
                          <span className="italic">{artwork.medium}</span>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Call to Action */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="card p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-4">
                Creative Expression Meets Technical Innovation
              </h3>
              <p className="text-gray-600 mb-6">
                My artistic work reflects the same attention to detail and creative problem-solving 
                that I bring to my technical projects. Each piece represents a moment of exploration 
                and discovery.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <Palette size={16} />
                  <span>Traditional Media</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <Sparkles size={16} />
                  <span>Digital Art</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <Brush size={16} />
                  <span>Sketching</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
