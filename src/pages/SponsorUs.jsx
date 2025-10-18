import NavBar from "../components/NavBar";
import "../styles/sponsor_us.css";

export default function SponsorUs() {
  return (
    <>
      <NavBar />
      <main className="su-page">
        <div className="su-container">
          <section className="su-hero">
            <h1 className="su-title">Sponsor LaserHacks</h1>
            <p className="su-lead">
              Help empower the next generation of innovators at Irvine Valley
              College. Your support fuels student creativity, learning, and
              collaboration at our annual hackathon.
            </p>
          </section>

          <section className="su-section">
            <div className="su-card">
              <h2>Why Sponsor Us?</h2>
              <ul>
                <li>
                  <strong>Inspire Innovation:</strong> Enable students to build
                  impactful projects.
                </li>
                <li>
                  <strong>Build Visibility:</strong> Connect your brand with a
                  talented, tech-savvy audience.
                </li>
                <li>
                  <strong>Recruit Talent:</strong> Meet passionate developers,
                  designers, and creators.
                </li>
              </ul>
            </div>
          </section>

          <section className="su-section su-center">
            <div className="su-card">
              <h2>Become a Sponsor</h2>
              <p>
                Interested in supporting LaserHacks? Reach out to our
                Sponsorship Team:
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:placeholder@ivc.edu">placeholder@ivc.edu</a>
                <br />
                <strong>Phone:</strong> (123) 456-7890
              </p>
              <p>
                You can also view our full sponsorship packet below for details
                on partnership opportunities.
              </p>
              <a
                href="https://docs.google.com/document/your-sponsorship-packet-link"
                target="_blank"
                rel="noopener noreferrer"
                className="su-btn primary"
              >
                View Sponsorship Packet
              </a>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
