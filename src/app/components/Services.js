const services = [
  {
    number: "01",
    icon: "language",
    title: "Custom Website Development",
    description:
      "Business websites, landing pages, and portfolios built to convert.",
    features: ["Pixel-perfect design", "Fast loading", "Mobile-first"],
  },
  {
    number: "02",
    icon: "terminal",
    title: "Web Application Development",
    description:
      "Full-stack MERN apps with real-time features and complex business logic.",
    features: ["MongoDB + Express + React + Node", "JWT Auth", "REST APIs"],
  },
  {
    number: "03",
    icon: "shopping_cart",
    title: "E-Commerce Solutions",
    description:
      "Online stores that drive sales - products, payments, and order management.",
    features: ["Payment integration", "Inventory management", "Analytics"],
  },
  {
    number: "04",
    icon: "dashboard",
    title: "Business Dashboard Systems",
    description:
      "Custom admin panels and dashboards to run your business in one place.",
    features: ["Real-time data", "Role-based access", "Exportable reports"],
  },
  {
    number: "05",
    icon: "api",
    title: "API Development & Integration",
    description:
      "Backend APIs and third-party integrations - payment, CRM, email, maps.",
    features: ["RESTful APIs", "Webhooks", "Third-party services"],
  },
  {
    number: "06",
    icon: "support_agent",
    title: "Website Maintenance & Support",
    description:
      "Ongoing support, updates, performance optimization, and security.",
    features: ["24/7 monitoring", "Speed optimization", "Security updates"],
  },
];

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <div className="centered reveal">
          <p className="section-label">What We Offer</p>
          <h2 className="section-title">
            Everything You Need to{" "}
            <span className="text-gradient">Launch & Scale Online</span>
          </h2>
          <p className="section-subtitle">
            From conversion-focused websites to full business platforms,
            Trenquix delivers end-to-end solutions built for growth.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article key={service.number} className="card service-card reveal">
              <span className="service-number">SERVICE {service.number}</span>
              <span className="service-icon-wrap" aria-hidden="true">
                <span className="material-symbols-outlined">
                  {service.icon}
                </span>
              </span>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.description}</p>
              <ul className="feature-list">
                {service.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <a href="#contact" className="learn-link">
                Learn More →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
