# Acomodadores — Asamblea de circuito 2026-2027

Aplicación estática para el equipo del capitán Roy Azofeifa. Sin servidor, compilación, dependencias, analíticas ni formularios de recolección. Los enlaces de WhatsApp y teléfono necesitan una aplicación o conexión adecuada.

## Uso

Abre `index.html`. Elige un turno, busca un hermano y toca su nombre para ver sus áreas. Los botones de área llevan al croquis ampliado. El selector del croquis y el del equipo comparten el horario; seleccionar un horario conserva el área seleccionada. El buscador solo filtra la lista del equipo.

El plano conserva sus proporciones y admite botones de zoom, desplazamiento táctil y barras de desplazamiento. Los círculos señalan el centro de las etiquetas impresas. No delimitan áreas ni indican rutas de evacuación.

**Importante:** las ocho etiquetas A9, A10, A11, A12, A29, A30, A31 y A32 se identificaron visualmente en el plano suministrado de **2025**. `verificado: true` certifica exclusivamente esa correspondencia. La vigencia de esas ubicaciones para **2026 sigue pendiente de confirmación** con el responsable (`vigente2026: false`). Si una posición no está verificada, la interfaz no muestra un marcador ordinario y ofrece contacto con el capitán.

## Archivos

```text
asamblea-acomodadores-2026/
├── index.html
├── css/estilos.css
├── js/
│   ├── datos.js
│   ├── zonas.js
│   └── app.js
├── documentos/
│   ├── CO-23_S.pdf
│   ├── Croquis_Feria_2025.pdf
│   └── DC-85_S_AC_11-2026.pdf
├── imagenes/
│   ├── portada.jpg
│   └── croquis.webp
├── README.md
├── VALIDACION.md
└── .gitignore
```

## Editar nombres, horarios y áreas

En `js/datos.js`, edita la lista `acomodadores`. Mantén teléfonos como cadenas de ocho dígitos sin prefijo; el programa agrega `506` a WhatsApp. `turno` admite `08-12` y `12-16`; conserva el orden de los registros. Para cambiar etiquetas de horario, actualiza también `horarios` en `js/app.js` y los selectores del HTML. `horarioOriginal` conserva la transcripción original de cada turno.

Las áreas se guardan como listas, por ejemplo `areas: ["A9", "A11"]`. No combines dos códigos en una sola cadena. Los totales se calculan desde los registros. No sustituyas celdas vacías por “No”, ni interpretes “Marca en lista” o “E,F.” sin respaldo documental.

## Coordenadas y calibración

`js/zonas.js` contiene el registro separado de posiciones. `x` e `y` son porcentajes respecto a toda la imagen (0–100); el origen es la esquina superior izquierda. Se permiten `null` para posiciones desconocidas. `verificado` controla si se muestra el marcador al usuario. `fuente` documenta la evidencia y `vigente2026` deja constancia de la confirmación del evento.

1. Abre `index.html?calibrar=1#calibracion` (también funciona desde un servidor local). La herramienta no aparece en la navegación normal.
2. Elige un código y toca su posición en el croquis. Otro toque mueve el punto. Todo movimiento lo vuelve provisional (`verificado: false`).
3. Revisa el plano original. Solo activa “Posición verificada” si existe evidencia inequívoca. Los puntos provisionales solo aparecen en este modo de mantenimiento.
4. Copia o exporta el JSON. Para aplicarlo, sustituye el objeto situado después de `const zonas =` en `js/zonas.js`, conservando esa declaración y el punto y coma final. Si falla el portapapeles, usa el cuadro de texto y Ctrl+C.
5. Actualiza `fuente` con el documento y la evidencia correspondientes. No confundas una posición verificada en 2025 con la aprobación para 2026.
6. Guarda el archivo y actualiza GitHub para compartirlo con todos. Los cambios del calibrador viven solo en esa pestaña y se descartan al recargar; no hay backend.

Si reemplazas el plano, revisa todas las coordenadas. La interfaz conserva el aviso de referencia 2025: si recibes un plano nuevo confirmado para 2026, actualiza también los textos en `index.html` y `js/app.js` y el estado del registro. No basta con activar una casilla de posición para confirmar la vigencia del evento.

## Reemplazar PDF e imágenes

Sustituye los archivos en `documentos/` manteniendo sus nombres o cambia todas sus rutas en HTML/JS. Conserva el documento completo. Si cambia el número de páginas, actualiza la biblioteca en `js/app.js`. Para el croquis, reemplaza también `imagenes/croquis.webp` con una imagen completa de buena resolución del mismo plano y recalibra.

La portada utiliza un recorte de la ilustración de la imagen suministrada, sin estirarla. Los textos del programa se presentan como HTML accesible.

## Pruebas locales

Abre directamente `index.html` o ejecuta desde esta carpeta `python -m http.server 8000` y visita `http://localhost:8000`. Prueba Todos (13), primer turno (7), segundo turno (6), búsqueda sin tildes, detalles, áreas por turno, zoom, tres PDF, WhatsApp y calibración. Revisa 360, 768 y 1280 px, teclado y letra aumentada. Consulta `VALIDACION.md` para los resultados de la entrega.

## GitHub Pages

Antes de publicar, resuelve la autorización indicada abajo.

1. Crea un repositorio autorizado y sube **el contenido de esta carpeta**; `index.html` debe quedar en la raíz. No subas el ZIP como único archivo.
2. En GitHub abre Settings → Pages. Selecciona Deploy from a branch, rama `main`, carpeta `/ (root)` y guarda (la disponibilidad depende de tu cuenta).
3. Espera a que GitHub complete la publicación y abre la URL que indique Pages, normalmente `https://usuario.github.io/nombre-repositorio/`.
4. Revisa todos los PDF y las imágenes desde esa URL. Las rutas son relativas, compatibles con un subdirectorio de repositorio.
5. Para actualizar, guarda y sube los archivos modificados a la misma rama.

## Privacidad y autorización de publicación

**Este proyecto incluye nombres, teléfonos personales y documentos que pueden ser internos. No subas archivos internos ni datos personales a una web pública sin autorización.** Una web estática publicada en GitHub Pages puede ser públicamente accesible, incluso cuando el repositorio es privado según la configuración del servicio. `noindex` y una pantalla de contraseña implementada solo en JavaScript **no protegen los archivos**. Usa alojamiento con control de acceso real cuando corresponda y confirma permisos sobre los documentos y la ilustración.

Esta entrega se guardó localmente; no se creó un repositorio ni se publicó el sitio. Los teléfonos de emergencia se reproducen del DC-85 suministrado, sin comprobar su vigencia actual. Verifícalos con la organización antes del evento.
