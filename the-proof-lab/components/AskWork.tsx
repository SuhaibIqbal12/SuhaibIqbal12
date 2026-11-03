"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, MessageSquare } from "lucide-react";
import { answerQuestion, faqs } from "@/lib/simulations";
export default function AskWork() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<{ answer: string; href: string } | null>(
    null,
  );
  function ask(q: string) {
    setInput(q);
    setResult(answerQuestion(q));
  }
  return (
    <section id="ask" className="ask-section">
      <div>
        <span className="section-label">04 / THE CONVERSATION CONTINUES</span>
        <h2>
          Ask
          <br />
          <em>my work.</em>
        </h2>
        <p>
          Curious about a project? Ask how it works, why a technology was
          chosen, or what I would improve.
        </p>
        <span className="faq-badge mono">
          <MessageSquare size={13} /> GUIDED FAQ · NO LIVE LLM
        </span>
      </div>
      <div className="ask-console">
        <span className="mono console-title">
          A SMALL KNOWLEDGE BASE. CLEAR BOUNDARIES.
        </span>
        <div className="question-list">
          {faqs.map((f) => (
            <button key={f.id} onClick={() => ask(f.question)}>
              {f.question}
              <ArrowUpRight size={16} />
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
          <small>
            {input.length}/300 · Local lookup of approved portfolio notes
          </small>
        </form>
        {result && (
          <div className="faq-answer" role="status">
            <span className="mono orange">FROM THE PORTFOLIO MATERIAL</span>
            <p>{result.answer}</p>
            {result.href && (
              <Link href={result.href}>
                Explore the evidence <ArrowUpRight size={14} />
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
