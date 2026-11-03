"use client";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
const nodes = [
  {
    label: "INPUT",
    title: "Start with the real problem.",
    detail:
      "A question, document or camera frame gives the application something concrete to work with.",
    x: 10,
    y: 16,
  },
  {
    label: "PROCESS",
    title: "Make the input usable.",
    detail:
      "Parse text, normalize fields or prepare a frame before passing it through the system.",
    x: 63,
    y: 12,
  },
  {
    label: "RETRIEVE / REASON",
    title: "Find context. Decide what matters.",
    detail:
      "Retrieve relevant evidence or run a model. Keep assumptions visible and outputs bounded.",
    x: 37,
    y: 43,
  },
  {
    label: "VALIDATE",
    title: "Give intelligence a boundary.",
    detail:
      "Check types, missing facts and deterministic rules. A plausible response is not enough.",
    x: 8,
    y: 72,
  },
  {
    label: "OUTPUT",
    title: "Return something useful.",
    detail:
      "A grounded answer, a human-review packet or a rendered frame—with its limitations understood.",
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
        <span>INTERACTIVE</span>
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
        <ArrowUpRight size={19} />
      </div>
      <div className="system-bottom mono">
        A CONCEPTUAL MAP OF AN AI APPLICATION<span>HOVER · TAP · TAB</span>
      </div>
    </div>
  );
}
