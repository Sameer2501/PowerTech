import { useNavigate } from 'react-router-dom';

export default function Contact() {
  const navigate = useNavigate();
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@500;600;700&family=Inter:wght@400;500&display=swap');

        /* ══════════════ CONTACT / FOOTER ══════════════ */
        .cf-root {
          background: #0b0f0b;
          font-family: 'Inter', sans-serif;
          position: relative;
          overflow: hidden;
          margin-top: 80px;
        }

        /* subtle green grid overlay */
        .cf-root::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(46,204,46,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(46,204,46,0.04) 1px, transparent 1px);
          background-size: 48px 48px;
          pointer-events: none;
          z-index: 0;
        }

        /* ── TOP HERO BAND ── */
        .cf-hero {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
          border-bottom: 1px solid rgba(255,255,255,0.07);
        }

        /* LEFT — image + overlay */
        .cf-hero-img {
          position: relative;
          min-height: 380px;
          overflow: hidden;
        }
        .cf-hero-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          filter: brightness(0.45) saturate(0.7);
          transition: transform 6s ease;
        }
        .cf-hero-img:hover img {
          transform: scale(1.04);
        }
        .cf-hero-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(26,122,26,0.55) 0%, rgba(0,0,0,0.30) 100%);
        }
        .cf-hero-img-content {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 52px 48px;
        }
        .cf-hero-tag {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 18px;
        }
        .cf-hero-tag-ln  { width: 30px; height: 2px; background: #2ecc2e; flex-shrink: 0; }
        .cf-hero-tag-tx  {
          color: #2ecc2e;
          font-size: 11.5px;
          font-weight: 600;
          letter-spacing: 3.5px;
          text-transform: uppercase;
        }
        .cf-hero-h2 {
          font-family: 'Rajdhani', sans-serif;
          font-size: clamp(2.2rem, 4vw, 3.4rem);
          font-weight: 700;
          color: #fff;
          line-height: 1.1;
          margin: 0 0 14px;
        }
        .cf-hero-h2 span { color: #2ecc2e; }
        .cf-hero-sub {
          font-size: 17px;
          color: rgba(255,255,255,0.68);
          line-height: 1.7;
          margin: 0 0 32px;
          max-width: 380px;
        }
        .cf-hero-socials {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: 28px;
        }
        .cf-social-label {
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.45);
          margin-right: 4px;
        }
        .cf-social-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 1.5px solid rgba(255,255,255,0.2);
          background: rgba(255,255,255,0.06);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: rgba(255,255,255,0.7);
          transition: border-color 0.25s, background 0.25s, color 0.25s;
          text-decoration: none;
        }
        .cf-social-btn:hover {
          border-color: #2ecc2e;
          background: rgba(46,204,46,0.12);
          color: #2ecc2e;
        }
        .cf-social-btn svg { width: 16px; height: 16px; fill: currentColor; }

        /* RIGHT — contact form */
        .cf-form-side {
          background: #111911;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 52px 56px;
          border-left: 1px solid rgba(255,255,255,0.05);
        }
        .cf-form-title {
          font-family: 'Rajdhani', sans-serif;
          font-size: 1.9rem;
          font-weight: 700;
          color: #fff;
          margin: 0 0 8px;
          letter-spacing: 0.3px;
        }
        .cf-form-sub {
          font-size: 15px;
          color: rgba(255,255,255,0.45);
          margin: 0 0 32px;
        }

        .cf-form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-bottom: 16px;
        }
        .cf-field {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .cf-field.full { grid-column: 1 / -1; }
        .cf-field label {
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 1.8px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.38);
        }
        .cf-field input,
        .cf-field textarea,
        .cf-field select {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 8px;
          padding: 12px 16px;
          font-family: 'Inter', sans-serif;
          font-size: 16px;
          color: #fff;
          outline: none;
          transition: border-color 0.22s, background 0.22s;
          resize: none;
        }
        .cf-field input::placeholder,
        .cf-field textarea::placeholder { color: rgba(255,255,255,0.22); }
        .cf-field input:focus,
        .cf-field textarea:focus,
        .cf-field select:focus {
          border-color: #2ecc2e;
          background: rgba(46,204,46,0.06);
        }
        .cf-field select option { background: #111911; color: #fff; }
        .cf-field textarea { min-height: 90px; }

        .cf-submit-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #1a7a1a;
          color: #fff;
          font-family: 'Rajdhani', sans-serif;
          font-weight: 700;
          font-size: 14px;
          letter-spacing: 2px;
          text-transform: uppercase;
          padding: 14px 32px;
          border-radius: 50px;
          border: none;
          cursor: pointer;
          margin-top: 8px;
          transition: background 0.25s, box-shadow 0.25s;
          width: fit-content;
        }
        .cf-submit-btn:hover {
          background: #0d4f0d;
          box-shadow: 0 6px 28px rgba(26,122,26,0.5);
        }
        .cf-submit-btn:hover .cf-arr { transform: translateX(5px); }
        .cf-arr { transition: transform 0.25s; display: flex; align-items: center; }

        /* ── LINKS GRID ── */
        .cf-links {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1.6fr;
          gap: 0;
          border-bottom: 1px solid rgba(255,255,255,0.07);
        }

        .cf-links-col {
          padding: 48px 40px;
          border-right: 1px solid rgba(255,255,255,0.05);
        }
        .cf-links-col:last-child { border-right: none; }

        .cf-links-heading {
          font-family: 'Rajdhani', sans-serif;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #2ecc2e;
          margin: 0 0 22px;
        }

        /* brand col */
        .cf-brand-logo {
          font-family: 'Rajdhani', sans-serif;
          font-size: 1.7rem;
          font-weight: 700;
          color: #fff;
          letter-spacing: 1px;
          margin: 0 0 14px;
        }
        .cf-brand-logo span { color: #2ecc2e; }
        .cf-brand-tagline {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.28);
          margin: 0 0 18px;
        }
        .cf-brand-desc {
          font-size: 15px;
          color: rgba(255,255,255,0.42);
          line-height: 1.8;
          margin: 0;
          max-width: 260px;
        }

        /* nav lists */
        .cf-nav-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .cf-nav-list li a {
          font-size: 16px;
          color: rgba(255,255,255,0.50);
          text-decoration: none;
          transition: color 0.2s, padding-left 0.2s;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .cf-nav-list li a::before {
          content: '';
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #1a7a1a;
          flex-shrink: 0;
          transition: background 0.2s;
        }
        .cf-nav-list li a:hover { color: #fff; padding-left: 4px; }
        .cf-nav-list li a:hover::before { background: #2ecc2e; }

        /* contact info col */
        .cf-info-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .cf-info-item {
          display: flex;
          align-items: flex-start;
          gap: 14px;
        }
        .cf-info-icon {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          background: rgba(26,122,26,0.15);
          border: 1px solid rgba(46,204,46,0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: #2ecc2e;
        }
        .cf-info-icon svg { width: 16px; height: 16px; stroke: currentColor; fill: none; stroke-width: 1.8; }
        .cf-info-text { font-size: 15px; color: rgba(255,255,255,0.48); line-height: 1.6; }
        .cf-info-text strong { display: block; font-size: 13px; font-weight: 600; letter-spacing: 1.5px; text-transform: uppercase; color: rgba(255,255,255,0.25); margin-bottom: 3px; }

        /* ── BOTTOM BAR ── */
        .cf-bottom {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 40px;
          flex-wrap: wrap;
          gap: 12px;
        }
        .cf-copy {
          font-size: 14px;
          color: rgba(255,255,255,0.28);
        }
        .cf-copy a { color: #2ecc2e; text-decoration: none; }
        .cf-copy a:hover { text-decoration: underline; }
        .cf-bottom-links {
          display: flex;
          gap: 24px;
        }
        .cf-bottom-links a {
          font-size: 14px;
          color: rgba(255,255,255,0.28);
          text-decoration: none;
          transition: color 0.2s;
        }
        .cf-bottom-links a:hover { color: #2ecc2e; }

        /* ── RESPONSIVE ── */
        @media (max-width: 1100px) {
          .cf-links { grid-template-columns: 1fr 1fr; }
          .cf-links-col:nth-child(2) { border-right: 1px solid rgba(255,255,255,0.05); }
          .cf-links-col:nth-child(even):last-child { border-right: none; }
        }
        @media (max-width: 820px) {
          .cf-hero { grid-template-columns: 1fr; }
          .cf-hero-img { min-height: 280px; }
          .cf-form-side { padding: 40px 28px; }
          .cf-form-row { grid-template-columns: 1fr; }
          .cf-links { grid-template-columns: 1fr 1fr; }
          .cf-links-col { padding: 36px 24px; }
        }
        @media (max-width: 520px) {
          .cf-links { grid-template-columns: 1fr; }
          .cf-links-col { border-right: none; }
          .cf-bottom { flex-direction: column; align-items: flex-start; }
          .cf-hero-img-content { padding: 36px 24px; }
        }
      `}</style>

      <footer className="cf-root">

        {/* ── TOP HERO BAND ── */}
        <div className="cf-hero">

          {/* LEFT — bg image with CTA */}
          <div className="cf-hero-img">
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=900&q=80"
              alt="Power technology engineer"
            />
            <div className="cf-hero-img-overlay" />
            <div className="cf-hero-img-content">
              <div className="cf-hero-tag">
                <span className="cf-hero-tag-ln" />
                <span className="cf-hero-tag-tx">Super Power Tech</span>
              </div>
              <h2 className="cf-hero-h2">
                Let's Build Something<br />
                <span>Powerful Together</span>
              </h2>
              <p className="cf-hero-sub">
                Our team is ready to assist with custom power solutions, site visits, and dedicated after-sales support — across India.
              </p>

              <div className="cf-hero-socials">
                <span className="cf-social-label">Follow</span>
                {/* Facebook */}
                <a href="#" className="cf-social-btn" aria-label="Facebook">
                  <svg viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                </a>
                {/* LinkedIn */}
                <a href="#" className="cf-social-btn" aria-label="LinkedIn">
                  <svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
                </a>
                {/* YouTube */}
                <a href="#" className="cf-social-btn" aria-label="YouTube">
                  <svg viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" /><polygon fill="#0b0f0b" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" /></svg>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT — contact form */}
          <div className="cf-form-side">
            <h3 className="cf-form-title">Send Us a Message</h3>
            <p className="cf-form-sub">We typically respond within 24 hours on business days.</p>

            <div className="cf-form-row">
              <div className="cf-field">
                <label htmlFor="cf-name">Full Name</label>
                <input id="cf-name" type="text" placeholder="John Doe" />
              </div>
              <div className="cf-field">
                <label htmlFor="cf-phone">Phone</label>
                <input id="cf-phone" type="tel" placeholder="+91 98765 43210" />
              </div>
              <div className="cf-field">
                <label htmlFor="cf-email">Email</label>
                <input id="cf-email" type="email" placeholder="john@company.com" />
              </div>
              <div className="cf-field">
                <label htmlFor="cf-product">Product Interest</label>
                <select id="cf-product">
                  <option value="">Select a product…</option>
                  <option>Voltage Stablizers</option>
                  <option>HT Transformers</option>
                  <option>Control Panels</option>
                  <option>Electroplating Rectifiers</option>
                  <option>Battery Charger</option>
                  <option>Online UPS</option>
                  <option>Isolation 3 Phase Transformers</option>
                </select>
              </div>
              <div className="cf-field full">
                <label htmlFor="cf-msg">Message</label>
                <textarea id="cf-msg" placeholder="Tell us about your requirements…" />
              </div>
            </div>

            <button className="cf-submit-btn">
              Send Message
              <span className="cf-arr">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="14" height="14">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </button>
          </div>
        </div>

        {/* ── LINKS GRID ── */}
        <div className="cf-links">

          {/* col 1 — brand */}
          <div className="cf-links-col">
            <p className="cf-brand-logo">Super Power<span>Tech</span></p>
            <p className="cf-brand-tagline">Power To You</p>
            <p className="cf-brand-desc">
              A trusted leader in industrial voltage stabilization and power rectification solutions, serving India's most demanding industries for over 15 years.
            </p>
          </div>

          {/* col 2 — products */}
          <div className="cf-links-col">
            <p className="cf-links-heading">Products</p>
            <ul className="cf-nav-list">
              <li><a href="#">Voltage Stablizers</a></li>
              <li><a href="#">HT Transformers</a></li>
              <li><a href="#">Control Panels</a></li>
              <li><a href="#">Electroplating Rectifiers</a></li>
              <li><a href="#">Battery Charger</a></li>
              <li><a href="#">Online UPS</a></li>
              <li><a href="#">Isolation 3 Phase Transformers</a></li>
            </ul>
          </div>

          {/* col 3 — quick links */}
          <div className="cf-links-col">
            <p className="cf-links-heading">Quick Links</p>
            <ul className="cf-nav-list">
              <li>
                <a
                  href="/company"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/company');
                    window.scrollTo(0, 0);
                  }}
                >
                  Company
                </a>
              </li>
              <li><a href="#">Clients</a></li>
              <li><a href="#">Career</a></li>
              <li><a href="#">Industries</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Service &amp; Support</a></li>
            </ul>
          </div>

          {/* col 4 — contact info */}
          <div className="cf-links-col">
            <p className="cf-links-heading">Get In Touch</p>
            <ul className="cf-info-list">
              <li className="cf-info-item">
                <div className="cf-info-icon">
                  <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                </div>
                <span className="cf-info-text">
                  <strong>Address</strong>
                  Plot No. 12, Industrial Area, Phase‑2, Ludhiana, Punjab — 141003
                </span>
              </li>
              <li className="cf-info-item">
                <div className="cf-info-icon">
                  <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.8 19.8 0 0 1 1.61 3.42 2 2 0 0 1 3.58 1.25h3a2 2 0 0 1 2 1.72 12.8 12.8 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.06 6.06l1.27-1.27a2 2 0 0 1 2.11-.45 12.8 12.8 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                </div>
                <span className="cf-info-text">
                  <strong>Phone</strong>
                  +91 98765 43210
                </span>
              </li>
              <li className="cf-info-item">
                <div className="cf-info-icon">
                  <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                </div>
                <span className="cf-info-text">
                  <strong>Email</strong>
                  info@superpowertech.in
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* ── BOTTOM BAR ── */}
        <div className="cf-bottom">
          <p className="cf-copy">
            © {new Date().getFullYear()} Super Power Tech. All Rights Reserved.{" "}
            <a href="#">Service &amp; Support</a>
          </p>
          <div className="cf-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
            <a href="#">Sitemap</a>
          </div>
        </div>

      </footer>
    </>
  );
}
