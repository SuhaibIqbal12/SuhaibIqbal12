# Verification — 4 November 2026

## Passed

- Production build: Next.js 16.4.5 static export, all eight generated route entries. All three case-study pages are separate navigable routes.
- TypeScript strict check: passed.
- ESLint: passed with zero warnings in the final run.
- Six automated tests: six passed, zero failed, zero skipped. Covers cosine vector boundaries, fictional retrieval selection, claim completeness, safety routing priority, detection-call arithmetic and FAQ grounding/refusal behavior.
- Browser production checks: hero interaction, project navigation, six X-Ray views, keyboard arrow-tab navigation, architecture selection, all three simulations, visitor lenses, question selection, FAQ source link and unknown-answer behavior.
- Mobile layouts: production pages checked inside 360/390/768 px responsive frames; home and all three architecture views had no horizontal document overflow. Effective content widths include the desktop browser's iframe scrollbar (345/375/753 px).
- Automated accessibility: axe-core WCAG A/AA checks on home plus all six views of each of the three projects. Zero final automated violations in the 18 case-study views and home. Initial contrast and scroll-focus issues were fixed and the affected views rerun. Machine-readable case-study report: accessibility-results.json.
- Export link check: 46 internal paths checked, zero broken paths.
- Source links: pinned revisions and paths checked against repository data. SmartClaimAI is private and links clearly require access. No visibility changes were made.
- Hosted AI Tutor link: reached its sign-in page in the cloud browser. This verifies the entry page, not provider-backed functionality after login.

## Unexecuted / limits

- Field Core Web Vitals and Lighthouse: not measured. LCP/INP/CLS remain targets; asset sizes do not establish field performance.
- Real Android hardware, iOS Safari and screen-reader testing: not performed. Keyboard and responsive checks were run in a cloud Chrome browser.
- Full WCAG conformance is not certified. Axe reports some illustration/gradient contrast cases as manual-review items; the automated pass is not a guarantee of accessibility.
- A live provider-backed portfolio assistant is not configured. The tested, clearly labelled guided FAQ is the working alternative.
- Fresh builds/tests of the underlying AI Tutor, SmartClaimAI and Vision-Reality projects were outside this portfolio build. Historical project audit numbers are clearly dated.
- Canonical resume download awaits the owner's chosen original PDF. Request resume is an actual mailto link, not a fake download.
- Credential verification links and exact LinkedIn destination remain unavailable.
- Vercel publication needs the connection's explicit grant for the owner's workspace. Until provider success is returned, no Vercel deployment is claimed.

## Environment observations and resolved failures

The managed preview launcher passes Vite-style flags. A small documented launcher translates host/port flags for Next dev. This environment's Next development runtime subsequently reported uv_resident_set_memory errors and did not reliably hydrate. Browser QA therefore used the actual production export with the supported static preview, not an assumed dev-server pass.

An initial build caught TypeScript's test import-extension setting; allowImportingTsExtensions fixed it. A package-lock mismatch after adding fonts was repaired before clean installation. These resolved setup failures are not concealed as initial passes.

No camera/microphone permission, paid service, analytics or user data collection was added.
