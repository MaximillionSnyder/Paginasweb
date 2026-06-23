# v2.0 — Tu Web

> Cambios realizados respecto a v1.0

---

## Resumen de cambios

| Cambio | Descripción |
|--------|-------------|
| **Reorder secciones** | Carrusel de diseños movido **antes** de Servicios (ahora Hero → Diseños → Servicios → Precios → Contacto) |
| **Paleta en cards** | Cada tarjeta del carrusel ahora muestra los 4 colores de su paleta visualmente (swatches) |
| **Vista detallada rediseñada** | Ya no muestra texto descriptivo, sino un **mockup completo del sitio web terminado** |
| **Header de detalle** | Barra superior con nombre del estilo, paleta de colores y botón CTA |
| **6 mockups de sitio completo** | Cada diseño ahora tiene su propia representación de página web realista |

## Detalle de los mockups completos

| Diseño | Elementos del mockup |
|--------|----------------------|
| **Minimalista** | Nav oscuro + logo dorado + Hero blanco con botón dorado + 3 cards + footer |
| **Corporativo** | Nav azul oscuro + Hero con gradiente azul + Estadísticas (150+, 10 años, 98%) + footer |
| **Moderno** | Shapes flotantes + nav transparente + hero con degradado + galería 3 items + footer |
| **E-commerce** | Nav oscuro + carrito + 3 tarjetas de producto con imagen, nombre y precio |
| **Portfolio** | Sidebar con avatar + nombre + galería masonry 4 items en modo oscuro |
| **Landing Page** | Hero grande + título + botón CTA + 3 features cards + footer |

## Archivos actualizados

| Archivo | Cambios |
|---------|---------|
| `index.html` | Secciones reordenadas, carrusel con paletas, detail views reemplazadas por mockups completos |
| `css/styles.css` | Nuevos estilos: `.card-palette`, `.detail-header`, `.detail-website`, `.site-*`, mockups específicos por estilo |
| `js/app.js` | Sin cambios (la lógica de detalle seguía funcionando con las nuevas clases) |

## Nuevos archivos

| Archivo | Propósito |
|---------|-----------|
| `README.md` | Documentación concisa del proyecto |
| `.gitignore` | Ignorar archivos del sistema y del IDE |

## Orden final de secciones

```
Header → Hero → Diseños/Carrusel → Servicios → Precios → Contacto → Footer
```

---

*Proyecto 100% vanilla. Sin frameworks, sin build steps, sin dependencias.*
