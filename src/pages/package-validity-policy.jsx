import { useState } from 'react';

const sections = [
  { id: 'validity',   number: '01', title: 'Validity Period' },
  { id: 'expiry',     number: '02', title: 'Automatic Expiry' },
  { id: 'extensions', number: '03', title: 'Extension Requests' },
];

export default function PackageValidityPolicy() {
  const [activeSection, setActiveSection] = useState(null);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setActiveSection(id);
  };

  return (
    <div className="main-wrapper" style={{ paddingTop: '120px' }}>

      <section className="inner-banner">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="inner-banner-content">
                <h1>Package Validity Policy</h1>
                <p>How treatment packages work, when they expire, and how to request an extension.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-50 pb-100">
        <div className="container">
          <div className="row">

            {/* Sidebar TOC */}
            <div className="col-lg-3 d-none d-lg-block">
              <div className="pp-toc">
                <p className="pp-toc-label">Contents</p>
                <ul>
                  {sections.map((s) => (
                    <li key={s.id}>
                      <button
                        className={`pp-toc-item${activeSection === s.id ? ' active' : ''}`}
                        onClick={() => scrollTo(s.id)}
                      >
                        <span className="pp-toc-num">{s.number}</span>
                        <span>{s.title}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Main content */}
            <div className="col-lg-9">

              <div className="pp-intro">
                <p>
                  All treatment packages at Stance Health come with a predefined validity period that is
                  communicated at the time of purchase. Please ensure sessions are utilised within this period.
                </p>
              </div>

              {/* 01 */}
              <div id="validity" className="pp-section">
                <div className="pp-section-header">
                  <span className="pp-section-num">01</span>
                  <h2>Validity Period</h2>
                </div>
                <p>
                  Every package has a fixed validity duration which is clearly communicated to you at the
                  time of purchase — either verbally, via WhatsApp, or on your invoice.
                </p>
                <p>
                  Sessions must be utilised within this validity window. Unused sessions after the validity
                  date will lapse automatically.
                </p>
                <div className="pvp-info-cards">
                  <div className="pvp-card">
                    <span className="pvp-card-icon">📋</span>
                    <h3>Communicated at purchase</h3>
                    <p>Validity is confirmed at the time you buy the package — verbally or in writing.</p>
                  </div>
                  <div className="pvp-card">
                    <span className="pvp-card-icon">📅</span>
                    <h3>Use within the window</h3>
                    <p>All sessions in the package must be scheduled and completed before the expiry date.</p>
                  </div>
                </div>
              </div>

              {/* 02 */}
              <div id="expiry" className="pp-section">
                <div className="pp-section-header">
                  <span className="pp-section-num">02</span>
                  <h2>Automatic Expiry</h2>
                </div>
                <div className="pp-highlight">
                  Packages expire automatically on the validity date. Unused sessions cannot be carried forward after expiry.
                </div>
                <p style={{ marginTop: '16px' }}>
                  Once a package expires, any remaining unused sessions are forfeited. We are unable to honour
                  sessions from an expired package unless an extension has been formally approved in advance.
                </p>
              </div>

              {/* 03 */}
              <div id="extensions" className="pp-section">
                <div className="pp-section-header">
                  <span className="pp-section-num">03</span>
                  <h2>Extension Requests</h2>
                </div>
                <p>
                  In exceptional circumstances — such as medical emergencies, hospitalisation, or other valid
                  reasons — you may request an extension of your package validity.
                </p>
                <ul className="pp-list">
                  <li>Requests must be submitted <strong>before</strong> the package expiry date.</li>
                  <li>A valid reason must be provided along with the request.</li>
                  <li>Extension requests are reviewed on a case-by-case basis at the discretion of the team.</li>
                  <li>Approval of an extension is not guaranteed and is subject to operational feasibility.</li>
                </ul>
                <div className="pp-contact-card" style={{ marginTop: '24px' }}>
                  <div className="pp-contact-row">
                    <span className="pp-contact-label">Requests</span>
                    <a href="mailto:hello@stance.health" className="pp-contact-value pp-contact-link">
                      hello@stance.health
                    </a>
                  </div>
                  <div className="pp-contact-row">
                    <span className="pp-contact-label">WhatsApp</span>
                    <a href="https://wa.me/919019410049" className="pp-contact-value pp-contact-link">
                      +91 90194 10049
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .pp-intro {
          background: rgba(205,254,113,0.06);
          border-left: 3px solid #CDFE71;
          border-radius: 0 8px 8px 0;
          padding: 20px 24px; margin-bottom: 40px;
        }
        .pp-intro p { color: #e0e0e0; font-size: 15px; line-height: 1.8; margin: 0; }

        .pp-toc {
          position: sticky; top: 140px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(205,254,113,0.12);
          border-radius: 12px; padding: 20px;
        }
        .pp-toc-label {
          color: #CDFE71; font-size: 11px; font-weight: 700;
          letter-spacing: 2px; text-transform: uppercase; margin-bottom: 14px;
        }
        .pp-toc ul { list-style: none; padding: 0; margin: 0; }
        .pp-toc-item {
          display: flex; align-items: flex-start; gap: 8px;
          background: none; border: none; color: rgba(255,255,255,0.55);
          font-size: 12px; line-height: 1.5; padding: 6px 8px;
          border-radius: 6px; cursor: pointer; width: 100%;
          text-align: left; transition: all 0.2s; margin-bottom: 2px;
        }
        .pp-toc-item:hover, .pp-toc-item.active {
          background: rgba(205,254,113,0.08); color: #CDFE71;
        }
        .pp-toc-num {
          color: rgba(205,254,113,0.4); font-size: 10px; font-weight: 700;
          flex-shrink: 0; margin-top: 1px;
        }
        .pp-toc-item.active .pp-toc-num { color: #CDFE71; }

        .pp-section {
          margin-bottom: 40px; padding: 28px 32px;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(205,254,113,0.08);
          border-radius: 14px; scroll-margin-top: 140px;
        }
        .pp-section-header {
          display: flex; align-items: center; gap: 14px;
          margin-bottom: 18px; padding-bottom: 14px;
          border-bottom: 1px solid rgba(205,254,113,0.12);
        }
        .pp-section-num {
          font-size: 11px; font-weight: 800; color: #CDFE71;
          background: rgba(205,254,113,0.1); border-radius: 6px;
          padding: 3px 8px; letter-spacing: 1px; flex-shrink: 0;
        }
        .pp-section h2 { color: #ffffff; font-size: 18px; font-weight: 600; margin: 0; }
        .pp-section p { color: rgba(255,255,255,0.75); font-size: 14px; line-height: 1.8; margin-bottom: 12px; }
        .pp-section strong { color: #ffffff; }

        .pp-highlight {
          background: rgba(205,254,113,0.08); border-left: 3px solid #CDFE71;
          border-radius: 0 8px 8px 0; padding: 12px 16px;
          color: #CDFE71; font-size: 14px; font-weight: 600;
        }

        .pvp-info-cards {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 14px; margin-top: 20px;
        }
        .pvp-card {
          background: rgba(205,254,113,0.04);
          border: 1px solid rgba(205,254,113,0.1);
          border-radius: 12px; padding: 20px;
          text-align: center;
        }
        .pvp-card-icon { font-size: 28px; display: block; margin-bottom: 10px; }
        .pvp-card h3 {
          color: #CDFE71; font-size: 13px; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;
        }
        .pvp-card p { color: rgba(255,255,255,0.65); font-size: 13px; line-height: 1.6; margin: 0; }

        .pp-list { list-style: none; padding: 0; margin: 0; }
        .pp-list li {
          color: rgba(255,255,255,0.75); font-size: 14px; line-height: 1.8;
          padding: 8px 0 8px 20px;
          border-bottom: 1px solid rgba(255,255,255,0.04);
          position: relative;
        }
        .pp-list li:last-child { border-bottom: none; }
        .pp-list li::before {
          content: ''; position: absolute; left: 0; top: 17px;
          width: 6px; height: 6px; background: #CDFE71; border-radius: 50%;
        }
        .pp-list li strong { color: #ffffff; }

        .pp-contact-card {
          background: rgba(0,0,0,0.25); border-radius: 10px;
          overflow: hidden; border: 1px solid rgba(205,254,113,0.1);
        }
        .pp-contact-row {
          display: flex; align-items: center;
          padding: 14px 20px; border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .pp-contact-row:last-child { border-bottom: none; }
        .pp-contact-label {
          color: rgba(255,255,255,0.4); font-size: 12px; font-weight: 600;
          text-transform: uppercase; letter-spacing: 1px; width: 110px; flex-shrink: 0;
        }
        .pp-contact-value { color: #ffffff; font-size: 14px; }
        .pp-contact-link { color: #CDFE71; text-decoration: none; }
        .pp-contact-link:hover { text-decoration: underline; }

        @media (max-width: 767px) {
          .pp-section { padding: 20px 18px; }
          .pp-section h2 { font-size: 16px; }
          .pvp-info-cards { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}
