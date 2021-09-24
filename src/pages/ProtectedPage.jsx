import { Heading, Container, Badge } from '@chakra-ui/react'
import React from 'react'
import { Layout } from '../components/Layout'

export default function ProtectedPage() {
  return (
    <Layout>
      <Heading>
        Protected page
        <Badge colorScheme='green' fontSize='lg' mx={4}>
          Protected Page
        </Badge>
      </Heading>
      <Container maxW='container.lg' overflowX='auto' py={4}></Container>
    </Layout>
  )
}
