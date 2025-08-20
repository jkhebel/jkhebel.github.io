# Jai Hebel - Personal Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. This portfolio showcases my work as an AI specialist and biomedical engineer with a focus on creating high-impact solutions.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 14, TypeScript, and Tailwind CSS
- **Data-Driven**: All content is managed through TypeScript data files for easy updates
- **Dynamic Theming**: 8 built-in themes + custom theme generator with color pickers
- **AI-Enhanced**: Interactive theme generation and AI-powered features
- **Responsive Design**: Optimized for all devices and screen sizes
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **Creative Elements**: Animated flower logos and floating art elements
- **SEO Optimized**: Built-in SEO with proper meta tags and structured data
- **Performance**: Fast loading times with optimized images and code splitting
- **Accessibility**: WCAG compliant with proper semantic HTML and ARIA labels

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended) or GitHub Pages

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── globals.css         # Global styles
│   │   ├── layout.tsx          # Root layout
│   │   └── page.tsx            # Home page
│   ├── components/             # React components
│   │   ├── Header.tsx          # Navigation header
│   │   ├── Hero.tsx            # Hero section
│   │   ├── About.tsx           # About section
│   │   ├── Experience.tsx      # Work experience
│   │   ├── Projects.tsx        # Featured projects
│   │   ├── Skills.tsx          # Skills showcase
│   │   ├── Contact.tsx         # Contact form
│   │   └── Footer.tsx          # Footer
│   ├── data/                   # Content data
│   │   └── profile.ts          # Profile, experience, projects data
│   └── lib/                    # Utility functions
│       └── utils.ts            # Common utilities
├── public/                     # Static assets
├── tailwind.config.js          # Tailwind configuration
├── next.config.js              # Next.js configuration
├── tsconfig.json               # TypeScript configuration
└── package.json                # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/jkhebel/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**

   ```bash
   npm run dev“
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) (or [http://localhost:3001](http://localhost:3001) if port 3000 is in use)

## 📝 Customizing Your Portfolio

### Updating Content

All content is managed through the `src/data/profile.ts` file. Simply edit this file to update your:

- **Profile Information**: Name, title, email, location, about, mission
- **Work Experience**: Add, remove, or modify job experiences
- **Projects**: Showcase your featured projects
- **Skills**: Organize your technical skills by category
- **Education**: Academic background
- **Social Links**: GitHub, LinkedIn, and other social profiles

### Example: Adding a New Experience

```typescript
// In src/data/profile.ts
export const experiences: Experience[] = [
  {
    id: "new-role",
    company: "Your Company",
    position: "Senior AI Engineer",
    location: "Toronto, Canada",
    startDate: "2024",
    current: true,
    description: "Leading AI initiatives and developing innovative solutions.",
    technologies: ["Python", "TensorFlow", "React", "AWS"],
    achievements: [
      "Developed and deployed machine learning models",
      "Led cross-functional teams",
      "Improved system performance by 40%"
    ]
  },
  // ... existing experiences
];
```

### Styling Customization

- **Colors**: Modify the color palette in `tailwind.config.js`
- **Fonts**: Update font families in `tailwind.config.js`
- **Components**: Edit individual component files in `src/components/`
- **Global Styles**: Modify `src/app/globals.css`

## 🎨 Theming

The portfolio supports easy theming through Tailwind CSS. You can:

1. **Change Colors**: Update the `accent` and `primary` color palettes in `tailwind.config.js`
2. **Add Dark Mode**: Implement dark mode by adding dark variants to components
3. **Custom Fonts**: Replace fonts in the configuration
4. **Layout Adjustments**: Modify spacing and layout in component files

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:

- Mobile devices (320px+)
- Tablets (768px+)
- Desktop (1024px+)
- Large screens (1280px+)

## 🚀 Deployment

### Option 1: GitHub Pages (Recommended for this setup)

Your portfolio is configured for static export and can be deployed to GitHub Pages!

#### **Quick Deploy:**

```bash
./deploy.sh
```

#### **Manual Deploy:**

1. **Build the project**

   ```bash
   npm run build
   ```

2. **Deploy to GitHub Pages**
   - Go to your repository settings
   - Navigate to "Pages" section
   - Set source to "GitHub Actions" (recommended) or "Deploy from a branch"
   - If using branch deployment, select "main" branch and set folder to `/ (root)`
   - Your site will be live at `https://jkhebel.github.io/portfolio`

### Option 2: Vercel

1. **Push to GitHub**

   ```bash
   git add .
   git commit -m "Initial portfolio setup"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Connect your GitHub repository to Vercel
   - Vercel will automatically detect Next.js and deploy
   - Your site will be live at `https://your-username.vercel.app`

### Option 3: Netlify

1. **Connect to Netlify**
   - Connect your GitHub repository to Netlify
   - Set build command: `npm run build`
   - Set publish directory: `.next`
   - Netlify will automatically detect Next.js and deploy

2. **Automatic Deployments**
   - Every push to main branch will trigger a new deployment
   - Your site will be live at `https://your-site-name.netlify.app`

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 📊 Performance

The portfolio is optimized for performance with:

- **Code Splitting**: Automatic code splitting with Next.js
- **Image Optimization**: Next.js Image component for optimized images
- **CSS Optimization**: Purged CSS with Tailwind
- **Lazy Loading**: Components load as needed
- **SEO**: Built-in SEO optimization

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Lucide React](https://lucide.dev/) - Icon library

## 📞 Contact

- **Email**: <jaihebel@gmail.com>
- **LinkedIn**: [Jai Hebel](https://linkedin.com/in/jaihebel)
- **GitHub**: [jkhebel](https://github.com/jkhebel)

---

Built with ❤️ by Jai Hebel
