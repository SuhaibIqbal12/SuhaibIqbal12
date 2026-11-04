"use client";
import { useState, useEffect, useRef, type KeyboardEvent } from "react";
import { ArrowUpRight, CheckCircle, GitBranch, ArrowRight } from "lucide-react";
import { type Project, repoUrl, sourceUrl } from "@/lib/projects";
import { useMode, ModeSwitch } from "./ModeProvider";
import Architecture from "./Architecture";
import ProjectMedia from "./ProjectMedia";
import TutorCapabilities from "./TutorCapabilities";
import { RagDemo, ClaimDemo, VisionDemo } from "./Demos";
const tabs = [
  ["overview", "Overview"],
  ["architecture", "Architecture"],
  ["decisions", "Engineering decisions"],
  ["implementation", "Implementation"],
  ["evidence", "Evidence & testing"],
  ["limits", "Limitations & next steps"],
] as const;
export default function CaseStudy({ project: p }: { project: Project }) {
  const { mode, revision } = useMode();
  const initialMode = useRef({ mode, revision });
  const [chosen, setChosen] = useState<{
    mode: string;
    revision: number;
    tab: string;
  } | null>(null);
  const active =
    chosen?.mode === mode && chosen?.revision === revision
      ? chosen.tab
      : mode === "recruiter"
        ? "overview"
        : mode === "technical"
          ? "architecture"
          : "implementation";
  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (tabs.some(([tab]) => tab === id)) {
      /* Synchronize the address-bar view after hydration. */
      setChosen({ ...initialMode.current, tab: id });
      requestAnimationFrame(() =>
        document
          .getElementById(`panel-${id}`)
          ?.scrollIntoView({ block: "start" }),
      );
    }
  }, []);
  function select(tab: string) {
    setChosen({ mode, revision, tab });
    history.replaceState(null, "", `#${tab}`);
  }
  function key(e: KeyboardEvent<HTMLButtonElement>, i: number) {
    if (["ArrowRight", "ArrowLeft", "Home", "End"].includes(e.key)) {
      e.preventDefault();
      const next =
        e.key === "Home"
          ? 0
          : e.key === "End"
            ? 5
            : (i + (e.key === "ArrowRight" ? 1 : -1) + 6) % 6;
      select(tabs[next][0]);
      document.getElementById(`tab-${tabs[next][0]}`)?.focus();
    }
  }
  return (
    <div className="case-body">
      <ModeSwitch />
      <div
        className="case-tabs"
        role="tablist"
        aria-label="Project X-Ray views"
      >
        {tabs.map(([id, label], i) => (
          <button
            id={`tab-${id}`}
            key={id}
            role="tab"
            aria-selected={active === id}
            aria-controls={`panel-${id}`}
            tabIndex={active === id ? 0 : -1}
            onClick={() => select(id)}
            onKeyDown={(e) => key(e, i)}
          >
            <span>0{i + 1}</span>
            {label}
          </button>
        ))}
      </div>
      <div className="case-panels">
        {tabs.map(([id]) => (
          <section
            className="case-panel"
            id={`panel-${id}`}
            key={id}
            role="tabpanel"
            aria-labelledby={`tab-${id}`}
            hidden={active !== id}
            tabIndex={0}
          >
            {id === "overview" ? (
              <>
                <div className="case-section-heading">
                  <span className="mono orange">01 / THE INTENT</span>
                  <h2>{p.summary}</h2>
                </div>
                <div className="overview-grid">
                  <div>
                    <h3>The problem</h3>
                    <p>{p.problem}</p>
                    <h3>What it demonstrates</h3>
                    <p>{p.proves}</p>
                  </div>
                  <aside>
                    <span className="mono">PROJECT STATUS</span>
                    <p className="status">
                      <i />
                      {p.status}
                    </p>
                    <span className="mono">BUILT WITH</span>
                    <div className="tags">
                      {p.stack.map((s) => (
                        <span key={s}>{s}</span>
                      ))}
                    </div>
                  </aside>
                </div>
                {p.slug === "ai-tutor" && <TutorCapabilities project={p} />}
                <div className="role-note">
                  <span className="mono">OWNERSHIP & CONTRIBUTION</span>
                  <p>{p.role}</p>
                </div>
                {p.slug === "smartclaim" && (
                  <p className="source-access-note">
                    The implementation repository is private. Its source,
                    screenshots and internal reports are withheld. The fictional
                    portfolio simulation is available to everyone.
                  </p>
                )}
                <div className="panel-link-row">
                  {p.slug !== "smartclaim" && (
                    <a
                      className="button dark"
                      href={repoUrl(p)}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Explore source <ArrowUpRight size={16} />
                    </a>
                  )}
                  {p.live && (
                    <a
                      className="text-button"
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Hosted workspace · sign in <ArrowUpRight size={16} />
                    </a>
                  )}
                  <button
                    className="text-button"
                    onClick={() => select("architecture")}
                  >
                    See how it works <ArrowRight size={16} />
                  </button>
                </div>
              </>
            ) : null}
            {id === "architecture" ? (
              <>
                <div className="case-section-heading">
                  <span className="mono orange">02 / UNDER THE SURFACE</span>
                  <h2>Follow the data.</h2>
                  <p>
                    Select a component to inspect its responsibility, inputs,
                    outputs and source.
                  </p>
                </div>
                <Architecture project={p} />
                <div className="demo-section">
                  {p.slug === "ai-tutor" ? (
                    <RagDemo />
                  ) : p.slug === "smartclaim" ? (
                    <ClaimDemo />
                  ) : (
                    <VisionDemo />
                  )}
                </div>
              </>
            ) : null}
            {id === "decisions" ? (
              <>
                <div className="case-section-heading">
                  <span className="mono orange">03 / THE TRADE-OFFS</span>
                  <h2>Every choice has a cost.</h2>
                  <p>
                    Design implications inferred from the inspected source. They
                    are not claims about undocumented original author intent.
                  </p>
                </div>
                <div className="decisions">
                  {p.decisions.map((d, i) => (
                    <article key={d.title}>
                      <span className="decision-number">0{i + 1}</span>
                      <div>
                        <h3>{d.title}</h3>
                        <p>{d.choice}</p>
                        <dl>
                          <div>
                            <dt>TRADE-OFF</dt>
                            <dd>{d.tradeoff}</dd>
                          </div>
                          <div>
                            <dt>ALTERNATIVE TO EXPLORE</dt>
                            <dd>{d.alternative}</dd>
                          </div>
                        </dl>
                      </div>
                    </article>
                  ))}
                </div>
              </>
            ) : null}
            {id === "implementation" ? (
              <>
                <div className="case-section-heading">
                  <span className="mono orange">04 / THE IMPLEMENTATION</span>
                  <h2>The source tells the story.</h2>
                  <p>{p.implementation}</p>
                </div>
                {p.slug === "smartclaim" ? (
                  <div className="private-implementation">
                    <span className="mono">PRIVATE IMPLEMENTATION</span>
                    <h3>Show the workflow. Protect the source.</h3>
                    <p>
                      The project’s private code and internal artifacts are not
                      reproduced here. The public, fictional simulation
                      demonstrates supplied fields, validation, evidence checks
                      and routing without contacting a model or insurer.
                    </p>
                    <button
                      className="button dark"
                      onClick={() => select("architecture")}
                    >
                      Explore the simulation <ArrowRight size={16} />
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="code-window">
                      <div className="mono">
                        <span>{p.codePath}</span>
                        <a
                          href={sourceUrl(p, p.codePath)}
                          target="_blank"
                          rel="noreferrer"
                        >
                          View pinned source <ArrowUpRight size={14} />
                        </a>
                      </div>
                      <pre
                        tabIndex={0}
                        role="region"
                        aria-label={`Code excerpt from ${p.codePath}`}
                      >
                        <code>{p.code}</code>
                      </pre>
                    </div>
                    <p className="source-caption">
                      Verbatim excerpt · revision {p.sha.slice(0, 7)} · reviewed
                      4 November 2026
                    </p>
                  </>
                )}
                <div className="deep-note">
                  <span className="mono orange">INTERVIEW FOLLOW-UPS</span>
                  {p.questions.map((q, i) => (
                    <p key={q}>
                      <span>0{i + 1}</span>
                      {q}
                    </p>
                  ))}
                </div>
              </>
            ) : null}
            {id === "evidence" ? (
              <>
                <div className="case-section-heading">
                  <span className="mono orange">05 / CHECK THE CLAIMS</span>
                  <h2>Evidence over adjectives.</h2>
                  <p>
                    Repository inspection, historical reports and fresh
                    portfolio tests are different kinds of evidence.
                  </p>
                </div>
                <div className="evidence-list">
                  {p.evidence.map((e) => (
                    <article key={e.title}>
                      <CheckCircle size={21} />
                      <div>
                        <h3>{e.title}</h3>
                        <p>{e.detail}</p>
                        {p.slug !== "smartclaim" && (
                          <a
                            href={sourceUrl(p, e.path)}
                            target="_blank"
                            rel="noreferrer"
                          >
                            Open evidence: {e.path}
                            <ArrowUpRight size={14} />
                          </a>
                        )}
                      </div>
                    </article>
                  ))}
                </div>
                <ProjectMedia slug={p.slug} />
                <div className="audit-revision">
                  <GitBranch size={16} />
                  <span>
                    {p.slug === "smartclaim" ? (
                      "Private source reviewed; implementation artifacts withheld"
                    ) : (
                      <>
                        Repository snapshot <code>{p.sha}</code>
                      </>
                    )}
                  </span>
                </div>
                <p className="source-caption">
                  The underlying project’s builds, live providers and physical
                  hardware were not rerun as part of this portfolio audit.
                  Portfolio checks are documented separately in docs/QA.md.
                </p>
              </>
            ) : null}
            {id === "limits" ? (
              <>
                <div className="case-section-heading">
                  <span className="mono orange">06 / STILL IN THE LAB</span>
                  <h2>What I would improve.</h2>
                </div>
                <div className="limits-grid">
                  <div>
                    <h3>Known boundaries</h3>
                    {p.limits.map((l, i) => (
                      <p key={l}>
                        <span className="mono">0{i + 1}</span>
                        {l}
                      </p>
                    ))}
                  </div>
                  <div>
                    <h3>Next experiments</h3>
                    {p.next.map((l, i) => (
                      <p key={l}>
                        <span className="mono orange">↗ 0{i + 1}</span>
                        {l}
                      </p>
                    ))}
                  </div>
                </div>
              </>
            ) : null}
          </section>
        ))}
      </div>
      <noscript>
        <p>
          JavaScript enables the X-Ray controls. The overview and repository
          source remain available.
        </p>
      </noscript>
    </div>
  );
}
