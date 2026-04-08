import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Contact from '../components/Contact';
// import img from '../assets/img22.jpg';
import works from '../assets/work.jpeg';
import temp from '../assets/temp.jpeg'
import cnt from '../assets/cnt.avif'

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const loadToast = toast.loading("Sending your message...");

    // Syncing with Dashboard Variables: {{name}}, {{email}}, {{time}}, {{title}}, {{message}}, {{phone}}
    const templateParams = {
      name: form.current.from_name.value,
      email: form.current.from_email.value, // Used in 'Reply To' on dashboard
      from_email: form.current.from_email.value,
      phone: form.current.phone.value,
      message: form.current.message.value,
      time: new Date().toLocaleString(),
      title: "New Website Inquiry"
    };

    emailjs.send(
      'service_1jhgwor',
      'template_616u8sg',
      templateParams,
      'XOtL4BJzmb98AETMb'
    )
      .then((result) => {
        toast.update(loadToast, { render: "Message sent successfully! 🚀", type: "success", isLoading: false, autoClose: 5000 });
        e.target.reset();
      }, (error) => {
        toast.update(loadToast, { render: "Failed to send: " + (error?.text || "Unknown error"), type: "error", isLoading: false, autoClose: 5000 });
        console.error("EmailJS Error:", error);
      });
  };

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

        /* ── DISCOVER FORM SEC ── */
        .cu-transform-sec {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          max-width: 1200px;
          margin: 100px auto;
          padding: 0 5%;
        }
        .cu-transform-left h2 {
          font-family: 'Rajdhani', sans-serif;
          font-size: 3.5rem;
          font-weight: 600;
          line-height: 1.1;
          color: #111;
          margin-bottom: 25px;
        }
        .cu-transform-left p {
          font-size: 19px;
          color: #555;
          margin-bottom: 40px;
          line-height: 1.6;
        }
        .cu-map-wrap {
          width: 100%;
          border: 1px solid #ddd;
        }
        
        .cu-tea-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .cu-tea-form input[type="text"],
        .cu-tea-form input[type="email"],
        .cu-tea-form input[type="tel"] {
          width: 100%;
          padding: 14px 16px;
          border: 1px solid #ddd;
          font-family: 'Inter', sans-serif;
          font-size: 17px;
          outline: none;
          color: #333;
        }
        .cu-tea-form input::placeholder,
        .cu-tea-form textarea::placeholder {
          color: #888;
        }
        
        .cu-file-group {
          display: flex;
          align-items: center;
          gap: 10px;
          border: 1px solid #ddd;
          padding: 5px;
          background: #fff;
        }
        .cu-file-btn {
          background: #efefef;
          border: 1px solid #ccc;
          padding: 8px 14px;
          font-size: 14px;
          cursor: pointer;
          color: #333;
        }
        .cu-file-text {
          font-size: 14px;
          color: #666;
        }
        
        .cu-tea-form textarea {
          width: 100%;
          padding: 14px 16px;
          border: 1px solid #ddd;
          font-family: 'Inter', sans-serif;
          font-size: 17px;
          outline: none;
          min-height: 120px;
          resize: vertical;
          color: #333;
        }
        .cu-submit-btn {
          background: #1a7a1a;  /* Red button from screenshot */
          color: #fff;
          border: none;
          padding: 13px 32px;
          font-size: 18px;
          font-weight: 500;
          cursor: pointer;
          width: fit-content;
          transition: background 0.3s;
        }
        .cu-submit-btn:hover { background: #aa1a1f; }

        /* ── INFO SEC ── */
        .cu-info-sec {
          max-width: 1100px;
          margin: 100px auto;
          padding: 0 5%;
          display: flex;
          flex-direction: column;
          gap: 60px;
        }
        
        .cu-info-row {
          display: grid;
          grid-template-columns: 25% 35% 40%;
          gap: 30px;
          align-items: flex-start;
          padding-bottom: 50px;
          border-bottom: 1px solid #eee;
        }
        .cu-info-row:last-child {
          border-bottom: none;
        }
        
        .cu-info-title {
          font-family: 'Inter', sans-serif;
          font-size: 2rem;
          font-weight: 600;
          color: #111;
          margin-top: 5px;
        }
        .cu-info-img img {
          width: 100%;
          height: auto;
          display: block;
          object-fit: cover;
          max-height: 300px;
        }
        .cu-info-text {
          font-family: 'Inter', sans-serif;
          font-size: 16px;
          color: #333;
          line-height: 1.6;
        }
        .cu-info-text h4 {
          font-size: 18px;
          font-weight: 700;
          margin: 0 0 5px;
          color: #111;
        }
        .cu-info-text p {
          margin: 0 0 15px;
        }
        .cu-info-text strong {
          font-weight: 600;
          color: #111;
        }

        @media (max-width: 900px) {
          .cu-transform-sec { grid-template-columns: 1fr; }
          .cu-info-row { grid-template-columns: 1fr; gap: 20px; }
          .cu-info-title { font-size: 1.8rem; }
        }
      `}</style>

      <div className="cp-page">
        {/* ── HERO BANNER ── */}
        <section className="cp-hero">
          <img
            src={cnt}
            alt="Contact Us Background"
          />
          <div className="cp-hero-title-box">
            <h1>Contact Us</h1>
          </div>
        </section>
      </div>

      {/* ── MAP SECTION ── */}
      <div style={{ maxWidth: '1200px', margin: '100px auto', padding: '0 5%' }}>
        <div className="cu-map-wrap" style={{ margin: '0 auto' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3425.3663732264276!2d75.90182497558489!3d30.84841597452874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDUwJzU0LjMiTiA3NcKwNTQnMTUuOCJF!5e0!3m2!1sen!2sin!4v1775555713678!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>

      {/* ── SECTION 1: DISCOVER DIGITAL TRANSFORMATION ── */}
      <section className="cu-transform-sec">
        <div className="cu-transform-left">
          <h2>Connect With<br />Our Experts</h2>
          <p>Reach out to discuss your unique power infrastructure needs. Our engineering team is ready to deliver tailored, high-performance solutions for your facility.</p>
        </div>

        <div className="cu-transform-right">
          <form ref={form} onSubmit={sendEmail} className="cu-tea-form">
            <input type="text" name="from_name" placeholder="Name" required />
            <input type="email" name="from_email" placeholder="Email" required />
            <input type="tel" name="phone" placeholder="Phone" />

            <textarea name="message" placeholder="Message" required></textarea>

            <button type="submit" className="cu-submit-btn">Submit</button>
          </form>
        </div>
      </section>

      {/* ── SECTION 2: CORPORATE MARKETING & WORKS ── */}
      <section className="cu-info-sec">
        {/* Row 1 */}
        <div className="cu-info-row">
          <div className="cu-info-title">Our Company</div>
          <div className="cu-info-img">
            <img src={temp} alt="Super Power Tech" />
          </div>
          <div className="cu-info-text">
            <h4>For Electricals:</h4>
            <p>
              <strong>Address:</strong> Plot No. 76, Karamjit Nagar, Satsang Ghar Road, Near Universal School, Lohara, Ludhiana-141016
            </p>
            <p>
              <strong>Phone:</strong> +91 96535 24848, +91 93578 16285
            </p>
            <p>
              <strong>Email:</strong> info.superpowertech@gmail.com
            </p>
          </div>
        </div>

        {/* Row 2 */}
        <div className="cu-info-row">
          <div className="cu-info-title">Works</div>
          <div className="cu-info-img">
            <img src={works} alt="Factory Works" />
          </div>
          <div className="cu-info-text">
            <h4>Super Power Tech:</h4>
            <p>
              <strong>Address:</strong> Plot No. 76, Karamjit Nagar, Satsang Ghar Road, Near Universal School, Lohara, Ludhiana-141016
            </p>
            <p>
              <strong>Email:</strong> info.superpowertech@gmail.com
            </p>
          </div>
        </div>
      </section>

      {/* ───────────────── CONTACT / FOOTER ───────────────── */}
      <Contact />
      <ToastContainer position="top-right" theme="dark" />
    </>
  );
};

export default ContactUs;
