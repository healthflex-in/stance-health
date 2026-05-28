import QRCode from 'qrcode'
import Head from 'next/head'
import AppDownloadSection from '@/components/AppDownloadSection'

const DOWNLOAD_URL = 'https://www.stance.health/download'

export default function QRPage({ qrDataUrl }) {
  return (
    <>
      <Head>
        <title>Download Stance Health</title>
        <meta name="description" content="Download the Stance Health app on Android or iOS" />
      </Head>
      <div style={{ paddingTop: '90px' }}>
        <AppDownloadSection qrDataUrl={qrDataUrl} />
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const qrDataUrl = await QRCode.toDataURL(DOWNLOAD_URL, {
    width: 400,
    margin: 1,
    color: { dark: '#132644', light: '#ffffff' },
  })
  return { props: { qrDataUrl } }
}
