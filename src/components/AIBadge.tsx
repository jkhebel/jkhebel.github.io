'use client'

import { ReactNode } from 'react'

interface AIBadgeProps {
  children: ReactNode
  variant?: 'default' | 'subtle' | 'highlight'
  className?: string
}

export function AIBadge({ children, variant = 'default', className = '' }: AIBadgeProps) {
  const baseClasses = "inline-flex items-center space-x-1 text-xs"

  const variantClasses = {
    default: "text-gray-500 bg-gray-100 px-2 py-1 rounded-full",
    subtle: "text-gray-400",
    highlight: "text-accent-600 bg-accent-50 px-2 py-1 rounded-full border border-accent-200"
  }

  return (
    <span className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      <span className="text-sm">🤖</span>
      <span>{children}</span>
    </span>
  )
}
