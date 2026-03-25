const services = [
  "Custom Website Development",
  "Web Application Development",
  "E-Commerce Solutions",
  "Dashboard Systems",
  "API Development",
  "Maintenance & Support",
];

const company = [
  "About Us",
  "Our Process",
  "Case Studies",
  "Pricing",
  "Blog",
  "Careers",
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <a
              href="#home"
              className="footer-title logo text-gradient"
              aria-label="Trenquix home"
            >
              Trenquix
            </a>
            <p style={{ color: "var(--text-secondary)", margin: "10px 0" }}>
              We Build Websites That Work For Your Business
            </p>
            <p style={{ color: "var(--text-muted)", margin: 0 }}>
              Founded by Ragul M
            </p>
            <div className="socials">
              <a
                href="https://github.com/RAGULMUTHUKUMAR"
                target="_blank"
                rel="noreferrer"
                className="social-btn"
                aria-label="GitHub"
              >
                <span className="material-symbols-outlined">code</span>
              </a>
              <a href="#" className="social-btn" aria-label="LinkedIn">
                <span className="material-symbols-outlined">work</span>
              </a>
              <a href="#" className="social-btn" aria-label="Instagram">
                <span className="material-symbols-outlined">photo_camera</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="footer-title">Services</h3>
            <ul className="footer-list">
              {services.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="footer-title">Company</h3>
            <ul className="footer-list">
              {company.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="footer-title">Contact</h3>
            <ul className="footer-list">
              <li>ragullugar4@gmail.com</li>
              <li>9360787705</li>
            </ul>
            <a
              href="#contact"
              className="btn-primary"
              style={{ marginTop: "14px" }}
            >
              Free Consultation
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2024 Trenquix. All rights reserved.</span>
          <span>Built with love using MERN Stack.</span>
        </div>
      </div>
    </footer>
  );
}
