## Objetivo
Reemplazar el bloque actual "O contacta directamente" (email + LinkedIn + Linktree) en la sección de contacto por una fila de iconos de redes sociales, según las que aparecen en el Linktree del usuario.

## Cambios propuestos

### 1. Traducciones
- Actualizar `directLabel` en `src/i18n/es.ts` a `"Encuéntrame en"`.
- Actualizar `directLabel` en `src/i18n/en.ts` a `"Find me on"`.

### 2. Componente `src/components/Contact.tsx`
- Reemplazar el `<div>` que contiene los enlaces de texto (`ignacio@yamato.digital`, `LinkedIn`, `Linktree`) por una fila horizontal de iconos.
- Cada icono será un enlace externo a la red social correspondiente.

### 3. Iconos
Usar `lucide-react` para los disponibles y SVG inline para los que no existan en la librería:
- **LinkedIn** → `Linkedin` (lucide-react)
- **Instagram** → `Instagram` (lucide-react)
- **YouTube** → `Youtube` (lucide-react)
- **GitHub** → `Github` (lucide-react)
- **Email** → `Mail` (lucide-react)
- **X (Twitter)** → SVG inline con el logo X
- **TikTok** → SVG inline con el logo TikTok

### 4. URLs (confirmadas por el usuario)
- LinkedIn: `https://linkedin.com/in/igonigonzalez`
- X: `https://x.com/igonigonzalez`
- Instagram: `https://instagram.com/igonigonzalez`
- TikTok: `https://tiktok.com/@igonigonzalez`
- YouTube: `https://youtube.com/@igonigonzalez`
- GitHub: `https://github.com/igonigonzalez`
- Email: `mailto:ignacio@yamato.digital`

### 5. Estilo
- Iconos alineados en fila con `gap` uniforme.
- Color inicial gris (`text-gray-500`), al hover blanco (`text-white`).
- Transición suave (`transition-colors duration-300`).
- Tamaño consistente (~24px).
- Atributos `aria-label` y `target="_blank" rel="noopener noreferrer"` para accesibilidad y seguridad.

### 6. Verificación
- Ejecutar `bun run build` para confirmar que el cambio no rompe el SSR/prerender.

## Notas
- Se respetará la restricción de no mostrar enlaces a redes sociales convencionales en otras secciones; este cambio solo afecta al bloque bajo "O contacta directamente".
- No se añadirán nuevas dependencias de iconos; se usarán los ya presentes (`lucide-react`) más SVGs inline para X y TikTok.