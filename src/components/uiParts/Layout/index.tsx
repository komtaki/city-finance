'use client'

import Box from '@mui/material/Box'
import MuiContainer from '@mui/material/Container'
import type * as React from 'react'

import Footer from '../Footer'
import Header from '../Header'

type Props = {
  children: React.ReactNode
}

const Container: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <MuiContainer maxWidth="md">
        <Box sx={{ mt: 3, mb: 3 }}>{children}</Box>
      </MuiContainer>
      <Footer />
    </>
  )
}

export default Container
