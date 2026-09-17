# Séllalo con Bright

Landing page en español para cotizar servicios de limpieza, preparación y sellado de techos de BrightPanel en Puerto Rico.

El repositorio contiene la página completa, sus imágenes, el logotipo, la animación del rodillo, los iconos, las tipografías, la configuración de Vercel y una verificación automática de archivos.

## Requisitos

- Node.js 20 o posterior
- npm 10 o posterior

No requiere base de datos ni variables de ambiente para reproducir la versión actual.

## Descargar y abrir localmente

```bash
git clone https://github.com/jaysonjsierra-eng/sellalo-con-bright.git
cd sellalo-con-bright
npm install
npm run build
npm run dev
```

Luego visita `http://localhost:4173`.

## Publicar exactamente igual en Vercel

### Desde el panel de Vercel

1. Crea un proyecto nuevo e importa este repositorio de GitHub.
2. Deja `Root Directory` en `.`.
3. Usa `Other` como framework.
4. Usa `npm run build` como Build Command.
5. Usa `dist` como Output Directory.
6. Publica el proyecto.

El archivo `vercel.json` ya incluye esa configuración, por lo que Vercel normalmente completa los valores automáticamente.

### Desde la terminal

```bash
npm install
npm run build
npx vercel
npx vercel --prod
```

La primera ejecución de Vercel solicitará iniciar sesión y seleccionar la cuenta o equipo donde se publicará.

## Estructura

```text
dist/
  index.html              Página, estilos y animaciones
  assets/                 Imágenes, logotipo, iconos y tipografías
scripts/
  build.mjs               Prepara dependencias visuales locales
  check.mjs               Comprueba que no falten archivos
  serve.mjs               Servidor local sin dependencias adicionales
.openai/hosting.json      Configuración del hosting original
package.json              Versiones exactas y comandos del proyecto
vercel.json               Configuración de publicación en Vercel
```

## Cómo editarlo

- Contenido, estilos y animaciones: `dist/index.html`
- Imágenes y logotipo: `dist/assets/`
- Colores principales: variables CSS al inicio de `dist/index.html`
- Campos del formulario: sección `#cotiza` dentro de `dist/index.html`

Después de editar, ejecuta:

```bash
npm run build
npm run check
```

## Formulario de contacto

La versión actual valida los campos y muestra una confirmación en el navegador. No envía ni almacena contactos en un servicio externo. Para recibir solicitudes reales, debe conectarse el formulario a un correo, CRM, formulario administrado o función de servidor.

## Dependencias visuales

Las versiones están fijadas en `package.json`. Durante `npm run build`, los recursos necesarios se copian dentro de `dist/assets/`; la página publicada no depende de Google Fonts ni de un CDN de iconos.

Consulta [NOTICE.md](NOTICE.md) para las atribuciones de terceros.
