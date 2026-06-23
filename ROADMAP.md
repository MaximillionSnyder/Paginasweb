# Tu Web - Hoja de Ruta

> Landing page para servicio de diseño web profesional dirigido a personas y pequeños negocios.

---

## 📁 Estructura del proyecto

```
tu-web/
├── index.html          # Todo el HTML (SPA de una sola página)
├── css/
│   └── styles.css      # Todos los estilos
├── js/
│   └── app.js          # Toda la lógica (vanilla JS)
└── ROADMAP.md          # Este archivo
```

**Stack:** HTML5 + CSS3 + JavaScript Vanilla. Sin frameworks ni dependencias externas.

---

## 🧱 Secciones de la página

| # | Sección | Descripción |
|---|---------|-------------|
| 1 | **Header/Nav** | Logo "Tu Web", navegación suave a secciones, menú hamburguesa en móvil |
| 2 | **Hero** | Titular potente, subtítulo, CTA "Ver diseños" |
| 3 | **Servicios** | Tarjetas con servicios ofrecidos: diseño, desarrollo, responsive, hosting |
| 4 | **Carusel de diseños** | 6 tarjetas navegables con auto-play, botones y soporte táctil |
| 5 | **Precios** | 3 planes: Básico, Profesional, Premium |
| 6 | **Contacto** | Formulario con nombre, email, teléfono, mensaje |
| 7 | **Footer** | Redes sociales, copyright, enlaces |

---

## 🎨 Los 6 estilos de diseño del carrusel

Cada tarjeta del carrusel muestra un mockup visual (CSS puro). Al hacer clic → vista detallada con paleta, descripción y CTA.

| # | Estilo | Concepto visual |
|---|--------|-----------------|
| 1 | **Minimalista** | Blanco, espacio negativo abundante, tipografía elegante serif, paleta neutra (#F5F5F5, #333, acento #C9A96E) |
| 2 | **Corporativo** | Azul corporativo (#1A365D, #2B6CB0), estructura formal, iconos profesionales |
| 3 | **Moderno/Creativo** | Degradados vibrantes (#FF6B6B → #FFE66D), formas geométricas, tipografía bold |
| 4 | **E-commerce** | Tarjetas de producto, naranja vibrante (#F97316), badge de ofertas, diseño de tienda |
| 5 | **Portfolio Personal** | Grid tipo galería, tipografía display, acento verde (#10B981), fondo oscuro (#111) |
| 6 | **Landing Page** | Una sola página vertical, CTA grande, arrow scroll, colores azul-índigo (#4F46E5) |

### Vista detallada (al hacer clic)

Cada diseño abre una vista interna que contiene:
- Mockup ampliado del estilo
- Paleta de colores (swatches visuales)
- Descripción del estilo (para qué tipo de cliente es ideal)
- Lista de características incluidas
- Botón **"Quiero este estilo →"** que lleva al formulario de contacto

---

## 🖱️ Comportamiento del carrusel

| Modo | Implementación |
|------|----------------|
| **Automático** | `setInterval` cada 4 segundos |
| **Manual** | Botones ◀ ▶ + dots indicadores |
| **Táctil** | Eventos `touchstart`, `touchmove`, `touchend` para swipe |
| **Pausa** | Se pausa al hacer hover o tocar un dot/botón |

### Responsive del carrusel

| Viewport | Tarjetas visibles |
|----------|------------------|
| ≥ 1024px | 3 tarjetas |
| ≥ 640px  | 2 tarjetas |
| < 640px  | 1 tarjeta |

---

## 📱 Responsive general

| Breakpoint | Comportamiento |
|------------|----------------|
| **Desktop** (≥1024px) | Layout completo, carrusel 3 cards, nav horizontal |
| **Tablet** (≥640px) | Padding reducido, carrusel 2 cards |
| **Móvil** (<640px) | Menú hamburguesa, secciones apiladas, carrusel 1 card, formulario ancho completo |

---

## 🚧 Orden de implementación

1. **Estructura HTML** — Maquetar todas las secciones (skeleton)
2. **CSS base** — Variables, reset, tipografía, layout general
3. **Header + Hero** — Navegación responsive, hero con CTA
4. **Servicios** — Tarjetas de servicios con íconos (SVG inline)
5. **Carusel** — HTML + CSS del carrusel, tarjetas de los 6 diseños
6. **JS del carrusel** — Auto-play, navegación manual, swipe táctil, pausa
7. **Vistas detalladas** — Lógica SPA para mostrar cada diseño al hacer clic
8. **Precios** — Tabla/tarjetas con 3 planes
9. **Contacto** — Formulario con validación básica
10. **Footer** — Información de cierre
11. **Responsive final** — Ajustes en todos los breakpoints
12. **Smooth scroll + animaciones** — Transiciones suaves al navegar

---

## 📐 Principios de diseño

- **Paleta base:** Tonos oscuros (#0F172A, #1E293B) con acentos según sección
- **Tipografía:** Sistema sans-serif nativa (`system-ui, -apple-system, sans-serif`)
- **Iconos:** SVG inline (sin librerías externas)
- **Animaciones:** CSS transitions + @keyframes (sin librerías)
- **Formulario:** Validación con HTML5 + JS, sin backend (solo UI)

---

## 🧪 Verificación

- Probar navegación responsive (Chrome DevTools)
- Verificar carrusel: auto, manual y táctil
- Comprobar que todas las vistas detalladas se abren/cierran correctamente
- Validar formulario con campos vacíos y correo inválido
- Probar menú hamburguesa en móvil
