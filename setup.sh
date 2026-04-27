#!/bin/bash
# Project setup script for React + Vite + Tailwind + Framer Motion

echo "🚀 Setting up MyPersonalPortfolio..."

# Create directory structure
echo "📁 Creating folder structure..."
mkdir -p src/components
mkdir -p src/pages
mkdir -p src/hooks
mkdir -p src/utils
mkdir -p src/styles
mkdir -p public

# Create .gitkeep files to ensure folders exist
touch src/components/.gitkeep
touch src/pages/.gitkeep

echo "✅ Folder structure created"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

echo "✅ Dependencies installed"

echo ""
echo "════════════════════════════════════════"
echo "🎉 Setup Complete!"
echo "════════════════════════════════════════"
echo ""
echo "Next steps:"
echo "  1. npm run dev     - Start development server"
echo "  2. Visit http://localhost:5173"
echo ""
echo "Available commands:"
echo "  npm run dev        - Start dev server with HMR"
echo "  npm run build      - Create production build"
echo "  npm run preview    - Preview production build"
echo "  npm run lint       - Run ESLint"
echo "  npm run format     - Format code with Prettier"
echo ""
echo "Happy coding! 🚀"
