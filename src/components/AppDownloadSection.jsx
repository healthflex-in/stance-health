'use client'
import { useState, useEffect } from 'react'

const ANDROID_URL = 'https://play.google.com/store/apps/details?id=com.stance.health'
const IOS_URL = 'https://apps.apple.com/us/app/stance-health/id6757695513'
const DOWNLOAD_URL = 'https://www.stance.health/download'

export default function AppDownloadSection({ qrDataUrl: ssrQr }) {
  const [qrDataUrl, setQrDataUrl] = useState(ssrQr || null)

  useEffect(() => {
    if (qrDataUrl) return
    import('qrcode').then((QRCode) => {
      QRCode.default.toDataURL(DOWNLOAD_URL, {
        width: 400, margin: 1,
        color: { dark: '#132644', light: '#ffffff' },
      }).then(setQrDataUrl)
    })
  }, [])

  const handleDownload = () => {
    if (!qrDataUrl) return
    const a = document.createElement('a')
    a.href = qrDataUrl
    a.download = 'stance-health-qr.png'
    a.click()
  }

  const handleShare = async () => {
    if (navigator.share) {
      await navigator.share({
        title: 'Download Stance Health',
        text: 'Download the Stance Health app for expert physiotherapy.',
        url: DOWNLOAD_URL,
      })
    } else {
      await navigator.clipboard.writeText(DOWNLOAD_URL)
      alert('Link copied to clipboard!')
    }
  }

  return (
    <section className="ads-sec sec">
      <div className="container">
        <div className="ads-grid">

          <div className="ads-store-side">
            <h3 className="sec-head">Get the <span>App</span></h3>
            <p className="ads-desc">Download Stance Health and start your recovery journey with world-class physiotherapy care.</p>
            <div className="ads-store-btns">
              <a href={ANDROID_URL} target="_blank" rel="noopener noreferrer" className="ads-store-btn">
                <span className="ads-store-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                    <path d="M3 20.5v-17c0-.83 1-.99 1.4-.43l14 8.5c.36.22.36.76 0 .98l-14 8.5c-.4.56-1.4.4-1.4-.55z"/>
                  </svg>
                </span>
                <span className="ads-store-text">
                  <small>Get it on</small>
                  Google Play
                </span>
              </a>
              <a href={IOS_URL} target="_blank" rel="noopener noreferrer" className="ads-store-btn">
                <span className="ads-store-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                </span>
                <span className="ads-store-text">
                  <small>Download on the</small>
                  App Store
                </span>
              </a>
            </div>
          </div>

          <div className="ads-card-side">
            <div className="ads-card">
              <div className="ads-card-top">
                <span className="ads-card-eyebrow">Scan to get the app</span>
              </div>
              <div className="ads-card-img-area">
                {qrDataUrl ? (
                  <img src={qrDataUrl} alt="QR Code — Stance Health" width={200} height={200} />
                ) : (
                  <div className="ads-qr-placeholder" />
                )}
                <div className="ads-card-corners">
                  <span className="ads-corner ads-tl"/><span className="ads-corner ads-tr"/>
                  <span className="ads-corner ads-bl"/><span className="ads-corner ads-br"/>
                </div>
              </div>
              <p className="ads-card-hint">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14" style={{marginRight:'5px',verticalAlign:'middle'}}>
                  <path d="M12 2a7 7 0 0 1 7 7c0 5-7 13-7 13S5 14 5 9a7 7 0 0 1 7-7z"/><circle cx="12" cy="9" r="2.5"/>
                </svg>
                Point your camera at the code
              </p>
              <div className="ads-divider"><span>or</span></div>
              <div className="ads-card-actions">
                <button onClick={handleDownload} className="ads-action-btn ads-btn-outline">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" width="14" height="14">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7 10 12 15 17 10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                  </svg>
                  Save QR
                </button>
                <button onClick={handleShare} className="ads-action-btn ads-btn-filled">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" width="14" height="14">
                    <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
                    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
                  </svg>
                  Share
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        .ads-sec { padding: 80px 0 100px; }
        .ads-grid { display: flex; gap: 80px; align-items: center; }
        .ads-store-side { flex: 1; }
        .ads-desc { color: #555e6e; font-size: 16px; line-height: 1.7; max-width: 380px; margin: 0 0 36px; }
        .ads-store-btns { display: flex; flex-direction: column; gap: 14px; max-width: 280px; }
        .ads-store-btn {
          display: flex; align-items: center; gap: 14px;
          padding: 14px 20px; background: #132644; color: #fff;
          border-radius: 14px; text-decoration: none;
          transition: background 0.2s, transform 0.15s;
        }
        .ads-store-btn:hover { background: #0F5E9C; transform: translateY(-2px); color: #fff; }
        .ads-store-icon {
          display: flex; align-items: center; justify-content: center;
          width: 36px; height: 36px; background: rgba(255,255,255,0.12);
          border-radius: 8px; flex-shrink: 0;
        }
        .ads-store-text { display: flex; flex-direction: column; line-height: 1.2; font-size: 15px; font-weight: 700; }
        .ads-store-text small { font-size: 10px; opacity: 0.65; letter-spacing: 0.04em; text-transform: uppercase; }
        .ads-card-side { flex-shrink: 0; }
        .ads-card {
          background: #fff; border-radius: 32px; padding: 36px 32px 32px;
          text-align: center;
          box-shadow: 0 24px 64px rgba(19,38,68,0.12), 0 4px 16px rgba(19,38,68,0.06);
          width: 300px;
        }
        .ads-card-top { margin-bottom: 28px; }
        .ads-card-eyebrow { font-size: 11px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: #0F5E9C; }
        .ads-card-img-area { position: relative; display: inline-block; margin-bottom: 20px; }
        .ads-card-img-area img { display: block; border-radius: 8px; }
        .ads-qr-placeholder { width: 200px; height: 200px; border-radius: 8px; background: #f4f6f9; }
        .ads-card-corners { position: absolute; inset: -6px; pointer-events: none; }
        .ads-corner { position: absolute; width: 18px; height: 18px; border-color: #132644; border-style: solid; }
        .ads-tl { top:0; left:0; border-width:3px 0 0 3px; border-radius:4px 0 0 0; }
        .ads-tr { top:0; right:0; border-width:3px 3px 0 0; border-radius:0 4px 0 0; }
        .ads-bl { bottom:0; left:0; border-width:0 0 3px 3px; border-radius:0 0 0 4px; }
        .ads-br { bottom:0; right:0; border-width:0 3px 3px 0; border-radius:0 0 4px 0; }
        .ads-card-hint { font-size: 12px; color: #8e98a8; margin: 0 0 20px; display: flex; align-items: center; justify-content: center; }
        .ads-divider { display: flex; align-items: center; gap: 10px; margin-bottom: 20px; }
        .ads-divider::before, .ads-divider::after { content: ''; flex: 1; height: 1px; background: #eef0f5; }
        .ads-divider span { font-size: 11px; color: #b0b8c4; letter-spacing: 0.06em; text-transform: uppercase; }
        .ads-card-actions { display: flex; gap: 10px; }
        .ads-action-btn {
          flex: 1; display: inline-flex; align-items: center; justify-content: center;
          gap: 6px; padding: 12px 10px; border-radius: 12px; font-size: 12px; font-weight: 700;
          cursor: pointer; transition: transform 0.15s, box-shadow 0.15s; letter-spacing: 0.02em;
        }
        .ads-action-btn:hover { transform: translateY(-2px); box-shadow: 0 6px 16px rgba(19,38,68,0.12); }
        .ads-btn-outline { background: #f4f6f9; color: #132644; border: 1.5px solid #e4e8f0; }
        .ads-btn-filled { background: #132644; color: #fff; border: 1.5px solid #132644; }
        @media (max-width: 900px) {
          .ads-grid { flex-direction: column; gap: 48px; }
          .ads-card { width: 100%; }
          .ads-card-side { width: 100%; }
          .ads-store-btns { max-width: 100%; }
        }
      `}</style>
    </section>
  )
}
