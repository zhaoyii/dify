import Link from 'next/link'
import Script from 'next/script'
import Loading from '@/app/components/base/loading'

const Home = async () => {
  return (
    <div className="flex flex-col justify-center min-h-screen py-12 sm:px-6 lg:px-8">
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
          ga('create', 'G-9WTD09KFGD', 'auto');
          ga('send', 'pageview');
        `}
      </Script>
      <Script
        src="https://www.google-analytics.com/analytics.js"
        strategy="afterInteractive"
      />

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
