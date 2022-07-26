import { useEffect } from 'react'
import { useRouter } from 'next/router'

import { pageview } from '../lib/gtag'

export default function usePageView() {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (path: any) => {
      pageview(path)
    }

    router.events.on('hashChangeComplete', handleRouteChange)
    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('hashChangeComplete', handleRouteChange)
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
}
