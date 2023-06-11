import Link from 'next/link'
import Script from 'next/script'
import Loading from '@/app/components/base/loading'

const Home = async () => {
  return (
    <div className="flex flex-col justify-center min-h-screen py-12 sm:px-6 lg:px-8">
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-9WTD09KFGD"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){window.dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-9WTD09KFGD');
        `}
      </Script>
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Loading type='area' />
        <div className="mt-10 text-center">
          <Link href='/apps'>🚀</Link>
        </div>
      </div>
    </div>
  )
}

export default Home
