# CV — Ana Sofia Arango

## Cómo compilar

### Opción A — Overleaf (recomendado si no tienes LaTeX local)

1. Entra a https://overleaf.com → New Project → Upload Project
2. Sube `cv-es.tex` (y `cv-en.tex` cuando esté listo)
3. Compilador: **XeLaTeX** (Menu → Settings → Compiler)
4. Click "Recompile" → te genera el PDF

### Opción B — Local (si tienes MiKTeX/TeX Live instalado)

```bash
cd cv
xelatex cv-es.tex
```

El PDF queda como `cv-es.pdf`.

## Archivos

- `cv-es.tex` — Versión en español
- `cv-en.tex` — Versión en inglés (pendiente)

## Estilo

Moderno minimalista, una columna, sin colores chillones. Optimizado para ATS
(Applicant Tracking Systems) — texto seleccionable, sin imágenes, sin tablas.
