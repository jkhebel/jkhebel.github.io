'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

export interface Theme {
  id: string
  name: string
  colors: {
    primary: string[]
    accent: string[]
    background: string
    text: string
  }
  fonts: {
    sans: string[]
    serif: string[]
    mono: string[]
  }
}

export const themes: Theme[] = [
  {
    id: 'default',
    name: 'Modern Blue',
    colors: {
      primary: ['#f8f9fa', '#f1f3f4', '#e8eaed', '#dadce0', '#bdc1c6', '#9aa0a6', '#80868b', '#5f6368', '#3c4043', '#202124'],
      accent: ['#e3f2fd', '#bbdefb', '#90caf9', '#64b5f6', '#42a5f5', '#2196f3', '#1e88e5', '#1976d2', '#1565c0', '#0d47a1'],
      background: '#ffffff',
      text: '#202124'
    },
    fonts: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
      serif: ['Lora', 'Georgia', 'serif'],
      mono: ['JetBrains Mono', 'monospace']
    }
  },
  {
    id: 'midnight',
    name: 'Midnight Purple',
    colors: {
      primary: ['#0a0a0a', '#1a1a2e', '#16213e', '#0f3460', '#533483', '#7209b7', '#9d4edd', '#c77dff', '#e0aaff', '#f8f9fa'],
      accent: ['#ff006e', '#ff4d6d', '#ff8fa3', '#ffb3c1', '#ffc2d1', '#ffd6e0', '#ffe6eb', '#fff0f3', '#fff5f7', '#fff9fa'],
      background: '#0a0a0a',
      text: '#ffffff'
    },
    fonts: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
      serif: ['Lora', 'Georgia', 'serif'],
      mono: ['JetBrains Mono', 'monospace']
    }
  },
  {
    id: 'sunset',
    name: 'Desert Sunset',
    colors: {
      primary: ['#fff8e1', '#ffecb3', '#ffe082', '#ffd54f', '#ffca28', '#ffc107', '#ffb300', '#ffa000', '#ff8f00', '#ff6f00'],
      accent: ['#d84315', '#e64a19', '#f4511e', '#ff5722', '#ff7043', '#ff8a65', '#ffab91', '#ffccbc', '#ffecdb', '#fff3e0'],
      background: '#fff8e1',
      text: '#3e2723'
    },
    fonts: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
      serif: ['Lora', 'Georgia', 'serif'],
      mono: ['JetBrains Mono', 'monospace']
    }
  },
  {
    id: 'forest',
    name: 'Mystic Forest',
    colors: {
      primary: ['#e8f5e8', '#c8e6c9', '#a5d6a7', '#81c784', '#66bb6a', '#4caf50', '#43a047', '#388e3c', '#2e7d32', '#1b5e20'],
      accent: ['#6a4c93', '#7b68ee', '#9370db', '#ba68c8', '#ce93d8', '#e1bee7', '#f3e5f5', '#f8f4ff', '#faf5ff', '#fdf4ff'],
      background: '#e8f5e8',
      text: '#1b5e20'
    },
    fonts: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
      serif: ['Lora', 'Georgia', 'serif'],
      mono: ['JetBrains Mono', 'monospace']
    }
  },
  {
    id: 'neon',
    name: 'Neon Dreams',
    colors: {
      primary: ['#000000', '#0a0a0a', '#1a1a1a', '#2a2a2a', '#3a3a3a', '#4a4a4a', '#5a5a5a', '#6a6a6a', '#7a7a7a', '#8a8a8a'],
      accent: ['#ff00ff', '#ff33ff', '#ff66ff', '#ff99ff', '#ffccff', '#ffff00', '#ffff33', '#ffff66', '#ffff99', '#ffffcc'],
      background: '#000000',
      text: '#ffffff'
    },
    fonts: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
      serif: ['Lora', 'Georgia', 'serif'],
      mono: ['JetBrains Mono', 'monospace']
    }
  },
  {
    id: 'ocean',
    name: 'Deep Ocean',
    colors: {
      primary: ['#e3f2fd', '#bbdefb', '#90caf9', '#64b5f6', '#42a5f5', '#2196f3', '#1e88e5', '#1976d2', '#1565c0', '#0d47a1'],
      accent: ['#00bcd4', '#26c6da', '#4dd0e1', '#80deea', '#b2ebf2', '#e0f7fa', '#f0f9ff', '#f5fbff', '#fafcff', '#ffffff'],
      background: '#e3f2fd',
      text: '#0d47a1'
    },
    fonts: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
      serif: ['Lora', 'Georgia', 'serif'],
      mono: ['JetBrains Mono', 'monospace']
    }
  },
  {
    id: 'fire',
    name: 'Burning Fire',
    colors: {
      primary: ['#fff3e0', '#ffe0b2', '#ffcc80', '#ffb74d', '#ffa726', '#ff9800', '#fb8c00', '#f57c00', '#ef6c00', '#e65100'],
      accent: ['#d32f2f', '#f44336', '#ff5722', '#ff7043', '#ff8a65', '#ffab91', '#ffccbc', '#ffecdb', '#fff3e0', '#fff8e1'],
      background: '#fff3e0',
      text: '#bf360c'
    },
    fonts: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
      serif: ['Lora', 'Georgia', 'serif'],
      mono: ['JetBrains Mono', 'monospace']
    }
  },
  {
    id: 'lavender',
    name: 'Lavender Fields',
    colors: {
      primary: ['#f3e5f5', '#e1bee7', '#ce93d8', '#ba68c8', '#ab47bc', '#9c27b0', '#8e24aa', '#7b1fa2', '#6a1b9a', '#4a148c'],
      accent: ['#e8eaf6', '#c5cae9', '#9fa8da', '#7986cb', '#5c6bc0', '#3f51b5', '#3949ab', '#303f9f', '#283593', '#1a237e'],
      background: '#f3e5f5',
      text: '#4a148c'
    },
    fonts: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
      serif: ['Lora', 'Georgia', 'serif'],
      mono: ['JetBrains Mono', 'monospace']
    }
  }
]

interface ThemeContextType {
  currentTheme: Theme
  setTheme: (themeId: string, customTheme?: Theme) => void
  themes: Theme[]
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [currentTheme, setCurrentTheme] = useState<Theme>(themes[0])

  useEffect(() => {
    // Load theme from localStorage
    const savedTheme = localStorage.getItem('portfolio-theme')
    if (savedTheme) {
      if (savedTheme === 'custom') {
        const customThemeData = localStorage.getItem('custom-theme')
        if (customThemeData) {
          try {
            const customTheme = JSON.parse(customThemeData)
            setCurrentTheme(customTheme)
          } catch (error) {
            console.error('Error loading custom theme:', error)
            setCurrentTheme(themes[0])
          }
        }
      } else {
        const theme = themes.find(t => t.id === savedTheme)
        if (theme) {
          setCurrentTheme(theme)
        }
      }
    }
  }, [])

  useEffect(() => {
    // Apply theme to document
    const root = document.documentElement

    // Apply colors
    currentTheme.colors.primary.forEach((color, index) => {
      root.style.setProperty(`--color-primary-${index * 100}`, color)
    })

    currentTheme.colors.accent.forEach((color, index) => {
      root.style.setProperty(`--color-accent-${index * 100}`, color)
    })

    root.style.setProperty('--color-background', currentTheme.colors.background)
    root.style.setProperty('--color-text', currentTheme.colors.text)

    // Apply fonts
    root.style.setProperty('--font-sans', currentTheme.fonts.sans.join(', '))
    root.style.setProperty('--font-serif', currentTheme.fonts.serif.join(', '))
    root.style.setProperty('--font-mono', currentTheme.fonts.mono.join(', '))

    // Save to localStorage
    localStorage.setItem('portfolio-theme', currentTheme.id)
  }, [currentTheme])

  const setTheme = (themeId: string, customTheme?: Theme) => {
    let theme: Theme | undefined

    if (themeId === 'custom' && customTheme) {
      theme = customTheme
    } else {
      theme = themes.find(t => t.id === themeId)
    }

    if (theme) {
      setCurrentTheme(theme)
      if (themeId === 'custom') {
        localStorage.setItem('custom-theme', JSON.stringify(theme))
      }
    }
  }

  return (
    <ThemeContext.Provider value={{ currentTheme, setTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
