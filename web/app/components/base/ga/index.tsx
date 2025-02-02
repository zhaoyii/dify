import type { FC } from 'react'
import React from 'react'
import Script from 'next/script'

export enum GaType {
  admin = 'admin',
  webapp = 'webapp',
}

const gaIdMaps = {
  [GaType.admin]: 'G-9WTD09KFGD',
  [GaType.webapp]: 'G-9WTD09KFGD',
}

export type IGAProps = {
  gaType: GaType
}

const GA: FC<IGAProps> = ({
  gaType,
}) => {
  return (
    <Script
      id="gtag-base"
      strategy="beforeInteractive"
      dangerouslySetInnerHTML={{
        __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer', '${gaIdMaps[gaType]}');
          `,
      }} />
  )
}
export default React.memo(GA)
