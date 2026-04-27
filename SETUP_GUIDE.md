# 🚀 Guía de Setup: React + Vite + Tailwind + Framer Motion

## Resumen
Tu proyecto está casi listo. Solo necesitas ejecutar el script de setup para crear las carpetas y instalar las dependencias.

## ✅ Archivos Creados

El sistema ya ha generado:
- ✅ `package.json` - Dependencias y scripts
- ✅ `vite.config.js` - Configuración de Vite
- ✅ `tailwind.config.js` - Configuración de Tailwind CSS
- ✅ `postcss.config.js` - Configuración de PostCSS
- ✅ `.eslintrc.json` - Configuración de ESLint
- ✅ `.prettierrc` - Configuración de Prettier
- ✅ `.gitignore` - Archivos a ignorar en Git
- ✅ `index.html` - Archivo HTML principal
- ✅ `README.md` - Documentación del proyecto
- ✅ `copilot-instructions.md` - Instrucciones de desarrollo

## 📁 Pasos para Completar el Setup

### **Opción 1: Windows (Recomendado)**

1. Abre **PowerShell** o **CMD** en la carpeta del proyecto
2. Ejecuta el script de setup:
```bash
.\setup.bat
```

Esto automaticamente:
- Crea todas las carpetas necesarias (`src/`, `src/components/`, `src/utils/`, etc.)
- Instala todas las dependencias (React, Vite, Tailwind, Framer Motion, etc.)
- Configura el proyecto completamente

### **Opción 2: macOS/Linux**

1. Abre Terminal en la carpeta del proyecto
2. Dale permisos de ejecución al script:
```bash
chmod +x setup.sh
```

3. Ejecuta el script:
```bash
./setup.sh
```

### **Opción 3: Manual (Si los scripts no funcionan)**

1. Abre terminal/CMD en la carpeta del proyecto
2. Crea las carpetas:
```bash
mkdir src\components src\pages src\hooks src\utils src\styles public
```

3. Instala las dependencias:
```bash
npm install
```

## 🎯 Después del Setup

Una vez completado, tendrás estas carpetas y archivos:

```
MyPersonalPortfolio/
├── src/
│   ├── main.jsx           ✅ Punto de entrada (ya creado)
│   ├── App.jsx            ✅ Componente principal (ya creado)
│   ├── App.css            ✅ Estilos (ya creado)
│   ├── components/        📁 Vacío (lista para agregar)
│   ├── pages/             📁 Vacío (lista para agregar)
│   ├── hooks/
│   │   └── useScrollAnimation.js  ✅ Hook personalizado
│   ├── utils/
│   │   ├── animations.js   ✅ Variantes de Framer Motion
│   │   └── constants.js    ✅ Constantes del proyecto
│   └── styles/
│       └── globals.css     ✅ Estilos globales + glassmorphism
├── public/                📁 Vacío (para assets)
├── package.json           ✅ Dependencias y scripts
├── vite.config.js         ✅ Config de Vite
├── tailwind.config.js     ✅ Config de Tailwind
├── postcss.config.js      ✅ Config de PostCSS
├── .eslintrc.json         ✅ Config de ESLint
├── .prettierrc             ✅ Config de Prettier
├── index.html             ✅ HTML template
├── README.md              ✅ Documentación
└── copilot-instructions.md ✅ Instrucciones de desarrollo
```

## 🚀 Ejecutar el Proyecto

Después del setup, inicia el servidor de desarrollo:

```bash
npm run dev
```

El navegador se abrirá automáticamente en `http://localhost:5173`

## 📦 Dependencias Instaladas

### Producción
- **react** (18.2.0) - Framework UI
- **react-dom** (18.2.0) - Renderizado en DOM
- **framer-motion** (10.16.0) - Librería de animaciones

### Desarrollo
- **vite** (5.0.0) - Build tool y dev server
- **@vitejs/plugin-react** (4.2.0) - Plugin de React para Vite
- **tailwindcss** (3.4.0) - Framework CSS utility
- **postcss** (8.4.0) - Procesador CSS
- **autoprefixer** (10.4.0) - Prefijos de navegadores
- **eslint** (8.55.0) - Linting de código
- **eslint-plugin-react** (7.33.2) - Reglas React para ESLint
- **eslint-plugin-react-hooks** (4.6.0) - Reglas de Hooks para ESLint
- **prettier** (3.1.0) - Formateador de código

## 🛠️ Scripts Disponibles

```bash
npm run dev          # Inicia servidor de desarrollo con HMR
npm run build        # Crea build de producción
npm run preview      # Vista previa del build
npm run lint         # Ejecuta ESLint
npm run format       # Formatea código con Prettier
```

## 🎨 Primeros Pasos de Desarrollo

1. **Edita `src/App.jsx`** para customizar el contenido
2. **Usa componentes de Framer Motion** con las variantes predefinidas
3. **Tailwind CSS** está listo para usarse directamente en className
4. **Glassmorphism** ya está configurado con la clase `.glass`

## 📝 Ejemplo de Componente

```jsx
import { motion } from 'framer-motion';
import { fadeInUp } from './utils/animations';

export function MyComponent() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={fadeInUp}
      className="glass p-6 rounded-2xl"
    >
      <h2 className="text-2xl font-bold text-white mb-4">
        Contenido con Glassmorphism
      </h2>
      <p className="text-white/70">
        Utiliza las clases de Tailwind y los estilos predefinidos
      </p>
    </motion.div>
  );
}
```

## 🔧 Troubleshooting

### "npm command not found"
Node.js no está instalado. Descárgalo de: https://nodejs.org/

### "Port 5173 already in use"
Otro proceso está usando el puerto. Ciérralo o ejecuta:
```bash
npm run dev -- --port 5174
```

### "Module not found"
Asegúrate de haber ejecutado `npm install` completamente

## 🌐 Despliegue

El proyecto está listo para desplegar en:
- **Vercel** (recomendado) - Automático desde GitHub
- **Netlify** - Sube la carpeta `dist/`
- **GitHub Pages** - Configura `vite.config.js` con `base`

## ✨ Próximos Pasos

1. Ejecuta el setup script
2. Corre `npm run dev`
3. ¡Comienza a customizar tu portafolio!

---

**¿Preguntas?** Revisa el archivo `README.md` para más detalles.
