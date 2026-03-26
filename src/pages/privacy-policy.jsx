import { useState } from 'react';

const sections = [
  { id: 'commitments', number: '01', title: 'Our Privacy Commitments' },
  { id: 'categories', number: '02', title: 'Categories of Information Collected' },
  { id: 'purpose', number: '03', title: 'Purpose of Collection and Use' },
  { id: 'deidentification', number: '04', title: 'De-identification and Research Use' },
  { id: 'technology', number: '05', title: 'Use of Technology Platforms' },
  { id: 'consent', number: '06', title: 'Consent and Acceptance' },
  { id: 'rights', number: '07', title: 'User Rights and Data Requests' },
  { id: 'retention', number: '08', title: 'Data Retention' },
  { id: 'sharing', number: '09', title: 'Data Sharing and Disclosure' },
  { id: 'advertising', number: '10', title: 'Advertising and Communication' },
  { id: 'security', number: '11', title: 'Data Security' },
  { id: 'children', number: '12', title: "Children's Privacy" },
  { id: 'grievance', number: '13', title: 'Grievance Officer' },
  { id: 'updates', number: '14', title: 'Updates to this Policy' },
];

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState(null);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setActiveSection(id);
  };

  return (
    <div className="main-wrapper" style={{ paddingTop: '120px' }}>
      {/* Hero Banner */}
      <section className="inner-banner">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="inner-banner-content">
                <h1>Privacy Policy</h1>
                <p>Your privacy is important to us. Learn how we collect, use, and protect your information.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-50 pb-100">
        <div className="container">
          <div className="row">

            {/* Table of Contents — sidebar on desktop */}
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

            {/* Main Content */}
            <div className="col-lg-9">
              <div className="pp-intro">
                <p>
                  Stance Health (&ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;) is committed to protecting the privacy and security of your personal and health-related information. This Privacy Policy outlines how we collect, use, process, and safeguard your data when you access our services, website, or platform.
                </p>
              </div>

              {/* Section 1 */}
              <div id="commitments" className="pp-section">
                <div className="pp-section-header">
                  <span className="pp-section-num">01</span>
                  <h2>Our Privacy Commitments</h2>
                </div>
                <p>We are committed to ensuring that:</p>
                <ul className="pp-list">
                  <li>Personal information is collected for specific, clear, and legitimate purposes.</li>
                  <li>Data is used only for purposes relevant to the services we provide, including clinical care, performance improvement, and related operations.</li>
                  <li>We maintain appropriate safeguards to protect personal and health data from unauthorized access, disclosure, or misuse.</li>
                  <li>Data is retained only for as long as necessary for service delivery, legal compliance, and operational requirements.</li>
                  <li>We maintain transparency regarding how data is collected, used, and shared.</li>
                </ul>
              </div>

              {/* Section 2 */}
              <div id="categories" className="pp-section">
                <div className="pp-section-header">
                  <span className="pp-section-num">02</span>
                  <h2>Categories of Information Collected</h2>
                </div>
                <p>We may collect the following categories of information:</p>
                <div className="pp-cards">
                  <div className="pp-card">
                    <h3>Personal Information</h3>
                    <p>Name, age, gender, phone number, email address, and basic identification details.</p>
                  </div>
                  <div className="pp-card">
                    <h3>Health &amp; Clinical Information</h3>
                    <p>Information relating to injuries, symptoms, movement patterns, strength levels, assessments, treatment notes, and progress tracking.</p>
                  </div>
                  <div className="pp-card">
                    <h3>Usage &amp; Device Information</h3>
                    <p>Device type, IP address, app or website usage patterns, and interaction data.</p>
                  </div>
                  <div className="pp-card">
                    <h3>Communication &amp; Engagement Data</h3>
                    <p>Interactions through calls, WhatsApp, forms, or other communication channels, including responses to campaigns or outreach.</p>
                  </div>
                </div>
              </div>

              {/* Section 3 */}
              <div id="purpose" className="pp-section">
                <div className="pp-section-header">
                  <span className="pp-section-num">03</span>
                  <h2>Purpose of Collection and Use</h2>
                </div>
                <p>The information collected is used for the following purposes:</p>
                <ul className="pp-list">
                  <li>To assess, plan, and deliver physiotherapy and performance-related services.</li>
                  <li>To monitor progress and improve outcomes across sessions.</li>
                  <li>To communicate with users regarding appointments, services, and relevant updates.</li>
                  <li>To improve our services, systems, and user experience.</li>
                  <li>To conduct internal analysis and generate insights, including through aggregated or de-identified data.</li>
                </ul>
              </div>

              {/* Section 4 */}
              <div id="deidentification" className="pp-section">
                <div className="pp-section-header">
                  <span className="pp-section-num">04</span>
                  <h2>De-identification and Research Use</h2>
                </div>
                <ul className="pp-list">
                  <li>Certain data may be processed in a de-identified or anonymized form for the purpose of improving clinical outcomes, service quality, and internal research.</li>
                  <li>Such data does not identify individual users and is used only in aggregated formats.</li>
                </ul>
              </div>

              {/* Section 5 */}
              <div id="technology" className="pp-section">
                <div className="pp-section-header">
                  <span className="pp-section-num">05</span>
                  <h2>Use of Technology Platforms and Data Processing</h2>
                </div>
                <ul className="pp-list">
                  <li>We may use third-party tools, software platforms, and technology solutions to support assessment, measurement, data processing, and service delivery.</li>
                  <li>Information may be processed, stored, or transmitted through such systems as part of normal operations.</li>
                  <li>These tools function solely as infrastructure or support systems, and all clinical interpretation, decision-making, and medical responsibility remain exclusively with Stance Health.</li>
                  <li>No independent diagnosis or treatment decisions are made by any third-party systems.</li>
                </ul>
              </div>

              {/* Section 6 */}
              <div id="consent" className="pp-section">
                <div className="pp-section-header">
                  <span className="pp-section-num">06</span>
                  <h2>Consent and Acceptance</h2>
                </div>
                <ul className="pp-list">
                  <li>By accessing our services, booking an appointment, or engaging with our platform, you acknowledge and agree to the collection and use of information as described in this Privacy Policy.</li>
                  <li>Where required, additional consent may be obtained for specific use cases.</li>
                  <li>Continued use of our services shall be deemed as acceptance of this Privacy Policy and its terms.</li>
                </ul>
              </div>

              {/* Section 7 */}
              <div id="rights" className="pp-section">
                <div className="pp-section-header">
                  <span className="pp-section-num">07</span>
                  <h2>User Rights and Data Requests</h2>
                </div>
                <ul className="pp-list">
                  <li>Users may request access to their personal data.</li>
                  <li>Users may request correction of inaccurate or incomplete data.</li>
                  <li>Users may request deletion or anonymization of their data, subject to applicable legal and operational requirements.</li>
                  <li>Requests may be submitted through the contact details provided below and will be addressed within a reasonable timeframe.</li>
                </ul>
              </div>

              {/* Section 8 */}
              <div id="retention" className="pp-section">
                <div className="pp-section-header">
                  <span className="pp-section-num">08</span>
                  <h2>Data Retention</h2>
                </div>
                <p>Personal and clinical data is retained only for as long as necessary for:</p>
                <div className="pp-tags">
                  <span className="pp-tag">Service delivery</span>
                  <span className="pp-tag">Clinical continuity</span>
                  <span className="pp-tag">Legal &amp; regulatory compliance</span>
                </div>
                <p style={{ marginTop: '16px' }}>Data that is no longer required may be anonymized or securely deleted.</p>
              </div>

              {/* Section 9 */}
              <div id="sharing" className="pp-section">
                <div className="pp-section-header">
                  <span className="pp-section-num">09</span>
                  <h2>Data Sharing and Disclosure</h2>
                </div>
                <div className="pp-highlight">We do not sell personal data to third parties.</div>
                <p>Data may be shared with:</p>
                <ul className="pp-list">
                  <li>Internal clinical and operational teams</li>
                  <li>Technology service providers supporting our systems</li>
                  <li>Regulatory authorities, if required by law</li>
                </ul>
                <p>Any such sharing is limited to what is necessary for the intended purpose.</p>
              </div>

              {/* Section 10 */}
              <div id="advertising" className="pp-section">
                <div className="pp-section-header">
                  <span className="pp-section-num">10</span>
                  <h2>Advertising and Communication</h2>
                </div>
                <ul className="pp-list">
                  <li>We may use platforms such as Meta (Facebook/Instagram) and Google for communication, outreach, and service awareness.</li>
                  <li>Limited, non-sensitive data may be used to understand engagement and improve communication effectiveness.</li>
                  <li>We do not share identifiable health or clinical information with advertising platforms.</li>
                  <li>Users may opt out of promotional communication at any time.</li>
                </ul>
              </div>

              {/* Section 11 */}
              <div id="security" className="pp-section">
                <div className="pp-section-header">
                  <span className="pp-section-num">11</span>
                  <h2>Data Security</h2>
                </div>
                <ul className="pp-list">
                  <li>We implement reasonable administrative, technical, and physical safeguards to protect data.</li>
                  <li>Access to data is restricted to authorized personnel based on role and necessity.</li>
                </ul>
              </div>

              {/* Section 12 */}
              <div id="children" className="pp-section">
                <div className="pp-section-header">
                  <span className="pp-section-num">12</span>
                  <h2>Children&apos;s Privacy</h2>
                </div>
                <p>Our services are not intended for individuals under the age of 18 without appropriate supervision or consent from a parent or guardian.</p>
              </div>

              {/* Section 13 — Grievance */}
              <div id="grievance" className="pp-section pp-grievance">
                <div className="pp-section-header">
                  <span className="pp-section-num">13</span>
                  <h2>Grievance Officer</h2>
                </div>
                <p>If you have any complaints, concerns, or requests regarding this Privacy Policy or your data, you may contact:</p>
                <div className="pp-contact-card">
                  <div className="pp-contact-row">
                    <span className="pp-contact-label">Name</span>
                    <span className="pp-contact-value">Rohit Arora</span>
                  </div>
                  <div className="pp-contact-row">
                    <span className="pp-contact-label">Email</span>
                    <a href="mailto:grievance.officer@healthflex.in" className="pp-contact-value pp-contact-link">
                      grievance.officer@healthflex.in
                    </a>
                  </div>
                  <div className="pp-contact-row">
                    <span className="pp-contact-label">Designation</span>
                    <span className="pp-contact-value">Grievance Officer</span>
                  </div>
                </div>
              </div>

              {/* Section 14 */}
              <div id="updates" className="pp-section">
                <div className="pp-section-header">
                  <span className="pp-section-num">14</span>
                  <h2>Updates to this Policy</h2>
                </div>
                <ul className="pp-list">
                  <li>This Privacy Policy may be updated from time to time to reflect changes in our practices, services, or legal requirements.</li>
                  <li>Continued use of our services after such updates constitutes acceptance of the revised policy.</li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .pp-intro {
          background: rgba(205, 254, 113, 0.06);
          border-left: 3px solid #CDFE71;
          border-radius: 0 8px 8px 0;
          padding: 20px 24px;
          margin-bottom: 40px;
        }
        .pp-intro p {
          color: #e0e0e0;
          font-size: 15px;
          line-height: 1.8;
          margin: 0;
        }

        /* Sidebar TOC */
        .pp-toc {
          position: sticky;
          top: 140px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(205,254,113,0.12);
          border-radius: 12px;
          padding: 20px;
        }
        .pp-toc-label {
          color: #CDFE71;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 14px;
        }
        .pp-toc ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .pp-toc-item {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          background: none;
          border: none;
          color: rgba(255,255,255,0.55);
          font-size: 12px;
          line-height: 1.5;
          padding: 6px 8px;
          border-radius: 6px;
          cursor: pointer;
          width: 100%;
          text-align: left;
          transition: all 0.2s;
          margin-bottom: 2px;
        }
        .pp-toc-item:hover,
        .pp-toc-item.active {
          background: rgba(205,254,113,0.08);
          color: #CDFE71;
        }
        .pp-toc-num {
          color: rgba(205,254,113,0.4);
          font-size: 10px;
          font-weight: 700;
          flex-shrink: 0;
          margin-top: 1px;
        }
        .pp-toc-item.active .pp-toc-num {
          color: #CDFE71;
        }

        /* Sections */
        .pp-section {
          margin-bottom: 40px;
          padding: 28px 32px;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(205,254,113,0.08);
          border-radius: 14px;
          scroll-margin-top: 140px;
        }
        .pp-section-header {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 18px;
          padding-bottom: 14px;
          border-bottom: 1px solid rgba(205,254,113,0.12);
        }
        .pp-section-num {
          font-size: 11px;
          font-weight: 800;
          color: #CDFE71;
          background: rgba(205,254,113,0.1);
          border-radius: 6px;
          padding: 3px 8px;
          letter-spacing: 1px;
          flex-shrink: 0;
        }
        .pp-section h2 {
          color: #ffffff;
          font-size: 18px;
          font-weight: 600;
          margin: 0;
        }
        .pp-section p {
          color: rgba(255,255,255,0.75);
          font-size: 14px;
          line-height: 1.8;
          margin-bottom: 12px;
        }
        .pp-section h3 {
          color: #CDFE71;
          font-size: 13px;
          font-weight: 600;
          margin-bottom: 6px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        /* List */
        .pp-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .pp-list li {
          color: rgba(255,255,255,0.75);
          font-size: 14px;
          line-height: 1.8;
          padding: 8px 0 8px 20px;
          border-bottom: 1px solid rgba(255,255,255,0.04);
          position: relative;
        }
        .pp-list li:last-child {
          border-bottom: none;
        }
        .pp-list li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 17px;
          width: 6px;
          height: 6px;
          background: #CDFE71;
          border-radius: 50%;
        }

        /* Info cards for section 2 */
        .pp-cards {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
          margin-top: 16px;
        }
        .pp-card {
          background: rgba(205,254,113,0.04);
          border: 1px solid rgba(205,254,113,0.1);
          border-radius: 10px;
          padding: 16px;
        }
        .pp-card h3 {
          color: #CDFE71;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 8px;
        }
        .pp-card p {
          color: rgba(255,255,255,0.65);
          font-size: 13px;
          line-height: 1.6;
          margin: 0;
        }

        /* Tags for section 8 */
        .pp-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 12px;
        }
        .pp-tag {
          background: rgba(205,254,113,0.1);
          color: #CDFE71;
          border: 1px solid rgba(205,254,113,0.2);
          border-radius: 20px;
          padding: 5px 14px;
          font-size: 13px;
          font-weight: 500;
        }

        /* Highlight box for section 9 */
        .pp-highlight {
          background: rgba(205,254,113,0.08);
          border-left: 3px solid #CDFE71;
          border-radius: 0 8px 8px 0;
          padding: 12px 16px;
          color: #CDFE71;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 16px;
        }

        /* Grievance section */
        .pp-grievance {
          background: rgba(205,254,113,0.04);
          border-color: rgba(205,254,113,0.2);
        }
        .pp-contact-card {
          background: rgba(0,0,0,0.25);
          border-radius: 10px;
          overflow: hidden;
          margin-top: 16px;
          border: 1px solid rgba(205,254,113,0.1);
        }
        .pp-contact-row {
          display: flex;
          align-items: center;
          padding: 14px 20px;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .pp-contact-row:last-child {
          border-bottom: none;
        }
        .pp-contact-label {
          color: rgba(255,255,255,0.4);
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          width: 110px;
          flex-shrink: 0;
        }
        .pp-contact-value {
          color: #ffffff;
          font-size: 14px;
        }
        .pp-contact-link {
          color: #CDFE71;
          text-decoration: none;
        }
        .pp-contact-link:hover {
          text-decoration: underline;
        }

        @media (max-width: 767px) {
          .pp-section {
            padding: 20px 18px;
          }
          .pp-cards {
            grid-template-columns: 1fr;
          }
          .pp-section h2 {
            font-size: 16px;
          }
        }
      `}</style>
    </div>
  );
}
