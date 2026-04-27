@echo off
REM Project setup script for React + Vite + Tailwind + Framer Motion (Windows)

echo.
echo ========================================
echo 🚀 Setting up MyPersonalPortfolio...
echo ========================================
echo.

REM Create directory structure
echo 📁 Creating folder structure...
if not exist "src\components" mkdir "src\components"
if not exist "src\pages" mkdir "src\pages"
if not exist "src\hooks" mkdir "src\hooks"
if not exist "src\utils" mkdir "src\utils"
if not exist "src\styles" mkdir "src\styles"
if not exist "public" mkdir "public"

REM Create .gitkeep files to ensure folders exist
type nul > "src\components\.gitkeep"
type nul > "src\pages\.gitkeep"

echo ✅ Folder structure created
echo.

REM Install dependencies
echo 📦 Installing dependencies...
echo This may take a few minutes...
echo.
call npm install

if errorlevel 1 (
    echo.
    echo ❌ npm install failed. Please check your Node.js installation.
    echo Visit: https://nodejs.org/
    pause
    exit /b 1
)

echo.
echo ========================================
echo 🎉 Setup Complete!
echo ========================================
echo.
echo Next steps:
echo   1. npm run dev     - Start development server
echo   2. Visit http://localhost:5173
echo.
echo Available commands:
echo   npm run dev        - Start dev server with HMR
echo   npm run build      - Create production build
echo   npm run preview    - Preview production build
echo   npm run lint       - Run ESLint
echo   npm run format     - Format code with Prettier
echo.
echo Happy coding! 🚀
echo.
pause
