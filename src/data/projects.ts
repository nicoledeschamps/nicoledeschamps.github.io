export type Project = {
  slug: string;
  number: string;
  title: string;
  role: string;
  stack: string;
  year: string;
  blurb: string;
  liveUrl: string;
  repoUrl: string;
  /** Path to a silent looping MP4. Leave undefined to fall back to heroImage. */
  heroVideo?: string;
  /** Path to a still image (JPG/PNG/WebP). Leave undefined to fall back to placeholder. */
  heroImage?: string;
};

export const projects: Project[] = [
  {
    slug: "hues-of-saturn",
    number: "01",
    title: "Hues of Saturn",
    role: "Design + Build",
    stack: "Three.js · Vanilla JS",
    year: "2026",
    blurb:
      "An immersive 3D portfolio inviting visitors into my personal orbit — a walk-through gallery, interactive ring of curated work, and a Saturn mark that breathes.",
    liveUrl: "https://nicoledeschamps.github.io/hues-of-saturn/",
    repoUrl: "https://github.com/nicoledeschamps/hues-of-saturn",
    heroVideo: "/media/hos-hero.webm",
    heroImage: "/media/hos-hero.jpg",
  },
  {
    slug: "hues-of-dispositions",
    number: "02",
    title: "Hues of Dispositions",
    role: "Design + Build",
    stack: "p5.js · MediaPipe · WebGL · Web Audio",
    year: "2026",
    blurb:
      "A real-time video effects app — 68 effects, audio sync, hand tracking, blob detection. Built for VJs, dancers, and anyone who wants to play with their camera.",
    liveUrl: "https://nicoledeschamps.github.io/hues-of-dispositions/",
    repoUrl: "https://github.com/nicoledeschamps/hues-of-dispositions",
    heroVideo: "/media/hod-hero.webm",
    heroImage: "/media/hod-hero.jpg",
  },
  {
    slug: "igc-estimator",
    number: "03",
    title: "IGC Estimator",
    role: "Design + Build",
    stack: "React · Vite · Cloudflare Workers",
    year: "2026",
    blurb:
      "A film estimation calculator built for IGC Studio, my dad's interior-design business. Turns decorative-film jobs from spec to quote in a single flow.",
    liveUrl: "#",
    repoUrl: "https://github.com/nicoledeschamps/igc-estimator",
    heroImage: "/media/igc-hero.jpg",
  },
  {
    slug: "cut-it-out",
    number: "04",
    title: "Cut It Out",
    role: "Design + Build",
    stack: "Vanilla JS · SVG · Are.na API",
    year: "2026",
    blurb:
      "A digital collage tool that mimics hand-cut paper — wavy, torn, and burnt edges, lasso masks, floating layers — pulling images live from my Are.na and Cosmos. Built to make moodboards feel like physical things.",
    liveUrl: "https://nicoledeschamps.github.io/cut-it-out/",
    repoUrl: "https://github.com/nicoledeschamps/cut-it-out",
    heroVideo: "/media/cut-it-out-hero.webm",
    heroImage: "/media/cut-it-out-hero.jpg",
  },
];
