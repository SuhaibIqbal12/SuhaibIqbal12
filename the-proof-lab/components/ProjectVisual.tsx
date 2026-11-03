import {
  Layers,
  FileText,
  ScanLine,
  ArrowDown,
  Check,
  Braces,
} from "lucide-react";
export default function ProjectVisual({ kind }: { kind: string }) {
  if (kind === "ai-tutor")
    return (
      <div
        className="project-art tutor-art"
        role="img"
        aria-label="Illustrative retrieval system"
      >
        <div className="art-label mono">
          KNOWLEDGE → UNDERSTANDING<span>ILLUSTRATIVE</span>
        </div>
        <div className="paper-stack">
          <div className="paper back" />
          <div className="paper middle" />
          <div className="paper front">
            <FileText size={22} />
            <span>YOUR STUDY MATERIAL</span>
            <i />
            <i />
            <i className="selected-line" />
            <i />
            <i className="selected-line" />
            <small>01 / RELEVANT CONTEXT</small>
          </div>
        </div>
        <div className="art-connector">
          <span />
          <ArrowDown size={17} />
        </div>
        <div className="answer-tile">
          <span className="answer-star">✳</span>
          <div>
            Understanding starts
            <br />
            with the right context.
            <small>
              <span>[1]</span> GROUNDED IN YOUR MATERIAL
            </small>
          </div>
        </div>
        <div className="art-foot mono">
          DOCUMENTS / EMBEDDINGS / ANSWERS
          <Layers size={17} />
        </div>
      </div>
    );
  if (kind === "smartclaim")
    return (
      <div
        className="project-art claim-art"
        role="img"
        aria-label="Illustrative structured claim packet"
      >
        <div className="art-label mono">
          NARRATIVE → STRUCTURE<span>ILLUSTRATIVE</span>
        </div>
        <div className="claim-document">
          <div className="claim-document-head">
            <span>
              INTAKE
              <br />
              <b>02—SC</b>
            </span>
            <Braces size={35} />
          </div>
          <div className="claim-line">
            <span>narrative</span>
            <i />
          </div>
          <div className="claim-line">
            <span>validation</span>
            <b>
              <Check size={12} /> STRUCTURED
            </b>
          </div>
          <div className="claim-line">
            <span>evidence</span>
            <i />
          </div>
          <div className="claim-stamp">
            HUMAN REVIEW
            <br />
            <small>NO INSURER SUBMISSION</small>
          </div>
        </div>
        <div className="art-foot mono">
          CONVERSATION WITH GUARDRAILS
          <Check size={17} />
        </div>
      </div>
    );
  return (
    <div
      className="project-art vision-art"
      role="img"
      aria-label="Illustrative computer vision frame, not model output"
    >
      <div className="art-label mono">
        FRAME STUDY / 003<span>ILLUSTRATIVE</span>
      </div>
      <div className="vision-scene">
        <div className="scene-grid" />
        <div className="wire-object object-one">
          <span>REGION A</span>
          <ScanLine size={65} />
          <i />
        </div>
        <div className="wire-object object-two">
          <span>REGION B</span>
          <div />
        </div>
        <span className="crosshair cross-one">+</span>
        <span className="crosshair cross-two">+</span>
        <div className="frame-time mono">
          FRAME 006 <span>● DETECT</span>
        </div>
      </div>
      <div className="art-foot mono">
        DETECT / CACHE / RENDER
        <ScanLine size={17} />
      </div>
    </div>
  );
}
