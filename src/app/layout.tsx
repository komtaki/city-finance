import type { Metadata } from 'next'
import CssBaseline from '@mui/material/CssBaseline'

import GoogleAnalytics from '../components/google-analytics'
import ThemeProvider from '../components/ThemeProvider'
import PageViewTracker from '../components/PageViewTracker'
import '../styles/global.scss'

export const metadata: Metadata = {
  title: '市区町村の財政指数ランキング',
  description: '政府統計から算出した全国の市区町村の財政力指数ランキング',
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_DOMAIN_URL || 'http://localhost:3000',
  ),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <head>
        <GoogleAnalytics />
      </head>
      <body>
        <CssBaseline />
        <ThemeProvider>
          <PageViewTracker />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
