import Head from 'next/head'

export default function DeleteAccount() {
  return (
    <>
      <Head>
        <title>Delete Account – Stance Health</title>
        <meta name="description" content="Request deletion of your Stance Health account and data." />
      </Head>

      <div style={{ paddingTop: '90px', minHeight: '100vh', background: '#f8f9fb' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto', padding: '60px 24px' }}>

          <h1 style={{ fontSize: '32px', fontWeight: '800', color: '#132644', marginBottom: '12px' }}>
            Delete Your Account
          </h1>
          <p style={{ fontSize: '16px', color: '#555e6e', lineHeight: '1.7', marginBottom: '40px' }}>
            You can request deletion of your Stance Health account and all associated data by contacting us.
            We will process your request within <strong>30 days</strong>.
          </p>

          <div style={{ background: '#fff', borderRadius: '16px', padding: '32px', boxShadow: '0 4px 24px rgba(19,38,68,0.08)', marginBottom: '32px' }}>
            <h2 style={{ fontSize: '18px', fontWeight: '700', color: '#132644', marginBottom: '16px' }}>
              How to request account deletion
            </h2>
            <ol style={{ paddingLeft: '20px', color: '#333', lineHeight: '2' }}>
              <li>Send an email to <a href="mailto:support@stance.health" style={{ color: '#0F5E9C', fontWeight: '600' }}>support@stance.health</a></li>
              <li>Use subject line: <strong>Account Deletion Request</strong></li>
              <li>Include your registered phone number or email address</li>
              <li>We will confirm deletion within 30 days</li>
            </ol>
          </div>

          <div style={{ background: '#fff', borderRadius: '16px', padding: '32px', boxShadow: '0 4px 24px rgba(19,38,68,0.08)', marginBottom: '32px' }}>
            <h2 style={{ fontSize: '18px', fontWeight: '700', color: '#132644', marginBottom: '16px' }}>
              What gets deleted
            </h2>
            <ul style={{ paddingLeft: '20px', color: '#333', lineHeight: '2' }}>
              <li>Your profile (name, phone number, email, date of birth)</li>
              <li>Appointment history and session records</li>
              <li>Payment and billing information</li>
              <li>Device tokens and notification preferences</li>
            </ul>
          </div>

          <div style={{ background: '#fff3e0', borderRadius: '16px', padding: '24px', border: '1px solid #ffe0b2' }}>
            <h2 style={{ fontSize: '16px', fontWeight: '700', color: '#e65100', marginBottom: '8px' }}>
              Data retained after deletion
            </h2>
            <p style={{ fontSize: '14px', color: '#555', lineHeight: '1.7', margin: 0 }}>
              We may retain certain data for up to <strong>90 days</strong> for legal and compliance purposes
              (e.g. billing records, tax documents). After this period, all data is permanently deleted.
            </p>
          </div>

          <div style={{ marginTop: '40px', textAlign: 'center' }}>
            <a
              href="mailto:support@stance.health?subject=Account%20Deletion%20Request"
              style={{
                display: 'inline-block',
                padding: '14px 32px',
                background: '#132644',
                color: '#fff',
                borderRadius: '12px',
                fontSize: '15px',
                fontWeight: '700',
                textDecoration: 'none',
              }}
            >
              Email Us to Delete Account
            </a>
          </div>

        </div>
      </div>
    </>
  )
}
