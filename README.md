# Frenos y Embragues Matías — Sitio web

## Qué incluye
- `index.html` — página de inicio
- `servicios.html` — catálogo de servicios (6 servicios detallados)
- `contacto.html` — formulario + WhatsApp + mapa
- `blog/index.html` — listado de artículos
- `blog/*.html` — 2 artículos de ejemplo, listos como plantilla para publicar más
- `legal/` — aviso legal, privacidad y divulgación de afiliados (necesarios para aprobar AdSense y programas de afiliados)
- `robots.txt` y `sitemap.xml` — SEO técnico
- `css/styles.css`, `js/main.js` — sistema de diseño y comportamiento compartido

## Datos ya actualizados con tu información real
- WhatsApp / teléfono: **+51 992 707 594**
- Dirección: **Prolongación Unión #2018, cerca del Grifo Gran Chimú, Trujillo**
- Horario: **Lunes a sábado 7:30 a.m.–6:00 p.m. · Domingo 7:30 a.m.–12:00 p.m.**
- Logo y fotos reales del taller ya están en `img/` (`logo.png`, `taller-camiones.jpg`, `marcas-multimarca.jpg`)
- Paleta de color tomada del logo real: negro asfalto + amarillo `#FFCE00`

## Antes de publicar — todavía falta
1. `contacto@frenosmatias.pe` → tu correo real (o elimínalo si solo atienden por WhatsApp)
2. `www.frenosmatias.pe` → tu dominio real (una vez lo compres)
3. El mapa de `contacto.html` ubica por nombre de calle — verifica que el pin caiga exacto y ajusta `latitude`/`longitude` en el JSON-LD de `index.html` si hace falta

## Cómo activar Google AdSense
1. Postula tu dominio en https://www.google.com/adsense — necesitas dominio propio (no funciona en subida sin dominio) y las páginas legales ya están listas para la revisión.
2. Cuando te aprueben, reemplaza cada `<div class="ad-slot">...</div>` por el bloque de anuncio que te entregue AdSense.
3. Pega el script de verificación de AdSense en el `<head>` de todas las páginas.

## Cómo activar marketing de afiliados
- Cada artículo del blog tiene una sección "Repuestos recomendados" con tarjetas `.affiliate-card`.
- Reemplaza el `href="#"` de cada botón "Ver en tienda" por tu enlace de afiliado real (Amazon Asociados, MercadoLibre, tiendas de repuestos locales, etc.).
- Mantén el atributo `rel="sponsored nofollow"` en esos enlaces: es requisito de Google para enlaces de afiliado/patrocinados.

## Cómo publicar
Este es un sitio estático (HTML/CSS/JS puro), no necesita backend. Puedes subirlo a:
- **Hostinger / cPanel**: sube todo el contenido de esta carpeta a `public_html`
- **Netlify o Vercel**: arrastra la carpeta completa (gratis)
- **GitHub Pages**: sube el contenido a un repositorio y activa Pages

## Cómo agregar un nuevo artículo al blog
1. Duplica `blog/cuando-cambiar-pastillas-freno.html`
2. Cambia el `<title>`, `meta description`, el JSON-LD "Article" y el contenido
3. Agrégalo a `blog/index.html` como una nueva `.blog-card`
4. Agrégalo a `sitemap.xml`

## Rendimiento (Core Web Vitals)
- Sin frameworks pesados: HTML/CSS/JS puro, carga rápida
- Fuentes con `preconnect` y `display=swap`
- SVG en línea en vez de imágenes pesadas para iconos y el disco de freno animado
- Recuerda comprimir cualquier foto real que subas (WebP recomendado, <200kb)
