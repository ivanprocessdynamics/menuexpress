# 📝 Guía de Personalización - Web Dynamics

Esta guía te ayudará a personalizar el sitio web según las necesidades de tu negocio.

## 🎨 1. Cambiar Colores de Marca

### Editar Tailwind Config

Archivo: `tailwind.config.ts`

```typescript
colors: {
  primary: {
    50: '#tu-color-50',
    100: '#tu-color-100',
    // ... hasta 900
  },
  accent: {
    // Colores de acento
  },
}
```

### Herramienta Recomendada
Usa [UIColors.app](https://uicolors.app) para generar paletas completas desde un color base.

## 📄 2. Modificar Textos y Contenido

### Hero Section
Archivo: `components/Hero.tsx`

```typescript
// Línea ~45 - Headline principal
<h1>Tu Nuevo Titular Aquí</h1>

// Línea ~55 - Subtítulo
<p>Tu propuesta de valor...</p>
```

### Datos de Contacto
Archivo: `components/Footer.tsx` y `components/ContactForm.tsx`

Busca y reemplaza:
- Email: `hola@webdynamics.es`
- Teléfono: `+34 900 123 456`
- Ubicación: `Barcelona, España`

### Nombre de la Empresa
Busca y reemplaza "Web Dynamics" en todos los archivos.

## 🖼️ 3. Cambiar Imágenes

### Opciones de Imágenes

**Opción A: Usar tus propias imágenes**
1. Coloca las imágenes en `/public/images/`
2. Actualiza las rutas en los componentes:

```typescript
// Antes
src="https://images.unsplash.com/photo-..."

// Después
src="/images/tu-imagen.jpg"
```

**Opción B: Unsplash (gratis)**
- Mantén las URLs actuales de Unsplash
- Busca nuevas imágenes en [Unsplash.com](https://unsplash.com)

**Opción C: Pexels (gratis)**
- Similar a Unsplash
- URL: [Pexels.com](https://pexels.com)

### Optimizar Imágenes
```bash
# Instalar herramienta de optimización
npm install sharp

# Las imágenes se optimizan automáticamente con Next.js Image
```

## 📋 4. Añadir/Editar Plantillas

Archivo: `data/templates.ts`

### Añadir Nueva Plantilla

```typescript
{
  id: '11',
  slug: 'slug-url-amigable',
  name: 'Nombre de la Plantilla',
  category: 'fine', // fine, casual, fast, international
  description: 'Descripción corta',
  image: 'URL de la imagen',
  badge: 'nuevo', // 'popular', 'nuevo', o sin badge
  features: [
    'Característica 1',
    'Característica 2',
    'Característica 3',
  ],
  colorScheme: {
    primary: '#hex-color',
    secondary: '#hex-color',
    accent: '#hex-color',
  },
  price: '€399',
}
```

### Editar Plantilla Existente
Busca el objeto por `id` o `slug` y modifica los valores.

## 💬 5. Personalizar Testimonios

Archivo: `components/Testimonials.tsx`

```typescript
const testimonials = [
  {
    id: 1,
    name: 'Nombre del Cliente',
    role: 'Propietario/Gerente',
    restaurant: 'Nombre del Restaurante',
    city: 'Ciudad',
    image: 'URL de foto',
    quote: 'Testimonio del cliente...',
    metric: '+XX% en resultados',
    rating: 5,
  },
  // ... más testimonios
];
```

## ❓ 6. Modificar FAQs

Archivo: `components/FAQ.tsx`

```typescript
const faqs = [
  {
    question: '¿Tu pregunta aquí?',
    answer: 'Respuesta detallada...',
  },
  // ... más preguntas
];
```

## 📊 7. Integrar Analytics

### Google Analytics 4

Archivo: `app/layout.tsx` - Añadir antes del cierre de `</head>`:

```typescript
import Script from 'next/script';

// Dentro del layout
<Script
  src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
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

### Facebook Pixel

```typescript
<Script id="facebook-pixel" strategy="afterInteractive">
  {`
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', 'TU_PIXEL_ID');
    fbq('track', 'PageView');
  `}
</Script>
```

## 📧 8. Configurar Formularios de Contacto

### Opción A: Formspree (Más Fácil)

1. Regístrate en [Formspree.io](https://formspree.io)
2. Crea un formulario y obtén tu endpoint
3. Archivo: `components/ContactForm.tsx`

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  const response = await fetch('https://formspree.io/f/TU_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });
  
  if (response.ok) {
    setIsSubmitted(true);
  }
};
```

### Opción B: EmailJS

```bash
npm install @emailjs/browser
```

```typescript
import emailjs from '@emailjs/browser';

emailjs.send(
  'YOUR_SERVICE_ID',
  'YOUR_TEMPLATE_ID',
  formData,
  'YOUR_PUBLIC_KEY'
);
```

### Opción C: API Route de Next.js + Resend

```bash
npm install resend
```

Crear: `app/api/contact/route.ts`

```typescript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const data = await request.json();
  
  await resend.emails.send({
    from: 'noreply@tudominio.com',
    to: 'contacto@tudominio.com',
    subject: 'Nuevo contacto desde web',
    html: `<p>${data.message}</p>`,
  });
  
  return Response.json({ success: true });
}
```

## 🔐 9. Variables de Entorno

Crear archivo: `.env.local`

```env
# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_FB_PIXEL_ID=123456789

# Email
RESEND_API_KEY=re_xxxxxxxxxx

# CMS (si usas)
NEXT_PUBLIC_CMS_URL=https://tu-cms.com
```

**IMPORTANTE:** Nunca subas `.env.local` a Git (ya está en .gitignore)

## 🚀 10. Deploy en Vercel

### Paso 1: Preparar Proyecto

```bash
git init
git add .
git commit -m "Initial commit"
```

### Paso 2: Subir a GitHub

```bash
# Crea un repo en GitHub y luego:
git remote add origin https://github.com/tu-usuario/tu-repo.git
git push -u origin main
```

### Paso 3: Deploy en Vercel

1. Ve a [vercel.com](https://vercel.com)
2. Click "New Project"
3. Importa tu repositorio de GitHub
4. Vercel detecta Next.js automáticamente
5. Añade variables de entorno si las tienes
6. Click "Deploy"

### Paso 4: Dominio Personalizado

1. En tu proyecto de Vercel, ve a "Settings" > "Domains"
2. Añade tu dominio
3. Configura los DNS según las instrucciones

## 📱 11. SEO y Meta Tags

### Página Principal
Archivo: `app/layout.tsx`

```typescript
export const metadata: Metadata = {
  title: 'Tu Título - Tu Slogan',
  description: 'Tu descripción (máximo 155 caracteres)',
  keywords: 'palabras, clave, separadas, por, comas',
  openGraph: {
    title: 'Título para redes sociales',
    description: 'Descripción para redes sociales',
    images: ['/og-image.jpg'],
  },
};
```

### Páginas de Plantillas
Ya configuradas automáticamente en `app/plantillas/[slug]/page.tsx`

## 🎨 12. Personalización Avanzada

### Cambiar Fuentes

Archivo: `app/layout.tsx`

```typescript
import { Tu_Fuente } from 'next/font/google';

const tuFuente = Tu_Fuente({ 
  subsets: ['latin'],
  variable: '--font-tu-fuente',
});

// Busca fuentes en: https://fonts.google.com
```

### Añadir Nueva Sección

1. Crea componente: `components/TuNuevaSeccion.tsx`
2. Importa en: `app/page.tsx`
3. Añade entre las secciones existentes

### Modificar Animaciones

Archivo con animaciones: Todos los componentes usan Framer Motion

```typescript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  {/* Tu contenido */}
</motion.div>
```

## 🛠️ 13. Comandos Útiles

```bash
# Desarrollo
npm run dev

# Build de producción
npm run build

# Probar build localmente
npm run start

# Linting
npm run lint

# Actualizar dependencias
npm update

# Ver versión de Next.js
npm list next
```

## ❗ 14. Solución de Problemas Comunes

### Error: Module not found
```bash
npm install
# o eliminar node_modules y reinstalar
rm -rf node_modules package-lock.json
npm install
```

### Error: Puerto 3000 en uso
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID numero_pid /F

# Luego ejecuta
npm run dev
```

### Imágenes no se cargan
1. Verifica la ruta de la imagen
2. Si es externa, añade el dominio en `next.config.ts`:

```typescript
images: {
  domains: ['tu-dominio.com', 'images.unsplash.com'],
},
```

### Build falla en Vercel
- Revisa los logs en Vercel
- Asegúrate que todas las variables de entorno estén configuradas
- Verifica que no haya errores de TypeScript localmente

## 📚 15. Recursos Adicionales

### Documentación
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)

### Herramientas de Diseño
- [Figma](https://figma.com) - Diseño de interfaces
- [Coolors](https://coolors.co) - Generador de paletas
- [Hero Icons](https://heroicons.com) - Iconos adicionales

### Optimización
- [PageSpeed Insights](https://pagespeed.web.dev)
- [GTmetrix](https://gtmetrix.com)
- [WebPageTest](https://webpagetest.org)

## 💡 16. Mejores Prácticas

1. **Siempre testea en múltiples dispositivos** antes de hacer deploy
2. **Optimiza las imágenes** antes de subirlas (usa TinyPNG o Squoosh)
3. **Haz commits frecuentes** con mensajes descriptivos
4. **Prueba el formulario** de contacto después de cada cambio
5. **Monitorea el rendimiento** con PageSpeed Insights regularmente
6. **Mantén las dependencias actualizadas** pero prueba después de actualizar
7. **Haz backup** antes de cambios importantes

---

¿Necesitas ayuda adicional? Contacta a soporte técnico o consulta la documentación completa en el README.md
