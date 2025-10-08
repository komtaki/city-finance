'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

import { pageview } from '../lib/gtag'

export default function usePageView() {
  const pathname = usePathname()

  useEffect(() => {
    pageview(pathname)
  }, [pathname])
}
