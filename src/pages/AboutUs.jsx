import NavBar from "../components/NavBar";
import "../styles/about_us.css";
import ApplyBtn from "../components/ApplyBtn";
export default function AboutUs() {
  return (
    <>
      <NavBar />
      <main className="au-page">
        <div className="au-container">
          <section className="au-hero">
            <img className="hackathon-logo" src="/public/LH_AeroBlue.png" />
            <h1 className="au-title">About LaserHacks</h1>
            <p className="au-lead">
              Join us for LaserHacks, Irvine Valley College's annual hackathon
              where students come together to turn bold ideas into reality.
              Whether you're here to learn something new, build your first app,
              or compete, there’s a place for you. Collaborate with like-minded
              peers, gain mentorship, and bring your vision to life.
            </p>
            <div className="au-chips">
              <span className="au-chip sky">Innovation</span>
              <span className="au-chip emerald">Teamwork</span>
              <span className="au-chip cyan">Learning</span>
              <span className="au-chip teal">Community</span>
              <span className="au-chip indigo">IVC Spirit</span>
            </div>
            <div className="au-cta">
              <ApplyBtn />
            </div>
          </section>

          <section id="mission" className="au-section">
            <div className="au-grid cols-2">
              <div className="au-card">
                <h2>Our Mission</h2>
                <p>
                  LaserHacks empowers students to explore, build, and share. We
                  create a welcoming space to prototype ideas, practice
                  teamwork, and learn new technologies while celebrating the
                  creativity and diversity of the IVC community.
                </p>
              </div>
              <div className="au-card">
                <h3>Why It Matters</h3>
                <div className="au-list">
                  <div className="au-dot">
                    <i className="sky-dot" />
                    <p>Hands-on learning that complements coursework.</p>
                  </div>
                  <div className="au-dot">
                    <i className="emerald-dot" />
                    <p>A supportive network of peers, mentors, and alumni.</p>
                  </div>
                  <div className="au-dot">
                    <i className="cyan-dot" />
                    <p>
                      A launchpad to internships, projects, and leadership at
                      IVC.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="expect" className="au-section">
            <div className="au-grid cols-3">
              <div className="au-card">
                <h3>Build Together</h3>
                <p>
                  Form a team or join one on-site. Designers, developers,
                  beginners, and domain experts are all welcome.
                </p>
              </div>
              <div className="au-card">
                <h3>Learn by Doing</h3>
                <p>
                  Attend bite-sized workshops and office hours. Ship a prototype
                  in hours, not weeks.
                </p>
              </div>
              <div className="au-card">
                <h3>Show and Celebrate</h3>
                <p>
                  Demo your project, receive feedback, and celebrate creativity
                  with the IVC community.
                </p>
              </div>
            </div>
          </section>

          <section id="community" className="au-section">
            <div className="au-card">
              <div className="au-grid cols-2">
                <div>
                  <h2>Community at the Core</h2>
                  <p>
                    LaserHacks is student-centered and inclusive. Beginners pair
                    with experienced builders, and every voice matters. We
                    collaborate with IVC clubs and departments to make the event
                    accessible and welcoming.
                  </p>
                </div>
                <div className="au-badges">
                  <div className="au-badge">
                    <div className="num">60+</div>
                    <div className="lbl">Participants</div>
                  </div>
                  <div className="au-badge">
                    <div className="num">36 hrs</div>
                    <div className="lbl">Hacking</div>
                  </div>

                  <div className="au-badge">
                    <div className="num">30+</div>
                    <div className="lbl">Projects</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="mentorship" className="au-section">
            <div className="au-grid cols-2">
              <div className="au-card">
                <h2>Mentorship & Learning</h2>
                <p>
                  From first-time coders to advanced builders, mentors host
                  mini-workshops and office hours on topics like React, APIs,
                  databases, UI/UX, and pitching. You’ll learn by building and
                  get unblocked fast.
                </p>
              </div>
              <div className="au-card">
                <h3>Tracks & Themes</h3>
                <p>
                  Innovation, community impact, and learning remain at the heart
                  of each challenge. Choose a track that excites you and
                  collaborate toward a polished demo.
                </p>
              </div>
            </div>
          </section>

          <section className="au-section">
            <div className="au-card" style={{ textAlign: "center" }}>
              <h2>Ready to build something bold?</h2>
              <p>
                Bring your idea, your curiosity, and your friends. We’ll bring
                the space, mentors, and energy.
              </p>
              <div className="au-cta" style={{ justifyContent: "center" }}>
                <a href="/" className="au-btn primary">
                  Apply
                </a>
                <a href="sponsor-us" className="au-btn ghost">
                  Become a Sponsor
                </a>
              </div>
            </div>
          </section>

          <footer className="au-footer">
            Hosted at Irvine Valley College • Organized by students • Open to
            all skill levels
          </footer>
        </div>
      </main>
    </>
  );
}
