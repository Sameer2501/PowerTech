import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Contact from "./Contact";
import p1 from '../assets/p1.jpeg';
import h1 from '../assets/h1.jpeg';
import e1 from '../assets/e1.jpeg';
import c1 from '../assets/c1.jpeg';
import cl1 from '../assets/cl1.jpeg';
import cl2 from '../assets/cl2.jpeg';
import cl3 from '../assets/cl3.jpeg';
import cl4 from '../assets/cl4.jpeg';
import cl5 from '../assets/cl5.jpeg';
import cl6 from '../assets/cl6.jpeg';
import cl7 from '../assets/cl7.jpeg';
const slides = [
  {
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1600&q=80",
    heading: "Sahi Voltage",
    heading2: "Jyada Life",
    sub: "Delivering next-generation energy solutions built for reliability and performance.",
    cards: [
      {
        icon: "bolt",
        title: "Save Energy Up To 98%",
        desc: "Drastically reduce energy consumption across all your installations.",
      },
      {
        icon: "shield",
        title: "Certified & Reliable",
        desc: "ISO certified products trusted by thousands of installations across India.",
      },
    ],
  },
  {
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1600&q=80",
    heading: "Powering India's",
    heading2: "Green Future",
    sub: "Eco-friendly technology designed for long-term sustainability and efficiency.",
    cards: [
      {
        icon: "leaf",
        title: "Eco-Friendly Technology",
        desc: "Green stabilizers designed for long-term sustainability solutions.",
      },
      {
        icon: "sun",
        title: "Solar Ready Systems",
        desc: "Seamlessly integrates with solar panels and renewable energy setups.",
      },
    ],
  },
  {
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1600&q=80",
    heading: "Innovation at",
    heading2: "Every Level",
    sub: "Smart systems engineered to save energy and reduce operational costs.",
    cards: [
      {
        icon: "chip",
        title: "Smart Technology",
        desc: "AI-powered monitoring and control for maximum operational efficiency.",
      },
      {
        icon: "clock",
        title: "24 / 7 Support",
        desc: "Round-the-clock technical assistance and on-site maintenance services.",
      },
    ],
  },
];

const Icon = ({ name }) => {
  if (name === "bolt") return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="32" height="32">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  );
  if (name === "shield") return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="32" height="32">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
  if (name === "leaf") return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="32" height="32">
      <path d="M17 8C8 10 5.9 16.17 3.82 19.21A1 1 0 005 21C10.68 21 18 16 17 8z" />
    </svg>
  );
  if (name === "sun") return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="32" height="32">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
  if (name === "chip") return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="32" height="32">
      <rect x="7" y="7" width="10" height="10" rx="1" />
      <path d="M9 7V4M12 7V4M15 7V4M9 20v-3M12 20v-3M15 20v-3M4 9h3M4 12h3M4 15h3M17 9h3M17 12h3M17 15h3" />
    </svg>
  );
  if (name === "clock") return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="32" height="32">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
  return null;
};

const products = [
  {
    id: 'voltage-stabilizers',
    title: "Servo Voltage Stabilizers",
    desc: "SPT's Servo Voltage Stabilizers provide foolproof protection against voltage fluctuations for all your equipment.",
    image: p1,
  },
  {
    id: 'ht-transformers',
    title: "HT TRANSFORMER",
    desc: "SPT manufactures a range of HT Transformers built for demanding industrial environments.",
    image: h1,
  },
  {
    id: 'control-panels',
    title: "CONTROL PANEL",
    desc: "SPT manufactures a range of Control Panels built for demanding industrial environments.",
    image: c1,
  },
  {
    id: 'electroplating-rectifiers',
    title: "ELECTROPLATING RECTIFIER",
    desc: "SPT manufactures a range of Electroplating Rectifiers built for demanding industrial environments.",
    image: e1,
  },
];

export default function Home() {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const [nextIdx, setNextIdx] = useState(null);
  const [phase, setPhase] = useState("idle"); // idle | out | in
  const timerRef = useRef(null);

  const triggerSlide = (idx) => {
    if (phase !== "idle" || idx === current) return;
    setNextIdx(idx);
    setPhase("out");
  };

  useEffect(() => {
    if (phase === "out") {
      const t = setTimeout(() => {
        setCurrent(nextIdx);
        setPhase("in");
      }, 450);
      return () => clearTimeout(t);
    }
    if (phase === "in") {
      const t = setTimeout(() => setPhase("idle"), 50);
      return () => clearTimeout(t);
    }
  }, [phase, nextIdx]);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrent((prev) => {
        const next = (prev + 1) % slides.length;
        setNextIdx(next);
        setPhase("out");
        return prev;
      });
    }, 5500);
    return () => clearInterval(timerRef.current);
  }, []);

  const slide = slides[current];
  const isOut = phase === "out";

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@500;600;700&family=Inter:wght@400;500&display=swap');

        .hw { position:relative; width:100%; height:100vh; min-height:600px; overflow:hidden; }

        /* BG crossfade — two stacked images */
        .hw-bg { 
          position:absolute; inset:0; z-index:0; 
          background: #cfcfcf;
        }
        .hw-bg img {
          position:absolute; inset:0;
          width:100%; height:100%; object-fit:cover;
          transition: opacity 0.55s ease;
        }
        .hw-bg img.behind  { z-index:0; opacity:1; }
        .hw-bg img.top     { z-index:1; opacity:1; }
        .hw-bg img.top.out { opacity:0; }

        .hw-ov {
          position:absolute; inset:0; z-index:2;
          background: linear-gradient(to right, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.50) 55%, rgba(0,0,0,0.15) 100%);
        }
        .hw-bfade {
          position:absolute; bottom:0; left:0; right:0; height:140px; z-index:3;
          background: linear-gradient(to top, rgba(0,0,0,0.60), transparent);
        }
        .hw-lbar {
          position:absolute; top:0; bottom:0; left:0; width:4px; z-index:4;
          background: linear-gradient(to bottom, #39ff14, #1a7a1a 60%, transparent);
        }

        /* CONTENT */
        .hw-body {
          position:absolute; inset:0; z-index:10;
          display:flex; flex-direction:column; justify-content:center;
          padding: 0 5rem;
        }

        .hw-tag {
          display:flex; align-items:center; gap:10px;
          margin-bottom:1rem;
          transition: opacity 0.4s ease, transform 0.4s ease;
        }
        .hw-tag.out { opacity:0; transform:translateY(-14px); }
        .hw-tag.in  { opacity:0; animation: fadeUp 0.55s ease 0.05s forwards; }
        .hw-tag-ln  { width:34px; height:2px; background:#2ecc2e; flex-shrink:0; }
        .hw-tag-tx  {
          color:#2ecc2e; font-family:'Inter',sans-serif;
          font-size:12.5px; font-weight:600; letter-spacing:3.5px; text-transform:uppercase;
        }

        .hw-h1 {
          color:#fff; font-family:'Rajdhani',sans-serif;
          font-weight:700; font-size:clamp(2.8rem,5.5vw,5rem);
          line-height:1.04; margin:0 0 1rem;
          transition: opacity 0.4s ease, transform 0.4s ease;
        }
        .hw-h1.out { opacity:0; transform:translateY(-14px); }
        .hw-h1.in  { opacity:0; animation: fadeUp 0.55s ease 0.12s forwards; }
        .hw-h1 .gr { color:#2ecc2e; }

        .hw-p {
          color:rgba(255,255,255,0.70); font-family:'Inter',sans-serif;
          font-size:1.06rem; line-height:1.7; max-width:420px; margin:0 0 2rem;
          transition: opacity 0.4s ease, transform 0.4s ease;
        }
        .hw-p.out { opacity:0; transform:translateY(-14px); }
        .hw-p.in  { opacity:0; animation: fadeUp 0.55s ease 0.20s forwards; }

        /* BUTTON — inline-flex + width:fit-content so it never stretches */
        .hw-btn {
          display:inline-flex; align-items:center; gap:12px;
          width: fit-content;
          background:#1a7a1a; color:#fff;
          font-family:'Rajdhani',sans-serif; font-weight:700;
          font-size:14px; letter-spacing:2px; text-transform:uppercase;
          padding:13px 28px; border-radius:50px; border:none; cursor:pointer;
          transition: background 0.25s, box-shadow 0.25s, opacity 0.4s, transform 0.4s;
        }
        .hw-btn.out { opacity:0; transform:translateY(-14px); }
        .hw-btn.in  { opacity:0; animation: fadeUp 0.55s ease 0.28s forwards; }
        .hw-btn:hover { background:#0d4f0d; box-shadow:0 6px 28px rgba(26,122,26,0.5); }
        .hw-btn:hover .hw-arr { transform:translateX(5px); }
        .hw-arr {
          display:flex; align-items:center; justify-content:center;
          width:22px; height:22px; border-radius:50%;
          background:rgba(255,255,255,0.18);
          transition:transform 0.25s;
          flex-shrink:0;
        }

        /* DOTS */
        .hw-dots {
          display:flex; align-items:center; gap:10px; margin-top:2rem;
          opacity:0; animation: fadeUp 0.55s ease 0.5s forwards;
        }
        .hw-dot { border:none; border-radius:50px; cursor:pointer; padding:0; transition:all 0.3s; }
        .hw-dot.on  { width:30px; height:10px; background:#2ecc2e; }
        .hw-dot.off { width:10px; height:10px; background:rgba(255,255,255,0.32); }
        .hw-dot.off:hover { background:rgba(255,255,255,0.65); }

        /* STAT CARDS — horizontal row, right side, vertically centered */
        .hw-cards {
          position:absolute;
          right: 30px;
          top: 50%;
          transform: translateY(-50%);
          z-index:10;
          display:flex;
          flex-direction:row;
          gap: 0;
        }

        .sc {
          width:300px; padding:30px 26px;
          background:rgba(0,0,0,0.62);
          border-top:3px solid #1a7a1a;
          backdrop-filter:blur(8px); -webkit-backdrop-filter:blur(8px);
          transition: background 0.3s, border-color 0.3s;
          cursor:default;
        }
        .sc:hover { background:rgba(26,122,26,0.90); border-top-color:#39ff14; }

        .sc-icon { color:#2ecc2e; margin-bottom:14px; transition:color 0.3s; }
        .sc:hover .sc-icon { color:#fff; }

        .sc-title {
          color:#fff; font-family:'Rajdhani',sans-serif;
          font-weight:700; font-size:22px; line-height:1.25;
          margin:0 0 10px; letter-spacing:0.3px;
          transition: opacity 0.35s ease, transform 0.35s ease;
        }
        .sc-title.out { opacity:0; transform:translateY(-10px); }
        .sc-title.in  { opacity:0; animation: fadeUp 0.45s ease 0.1s forwards; }

        .sc-desc {
          color:rgba(255,255,255,0.58); font-family:'Inter',sans-serif;
          font-size:15px; line-height:1.6; margin:0;
          transition: color 0.3s, opacity 0.35s ease, transform 0.35s ease;
        }
        .sc-desc.out { opacity:0; transform:translateY(-10px); }
        .sc-desc.in  { opacity:0; animation: fadeUp 0.45s ease 0.18s forwards; }
        .sc:hover .sc-desc { color:rgba(255,255,255,0.85); }

        @keyframes fadeUp {
          from { opacity:0; transform:translateY(22px); }
          to   { opacity:1; transform:translateY(0); }
        }

        @media (max-width:768px) {
          .hw-body { 
            padding: 0 1.5rem; 
          }
          .hw-cards { 
            display: none !important; 
          }
          .hw-h1 { font-size: 2.6rem; }
          .hw-p { font-size: 1.05rem; }
        }

        /* ═══════════ PRODUCTS SECTION ═══════════ */
        .ps-wrap {
          background: #f7f7f7;
          padding: 80px 5rem;
          font-family: 'Inter', sans-serif;
        }

        .ps-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 48px;
        }

        .ps-title-wrap {
          display: flex;
          align-items: center;
          gap: 18px;
        }

        .ps-title-bar {
          width: 4px;
          height: 52px;
          background: #1a7a1a;
          border-radius: 2px;
          flex-shrink: 0;
        }

        .ps-title {
          font-family: 'Rajdhani', sans-serif;
          font-size: clamp(2rem, 3.5vw, 2.8rem);
          font-weight: 700;
          color: #111;
          margin: 0;
          letter-spacing: 0.5px;
        }

        .ps-more-btn {
          display: inline-flex;
          align-items: center;
          width: fit-content;
          background: #1a7a1a;
          color: #fff;
          font-family: 'Rajdhani', sans-serif;
          font-weight: 700;
          font-size: 14px;
          letter-spacing: 2px;
          text-transform: uppercase;
          padding: 13px 28px;
          border-radius: 50px;
          border: none;
          cursor: pointer;
          transition: background 0.25s, box-shadow 0.25s;
          white-space: nowrap;
        }
        .ps-more-btn:hover {
          background: #0d4f0d;
          box-shadow: 0 6px 24px rgba(26,122,26,0.4);
        }

        .ps-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .ps-card {
          background: #fff;
          border-radius: 12px;
          border: 1px solid #e8e8e8;
          overflow: hidden;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          transition: box-shadow 0.28s, transform 0.28s, border-color 0.28s;
          position: relative;
        }
        .ps-card::before {
          content: '';
          display: block;
          height: 3px;
          background: #1a7a1a;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.28s ease;
        }
        .ps-card:hover::before { transform: scaleX(1); }
        .ps-card:hover {
          box-shadow: 0 12px 40px rgba(26,122,26,0.13);
          transform: translateY(-5px);
          border-color: #1a7a1a;
        }

        .ps-card-body {
          padding: 24px 20px 8px;
          flex: 1;
        }

        .ps-card-title {
          font-family: 'Rajdhani', sans-serif;
          font-size: 24px;
          font-weight: 700;
          color: #1a7a1a;
          line-height: 1.25;
          margin: 0 0 10px;
          text-align: center;
        }

        .ps-card-desc {
          font-family: 'Inter', sans-serif;
          font-size: 15px;
          color: #444;
          line-height: 1.6;
          margin: 0;
          text-align: center;
        }

        .ps-card-img {
          width: 100%;
          height: 280px;
          overflow: hidden;
          background: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 6px;
        }
        .ps-card-img img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          transition: transform 0.4s ease;
        }
        .ps-card:hover .ps-card-img img { transform: scale(1.06); }

        @media (max-width: 1024px) {
          .ps-grid { grid-template-columns: repeat(2, 1fr); }
          .ps-wrap { padding: 60px 2rem; }
        }
        @media (max-width: 600px) {
          .ps-grid { grid-template-columns: 1fr; }
          .ps-header { flex-direction: column; gap: 20px; align-items: flex-start; }
        }

        /* ═══════════ ABOUT SECTION ═══════════ */
        .ab-wrap {
          background: #f0f0f0;
          padding: 80px 5rem;
          font-family: 'Inter', sans-serif;
          position: relative;
          overflow: hidden;
        }
        .ab-wrap::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(26,122,26,0.045) 1px, transparent 1px),
            linear-gradient(90deg, rgba(26,122,26,0.045) 1px, transparent 1px);
          background-size: 40px 40px;
          pointer-events: none;
        }
        .ab-inner {
          position: relative;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }
        .ab-title-wrap {
          display: flex;
          align-items: flex-start;
          gap: 18px;
          margin-bottom: 28px;
        }
        .ab-title-bar {
          width: 4px;
          min-height: 60px;
          background: #1a7a1a;
          border-radius: 2px;
          flex-shrink: 0;
          margin-top: 4px;
        }
        .ab-title {
          font-family: 'Rajdhani', sans-serif;
          font-size: clamp(2rem, 3.5vw, 2.8rem);
          font-weight: 700;
          color: #111;
          margin: 0;
          letter-spacing: 0.3px;
        }
        .ab-desc {
          font-size: 15.5px;
          color: #444;
          line-height: 1.8;
          margin: 0 0 36px;
          max-width: 540px;
        }
        .ab-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          width: fit-content;
          background: #1a7a1a;
          color: #fff;
          font-family: 'Rajdhani', sans-serif;
          font-weight: 700;
          font-size: 14px;
          letter-spacing: 2px;
          text-transform: uppercase;
          padding: 13px 28px;
          border-radius: 50px;
          border: none;
          cursor: pointer;
          transition: background 0.25s, box-shadow 0.25s;
        }
        .ab-btn:hover { background: #0d4f0d; box-shadow: 0 6px 24px rgba(26,122,26,0.4); }
        .ab-btn:hover .ab-arr { transform: translateX(5px); }
        .ab-arr { transition: transform 0.25s; }
        .ab-stats {
          display: flex;
          align-items: flex-start;
          gap: 48px;
          margin-top: 44px;
          padding-top: 36px;
          border-top: 1px solid #d5d5d5;
        }
        .ab-stat-num {
          font-family: 'Rajdhani', sans-serif;
          font-size: 2.6rem;
          font-weight: 700;
          color: #1a7a1a;
          line-height: 1;
          margin: 0 0 6px;
        }
        .ab-stat-label {
          font-size: 13.5px;
          color: #666;
          margin: 0;
        }
        .ab-img-wrap {
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 16px 48px rgba(0,0,0,0.12);
          aspect-ratio: 4/3;
          background: #d9d9d9;
        }
        .ab-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .ab-img-wrap:hover img { transform: scale(1.04); }
        @media (max-width: 900px) {
          .ab-inner { grid-template-columns: 1fr; }
          .ab-wrap { padding: 60px 2rem; }
        }
      `}</style>

      <section className="hw">

        {/* CROSSFADE BG — two images stacked */}
        <div className="hw-bg">
          {/* previous image stays behind */}
          <img
            src={slides[nextIdx !== null ? nextIdx : current]?.image}
            alt=""
            className="behind"
          />
          {/* current image on top, fades out when transitioning */}
          <img
            key={current}
            src={slides[current].image}
            alt=""
            className={`top${isOut ? " out" : ""}`}
          />
        </div>
        <div className="hw-ov" />
        <div className="hw-bfade" />
        <div className="hw-lbar" />

        {/* TEXT CONTENT */}
        <div className="hw-body">

          <div className={`hw-tag ${isOut ? "out" : "in"}`}>
            <span className="hw-tag-ln" />
            <span className="hw-tag-tx">Super Power Tech</span>
          </div>

          <h1 className={`hw-h1 ${isOut ? "out" : "in"}`}>
            {slide.heading}<br />
            <span className="gr">{slide.heading2}</span>
          </h1>

          <p className={`hw-p ${isOut ? "out" : "in"}`}>
            {slide.sub}
          </p>

          <button className={`hw-btn ${isOut ? "out" : "in"}`} onClick={() => navigate('/products')}>
            More About Products
            <span className="hw-arr">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="13" height="13">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </button>

          <div className="hw-dots">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => triggerSlide(i)}
                className={`hw-dot ${i === current ? "on" : "off"}`}
              />
            ))}
          </div>
        </div>

        {/* 2 STAT CARDS synced with slide */}
        <div className="hw-cards">
          {slide.cards.map((c, i) => (
            <div key={`${current}-${i}`} className="sc">
              <div className="sc-icon"><Icon name={c.icon} /></div>
              <p className={`sc-title ${isOut ? "out" : "in"}`}
                style={{ animationDelay: `${0.08 + i * 0.06}s` }}>
                {c.title}
              </p>
              <p className={`sc-desc ${isOut ? "out" : "in"}`}
                style={{ animationDelay: `${0.15 + i * 0.06}s` }}>
                {c.desc}
              </p>
            </div>
          ))}
        </div>

      </section>

      {/* ───────────────── OUR PRODUCTS ───────────────── */}
      <section className="ps-wrap">

        {/* HEADER */}
        <div className="ps-header">
          <div className="ps-title-wrap">
            <div className="ps-title-bar" />
            <h2 className="ps-title">Our Products</h2>
          </div>
          <button className="ps-more-btn" onClick={() => navigate('/products')}>
            More Products
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="14" height="14" style={{ marginLeft: 8 }}>
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* CARDS GRID */}
        <div className="ps-grid">
          {products.map((p, i) => (
            <div
              key={i}
              className="ps-card"
              onClick={() => { navigate('/products/' + p.id); }}
            >
              <div className="ps-card-body">
                <h3 className="ps-card-title">{p.title}</h3>
                <p className="ps-card-desc">{p.desc}</p>
              </div>
              <div className="ps-card-img">
                <img src={p.image} alt={p.title} />
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* ───────────────── ABOUT SECTION ───────────────── */}
      <section className="ab-wrap">
        <div className="ab-inner">

          {/* LEFT */}
          <div className="ab-left">
            <div className="ab-title-wrap">
              <div className="ab-title-bar" />
              <h2 className="ab-title">About Super Power Tech</h2>
            </div>

            <p className="ab-desc">
              Started back in year 2010 with the physical location in Ludhiana, Punjab, our company named Super Power
              Electricals is specialized in manufacturing electrical gadgets. Our wide range of products includes Servo Voltage
              Stabilizer, Control Panel, Electro Plating Rectifier, Battery Charger, Plate Charger, Power Factor Panel, Step Down
              Transformer, On-line UPS, HT Transformer, Isolation Transformer etc. Our manager Mr. Ansari is taking care of our
              business operations and makes sure that company delivers the best value of customers money. We have been
              developing our product line under the leadership of our Technical Manager & Team. Mr. Ansari is a technically
              qualified person and having a experience of more than decade. From manufacturing to delivering the products, we
              have trained staff which works tirelessly to keep the company ahead in the market. We are one of the most reliable
              companies which offer electrical products with performance at economical rates.
            </p>

            <button className="ab-btn" onClick={() => navigate('/company')}>
              Know More
              <span className="ab-arr">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="14" height="14">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </button>

            <div className="ab-stats">
              <div>
                <p className="ab-stat-num">20+</p>
                <p className="ab-stat-label">Years of Experience</p>
              </div>
              <div>
                <p className="ab-stat-num">7+</p>
                <p className="ab-stat-label">Global Presence</p>
              </div>
              <div>
                <p className="ab-stat-num">1500+</p>
                <p className="ab-stat-label">Happy Clients</p>
              </div>
            </div>
          </div>

          {/* RIGHT — image */}
          <div className="ab-img-wrap">
            <img
              src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80"
              alt="Super Power Tech facility"
            />
          </div>

        </div>
      </section>

      {/* ───────────────── INDUSTRIES WE SERVE ───────────────── */}
      <IndustriesSection />

      {/* ───────────────── CLIENTS MARQUEE ───────────────── */}
      <ClientsMarquee />

      {/* ───────────────── CONTACT / FOOTER ───────────────── */}
      <Contact />
    </>
  );
}

const industries = [
  {
    title: "Electronics & Electrical Equipment Manufacturing",
    desc: "Delivering Stabilizers And Custom Power Solutions That Support Electronics And Electrical Manufacturing And Testing With Precision And Consistency.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    clients: ["Mahindra", "Hyundai", "Siemens", "ABB"],
  },
  {
    title: "Automotive Industry",
    desc: "Supplying Robust Voltage Controllers And Rectifiers That Meet The High-Demand Power Requirements Of Modern Automotive Production Lines.",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80",
    clients: ["Tata Motors", "Maruti", "Bajaj", "Hero"],
  },
  {
    title: "Steel & Metal Industry",
    desc: "Powering Heavy-Duty Processes In Steel Plants With Industrial-Grade Silicon Rectifiers And Special Purpose Transformers Built For Extreme Loads.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80",
    clients: ["SAIL", "JSW Steel", "Tata Steel", "Jindal"],
  },
  {
    title: "Pharmaceuticals & Healthcare",
    desc: "Ensuring Clean And Stable Power Supply For Sensitive Pharmaceutical Equipment, Maintaining Process Integrity And Regulatory Compliance.",
    image: "https://images.unsplash.com/photo-1585435557343-3b092031a831?w=800&q=80",
    clients: ["Sun Pharma", "Cipla", "Dr. Reddy's", "Lupin"],
  },
  {
    title: "Textile Industry",
    desc: "Providing Continuous Voltage Regulation That Protects Textile Machinery From Fluctuations, Reducing Downtime And Maximizing Productivity.",
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&q=80",
    clients: ["Arvind", "Vardhman", "Welspun", "Raymond"],
  },
];

function IndustriesSection() {
  const [active, setActive] = useState(0);
  const [animDir, setAnimDir] = useState(null);
  const [animating, setAnimating] = useState(false);
  const timerRef = useRef(null);
  const pausedRef = useRef(false);

  const goTo = (idx, dir) => {
    if (animating) return;
    setAnimDir(dir);
    setAnimating(true);
    setTimeout(() => {
      setActive(idx);
      setAnimDir(null);
      setTimeout(() => setAnimating(false), 50);
    }, 320);
  };

  const prev = () => goTo((active - 1 + industries.length) % industries.length, "right");
  const next = () => goTo((active + 1) % industries.length, "left");

  // ── AUTO-SCROLL ──
  useEffect(() => {
    timerRef.current = setInterval(() => {
      if (pausedRef.current) return;
      setActive((prev) => {
        const next = (prev + 1) % industries.length;
        setAnimDir("left");
        setAnimating(true);
        setTimeout(() => {
          setActive(next);
          setAnimDir(null);
          setTimeout(() => setAnimating(false), 50);
        }, 320);
        return prev;
      });
    }, 4500);
    return () => clearInterval(timerRef.current);
  }, []);

  const handleMouseEnter = () => { pausedRef.current = true; };
  const handleMouseLeave = () => { pausedRef.current = false; };

  const ind = industries[active];

  return (
    <>
      <style>{`
        /* ═══════════ INDUSTRIES SECTION ═══════════ */
        .iw-wrap {
          background: #fff;
          padding: 80px 5rem;
          font-family: 'Inter', sans-serif;
        }

        .iw-header {
          display: flex;
          align-items: center;
          gap: 18px;
          margin-bottom: 48px;
        }

        .iw-title-bar {
          width: 4px;
          height: 52px;
          background: #1a7a1a;
          border-radius: 2px;
          flex-shrink: 0;
        }

        .iw-title {
          font-family: 'Rajdhani', sans-serif;
          font-size: clamp(2rem, 3.5vw, 2.8rem);
          font-weight: 700;
          color: #111;
          margin: 0;
          letter-spacing: 0.5px;
        }

        .iw-card {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
          border: 1px solid #e8e8e8;
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 8px 36px rgba(0,0,0,0.07);
          min-height: 360px;
        }

        .iw-img-wrap {
          overflow: hidden;
          position: relative;
        }

        .iw-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }
        .iw-img-wrap:hover img { transform: scale(1.04); }

        .iw-content {
          padding: 48px 44px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          background: #fff;
          transition: opacity 0.32s ease, transform 0.32s ease;
        }

        .iw-content.slide-out-left  { opacity: 0; transform: translateX(-28px); }
        .iw-content.slide-out-right { opacity: 0; transform: translateX(28px); }
        .iw-content.slide-in        { opacity: 0; animation: iw-fadeIn 0.38s ease 0.05s forwards; }

        @keyframes iw-fadeIn {
          from { opacity: 0; transform: translateX(18px); }
          to   { opacity: 1; transform: translateX(0); }
        }

        .iw-ind-title {
          font-family: 'Rajdhani', sans-serif;
          font-size: clamp(1.6rem, 2.4vw, 2.1rem);
          font-weight: 700;
          color: #1a7a1a;
          margin: 0 0 18px;
          line-height: 1.25;
          letter-spacing: 0.3px;
        }

        .iw-ind-desc {
          font-size: 17px;
          color: #555;
          line-height: 1.8;
          margin: 0 0 30px;
          max-width: 460px;
        }

        /* CLIENT LOGOS */
        .iw-logos {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 32px;
          flex-wrap: wrap;
        }

        .iw-logo-pill {
          padding: 6px 16px;
          border: 1.5px solid #d0e8d0;
          border-radius: 6px;
          font-family: 'Rajdhani', sans-serif;
          font-size: 13px;
          font-weight: 700;
          color: #1a7a1a;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          background: rgba(26,122,26,0.04);
          white-space: nowrap;
          transition: border-color 0.2s, background 0.2s;
        }
        .iw-logo-pill:hover {
          border-color: #1a7a1a;
          background: rgba(26,122,26,0.09);
        }

        /* KNOW MORE BUTTON */
        .iw-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          width: fit-content;
          background: #1a7a1a;
          color: #fff;
          font-family: 'Rajdhani', sans-serif;
          font-weight: 700;
          font-size: 13px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          padding: 12px 26px;
          border-radius: 50px;
          border: none;
          cursor: pointer;
          transition: background 0.25s, box-shadow 0.25s;
        }
        .iw-btn:hover {
          background: #0d4f0d;
          box-shadow: 0 6px 24px rgba(26,122,26,0.4);
        }
        .iw-btn:hover .iw-arr { transform: translateX(5px); }
        .iw-arr { transition: transform 0.25s; display: flex; align-items: center; }

        /* NAVIGATION ARROWS */
        .iw-nav {
          display: flex;
          justify-content: flex-end;
          gap: 12px;
          margin-top: 24px;
        }

        .iw-nav-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 1.5px solid #ccc;
          background: #fff;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #333;
          transition: all 0.22s ease;
        }
        .iw-nav-btn:hover {
          border-color: #1a7a1a;
          color: #1a7a1a;
          box-shadow: 0 4px 16px rgba(26,122,26,0.18);
        }
        .iw-nav-btn svg {
          width: 18px;
          height: 18px;
          stroke: currentColor;
          fill: none;
          stroke-width: 2;
        }

        /* DOTS */
        .iw-dots {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-top: 20px;
        }
        .iw-dot {
          border: none;
          border-radius: 50px;
          cursor: pointer;
          padding: 0;
          transition: all 0.3s;
          background: #ccc;
        }
        .iw-dot.on  { width: 24px; height: 8px; background: #1a7a1a; }
        .iw-dot.off { width: 8px; height: 8px; }
        .iw-dot.off:hover { background: #1a7a1a; }

        @media (max-width: 900px) {
          .iw-wrap { padding: 60px 2rem; }
          .iw-card { grid-template-columns: 1fr; }
          .iw-img-wrap { height: 240px; }
          .iw-content { padding: 32px 24px; }
        }
      `}</style>

      <section className="iw-wrap">

        {/* HEADER */}
        <div className="iw-header">
          <div className="iw-title-bar" />
          <h2 className="iw-title">Industries We Serve</h2>
        </div>

        {/* SLIDER CARD */}
        <div className="iw-card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>

          {/* LEFT — IMAGE */}
          <div className="iw-img-wrap">
            <img
              key={active + "-img"}
              src={ind.image}
              alt={ind.title}
            />
          </div>

          {/* RIGHT — CONTENT */}
          <div
            className={`iw-content${animating && animDir ? ` slide-out-${animDir}` : !animating ? " slide-in" : ""
              }`}
          >
            <h3 className="iw-ind-title">{ind.title}</h3>
            <p className="iw-ind-desc">{ind.desc}</p>

            {/* CLIENT LOGOS */}
            <div className="iw-logos">
              {ind.clients.map((c) => (
                <span key={c} className="iw-logo-pill">{c}</span>
              ))}
            </div>

            {/* KNOW MORE BUTTON */}
            <button className="iw-btn">
              Know More
              <span className="iw-arr">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="14" height="14">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </button>
          </div>
        </div>

        {/* BOTTOM — DOTS + ARROWS */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 20 }}>

          {/* DOTS */}
          <div className="iw-dots">
            {industries.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i, i > active ? "left" : "right")}
                className={`iw-dot ${i === active ? "on" : "off"}`}
              />
            ))}
          </div>

          {/* PREV / NEXT ARROWS */}
          <div className="iw-nav">
            <button className="iw-nav-btn" onClick={prev} aria-label="Previous industry">
              <svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6" /></svg>
            </button>
            <button className="iw-nav-btn" onClick={next} aria-label="Next industry">
              <svg viewBox="0 0 24 24"><polyline points="9 6 15 12 9 18" /></svg>
            </button>
          </div>
        </div>

      </section>
    </>
  );
}

/* ══════════════ CLIENTS MARQUEE ══════════════ */
const clientLogos = [
  {
    name: "Yamaha",
    logo: cl1,
  },
  {
    name: "TATA",
    logo: cl2,
  },
  {
    name: "HAL",
    logo: cl3,
  },
  {
    name: "Hero",
    logo: cl4,
  },

  {
    name: "ITC",
    logo: cl5,
  },
  {
    name: "PepsiCo",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Pepsi_logo_2014.svg/200px-Pepsi_logo_2014.svg.png",
  },
  {
    name: "Mahindra",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Mahindra_Logo.svg/200px-Mahindra_Logo.svg.png",
  },
  {
    name: "Siemens",
    logo: cl6,
  },
  {
    name: "JSW Steel",
    logo: cl7,
  },
];

function ClientsMarquee() {
  return (
    <>
      <style>{`
        /* ════ CLIENTS MARQUEE ════ */
        .cm-wrap {
          background: #f7f7f7;
          padding: 56px 0;
          overflow: hidden;
          font-family: 'Inter', sans-serif;
          border-top: 1px solid #ebebeb;
          border-bottom: 1px solid #ebebeb;
        }

        .cm-label {
          text-align: center;
          font-family: 'Rajdhani', sans-serif;
          font-size: 16px;
          font-weight: 700;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: #aaa;
          margin-bottom: 36px;
        }

        .cm-track-wrap {
          overflow: hidden;
          width: 100%;
          position: relative;
        }

        /* Fade-out edges */
        .cm-track-wrap::before,
        .cm-track-wrap::after {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          width: 160px;
          z-index: 2;
          pointer-events: none;
        }
        .cm-track-wrap::before {
          left: 0;
          background: linear-gradient(to right, #f7f7f7, transparent);
        }
        .cm-track-wrap::after {
          right: 0;
          background: linear-gradient(to left, #f7f7f7, transparent);
        }

        .cm-track {
          display: flex;
          align-items: center;
          gap: 0;
          width: max-content;
          animation: cm-scroll 30s linear infinite;
        }
        .cm-track:hover {
          animation-play-state: paused;
        }

        @keyframes cm-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .cm-logo-card {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 240px;
          height: 120px;
          margin: 0 20px;
          background: #fff;
          border: 1px solid #e8e8e8;
          border-radius: 14px;
          padding: 24px 32px;
          flex-shrink: 0;
          transition: box-shadow 0.25s, border-color 0.25s, transform 0.25s;
          cursor: default;
        }
        .cm-logo-card:hover {
          box-shadow: 0 8px 28px rgba(26,122,26,0.12);
          border-color: #b5d8b5;
          transform: translateY(-3px);
        }

        .cm-logo-card img {
  max-width: 100%;
  max-height: 76px;
  object-fit: contain;
}
.cm-logo-card:hover img {
  filter: none;
}

        @media (max-width: 600px) {
          .cm-logo-card { width: 170px; height: 90px; margin: 0 12px; padding: 16px 20px; }
          .cm-track-wrap::before, .cm-track-wrap::after { width: 60px; }
        }
      `}</style>

      <section className="cm-wrap">
        <p className="cm-label">Trusted by Industry Leaders</p>
        <div className="cm-track-wrap">
          {/* Duplicate the list so the loop is seamless */}
          <div className="cm-track">
            {[...clientLogos, ...clientLogos].map((c, i) => (
              <div key={i} className="cm-logo-card" title={c.name}>
                <img
                  src={c.logo}
                  alt={c.name}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML =
                      `<span style="font-family:'Rajdhani',sans-serif;font-size:20px;font-weight:700;color:#1a7a1a;letter-spacing:0.5px">${c.name}</span>`;
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}