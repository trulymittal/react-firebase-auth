import {
  Badge,
  chakra,
  Code,
  Heading,
  List,
  ListItem,
  OrderedList,
} from '@chakra-ui/react'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Layout } from '../components/Layout'
import { useAuth } from '../contexts/AuthContext'

export default function Homepage() {
  return (
    <Layout>
      <Heading>Home page</Heading>
      {/* <Text my={6}>{currentUser?.email}</Text> */}

      <Heading>
        Firebase Authentication
        <chakra.span
          fontWeight='black'
          fontStyle='italic'
          fontSize='9xl'
          mx={2}
        >
          v9
        </chakra.span>
        <Badge
          fontWeight='black'
          fontSize='4xl'
          mx={2}
          px={2}
          colorScheme='green'
        >
          NEW API
        </Badge>
      </Heading>
      <OrderedList fontSize='3xl' my={4}>
        <ListItem>Email password authentication (Register/Login)</ListItem>
        <ListItem>Google Sign in</ListItem>
        <ListItem>Forgot Password</ListItem>
        <ListItem>Custom Reset password page</ListItem>
        <ListItem>Protected routes</ListItem>
        <ListItem>
          <Code fontSize='inherit'> Redirect TO</Code> or Back (keeping the
          state)
        </ListItem>
        <ListItem>
          custom Auth Hook <Code fontSize='3xl'>useAuth()</Code>
        </ListItem>
        <ListItem>Loading indicators while sign-in/up</ListItem>
        <ListItem>
          Dark Mode enabled template using
          <Badge
            fontSize='inherit'
            colorScheme='teal'
            mx={2}
            textTransform='capitalize'
            borderRadius='md'
          >
            Chakra UI
          </Badge>
        </ListItem>
      </OrderedList>
      <Heading size='md' mt={8}>
        Some other links (only for reference):
      </Heading>
      <List>
        <ListItem>
          <Link to='/reset-password'>reset page</Link>
        </ListItem>
        <ListItem>
          <Link to='/forgot-password'>forgot page</Link>
        </ListItem>
        <ListItem>
          <Link to='/test'>test page</Link>
        </ListItem>
      </List>
    </Layout>
  )
}
