import Link from "next/link";
import {
  ArrowUpRight,
  ArrowDown,
  ArrowRight,
  Code2,
  GitBranch,
  Check,
} from "lucide-react";
import HeroSystem from "@/components/HeroSystem";
import ProjectVisual from "@/components/ProjectVisual";
import AskWork from "@/components/AskWork";
import { ModeSwitch } from "@/components/ModeProvider";
import { ResumeLink } from "@/components/Chrome";
import { projects, profile } from "@/lib/projects";
export default function Home() {
  return (
    <main id="main">
      <section className="hero">
        <div className="hero-copy">
          <div className="hero-eyebrow mono">
            <span className="status">
              <i /> ASPIRING AI ENGINEER
            </span>
            <span>HYDERABAD, INDIA</span>
          </div>
          <h1>
            Building
            <br />
            <em>intelligence</em>
            <br />
            into real
            <br />
            applications<span className="orange">.</span>
          </h1>
          <div className="hero-description">
            <span className="hero-dash" />
            <div>
              <p>
                I’m <strong>Mohammed Suhaib Iqbal.</strong>
                <br />
                AI/ML student working across Generative AI, retrieval systems,
                Python backends and computer vision.
              </p>
              <div className="hero-actions">
                <Link className="button dark" href="#work">
                  Explore my work <ArrowDown size={16} />
                </Link>
                <ResumeLink className="text-button" />
              </div>
              <Link className="hero-quick-project" href="/projects/ai-tutor/">
                Start with Personalized AI Tutor <ArrowUpRight size={12} />
              </Link>
            </div>
          </div>
        </div>
        <div className="hero-right">
          <p className="hero-note mono">
            FROM AI IDEAS TO
            <br />
            SYSTEMS PEOPLE CAN USE.
          </p>
          <HeroSystem />
          <div className="hero-right-foot">
            <span>Curiosity, with an implementation.</span>
            <a href={profile.github} target="_blank" rel="noreferrer">
              GitHub <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </section>
      <div className="hero-bottom">
        <span className="mono">PYTHON / GENERATIVE AI / BACKEND / VISION</span>
        <span className="mono">
          SCROLL TO OPEN THE LAB <ArrowDown size={12} />
        </span>
      </div>
      <section id="work" className="work-section">
        <div className="section-label">
          <span>01 / SELECTED EXPERIMENTS</span>
          <span>2026 — ONGOING</span>
        </div>
        <div className="section-intro">
          <h2>
            Don’t just see the work.
            <br />
            <em>See how it works.</em>
          </h2>
          <div>
            <p>
              Three systems. Different inputs. A shared interest in what happens
              beneath the interface.
            </p>
            <span className="mono xray-label">
              <Code2 size={14} /> PROJECT X-RAY
            </span>
          </div>
        </div>
        <ModeSwitch />
        <div className="mode-explainer">
          <p className="recruiter-only">
            Your 30-second view: the problem, the stack and what each project
            demonstrates.
          </p>
          <p className="technical-only">
            Your technical view: component boundaries, source files, testing and
            trade-offs.
          </p>
          <p className="deep-only">
            Your deep dive: real code, implementation details and questions
            worth asking.
          </p>
        </div>
        <div className="project-grid">
          {projects.map((p, i) => (
            <article key={p.slug} className={`project-card project-${i}`}>
              <Link
                className="project-image-link"
                href={`/projects/${p.slug}/`}
                aria-label={`Open ${p.name} Project X-Ray`}
              >
                <ProjectVisual kind={p.slug} />
                <span className="project-open">
                  <ArrowUpRight size={22} />
                </span>
              </Link>
              <div className="project-copy">
                <div className="project-index mono">
                  <span>
                    {p.number} / {p.category}
                  </span>
                  <span className="status">
                    <i />
                    {i === 0
                      ? "IN DEVELOPMENT"
                      : i === 1
                        ? "LOCAL DEMO"
                        : "PROTOTYPE"}
                  </span>
                </div>
                <h3>
                  <Link href={`/projects/${p.slug}/`}>
                    {p.name} <ArrowUpRight size={25} />
                  </Link>
                </h3>
                <p>{p.summary}</p>
                <div className="project-proof">
                  <span className="mono">WHAT IT DEMONSTRATES</span>
                  <p>{p.proves}</p>
                </div>
                <div className="tags">
                  {p.stack.slice(0, 5).map((s) => (
                    <span key={s}>{s}</span>
                  ))}
                </div>
                <div className="technical-only source-peek">
                  <GitBranch size={14} />
                  <span>PINNED SOURCE / {p.sha.slice(0, 7)}</span>
                </div>
                <div className="deep-only source-peek">
                  <Code2 size={14} />
                  <span>{p.codePath}</span>
                </div>
                <Link className="project-link" href={`/projects/${p.slug}/`}>
                  Open Project X-Ray <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>
        <p className="work-note mono">
          <Check size={13} /> SOURCE-GROUNDED CASE STUDIES · ILLUSTRATIVE DEMOS
          · LIMITATIONS INCLUDED
        </p>
      </section>
      <section id="about" className="about-section">
        <div className="section-label">
          <span>02 / THE PERSON BEHIND THE PIPELINES</span>
          <span>LEARNING IN PUBLIC</span>
        </div>
        <div className="about-grid">
          <div>
            <h2>
              Beyond
              <br />
              <em>the notebook.</em>
            </h2>
            <div className="about-signature">
              Suhaib<span>→</span>
            </div>
          </div>
          <div className="about-story">
            <p className="large-copy">
              I like taking an idea beyond a notebook—and figuring out the APIs,
              data flows and decisions needed to turn it into a working
              application.
            </p>
            <p>
              I’m a Computer Science student specializing in AI and ML at SR
              University. AI Tutor led me into retrieval and learning workflows.
              Vision-Reality let me explore what happens when several vision
              tasks share a camera stream. SmartClaimAI made the boundary
              between a model’s response and validated application state much
              more concrete.
            </p>
            <p>
              I’m still building depth. My focus is on explaining the system
              clearly, testing the parts I can control, and being precise about
              what remains unverified.
            </p>
            <div className="currently">
              <span className="mono orange">CURRENTLY EXPLORING</span>
              <div>
                <span>01</span> Retrieval quality & grounded answers
              </div>
              <div>
                <span>02</span> Python backends & validation workflows
              </div>
              <div>
                <span>03</span> Real-time vision trade-offs
              </div>
            </div>
          </div>
        </div>
        <div className="experience-grid">
          <div>
            <span className="mono orange">IN PRACTICE</span>
            <h3>
              Engineering for
              <br />
              the learning experience.
            </h3>
          </div>
          <div className="timeline">
            <article>
              <div className="timeline-date mono">JUN 2026 — PRESENT*</div>
              <h3>AI Engineer Intern</h3>
              <h4>Flexify Learning / JIAM IT Solutions</h4>
              <p>
                Contributing to an educational SaaS platform, backend APIs and
                AI capabilities. The supplied resume names FastAPI, PostgreSQL,
                Gemini and OpenCV across school and learning workflows.
              </p>
              <details>
                <summary>
                  Contribution and evidence boundary <ArrowDown size={13} />
                </summary>
                <p>
                  The resume describes authentication, attendance, fees,
                  scheduling, RAG tutoring, semantic search, quiz generation and
                  vision-based attendance. These are resume-reported areas of
                  work; a private internship codebase was not audited. Exact
                  individual ownership, team scope, deployment and production
                  results are not independently verified here.
                </p>
              </details>
              <small>
                *Dates and responsibilities from the supplied resume
                screenshots. No private employer materials are published.
              </small>
            </article>
            <article>
              <div className="timeline-date mono">EXPECTED MAY 2027</div>
              <h3>B.Tech CSE (AI & ML)</h3>
              <h4>SR University</h4>
              <p>
                Building a foundation in computer science while exploring AI
                through practical systems.
              </p>
            </article>
          </div>
        </div>
      </section>
      <section className="skills-section">
        <div className="section-label">
          <span>03 / A TOOLKIT WITH CONTEXT</span>
          <span>SKILLS → IMPLEMENTATIONS</span>
        </div>
        <h2>
          Tools earn their place
          <br />
          <em>in the work.</em>
        </h2>
        <div className="skill-rows">
          {[
            {
              name: "Programming & backend",
              tools:
                "Python · TypeScript · SQL · FastAPI · Express · REST APIs · PostgreSQL · Prisma",
              note: "Typed claim contracts and learning-service APIs.",
              href: "/projects/smartclaim/",
            },
            {
              name: "AI engineering",
              tools:
                "LLMs · Gemini · RAG · Embeddings · Agents · Document processing",
              note: "Source ranking, bounded context and workflow orchestration.",
              href: "/projects/ai-tutor/",
            },
            {
              name: "Computer vision",
              tools: "OpenCV · MediaPipe · YOLOv8m · PyTorch · NumPy · CUDA",
              note: "Frame processing, gestures and cached detections.",
              href: "/projects/vision-reality/",
            },
            {
              name: "Developer workflows",
              tools: "Git · GitHub · Repository checks · Documented setup",
              note: "Pinned source links, regression fixtures and engineering audits.",
              href: "/projects/smartclaim/#evidence",
            },
          ].map((row, i) => (
            <Link href={row.href} className="skill-row" key={row.name}>
              <span className="mono">0{i + 1}</span>
              <h3>{row.name}</h3>
              <div>
                <p>{row.tools}</p>
                <small>{row.note}</small>
              </div>
              <ArrowUpRight size={20} />
            </Link>
          ))}
        </div>
        <details className="credentials">
          <summary>
            Education, credentials & community{" "}
            <span>
              VIEW NOTES <ArrowDown size={15} />
            </span>
          </summary>
          <p className="source-caption">
            Credential titles transcribed from the supplied resume; verification
            URLs have not been provided. No verified badge is implied.
          </p>
          <div className="credentials-grid">
            <article>
              <span className="mono">AUG 2026</span>
              <h3>Oracle Agentic AI Foundations Associate</h3>
              <p>1Z0-1157-26 · Resume-listed</p>
            </article>
            <article>
              <span className="mono">AUG 2025</span>
              <h3>Microsoft Certified: Azure AI Fundamentals</h3>
              <p>AI-900 · Resume-listed</p>
            </article>
            <article>
              <span className="mono">NOV 2024</span>
              <h3>Cisco CCNA: Introduction to Networks</h3>
              <p>Resume-listed · Verification link pending</p>
            </article>
            <article>
              <span className="mono">NOV 2025</span>
              <h3>AWS Academy Graduate</h3>
              <p>
                Cloud Developing · Cloud Foundations · Cloud Security Builder ·
                Cloud Web Application Builder
              </p>
            </article>
          </div>
          <p>
            Also listed in the resume: leading a Git/GitHub workshop for CS
            undergraduates and giving AI/ML technical talks explaining
            transformer architecture.
          </p>
        </details>
      </section>
      <AskWork />
    </main>
  );
}
