import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight, ArrowRight } from "lucide-react";
import { projects, repoUrl } from "@/lib/projects";
import ProjectVisual from "@/components/ProjectVisual";
import CaseStudy from "@/components/CaseStudy";
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((p) => p.slug === slug);
  return {
    title: p?.name ?? "Project",
    description: p?.proves,
    alternates: { canonical: `/projects/${slug}/` },
  };
}
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = projects.find((p) => p.slug === slug);
  if (!p) notFound();
  const next = projects[(projects.indexOf(p) + 1) % 3];
  return (
    <main id="main" className="case-main">
      <div className="case-topbar">
        <Link href="/#work">
          <ArrowLeft size={15} /> Back to work
        </Link>
        <span className="mono">PROJECT X-RAY / {p.number}</span>
      </div>
      <section className="case-hero">
        <div>
          <span className="mono orange">{p.category}</span>
          <h1>
            {p.name}
            <span className="orange">.</span>
          </h1>
          <p>{p.summary}</p>
          <span className="status">
            <i />
            {p.status}
          </span>
          {p.slug === "smartclaim" ? (
            <span className="private-source-note">
              Private source · public simulation below
            </span>
          ) : (
            <a
              className="text-button"
              href={repoUrl(p)}
              target="_blank"
              rel="noreferrer"
            >
              GitHub source <ArrowUpRight size={15} />
            </a>
          )}
        </div>
        <ProjectVisual kind={p.slug} />
      </section>
      <CaseStudy project={p} />
      <Link className="next-project" href={`/projects/${next.slug}/`}>
        <span>
          <small className="mono">NEXT EXPERIMENT / {next.number}</small>
          <strong>{next.name}</strong>
        </span>
        <ArrowRight size={30} />
      </Link>
    </main>
  );
}
