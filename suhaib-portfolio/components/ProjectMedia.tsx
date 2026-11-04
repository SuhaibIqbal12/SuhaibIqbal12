import Image from "next/image";
export default function ProjectMedia({ slug }: { slug: string }) {
  if (slug === "ai-tutor")
    return (
      <section className="project-media">
        <div className="media-section-heading">
          <h3>The actual public interface.</h3>
          <p>
            Captured from the live application on 4 November 2026. The dashboard
            requires sign-in; these images do not establish that provider-backed
            features work after login.
          </p>
        </div>
        <div className="media-gallery">
          {[
            [
              "home",
              "Public landing page",
              "https://ai-tutor-workspace.vercel.app/",
            ],
            [
              "signin",
              "Public sign-in page",
              "https://ai-tutor-workspace.vercel.app/login",
            ],
          ].map(([kind, title, href]) => (
            <figure key={kind}>
              <picture>
                <source
                  media="(max-width:760px)"
                  srcSet={`/assets/ai-tutor-${kind}-640.webp`}
                />
                <Image
                  src={`/assets/ai-tutor-${kind}-1280.webp`}
                  width={1280}
                  height={879}
                  loading="lazy"
                  sizes="(max-width:760px) 88vw, 40vw"
                  alt={`Genuine screenshot of the AI Tutor ${title.toLowerCase()}; no authenticated student data is shown.`}
                />
              </picture>
              <figcaption>
                <span>{title} · genuine screenshot</span>
                <a href={href} target="_blank" rel="noreferrer">
                  Open source page ↗
                </a>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    );
  if (slug === "vision-reality")
    return (
      <section className="project-media marker-evidence">
        <div>
          <h3>A small piece of real evidence.</h3>
          <p>
            The repository includes this ArUco marker for its augmented-reality
            experiments. No genuine detection recording or screenshot was found;
            the other visual studies are explicitly illustrative.
          </p>
          <a
            href="https://github.com/SuhaibIqbal12/Vision-Reality/blob/cfec8480e317dd51a8bb6664d9afd06d2267bebe/assets/marker_0.png"
            target="_blank"
            rel="noreferrer"
          >
            View the original repository asset ↗
          </a>
        </div>
        <figure>
          <Image
            src="/assets/vision-marker.png"
            width={160}
            height={160}
            alt="Genuine ArUco marker image included in the Vision-Reality repository."
            loading="lazy"
          />
          <figcaption>GENUINE REPOSITORY ASSET</figcaption>
        </figure>
      </section>
    );
  return (
    <section className="project-media private-media-note">
      <h3>Privacy is part of the presentation.</h3>
      <p>
        Project screenshots and source are private. This public case study uses
        the owner-approved summary and an original fictional workflow
        visualization. Private screenshots and implementation files are
        withheld.
      </p>
    </section>
  );
}
