import Link from "next/link";
import { ArrowUpRight, ArrowUp, Github } from "lucide-react";
import { profile } from "@/lib/projects";
export function Header() {
  return (
    <header className="site-header">
      <Link href="/" className="brand" aria-label="The Proof Lab home">
        <span className="brand-symbol">
          p<span>l</span>
          <i />
        </span>
        <span>
          THE PROOF LAB<small>SUHAIB IQBAL / ENGINEERING NOTES</small>
        </span>
      </Link>
      <nav aria-label="Main navigation">
        <Link href="/#work">
          Work <span>03</span>
        </Link>
        <Link href="/#about">About</Link>
        <Link href="/#ask">Ask my work</Link>
        <a className="nav-contact" href="#contact">
          Let’s talk <ArrowUpRight size={15} />
        </a>
      </nav>
    </header>
  );
}
export function Footer() {
  return (
    <footer id="contact">
      <div className="section-label">
        <span>05 / OPEN TO WHAT’S NEXT</span>
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
            {profile.email} <ArrowUpRight size={22} />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 MOHAMMED SUHAIB IQBAL</span>
        <span>IDEAS → SYSTEMS → EVIDENCE</span>
        <a href={profile.github} target="_blank" rel="noreferrer">
          <Github size={15} /> GitHub ↗
        </a>
        <a href="#top">
          Back to top <ArrowUp size={15} />
        </a>
      </div>
    </footer>
  );
}
export function ResumeLink({ className = "" }: { className?: string }) {
  return profile.resume ? (
    <a className={className} href={profile.resume} download>
      Download resume <ArrowUpRight size={16} />
    </a>
  ) : (
    <a
      className={className}
      href={`mailto:${profile.email}?subject=Resume%20request`}
    >
      Request resume <ArrowUpRight size={16} />
    </a>
  );
}
