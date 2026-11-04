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
import Skills from "@/components/Skills";
import { ModeSwitch } from "@/components/ModeProvider";
import { ResumeLink } from "@/components/Chrome";
import { projects, profile, repoUrl } from "@/lib/projects";
export default function Home() {
  return (
    <main id="main">
      <section id="home" className="hero hero-v2">
        <div className="hero-copy">
          <div className="hero-eyebrow mono">
            <span className="status">
              <i /> AI ENGINEER INTERN · AI &amp; ML STUDENT
            </span>
            <span>HYDERABAD, INDIA</span>
          </div>
          <h1>
            <span>Building AI</span> <span>systems beyond</span>{" "}
            <em>the model.</em>
          </h1>
          <p className="hero-second">
            Into real applications<span className="orange">.</span>
          </p>
          <p className="hero-introduction">
            I’m <strong>Mohammed Suhaib Iqbal</strong>, an AI &amp; ML student
            and AI Engineer Intern exploring Generative AI, retrieval systems,
            Python backends and computer vision.
          </p>
          <p className="hero-education">
            SR University · B.Tech CSE (AI &amp; ML) · Expected May 2027
          </p>
          <div
            className="hero-capabilities"
            role="group"
            aria-label="Technical focus"
          >
            <span>Generative AI</span>
            <span>Retrieval-Augmented Generation</span>
            <span>Python Backends</span>
            <span>Computer Vision</span>
          </div>
          <div className="hero-actions">
            <Link className="button dark" href="#work">
              Explore My Work
              <ArrowDown size={16} />
            </Link>
            <ResumeLink className="text-button" />
          </div>
          <div className="hero-secondary-links">
            <a href={profile.github} target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
            <a href="#contact">Contact ↗</a>
            <Link href="/projects/ai-tutor/">Start with AI Tutor ↗</Link>
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
            <span>Models are one part. The system is the work.</span>
            <span className="mono">SI. / 2026</span>
          </div>
        </div>
      </section>
      <div className="hero-bottom">
        <span className="mono">PYTHON / GENERATIVE AI / BACKEND / VISION</span>
        <span className="mono">
          EXPLORE THE WORK <ArrowDown size={12} />
        </span>
      </div>
      <section id="work" className="work-section">
        <div className="section-label">
          <span>02 / SELECTED PROJECTS</span>
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
                <div className="project-resource-links">
                  {p.slug === "smartclaim" ? (
                    <span>Private source · public simulation</span>
                  ) : (
                    <a href={repoUrl(p)} target="_blank" rel="noreferrer">
                      GitHub <ArrowUpRight size={12} />
                    </a>
                  )}
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noreferrer">
                      Live entry · sign in <ArrowUpRight size={12} />
                    </a>
                  )}
                </div>
                <div className="technical-only source-peek">
                  <GitBranch size={14} />
                  <span>
                    {p.slug === "smartclaim"
                      ? "PRIVATE SOURCE / OWNER REVIEWED"
                      : `PINNED SOURCE / ${p.sha.slice(0, 7)}`}
                  </span>
                </div>
                <div className="deep-only source-peek">
                  <Code2 size={14} />
                  <span>
                    {p.slug === "smartclaim"
                      ? "TYPED CONTRACTS / PRIVATE IMPLEMENTATION"
                      : p.codePath}
                  </span>
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
          <span>03 / THE PERSON BEHIND THE PIPELINES</span>
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
              Suhaib IqbaL<span>→</span>
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
              My internship adds another perspective: the backend APIs and
              school workflows around an educational platform. I’m still
              building depth. My focus is on explaining the system clearly,
              testing the parts I can control, and being precise about what
              remains unverified.
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
        <div id="experience" className="experience-grid">
          <div>
            <span className="mono orange">04 / EXPERIENCE</span>
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
              <div className="internship-focus">
                <div>
                  <b>Backend engineering</b>
                  <span>FastAPI, PostgreSQL and API workflows</span>
                </div>
                <div>
                  <b>AI capabilities</b>
                  <span>RAG tutoring, semantic search and quiz generation</span>
                </div>
                <div>
                  <b>Educational SaaS</b>
                  <span>Authentication, attendance, fees and scheduling</span>
                </div>
                <div>
                  <b>Computer vision</b>
                  <span>Resume-reported OpenCV attendance work</span>
                </div>
              </div>
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
                <dl className="contribution-status">
                  <div>
                    <dt>Personal work</dt>
                    <dd>
                      Contributions in the listed areas are resume-reported;
                      individual modules were not independently attributed.
                    </dd>
                  </div>
                  <div>
                    <dt>Team work</dt>
                    <dd>
                      Product-team collaboration is resume-reported. Other team
                      members’ work is not attributed to me.
                    </dd>
                  </div>
                  <div>
                    <dt>Platform capabilities</dt>
                    <dd>
                      The named workflows describe the platform area, not a
                      claim that I built the entire codebase.
                    </dd>
                  </div>
                  <div>
                    <dt>In development</dt>
                    <dd>
                      Specific feature-by-feature development status has not
                      been verified for this public portfolio.
                    </dd>
                  </div>
                  <div>
                    <dt>Deployed &amp; tested</dt>
                    <dd>
                      Employer deployment and production results have not been
                      independently verified here.
                    </dd>
                  </div>
                </dl>
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
        <Skills />
        <details className="credentials">
          <summary>
            Education &amp; community
            <span>
              VIEW NOTES <ArrowDown size={15} />
            </span>
          </summary>
          <p>
            B.Tech CSE (AI &amp; ML), SR University · expected May 2027. My
            resume also describes leading a Git/GitHub workshop for CS
            undergraduates and giving AI/ML technical talks about transformer
            architecture.
          </p>
          <p>
            Credential verification links are being collected. Resume-listed
            credentials are available on request.
          </p>
          <ResumeLink className="text-button" />
        </details>
      </section>
      <AskWork />
    </main>
  );
}
