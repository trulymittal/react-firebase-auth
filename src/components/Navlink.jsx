import React from 'react'
import { NavLink as Link, useLocation } from 'react-router-dom'
import { Button } from '@chakra-ui/react'

export default function Navlink({ to, name, ...rest }) {
  const location = useLocation()

  const isActive = location.pathname === to

  return (
    <Link to={to}>
      <Button
        variant={isActive ? 'outline' : 'ghost'}
        colorScheme={isActive ? 'pink' : ''}
        {...rest}
      >
        {name}
      </Button>
    </Link>
  )
}
