const testimonials = [
  {
    quote:
      "Trenquix delivered our e-commerce site ahead of schedule. Sales increased 40% in the first month. Highly recommended!",
    name: "Priya Sharma",
    role: "Founder, StyleDen",
  },
  {
    quote:
      "Professional, fast, excellent communication throughout. Our web app handles 10,000+ users without a single issue.",
    name: "Karthik Nair",
    role: "CTO, FinTrack Solutions",
  },
  {
    quote:
      "Best decision we made for our startup. The dashboard saves our team 3 hours every single day.",
    name: "Amrita Roy",
    role: "COO, LogiFlow",
  },
];

function getInitials(name) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="section">
      <div className="container">
        <div className="centered reveal">
          <p className="section-label">Client Stories</p>
          <h2 className="section-title">
            What Our Clients <span className="text-gradient">Say About Us</span>
          </h2>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="card testimonial reveal">
              <div className="stars" aria-label="5 star rating">
                ★★★★★
              </div>
              <p className="quote">“{testimonial.quote}”</p>
              <div className="client-meta">
                <span className="client-avatar">
                  {getInitials(testimonial.name)}
                </span>
                <div>
                  <strong>{testimonial.name}</strong>
                  <div
                    style={{
                      color: "var(--text-secondary)",
                      fontSize: "var(--text-sm)",
                    }}
                  >
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
