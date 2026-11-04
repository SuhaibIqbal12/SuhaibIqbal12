"use client";
import { useState } from "react";
import { ArrowDown, ExternalLink } from "lucide-react";
import { type Project, sourceUrl } from "@/lib/projects";
const links: Record<string, [number, number][]> = {
  "ai-tutor": [
    [0, 1],
    [1, 2],
    [2, 5],
    [1, 3],
    [5, 3],
    [3, 4],
  ],
  smartclaim: [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
  ],
  "vision-reality": [
    [0, 1],
    [0, 2],
    [0, 3],
    [0, 4],
    [1, 5],
    [2, 5],
    [3, 5],
    [4, 5],
  ],
};
const positions = [
  [25, 17],
  [75, 17],
  [25, 50],
  [75, 50],
  [25, 83],
  [75, 83],
];
export default function Architecture({ project }: { project: Project }) {
  const [selected, setSelected] = useState(0);
  const c = project.components[selected];
  const edges = links[project.slug];
  return (
    <div className="architecture">
      <div className="architecture-map">
        <div
          className="architecture-graph"
          role="group"
          aria-label={`${project.name} components`}
        >
          <svg
            className="architecture-edges"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            {edges.map(([a, b]) => {
              const [x1, y1] = positions[a],
                [x2, y2] = positions[b];
              return (
                <path
                  key={`${a}-${b}`}
                  d={`M${x1} ${y1} C${x1} ${(y1 + y2) / 2},${x2} ${(y1 + y2) / 2},${x2} ${y2}`}
                  className={
                    selected === a || selected === b ? "edge-selected" : ""
                  }
                />
              );
            })}
          </svg>
          {project.components.map((component, i) => (
            <div key={component.name} className="architecture-cell">
              <button
                aria-pressed={selected === i}
                onClick={() => setSelected(i)}
              >
                <span className="mono">0{i + 1}</span>
                <strong>{component.name}</strong>
                <small>{component.tech}</small>
              </button>
            </div>
          ))}
          <p className="mono">COMPONENT MAP · SELECT TO INSPECT</p>
        </div>
        <details className="connection-list">
          <summary>Read the data connections ↓</summary>
          <ul>
            {edges.map(([a, b]) => (
              <li key={`${a}-${b}`}>
                {project.components[a].name} → {project.components[b].name}
              </li>
            ))}
          </ul>
        </details>
      </div>
      <div className="component-detail" aria-live="polite">
        <span className="mono orange">COMPONENT 0{selected + 1}</span>
        <h3>{c.name}</h3>
        <p>{c.purpose}</p>
        <dl>
          <div>
            <dt>INPUT</dt>
            <dd>{c.input}</dd>
          </div>
          <div>
            <dt>OUTPUT</dt>
            <dd>{c.output}</dd>
          </div>
          <div>
            <dt>TECHNOLOGY</dt>
            <dd>{c.tech}</dd>
          </div>
        </dl>
        {project.slug === "smartclaim" ? (
          <small className="private-source-note">
            Private implementation · no public source link
          </small>
        ) : (
          <a href={sourceUrl(project, c.file)} target="_blank" rel="noreferrer">
            {c.file}
            <ExternalLink size={13} />
          </a>
        )}
      </div>
      <div className="architecture-note">
        <ArrowDown size={14} />
        {project.slug === "vision-reality"
          ? "Detection, segmentation, gestures and AR share the frame loop and feed rendering. These are coordinated paths, not a rigid sequential pipeline."
          : project.slug === "ai-tutor"
            ? "Indexing prepares database records; retrieval reads them on a question request, then passes evidence to the tutor. The map simplifies other API/database relationships."
            : "Normalization precedes required-field validation; model-driven classification also occurs before deterministic policy/evidence and safety checks. The map groups these workflow responsibilities."}
      </div>
    </div>
  );
}
