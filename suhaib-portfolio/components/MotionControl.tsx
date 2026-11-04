"use client";
import { useState } from "react";
export default function MotionControl() {
  const [reduced, setReduced] = useState(false);
  return (
    <button
      className="motion-control"
      aria-label="Reduce motion"
      aria-pressed={reduced}
      title="Disable decorative motion; your system preference is always respected."
      onClick={() => {
        const next = !reduced;
        document.documentElement.dataset.reducedMotion = String(next);
        setReduced(next);
      }}
    >
      {reduced ? "Reduced motion on" : "Reduce motion"}
    </button>
  );
}
