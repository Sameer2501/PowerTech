import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo12.png";

const navLinks = [
  {
    label: "Products",
    dropdown: [
      "Servo Voltage Stabilizer",
      "HT Transformer",
      "Control Panel",
      "Electroplating Rectifier",
      "Automatic Battery Charger",
      "On line UPS",
      "Isolation 3 Phase Transformer",
      "Stepdown Transformer",
    ],
  },
  { label: "Company" },
  { label: "Technology" },
  { label: "Events" },
  { label: "Career" },
  { label: "Contact" },
];

const productLinkMap = {
  "Servo Voltage Stabilizer": "voltage-stabilizers",
  "HT Transformer": "ht-transformers",
  "Control Panel": "control-panels",
  "Electroplating Rectifier": "electroplating-rectifiers",
  "Automatic Battery Charger": "battery-charger",
  "On line UPS": "online-ups",
  "Isolation 3 Phase Transformer": "isolation-3-phase-transformers",
  "Stepdown Transformer": "step-down-transformer",
};

export default function Navbar() {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@500;600;700&family=Inter:wght@400;500&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --green-primary: #1a7a1a;
          --green-light: #2ecc2e;
          --green-neon: #39ff14;
          --green-dark: #0d4f0d;
          --white: #ffffff;
          --off-white: #f5f5f5;
          --gray: #888;
          --black: #111;
        }

        .spt-navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: #fff;
          border-bottom: 2px solid transparent;
          transition: all 0.3s ease;
          font-family: 'Inter', sans-serif;
        }

        .spt-navbar.scrolled {
          box-shadow: 0 2px 20px rgba(26, 122, 26, 0.15);
          border-bottom-color: var(--green-light);
        }

        .spt-navbar-inner {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 30px;
          height: 70px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        /* LOGO */
        .spt-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          flex-shrink: 0;
        }

        .spt-logo img {
          height: 55px;
          width: auto;
          object-fit: contain;
        }

        /* NAV LINKS */
        .spt-nav-links {
          display: flex;
          align-items: center;
          gap: 4px;
          list-style: none;
        }

        .spt-nav-item {
          position: relative;
        }

        .spt-nav-link {
          display: flex;
          align-items: center;
          gap: 5px;
          padding: 8px 14px;
          font-family: 'Rajdhani', sans-serif;
          font-size: 22px;
          font-weight: 600;
          letter-spacing: 0.5px;
          color: var(--black);
          text-transform: uppercase;
          text-decoration: none;
          border-radius: 4px;
          transition: all 0.2s ease;
          cursor: pointer;
          background: none;
          border: none;
          white-space: nowrap;
        }

        .spt-nav-link:hover,
        .spt-nav-link.active {
          color: var(--green-primary);
          background: rgba(26, 122, 26, 0.06);
        }

        .spt-nav-link .chevron {
          width: 14px;
          height: 14px;
          stroke: currentColor;
          fill: none;
          stroke-width: 2.5;
          transition: transform 0.25s ease;
        }

        .spt-nav-link.active .chevron {
          transform: rotate(180deg);
        }

        /* DROPDOWN */
        .spt-dropdown {
          position: absolute;
          top: calc(100% + 8px);
          left: 50%;
          transform: translateX(-50%) translateY(-6px);
          background: #fff;
          border: 1px solid rgba(26, 122, 26, 0.15);
          border-top: 3px solid var(--green-primary);
          border-radius: 6px;
          box-shadow: 0 12px 40px rgba(0,0,0,0.12);
          min-width: 300px;
          opacity: 0;
          pointer-events: none;
          transition: all 0.22s ease;
          overflow: visible; /* Allowing the pseudo-element to extend */
        }

        .spt-dropdown::before {
          content: '';
          position: absolute;
          top: -20px;
          left: 0;
          right: 0;
          height: 20px;
          background: transparent;
        }

        .spt-dropdown.open {
          opacity: 1;
          pointer-events: auto;
          transform: translateX(-50%) translateY(0);
        }

        .spt-dropdown-item {
          display: block;
          padding: 11px 18px;
          font-family: 'Rajdhani', sans-serif;
          font-size: 20px;
          font-weight: 500;
          letter-spacing: 0.3px;
          color: #333;
          text-decoration: none;
          border-left: 3px solid transparent;
          transition: all 0.15s ease;
          cursor: pointer;
          white-space: nowrap;
        }

        .spt-dropdown-item:hover {
          color: var(--green-primary);
          background: rgba(26, 122, 26, 0.05);
          border-left-color: var(--green-primary);
          padding-left: 22px;
        }

        /* SEARCH */
        .spt-search-btn {
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
          color: #444;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
          margin-left: 8px;
        }

        .spt-search-btn:hover {
          color: var(--green-primary);
          background: rgba(26,122,26,0.06);
        }

        .spt-search-btn svg {
          width: 20px;
          height: 20px;
          stroke: currentColor;
          fill: none;
          stroke-width: 2;
        }

        /* SEARCH BAR OVERLAY */
        .spt-search-bar {
          position: absolute;
          top: 70px;
          left: 0;
          right: 0;
          background: #fff;
          border-bottom: 2px solid var(--green-primary);
          padding: 14px 24px;
          display: flex;
          align-items: center;
          gap: 12px;
          transform: translateY(-100%);
          opacity: 0;
          pointer-events: none;
          transition: all 0.25s ease;
          box-shadow: 0 8px 24px rgba(0,0,0,0.08);
        }

        .spt-search-bar.open {
          transform: translateY(0);
          opacity: 1;
          pointer-events: auto;
        }

        .spt-search-bar input {
          flex: 1;
          border: none;
          outline: none;
          font-size: 16px;
          font-family: 'Inter', sans-serif;
          color: #222;
          background: transparent;
        }

        .spt-search-bar input::placeholder { color: #aaa; }

        .spt-search-bar button {
          background: var(--green-primary);
          color: #fff;
          border: none;
          padding: 8px 20px;
          border-radius: 4px;
          font-family: 'Rajdhani', sans-serif;
          font-weight: 700;
          font-size: 14px;
          letter-spacing: 0.5px;
          cursor: pointer;
          transition: background 0.2s;
        }

        .spt-search-bar button:hover { background: var(--green-dark); }

        /* GREEN ACCENT LINE */
        .spt-accent-bar {
          height: 3px;
          background: linear-gradient(90deg, var(--green-dark), var(--green-light), var(--green-neon), var(--green-light), var(--green-dark));
          background-size: 200% 100%;
          animation: shimmer 3s linear infinite;
        }

        @keyframes shimmer {
          0% { background-position: 0% 0%; }
          100% { background-position: 200% 0%; }
        }

        /* HAMBURGER */
        .spt-hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          background: none;
          border: none;
          padding: 6px;
        }

        .spt-hamburger span {
          display: block;
          width: 24px;
          height: 2px;
          background: var(--black);
          border-radius: 2px;
          transition: all 0.3s ease;
        }

        .spt-hamburger.open span:nth-child(1) {
          transform: translateY(7px) rotate(45deg);
        }
        .spt-hamburger.open span:nth-child(2) { opacity: 0; }
        .spt-hamburger.open span:nth-child(3) {
          transform: translateY(-7px) rotate(-45deg);
        }

        /* MOBILE MENU */
        .spt-mobile-menu {
          display: none;
          flex-direction: column;
          background: #fff;
          border-top: 2px solid var(--green-primary);
          padding: 8px 0 16px;
          box-shadow: 0 8px 24px rgba(0,0,0,0.08);
        }

        .spt-mobile-menu.open { display: flex; }

        .spt-mobile-link {
          padding: 12px 24px;
          font-family: 'Rajdhani', sans-serif;
          font-size: 15px;
          font-weight: 600;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          color: #222;
          cursor: pointer;
          border-left: 3px solid transparent;
          transition: all 0.2s;
        }

        .spt-mobile-link:hover {
          color: var(--green-primary);
          border-left-color: var(--green-primary);
          background: rgba(26,122,26,0.04);
        }

        .spt-mobile-sub {
          padding: 8px 24px 8px 36px;
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          color: #555;
          cursor: pointer;
          transition: color 0.2s;
        }
        .spt-mobile-sub:hover { color: var(--green-primary); }

        /* RESPONSIVE */
        @media (max-width: 900px) {
          .spt-nav-links, .spt-search-btn { display: none !important; }
          .spt-hamburger { display: flex; }
        }
      `}</style>

      <nav className={`spt-navbar${scrolled ? " scrolled" : ""}`}>
        <div className="spt-accent-bar" />
        <div className="spt-navbar-inner">

          {/* LOGO */}
          <a
            href="/"
            className="spt-logo"
            onClick={(e) => {
              e.preventDefault();
              navigate("/");
            }}
          >
            {/* Replace src with your actual logo path, e.g. "/logo.png" */}
            <img
              src={logo}
              alt="Super Power Tech"
              onError={(e) => {
                // Fallback SVG logo if image not found
                e.target.style.display = "none";
                e.target.nextSibling.style.display = "flex";
              }}
            />
            {/* Fallback text logo */}
            <span style={{
              display: "none",
              alignItems: "center",
              gap: "8px",
              fontFamily: "'Rajdhani', sans-serif",
              fontWeight: 700,
              fontSize: "22px",
              color: "#1a7a1a",
              letterSpacing: "1px",
            }}>
              <span style={{
                background: "#1a7a1a",
                color: "#fff",
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "14px",
                fontWeight: 800,
              }}>SPT</span>
              SUPER POWER TECH
            </span>
          </a>

          {/* DESKTOP NAV */}
          <ul className="spt-nav-links">
            {navLinks.map((link) => (
              <li
                key={link.label}
                className="spt-nav-item"
                onMouseEnter={() => link.dropdown && setDropdownOpen(true)}
                onMouseLeave={() => link.dropdown && setDropdownOpen(false)}
              >
                {link.dropdown ? (
                  <>
                    <div
                      className={`spt-nav-link${dropdownOpen ? " active" : ""}`}
                      onClick={() => {
                        navigate('/products');
                        setDropdownOpen(false);
                      }}
                    >
                      {link.label}
                      <svg className="chevron" viewBox="0 0 24 24">
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </div>
                    <div className={`spt-dropdown${dropdownOpen ? " open" : ""}`}>
                      {link.dropdown.map((item) => (
                        <a
                          key={item}
                          href={`/products/${productLinkMap[item]}`}
                          className="spt-dropdown-item"
                          onClick={(e) => {
                            e.preventDefault();
                            const id = productLinkMap[item];
                            if (id) {
                              navigate(`/products/${id}`);
                              setDropdownOpen(false);
                            }
                          }}
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                  </>
                ) : (
                  <a
                    href={link.label === "Company" ? "/company" : link.label === "Contact" ? "/contactus" : link.label === "Technology" ? "/technology" : link.label === "Career" ? "/career" : link.label === "Events" ? "/events" : "#"}
                    className="spt-nav-link"
                    onClick={(e) => {
                      e.preventDefault();
                      if (link.label === "Company") {
                        navigate('/company');
                        window.scrollTo(0, 0);
                      } else if (link.label === "Contact") {
                        navigate('/contactus');
                        window.scrollTo(0, 0);
                      } else if (link.label === "Technology") {
                        navigate('/technology');
                        window.scrollTo(0, 0);
                      } else if (link.label === "Career") {
                        navigate('/career');
                        window.scrollTo(0, 0);
                      } else if (link.label === "Events") {
                        navigate('/events');
                        window.scrollTo(0, 0);
                      }
                    }}
                  >
                    {link.label}
                  </a>
                )}
              </li>
            ))}
          </ul>

          {/* SEARCH ICON */}
          <button className="spt-search-btn" onClick={() => setSearchOpen((o) => !o)} aria-label="Search">
            {searchOpen ? (
              <svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
            ) : (
              <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
            )}
          </button>

          {/* HAMBURGER */}
          <button
            className={`spt-hamburger${mobileMenuOpen ? " open" : ""}`}
            onClick={() => setMobileMenuOpen((o) => !o)}
            aria-label="Menu"
          >
            <span /><span /><span />
          </button>
        </div>

        {/* SEARCH BAR */}
        <div className={`spt-search-bar${searchOpen ? " open" : ""}`}>
          <div style={{ display: 'flex', alignItems: 'center', width: '100%', gap: '12px', position: 'relative' }}>
            <svg style={{ width: 18, height: 18, stroke: "#aaa", fill: "none", strokeWidth: 2, flexShrink: 0 }} viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="7" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              placeholder="Search products, solutions..."
              autoFocus={searchOpen}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery.trim().length > 0 && (
              <div className="spt-search-results" style={{
                position: 'absolute',
                top: 'calc(100% + 14px)',
                left: 0,
                width: '100%',
                background: '#fff',
                border: '1px solid rgba(26,122,26,0.15)',
                boxShadow: '0 8px 30px rgba(0,0,0,0.1)',
                borderRadius: '6px',
                overflow: 'hidden',
                zIndex: 1000
              }}>
                {Object.keys(productLinkMap)
                  .filter(item => item.toLowerCase().includes(searchQuery.toLowerCase()))
                  .map(item => (
                    <div
                      key={item}
                      onClick={() => {
                        navigate(`/products/${productLinkMap[item]}`);
                        setSearchOpen(false);
                        setSearchQuery("");
                      }}
                      style={{
                        padding: '12px 20px',
                        cursor: 'pointer',
                        fontFamily: "'Rajdhani', sans-serif",
                        fontSize: '18px',
                        fontWeight: 600,
                        color: '#333',
                        borderBottom: '1px solid rgba(0,0,0,0.05)',
                        transition: 'background 0.2s',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(26,122,26,0.06)';
                        e.currentTarget.style.color = 'var(--green-primary)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'transparent';
                        e.currentTarget.style.color = '#333';
                      }}
                    >
                      {item}
                    </div>
                  ))}
                {Object.keys(productLinkMap).filter(item => item.toLowerCase().includes(searchQuery.toLowerCase())).length === 0 && (
                  <div style={{ padding: '16px 20px', color: '#888', fontStyle: 'italic', fontFamily: "'Inter', sans-serif", fontSize: '15px' }}>
                    No products found.
                  </div>
                )}
              </div>
            )}
            <button onClick={() => {
              if (searchQuery.trim().length > 0) {
                const results = Object.keys(productLinkMap).filter(item => item.toLowerCase().includes(searchQuery.toLowerCase()));
                if (results.length > 0) {
                  navigate(`/products/${productLinkMap[results[0]]}`);
                  setSearchOpen(false);
                  setSearchQuery("");
                }
              }
            }}>Search</button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div className={`spt-mobile-menu${mobileMenuOpen ? " open" : ""}`}>
          {navLinks.map((link) => (
            <div key={link.label}>
              <div
                className="spt-mobile-link"
                onClick={() => {
                  if (link.label === "Company") {
                    navigate('/company');
                    setMobileMenuOpen(false);
                  } else if (link.label === "Contact") {
                    navigate('/contactus');
                    setMobileMenuOpen(false);
                  } else if (link.label === "Technology") {
                    navigate('/technology');
                    setMobileMenuOpen(false);
                  } else if (link.label === "Career") {
                    navigate('/career');
                    setMobileMenuOpen(false);
                  } else if (link.label === "Events") {
                    navigate('/events');
                    setMobileMenuOpen(false);
                  }
                }}
              >
                {link.label}
              </div>
              {link.dropdown && link.dropdown.map((item) => (
                <div
                  key={item}
                  className="spt-mobile-sub"
                  onClick={() => {
                    const id = productLinkMap[item];
                    if (id) {
                      navigate(`/products/${id}`);
                      setMobileMenuOpen(false);
                    }
                  }}
                >
                  → {item}
                </div>
              ))}
            </div>
          ))}
        </div>
      </nav>

      {/* Spacer so page content doesn't hide under fixed navbar */}
      <div style={{ height: 73 }} />
    </>
  );
}
