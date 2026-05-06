// @ts-check
import { defineConfig } from "astro/config";

// In dev, serve at `/` for sanity. In build (GitHub Pages subpath), use `/hues-portfolio`.
// To preview the built site with the subpath: `npm run build && npm run preview`.
const isBuild = process.argv.includes("build");

export default defineConfig({
  site: "https://nicoledeschamps.github.io",
  base: isBuild ? "/hues-portfolio" : "/",
  trailingSlash: "ignore",
});
