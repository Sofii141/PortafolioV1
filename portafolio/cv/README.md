# CV — Ana Sofia Arango Yanza

CV maestro en LaTeX, versiones español e inglés. Estilo moderno minimalista,
una columna, optimizado para ATS (texto seleccionable, sin imágenes ni tablas).

## Archivos

- `cv-es.tex` — Versión en español
- `cv-en.tex` — Versión en inglés

## Cómo compilar (Overleaf — recomendado)

No tienes LaTeX instalado localmente, así que usa Overleaf (gratis, online):

1. Entra a https://overleaf.com → crea cuenta gratis
2. **New Project → Blank Project** (o "Upload Project")
3. Copia el contenido de `cv-es.tex` y pégalo, o sube el archivo
4. Arriba a la izquierda: **Menu → Settings → Compiler → XeLaTeX**  ⚠️ importante
5. Click **"Recompile"** → te genera el PDF
6. Botón de descarga (flecha hacia abajo) → bajas el PDF
7. Repite con `cv-en.tex`

## Estrategia de uso: CV maestro + versiones a la medida

Estos dos `.tex` son tu **CV maestro** (tienen TODO). Para cada vacante:

1. Duplica el archivo (ej. `cv-es-vacante-X.tex`)
2. Quita lo que no aplique y reordena para poner adelante lo más relevante al puesto
3. Ajusta el "Perfil/Summary" con 1-2 palabras clave de la oferta
4. Compila y envía

Ejemplo:
- Vacante **frontend** → sube React/Next/Angular, baja lo de redes/cybersecurity
- Vacante **IA/ML** → sube AIMO, NVIDIA certs, ponencias; baja .NET/peluquería
- Vacante **backend** → sube Spring Boot/Vigía Cauca, bases de datos

## Personalizar el color de acento

En el preámbulo, línea `\definecolor{accent}{HTML}{C7385A}` — cambia el hex.
`C7385A` es un coral profundo legible. Si quieres más rosa: `E0457B`.

## Pendientes / cosas que actualizar con el tiempo

- Nivel de inglés: actualizar si presentas TOEFL/IELTS/MET
- Vigía Cauca: cuando den el reconocimiento oficial, agregarlo a Honors
- Agregar futuros proyectos (la idea del proyecto de vacaciones)
