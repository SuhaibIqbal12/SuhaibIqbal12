"use client";
import { useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
  MessageSquare,
  BookOpen,
} from "lucide-react";
import { answerQuestion, faqs, type GuidedAnswer } from "@/lib/simulations";
const groups = ["All", "AI Tutor", "SmartClaimAI", "Vision-Reality", "General"];
export default function AskWork() {
  const [input, setInput] = useState("");
  const [group, setGroup] = useState("All");
  const [result, setResult] = useState<GuidedAnswer | null>(null);
  function ask(q: string) {
    setInput(q);
    setResult(answerQuestion(q));
  }
  return (
    <section id="ask" className="ask-section">
      <div>
        <span className="section-label">05 / THE CONVERSATION CONTINUES</span>
        <h2>
          Ask
          <br />
          <em>my work.</em>
        </h2>
        <p>
          Curious about a project? Ask how it works, why I chose a technology,
          or what I would improve.
        </p>
        <span className="faq-badge mono">
          <MessageSquare size={13} /> GUIDED FAQ · NO LIVE LLM
        </span>
        <p className="faq-privacy-note">
          Answers come from a small set of approved notes. Your question stays
          in this browser.
        </p>
      </div>
      <div className="ask-console">
        <span className="mono console-title">Suhaib IqbaL / PROJECT NOTES</span>
        <div
          className="faq-groups"
          role="group"
          aria-label="Filter questions by project"
        >
          {groups.map((g) => (
            <button
              key={g}
              aria-pressed={group === g}
              onClick={() => setGroup(g)}
            >
              {g}
            </button>
          ))}
        </div>
        <div className="question-list">
          {faqs
            .filter((f) => group === "All" || f.group === group)
            .map((f) => (
              <button key={f.id} onClick={() => ask(f.question)}>
                <span>
                  <small>{f.group}</small>
                  {f.question}
                </span>
                <ArrowUpRight size={17} />
              </button>
            ))}
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            ask(input);
          }}
        >
          <label htmlFor="question">Or ask a short question</label>
          <div className="question-input">
            <input
              id="question"
              maxLength={300}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="How does the retrieval work?"
              required
            />
            <button aria-label="Find a portfolio answer" type="submit">
              <ArrowRight size={19} />
            </button>
          </div>
          <small>{input.length}/300 · Approved portfolio notes only</small>
        </form>
        {result && (
          <div className="faq-answer" role="status">
            <span className="mono orange">FROM THE PORTFOLIO MATERIAL</span>
            <p>{result.answer}</p>
            <div className="answer-provenance">
              <BookOpen size={14} />
              <span>{result.source}</span>
            </div>
            <div className="answer-links">
              {result.href && (
                <Link href={result.href}>
                  Explore the case study <ArrowUpRight size={14} />
                </Link>
              )}
              {result.sourceHref && (
                <a href={result.sourceHref} target="_blank" rel="noreferrer">
                  Read verified source <ArrowUpRight size={14} />
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
