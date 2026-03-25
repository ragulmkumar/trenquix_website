"use client";

import { useState } from "react";

const initialState = {
  name: "",
  email: "",
  website: "",
  budget: "",
  message: "",
};

export default function Contact() {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

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

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate();

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setSubmitted(false);
      return;
    }

    setSubmitted(true);
    setErrors({});
    setFormData(initialState);
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
              Tell us about your project and we&apos;ll get back to you within
              24 hours with a free consultation.
            </p>

            <div className="contact-points">
              <p>✉ ragullugar4@gmail.com</p>
              <p>📞 9360787705</p>
              <p>⏱ Response time: within 24 hours</p>
            </div>

            <div className="trust-pills">
              <span className="trust-pill">Free Consultation</span>
              <span className="trust-pill">No Commitment</span>
              <span className="trust-pill">100% Confidential</span>
            </div>
          </div>

          <form className="card reveal" onSubmit={handleSubmit} noValidate>
            <div className="form-grid">
              <div>
                <input
                  type="text"
                  name="name"
                  className="input-field"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                {errors.name ? (
                  <p className="error-text">{errors.name}</p>
                ) : null}
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  className="input-field"
                  placeholder="Business Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                {errors.email ? (
                  <p className="error-text">{errors.email}</p>
                ) : null}
              </div>

              <input
                type="text"
                name="website"
                className="input-field"
                placeholder="Website / Business"
                value={formData.website}
                onChange={handleChange}
              />

              <select
                name="budget"
                className="input-field"
                value={formData.budget}
                onChange={handleChange}
              >
                <option value="">Project Budget</option>
                <option value="under-20k">Under Rs 20K</option>
                <option value="20k-50k">Rs 20K-50K</option>
                <option value="50k-1l">Rs 50K-1L</option>
                <option value="1l-plus">Rs 1L+</option>
              </select>

              <div>
                <textarea
                  name="message"
                  rows="5"
                  className="input-field"
                  placeholder="Tell us about your project"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
                {errors.message ? (
                  <p className="error-text">{errors.message}</p>
                ) : null}
              </div>

              <button
                type="submit"
                className="btn-primary"
                style={{ width: "100%" }}
              >
                Send My Project Details
                <span className="material-symbols-outlined" aria-hidden="true">
                  arrow_forward
                </span>
              </button>

              <p className="privacy">
                🔒 Your information is 100% secure and private.
              </p>

              {submitted ? (
                <div className="success-box" role="status" aria-live="polite">
                  <span className="success-icon">✓</span>
                  <span>
                    Thanks! Your project details were sent successfully.
                  </span>
                </div>
              ) : null}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
