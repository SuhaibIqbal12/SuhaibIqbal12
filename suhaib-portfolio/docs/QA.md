# Version 2 QA — 4 November 2026

## Passed

- Next.js production build generated all routes, including three independent project pages.
- ESLint and strict TypeScript checks passed.
- Deterministic tests cover vector validation, both fictional corpora, question-dependent retrieval, claim completeness/safety priority, frame-call arithmetic, FAQ provenance, instruction rejection and unverified metric/employment questions. See the final command results below and tests/simulations.test.ts.
- Browser flows: six-view Project X-Ray; keyboard Arrow navigation; component inspector; three visitor modes; question/document selection and grounded answer; claim document/missing-fact/emergency routes; 12-versus-4 detection-call comparison; FAQ grouping, provenance and unknown answers; genuine source assets; email/request-resume links.
- The responsive matrix checked four pages at 360, 390, 412, 768, 1024 and 1440 px frame widths: 24 checks, no horizontal overflow. The desktop browser’s scrollbar reduces effective content width by 15 px. Results are in layout-checks.json.
- Automated accessibility: home plus all six views of three projects, 19 scans with zero violations under axe WCAG A/AA tags. Some image/illustration contrast cases require manual review; this is not a full WCAG conformance certificate. Results are in accessibility-results.json.
- The explicit Reduce motion control was activated: decorative edge animation computed to none and scrolling to auto. Native prefers-reduced-motion CSS remains supported; physical OS/browser combinations were not tested.
- The production export checks internal paths, required image attributes, stale display branding and private source leakage. No private SmartClaimAI repository href or source excerpt is present in the current export.
- Genuine images loaded, had nonzero natural widths, descriptive alt text, dimensions and below-the-fold lazy loading. Public screenshots use 640/1280 px WebP. No broken or invented application screenshot was used.
- No application console errors were observed in the exercised flows; unrelated browser-extension diagnostics were excluded.

## Failed initially, then fixed

- The new hero initially inherited a two-column grid on narrow screens. Explicit mobile grid rules fixed it; all 24 layout checks then passed.
- Switching back to Recruiter could restore a previously selected technical tab. A lens-selection revision now resets the view consistently; all three modes were retested.
- An unverified “number of users” question could match a generic RAG keyword. The curated FAQ now rejects unsupported usage/employment questions explicitly, with regression coverage.

## Unverified or blocked

- Canonical resume download: blocked by the missing owner-approved original PDF. The displayed mailto request works; a download was not falsely marked as passing.
- LinkedIn and credential verification: exact source records unavailable; omitted.
- Vercel public deployment: workspace authorization returns 403; no Vercel deployment is claimed until the provider reports success.
- Authenticated AI Tutor workflows, live Gemini/YOLO/device operation and new underlying-project test runs: not performed. Historical project results remain explicitly dated.
- Physical Android/iOS devices, Safari and screen readers: not tested. The tested surface was cloud Chrome.
- Field Core Web Vitals and reliable INP acceptance: not established. The iframe web-vitals experiment varied with automation focus, programmatic scrolling, backgrounding and instrumentation. An early observation showed LCP 140 ms / CLS 0.084; a later observation from the same session showed 27,420 ms / CLS 0.298, with INP unreported. Neither is presented as a stable production score. Raw observations are preserved in performance-observations.json. Fonts were subsequently moved to next/font/local with preload and fallback adjustment; no field-performance pass is assumed from that change.

Targets remain LCP ≤2.5s, INP ≤200ms and CLS ≤0.1, pending reliable deployed measurements. The application does not include the QA harness, axe, web-vitals instrumentation, tracking or captured user data in its production bundle.

## Final command results

| Check                                | Result                                                                     |
| ------------------------------------ | -------------------------------------------------------------------------- |
| Production build                     | Passed; all routes generated                                               |
| ESLint                               | Passed, zero warnings                                                      |
| TypeScript                           | Passed in strict mode                                                      |
| Automated tests                      | 9 passed, 0 failed, 0 skipped                                              |
| Export validation                    | 134 internal paths; 5 image instances checked; 0 problems                  |
| Accessibility                        | 19 view scans; 0 automated violations; affected expanded content rechecked |
| Responsive layout                    | 24 page/width combinations; 0 overflow cases                               |
| Resume download                      | Blocked: canonical original PDF not supplied                               |
| Field Core Web Vitals / reliable INP | Not established                                                            |
| Vercel deployment                    | Blocked by workspace OAuth grant                                           |
