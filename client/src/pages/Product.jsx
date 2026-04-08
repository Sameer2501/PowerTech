import React from 'react';
import { useNavigate } from 'react-router-dom';
import Contact from '../components/Contact';

import { products } from '../data/products';

const Product = () => {
  const navigate = useNavigate();

  return (
    <>
      <style>{`
        /* Import fonts if not globally available */
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@500;600;700&family=Inter:wght@400;500;600&display=swap');

        .pr-page {
          font-family: 'Inter', sans-serif;
          color: #111;
        }

        /* ── HERO BANNER ── */
        .pr-hero {
          position: relative;
          width: 100%;
          height: 300px;
          background: #222;
          display: flex;
          align-items: flex-end;
          justify-content: flex-end;
        }
        .pr-hero img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.7;
          filter: brightness(0.6);
        }
        .pr-hero-title-box {
          position: relative;
          background: #1a7a1a; /* Green theme */
          color: #fff;
          padding: 24px 60px;
          margin-bottom: 30px;
        }
        .pr-hero-title-box h1 {
          font-family: 'Rajdhani', sans-serif;
          font-size: 3.2rem;
          font-weight: 700;
          margin: 0;
          letter-spacing: 1px;
        }

        /* ── PRODUCTS GRID ── */
        .pr-grid-wrap {
          max-width: 1300px;
          margin: 100px auto;
          padding: 0 5%;
        }
        
        .pr-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px 30px;
        }

        .pr-card {
          background: #fcfcfc;
          border: 1px solid #eaeaea;
          border-radius: 8px;
          padding: 30px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .pr-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 35px rgba(26,122,26,0.1);
          border-color: #1a7a1a;
        }

        .pr-card-title {
          font-family: 'Rajdhani', sans-serif;
          font-size: 24px;
          font-weight: 700;
          color: #1a7a1a; /* Green text matching theme */
          text-align: center;
          margin: 0 0 24px;
          line-height: 1.4;
          min-height: 60px; /* Aligns all images slightly */
        }

        .pr-card-img {
          width: 100%;
          height: 220px;
          object-fit: contain;
          border-radius: 4px;
        }

        @media (max-width: 900px) {
          .pr-grid { grid-template-columns: repeat(2, 1fr); }
          .pr-hero-title-box h1 { font-size: 2rem; }
        }
        @media (max-width: 600px) {
          .pr-grid { grid-template-columns: 1fr; }
          .pr-hero-title-box { padding: 20px 40px; margin-right: 5%; }
        }
      `}</style>

      <div className="pr-page">
        {/* ── HERO BANNER ── */}
        <section className="pr-hero">
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&q=80"
            alt="Products Hero Background"
          />
          <div className="pr-hero-title-box">
            <h1>Products</h1>
          </div>
        </section>

        {/* ── PRODUCTS GRID ── */}
        <section className="pr-grid-wrap">
          <div className="pr-grid">
            {products.map((product) => (
              <div
                key={product.id}
                className="pr-card"
                onClick={() => {
                  navigate('/products/' + product.id);
                }}
              >
                <h2 className="pr-card-title">{product.title}</h2>
                <img src={product.image} alt={product.title} className="pr-card-img" />
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* ───────────────── CONTACT / FOOTER ───────────────── */}
      <Contact />
    </>
  );
};

export default Product;
