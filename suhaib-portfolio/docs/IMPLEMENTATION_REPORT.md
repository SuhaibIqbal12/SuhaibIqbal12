# Suhaib IqbaL — Version 2 implementation report

4 November 2026. This is an update of the existing application, not a new template or static mockup.

## Requirement-by-requirement status

| Brief section                    | Implementation                                                                                                                                                                  | Status / boundary                                                                                                                             |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| 01 Rebranding                    | Exact Suhaib IqbaL wordmark; SI. monogram; new metadata, favicon, footer, assistant heading, social card and README                                                             | Implemented. Native hosting retains its previously assigned hostname; that address is not a display brand.                                    |
| 02 Visual identity               | Original graphite/porcelain/steel/orange/sage palette, DM Sans, Instrument Serif italic, editorial grids and restrained motion retained                                         | Implemented                                                                                                                                   |
| 03 Hero                          | Requested primary and secondary headlines, full name, intern/student status, education, capabilities, work/contact/GitHub/resume actions; lifecycle input/output details        | Implemented. Download awaits the approved PDF; working email request shown.                                                                   |
| 04 Real project photos           | Genuine public AI Tutor landing/sign-in captures; genuine public AR marker; private SmartClaimAI images withheld; original labelled visualizations elsewhere                    | Implemented within available evidence; see ASSET_AUDIT.md. No authenticated dashboard or CV-output image was fabricated.                      |
| 05 Project showcases             | Required order; distinct visuals; problem/role/status/stack/source and live-entry information; RAG, claims and frame-cache demos                                                | Implemented. Private-source links removed. No live insurer or browser YOLO claim.                                                             |
| 06 Project X-Ray                 | Six accessible views; component data flows; source excerpts for public projects; private implementation boundary; evidence galleries, limitations and next steps                | Implemented. SmartClaimAI code is withheld as requested; the fictional simulation is the public alternative.                                  |
| 07 Visitor modes                 | Recruiter → Overview, Technical → Architecture, Deep Dive → Implementation; manual views available in all modes                                                                 | Implemented and browser retested after fixing stale mode/view restoration.                                                                    |
| 08 Ask My Work                   | Project filters, readable answers, provenance labels, case-study/public-source links, unknown-answer handling and 300-character bound                                           | Implemented as explicitly labelled GUIDED FAQ · NO LIVE LLM. No API credentials configured or exposed.                                        |
| 09 About                         | Beyond the notebook; project-specific story, internship/backend context and requested current interests                                                                         | Implemented                                                                                                                                   |
| 10 Experience/education          | Internship title, organization, dates, four work categories and explicit personal/team/platform/development/deployment evidence boundaries; SR University and expected May 2027 | Implemented from approved material. CGPA and unverified credential records withheld.                                                          |
| 11 Skills                        | Each major tool links to the project where it appears; no proficiency percentages                                                                                               | Implemented                                                                                                                                   |
| 12 Navigation                    | Home, Work, About, Experience, Ask My Work, Contact; compact mobile menu                                                                                                        | Implemented and keyboard checked                                                                                                              |
| 13 Contact                       | Confirmed email/GitHub, practical contact copy and real resume request                                                                                                          | Implemented. LinkedIn, verified credentials and canonical PDF need owner-supplied records. No phone or fake form.                             |
| 14 Responsive/motion             | Six viewport widths × four pages; touch controls; vertical mobile lifecycle; keyboard tabs; native reduced-motion CSS plus an explicit Reduce motion control                    | 24 layout checks passed; no horizontal overflow. Physical phones were not tested.                                                             |
| 15 Accessibility/performance/SEO | Focus, labels, semantic headings, source alt text, 19 axe scans, optimized responsive WebP, preloaded self-hosted fonts, correct metadata/OG/sitemap/robots                     | Automated accessibility checks passed; manual-review items remain. Performance readings are inconclusive, not a claimed Core Web Vitals pass. |
| 16 Stack/quality                 | Retains Next.js App Router, strict TypeScript, React, Lucide and organized content/components; no unnecessary runtime services                                                  | Implemented. Existing custom CSS retained rather than replacing it solely to add Tailwind.                                                    |
| 17 QA/rollback                   | Build/lint/types/tests; browser flows; image, source/privacy and internal-link checks; separate development branch and prior saved version preserved                            | Executed checks in QA.md. Vercel workspace OAuth access is still blocked.                                                                     |
| 18 Delivery                      | Complete source, updated screenshots, README/setup, asset audit, evidence matrix, machine-readable checks and this report                                                       | Delivered through GitHub and the native hosted review. Vercel public publication awaits its required workspace grant.                         |

## What changed and what was retained

The redesign makes the owner’s personal identity primary, adds real public imagery, expands the RAG question interaction, organizes FAQ answers and sources, maps skills individually, and strengthens privacy boundaries. The original palette, typography direction, routing architecture, six-view case studies, deterministic simulations and provider-free fallback remain.

The original GitHub commit `0f271f691e6bf00e4620db22e0bb18f5cc06ea78` and native saved Version 1 are rollback references. Version 2 was developed on `portfolio/suhaib-iqbal-v2`. No force push or repository-visibility change was used. Historical Version 1 source remains in repository history; the redesign does not purge remote history.

## Verified external destinations

- AI Tutor public landing page and sign-in page loaded in the browser. The dashboard redirected to sign-in; authenticated features were not tested.
- Public AI Tutor and Vision-Reality repositories, pinned source revisions and marker asset were inspected through GitHub.
- The owner’s GitHub profile/source repository is accessible. No private SmartClaimAI source URL is rendered by the export.
- Email is consistent with the supplied resume and connected account records. No LinkedIn destination or canonical original resume PDF was available to verify.

## Items the owner must supply or authorize

1. Choose and provide the single original public resume PDF.
2. Supply the exact LinkedIn destination and verifiable credential records if they should appear.
3. Approve the Vercel connection’s access to the existing workspace; the service currently returns 403 for that scope. Task permission alone does not create the OAuth grant.
4. Approve CGPA publication only if desired; it is currently omitted.

Apart from the explicitly approved SmartClaimAI front-page screenshot, private images, credentials, phone numbers and confidential employer materials are not part of this delivery.

## SmartClaimAI front-page update — 4 November 2026

The owner requested the SmartClaimAI front page in the portfolio. The genuine repository screenshot now appears in the Work showcase, case-study hero and Evidence view. Responsive WebP versions preserve the full interface and its visible Backend unavailable status. This is image evidence, not a live deployment claim. No source code or other private assets were added.
