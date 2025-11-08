# 🎨 Actualización - Páginas Demo Interactivas

## ✅ Nuevas Características Añadidas

Se han añadido **páginas demo completas** para cada plantilla de restaurante, permitiendo a los visitantes ver exactamente cómo se verá su sitio web antes de comprarlo.

---

## 📋 ¿Qué se ha Añadido?

### 1. **Páginas Demo Funcionales** (`/demo/[slug]`)
Cada plantilla ahora tiene una página demo completamente funcional con:

- ✅ **Header navegable** con menú responsive
- ✅ **Hero section** personalizado por tipo de restaurante
- ✅ **Sección de destacados** (3 características principales)
- ✅ **Menú de ejemplo** con 3 platos y precios
- ✅ **Formulario de reservas** funcional
- ✅ **Galería de imágenes** con efecto hover
- ✅ **Testimonios de clientes** (3 reseñas)
- ✅ **Footer completo** con contacto, horario y redes sociales

### 2. **Datos Personalizados por Restaurante**
Archivo: `data/demoData.ts`

Cada tipo de restaurante tiene datos específicos:
- **Alta Cocina Gourmet** - "Le Gourmet"
- **Italiano Tradicional** - "Trattoria Bella Italia"
- **Japonés Sushi** - "Sushi Master"
- **Y más...** (con datos por defecto para otros)

### 3. **Enlaces Integrados**
Se actualizaron los siguientes componentes:

- **`TemplateGallery.tsx`** - Botones "Ver Demo" + "Detalles" en hover
- **`TemplateDetailClient.tsx`** - Botón "Ver Demo en Vivo" que abre en nueva pestaña
- **`app/sitemap.ts`** - Incluye todas las páginas demo

---

## 🌐 URLs de las Páginas Demo

### Formato:
```
/demo/[slug-de-plantilla]
```

### Ejemplos disponibles:
- http://localhost:3001/demo/alta-cocina-gourmet
- http://localhost:3001/demo/italiano-tradicional
- http://localhost:3001/demo/japones-sushi
- http://localhost:3001/demo/mexicano-autentico
- http://localhost:3001/demo/fast-food-moderno
- http://localhost:3001/demo/pizzeria-italiana
- http://localhost:3001/demo/vegetariano-organico
- http://localhost:3001/demo/fusion-contemporaneo
- http://localhost:3001/demo/familiar-buffet
- http://localhost:3001/demo/cafeteria-brunch

---

## 🎯 Características de las Demos

### Diseño Adaptado
Cada demo usa los **colores de la plantilla original**:
- Color primario para header y footer
- Color de acento para botones CTA
- Imágenes relevantes del tipo de restaurante

### Contenido Personalizado
- **Nombre del restaurante** específico
- **Tagline** apropiado
- **3 platos del menú** con precios realistas
- **Testimonios** contextualizados
- **Información de contacto** demo

### Funcionalidades Incluidas
1. **Navegación sticky** que se mantiene visible al scroll
2. **Menú hamburguesa** en móviles
3. **Formulario de reservas** con:
   - Nombre, teléfono, fecha, hora
   - Número de personas (1-8)
   - Ocasión especial (cumpleaños, aniversario, etc.)
   - Comentarios adicionales
4. **Galería interactiva** con efecto zoom en hover
5. **Footer completo** con horario de apertura

---

## 📁 Archivos Nuevos Creados

### 1. `/app/demo/[slug]/page.tsx`
Página de rutas dinámicas para las demos.
- Genera rutas estáticas para cada plantilla
- Metadata SEO con robots noindex (para no indexar demos)
- Integración con componente cliente

### 2. `/components/DemoSiteClient.tsx`
Componente cliente que renderiza la demo completa.
- ~400 líneas de código
- Estructura completa de sitio web
- Responsive design
- Animaciones y efectos hover

### 3. `/data/demoData.ts`
Datos específicos para cada tipo de restaurante.
- Información del restaurante
- Items del menú
- Imágenes de galería
- Testimonios
- Horarios y contacto

---

## 🔧 Cómo Funciona

### 1. Usuario navega por plantillas
En la página principal o en la galería de plantillas.

### 2. Hace hover sobre una plantilla
Aparecen 2 botones:
- **"Ver Demo"** - Abre demo en nueva pestaña
- **"Detalles"** - Va a página de detalles

### 3. Click en "Ver Demo"
Se abre `/demo/[slug]` con:
- Sitio web completamente funcional
- Datos específicos del tipo de restaurante
- Colores de la plantilla aplicados
- Barra superior con botón "Volver a detalles"

### 4. Usuario puede explorar
- Navegar por todas las secciones
- Ver el menú de ejemplo
- Probar el formulario de reservas
- Ver la galería de imágenes
- Leer testimonios

---

## 🎨 Personalización

### Añadir datos para un nuevo restaurante

Edita `/data/demoData.ts` y añade:

```typescript
export const demoRestaurants: Record<string, DemoRestaurant> = {
  // ... otros restaurantes
  
  'tu-nuevo-slug': {
    restaurantName: 'Nombre del Restaurante',
    tagline: 'Tu Tagline',
    heroTitle: 'Título Principal',
    heroSubtitle: 'Subtítulo descriptivo',
    menuSubtitle: 'Descripción del menú',
    backgroundColor: '#ffffff',
    menuBg: '#f9fafb',
    galleryBg: '#ffffff',
    highlights: [
      {
        iconName: 'chef', // chef, star, calendar, users, award
        title: 'Título del destacado',
        description: 'Descripción'
      },
      // ... 2 más
    ],
    menuItems: [
      {
        name: 'Nombre del Plato',
        description: 'Descripción del plato',
        price: '€15',
        image: 'URL_de_imagen',
        popular: true, // opcional
      },
      // ... 2 más
    ],
    galleryImages: [
      'URL1', 'URL2', 'URL3', 'URL4'
    ],
    testimonials: [
      {
        text: 'Testimonio del cliente',
        author: 'Nombre del Cliente'
      },
      // ... 2 más
    ],
    contact: {
      phone: '+34 XXX XXX XXX',
      email: 'email@restaurante.com',
      address: 'Dirección completa'
    },
    hours: [
      { days: 'Lunes - Viernes', time: '13:00 - 23:00' },
      // ...
    ],
  },
};
```

### Cambiar imágenes

Reemplaza las URLs de Unsplash por:
- Tus propias imágenes en `/public/images/`
- Otras fuentes de imágenes gratuitas
- Imágenes de stock

---

## 🚀 Ventajas para el Negocio

### 1. **Mejor Conversión**
Los visitantes pueden **ver exactamente** cómo se verá su sitio web, reduciendo dudas y aumentando ventas.

### 2. **Diferenciación**
Pocas empresas de plantillas ofrecen demos tan completas y personalizadas.

### 3. **Confianza**
Ver un sitio funcional genera más confianza que mockups estáticos.

### 4. **Menos Preguntas**
Los clientes entienden mejor qué están comprando, reduciendo consultas pre-venta.

### 5. **Viralidad**
Los clientes pueden compartir el link de la demo con socios/inversores.

---

## 📊 Métricas Sugeridas a Trackear

```javascript
// Google Analytics 4 eventos sugeridos
- demo_view (cuando alguien abre una demo)
- demo_interaction (scroll, clicks en demo)
- demo_to_purchase (conversión desde demo a compra)
- demo_share (si se comparte el link)
```

---

## 🔄 Actualizaciones Futuras Sugeridas

### Corto Plazo
- [ ] Añadir más variedad de platos por restaurante
- [ ] Más imágenes en galerías (8-12 por restaurante)
- [ ] Añadir sección "Sobre Nosotros" en demos

### Medio Plazo
- [ ] Sistema de favoritos para comparar demos
- [ ] Personalización de colores en tiempo real
- [ ] Descarga de PDF con capturas de la demo

### Largo Plazo
- [ ] Editor visual para personalizar la demo
- [ ] Integración con calendario real para reservas
- [ ] Demos con datos del cliente (si proporciona info)

---

## 🐛 Solución de Problemas

### Demo no carga
```bash
# Verificar que el slug existe en templates.ts
# Limpiar cache de Next.js
rm -rf .next
npm run dev
```

### Imágenes no aparecen
```typescript
// Verificar next.config.ts
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'images.unsplash.com',
    },
  ],
}
```

### Colores no se aplican correctamente
Verificar que `template.colorScheme` tiene:
- `primary` - Color principal
- `secondary` - Color secundario  
- `accent` - Color de acento

---

## 📱 Testing

### Dispositivos a Probar
- [ ] Desktop (1440px, 1920px)
- [ ] Tablet (768px, 1024px)
- [ ] Mobile (375px, 414px)
- [ ] Mobile pequeño (320px)

### Navegadores
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge

### Funcionalidades
- [ ] Navegación del menú funciona
- [ ] Formulario de reservas se ve bien
- [ ] Imágenes cargan correctamente
- [ ] Hover effects funcionan
- [ ] Botón "Volver" funciona
- [ ] Demo abre en nueva pestaña desde galería

---

## 🎉 Resultado Final

Ahora tienes **10 páginas demo completas** que muestran exactamente cómo se verá cada tipo de restaurante web. Esto aumentará significativamente la conversión de tu landing page.

**URLs de prueba:**
- Principal: http://localhost:3001
- Galería: http://localhost:3001/#plantillas
- Demo ejemplo: http://localhost:3001/demo/italiano-tradicional

---

**Actualización completada:** 2025-10-10
**Archivos modificados:** 5
**Archivos nuevos:** 3
**Total líneas añadidas:** ~800
