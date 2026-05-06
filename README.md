# HUES

Professional showcase — the CV-in-website-form for Nicole Deschamps.
Voku/Obys-inspired scroll-hijacked cluster of selected work.

Sibling to [Hues of Saturn](https://nicoledeschamps.github.io/hues-of-saturn/) (personal / creative).

---

## Develop

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # output in dist/
npm run preview    # preview the build
```

## Add / edit projects

All project copy + media references live in `src/data/projects.ts`.
The cluster and meta card are driven directly by that array.

## Add hero media for a project

1. Drop the file into `public/media/`.
   Preferred: silent looping MP4 (5–8s). Fallback: JPG/PNG/WebP.
2. In `src/data/projects.ts`, uncomment the matching line:
   ```ts
   heroVideo: "/media/hos-hero.mp4",
   // or
   heroImage: "/media/hos-hero.jpg",
   ```
3. If neither is set, the thumbnail falls back to a named placeholder.

### Recipe — capture a loop from a live site

```bash
# 1. Record a ~6s screen clip with QuickTime (File → New Screen Recording).
# 2. Convert + trim + compress with ffmpeg:
ffmpeg -i raw.mov -t 6 -an -vf "scale=720:-2" -c:v libx264 -crf 26 \
       -movflags +faststart hos-hero.mp4
```

## Add your resume

Drop `resume.pdf` into `public/`. Linked from the top-nav.

## Deploy (GitHub Pages)

This repo is configured for `https://nicoledeschamps.github.io/hues/`.

1. Create a public GitHub repo named `hues`.
2. Push `main`.
3. In repo → Settings → Pages: **Source = GitHub Actions**.
4. The workflow in `.github/workflows/deploy.yml` builds + deploys on every push to `main`.

To move to a custom domain later: drop `base` from `astro.config.mjs`
and set `site` to your domain.
