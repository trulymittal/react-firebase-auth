import { chakra, Container, Heading } from '@chakra-ui/react'
import React from 'react'
import { Layout } from '../components/Layout'
import { useAuth } from '../contexts/AuthContext'

export default function Profilepage() {
  const { currentUser } = useAuth()
  return (
    <Layout>
      <Heading>Profile page</Heading>
      <Container maxW='container.lg' overflowX='auto' py={4}>
        <chakra.pre p={4}>
          {currentUser && <pre> {JSON.stringify(currentUser, null, 2)}</pre>}
        </chakra.pre>
      </Container>
    </Layout>
  )
}
