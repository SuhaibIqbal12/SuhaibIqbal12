import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
const groups = [
  {
    name: "Programming & backend",
    note: "Typed claim contracts, learning-service APIs and relational records.",
    tools: [
      ["Python", "smartclaim"],
      ["SQL", "ai-tutor"],
      ["TypeScript / JavaScript", "ai-tutor"],
      ["FastAPI", "smartclaim"],
      ["Express", "ai-tutor"],
      ["REST APIs", "ai-tutor"],
      ["PostgreSQL", "ai-tutor"],
      ["Prisma", "ai-tutor"],
    ],
  },
  {
    name: "AI engineering",
    note: "Each capability connects to an inspectable workflow or public implementation.",
    tools: [
      ["LLMs", "ai-tutor"],
      ["Gemini integration", "ai-tutor"],
      ["RAG", "ai-tutor"],
      ["Embeddings", "ai-tutor"],
      ["AI agents", "smartclaim"],
      ["Document processing", "ai-tutor"],
      ["Validation workflows", "smartclaim"],
    ],
  },
  {
    name: "Computer vision",
    note: "Frame preparation, hand tracking, masks, cached detections and rendering.",
    tools: [
      ["OpenCV", "vision-reality"],
      ["MediaPipe", "vision-reality"],
      ["YOLOv8m", "vision-reality"],
      ["PyTorch", "vision-reality"],
      ["NumPy", "vision-reality"],
      ["CUDA", "vision-reality"],
    ],
  },
  {
    name: "Developer tools",
    note: "Repository history, documented setup and a checked-in container configuration. No proficiency percentage implied.",
    tools: [
      ["Git", "ai-tutor"],
      ["GitHub", "vision-reality"],
      ["Docker", "ai-tutor"],
    ],
  },
];
export default function Skills() {
  return (
    <div className="skill-rows">
      {groups.map((g, i) => (
        <div className="skill-row" key={g.name}>
          <span className="mono">0{i + 1}</span>
          <h3>{g.name}</h3>
          <div>
            <div className="skill-links">
              {g.tools.map(([tool, slug]) => (
                <Link key={tool} href={`/projects/${slug}/#implementation`}>
                  {tool}
                  <ArrowUpRight size={11} />
                </Link>
              ))}
            </div>
            <small>{g.note}</small>
          </div>
          <ArrowUpRight size={20} />
        </div>
      ))}
    </div>
  );
}
