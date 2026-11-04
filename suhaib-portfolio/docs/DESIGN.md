# Suhaib IqbaL design system — Version 2

Editorial technology, warm paper and inspectable systems. Retained palette, typography and grid; personal SI. identity, vertical mobile lifecycle, genuine public screenshots and clearly labelled illustrations.

- Palette: porcelain #F8F6F1, graphite #0D1117, steel #A8B0BB, signal orange #F46A45, sage #82988E. Darker orange text preserves readable contrast on paper.
- Type: self-hosted DM Sans for content, Instrument Serif italic for expressive display text, platform monospace for metadata. Font packages carry their open-source licenses.
- Rhythm: 4/8 px base, 20–30 px component padding, 40–80 px section separation. Editorial dividers and asymmetric desktop grids.
- Breakpoints: desktop >1000 px, compact desktop/tablet 761–1000 px, purpose-built mobile ≤760 px.
- Components: site chrome → hero system → work gallery → case-study tabs → architecture inspector → project simulation → evidence notes. Structured project data lives in lib/projects.ts.
- Motion: SVG edge dash flow, short hover/focus transitions; no loading gate or scroll interception. All animation stops under prefers-reduced-motion.
- Page map: /, /projects/ai-tutor/, /projects/smartclaim/, /projects/vision-reality/, /404.html, /robots.txt, /sitemap.xml.
- Visitor modes: overview-first recruiter lens, architecture-first technical lens, implementation-first deep dive. All six case-study views remain reachable in every mode.
- Original artwork: CSS-rendered document stack, intake packet and illustrative frame study. Each is explicitly labelled illustrative; no generated model output is presented as project evidence.

## Research notes

Reviewed public references for principles, not copied layouts:

- https://vercel.com/design/guidelines — keyboard flows, visible focus, interaction sizing.
- https://vercel.com/geist/introduction — disciplined grids and developer-facing typography.
- https://linear.app/features — concise hierarchy and progressive product explanation.
- https://web.dev/articles/vitals — LCP/INP/CLS targets and field measurement boundary.
- Awwwards editorial/creative portfolio search through October 2026. Individual Awwwards case pages were not consistently retrievable, so no claim is made that every named example was interactively reviewed.

Field targets: LCP ≤2.5s, INP ≤200ms, CLS ≤0.1. These are targets, not measured guarantees.
