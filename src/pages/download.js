const ANDROID_URL = 'https://play.google.com/store/apps/details?id=com.stance.health'
const IOS_URL = 'https://apps.apple.com/us/app/stance-health/id6757695513'
const WEBSITE_URL = 'https://www.stance.health'

export default function DownloadPage() {
  return null
}

export function getServerSideProps({ req }) {
  const ua = req.headers['user-agent'] || ''

  let destination = WEBSITE_URL

  if (/android/i.test(ua)) {
    destination = ANDROID_URL
  } else if (/iphone|ipad|ipod/i.test(ua)) {
    destination = IOS_URL
  }

  return {
    redirect: {
      destination,
      permanent: false,
    },
  }
}
