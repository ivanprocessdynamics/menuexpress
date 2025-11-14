# Web Dynamics - Sitios Web para Restaurantes

Una landing page profesional de alta conversión para vender plantillas de sitios web especializadas en restaurantes. Construida con las mejores prácticas de desarrollo web y optimización SEO.

## 🚀 Stack Tecnológico

- **Framework:** Next.js 15 con App Router
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS
- **Animaciones:** Framer Motion
- **Iconos:** Lucide React
- **Optimización:** React Intersection Observer

## ✨ Características

### Secciones Implementadas

1. **Hero Section** - Impactante sección principal con CTAs y animaciones
2. **Social Proof** - Logos de clientes y estadísticas animadas
3. **Galería de Plantillas** - 10 plantillas especializadas con filtros por categoría
4. **Páginas Individuales** - Routing dinámico para cada plantilla con detalles completos
5. **🆕 Páginas Demo Funcionales** - Sitios web completos de demostración para cada plantilla
6. **Beneficios** - 6 propuestas de valor con iconos animados
7. **Testimonios** - Carrusel automático con 6 casos de éxito
8. **Comparación** - Tabla comparativa vs. otras opciones
9. **FAQ** - Acordeón expansible con 10 preguntas frecuentes
10. **Formulario de Contacto** - Validación y estados de carga
11. **Exit Intent Popup** - Modal con descuento 10%
12. **Footer** - Links, información de contacto y redes sociales

### 🆕 Páginas Demo Interactivas

Cada plantilla tiene su propia **página demo completamente funcional** (`/demo/[slug]`) que incluye:

- ✅ Header navegable con menú responsive
- ✅ Hero section personalizado
- ✅ Sección de destacados del restaurante
- ✅ Menú con 3 platos de ejemplo
- ✅ Formulario de reservas funcional
- ✅ Galería de imágenes interactiva
- ✅ Testimonios de clientes
- ✅ Footer completo con información de contacto

**Ejemplos en vivo:**
- `/demo/italiano-tradicional` - Demo de Trattoria Bella Italia
- `/demo/alta-cocina-gourmet` - Demo de Le Gourmet
- `/demo/japones-sushi` - Demo de Sushi Master
- Y 7 más...

### Optimizaciones Implementadas

- ✅ **SEO Optimizado:** Meta tags, Open Graph, sitemap ready
- ✅ **Performance:** Lazy loading, optimización de imágenes
- ✅ **Responsive:** Diseño mobile-first, breakpoints: 320px, 375px, 768px, 1024px, 1440px
- ✅ **Accesibilidad:** Aria labels, navegación por teclado, contraste WCAG AA
- ✅ **Animaciones:** Framer Motion con respeto a `prefers-reduced-motion`
- ✅ **UX:** Microinteracciones, estados de hover, transiciones suaves

## 📦 Instalación

### Prerrequisitos

- Node.js 18.x o superior
- npm, yarn o pnpm

### Pasos de Instalación

1. **Clonar el repositorio** (o navegar al directorio del proyecto)

```bash
cd "Web Dynamics"
```

2. **Instalar dependencias**

```bash
npm install
# o
yarn install
# o
pnpm install
```

3. **Ejecutar en modo desarrollo**

```bash
npm run dev
# o
yarn dev
# o
pnpm dev
```

4. **Abrir en el navegador**

Navega a [http://localhost:3000](http://localhost:3000)

## 🏗️ Estructura del Proyecto

```
Web Dynamics/
├── app/
│   ├── layout.tsx           # Layout principal con fuentes
│   ├── page.tsx             # Página principal (landing)
│   ├── globals.css          # Estilos globales
│   └── plantillas/
│       └── [slug]/
│           └── page.tsx     # Páginas dinámicas de plantillas
├── components/
│   ├── Navigation.tsx       # Barra de navegación sticky
│   ├── Hero.tsx            # Sección hero con CTAs
│   ├── SocialProof.tsx     # Logos y estadísticas
│   ├── TemplateGallery.tsx # Galería con filtros
│   ├── TemplateDetailClient.tsx # Vista detallada de plantilla
│   ├── Benefits.tsx        # Propuestas de valor
│   ├── Testimonials.tsx    # Carrusel de testimonios
│   ├── Comparison.tsx      # Tabla comparativa
│   ├── FAQ.tsx            # Preguntas frecuentes
│   ├── ContactForm.tsx     # Formulario de contacto
│   ├── Footer.tsx          # Footer del sitio
│   └── ExitIntentPopup.tsx # Popup de salida
├── data/
│   └── templates.ts        # Datos de las 10 plantillas
├── types/
│   └── template.ts         # Tipos TypeScript
├── public/                 # Assets estáticos
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.ts
```

## 🎨 Personalización

### Colores de Marca

Edita `tailwind.config.ts` para cambiar la paleta de colores:

```typescript
colors: {
  primary: {
    50: '#fdf8f6',
    // ... más tonos
    900: '#43302b',
  },
  accent: {
    // ... colores de acento
  },
}
```

### Añadir Nuevas Plantillas

1. Edita `data/templates.ts`
2. Añade un nuevo objeto con la siguiente estructura:

```typescript
{
  id: '11',
  slug: 'nueva-plantilla',
  name: 'Nueva Plantilla',
  category: 'casual',
  description: 'Descripción...',
  image: 'URL_de_imagen',
  badge: 'nuevo', // opcional
  features: ['Feature 1', 'Feature 2', 'Feature 3'],
  colorScheme: {
    primary: '#color1',
    secondary: '#color2',
    accent: '#color3',
  },
  price: '€399',
}
```

### Modificar Contenido

- **Textos:** Cada componente contiene su propio contenido editable
- **Imágenes:** Usa Unsplash o tus propias imágenes en `/public`
- **Testimonios:** Edita el array en `components/Testimonials.tsx`
- **FAQ:** Edita el array en `components/FAQ.tsx`

## 📊 Integración de Analytics

### Google Analytics 4

1. Obtén tu ID de medición (G-XXXXXXXXXX)
2. Añade al archivo `app/layout.tsx`:

```typescript
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `}
</Script>
```

### Google Tag Manager

Similar al anterior, añade el script de GTM en el layout.

## 🚀 Deployment en Vercel

### Opción 1: Deploy automático desde GitHub

1. Sube el proyecto a GitHub
2. Importa en [vercel.com](https://vercel.com)
3. Vercel detectará Next.js automáticamente
4. Deploy en 1 click

### Opción 2: Vercel CLI

```bash
npm i -g vercel
vercel login
vercel
```

### Configuración de Variables de Entorno

Si añades APIs o servicios externos:

1. Crea archivo `.env.local`
2. Añade las variables:

```
NEXT_PUBLIC_API_KEY=tu_api_key
```

  3. En Vercel, ve a Settings > Environment Variables

### Variables para formulario interno de platos

Para el formulario interno de alta de platos, crea (o edita) `.env.local` y añade:

```
VITE_CLOUDINARY_CLOUD_NAME=mi_cloud_name_aqui
VITE_CLOUDINARY_UPLOAD_PRESET=mi_upload_preset_aqui
VITE_NEW_DISH_WEBHOOK_URL=
```

`VITE_NEW_DISH_WEBHOOK_URL` es opcional; puedes dejarla vacía si aún no tienes el webhook.

## 🎯 Optimización de Conversión

### Elementos CTA Estratégicos

- Hero section (principal)
- Después de galería de plantillas
- Después de testimonios
- Antes del footer
- Exit intent popup

### A/B Testing Recomendado

1. **Headlines:** Prueba diferentes propuestas de valor
2. **CTAs:** "Ver Plantillas" vs "Empezar Ahora" vs "Crear Mi Sitio"
3. **Colores:** Botones primarios en diferentes tonos
4. **Precios:** Mostrar/ocultar precios en tarjetas
5. **Testimonios:** Cantidad y formato

### Herramientas Sugeridas

- **Hotjar:** Heatmaps y grabaciones de sesión
- **Google Optimize:** A/B testing
- **Microsoft Clarity:** Análisis de comportamiento
- **Vercel Analytics:** Core Web Vitals

## 📱 Responsive Breakpoints

```css
- Mobile Small: 320px
- Mobile: 375px
- Tablet: 768px
- Desktop: 1024px
- Large Desktop: 1440px
```

## ⚡ Performance

### Métricas Objetivo

- **LCP (Largest Contentful Paint):** < 2.5s
- **FID (First Input Delay):** < 100ms
- **CLS (Cumulative Layout Shift):** < 0.1
- **PageSpeed Score:** > 90 (móvil y desktop)

### Optimizaciones Aplicadas

- Lazy loading de imágenes
- Code splitting automático (Next.js)
- Fonts optimizados (next/font)
- Preload de recursos críticos
- Minimización de JavaScript

## 🔒 Seguridad

- Validación de formularios client y server-side (implementar backend)
- Protección CSRF (implementar con backend)
- Rate limiting para formularios (implementar)
- HTTPS only (configurado en Vercel)
- Headers de seguridad (configurar en `next.config.ts`)

## 📧 Integración de Formularios

### Opción 1: Email directo (Resend, SendGrid)

```bash
npm install resend
```

### Opción 2: Servicios de formularios
- **Formspree**
- **Netlify Forms**
- **Basin**

### Opción 3: CRM Integration
- **HubSpot**
- **Pipedrive**
- **Salesforce**

## 🛠️ Scripts Disponibles

```bash
npm run dev      # Desarrollo (localhost:3000)
npm run build    # Build de producción
npm run start    # Servidor de producción
npm run lint     # Linting con ESLint
```

## 📄 Licencia

Este proyecto es propiedad de Web Dynamics. Todos los derechos reservados.

## 🤝 Soporte

Para soporte técnico o consultas:
- **Email:** hola@webdynamics.es
- **Teléfono:** +34 900 123 456
- **Ubicación:** Barcelona, España

---

**Desarrollado con ❤️ usando Next.js, TypeScript y Tailwind CSS**
