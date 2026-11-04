import Link from "next/link";
import { ArrowUpRight, ArrowUp, Github } from "lucide-react";
import { profile } from "@/lib/projects";
import MotionControl from "./MotionControl";
const navigation = [
  ["01", "Home", "/#home"],
  ["02", "Work", "/#work"],
  ["03", "About", "/#about"],
  ["04", "Experience", "/#experience"],
  ["05", "Ask my work", "/#ask"],
  ["06", "Contact", "/#contact"],
];
export function Header() {
  return (
    <header className="site-header">
      <Link href="/" className="brand" aria-label="Suhaib IqbaL home">
        <span className="brand-symbol">
          SI<span>.</span>
        </span>
        <span>
          Suhaib IqbaL<small>AI ENGINEERING / SYSTEMS NOTES</small>
        </span>
      </Link>
      <nav className="desktop-navigation" aria-label="Main navigation">
        {navigation.map(([n, name, href]) => (
          <Link key={href} href={href}>
            <span>{n}</span>
            {name}
          </Link>
        ))}
      </nav>
      <details className="mobile-navigation">
        <summary>
          Menu <span>↗</span>
        </summary>
        <nav aria-label="Mobile navigation">
          {navigation.map(([n, name, href]) => (
            <Link key={href} href={href}>
              <span>{n}</span>
              {name}
            </Link>
          ))}
        </nav>
      </details>
    </header>
  );
}
export function Footer() {
  return (
    <footer id="contact">
      <div className="section-label">
        <span>06 / OPEN TO WHAT’S NEXT</span>
        <span className="status">
          <i /> EARLY-CAREER OPPORTUNITIES
        </span>
      </div>
      <div className="footer-main">
        <h2>
          Have a problem
          <br />
          worth <em>building for?</em>
        </h2>
        <div>
          <p>
            I’m interested in AI engineering, backend development and
            opportunities where I can contribute and keep learning.
          </p>
          <a className="email-link" href={`mailto:${profile.email}`}>
            {profile.email}
            <ArrowUpRight size={22} />
          </a>
          <div className="contact-actions">
            <a href={profile.github} target="_blank" rel="noreferrer">
              <Github size={15} /> GitHub <ArrowUpRight size={13} />
            </a>
            <ResumeLink />
            {profile.linkedin && (
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn <ArrowUpRight size={13} />
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Suhaib IqbaL</span>
        <span>IDEAS → SYSTEMS → EVIDENCE</span>
        <span className="footer-brand">SI.</span>
        <MotionControl />
        <a href="#top">
          Back to top
          <ArrowUp size={15} />
        </a>
      </div>
    </footer>
  );
}
export function ResumeLink({ className = "" }: { className?: string }) {
  return profile.resume ? (
    <a className={className} href={profile.resume} download>
      Download Resume
      <ArrowUpRight size={16} />
    </a>
  ) : (
    <a
      className={className}
      href={`mailto:${profile.email}?subject=Resume%20request`}
    >
      Request resume
      <ArrowUpRight size={16} />
    </a>
  );
}
