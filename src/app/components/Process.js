const processSteps = [
  {
    id: "01",
    icon: "search",
    title: "Discovery & Planning",
    description:
      "We understand your business goals, audience, and technical needs.",
    duration: "1-2 days",
  },
  {
    id: "02",
    icon: "draw",
    title: "Design & Prototype",
    description:
      "Wireframes and visual designs. You approve before code is written.",
    duration: "3-5 days",
  },
  {
    id: "03",
    icon: "code",
    title: "Development & Testing",
    description:
      "Full-stack development with weekly updates and quality assurance.",
    duration: "1-4 weeks",
  },
  {
    id: "04",
    icon: "rocket_launch",
    title: "Launch & Support",
    description:
      "Deployment, domain setup, and 30 days of free post-launch support.",
    duration: "1-2 days",
  },
];

export default function Process() {
  return (
    <section id="process" className="section">
      <div className="container">
        <div className="reveal" style={{ maxWidth: "760px" }}>
          <p className="section-label">Our Process</p>
          <h2 className="section-title">
            From Idea to Launch in{" "}
            <span className="text-gradient">4 Simple Steps</span>
          </h2>
        </div>

        <div className="process-grid">
          {processSteps.map((step) => (
            <article key={step.id} className="card process-card reveal">
              <div className="process-head">
                <span className="step-id">{step.id}</span>
                <span className="duration">{step.duration}</span>
              </div>
              <span className="service-icon-wrap" aria-hidden="true">
                <span className="material-symbols-outlined material-filled">
                  {step.icon}
                </span>
              </span>
              <h3 className="service-title">{step.title}</h3>
              <p className="service-desc">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
