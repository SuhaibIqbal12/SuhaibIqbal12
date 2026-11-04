"use client";
import { createContext, useContext, useState, type ReactNode } from "react";
export type Mode = "recruiter" | "technical" | "deep";
const Context = createContext<{
  mode: Mode;
  revision: number;
  setMode: (m: Mode) => void;
}>({
  mode: "recruiter",
  revision: 0,
  setMode: () => {},
});
export function ModeProvider({ children }: { children: ReactNode }) {
  const [selection, setSelection] = useState<{ mode: Mode; revision: number }>({
    mode: "recruiter",
    revision: 0,
  });
  const { mode, revision } = selection;
  const setMode = (next: Mode) =>
    setSelection((previous) => ({
      mode: next,
      revision: previous.revision + 1,
    }));
  return (
    <Context.Provider value={{ mode, revision, setMode }}>
      <div data-mode={mode}>{children}</div>
    </Context.Provider>
  );
}
export const useMode = () => useContext(Context);
export function ModeSwitch() {
  const { mode, setMode } = useMode();
  return (
    <div
      className="mode-switch"
      role="group"
      aria-label="Choose how to explore"
    >
      <span className="mono mode-label">YOUR LENS</span>
      {(
        [
          ["recruiter", "30-second view"],
          ["technical", "Technical"],
          ["deep", "Deep dive"],
        ] as const
      ).map(([value, label]) => (
        <button
          key={value}
          aria-pressed={mode === value}
          onClick={() => setMode(value)}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
