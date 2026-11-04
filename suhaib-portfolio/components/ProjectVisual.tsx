import Image from "next/image";
import { ScanLine } from "lucide-react";
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
      <div className="project-art claim-art claim-photo">
        <div className="art-label mono">
          SMARTCLAIMAI<span>GENUINE FRONT-PAGE SCREENSHOT</span>
        </div>
        <div className="project-browser-frame">
          <div className="browser-frame-bar">
            <i />
            <i />
            <i />
            <span>SmartClaimAI · demo workspace</span>
          </div>
          <picture>
            <source
              media="(max-width:760px)"
              srcSet="/assets/smartclaim-front-640.webp"
            />
            <Image
              src="/assets/smartclaim-front-1280.webp"
              width={1280}
              height={879}
              alt="Actual SmartClaimAI front page with an empty claim workspace, voice assistant and checklist. Its status reads Backend unavailable."
              loading="lazy"
              sizes="(max-width:760px) 90vw, 45vw"
            />
          </picture>
        </div>
        <div className="art-foot mono">
          REPOSITORY CAPTURE · BACKEND UNAVAILABLE
          <ScanLine size={15} />
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
