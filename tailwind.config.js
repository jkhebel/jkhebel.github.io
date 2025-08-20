/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                // Dynamic colors using CSS custom properties
                primary: {
                    50: 'var(--color-primary-50, #f8f9fa)',
                    100: 'var(--color-primary-100, #f1f3f4)',
                    200: 'var(--color-primary-200, #e8eaed)',
                    300: 'var(--color-primary-300, #dadce0)',
                    400: 'var(--color-primary-400, #bdc1c6)',
                    500: 'var(--color-primary-500, #9aa0a6)',
                    600: 'var(--color-primary-600, #80868b)',
                    700: 'var(--color-primary-700, #5f6368)',
                    800: 'var(--color-primary-800, #3c4043)',
                    900: 'var(--color-primary-900, #202124)',
                },
                accent: {
                    50: 'var(--color-accent-50, #e3f2fd)',
                    100: 'var(--color-accent-100, #bbdefb)',
                    200: 'var(--color-accent-200, #90caf9)',
                    300: 'var(--color-accent-300, #64b5f6)',
                    400: 'var(--color-accent-400, #42a5f5)',
                    500: 'var(--color-accent-500, #2196f3)',
                    600: 'var(--color-accent-600, #1e88e5)',
                    700: 'var(--color-accent-700, #1976d2)',
                    800: 'var(--color-accent-800, #1565c0)',
                    900: 'var(--color-accent-900, #0d47a1)',
                },
            },
            fontFamily: {
                sans: ['var(--font-sans)', 'Inter', 'system-ui', 'sans-serif'],
                serif: ['var(--font-serif)', 'Lora', 'Georgia', 'serif'],
                mono: ['var(--font-mono)', 'JetBrains Mono', 'monospace'],
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-in-out',
                'slide-up': 'slideUp 0.5s ease-out',
                'slide-down': 'slideDown 0.5s ease-out',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                slideDown: {
                    '0%': { transform: 'translateY(-20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
            },
        },
    },
    plugins: [],
}
