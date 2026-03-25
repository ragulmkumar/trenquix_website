const metrics = [
  { number: "30+", label: "Projects Delivered" },
  { number: "5★", label: "Client Rating" },
  { number: "3x", label: "Avg. Traffic Growth" },
];

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-orb indigo" />
      <div className="hero-orb mint" />
      <div className="hero-orb deep" />

      <div className="container hero-grid">
        <div>
          <div className="availability" aria-label="Availability status">
            <span className="dot" />
            Accepting New Clients
          </div>

          <p className="section-label hero-label">Premium Freelance Studio</p>

          <h1 className="hero-title">
            <span className="hero-title-line">We Build Websites</span>
            <span className="hero-title-line">
              That Grow <span className="text-gradient">Your Business</span>
            </span>
          </h1>

          <p className="hero-subtitle">
            Trenquix crafts custom web applications that attract clients,
            automate operations, and scale with your growth.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="btn-primary">
              Start Your Project
              <span className="material-symbols-outlined" aria-hidden="true">
                arrow_forward
              </span>
            </a>
            <a href="#testimonials" className="btn-ghost">
              See Our Work
            </a>
          </div>

          <div className="trust-bar" aria-label="Trust indicators">
            <span>✓ Free consultation</span>
            <span>✓ On-time delivery</span>
            <span>✓ Post-launch support</span>
          </div>

          <div className="hero-metrics">
            {metrics.map((metric) => (
              <div key={metric.label} className="metric-card">
                <span className="metric-number">{metric.number}</span>
                <p className="metric-label">{metric.label}</p>
              </div>
            ))}
          </div>

          <div className="scroll-indicator" aria-hidden="true">
            <span>SCROLL</span>
            <span className="scroll-line" />
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="visual-glow" />
          <div className="orbit-ring" />
          <span className="orbit-dot sm" />
          <span className="orbit-dot md" />
          <span className="orbit-dot lg" />

          <article className="mockup">
            <header className="mockup-top">
              <div className="dots">
                <span className="dot-ui red" />
                <span className="dot-ui yellow" />
                <span className="dot-ui green" />
              </div>
              <div className="url-bar">yourclient.com</div>
            </header>

            <div className="mockup-body">
              <h3 className="mockup-title text-gradient">Your Website</h3>
              <div className="mockup-blocks">
                <div className="mockup-block primary" />
                <div className="mockup-block secondary" />
                <div className="mockup-block" />
              </div>
              <div className="mockup-grid">
                <div className="tile" />
                <div className="tile" />
              </div>
            </div>
          </article>

          <span className="float-badge badge-react">React.js</span>
          <span className="float-badge badge-node">Node.js</span>
          <span className="float-badge badge-mongo">MongoDB</span>
        </div>
      </div>
    </section>
  );
}
