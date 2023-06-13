import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import Loading from '@/app/components/base/loading'

// 动态导入 react-ga，仅在客户端加载和运行
const ReactGA = dynamic(
  () => {
    return import('react-ga')
  },
  { ssr: false }, // 这将禁用服务端渲染 (SSR)
)

const Home = () => {
  const router = useRouter()

  useEffect(() => {
    ReactGA.initialize('G-9WTD09KFGD') // 替换为你的真实跟踪ID
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [])

  useEffect(() => {
    const handleRouteChange = (url) => {
      ReactGA.pageview(url)
    }

    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <div className="flex flex-col justify-center min-h-screen py-12 sm:px-6 lg:px-8">
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
