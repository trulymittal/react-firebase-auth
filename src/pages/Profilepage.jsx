import React from 'react'
import { Layout } from '../components/Layout'
import { Badge, Code, Container, Heading } from '@chakra-ui/react'
import { Card } from '../components/Card'

export default function Profilepage() {
  return (
    <Layout>
      <Heading>
        Profile page
        <Badge colorScheme='green' fontSize='lg' mx={4}>
          Protected Page
        </Badge>
      </Heading>

      <Container maxW='container.lg' overflowX='auto' py={4}></Container>
    </Layout>
  )
}
