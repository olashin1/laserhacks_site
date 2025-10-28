import "../styles/JudgeCTA.css";

export default function JudgeCTA() {
  return (
    <section className="judge-shell">
      <div className="judge-content">
        <h2 className="judge-title">Interested in Being a Judge?</h2>
        <p className="judge-desc">
          We’re looking for industry professionals, founders, engineers,
          designers, and domain experts to help evaluate projects and mentor
          hackers.
        </p>

        <a
          className="judge-button"
          href="https://example.com/judge-signup"
          target="_blank"
          rel="noopener noreferrer"
        >
          Apply to Judge
        </a>

        <p className="judge-note">
          ~ 3–4 hour commitment • Rubrics provided • Food & swag included
        </p>
      </div>
    </section>
  );
}
