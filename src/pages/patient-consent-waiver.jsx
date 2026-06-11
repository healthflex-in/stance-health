import Head from 'next/head';

export default function PatientConsentWaiver() {
  return (
    <>
      <Head>
        <title>Patient Consent &amp; Waiver — Stance Health</title>
        <meta name="description" content="Read the Stance Health patient consent and waiver before beginning your care." />
      </Head>
      <div className="main-wrapper" style={{ paddingTop: '120px' }}>

      <section className="inner-banner">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="inner-banner-content">
                <h1>Patient Consent &amp; Waiver</h1>
                <p>Please read this carefully before beginning your care at Stance Health.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-50 pb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">

              <div className="pp-intro">
                <p>
                  By registering and receiving services at Stance Health (Deftronin Technologies Pvt Ltd),
                  you acknowledge and agree to the following.
                </p>
              </div>

              <div className="pp-section">
                <div className="pp-section-header">
                  <span className="pp-section-num">01</span>
                  <h2>Consent to Receive Services</h2>
                </div>
                <p>
                  I agree to receive physiotherapy, assessments, exercise, strength &amp; conditioning, and
                  related services from Stance Health, and understand that outcomes may vary and temporary
                  soreness, discomfort, or symptom flare-ups may occur.
                </p>
              </div>

              <div className="pp-section">
                <div className="pp-section-header">
                  <span className="pp-section-num">02</span>
                  <h2>Accuracy of Medical Information</h2>
                </div>
                <p>
                  I agree that the medical information provided by me is accurate and complete, and I will
                  inform Stance of any relevant health conditions, medications, surgeries, allergies,
                  pregnancy, or restrictions.
                </p>
              </div>

              <div className="pp-section pp-grievance">
                <div className="pp-section-header">
                  <span className="pp-section-num">03</span>
                  <h2>Questions</h2>
                </div>
                <p>For any queries about your care or this consent, please contact us.</p>
                <div className="pp-contact-card">
                  <div className="pp-contact-row">
                    <span className="pp-contact-label">Email</span>
                    <a href="mailto:hello@stance.health" className="pp-contact-value pp-contact-link">
                      hello@stance.health
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

        .pp-section {
          margin-bottom: 40px; padding: 28px 32px;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(205,254,113,0.08);
          border-radius: 14px;
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
