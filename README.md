# My Personal Portfolio

A high-impact, modern portfolio website built with React, Vite, Tailwind CSS, and Framer Motion. Features smooth animations, glassmorphism effects, and a technology-forward aesthetic.

## 🚀 Tech Stack

- **React 18** - UI library
- **Vite 5** - Build tool and dev server
- **Tailwind CSS 3** - Utility-first CSS framework
- **Framer Motion 10** - Animation library
- **ESLint** - Code quality
- **Prettier** - Code formatting

## 📁 Project Structure

```
src/
├── components/        # Reusable React components
├── pages/            # Page-level components
├── hooks/            # Custom React hooks
├── styles/           # Global styles and CSS
├── utils/            # Utility functions and constants
├── App.jsx           # Root component
└── main.jsx          # Entry point

public/               # Static assets
```

## ⚙️ Installation

### Prerequisites
- Node.js 16+ and npm

### Setup

1. **Install dependencies**
```bash
npm install
```

2. **Start development server**
```bash
npm run dev
```

The site will open at `http://localhost:5173`

## 🏗️ Available Scripts

- `npm run dev` - Start development server with HMR
- `npm run build` - Create optimized production build
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality
- `npm run format` - Format code with Prettier

## 🎨 Design System

### Colors
- **Primary**: Sky-500 (`#0ea5e9`)
- **Secondary**: Violet-600 (`#9333ea`)
- **Accent**: Emerald-500 (`#10b981`)
- **Background**: Slate-900 (`#0f172a`)

### Glassmorphism
The project includes ready-to-use glassmorphism utilities:
```jsx
<div className="glass p-8 rounded-2xl">
  Glassmorphism content
</div>
```

### Animation Variants
Pre-built Framer Motion variants in `src/utils/animations.js`:
- `fadeInUp` - Fade in with upward movement
- `slideInLeft` - Slide in from left
- `scaleIn` - Scale animation
- `staggerContainer` - Stagger children animations
- And more...

## 🎬 Adding Animations

Example with Framer Motion:
```jsx
import { motion } from 'framer-motion';
import { fadeInUp } from './utils/animations';

export function MyComponent() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={fadeInUp}
    >
      Animated content
    </motion.div>
  );
}
```

## 📱 Responsive Design

All components are mobile-first and responsive using Tailwind's breakpoints:
- `sm:` - 640px
- `md:` - 768px
- `lg:` - 1024px
- `xl:` - 1280px

## 🚢 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import repository in Vercel
3. Vercel auto-detects Vite and deploys

### Netlify
1. Build: `npm run build`
2. Publish: `dist` folder
3. Or connect GitHub for auto-deployment

### GitHub Pages
1. Update `vite.config.js` with `base: '/repository-name/'`
2. Run `npm run build`
3. Deploy `dist/` to GitHub Pages

## 📝 Customization

### Update your information
- Edit `index.html` for metadata
- Update `src/App.jsx` with your content
- Modify `src/utils/constants.js` for site-wide config

### Customize colors
Edit `tailwind.config.js` to extend the theme:
```javascript
theme: {
  extend: {
    colors: {
      primary: '#your-color',
    }
  }
}
```

### Add new sections
1. Create component in `src/components/`
2. Import in `src/App.jsx`
3. Use animation variants from `utils/animations.js`

## 🔧 Development Tips

- Use `React.memo()` for expensive components
- Leverage `whileInView` for scroll-triggered animations
- Keep animation durations between 0.4-0.8s for natural feel
- Test on mobile devices for glassmorphism effects
- Monitor Core Web Vitals with Lighthouse

## 📄 License

MIT License - feel free to use this template for your own portfolio

## 🤝 Contributing

Feel free to fork and customize this template for your needs!

---

**Created with ❤️ using modern web technologies**
