"use client";
import { useState } from "react";
import { ArrowRight, Check, FileText, RotateCcw } from "lucide-react";
import {
  learningDocs,
  learningQuestions,
  retrieveExample,
  mockClaim,
  incidents,
  detectionStats,
} from "@/lib/simulations";
export function RagDemo() {
  const [doc, setDoc] = useState(0);
  const [stage, setStage] = useState(0);
  const [question, setQuestion] = useState(0);
  const ranked = retrieveExample(doc, question),
    material = learningDocs[doc];
  const selectedQuestion = learningQuestions[doc][question];
  const stages = [
    "Document",
    "Text chunks",
    "Embeddings",
    "Retrieval",
    "Model context",
    "Grounded answer",
  ];
  return (
    <div className="demo rag-demo">
      <div className="demo-head">
        <span className="mono">TRY THE RAG PIPELINE</span>
        <span className="simulation-label">
          Fictional dataset · deterministic simulation
        </span>
      </div>
      <label htmlFor="learning-doc">Choose a learning document</label>
      <select
        id="learning-doc"
        value={doc}
        onChange={(e) => {
          setDoc(Number(e.target.value));
          setStage(0);
          setQuestion(0);
        }}
      >
        {learningDocs.map((d, i) => (
          <option key={d.title} value={i}>
            {d.title}
          </option>
        ))}
      </select>
      <label htmlFor="sample-question">Choose a sample question</label>
      <select
        id="sample-question"
        value={question}
        onChange={(e) => {
          setQuestion(Number(e.target.value));
          setStage(0);
        }}
      >
        {learningQuestions[doc].map((q, i) => (
          <option key={q.text} value={i}>
            {q.text}
          </option>
        ))}
      </select>
      <div
        className="stage-track"
        role="group"
        aria-label="RAG processing stages"
      >
        {stages.map((s, i) => (
          <button
            key={s}
            aria-pressed={stage === i}
            onClick={() => setStage(i)}
          >
            <small>0{i + 1}</small>
            {s}
          </button>
        ))}
      </div>
      <div className="rag-stage" aria-live="polite">
        <span className="mono orange">
          0{stage + 1} / {stages[stage].toUpperCase()}
        </span>
        {stage === 0 ? (
          <>
            <h3>{material.title}</h3>
            <p>
              A tiny fictional document with three independent paragraphs. No
              uploaded data or live model is used.
            </p>
            <p className="sample-question">“{selectedQuestion.text}”</p>
          </>
        ) : stage === 1 ? (
          <>
            <h3>Split the material into useful pieces.</h3>
            {material.chunks.map((c, i) => (
              <p className="chunk" key={c.text}>
                <b>[{i + 1}]</b> {c.text}
              </p>
            ))}
          </>
        ) : stage === 2 ? (
          <>
            <h3>Represent meaning as direction.</h3>
            <p>
              These hand-authored three-dimensional vectors explain the idea.
              Real repository embeddings use many more dimensions.
            </p>
            <p className="question-vector">
              Question vector:{" "}
              <code>[{selectedQuestion.vector.join(", ")}]</code>
            </p>
            <div className="vector-bars">
              {material.chunks.map((c, i) => (
                <div key={c.text}>
                  <span>CHUNK {i + 1}</span>
                  {c.vector.map((v, j) => (
                    <i key={j} style={{ height: `${v * 80}px` }} />
                  ))}
                  <code>[{c.vector.join(", ")}]</code>
                </div>
              ))}
            </div>
          </>
        ) : stage === 3 ? (
          <>
            <h3>Find the closest direction.</h3>
            <p>
              Cosine similarity compares directions: dot(a,b) / (‖a‖ × ‖b‖).
              Here we calculate it from the illustrative vectors.
            </p>
            {ranked.map((c) => (
              <div className="similarity" key={c.id}>
                <span>Chunk {c.id}</span>
                <div>
                  <i style={{ width: `${c.score * 100}%` }} />
                </div>
                <b>{c.score.toFixed(3)}</b>
              </div>
            ))}
            <small>
              The real service also applies relevance gates and lexical ranking;
              this toy isolates cosine similarity.
            </small>
          </>
        ) : stage === 4 ? (
          <>
            <h3>Give the model bounded context.</h3>
            <pre>{`QUESTION: ${selectedQuestion.text}\n\nSOURCE [${ranked[0].id}]\n${ranked[0].text}\n\nInstruction: answer from the source; cite it.`}</pre>
            <p>
              Only the highest-scoring toy chunk enters this example context.
            </p>
          </>
        ) : (
          <>
            <h3>An answer with an inspectable source.</h3>
            <blockquote>
              {ranked[0].text} <sup>[{ranked[0].id}]</sup>
            </blockquote>
            <p>
              This is a predefined answer assembled from the selected chunk. It
              is not live LLM generation.
            </p>
          </>
        )}
      </div>
      <div className="demo-actions">
        <span className="mono">
          {stage + 1} / {stages.length}
        </span>
        <button onClick={() => setStage((stage + 1) % 6)}>
          {stage === 5 ? "Start again" : "Next stage"}{" "}
          {stage === 5 ? <RotateCcw size={15} /> : <ArrowRight size={15} />}
        </button>
      </div>
    </div>
  );
}
export function ClaimDemo() {
  const [incident, setIncident] = useState(0);
  const [docs, setDocs] = useState(false);
  const packet = mockClaim(incident, docs);
  return (
    <div className="demo">
      <div className="demo-head">
        <span className="mono">CLAIM INTAKE, MADE VISIBLE</span>
        <span className="simulation-label">
          Fictional data · simplified mock rules
        </span>
      </div>
      <label htmlFor="incident">Choose an incident</label>
      <select
        id="incident"
        value={incident}
        onChange={(e) => {
          setIncident(Number(e.target.value));
          setDocs(false);
        }}
      >
        {incidents.map((i, n) => (
          <option key={i.id} value={n}>
            {i.title}
          </option>
        ))}
      </select>
      <p className="sample-question">“{incidents[incident].description}”</p>
      <div className="claim-demo-grid">
        <div>
          <span className="mono orange">01 / SUPPLIED STRUCTURED FIELDS</span>
          <dl className="field-list">
            {Object.entries(packet.fields).map(([k, v]) => (
              <div key={k}>
                <dt>{k}</dt>
                <dd>{v || <span className="missing">Missing</span>}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div>
          <span className="mono orange">02 / REQUIRED FACTS & EVIDENCE</span>
          <p>
            {packet.missing.length
              ? `Missing required field: ${packet.missing.join(", ")}`
              : "All six core fields are supplied."}
          </p>
          <ul className="checklist">
            {packet.checklist.map((d) => (
              <li key={d.name}>
                <span className={d.received ? "check received" : "check"}>
                  {d.received ? <Check size={13} /> : null}
                </span>
                {d.name}
                <small>{d.received ? "Example received" : "Missing"}</small>
              </li>
            ))}
          </ul>
          <label className="toggle-label">
            <input
              type="checkbox"
              checked={docs}
              onChange={(e) => setDocs(e.target.checked)}
            />{" "}
            Mark example documents as received
          </label>
          <small>Changes fictional state only. No file is uploaded.</small>
        </div>
      </div>
      <div className="validation-result" role="status">
        <span className="mono">VALIDATION RESULT</span>
        <strong>
          {packet.missing.length
            ? "Needs required information"
            : "Six core fields supplied"}
        </strong>
        <p>
          Example fields are checked deterministically. Evidence completeness
          and safety routing are evaluated separately.
        </p>
      </div>
      <div className="route-result" aria-live="polite">
        <span className="mono">03 / ROUTING RESULT</span>
        <strong>{packet.route.replaceAll("_", " ")}</strong>
        <p>
          {incident === 2
            ? "A safety signal takes priority over completeness."
            : packet.missing.length
              ? "Missing core facts keep the intake in review."
              : packet.route === "needs_docs"
                ? "Collect the outstanding example documents before handoff."
                : "The fictional packet is ready for human review, not approved for payment."}
        </p>
      </div>
      <details>
        <summary>
          <FileText size={16} /> Inspect the example claim packet
        </summary>
        <pre>{JSON.stringify(packet, null, 2)}</pre>
      </details>
      <p className="demo-disclaimer">
        This demonstrates the shape of a workflow; it does not reimplement all
        repository rules, call Gemini, verify a policy or submit a claim.
      </p>
    </div>
  );
}
export function VisionDemo() {
  const [interval, setInterval] = useState(3);
  const [frame, setFrame] = useState(6);
  const stats = detectionStats(12, interval);
  const detected = frame % interval === 0;
  const cached = Math.floor(frame / interval) * interval;
  return (
    <div className="demo vision-demo">
      <div className="demo-head">
        <span className="mono">THE COST OF A FRAME</span>
        <span className="simulation-label">
          Illustrative timeline · no camera or inference
        </span>
      </div>
      <div className="vision-demo-top">
        <div className="live-frame">
          <div className="scene-grid" />
          <div className="frame-box" style={{ left: `${10 + frame * 3}%` }}>
            <span>
              {detected ? "DETECT" : "CACHED"} / {cached || "NONE"}
            </span>
            <div className="abstract-subject" />
          </div>
          <span className="frame-indicator mono">
            FRAME {String(frame).padStart(3, "0")}
          </span>
        </div>
        <div>
          <h3>
            Run the model less.
            <br />
            Keep rendering.
          </h3>
          <p>
            {frame < interval
              ? "No detection has run yet; the initial cache is empty."
              : detected
                ? "This frame runs a new detection and replaces the cached boxes."
                : `This frame reuses detections from frame ${cached}. The boxes may already be stale.`}
          </p>
          <label htmlFor="cadence">
            Detect every {interval} frame{interval > 1 ? "s" : ""}
          </label>
          <input
            id="cadence"
            type="range"
            min="1"
            max="4"
            value={interval}
            onChange={(e) => setInterval(Number(e.target.value))}
          />
          <small>
            Repository cadence: every 3 frames. Other settings explore the
            trade-off.
          </small>
        </div>
      </div>
      <div className="frame-timeline" role="group" aria-label="Choose a frame">
        {Array.from({ length: 12 }, (_, i) => i + 1).map((n) => (
          <button
            key={n}
            aria-pressed={frame === n}
            className={n % interval === 0 ? "detect" : "cached"}
            onClick={() => setFrame(n)}
          >
            <span>{String(n).padStart(2, "0")}</span>
            <i />
            {n % interval === 0 ? "D" : "C"}
          </button>
        ))}
      </div>
      <div className="frame-legend mono">
        <span>
          <i /> D / NEW DETECTION
        </span>
        <span>
          <i /> C / CACHE REUSE OR EMPTY CACHE
        </span>
      </div>
      <p className="baseline-comparison">
        Every-frame baseline: <strong>12 detection calls</strong>. Current
        interval: <strong>{stats.calls} calls</strong> across 12 input frames.
      </p>
      <div className="demo-stats">
        <div>
          <strong>
            {stats.calls}
            <small>/12</small>
          </strong>
          <span>DETECTION CALLS</span>
        </div>
        <div>
          <strong>
            {stats.reduction.toFixed(1)}
            <small>%</small>
          </strong>
          <span>FEWER CALLS THAN EVERY FRAME</span>
        </div>
      </div>
      <p className="demo-disclaimer">
        Arithmetic, not a benchmark. No measured FPS gain is claimed. Tracking,
        segmentation and rendering still have their own costs.
      </p>
    </div>
  );
}
