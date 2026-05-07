## Cambios solicitados

### 1. Verde más claro en todas las páginas (global)
En `src/styles.css` aclarar las variables del verde para que se aplique automáticamente en todo el sitio (botones, títulos, hovers, sección de testimonios, etc.):

- `--primary`: de `oklch(0.42 0.05 145)` → `oklch(0.52 0.055 145)` (verde sage medio, más claro y vivo).
- `--sage-deep`: de `oklch(0.32 0.045 145)` → `oklch(0.42 0.05 145)` (lo que era el primary actual, ahora como tono "deep" más suave).
- `--sage`: de `oklch(0.55 0.04 145)` → `oklch(0.62 0.045 145)` (un toque más luminoso para los detalles tipo línea/uppercase).
- `--ring`: igualar al nuevo `--primary`.

Esto afecta a **todas las páginas** sin tocar archivo por archivo.

### 2. Página principal — foto de la doctora en el hero
En `src/routes/index.tsx`:

- Reemplazar el import `heroImage from "@/assets/hero-office.jpg"` por la misma imagen de retrato que usa la página "Sobre mí": `import portrait from "@/assets/diana-portrait.png"`.
- Usar esa imagen en el `<img>` del Hero (línea ~201) con alt: "Diana Sarmiento Pachón, psicoterapeuta".
- Para evitar conflicto con el `portrait` que ya se usa en la sección `WhatChanges` (que importa `about-portrait.jpg`), renombrar el nuevo import a `heroPortrait` y dejar el otro intacto.

### 3. Quitar el recuadro "30+ Años acompañando procesos"
Eliminar el bloque `<div className="absolute -bottom-6 -left-6 ...">` (líneas 208–221 de `src/routes/index.tsx`) que contiene el "30+", el texto y el enlace "Hablemos →".

### Páginas afectadas
- Cambio 1 (verde): todas (Inicio, Sobre mí, Psicoterapia, Servicios, Resultados, Blog, Contacto) vía `styles.css`.
- Cambios 2 y 3: solo `src/routes/index.tsx`.

### Notas
- No se modifica ninguna otra página explícitamente.
- La imagen `diana-portrait.png` ya existe en el proyecto (la usa `sobre-mi.tsx`), así que no hay que subir nada.
