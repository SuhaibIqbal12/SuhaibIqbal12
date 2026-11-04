import Image from "next/image";
import { Braces, Check, ScanLine } from "lucide-react";
export default function ProjectVisual({ kind }: { kind: string }) {
  if (kind === "ai-tutor")
    return (
      <div className="project-art tutor-art tutor-photo">
        <div className="art-label mono">
          PERSONALIZED AI TUTOR<span>GENUINE PUBLIC INTERFACE</span>
        </div>
        <div className="project-browser-frame">
          <div className="browser-frame-bar">
            <i />
            <i />
            <i />
            <span>ai-tutor-workspace.vercel.app</span>
          </div>
          <picture>
            <source
              media="(max-width: 760px)"
              srcSet="/assets/ai-tutor-home-640.webp"
            />
            <Image
              src="/assets/ai-tutor-home-1280.webp"
              width={1280}
              height={879}
              alt="Actual public AI Tutor landing page, showing its learning-workspace introduction. This is not a logged-in dashboard."
              loading="lazy"
              sizes="(max-width:760px) 90vw, 45vw"
            />
          </picture>
        </div>
        <div className="art-foot mono">
          PUBLIC LANDING PAGE · CAPTURED 4 NOV 2026
          <ScanLine size={15} />
        </div>
      </div>
    );
  if (kind === "smartclaim")
    return (
      <div
        className="project-art claim-art"
        role="img"
        aria-label="Original illustrative claim workflow with supplied fields, validation and a human-review packet; not a screenshot"
      >
        <div className="art-label mono">
          CONVERSATION → CLAIM PACKET<span>ILLUSTRATIVE VISUALIZATION</span>
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
            <span>name / incident</span>
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
            <b className="missing">1 ITEM MISSING</b>
          </div>
          <div className="claim-stamp">
            HUMAN REVIEW
            <br />
            <small>NO INSURER SUBMISSION</small>
          </div>
        </div>
        <div className="art-foot mono">
          FICTIONAL WORKFLOW · ORIGINAL CODED ART
          <Check size={17} />
        </div>
      </div>
    );
  return (
    <div className="project-art vision-art">
      <div className="art-label mono">
        FRAME STUDY / 003<span>ILLUSTRATIVE VISUALIZATION</span>
      </div>
      <div
        className="vision-scene"
        role="img"
        aria-label="Illustrative segmentation mask and cached bounding boxes, not real detector output"
      >
        <div className="scene-grid" />
        <div className="wire-object object-one">
          <span>DETECTION REGION</span>
          <div className="segmentation-silhouette" />
          <i />
        </div>
        <div className="wire-object object-two">
          <span>CACHED BOX</span>
          <div />
        </div>
        <span className="crosshair cross-one">+</span>
        <span className="crosshair cross-two">+</span>
        <div className="frame-time mono">
          FRAME 006 <span>● DETECT</span>
        </div>
      </div>
      <div className="art-foot mono">
        FRAME / MASK / GESTURE / RENDER
        <ScanLine size={17} />
      </div>
    </div>
  );
}
