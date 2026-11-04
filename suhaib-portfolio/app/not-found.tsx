import Link from "next/link";
export default function NotFound() {
  return (
    <main id="main" className="not-found">
      <span className="mono orange">404 / OUTSIDE THE WORKSPACE</span>
      <h1>
        This experiment
        <br />
        isn’t here.
      </h1>
      <Link className="button dark" href="/">
        Back to work →
      </Link>
    </main>
  );
}
