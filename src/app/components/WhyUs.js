const reasons = [
  {
    icon: "bolt",
    title: "Fast Turnaround",
    description: "Most projects launch in 2-4 weeks. No unnecessary delays.",
  },
  {
    icon: "payments",
    title: "Transparent Pricing",
    description: "Fixed quotes. No hidden costs. Pay in milestones.",
  },
  {
    icon: "track_changes",
    title: "Business-First Approach",
    description:
      "We think about your customers and conversions - not just code.",
  },
  {
    icon: "smartphone",
    title: "Mobile-First Always",
    description:
      "Every site works beautifully on all devices and screen sizes.",
  },
  {
    icon: "lock",
    title: "Secure & Scalable",
    description: "Built with security best practices and room to grow.",
  },
  {
    icon: "handshake",
    title: "Full Ownership",
    description: "You own 100% of your code, design, and hosting.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="section">
      <div className="container">
        <div className="centered reveal">
          <p className="section-label">Why Trenquix</p>
          <h2 className="section-title">
            The Smart Choice for{" "}
            <span className="text-gradient">Growing Businesses</span>
          </h2>
        </div>

        <div className="why-grid">
          {reasons.map((reason) => (
            <article key={reason.title} className="card why-card reveal">
              <span className="service-icon-wrap" aria-hidden="true">
                <span className="material-symbols-outlined">{reason.icon}</span>
              </span>
              <div>
                <h3 className="service-title">{reason.title}</h3>
                <p className="service-desc">{reason.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
