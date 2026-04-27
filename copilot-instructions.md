# Copilot Instructions: MyPersonalPortfolio

This is a **high-impact, modern portfolio website** built with **React**, **Vite**, **Tailwind CSS**, and **Framer Motion**. The project emphasizes cutting-edge design with smooth animations, glassmorphism effects, and a technology-forward aesthetic.

## Tech Stack

- **Framework**: React 18+ with Vite as build tool
- **Styling**: Tailwind CSS with custom configuration for glassmorphism
- **Animations**: Framer Motion for smooth, performant animations
- **Deployment**: Ready for Vercel, Netlify, or static hosting

## Project Architecture

### Directory Structure
```
MyPersonalPortfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          (navigation with glassmorphism)
│   │   ├── Hero.jsx            (hero section with animations)
│   │   ├── Projects.jsx        (project showcase with stagger animations)
│   │   ├── Skills.jsx          (skills section with reveal effects)
│   │   ├── Contact.jsx         (contact section with form)
│   │   └── Footer.jsx          (footer component)
│   ├── pages/
│   │   └── Home.jsx            (main landing page)
│   ├── hooks/
│   │   ├── useScrollAnimation.js  (scroll-triggered animations)
│   │   └── useInView.js          (intersection observer hook)
│   ├── styles/
│   │   └── globals.css         (global styles + glassmorphism utilities)
│   ├── utils/
│   │   ├── animations.js       (reusable Framer Motion variants)
│   │   └── constants.js        (colors, breakpoints, animation config)
│   ├── App.jsx                 (main app component)
│   └── main.jsx                (entry point)
├── public/                      (static assets, favicon, images)
├── index.html                   (HTML template)
├── package.json
├── vite.config.js              (Vite configuration)
├── tailwind.config.js          (Tailwind CSS configuration)
├── postcss.config.js           (PostCSS setup)
└── README.md
```

### Key Design Principles
- **Modern & Tech-Forward**: Glassmorphism, gradient overlays, and soft shadows
- **High-Impact Animations**: Smooth transitions, stagger effects, scroll-triggered reveals using Framer Motion
- **Responsive Design**: Mobile-first approach with Tailwind's responsive utilities
- **Performance**: Lazy loading, optimized animations, Code Splitting
- **Accessibility**: WCAG compliant, proper ARIA labels, keyboard navigation

## Development Conventions

### React Components
- Use functional components with hooks (no class components)
- One component per file, named in PascalCase (e.g., `ProjectCard.jsx`)
- Keep components focused and reusable
- Use `React.memo()` for components that don't need frequent re-renders
- Example structure:
  ```jsx
  import { motion } from 'framer-motion';
  
  const Hero = () => {
    return (
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="min-h-screen flex items-center justify-center"
      >
        <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          Welcome
        </h1>
      </motion.section>
    );
  };
  ```

### Tailwind CSS + Glassmorphism
- Use Tailwind utility classes for all styling (no CSS files in components)
- Apply glassmorphism using custom utilities in `globals.css`:
  ```css
  @layer components {
    .glass {
      @apply bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl;
    }
    .glass-hover {
      @apply glass hover:bg-white/20 transition-all duration-300;
    }
  }
  ```
- Define brand colors in `tailwind.config.js` and reuse throughout
- Example glassmorphism implementation:
  ```jsx
  <div className="glass p-8 rounded-3xl">
    <p className="text-white text-lg">Glass effect content</p>
  </div>
  ```

### Framer Motion Animations
- Create reusable animation variants in `utils/animations.js`:
  ```javascript
  export const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
  
  export const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };
  ```
- Use `motion.div`, `motion.section`, etc. for animated elements
- Apply variants consistently across components:
  ```jsx
  <motion.div
    initial="hidden"
    animate="visible"
    variants={fadeInUp}
  >
    Content
  </motion.div>
  ```
- Leverage scroll animations with `whileInView`:
  ```jsx
  <motion.div
    whileInView={{ opacity: 1, scale: 1 }}
    initial={{ opacity: 0, scale: 0.9 }}
    transition={{ duration: 0.5 }}
  >
    Animated on scroll
  </motion.div>
  ```

### Custom Hooks
- Create reusable hooks in `hooks/` for common patterns:
  - `useScrollAnimation()`: Detect scroll position and trigger effects
  - `useInView()`: Wrapper around Intersection Observer for scroll-triggered animations
- Example:
  ```javascript
  export const useInView = () => {
    const ref = useRef(null);
    const isInView = useMotionTemplate();
    return { ref, isInView };
  };
  ```

### Project Configuration Files
- **vite.config.js**: Configure SWC/Babel, define environment variables, set build options
- **tailwind.config.js**: Extend theme with custom colors, define glassmorphism utilities, set breakpoints
- **postcss.config.js**: Enable Tailwind CSS processing

### Performance Optimization
- Use code splitting with React.lazy() and Suspense for non-critical routes
- Optimize images with `next/image` equivalent or native lazy loading
- Enable compression and minification in Vite build
- Use `React.memo()` for expensive components
- Debounce scroll and resize event listeners with custom hooks

## Building and Running

### Local Development
```bash
# Install dependencies
npm install

# Start development server with hot module replacement
npm run dev

# Open http://localhost:5173 in your browser
```

### Production Build
```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

### Project Scripts (package.json)
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "lint": "eslint src --ext .jsx",
    "format": "prettier --write src"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "framer-motion": "^10.16.0"
  },
  "devDependencies": {
    "vite": "^5.0.0",
    "@vitejs/plugin-react": "^4.2.0",
    "tailwindcss": "^3.4.0",
    "postcss": "^8.4.0",
    "autoprefixer": "^10.4.0"
  }
}
```

## File Naming Conventions

- **Components**: PascalCase (e.g., `ProjectCard.jsx`, `SkillBadge.jsx`)
- **Hooks**: camelCase with `use` prefix (e.g., `useScrollAnimation.js`)
- **Utilities**: camelCase (e.g., `animations.js`, `constants.js`)
- **Styles**: Global styles in `globals.css`, component styles via Tailwind
- **CSS Classes**: Use kebab-case (Tailwind handles this automatically)
- **Animation Variants**: camelCase describing the animation (e.g., `fadeInUp`, `slideInLeft`)

## Common Tasks

- **Add a new section**: Create component in `src/components/`, add to `App.jsx`, style with Tailwind + glassmorphism
- **Create reusable animations**: Define variants in `utils/animations.js`, import and use across components
- **Customize glassmorphism**: Edit custom utilities in `globals.css` and extend in `tailwind.config.js`
- **Add scroll-triggered animations**: Wrap components in `motion.div` with `whileInView` and custom hooks
- **Responsive adjustments**: Use Tailwind's responsive prefixes (sm:, md:, lg:, xl:)
- **Add images**: Place in `public/` directory and reference via `/image-name.ext`

## Design Guidelines

- **Color Palette**: Use a limited set of brand colors with gradients (define in `tailwind.config.js`)
- **Glassmorphism**: White/transparent backgrounds with `backdrop-blur-xl`, subtle borders, soft shadows
- **Typography**: Bold, modern fonts (Google Fonts recommended); hierarchy through size and weight
- **Spacing**: Use Tailwind's spacing scale (4px base unit) for consistency
- **Animations**: Keep durations between 0.4-0.8s for smooth feel; use easing functions for natural motion
- **Gradients**: Combine complementary colors for modern aesthetic (blue→purple, teal→cyan, etc.)

## Deployment

- **Vercel**: Push to GitHub, connect to Vercel for automatic deployments
- **Netlify**: Drag-and-drop `dist/` folder or connect Git repository
- **GitHub Pages**: Configure `vite.config.js` with `base` option and deploy
- **Static Hosting**: Build with `npm run build`, deploy `dist/` folder to any static host

## Notes

- This is a single-page application (SPA) using React Router for multi-page support (optional)
- All animations should enhance UX without being distracting
- Test on mobile devices—glassmorphism effects may need adjustment for smaller screens
- Monitor Core Web Vitals and use Lighthouse for performance auditing
- Keep component files small and focused (aim for <300 lines per component)


## 🧠 AI Behavior & Engineering Standards (Rules)

1. Piensa antes de codificar

No asumas. No ocultes confusiones. Expón los trade-offs.
Antes de implementar:
Estado explícitamente tus suposiciones. Si no estás seguro, pregunta.
Si hay múltiples interpretaciones, preséntalas; no elijas en silencio.
Si existe un enfoque más simple, dilo. Resiste cuando sea justificado.
Si algo no está claro, detente. Nombra lo confuso. Pregunta.

2. Simplicidad primero

Código mínimo que resuelva el problema. Nada especulativo.
No agregues características más allá de lo pedido.
No hagas abstracciones para código de un solo uso.
No añadas "flexibilidad" o "configurabilidad" no solicitada.
No manejes errores para escenarios imposibles.
Si escribes 200 líneas y podrían ser 50, reescríbelo.
Pregúntate: "¿Diría un ingeniero senior que esto está sobrecomplicado?" Si sí, simplifícalo.

3. Cambios quirúrgicos

Toca solo lo necesario. Limpia solo tu propio desastre.
Al editar código existente:
No "mejores" código adyacente, comentarios o formato.
No refactorices cosas que no están rotas.
Ajusta al estilo existente, aunque lo harías diferente.
Si notas código muerto no relacionado, menciónalo; no lo elimines.
Cuando tus cambios creen huérfanos:
Elimina imports/variables/funciones que TUS cambios hicieron innecesarios.
No elimines código muerto preexistente a menos que te lo pidan.
La prueba: Cada línea cambiada debe rastrearse directamente a la solicitud del usuario.

4. Ejecución orientada a objetivos

Define criterios de éxito. Itera hasta verificarlos.
Transforma tareas en objetivos verificables:
"Agregar validación" → "Escribe pruebas para entradas inválidas, luego haz que pasen"
"Arreglar el bug" → "Escribe una prueba que lo reproduzca, luego haz que pase"
"Refactorizar X" → "Asegura que las pruebas pasen antes y después"
Para tareas de múltiples pasos, establece un plan breve:

[Paso] → verificar: [chequeo]

[Paso] → verificar: [chequeo]

[Paso] → verificar: [chequeo]
