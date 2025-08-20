'use client'

import { profile } from '@/data/profile'
import { Github, Linkedin, Mail } from 'lucide-react'
import { AIBadge } from './AIBadge'
import { FlowerLogo } from './FlowerLogo'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400">
              © {currentYear} {profile.name}. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-6">
            {profile.social.github && (
              <a
                href={profile.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
            )}
            {profile.social.linkedin && (
              <a
                href={profile.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            )}
            <a
              href={`mailto:${profile.email}`}
              className="text-gray-400 hover:text-white transition-colors duration-200"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm">
            Built with Next.js, TypeScript, and Tailwind CSS
          </p>
          <div className="mt-2 flex items-center justify-center space-x-2">
            <FlowerLogo size="sm" animated={false} variant="image" />
            <AIBadge variant="subtle">Built with AI assistance</AIBadge>
          </div>
        </div>
      </div>
    </footer>
  )
}
