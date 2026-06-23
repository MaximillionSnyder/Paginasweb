# v1.0 — Tu Web

> Landing page funcional para ofrecer servicios de diseño web a personas y pequeños negocios.

---

## Stack

- HTML5
- CSS3 vanilla (sin frameworks)
- JavaScript vanilla (sin librerías)
- **0 dependencias externas**

## Archivos

| Archivo | Tamaño | Propósito |
|---------|--------|-----------|
| `index.html` | 603 líneas | Estructura completa de la SPA |
| `css/styles.css` | 1448 líneas | Todos los estilos, responsive, animaciones |
| `js/app.js` | 353 líneas | Toda la lógica del frontend |
| `ROADMAP.md` | — | Plan de ruta original |
| `version1.md` | — | Este resumen |

## Secciones

1. **Header** — Logo "Tu Web" con gradiente, nav con 5 enlaces, menú hamburguesa en móvil, fondo blur al hacer scroll
2. **Hero** — Titular grande, subtítulo, 2 CTAs, mockup visual animado de un sitio web
3. **Servicios** — 4 tarjetas: Diseño Web, Desarrollo, Responsive, Hosting+Dominio. Cada una con ícono SVG inline
4. **Carrusel de diseños** — 6 tarjetas navegables

## Los 6 estilos de diseño

| # | Estilo | Mockup CSS | Paleta |
|---|--------|------------|--------|
| 1 | **Minimalista** | Fondo blanco, header negro, acentos dorados (#C9A96E) | #FAFAFA, #1A1A1A, #C9A96E |
| 2 | **Corporativo** | Fondo azul claro, header azul oscuro, estadísticas | #1A365D, #2B6CB0, #E2E8F0 |
| 3 | **Moderno** | Fondo oscuro, formas geométricas, degradados vibrantes | #FF6B6B, #FFE66D, #1A1A2E |
| 4 | **E-commerce** | Blanco, header oscuro, tarjetas de producto, acento naranja | #F97316, #1F2937, #FEE2E2 |
| 5 | **Portfolio** | Fondo negro, sidebar, galería con acento verde | #0A0A0A, #10B981, #27272A |
| 6 | **Landing Page** | Fondo claro, hero con CTA, sección narrativa | #4F46E5, #1E293B, #F8FAFC |

## Comportamiento del carrusel

- **Automático**: avanza cada 4 segundos
- **Manual**: botones ◀ ▶ con flechas SVG
- **Dots**: indicadores que muestran la posición actual
- **Táctil**: swipe con dedo en móviles (eventos touch)
- **Pausa**: se detiene al hacer clic en botones o dots
- **Responsive**: 3 tarjetas visibles en desktop, 2 en tablet, 1 en móvil

## Vista detallada (SPA)

Cada diseño del carrusel al hacer clic abre una ventana modal con:
- Mockup ampliado del estilo (más grande que en el carrusel)
- Paleta de colores visual (círculos de colores)
- Descripción del enfoque y para quién es ideal
- Lista de características incluidas
- Botón **"Quiero este estilo"** que cierra la vista y lleva al formulario de contacto

La vista se cierra con:
- Botón ✕ en la esquina
- Clic en el fondo oscuro (overlay)
- Tecla Escape

## Planes de precios

| Plan | Precio (MXN) | Características |
|------|-------------|-----------------|
| **Básico** | $499 | 1 página, responsivo, formulario, hosting 1 año, dominio .com |
| **Profesional** ⭐ | $999 | Hasta 5 páginas, galería, SEO básico, hosting + dominio |
| **Premium** | $1,999 | Páginas ilimitadas, blog, SEO completo, soporte prioritario |

## Formulario de contacto

- Campos: nombre, email, teléfono, servicio de interés, mensaje
- Validación en cliente (nombre requerido, email válido)
- Feedback visual: campos en rojo si hay error, botón cambia a "¡Mensaje enviado!" en verde si es válido
- Sin backend (solo UI, preparado para conectar)

## Responsive

| Breakpoint | Comportamiento |
|------------|----------------|
| ≥ 1024px | Layout completo, carrusel con 3 cards |
| 640px – 1023px | Hero centrado, carrusel con 2 cards |
| < 640px | Menú hamburguesa, carrusel con 1 card, todo apilado |

## Cómo ejecutar

```bash
cd tu-web/
python3 -m http.server 8080
# Abrir http://localhost:8080
```

O simplemente abrir `index.html` en cualquier navegador.

---

*Proyecto 100% vanilla. Sin frameworks, sin build steps, sin dependencias.*
