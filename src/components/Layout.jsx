import React from 'react'
import { Container } from '@chakra-ui/react'
import { Navbar } from './Navbar'

export function Layout({ children }) {
  return (
    <>
      <Navbar />
      <Container maxW='container.lg'>{children}</Container>
    </>
  )
}
