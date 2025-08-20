'use client'

import { motion } from 'framer-motion'

interface FlowerLogoProps {
  size?: 'sm' | 'md' | 'lg'
  animated?: boolean
  className?: string
  variant?: 'geometric' | 'image'
}

export function FlowerLogo({ size = 'md', animated = true, className = '', variant = 'geometric' }: FlowerLogoProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  }

  const petalVariants = {
    initial: { rotate: 0, scale: 1 },
    hover: { rotate: 360, scale: 1.1 },
    animate: { rotate: [0, 360], transition: { duration: 20, repeat: Infinity, ease: "linear" } }
  }

  const centerVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.2 },
    pulse: { scale: [1, 1.1, 1], transition: { duration: 2, repeat: Infinity } }
  }

  if (variant === 'image') {
    return (
      <motion.div
        className={`relative ${sizeClasses[size]} ${className}`}
        whileHover={animated ? { scale: 1.1 } : undefined}
        animate={animated ? { rotate: [0, 0], transition: { duration: 0 } } : undefined}
      >
        <img
          src="/images/flower.png"
          alt="Flower logo"
          className="w-full h-full object-contain"
          style={{
            filter: 'brightness(1.1) contrast(1.2) saturate(1.3)',
            mixBlendMode: 'multiply'
          }}
        />
      </motion.div>
    )
  }

  return (
    <motion.div
      className={`relative ${sizeClasses[size]} ${className}`}
      whileHover={animated ? "hover" : undefined}
      animate={animated ? "animate" : undefined}
      variants={petalVariants}
    >
      {/* Geometric flower design */}
      <div className="w-full h-full relative">
        {/* Petals */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute inset-0"
            style={{
              transform: `rotate(${i * 60}deg)`,
              transformOrigin: 'center'
            }}
            variants={petalVariants}
          >
            <div
              className="w-1/2 h-1/2 rounded-full"
              style={{
                background: `linear-gradient(135deg, var(--color-accent-400, #42a5f5) 0%, var(--color-accent-600, #2196f3) 100%)`,
                transformOrigin: 'bottom right',
                transform: 'translateX(-50%) translateY(-50%)'
              }}
            />
          </motion.div>
        ))}

        {/* Center */}
        <motion.div
          className="absolute inset-1/3 rounded-full"
          style={{
            background: `linear-gradient(135deg, var(--color-accent-600, #2196f3) 0%, var(--color-accent-800, #1565c0) 100%)`
          }}
          variants={centerVariants}
          animate={animated ? "pulse" : undefined}
        />
      </div>
    </motion.div>
  )
}
