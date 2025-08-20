#!/bin/bash

echo "🚀 Setting up Jai Hebel's Portfolio..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version 18+ is required. Current version: $(node -v)"
    exit 1
fi

echo "✅ Node.js version: $(node -v)"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully!"
else
    echo "❌ Failed to install dependencies"
    exit 1
fi

# Create public directory if it doesn't exist
if [ ! -d "public" ]; then
    echo "📁 Creating public directory..."
    mkdir -p public/images
fi

# Create .env.local if it doesn't exist
if [ ! -f ".env.local" ]; then
    echo "🔧 Creating .env.local file..."
    cat > .env.local << EOF
# Environment variables for the portfolio
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME="Jai Hebel Portfolio"
EOF
fi

echo ""
echo "🎉 Setup complete! Here's what you can do next:"
echo ""
echo "1. 📝 Update your information in src/data/profile.ts"
echo "2. 🎨 Customize colors in tailwind.config.js"
echo "3. 🚀 Start the development server: npm run dev"
echo "4. 🌐 Open http://localhost:3000 in your browser"
echo ""
echo "📚 Check the README.md for detailed customization instructions"
echo ""
