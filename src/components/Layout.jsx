import React from 'react'
import { Box, Container } from '@chakra-ui/react'
import { Navbar } from './Navbar'

export function Layout({ children }) {
  return (
    <Box mb={16}>
      <Navbar />
      <Container maxW='container.lg'>{children}</Container>
    </Box>
  )
}
