# 📦 Instrucciones para Instalar Dependencias

Como no puedo ejecutar comandos directamente en tu terminal, debes ejecutar `npm install` manualmente. Te lo he facilitado con dos scripts automatizados.

## ✅ Opción 1: Usar Script Automatizado (Recomendado)

### Windows
```
1. Abre PowerShell o CMD
2. Navega a la carpeta del proyecto:
   cd C:\ProyectosWeb\MyPersonalPortfolio

3. Ejecuta el script:
   .\setup.bat

4. ¡Listo! Se instalarán todas las dependencias automáticamente.
```

### macOS/Linux
```
1. Abre Terminal
2. Navega a la carpeta del proyecto:
   cd path/to/MyPersonalPortfolio

3. Dale permisos y ejecuta:
   chmod +x setup.sh && ./setup.sh

4. ¡Listo! Se instalarán todas las dependencias automáticamente.
```

---

## ✅ Opción 2: Manual (npm install directo)

### Windows
```powershell
cd C:\ProyectosWeb\MyPersonalPortfolio
npm install
```

### macOS/Linux
```bash
cd path/to/MyPersonalPortfolio
npm install
```

---

## 🔄 ¿Qué Hace npm install?

Al ejecutar `npm install`, el sistema:

1. **Descarga dependencias** de npm registry
2. **Crea carpeta `node_modules/`** con todos los paquetes
3. **Genera `package-lock.json`** para reproducibilidad
4. **Resuelve todas las dependencias** anidadas

**Dependencias que se instalarán:**

**Producción:**
- react@18.2.0
- react-dom@18.2.0
- framer-motion@10.16.0

**Desarrollo:**
- vite@5.0.0
- @vitejs/plugin-react@4.2.0
- tailwindcss@3.4.0
- postcss@8.4.0
- autoprefixer@10.4.0
- eslint@8.55.0 (+ plugins)
- prettier@3.1.0

---

## ⏱️ Tiempo Estimado

- Primera instalación: **2-5 minutos** (depende de conexión)
- Instalaciones posteriores: **< 1 minuto** (caché)

---

## ✅ Cómo Verificar que Funcionó

Después de `npm install`, ejecuta:

```bash
npm run dev
```

Deberías ver:
```
  VITE v5.0.0  ready in 123 ms

  ➜  Local:   http://localhost:5173/
  ➜  press h to show help
```

¡El navegador se abrirá automáticamente!

---

## 🆘 Si Algo Falla

### "npm: command not found"
Node.js no está instalado.
- Descarga desde: https://nodejs.org/

### "EACCES: permission denied"
Necesitas permisos de carpeta.
- Intenta con: `sudo npm install`

### "Disk quota exceeded"
Falta espacio en disco.
- Libera espacio (npm install necesita ~500MB)

### "network ERR!"
Problema de conexión a internet.
- Intenta nuevamente
- Verifica conexión a internet
- Intenta: `npm install --legacy-peer-deps`

---

## 📋 Checklist Después de npm install

- [ ] Se creó carpeta `node_modules/`
- [ ] Se creó `package-lock.json`
- [ ] No hay errores en la salida
- [ ] `npm run dev` funciona sin errores
- [ ] http://localhost:5173 abre en navegador

---

## 🚀 Siguientes Pasos

Una vez que `npm install` se complete exitosamente:

```bash
npm run dev
```

Esto inicia el servidor de desarrollo y puedes:
- Ver tu portafolio en http://localhost:5173
- Hacer cambios y ver HMR (Hot Module Replacement) en vivo
- Editar `src/App.jsx` para customizar

---

**¡Estás muy cerca! Solo necesitas ejecutar npm install y npm run dev** 🎉
