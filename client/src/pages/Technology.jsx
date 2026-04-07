import React from 'react';
import Contact from '../components/Contact';
import img from '../assets/img22.jpg';
import tech from '../assets/tech.jpeg'
const Technology = () => {
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
          font-size: 3.2rem;
          font-weight: 700;
          margin: 0;
          letter-spacing: 1px;
        }

        /* RESPONSIVE */
        @media (max-width: 600px) {
          .cp-hero-title-box h1 { font-size: 2rem; }
        }

        /* ── TECH INFO SEC ── */
        .tech-info-sec {
          max-width: 1200px;
          margin: 100px auto;
          padding: 0 5%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }
        .tech-info-img img {
          width: 100%;
          border-radius: 4px;
          object-fit: cover;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }
        .tech-info-content p {
          font-family: 'Inter', sans-serif;
          font-size: 16px;
          color: #444;
          line-height: 1.8;
          margin-bottom: 24px;
        }

        /* ── APPS SEC ── */
        .tech-apps-sec {
          max-width: 1200px;
          margin: 100px auto;
          padding: 0 5%;
        }
        .tech-apps-title {
          font-family: 'Rajdhani', sans-serif;
          font-size: 2.8rem;
          font-weight: 700;
          color: #111;
          margin-bottom: 60px;
          text-transform: capitalize;
        }
        .tech-apps-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 40px 20px;
          text-align: center;
        }
        .tech-app-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }
        .tech-app-icon-wrap {
          width: 110px;
          height: 110px;
          border-radius: 50%;
          background: #fff;
          box-shadow: 0 10px 40px rgba(0,0,0,0.06);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #1a7a1a; /* Green matching theme */
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .tech-app-item:hover .tech-app-icon-wrap {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(26, 122, 26, 0.15);
        }
        .tech-app-icon-wrap svg {
          width: 44px;
          height: 44px;
          stroke: currentColor;
          fill: none;
          stroke-width: 1.5;
        }
        .tech-app-label {
          font-family: 'Inter', sans-serif;
          font-size: 15px;
          font-weight: 500;
          color: #333;
          line-height: 1.4;
        }

        /* ── TECH GROUPS SEC ── */
        .tech-groups-sec {
          max-width: 1200px;
          margin: 100px auto;
          padding: 0 5%;
        }
        .tech-groups-banner {
          width: 100%;
          height: 450px;
          object-fit: cover;
          display: block;
        }
        .tech-groups-lower {
          display: flex;
          gap: 50px;
          align-items: flex-start;
        }
        .tech-groups-box {
          background: #fff;
          padding: 50px 40px;
          box-shadow: 0 15px 50px rgba(0,0,0,0.08);
          width: 45%;
          margin-top: -120px;
          position: relative;
          z-index: 2;
          font-family: 'Inter', sans-serif;
          font-size: 26px; /* Large text as requested */
          font-weight: 600;
          line-height: 1.6;
          color: #111;
        }
        .tech-groups-text {
          width: 55%;
          padding-top: 40px;
        }
        .tech-groups-text p {
          font-family: 'Inter', sans-serif;
          font-size: 17px;
          color: #444;
          line-height: 1.8;
          margin-bottom: 25px;
        }

        @media (max-width: 900px) {
          .tech-info-sec { grid-template-columns: 1fr; gap: 40px; }
          .tech-apps-title { text-align: center; }
          .tech-groups-lower { flex-direction: column; gap: 20px; }
          .tech-groups-box { width: 100%; margin-top: -60px; font-size: 22px; padding: 30px; }
          .tech-groups-text { width: 100%; padding-top: 20px; }
        }
      `}</style>

            <div className="cp-page">
                {/* ── HERO BANNER ── */}
                <section className="cp-hero">
                    <img
                        src={img}
                        alt="Technology Background"
                    />
                    <div className="cp-hero-title-box">
                        <h1>Technology</h1>
                    </div>
                </section>
            </div>

            {/* ── INFO SECTION ── */}
            <section className="tech-info-sec">
                <div className="tech-info-img">
                    <img src={tech} alt="Super Power Tech Transformers" />
                </div>
                <div className="tech-info-content">
                    <p>The Super Power Tech Linear Voltage Regulating Transformer has been designed to meet a wide range of heavy-duty industrial applications as well as for Electricity Supply Utilities. Globally, these have become an established method of control, wherever continuously variable on-load control of voltage and power is needed. These can also be used to control many industrial processes like adjusting temperature, flow speeds, drive speeds, etc., to a pre-set program.</p>
                    <p>Super Power Tech's Voltage Regulating Transformers & Regulating units combine fixed ratio transformers with regulating transformers to extend their rating. Connection designs range from low-order KVA to several hundred KVA as a standalone unit. Using multiple voltage regulators in combination with fixed ratio transformers, capacity levels are extended into the 5 MVA range.</p>
                </div>
            </section>

            {/* ── BROAD GROUPS OVERLAP SECTION ── */}
            <section className="tech-groups-sec">
                <img src={img} alt="Transformers Banner" className="tech-groups-banner" />
                
                <div className="tech-groups-lower">
                    <div className="tech-groups-box">
                        The applications for Super Power Tech's voltage regulating transformers and units fall into two broad basic groups: Maintaining constant output levels by compensating automatically for variations in supply voltage.
                    </div>
                    
                    <div className="tech-groups-text">
                        <p>Our Automatic Voltage Controllers fall in this category, which are installed either along with the main distribution transformers / panel to stabilize the voltage to entire plant, or to individual machines or processes to hold voltage / current / power / temperature / lighting intensity constant. They are equally suited to A.C. or D.C. applications.</p>
                        <p>Giving a smoothly variable output voltage for different & continuous heavy-duty industrial processes, wherever voltage has to be smoothly adjusted on load over a wide range of control without effecting the power factor or waveform of the system. Our Silicon Power Rectifiers and A.C. Variable Voltage Transformers fall in this category.</p>
                    </div>
                </div>
            </section>

            {/* ── APPLICATIONS GRID ── */}
            <section className="tech-apps-sec">
                <h2 className="tech-apps-title">Applications</h2>
                <div className="tech-apps-grid">
                    {[
                        { label: "High Efficiency", icon: <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" /> },
                        { label: "Virtually Zero Maintenance", icon: <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /> },
                        { label: "Undistorted output", icon: <path d="M2 12h4l2-9 4 18 2-9h8" /> },
                        { label: "Constant Power Factor", icon: <><path d="M18.36 6.64a9 9 0 1 1-12.73 0"/><path d="M12 2v10"/></> },
                        { label: "Frequency Independent", icon: <path d="M3 3v18h18M18 17V9M13 17V5M8 17v-3" /> },
                        { label: "Interference - Free", icon: <><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></> },
                        { label: "Mechanism", icon: <><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></> },
                        { label: "Close & Precise Control", icon: <><circle cx="12" cy="12" r="10"/><line x1="22" y1="12" x2="18" y2="12"/><line x1="6" y1="12" x2="2" y2="12"/><line x1="12" y1="6" x2="12" y2="2"/><line x1="12" y1="22" x2="12" y2="18"/></> },
                        { label: "Manual / Mechanical Control", icon: <><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></> },
                        { label: "Motor Control", icon: <><rect x="2" y="7" width="20" height="10" rx="2" ry="2"/><path d="M6 7v10M18 7v10M2 12h20"/></> },
                        { label: "Automatic Control", icon: <><rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><path d="M9 9h6v6H9z"/></> }
                    ].map((item, index) => (
                        <div key={index} className="tech-app-item">
                            <div className="tech-app-icon-wrap">
                                <svg viewBox="0 0 24 24">{item.icon}</svg>
                            </div>
                            <span className="tech-app-label">{item.label}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* ───────────────── CONTACT / FOOTER ───────────────── */}
            <Contact />
        </>
    );
};

export default Technology;
