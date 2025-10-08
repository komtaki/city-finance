'use client'

import { createTheme, ThemeProvider } from '@mui/material/styles'
import { ReactNode } from 'react'

const theme = createTheme({
  palette: {
    primary: {
      main: '#0f2350',
    },
  },
  typography: {
    h1: {
      fontSize: '2rem',
      fontWeight: 600,
    },
    h2: {
      fontSize: '1.75rem',
      fontWeight: 600,
    },
  },
})

export default function CustomThemeProvider({
  children,
}: {
  children: ReactNode
}) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
