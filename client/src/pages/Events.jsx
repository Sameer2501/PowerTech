import React, { useEffect } from 'react';
import Contact from '../components/Contact';

export default function Events() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div style={{
        minHeight: '70vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '120px 20px 60px',
        textAlign: 'center',
        fontFamily: "'Inter', sans-serif"
      }}>
        <h1 style={{
          fontFamily: "'Rajdhani', sans-serif",
          fontSize: 'clamp(3rem, 6vw, 5rem)',
          fontWeight: 700,
          color: '#111',
          marginBottom: '20px',
          textTransform: 'uppercase',
          letterSpacing: '2px'
        }}>
          Events <span style={{ color: '#1a7a1a' }}>&amp; Exhibitions</span>
        </h1>
        <div style={{
          background: 'rgba(26,122,26,0.1)',
          color: '#1a7a1a',
          padding: '8px 24px',
          borderRadius: '50px',
          fontSize: '18px',
          fontWeight: 600,
          letterSpacing: '3px',
          textTransform: 'uppercase',
          marginBottom: '30px',
          border: '1px solid rgba(26,122,26,0.2)'
        }}>
          Coming Soon
        </div>
        <p style={{
          fontSize: '18px',
          color: '#666',
          maxWidth: '600px',
          lineHeight: 1.6
        }}>
          We are currently planning some exciting showcases and technological exhibitions. Stay tuned for updates on our upcoming events where you can experience our power solutions firsthand.
        </p>
      </div>

      <Contact />
    </>
  );
}
