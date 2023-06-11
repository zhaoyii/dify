import { Helmet } from 'react-helmet'
import I18nServer from './components/i18n-server'
import { getLocaleOnServer } from '@/i18n/server'

import './styles/globals.css'
import './styles/markdown.scss'

export const metadata = {
  title: '42words.io',
}

const LocaleLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const locale = getLocaleOnServer()
  return (
    <html lang={locale ?? 'en'} className="h-full">
      <Helmet>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-9WTD09KFGD" />
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-9WTD09KFGD');
          `}
        </script>
      </Helmet>
      <body
        className="h-full"
        data-api-prefix={process.env.NEXT_PUBLIC_API_PREFIX}
        data-pubic-api-prefix={process.env.NEXT_PUBLIC_PUBLIC_API_PREFIX}
        data-public-edition={process.env.NEXT_PUBLIC_EDITION}
      >
        {/* @ts-expect-error Async Server Component */}
        <I18nServer locale={locale}>{children}</I18nServer>
      </body>
    </html>
  )
}

export default LocaleLayout
