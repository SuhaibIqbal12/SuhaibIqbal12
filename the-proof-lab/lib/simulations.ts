export function cosine(a: number[], b: number[]): number {
  if (
    a.length !== b.length ||
    !a.length ||
    ![...a, ...b].every(Number.isFinite)
  )
    return 0;
  const na = Math.hypot(...a),
    nb = Math.hypot(...b);
  return na && nb ? a.reduce((sum, n, i) => sum + n * b[i], 0) / (na * nb) : 0;
}
export const learningDocs = [
  {
    title: "Database field notes",
    question: "Why use a database index?",
    query: [1, 0.2, 0.1],
    chunks: [
      {
        text: "An index helps locate matching rows without scanning every row. It costs storage and adds write maintenance.",
        vector: [0.95, 0.15, 0.1],
      },
      {
        text: "A transaction groups related changes so they commit together or roll back.",
        vector: [0.2, 0.95, 0.1],
      },
      {
        text: "A foreign key connects records and enforces referential integrity.",
        vector: [0.2, 0.3, 0.9],
      },
    ],
  },
  {
    title: "Python field notes",
    question: "What does a Python class define?",
    query: [0.1, 1, 0.2],
    chunks: [
      {
        text: "A class groups state and behavior. Instances hold their own attributes and call shared methods.",
        vector: [0.12, 0.98, 0.2],
      },
      {
        text: "A for loop visits items in an iterable, one at a time.",
        vector: [0.9, 0.1, 0.2],
      },
      {
        text: "A dictionary maps keys to values and supports efficient key lookup.",
        vector: [0.2, 0.25, 0.95],
      },
    ],
  },
];
export function retrieveExample(index: number) {
  const doc = learningDocs[index] ?? learningDocs[0];
  return doc.chunks
    .map((c, i) => ({ ...c, id: i + 1, score: cosine(doc.query, c.vector) }))
    .sort((a, b) => b.score - a.score);
}
export const incidents = [
  {
    id: "water",
    title: "Water damage",
    name: "Alex Example",
    date: "2026-10-12",
    location: "Fictional test apartment",
    description: "A pipe leaked onto a sofa. Nobody was injured.",
    safety: false,
    documents: ["Damage photos", "Repair estimate"],
    received: ["Damage photos"],
  },
  {
    id: "theft",
    title: "Theft · missing facts",
    name: "Sam Example",
    date: "",
    location: "Fictional test garage",
    description: "A bicycle was stolen; no police report is available.",
    safety: false,
    documents: ["Police report", "Proof of ownership"],
    received: [] as string[],
  },
  {
    id: "safety",
    title: "Immediate safety concern",
    name: "Riya Example",
    date: "2026-10-15",
    location: "Fictional test home",
    description: "Water reached an electrical outlet. The situation is unsafe.",
    safety: true,
    documents: ["Damage photos", "Safety assessment"],
    received: [] as string[],
  },
];
export function mockClaim(index: number, addDocuments = false) {
  const i = incidents[index] ?? incidents[0];
  const fields = {
    policyholder_name: i.name,
    policy_number: "DEMO-POLICY-001",
    contact_method: "fictional@example.com",
    date_of_loss: i.date,
    loss_location: i.location,
    loss_description: i.description,
  };
  const missing = Object.entries(fields)
    .filter(([, v]) => !v)
    .map(([k]) => k);
  const checklist = i.documents.map((name) => ({
    name,
    received: addDocuments || i.received.includes(name),
  }));
  const route = i.safety
    ? "emergency_escalation"
    : missing.length
      ? "policy_review"
      : checklist.some((d) => !d.received)
        ? "needs_docs"
        : "ready_for_adjuster";
  return {
    simulation: true,
    fields,
    missing,
    checklist,
    route,
    notice:
      "Fictional deterministic portfolio demonstration. No provider call, coverage determination or insurer submission.",
  };
}
export function detectionStats(total: number, interval: number) {
  if (
    !Number.isInteger(total) ||
    total < 1 ||
    !Number.isInteger(interval) ||
    interval < 1
  )
    throw new Error("Positive integer inputs required");
  const calls = Math.floor(total / interval);
  return { calls, reused: total - calls, reduction: (1 - calls / total) * 100 };
}
export const unknownAnswer =
  "I don't have verified information about that in the portfolio material.";
export const faqs = [
  {
    id: "rag",
    question: "How does AI Tutor’s RAG pipeline work?",
    answer:
      "The backend loads READY chunks owned by the user, validates embedding model and dimensions, and ranks candidates with semantic and lexical signals. It formats retrieved source IDs as model context. Ranking happens in application code over PostgreSQL records; a specialized vector database is not established.",
    href: "/projects/ai-tutor/#architecture",
  },
  {
    id: "claim",
    question: "How is SmartClaimAI different from a chatbot?",
    answer:
      "Its conversation feeds a structured workflow: normalization, typed validation, classification, deterministic evidence and safety checks, then a human-review intake packet. It uses mock policies and does not submit to an insurer. It is adapted from an attributed upstream example.",
    href: "/projects/smartclaim/#architecture",
  },
  {
    id: "vision",
    question: "Why skip detection frames?",
    answer:
      "The source runs YOLO once every three frames and reuses the latest detections in between. Over nine frames that means three detection calls instead of nine: 66.7% fewer calls. It does not prove a matching FPS gain, and cached boxes can become stale.",
    href: "/projects/vision-reality/#architecture",
  },
  {
    id: "backend",
    question: "Which projects demonstrate backend development?",
    answer:
      "AI Tutor includes an Express API, Prisma/PostgreSQL records, indexing jobs and provider services. SmartClaimAI includes FastAPI, WebSocket session handling, Pydantic contracts and deterministic workflow rules.",
    href: "/projects/ai-tutor/",
  },
  {
    id: "tests",
    question: "What was tested in SmartClaimAI?",
    answer:
      "The historical 3 October 2026 audit reports 146 automated tests and 21 runtime checks. They cover controlled state, recovery, media lifecycle and API behavior. Those are not fresh portfolio-build results; actual Gemini Live semantics and physical devices were not verified in that audit.",
    href: "/projects/smartclaim/#evidence",
  },
  {
    id: "learning",
    question: "What am I currently exploring?",
    answer:
      "The owner-approved portfolio brief focuses on Generative AI, retrieval systems, Python backends and computer vision. Current learning priorities are making retrieval quality, validation boundaries and system explanations clearer.",
    href: "/#about",
  },
];
// A closed, deterministic lookup: questions are never instructions and cannot trigger tools or network calls.
export function answerQuestion(input: string) {
  if (input.length > 300)
    return {
      answer: "Please keep your question under 300 characters.",
      href: "",
    };
  const q = input.toLowerCase();
  let item = faqs.find((f) => f.question.toLowerCase() === q);
  if (!item) {
    if (/what.*test|test.*smart|146/.test(q)) item = faqs[4];
    else if (/rag|retriev|tutor/.test(q)) item = faqs[0];
    else if (/claim|chatbot/.test(q)) item = faqs[1];
    else if (/vision|frame|yolo/.test(q)) item = faqs[2];
    else if (/backend/.test(q)) item = faqs[3];
    else if (/learn|explor/.test(q)) item = faqs[5];
  }
  if (
    /salary|award|client|revenue|certif|production|accuracy|ignore|system prompt|secret|key|password|execute|shell/.test(
      q,
    )
  )
    item = undefined;
  return item
    ? { answer: item.answer, href: item.href }
    : { answer: unknownAnswer, href: "" };
}
