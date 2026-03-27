"use client";

import { useState } from "react";

const initialState = {
  name: "",
  email: "",
  message: "",
};

const contactPoints = [
  {
    icon: "mail",
    label: "Email",
    value: "ragullugar4@gmail.com",
  },
  {
    icon: "call",
    label: "Phone",
    value: "9360787705",
  },
  {
    icon: "schedule",
    label: "Response time",
    value: "within 24 hours",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const nextErrors = {};

    if (!formData.name.trim()) nextErrors.name = "Please enter your name.";

    if (!formData.email.trim()) {
      nextErrors.email = "Please enter your business email.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!formData.message.trim()) {
      nextErrors.message = "Please tell us about your project.";
    }

    return nextErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const nextErrors = validate();

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    try {
      setLoading(true);

      const response = await fetch("https://formspree.io/f/xreobogq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: "New Client Inquiry - Trenquix",
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData(initialState);
        setErrors({});
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Error sending message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="contact-grid">
          <div className="reveal">
            <p className="section-label">Let&apos;s Talk</p>
            <h2 className="section-title">
              Ready to Build Something{" "}
              <span className="text-gradient">Great Together?</span>
            </h2>
            <p className="section-subtitle" style={{ marginLeft: 0 }}>
              Share your name, email, and project details. We&apos;ll review it
              and get back to you within 24 hours.
            </p>

            <div className="contact-points">
              {contactPoints.map((point) => (
                <div key={point.label} className="contact-point-item">
                  <span
                    className="service-icon-wrap contact-point-icon"
                    aria-hidden="true"
                  >
                    <span className="material-symbols-outlined">
                      {point.icon}
                    </span>
                  </span>
                  <div>
                    <strong>{point.label}</strong>
                    <p>{point.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form className="card reveal" onSubmit={handleSubmit} noValidate>
            <div className="form-grid">
              <input
                type="text"
                name="name"
                className="input-field"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <p className="error-text">{errors.name}</p>}

              <input
                type="email"
                name="email"
                className="input-field"
                placeholder="Business Email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="error-text">{errors.email}</p>}

              <textarea
                name="message"
                rows="5"
                className="input-field"
                placeholder="Tell us about your project"
                value={formData.message}
                onChange={handleChange}
              />
              {errors.message && <p className="error-text">{errors.message}</p>}

              <button type="submit" className="btn-primary" disabled={loading}>
                {loading ? "Sending..." : "Send My Project Details"}
              </button>

              {submitted && (
                <div className="success-box">
                  <span className="success-icon" aria-hidden="true">
                    <span className="material-symbols-outlined material-filled">
                      check
                    </span>
                  </span>
                  <span>Thanks! We received your project details.</span>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
