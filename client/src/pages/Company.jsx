import React, { useEffect } from 'react';
import Contact from '../components/Contact';
import img from '../assets/img22.jpg';
import mission from '../assets/MISSION.png';
import companyVideo from '../assets/company.mp4';
import vision from '../assets/vision.jpeg'
const Company = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <style>{`
        /* Import fonts if not globally available */
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@500;600;700&family=Inter:wght@400;500;600&display=swap');

        /* Globals */
        .cp-page {
          font-family: 'Inter', sans-serif;
          color: #111;
        }

        /* ── HERO BANNER ── */
        .cp-hero {
          position: relative;
          width: 100%;
          height: 300px;
          background: #222;
          display: flex;
          align-items: flex-end;
          justify-content: flex-end;
        }
        .cp-hero img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.7;
          filter: brightness(0.6);
        }
        .cp-hero-title-box {
          position: relative;
          background: #1a7a1a; /* Using brand green instead of red to match site */
          color: #fff;
          padding: 24px 60px;
          margin-bottom: 30px;
        }
        .cp-hero-title-box h1 {
          font-family: 'Rajdhani', sans-serif;
          font-size: 2.5rem;
          font-weight: 700;
          margin: 0;
          letter-spacing: 1px;
        }

        /* ── SECTION WRAPPER ── */
        .cp-section {
          padding: 80px 5%;
          max-width: 1400px;
          margin: 0 auto;
        }

        /* ── LEGACY SECTION ── */
        .cp-legacy {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }
        .cp-title-wrap {
          display: flex;
          gap: 20px;
          margin-bottom: 30px;
        }
        .cp-title-bar {
          width: 5px;
          background: #1a7a1a;
          flex-shrink: 0;
        }
        .cp-legacy h2 {
          font-family: 'Rajdhani', sans-serif;
          font-size: 3.5rem;
          font-weight: 700;
          color: #111;
          line-height: 1.1;
          margin: 0;
        }
        .cp-legacy-content p {
          font-size: 16px;
          color: #444;
          line-height: 1.8;
          margin-bottom: 24px;
        }
        .cp-legacy-img-wrap {
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          height: 400px;
        }
        .cp-legacy-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* ── FACTS & FIGURES ── */
        .cp-facts-section {
          background: #fdfdfd;
        }
        .cp-facts-title-wrap {
          display: flex;
          gap: 16px;
          margin-bottom: 50px;
          justify-content: flex-start;
          max-width: 1400px;
          margin-left: auto;
          margin-right: auto;
          padding: 0 5%;
        }
        .cp-facts-title-wrap .cp-title-bar {
          width: 4px;
        }
        .cp-facts-title-wrap h2 {
          font-family: 'Rajdhani', sans-serif;
          font-size: 3rem;
          font-weight: 700;
          color: #111;
          margin: 0;
        }
        .cp-facts-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 50px 30px;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 5% 80px;
          text-align: center;
        }
        .cp-fact-item h3 {
          font-family: 'Rajdhani', sans-serif;
          font-size: 2.8rem;
          font-weight: 700;
          color: #1a7a1a;
          margin: 0 0 10px;
          line-height: 1;
        }
        .cp-fact-item p {
          font-size: 14px;
          color: #666;
          margin: 0;
          text-transform: capitalize;
        }

        /* ── MISSION SECTION ── */
        .cp-mission {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
          max-width: 1400px;
          margin: 0 auto 80px;
          padding: 0 5%;
        }
        .cp-mission-img {
          width: 100%;
          min-height: 400px;
          height: 100%;
        }
        .cp-mission-img img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .cp-mission-content {
          background: #1a7a1a;
          color: #fff;
          padding: 60px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .cp-mission-title-wrap {
          display: flex;
          gap: 16px;
          margin-bottom: 30px;
        }
        .cp-mission-title-bar {
          width: 4px;
          background: #fff;
          flex-shrink: 0;
        }
        .cp-mission h2 {
          font-family: 'Rajdhani', sans-serif;
          font-size: 3rem;
          font-weight: 700;
          margin: 0;
        }
        .cp-mission p {
          font-size: 16px;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.95);
          margin-bottom: 20px;
        }

        /* ── VISION SECTION ── */
        .cp-vision {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
          max-width: 1400px;
          margin: 0 auto 80px;
          padding: 0 5%;
        }
        .cp-vision-content {
          background: #1a7a1a;
          color: #fff;
          padding: 60px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .cp-vision-title-wrap {
          display: flex;
          gap: 16px;
          margin-bottom: 30px;
          align-items: center;
        }
        .cp-vision-title-bar {
          width: 4px;
          background: #fff;
          height: 48px;
          flex-shrink: 0;
        }
        .cp-vision h2 {
          font-family: 'Rajdhani', sans-serif;
          font-size: 3rem;
          font-weight: 700;
          margin: 0;
        }
        .cp-vision p {
          font-size: 16px;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.95);
        }
        .cp-vision-img {
          width: 100%;
          min-height: 400px;
          height: 100%;
        }
        .cp-vision-img img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* ── VALUES SECTION ── */
        .cp-values {
          max-width: 1400px;
          margin: 0 auto 80px;
          padding: 0 5%;
        }
        .cp-values-header {
          margin-bottom: 40px;
        }
        .cp-values-title-wrap {
          display: flex;
          gap: 16px;
          margin-bottom: 30px;
          align-items: center;
        }
        .cp-values-title-bar {
          width: 4px;
          background: #1a7a1a;
          height: 48px;
          flex-shrink: 0;
        }
        .cp-values h2 {
          font-family: 'Rajdhani', sans-serif;
          font-size: 3rem;
          font-weight: 700;
          margin: 0;
          color: #111;
        }
        .cp-values p {
          font-size: 16px;
          line-height: 1.8;
          color: #444;
          margin-bottom: 24px;
        }
        .cp-values-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 30px;
          margin-top: 50px;
        }
        .cp-value-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        .cp-value-icon {
          width: 80px;
          height: 80px;
          margin-bottom: 15px;
          color: #1a7a1a;
        }
        .cp-value-icon svg {
          width: 100%;
          height: 100%;
          object-fit: contain;
          stroke: currentColor;
          fill: none;
          stroke-width: 1.5;
        }
        .cp-value-item h4 {
          font-family: 'Inter', sans-serif;
          font-size: 16px;
          font-weight: 600;
          color: #222;
          margin: 0;
        }

        /* RESPONSIVE */
        @media (max-width: 900px) {
          .cp-legacy { grid-template-columns: 1fr; }
          .cp-legacy-img-wrap { height: 300px; }
          .cp-legacy h2 { font-size: 2.8rem; }
          .cp-mission { grid-template-columns: 1fr; }
          .cp-mission-img { height: 300px; min-height: auto; }
          .cp-facts-grid { grid-template-columns: 1fr 1fr; }
          .cp-vision { grid-template-columns: 1fr; }
          .cp-vision-img { height: 300px; min-height: auto; order: 1; }
          .cp-vision-content { padding: 40px 30px; order: 2; }
          .cp-values-grid { grid-template-columns: repeat(3, 1fr); gap: 40px 20px; }
        }
        @media (max-width: 600px) {
          .cp-facts-grid { grid-template-columns: 1fr; }
          .cp-hero-title-box h1 { font-size: 2rem; }
          .cp-mission-content { padding: 40px 30px; }
          .cp-values-grid { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>

      <div className="cp-page">
        {/* ── HERO BANNER ── */}
        <section className="cp-hero">
          <img
            src={img}
            alt="Engineers working on electrical panel"
          />
          <div className="cp-hero-title-box">
            <h1>Company</h1>
          </div>
        </section>

        {/* ── LEGACY SECTION ── */}
        <section className="cp-section">
          <div className="cp-legacy">
            <div className="cp-legacy-content">
              <div className="cp-title-wrap">
                <div className="cp-title-bar"></div>
                <h2>Trusted legacy of<br />engineering excellence's</h2>
              </div>
              <p>
                Started back in year 2010 with the physical location in Ludhiana, Punjab, our company named Super Power
                Electricals is specialized in manufacturing electrical gadgets. Our wide range of products includes Servo Voltage
                Stabilizer, Control Panel, Electro Plating Rectifier, Battery Charger, Plate Charger, Power Factor Panel, Step Down
                Transformer, On-line UPS, HT Transformer, Isolation Transformer etc.
              </p>
              <p>
                Our manager Mr. Ansari is taking care of our business operations and makes sure that the company delivers the best value
                of customers' money. We have been developing our product line under the leadership of our Technical Manager & Team.
                Mr. Ansari is a technically qualified person having an experience of more than a decade. From manufacturing to
                delivering the products, we have trained staff which works tirelessly to keep the company ahead in the market. We are
                one of the most reliable companies offering electrical products with premium performance at economical rates.
              </p>
            </div>
            <div className="cp-legacy-img-wrap">
              <video
                src={companyVideo}
                autoPlay
                loop
                muted
                controls
                playsInline
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </section>

        {/* ── FACTS & FIGURES ── */}
        <div className="cp-facts-section">
          <div className="cp-facts-title-wrap">
            <div className="cp-title-bar"></div>
            <h2>Facts and Figures</h2>
          </div>
          <div className="cp-facts-grid">
            <div className="cp-fact-item">
              <h3>6+</h3>
              <p>Manufacturing Units</p>
            </div>
            <div className="cp-fact-item">
              <h3>35+</h3>
              <p>Countries Global Presence</p>
            </div>
            <div className="cp-fact-item">
              <h3>58+</h3>
              <p>years of Leadership</p>
            </div>
            <div className="cp-fact-item">
              <h3>700+</h3>
              <p>Experienced & Skilled Manpower</p>
            </div>
            <div className="cp-fact-item">
              <h3>174+</h3>
              <p>Sales & Service Centres</p>
            </div>
            <div className="cp-fact-item">
              <h3>35000+</h3>
              <p>Installations across industry</p>
            </div>
          </div>
        </div>

        {/* ── MISSION SECTION ── */}
        <section className="cp-mission">
          <div className="cp-mission-img">
            <img
              src={mission}
              alt="Electrical engineer working on site"
            />
          </div>
          <div className="cp-mission-content">
            <div className="cp-mission-title-wrap">
              <div className="cp-mission-title-bar"></div>
              <h2>Company Mission</h2>
            </div>
            <p>
              Our mission is to continuously innovate and deploy transformative
              action to maintain high value of satisfaction for our customers.
              The needs of our Clients who are constantly searching for the latest
              technologies and new ways of thinking to make the best project
              decisions.
            </p>
            <p>
              We continuously develop, expertise and apply them in helping
              our Clients in their business activities. With wide experience, we also
              develop new, efficient stabilizer that enable our Clients to fluctuation
              free their business.
            </p>
          </div>
        </section>

        {/* ── VISION SECTION ── */}
        <section className="cp-vision">
          <div className="cp-vision-content">
            <div className="cp-vision-title-wrap">
              <div className="cp-vision-title-bar"></div>
              <h2>Vision</h2>
            </div>
            <p>
              To establish a state-of-the-art manufacturing ecosystem for energy-
              efficient electrical equipment and emerge as a globally recognized
              leader in the industry. The vision is driven by a commitment to
              innovation, quality excellence, and continuous growth, aiming to set
              new benchmarks in performance and reliability across global markets.
            </p>
          </div>
          <div className="cp-vision-img">
            <img
              src={vision}
              alt="Engineers with hard hats"
            />
          </div>
        </section>

        {/* ── OUR VALUES SECTION ── */}
        <section className="cp-values">
          <div className="cp-values-header">
            <div className="cp-values-title-wrap">
              <div className="cp-values-title-bar"></div>
              <h2>Our Values</h2>
            </div>
            <p>
              At Super Power Tech, we help businesses tackle everyday power and resource challenges.
              With our knowledge and experience, we deliver reliable solutions that add real value for our customers.
            </p>
            <p>
              Industries worldwide are facing rapid change. Rising energy demands, resource constraints,
              technological shifts, and environmental challenges are reshaping the way businesses operate.
              Meeting these challenges requires more than just standard solutions &mdash; it calls for proven
              expertise, practical innovation, and reliable performance.
            </p>
          </div>

          <div className="cp-values-grid">
            <div className="cp-value-item">
              <div className="cp-value-icon">
                <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  <path d="M9 12l2 2 4-4"></path>
                </svg>
              </div>
              <h4>Reliability</h4>
            </div>
            <div className="cp-value-item">
              <div className="cp-value-icon">
                <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"></path>
                  <path d="M2 12h20"></path>
                </svg>
              </div>
              <h4>Sustainability</h4>
            </div>
            <div className="cp-value-item">
              <div className="cp-value-icon">
                <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 00-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 010 7.75"></path>
                </svg>
              </div>
              <h4>Customer Centric</h4>
            </div>
            <div className="cp-value-item">
              <div className="cp-value-icon">
                <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </div>
              <h4>Integrity and Trust</h4>
            </div>
            <div className="cp-value-item">
              <div className="cp-value-icon">
                <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="8" r="7"></circle>
                  <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                  <path d="M9 8l2 2 4-4"></path>
                </svg>
              </div>
              <h4>Quality Without Compromise</h4>
            </div>
          </div>
        </section>

      </div>

      {/* ───────────────── CONTACT / FOOTER ───────────────── */}
      <Contact />
    </>
  );
};

export default Company;
