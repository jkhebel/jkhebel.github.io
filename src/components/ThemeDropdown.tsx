'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Palette, Sparkles, ChevronDown, Save, RotateCcw } from 'lucide-react'
import { useTheme } from '@/contexts/ThemeContext'
import { AIBadge } from './AIBadge'

interface ColorPalette {
  primary: string[]
  accent: string[]
  background: string
  text: string
}

export function ThemeDropdown() {
  const { currentTheme, setTheme, themes } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const [showGenerator, setShowGenerator] = useState(false)
  const [customTheme, setCustomTheme] = useState<ColorPalette>({
    primary: ['#f8f9fa', '#f1f3f4', '#e8eaed', '#dadce0', '#bdc1c6', '#9aa0a6', '#80868b', '#5f6368', '#3c4043', '#202124'],
    accent: ['#e3f2fd', '#bbdefb', '#90caf9', '#64b5f6', '#42a5f5', '#2196f3', '#1e88e5', '#1976d2', '#1565c0', '#0d47a1'],
    background: '#ffffff',
    text: '#202124'
  })

  const generateRandomTheme = () => {
    const hue1 = Math.floor(Math.random() * 360)
    const hue2 = (hue1 + 180) % 360 // Complementary color

    const primary = Array.from({ length: 10 }, (_, i) => {
      const lightness = 90 - (i * 8)
      return `hsl(${hue1}, 20%, ${lightness}%)`
    })

    const accent = Array.from({ length: 10 }, (_, i) => {
      const lightness = 85 - (i * 7)
      return `hsl(${hue2}, 60%, ${lightness}%)`
    })

    const background = `hsl(${hue1}, 30%, 95%)`
    const text = `hsl(${hue1}, 20%, 20%)`

    setCustomTheme({ primary, accent, background, text })
  }

  const applyCustomTheme = () => {
    const newTheme = {
      id: 'custom',
      name: 'Custom Theme',
      colors: customTheme,
      fonts: themes[0].fonts
    }
    setTheme('custom', newTheme)
    setIsOpen(false)
    setShowGenerator(false)
  }

  const resetToDefault = () => {
    setCustomTheme(themes[0].colors)
  }

  const handleThemeSelect = (themeId: string) => {
    if (themeId === 'generate') {
      setShowGenerator(true)
      generateRandomTheme()
    } else {
      setTheme(themeId)
      setIsOpen(false)
      setShowGenerator(false)
    }
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-gradient-to-r from-accent-500 to-accent-600 text-white hover:from-accent-600 hover:to-accent-700 transition-all duration-200 relative"
        aria-label="Theme dropdown"
      >
        <Palette size={16} />
        <span className="text-sm font-medium">{currentTheme.name}</span>
        <ChevronDown size={16} className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
        <div className="absolute -top-1 -right-1">
          <AIBadge variant="subtle" className="text-xs">AI</AIBadge>
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full right-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-4 z-50"
          >
            <div className="px-4">
              {!showGenerator ? (
                <>
                  <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
                    <Palette size={20} />
                    <span>Choose Theme</span>
                  </h3>

                  {/* Theme List */}
                  <div className="space-y-2 max-h-64 overflow-y-auto">
                    {themes.map((theme) => (
                      <button
                        key={theme.id}
                        onClick={() => handleThemeSelect(theme.id)}
                        className={`w-full px-4 py-3 text-left text-sm hover:bg-gray-50 transition-colors duration-200 flex items-center space-x-3 rounded-lg ${
                          currentTheme.id === theme.id ? 'bg-accent-50 text-accent-700 border border-accent-200' : ''
                        }`}
                      >
                        <div className="flex space-x-1">
                          <div
                            className="w-4 h-4 rounded-full border border-gray-300"
                            style={{ backgroundColor: theme.colors.accent[5] || theme.colors.accent[5] }}
                          />
                          <div
                            className="w-4 h-4 rounded-full border border-gray-300"
                            style={{ backgroundColor: theme.colors.primary[5] || theme.colors.primary[5] }}
                          />
                        </div>
                        <span className="flex-1">{theme.name}</span>
                        {currentTheme.id === theme.id && (
                          <span className="text-accent-600">✓</span>
                        )}
                      </button>
                    ))}

                    {/* Generate Theme Option */}
                    <button
                      onClick={() => handleThemeSelect('generate')}
                      className="w-full px-4 py-3 text-left text-sm hover:bg-gray-50 transition-colors duration-200 flex items-center space-x-3 rounded-lg border-2 border-dashed border-accent-300 hover:border-accent-400"
                    >
                      <Sparkles size={16} className="text-accent-600" />
                      <span className="flex-1 text-accent-700 font-medium">Generate Random Theme</span>
                      <span className="text-accent-600">✨</span>
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold flex items-center space-x-2">
                      <Sparkles size={20} />
                      <span>Theme Generator</span>
                    </h3>
                    <button
                      onClick={() => setShowGenerator(false)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      ← Back
                    </button>
                  </div>

                  {/* Quick Actions */}
                  <div className="flex space-x-2 mb-4">
                    <button
                      onClick={generateRandomTheme}
                      className="flex-1 px-3 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg text-sm font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-200"
                    >
                      <Sparkles size={14} className="inline mr-1" />
                      Random
                    </button>
                    <button
                      onClick={resetToDefault}
                      className="px-3 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors duration-200"
                    >
                      <RotateCcw size={14} />
                    </button>
                  </div>

                  {/* Color Controls */}
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Background Color
                      </label>
                      <input
                        type="color"
                        value={customTheme.background}
                        onChange={(e) => setCustomTheme(prev => ({ ...prev, background: e.target.value }))}
                        className="w-full h-10 rounded-lg border border-gray-300 cursor-pointer"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Primary Color
                      </label>
                      <input
                        type="color"
                        value={customTheme.primary[5]}
                        onChange={(e) => {
                          const hue = e.target.value
                          const primary = Array.from({ length: 10 }, (_, i) => {
                            const lightness = 90 - (i * 8)
                            return `hsl(${hue}, 20%, ${lightness}%)`
                          })
                          setCustomTheme(prev => ({ ...prev, primary }))
                        }}
                        className="w-full h-10 rounded-lg border border-gray-300 cursor-pointer"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Accent Color
                      </label>
                      <input
                        type="color"
                        value={customTheme.accent[5]}
                        onChange={(e) => {
                          const hue = e.target.value
                          const accent = Array.from({ length: 10 }, (_, i) => {
                            const lightness = 85 - (i * 7)
                            return `hsl(${hue}, 60%, ${lightness}%)`
                          })
                          setCustomTheme(prev => ({ ...prev, accent }))
                        }}
                        className="w-full h-10 rounded-lg border border-gray-300 cursor-pointer"
                      />
                    </div>
                  </div>

                  {/* Preview */}
                  <div className="mt-4 p-3 rounded-lg border border-gray-200">
                    <div className="text-sm font-medium text-gray-700 mb-2">Preview</div>
                    <div
                      className="h-16 rounded-lg flex items-center justify-center text-sm font-medium"
                      style={{
                        backgroundColor: customTheme.background,
                        color: customTheme.text
                      }}
                    >
                      <div
                        className="px-3 py-1 rounded-full mr-2"
                        style={{ backgroundColor: customTheme.accent[3] }}
                      >
                        Sample
                      </div>
                      <div
                        className="px-3 py-1 rounded-full"
                        style={{ backgroundColor: customTheme.primary[3] }}
                      >
                        Theme
                      </div>
                    </div>
                  </div>

                  {/* Apply Button */}
                  <button
                    onClick={applyCustomTheme}
                    className="w-full mt-4 px-4 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg font-medium hover:from-green-600 hover:to-blue-600 transition-all duration-200 flex items-center justify-center space-x-2"
                  >
                    <Save size={16} />
                    <span>Apply Theme</span>
                  </button>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
