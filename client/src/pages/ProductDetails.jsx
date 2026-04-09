import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Contact from '../components/Contact';
import { products } from '../data/products';

const ProductDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // Find current product
    const product = products.find(p => p.id === id);

    const [activeSubTypeIndex, setActiveSubTypeIndex] = useState(0);
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
        setActiveSubTypeIndex(0);
        setCurrentSlideIndex(0);
    }, [id]);

    useEffect(() => {
        setCurrentSlideIndex(0);
    }, [activeSubTypeIndex]);

    const activeSubType = product.subTypes ? product.subTypes[activeSubTypeIndex] : null;
    const currentImages = activeSubType && activeSubType.images ? activeSubType.images : (activeSubType ? [activeSubType.image] : [product.image]);

    const nextSlide = () => {
        setCurrentSlideIndex((prev) => (prev + 1) % currentImages.length);
    };

    const prevSlide = () => {
        setCurrentSlideIndex((prev) => (prev - 1 + currentImages.length) % currentImages.length);
    };

    if (!product) {
        return (
            <div style={{ paddingTop: '150px', textAlign: 'center', height: '50vh' }}>
                <h2>Product not found!</h2>
                <Link to="/products" style={{ color: '#1a7a1a', textDecoration: 'underline' }}>Return to Products</Link>
            </div>
        );
    }

    return (
        <>
            <style>{`
        /* Import fonts if not globally available */
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@500;600;700&family=Inter:wght@400;500;600&display=swap');

        .pd-page {
          font-family: 'Inter', sans-serif;
          color: #111;
          background: #fff;
        }

        /* ── BREADCRUMB BANNER ── */
        .pd-banner {
          background: #1a7a1a; /* Brand Green instead of Red to match theme */
          color: #fff;
          padding: 18px 5%;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          font-weight: 500;
        }
        .pd-banner a {
          color: #fff;
          text-decoration: none;
          transition: opacity 0.2s;
        }
        .pd-banner a:hover { opacity: 0.8; }
        .pd-banner .separator { opacity: 0.6; font-size: 12px; }

        /* ── MAIN DETAIL SECTION ── */
        .pd-main-wrap {
          max-width: 1300px;
          margin: 60px auto 80px;
          padding: 0 5%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
          align-items: flex-start;
        }

        .pd-left-col {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .pd-main-img-box {
          background: #fdfdfd;
          border: 1px solid #eee;
          border-radius: 8px;
          padding: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 500px;
          position: relative;
          /* Removed overflow: hidden to allow buttons to breathe */
        }
        .pd-main-img-box img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          transition: opacity 0.3s ease;
        }
        .pd-slider-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255, 255, 255, 0.8);
          color: #1a7a1a;
          border: 1px solid #eee;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
          transition: all 0.3s ease;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }
        .pd-slider-btn:hover {
          background: #1a7a1a;
          color: white;
          border-color: #1a7a1a;
          transform: translateY(-50%) scale(1.1);
        }
        .pd-slider-btn.prev { left: -18px; }
        .pd-slider-btn.next { right: -18px; }

        @media (max-width: 600px) {
          .pd-slider-btn.prev { left: 5px; }
          .pd-slider-btn.next { right: 5px; }
        }

        .pd-slider-dots {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 8px;
          z-index: 10;
        }
        .pd-slider-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: rgba(0,0,0,0.2);
          cursor: pointer;
          border: 1px solid white;
        }
        .pd-slider-dot.active {
          background: #1a7a1a;
        }
        .pd-thumb-box {
          width: 80px;
          height: 80px;
          border: 2px solid #1a7a1a;
          border-radius: 6px;
          padding: 5px;
          cursor: pointer;
          background: #fff;
        }
        .pd-thumb-box img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
        .pd-thumbnails-container {
          display: flex;
          gap: 15px;
          flex-wrap: wrap;
        }

        .pd-right-col {
          background: #f9f9f9;
          padding: 50px 60px;
          border-radius: 8px;
        }
        .pd-title {
          font-family: 'Rajdhani', sans-serif;
          font-size: 2.8rem;
          font-weight: 700;
          color: #111;
          margin: 0 0 20px;
          line-height: 1.1;
        }
        .pd-desc {
          font-size: 15.5px;
          color: #555;
          line-height: 1.8;
          margin-bottom: 25px;
          white-space: pre-wrap;
        }
        .pd-features-list {
          list-style: none;
          padding: 0;
          margin: 0 0 40px;
        }
        .pd-features-list li {
          position: relative;
          padding-left: 20px;
          margin-bottom: 12px;
          font-size: 15px;
          color: #333;
          line-height: 1.5;
        }
        .pd-features-list li::before {
          content: '•';
          color: #1a7a1a;
          font-size: 20px;
          position: absolute;
          left: 0;
          top: -2px;
        }

        .pd-enquire-btn {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: #1a7a1a; /* Green matching theme */
          color: #fff;
          font-family: 'Rajdhani', sans-serif;
          font-weight: 700;
          font-size: 16px;
          letter-spacing: 0.5px;
          padding: 14px 35px;
          border-radius: 50px;
          border: none;
          cursor: pointer;
          transition: background 0.3s, transform 0.2s;
        }
        .pd-enquire-btn:hover {
          background: #0d4f0d;
          transform: translateY(-2px);
        }

        /* ── KEY BENEFITS SECTION ── */
        .pd-benefits-sec {
          background: #fdfdfd;
          padding: 80px 0;
          border-top: 1px solid #eee;
        }
        .pd-benefits-inner {
          max-width: 1300px;
          margin: 0 auto;
          padding: 0 5%;
        }
        .pd-benefits-title-wrap {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 50px;
        }
        .pd-benefits-bar {
          width: 4px;
          height: 40px;
          background: #1a7a1a;
        }
        .pd-benefits-title {
          font-family: 'Rajdhani', sans-serif;
          font-size: 2.5rem;
          font-weight: 700;
          color: #111;
          margin: 0;
        }

        .pd-benefits-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
        }
        .pd-benefit-card {
          background: #fff;
          border: 1px solid #eee;
          border-radius: 8px;
          padding: 35px 25px;
          text-align: center;
          box-shadow: 0 5px 20px rgba(0,0,0,0.02);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .pd-benefit-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 30px rgba(26,122,26,0.06);
          border-color: #1a7a1a;
        }
        .pd-benefit-icon {
          width: 60px;
          height: 60px;
          background: rgba(26, 122, 26, 0.08); /* Light green circular BG */
          color: #1a7a1a;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
        }
        .pd-benefit-icon svg {
          width: 28px;
          height: 28px;
          stroke: currentColor;
          fill: none;
          stroke-width: 2;
        }
        .pd-benefit-title {
          font-family: 'Rajdhani', sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: #111;
          margin: 0 0 10px;
        }
        .pd-benefit-desc {
          font-size: 14px;
          color: #666;
          line-height: 1.6;
          margin: 0;
        }

        @media (max-width: 1024px) {
          .pd-main-wrap { grid-template-columns: 1fr; gap: 40px; }
          .pd-right-col { padding: 40px; }
          .pd-benefits-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .pd-right-col { padding: 30px 20px; }
          .pd-benefits-grid { grid-template-columns: 1fr; }
          .pd-title { font-size: 2.2rem; }
        }
      `}</style>

            <div className="pd-page">
                {/* ── BREADCRUMB BANNER ── */}
                <div className="pd-banner">
                    <Link to="/">Home</Link>
                    <span className="separator">❯</span>
                    <Link to="/products">Products</Link>
                    <span className="separator">❯</span>
                    <span>{product.title}</span>
                </div>

                {/* ── MAIN DETAIL SECTION ── */}
                <section className="pd-main-wrap">
                    <div className="pd-left-col">
                        <div className="pd-main-img-box">
                            {currentImages.length > 1 && (
                                <>
                                    <button className="pd-slider-btn prev" onClick={prevSlide}>
                                        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" fill="none" strokeWidth="2">
                                            <path d="M15 18l-6-6 6-6" />
                                        </svg>
                                    </button>
                                    <button className="pd-slider-btn next" onClick={nextSlide}>
                                        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" fill="none" strokeWidth="2">
                                            <path d="M9 18l6-6-6-6" />
                                        </svg>
                                    </button>
                                    <div className="pd-slider-dots">
                                        {currentImages.map((_, idx) => (
                                            <div 
                                                key={idx} 
                                                className={`pd-slider-dot ${currentSlideIndex === idx ? 'active' : ''}`}
                                                onClick={() => setCurrentSlideIndex(idx)}
                                            />
                                        ))}
                                    </div>
                                </>
                            )}
                            <img src={currentImages[currentSlideIndex]} alt={product.title} />
                        </div>
                        {product.subTypes ? (
                            <div className="pd-thumbnails-container">
                                {product.subTypes.map((subType, idx) => (
                                    <div 
                                        key={idx}
                                        className="pd-thumb-box"
                                        style={{ 
                                            borderColor: activeSubTypeIndex === idx ? '#1a7a1a' : '#eee',
                                            opacity: activeSubTypeIndex === idx ? 1 : 0.6
                                        }}
                                        onClick={() => setActiveSubTypeIndex(idx)}
                                    >
                                        <img src={subType.image} alt="Thumbnail" />
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="pd-thumb-box">
                                <img src={product.image} alt="Thumbnail" />
                            </div>
                        )}
                    </div>

                    <div className="pd-right-col">
                        <h1 className="pd-title">{product.title}</h1>
                        {product.subTypes && (
                            <div style={{ fontWeight: 'bold', fontSize: '18px', marginBottom: '15px', color: '#1a7a1a' }}>
                                {product.subTypes[activeSubTypeIndex].title}
                            </div>
                        )}
                        <p className="pd-desc">
                            {product.subTypes ? product.subTypes[activeSubTypeIndex].description : product.description}
                        </p>
                        
                        <ul className="pd-features-list">
                            {product.features.map((feature, idx) => (
                                <li key={idx}>{feature}</li>
                            ))}
                        </ul>

                        <button 
                            className="pd-enquire-btn"
                            onClick={() => navigate('/contactus')}
                        >
                            Enquire Now
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="16" height="16">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </section>

                {/* ── KEY BENEFITS SECTION ── */}
                <section className="pd-benefits-sec">
                    <div className="pd-benefits-inner">
                        <div className="pd-benefits-title-wrap">
                            <div className="pd-benefits-bar"></div>
                            <h2 className="pd-benefits-title">Key Benefits</h2>
                        </div>

                        <div className="pd-benefits-grid">
                            {product.keyBenefits.map((benefit) => (
                                <div key={benefit.id} className="pd-benefit-card">
                                    <div className="pd-benefit-icon">
                                        <svg viewBox="0 0 24 24">
                                            {/* Generic checkmark/shield icon */}
                                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                            <path d="M9 12l2 2 4-4" />
                                        </svg>
                                    </div>
                                    <h3 className="pd-benefit-title">{benefit.title}</h3>
                                    <p className="pd-benefit-desc">{benefit.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>

            {/* ───────────────── CONTACT / FOOTER ───────────────── */}
            <Contact />
        </>
    );
};

export default ProductDetails;
