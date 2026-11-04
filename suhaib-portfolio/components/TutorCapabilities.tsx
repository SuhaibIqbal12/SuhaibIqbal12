import { ArrowUpRight } from "lucide-react";
import { type Project, sourceUrl } from "@/lib/projects";
const areas = [
  ["Student dashboard", "frontend/src/app/(dashboard)/dashboard/page.tsx"],
  ["Tutor conversations", "src/services/tutor.service.ts"],
  ["Document ingestion", "src/rag/processing.ts"],
  ["Evidence retrieval", "src/services/rag.service.ts"],
  ["Quizzes", "src/services/quiz.service.ts"],
  ["Coding practice", "src/agents/coding.agent.ts"],
  ["Study planning", "src/agents/planner.agent.ts"],
  ["Learning analytics", "src/agents/analytics.agent.ts"],
];
export default function TutorCapabilities({ project }: { project: Project }) {
  return (
    <section className="tutor-capabilities">
      <span className="mono">LEARNING WORKFLOWS / IN THE REPOSITORY</span>
      <div>
        {areas.map(([title, file]) => (
          <a
            key={file}
            href={sourceUrl(project, file)}
            target="_blank"
            rel="noreferrer"
          >
            <span>{title}</span>
            <ArrowUpRight size={14} />
          </a>
        ))}
      </div>
      <p>
        These areas are represented in the source. Authenticated features and AI
        provider behavior were not revalidated during this portfolio redesign.
      </p>
    </section>
  );
}
