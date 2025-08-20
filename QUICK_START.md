# 🚀 Quick Start Guide

Get your new portfolio up and running in minutes!

## Prerequisites

- Node.js 18+ installed
- Git installed

## Step 1: Install Dependencies

```bash
npm install
```

## Step 2: Start Development Server

```bash
npm run dev
```

## Step 3: Open Your Browser

Navigate to [http://localhost:3000](http://localhost:3000) (or [http://localhost:3001](http://localhost:3001) if port 3000 is in use)

## 🎉 You're Done

Your portfolio is now running locally. Here's what you can do next:

### 📝 Update Your Information

Edit `src/data/profile.ts` to update:

- Your name, title, and contact info
- Work experience
- Projects
- Skills
- Education

### 🎨 Customize the Design

- **Colors**: Edit `tailwind.config.js` to change the color scheme
- **Content**: Update text in `src/data/profile.ts`
- **Layout**: Modify components in `src/components/`

### 🚀 Deploy to Production

**Option 1: Vercel (Recommended)**

1. Push to GitHub
2. Connect to Vercel
3. Deploy automatically

**Option 2: GitHub Pages**

```bash
npm run build
# Follow GitHub Pages deployment instructions in README.md
```

## 📚 Need Help?

- Check the full [README.md](README.md) for detailed instructions
- Review the component structure in `src/components/`
- Customize the data structure in `src/data/profile.ts`

## 🔧 Available Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript checking

---

Happy coding! 🎨✨
