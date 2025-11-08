# 🚀 Guía de Inicio Rápido

## Instalación en 3 Pasos

### 1️⃣ Instalar Dependencias
```bash
npm install
```

### 2️⃣ Ejecutar en Desarrollo
```bash
npm run dev
```

### 3️⃣ Abrir en el Navegador
Navega a: **http://localhost:3000**

---

## 📋 Estructura del Sitio

### Página Principal (http://localhost:3000)
✅ **Hero** - Sección principal con CTAs  
✅ **Social Proof** - Logos y estadísticas  
✅ **Plantillas** - Galería de 10 plantillas  
✅ **Beneficios** - 6 propuestas de valor  
✅ **Testimonios** - Carrusel de casos de éxito  
✅ **Comparación** - Tabla comparativa  
✅ **FAQ** - 10 preguntas frecuentes  
✅ **Contacto** - Formulario funcional  
✅ **Exit Popup** - Descuento 10% al salir  

### Páginas de Plantillas
- `/plantillas/alta-cocina-gourmet`
- `/plantillas/italiano-tradicional`
- `/plantillas/japones-sushi`
- `/plantillas/mexicano-autentico`
- `/plantillas/fast-food-moderno`
- `/plantillas/pizzeria-italiana`
- `/plantillas/vegetariano-organico`
- `/plantillas/fusion-contemporaneo`
- `/plantillas/familiar-buffet`
- `/plantillas/cafeteria-brunch`

---

## 🎯 Primeros Pasos de Personalización

### Cambiar Nombre de la Empresa
Buscar y reemplazar **"Web Dynamics"** en todos los archivos.

### Cambiar Datos de Contacto
Editar en `components/Footer.tsx` y `components/ContactForm.tsx`:
- Email: `hola@webdynamics.es`
- Teléfono: `+34 900 123 456`
- Ciudad: `Barcelona, España`

### Modificar Colores
Editar `tailwind.config.ts` - sección `colors`

### Añadir/Editar Plantillas
Editar `data/templates.ts`

---

## 🛠️ Comandos Disponibles

```bash
# Desarrollo (con hot reload)
npm run dev

# Build de producción
npm run build

# Ejecutar producción localmente
npm run start

# Linting
npm run lint
```

---

## 📱 Testing Responsive

### Dispositivos de prueba:
- **Móvil:** 375px (iPhone)
- **Tablet:** 768px (iPad)
- **Desktop:** 1024px, 1440px

### En Chrome DevTools:
1. F12 para abrir DevTools
2. Ctrl + Shift + M (modo responsive)
3. Probar diferentes tamaños

---

## ✅ Checklist Pre-Deploy

- [ ] Cambiar nombre de empresa
- [ ] Actualizar datos de contacto
- [ ] Personalizar colores de marca
- [ ] Reemplazar logo (cuando tengas uno)
- [ ] Configurar formulario de contacto
- [ ] Añadir Google Analytics
- [ ] Probar en móvil, tablet y desktop
- [ ] Verificar todos los enlaces
- [ ] Optimizar imágenes
- [ ] Crear cuenta en Vercel
- [ ] Configurar dominio personalizado

---

## 🆘 Ayuda Rápida

### El servidor no inicia
```bash
# Reinstalar dependencias
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Puerto 3000 ocupado
```bash
# Windows: Cerrar proceso en puerto 3000
netstat -ano | findstr :3000
taskkill /PID [numero] /F

# Luego
npm run dev
```

### Error de TypeScript
```bash
# Verificar tipos
npx tsc --noEmit
```

---

## 📚 Documentación Completa

- **README.md** - Documentación técnica completa
- **GUIA_PERSONALIZACION.md** - Guía detallada de personalización
- **Este archivo** - Inicio rápido

---

## 🎉 ¡Listo!

Tu sitio web está funcionando en **http://localhost:3000**

Para personalización detallada, consulta **GUIA_PERSONALIZACION.md**
