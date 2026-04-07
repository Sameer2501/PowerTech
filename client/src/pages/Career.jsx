import React from 'react';
import Contact from '../components/Contact';
import mm from '../assets/mm.avif'; // User requested this for the hero
import img from '../assets/img22.jpg';
import img22 from '../assets/img22.jpg';
// import img from '../assets/img22.jpg';
const Career = () => {
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
          height: 400px;
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
          background: #1a7a1a; 
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

        /* ── INTRO SEC ── */
        .cr-intro {
          max-width: 1200px;
          margin: 80px auto;
          padding: 0 5%;
        }
        .cr-intro h2 {
          font-family: 'Inter', sans-serif;
          font-size: 24px;
          font-weight: 600;
          color: #111;
          margin-bottom: 25px;
          line-height: 1.4;
        }
        .cr-intro p {
          font-family: 'Inter', sans-serif;
          font-size: 16px;
          color: #444;
          line-height: 1.8;
          max-width: 1000px;
        }

        /* ── LIFE AT POWER TECH SEC ── */
        .cr-life-sec {
          max-width: 1200px;
          margin: 80px auto;
          padding: 0 5%;
          display: flex;
          align-items: center;
          position: relative;
        }
        .cr-life-img {
          width: 55%;
          height: 450px;
          object-fit: contain; /* Prevent the logo from being cropped */
          background-color: #fff;
          padding: 40px;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.06);
          display: block;
        }
        .cr-life-card {
          width: 50%;
          background: #000;
          color: #fff;
          padding: 50px 60px;
          margin-left: -5%; /* Overlap image */
          position: relative;
          z-index: 2;
        }
        .cr-life-card h2 {
          font-family: 'Rajdhani', sans-serif;
          font-size: 3.5rem;
          font-weight: 700;
          margin-bottom: 25px;
        }
        .cr-life-card p {
          font-family: 'Inter', sans-serif;
          font-size: 16px;
          line-height: 1.8;
          color: #eee;
        }

        /* ── FILL THE FORM SEC ── */
        .cr-form-sec {
          max-width: 1100px;
          margin: 100px auto;
          padding: 0 5%;
        }
        .cr-form-sec h2 {
          text-align: center;
          font-family: 'Inter', sans-serif;
          font-size: 40px;
          font-weight: 700;
          color: #000;
          margin-bottom: 60px;
        }
        .cr-form-wrap {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
        }
        .cr-form-img-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .cr-tea-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .cr-tea-form input[type="text"],
        .cr-tea-form input[type="email"],
        .cr-tea-form input[type="tel"] {
          width: 100%;
          padding: 14px 16px;
          border: 1px solid #ddd;
          font-family: 'Inter', sans-serif;
          font-size: 15px;
          outline: none;
          color: #333;
        }
        .cr-tea-form input::placeholder,
        .cr-tea-form textarea::placeholder {
          color: #888;
        }
        
        .cr-file-group {
          display: flex;
          align-items: center;
          gap: 10px;
          border: 1px solid #ddd;
          padding: 5px;
          background: #fff;
        }
        .cr-file-btn {
          background: #efefef;
          border: 1px solid #ccc;
          padding: 8px 14px;
          font-size: 14px;
          cursor: pointer;
          color: #333;
        }
        .cr-file-text {
          font-size: 14px;
          color: #666;
        }
        
        .cr-tea-form textarea {
          width: 100%;
          padding: 14px 16px;
          border: 1px solid #ddd;
          font-family: 'Inter', sans-serif;
          font-size: 15px;
          outline: none;
          min-height: 140px;
          resize: vertical;
          color: #333;
        }
        .cr-submit-btn {
          background: #1a7a1a; /* Green brand color */
          color: #fff;
          border: none;
          padding: 14px 40px;
          font-size: 16px;
          font-weight: 500;
          cursor: pointer;
          width: fit-content;
          transition: background 0.3s;
        }
        .cr-submit-btn:hover { background: #145e14; }

        /* RESPONSIVE */
        @media (max-width: 900px) {
          .cr-life-sec { flex-direction: column; }
          .cr-life-img { width: 100%; height: 350px; }
          .cr-life-card { width: 90%; margin-left: 0; margin-top: -50px; padding: 40px; }
          .cr-form-wrap { grid-template-columns: 1fr; }
        }
        @media (max-width: 600px) {
          .cp-hero-title-box h1 { font-size: 2rem; }
        }
      `}</style>

            <div className="cp-page">
                {/* ── HERO BANNER ── */}
                <section className="cp-hero">
                    <img
                        src={mm}
                        alt="Career Background"
                    />
                    <div className="cp-hero-title-box">
                        <h1>Career</h1>
                    </div>
                </section>
            </div>

            {/* ── INTRO ── */}
            <section className="cr-intro">
                <h2>We are growing and we're looking for passionate people to help us innovate at every level.</h2>
                <p>At Super Power Tech, we recognise talents, understanding the value that they bring to the organisation. We continually seek enthusiastic individuals who are keen to be a part of our growing business.</p>
            </section>

            {/* ── LIFE AT POWER TECH ── */}
            <section className="cr-life-sec">
                <img src={img22} alt="Life at Power Tech" className="cr-life-img" />
                <div className="cr-life-card">
                    <h2>Life At Super Power Tech</h2>
                    <p>Our core values to be a company of integrity and innovation is consistent throughout the business. If our values resonate strongly with you and you are equipped for the challenge, Kindly let us know what kind of work you're passionate about and we'll notify you when matching career opportunities become available.</p>
                </div>
            </section>

            {/* ── FILL THE FORM ── */}
            <section className="cr-form-sec">
                <h2>Fill the Form</h2>
                <div className="cr-form-wrap">
                    <div className="cr-form-img-box">
                        <img src={img} alt="Construction Power Tech Worker" />
                    </div>

                    <form className="cr-tea-form">
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <input type="tel" placeholder="Phone" />

                        <div className="cr-file-group">
                            <label className="cr-file-btn">
                                Choose File
                                <input type="file" style={{ display: 'none' }} />
                            </label>
                            <span className="cr-file-text">No file chosen</span>
                        </div>

                        <textarea placeholder="Message"></textarea>

                        <button type="submit" className="cr-submit-btn" onClick={(e) => e.preventDefault()}>Submit</button>
                    </form>
                </div>
            </section>

            {/* ───────────────── CONTACT / FOOTER ───────────────── */}
            <Contact />
        </>
    );
};

export default Career;
