import Head from 'next/head';
import { useState } from 'react';

const sections = [
  { id: 'terms',        number: '01', title: 'Terms of Use' },
  { id: 'cancellation', number: '02', title: 'Cancellation & Rescheduling' },
  { id: 'refund',       number: '03', title: 'Refund Policy' },
  { id: 'packages',     number: '04', title: 'Package Validity' },
  { id: 'license',      number: '05', title: 'Use License' },
  { id: 'disclaimer',   number: '06', title: 'Disclaimer' },
  { id: 'constraints',  number: '07', title: 'Limitations' },
  { id: 'amendments',   number: '08', title: 'Amendments & Errata' },
  { id: 'links',        number: '09', title: 'Links' },
  { id: 'governing',    number: '10', title: 'Governing Law' },
  { id: 'contact',      number: '11', title: 'Contact & Grievance' },
];

export default function TermsAndConditions() {
  const [activeSection, setActiveSection] = useState(null);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setActiveSection(id);
  };

  return (
    <>
      <Head>
        <title>Terms &amp; Conditions — Stance Health</title>
        <meta name="description" content="Read Stance Health's Terms and Conditions including cancellation, refund, and package validity policies." />
      </Head>
      <div className="main-wrapper" style={{ paddingTop: '120px' }}>

      <section className="inner-banner">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="inner-banner-content">
                <h1>Terms &amp; Conditions</h1>
                <p>Please read these terms carefully before using our services.</p>
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
                  By accessing our website or using our services, you agree to be bound by these Terms &amp;
                  Conditions. If you disagree with any part, you are prohibited from using our services.
                </p>
              </div>

              {/* 01 */}
              <div id="terms" className="pp-section">
                <div className="pp-section-header">
                  <span className="pp-section-num">01</span>
                  <h2>Terms of Use</h2>
                </div>
                <p>
                  By accessing this website, you agree to be bound by these Terms and Conditions of Use,
                  applicable laws and regulations. The materials on this site are secured by relevant
                  copyright and trademark law.
                </p>
              </div>

              {/* 02 — Cancellation */}
              <div id="cancellation" className="pp-section">
                <div className="pp-section-header">
                  <span className="pp-section-num">02</span>
                  <h2>Cancellation &amp; Rescheduling Policy</h2>
                </div>
                <div className="pp-highlight">
                  Please inform us at least 24 hours in advance for any cancellation or rescheduling.
                </div>
                <ul className="pp-list" style={{ marginTop: '16px' }}>
                  <li>
                    <strong>First cancellation per calendar month</strong> — accommodated without any additional charge.
                  </li>
                  <li>
                    <strong>Additional cancellations within 24 hours</strong> — a fee of <strong>₹300 per session</strong> applies.
                  </li>
                  <li>
                    <strong>Same-day reschedule</strong> — rescheduling to another slot on the same day is non-chargeable.
                  </li>
                  <li>
                    <strong>Different-day reschedule within 24 hours</strong> — treated as a cancellation; the ₹300 fee applies after the first free cancellation for the month.
                  </li>
                </ul>
                <p style={{ marginTop: '16px' }}>
                  This policy helps us manage therapist schedules efficiently and accommodate patients on
                  the waitlist. You can reach us via WhatsApp or phone to notify us of any changes.
                </p>
              </div>

              {/* 03 — Refund */}
              <div id="refund" className="pp-section">
                <div className="pp-section-header">
                  <span className="pp-section-num">03</span>
                  <h2>Refund Policy</h2>
                </div>
                <div className="pp-highlight">
                  Packages and sessions purchased are non-refundable.
                </div>
                <p style={{ marginTop: '16px' }}>
                  Once a package or individual session is purchased, it is considered confirmed and the
                  amount paid is non-refundable under standard circumstances. This applies to all treatment
                  packages, physiotherapy sessions, strength &amp; conditioning programs, and any other
                  services offered by Stance Health.
                </p>
                <p>
                  <strong>Exception:</strong> Refunds will only be considered in situations where Stance
                  Health is unable to continue handling or supporting the patient's case from our end. All
                  such decisions are at the discretion of management and will be communicated directly to
                  the patient.
                </p>
              </div>

              {/* 04 — Package Validity */}
              <div id="packages" className="pp-section">
                <div className="pp-section-header">
                  <span className="pp-section-num">04</span>
                  <h2>Package Validity</h2>
                </div>
                <ul className="pp-list">
                  <li>All treatment packages come with a predefined validity period communicated at the time of purchase.</li>
                  <li>Sessions must be utilised within the package validity period.</li>
                  <li>Packages expire automatically after the validity date — unused sessions cannot be carried forward.</li>
                  <li>In exceptional circumstances, patients may request an extension with a valid reason. Extensions are reviewed on a case-by-case basis and are not guaranteed.</li>
                </ul>
              </div>

              {/* 05 */}
              <div id="license" className="pp-section">
                <div className="pp-section-header">
                  <span className="pp-section-num">05</span>
                  <h2>Use License</h2>
                </div>
                <p>
                  Permission is granted to temporarily download materials from Stance Health's website for
                  personal, non-commercial use only. Under this licence you may not:
                </p>
                <ul className="pp-list">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose or public presentation</li>
                  <li>Attempt to decompile or reverse engineer any software on the site</li>
                  <li>Remove any copyright or proprietary notations from the materials</li>
                  <li>Transfer the materials to another person or mirror them on another server</li>
                </ul>
                <p>
                  This licence terminates automatically if you violate any of these restrictions and may be
                  revoked by Stance Health at any time.
                </p>
              </div>

              {/* 06 */}
              <div id="disclaimer" className="pp-section">
                <div className="pp-section-header">
                  <span className="pp-section-num">06</span>
                  <h2>Disclaimer</h2>
                </div>
                <p>
                  The materials on Stance Health's website are provided "as is". Stance Health makes no
                  warranties, expressed or implied, and disclaims all other warranties including implied
                  warranties of merchantability, fitness for a particular purpose, or non-infringement of
                  intellectual property.
                </p>
              </div>

              {/* 07 */}
              <div id="constraints" className="pp-section">
                <div className="pp-section-header">
                  <span className="pp-section-num">07</span>
                  <h2>Limitations</h2>
                </div>
                <p>
                  In no event shall Stance Health or its suppliers be liable for any damages (including loss
                  of data, profit, or business interruption) arising out of the use or inability to use the
                  materials on this website, even if Stance Health has been notified of the possibility of
                  such damages.
                </p>
              </div>

              {/* 08 */}
              <div id="amendments" className="pp-section">
                <div className="pp-section-header">
                  <span className="pp-section-num">08</span>
                  <h2>Amendments &amp; Errata</h2>
                </div>
                <p>
                  The materials on this site may contain typographical or photographic errors. Stance Health
                  does not warrant that any materials are accurate, complete, or current. Stance Health may
                  make changes to the materials at any time without notice.
                </p>
              </div>

              {/* 09 */}
              <div id="links" className="pp-section">
                <div className="pp-section-header">
                  <span className="pp-section-num">09</span>
                  <h2>Links</h2>
                </div>
                <p>
                  Stance Health has not reviewed all websites linked from its site and is not responsible for
                  the content of any linked site. The inclusion of any link does not imply endorsement by
                  Stance Health. Use of any linked site is at the user's own risk.
                </p>
              </div>

              {/* 10 */}
              <div id="governing" className="pp-section">
                <div className="pp-section-header">
                  <span className="pp-section-num">10</span>
                  <h2>Governing Law</h2>
                </div>
                <p>
                  Any claim relating to Stance Health's website shall be governed by the laws of India,
                  without regard to its conflict of law provisions.
                </p>
              </div>

              {/* 11 — Contact */}
              <div id="contact" className="pp-section pp-grievance">
                <div className="pp-section-header">
                  <span className="pp-section-num">11</span>
                  <h2>Contact &amp; Grievance</h2>
                </div>
                <p>
                  For any questions, concerns, or refund/cancellation requests, please contact us at:
                </p>
                <div className="pp-contact-card">
                  <div className="pp-contact-row">
                    <span className="pp-contact-label">Email</span>
                    <a href="mailto:hello@stance.health" className="pp-contact-value pp-contact-link">
                      hello@stance.health
                    </a>
                  </div>
                  <div className="pp-contact-row">
                    <span className="pp-contact-label">Grievance</span>
                    <a href="mailto:grievance.officer@healthflex.in" className="pp-contact-value pp-contact-link">
                      grievance.officer@healthflex.in
                    </a>
                  </div>
                  <div className="pp-contact-row">
                    <span className="pp-contact-label">Designation</span>
                    <span className="pp-contact-value">Grievance Officer — Rohit Arora</span>
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
        .pp-grievance {
          background: rgba(205,254,113,0.04);
          border-color: rgba(205,254,113,0.2);
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
          margin-top: 16px;
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
        }
      `}</style>
    </div>
    </>
  );
}
