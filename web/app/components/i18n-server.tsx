import React from 'react'
import Script from 'next/script'
import I18N from './i18n'
import { ToastProvider } from './base/toast'
import { getDictionary, getLocaleOnServer } from '@/i18n/server'

export type II18NServerProps = {
  // locale: Locale
  children: React.ReactNode
}

const I18NServer = async ({
  // locale,
  children,
}: II18NServerProps) => {
  const locale = getLocaleOnServer()
  const dictionary = await getDictionary(locale)

  return (
    <I18N {...{ locale, dictionary }}>
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

      <ToastProvider>{children}</ToastProvider>
    </I18N>
  )
}

export default I18NServer
