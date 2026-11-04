"use client";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
const nodes = [
  {
    label: "INPUT",
    title: "Start with the real problem.",
    detail:
      "A question, document or camera frame gives the system something concrete to work with.",
    input: "A person’s question, file or camera frame",
    output: "Raw data with a clear task",
    x: 10,
    y: 16,
  },
  {
    label: "PROCESS",
    title: "Make the input usable.",
    detail:
      "Parse text, normalize fields or prepare an image before running the next step.",
    input: "Raw text, media or structured fields",
    output: "Chunks, clean fields or a prepared frame",
    x: 63,
    y: 12,
  },
  {
    label: "RETRIEVE / REASON",
    title: "Find context. Decide what matters.",
    detail:
      "Find relevant evidence or run a model within the task’s boundaries.",
    input: "Prepared data and the user’s question",
    output: "Candidate evidence or a model response",
    x: 37,
    y: 43,
  },
  {
    label: "VALIDATE",
    title: "Give intelligence a boundary.",
    detail:
      "Check types, required facts and deterministic rules before returning a result.",
    input: "Candidate result and application rules",
    output: "A checked result or explicit missing information",
    x: 8,
    y: 72,
  },
  {
    label: "OUTPUT",
    title: "Return something people can use.",
    detail:
      "Make the answer, packet or rendered frame understandable—with its sources and limitations.",
    input: "Validated state and supporting evidence",
    output: "A grounded answer, review packet or rendered frame",
    x: 65,
    y: 75,
  },
];
export default function HeroSystem() {
  const [active, setActive] = useState(2);
  return (
    <div className="hero-system">
      <div className="system-top mono">
        <span>
          <i /> SYSTEM STUDY / 001
        </span>
        <span>SELECT A STAGE</span>
      </div>
      <div className="system-map">
        <svg
          viewBox="0 0 500 320"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            className="map-edge"
            d="M75 65 H360 V155 H235 M235 155 H75 V250 H365 M235 155 V250 H365"
          />
          <circle className="orbit" cx="250" cy="160" r="112" />
          <circle className="orbit" cx="250" cy="160" r="75" />
        </svg>
        {nodes.map((n, i) => (
          <button
            key={n.label}
            className={`system-node node-${i} ${active === i ? "active" : ""}`}
            style={{ left: `${n.x}%`, top: `${n.y}%` }}
            onMouseEnter={() => setActive(i)}
            onFocus={() => setActive(i)}
            onClick={() => setActive(i)}
            aria-pressed={active === i}
          >
            <span className="node-number">0{i + 1}</span>
            <span>{n.label}</span>
            <i />
          </button>
        ))}
        <span className="map-coordinate mono">
          x: evidence
          <br />
          y: intention
        </span>
      </div>
      <div className="system-caption" aria-live="polite">
        <span className="mono orange">
          0{active + 1} / {nodes[active].label}
        </span>
        <h3>{nodes[active].title}</h3>
        <p>{nodes[active].detail}</p>
        <dl className="system-io">
          <div>
            <dt>INPUT</dt>
            <dd>{nodes[active].input}</dd>
          </div>
          <div>
            <dt>OUTPUT</dt>
            <dd>{nodes[active].output}</dd>
          </div>
        </dl>
        <ArrowUpRight size={19} />
      </div>
      <div className="system-bottom mono">
        A CONCEPTUAL AI APPLICATION<span>HOVER · TAP · TAB</span>
      </div>
    </div>
  );
}
