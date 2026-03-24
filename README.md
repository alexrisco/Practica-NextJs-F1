# Mi Práctica de F1 - Next.js (Temporada 2026)

Soy Álex Risco y este es el proyecto que he desarrollado para mi práctica de Next.js. He decidido enfocarlo en la Fórmula 1 de 2026 aprovechando el cambio de reglamento y los nuevos fichajes que ya conocemos, como Carlos Sainz en Williams o Lewis Hamilton en Ferrari.

El objetivo principal ha sido aplicar los conceptos explicados por Midudev, centrando el trabajo en el rendimiento y en que la interfaz sea intuitiva y rápida.

## Tecnologías utilizadas

Para el desarrollo he seleccionado herramientas actuales que permiten un flujo de trabajo profesional:

* Next.js 15: Utilizando el App Router para gestionar las rutas de forma eficiente.
* Tailwind CSS: Para todo el diseño visual. He apostado por una estética oscura que encaja con la imagen de la competición.
* React Hooks (useState): Fundamental para la lógica del calendario interactivo y el manejo de estados en el frontend.
* Optimización de recursos: He usado el componente Image de Next.js para asegurar que las fotos carguen rápido y no afecten a la experiencia de usuario.

## Estructura de la web

La aplicación cuenta con cinco secciones principales:

1. Inicio: Una landing page con un diseño visual potente y tipografía clara.
2. Pilotos: Galería con la parrilla confirmada para 2026 y efectos visuales al pasar el ratón.
3. Escuderías: Información sobre los equipos y los nuevos motoristas que entran en la categoría.
4. Calendario Interactivo: Una lista de grandes premios donde el usuario puede gestionar el estado de cada carrera.
5. Contacto: Un formulario directo para enviar mensajes o consultas.

## Organización del código

* /app: Contiene toda la lógica de las páginas y el enrutado.
* /public/pilotos: Directorio donde se almacenan las imágenes de los pilotos para su correcta carga.
* layout.tsx: Aquí he configurado el menú de navegación superior de forma fija (sticky) para facilitar el movimiento entre secciones.
* next.config.ts: Configuración necesaria para permitir la carga de imágenes desde servidores externos de forma segura.

## Instalación en local

Si quieres ejecutar el proyecto en tu ordenador, sigue estos pasos:

1. Clona el repositorio: git clone https://github.com/alexrisco/Practica-NextJs-F1.git
2. Instala las dependencias: npm install
3. Inicia el proyecto: npm run dev
4. Abre el navegador en: localhost:3000

---
Proyecto realizado por Álex Risco. Enfocado en el aprendizaje de Next.js y el desarrollo frontend moderno.
