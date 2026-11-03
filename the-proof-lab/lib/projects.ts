import evidence from "./evidence.json";
import snippets from "./snippets.json";
export type Component = {
  name: string;
  purpose: string;
  input: string;
  output: string;
  tech: string;
  file: string;
};
export type Project = {
  slug: string;
  number: string;
  name: string;
  category: string;
  summary: string;
  proves: string;
  status: string;
  stack: string[];
  problem: string;
  role: string;
  components: Component[];
  decisions: {
    title: string;
    choice: string;
    tradeoff: string;
    alternative: string;
  }[];
  implementation: string;
  code: string;
  codePath: string;
  evidence: { title: string; detail: string; path: string }[];
  limits: string[];
  next: string[];
  questions: string[];
  live?: string;
  repo: string;
  sha: string;
};
const snapshot = (i: number) => ({
  repo: evidence[i].repo,
  sha: evidence[i].sha,
});
export const projects: Project[] = [
  {
    slug: "ai-tutor",
    live: "https://ai-tutor-workspace.vercel.app/login",
    number: "01",
    name: "Personalized AI Tutor",
    category: "GENERATIVE AI / RETRIEVAL",
    summary: "A learning workspace that starts with your material.",
    proves:
      "Connects document ingestion, evidence retrieval and learning APIs in one application.",
    status: "In development",
    stack: [
      "Next.js",
      "TypeScript",
      "Express",
      "Prisma",
      "PostgreSQL",
      "Gemini",
      "BullMQ",
    ],
    problem:
      "Students move between notes, questions and practice. This project brings document-based tutoring, quizzes, coding practice and study planning into a shared workspace.",
    role: "My project repository documents the frontend and backend implementation. Individual authorship of every module is not independently established by this review; the source links show the system as it exists.",
    components: [
      {
        name: "Study workspace",
        purpose:
          "Present tutoring, sources, practice and saved learning workflows.",
        input: "Student questions and documents",
        output: "API requests and displayed answers",
        tech: "Next.js · TypeScript",
        file: "frontend/src/app/(dashboard)/tutor/page.tsx",
      },
      {
        name: "Express API",
        purpose: "Route authenticated learning requests to services.",
        input: "HTTP requests",
        output: "Service calls",
        tech: "Express · TypeScript",
        file: "src/app.ts",
      },
      {
        name: "Document processing",
        purpose:
          "Extract text, split material, create embeddings and track indexing.",
        input: "Uploaded file or source URL",
        output: "Ready document chunks",
        tech: "BullMQ · Redis",
        file: "src/rag/processing.ts",
      },
      {
        name: "Evidence retrieval",
        purpose:
          "Filter ready user-owned chunks and rank them in application code.",
        input: "Question embedding and candidate chunks",
        output: "Up to five deduplicated sources",
        tech: "Cosine similarity · lexical ranking",
        file: "src/services/rag.service.ts",
      },
      {
        name: "Context + model",
        purpose:
          "Pass formatted evidence to the tutor and configured provider.",
        input: "Question and source context",
        output: "Tutoring response",
        tech: "Gemini · provider fallbacks",
        file: "src/services/tutor.service.ts",
      },
      {
        name: "Learning data",
        purpose: "Store documents, chunks, conversations and learning records.",
        input: "Service reads and writes",
        output: "User-scoped records",
        tech: "Prisma · PostgreSQL",
        file: "prisma/schema.prisma",
      },
    ],
    decisions: [
      {
        title: "Rank evidence in the application",
        choice:
          "After relevance gates, ranking combines 80% cosine similarity and 20% lexical overlap.",
        tradeoff:
          "Easy to inspect, but candidate loading and scoring grow with the collection.",
        alternative:
          "Evaluate indexed vector search once measured scale justifies it.",
      },
      {
        title: "Separate indexing from conversation",
        choice:
          "The repository includes BullMQ queues and a Redis-backed worker.",
        tradeoff:
          "Adds process and queue configuration; hosting needs a deliberate processing strategy.",
        alternative:
          "Bounded inline work for small uploads or a managed job service.",
      },
      {
        title: "Validate embedding compatibility",
        choice:
          "Model and dimension checks reject incompatible vectors; code supports hosted Gemini or local MiniLM embeddings.",
        tradeoff:
          "A model change needs compatible stored vectors and reindexing.",
        alternative: "Version indexes explicitly and migrate collections.",
      },
    ],
    implementation:
      "The service checks ownership and READY status, validates vectors, applies relevance gates, ranks and deduplicates chunks, then formats source IDs alongside text. This is application-level retrieval over PostgreSQL records, not a specialized vector database.",
    code: snippets.tutor,
    codePath: "src/services/rag.service.ts",
    evidence: [
      {
        title: "Source reviewed · 4 Nov 2026",
        detail:
          "Retrieval, embedding module and README inspected at the pinned revision. This is not a fresh end-to-end test of the tutor.",
        path: "src/services/rag.service.ts",
      },
      {
        title: "Existing automated checks",
        detail:
          "RAG evaluation, hosted embedding, provider, reliability and frontend tests exist. Their presence does not establish a current passing result.",
        path: "tests/rag-eval.cjs",
      },
    ],
    limits: [
      "No reproducible baseline was found for an 80% lookup-time improvement; that claim is excluded.",
      "Credentials, PostgreSQL, authentication and indexing configuration affect feature availability.",
      "Candidate loading in application code needs evaluation as the corpus grows.",
      "The README links a hosted dashboard; provider-backed functionality was not revalidated in this audit.",
    ],
    next: [
      "Create an explicit retrieval evaluation set.",
      "Measure indexing latency, retrieval quality and cost.",
      "Verify upload → index → cited answer in a configured deployment.",
    ],
    questions: [
      "Why combine semantic similarity with lexical overlap?",
      "How do dimension checks protect retrieval?",
      "When would a vector index be justified?",
    ],
    ...snapshot(0),
  },
  {
    slug: "smartclaim",
    number: "02",
    name: "SmartClaimAI",
    category: "AGENT WORKFLOWS / VALIDATION",
    summary: "A conversation becomes a structured handoff.",
    proves:
      "Separates probabilistic conversation from typed contracts, evidence state and deterministic routing.",
    status: "Local demo · provider-dependent",
    stack: [
      "Python",
      "FastAPI",
      "Gemini Live",
      "Google ADK",
      "Pydantic",
      "WebSockets",
    ],
    problem:
      "An intake conversation can sound complete while missing critical facts. This project organizes a narrative into validated fields, document requirements and a human-review packet.",
    role: "Adapted from Shubhamsaboo’s awesome-llm-apps insurance example. The repository NOTICE attributes reliability, state handling, media lifecycle, failure recovery, tests and customer-facing changes prepared for my repository. It does not establish sole authorship of the inherited workflow.",
    components: [
      {
        name: "Claimant input",
        purpose: "Collect typed turns and optional voice/camera input.",
        input: "Narrative and original captures",
        output: "Session messages and media",
        tech: "Browser · PCM16 · WebSockets",
        file: "live_demo/app.js",
      },
      {
        name: "Gemini conversation",
        purpose: "Conduct intake and invoke background tools.",
        input: "Conversation context",
        output: "Responses and workflow calls",
        tech: "Gemini Live · FastAPI",
        file: "live_demo/server.py",
      },
      {
        name: "Structured extraction",
        purpose:
          "Normalize the narrative and classify the claim in the ADK graph.",
        input: "Narrative and session context",
        output: "ClaimNarrative and classification",
        tech: "Google ADK · Gemini",
        file: "agent.py",
      },
      {
        name: "Typed validation",
        purpose: "Check required facts and preserve missing information.",
        input: "Normalized fields",
        output: "FieldValidation",
        tech: "Pydantic · Python",
        file: "schemas.py",
      },
      {
        name: "Evidence + rules",
        purpose:
          "Apply mock policy/evidence rules, checklists and safety gates.",
        input: "Facts and registered evidence",
        output: "Checklist and human-review routing",
        tech: "Deterministic business rules",
        file: "policies.py",
      },
      {
        name: "Claim packet",
        purpose:
          "Build a packet with facts, missing fields and an audit trail.",
        input: "Current workflow revision",
        output: "Intake download",
        tech: "FastAPI · memory state",
        file: "live_demo/server.py",
      },
    ],
    decisions: [
      {
        title: "Conversation is not the authority",
        choice:
          "Typed contracts and deterministic gates check extracted state before finalization.",
        tradeoff: "Validation cannot prove real-world extraction accuracy.",
        alternative: "Add human confirmation for uncertain facts.",
      },
      {
        title: "Revision-aware state",
        choice:
          "The audit describes revision counters, shared update tasks and rejection of superseded results.",
        tradeoff: "Cancellation and concurrency increase state complexity.",
        alternative:
          "A durable event log could support replay beyond one process.",
      },
      {
        title: "Track evidence origins",
        choice:
          "Original captures, uploaded evidence and generated illustrations are separate schema categories.",
        tradeoff: "Image analysis does not prove authenticity or coverage.",
        alternative:
          "Integrate external evidence verification only with authorized providers.",
      },
    ],
    implementation:
      "The schema distinguishes available documents from received evidence and stores source turn IDs. The graph normalizes, validates, classifies, applies rules and builds the packet. Finalization requires the current revision. No real insurer receives the packet.",
    code: snippets.claim,
    codePath: "schemas.py",
    evidence: [
      {
        title: "Historical audit · 3 Oct 2026",
        detail:
          "CURRENT_AUDIT.md reports 146 automated tests and 21 runtime checks in that audit environment. These are historical results, not fresh portfolio-build test runs.",
        path: "CURRENT_AUDIT.md",
      },
      {
        title: "Unverified boundary",
        detail:
          "The audit does not verify actual Gemini Live semantics, physical media playback or insurer submission. Additional tests now exist; the historical number is not a current suite total.",
        path: "CURRENT_AUDIT.md",
      },
      {
        title: "Upstream attribution",
        detail:
          "The NOTICE retains origin and derivative-work attribution. A new repository history does not change inherited code provenance.",
        path: "NOTICE",
      },
    ],
    limits: [
      "Mock policy records do not provide live policy verification.",
      "Sessions and finalization acknowledgments are held in memory.",
      "No real insurer integration, coverage decision or submission is established.",
      "Provider behavior and physical devices require separate acceptance testing.",
    ],
    next: [
      "Define ownership and retention before adding durable storage.",
      "Test physical media and provider recovery.",
      "Extend fixtures for ambiguous facts and concurrent corrections.",
    ],
    questions: [
      "What stays deterministic when an LLM is involved?",
      "How do revision counters reject stale results?",
      "Why is available evidence different from received evidence?",
    ],
    ...snapshot(1),
  },
  {
    slug: "vision-reality",
    number: "03",
    name: "Vision-Reality",
    category: "COMPUTER VISION / REAL-TIME",
    summary: "One frame. Several ways to understand it.",
    proves:
      "Coordinates detection, segmentation, gestures and rendering in a modular webcam loop.",
    status: "Desktop prototype · CUDA required",
    stack: [
      "Python",
      "OpenCV",
      "MediaPipe",
      "YOLOv8m",
      "PyTorch",
      "CUDA",
      "NumPy",
    ],
    problem:
      "Real-time visual interactions combine expensive operations. This desktop experiment coordinates detection, gestures, background effects and marker-based AR around one camera stream.",
    role: "My repository contains the desktop pipeline and supporting modules. This case study describes verified code behavior, without inferring individual line-level authorship or independently validating runtime performance.",
    components: [
      {
        name: "Camera frame",
        purpose: "Read a webcam frame and mirror it for interaction.",
        input: "VideoCapture(0)",
        output: "Raw and mirrored frames",
        tech: "Python · OpenCV",
        file: "main.py",
      },
      {
        name: "Detection + cache",
        purpose: "Run YOLO every third frame and reuse the latest detections.",
        input: "Current frame",
        output: "Labels and bounding boxes",
        tech: "YOLOv8m · PyTorch · CUDA",
        file: "vision/yolo_detector.py",
      },
      {
        name: "Segmentation",
        purpose: "Create a person mask for background replacement.",
        input: "RGB frame",
        output: "Processed binary mask",
        tech: "MediaPipe · NumPy",
        file: "main.py",
      },
      {
        name: "Gesture control",
        purpose: "Use hand landmarks and pinch events to switch modes.",
        input: "Hand landmarks",
        output: "PORTAL or FULL mode",
        tech: "MediaPipe · Python",
        file: "vision/gesture.py",
      },
      {
        name: "Marker AR",
        purpose: "Track ArUco corners and transform a perspective overlay.",
        input: "Raw marker corners",
        output: "AR overlay",
        tech: "OpenCV · ArUco",
        file: "ar/ar_renderer.py",
      },
      {
        name: "Rendering",
        purpose: "Composite effects, cached detections and HUD.",
        input: "Frame, mode and cached boxes",
        output: "RealityFrame window",
        tech: "OpenCV · renderer modules",
        file: "main.py",
      },
    ],
    decisions: [
      {
        title: "Detect once every three frames",
        choice: "main.py runs YOLO when frame_counter % 3 == 0.",
        tradeoff:
          "Cached boxes can lag fast-moving objects; the first two frames have none.",
        alternative:
          "Track objects between detections or adapt cadence to motion.",
      },
      {
        title: "Explicit CUDA selection",
        choice: "The detector loads yolov8m.pt and moves the model to cuda.",
        tradeoff:
          "Requires compatible NVIDIA hardware. The HUD CPU label is not a detector fallback.",
        alternative: "Select an available device and benchmark smaller models.",
      },
      {
        title: "Separate visual responsibilities",
        choice:
          "Tracking, gestures, background, AR and rendering use separate modules.",
        tradeoff: "The synchronous main loop still coordinates several states.",
        alternative: "Define tested processing interfaces before adding modes.",
      },
    ],
    implementation:
      "Detection is conditional while rendering reuses cached boxes. Hand tracking and mode-specific effects still run. Fewer YOLO calls do not mean proportionally higher FPS, and this portfolio does not access your camera.",
    code: snippets.vision,
    codePath: "main.py",
    evidence: [
      {
        title: "Source reviewed · 4 Nov 2026",
        detail:
          "The frame loop, CUDA selection and README were inspected. Webcam/GPU inference was not run in this environment.",
        path: "main.py",
      },
      {
        title: "Dependency and test boundary",
        detail:
          "The README notes unpinned dependencies and missing PyTorch/Ultralytics requirements. Marker utilities are not a complete automated pipeline suite.",
        path: "readme.md",
      },
    ],
    limits: [
      "CUDA is hard-coded; automatic CPU fallback is absent.",
      "Camera, lighting, background stability and dependency compatibility affect behavior.",
      "No project recording was available in the inspected repository; portfolio visuals are illustrative.",
      "No reproducible benchmark log was found for the resume’s 20–35 FPS figure; it is excluded.",
    ],
    next: [
      "Configure devices explicitly and pin dependencies.",
      "Benchmark stages with fixed hardware, resolution and scene.",
      "Test gesture transitions and camera failure paths.",
    ],
    questions: [
      "How can cached boxes become stale?",
      "Why do detection-call savings not establish FPS gains?",
      "Which stages would you profile before threading?",
    ],
    ...snapshot(2),
  },
];
export const sourceUrl = (p: Project, path: string) =>
  `https://github.com/SuhaibIqbal12/${p.repo}/blob/${p.sha}/${path}`;
export const repoUrl = (p: Project) =>
  `https://github.com/SuhaibIqbal12/${p.repo}`;
export const profile = {
  name: "Mohammed Suhaib Iqbal",
  github: "https://github.com/SuhaibIqbal12",
  email: "suhaibiqbal961@gmail.com",
  resume: null as string | null,
};
