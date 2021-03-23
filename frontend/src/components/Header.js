import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Nav, Navbar, Container } from 'react-bootstrap'

const Header = () => {
  return (
    <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
      <Container>
        <LinkContainer to='/'>
          <Navbar.Brand>MERN SYSTEM</Navbar.Brand>
        </LinkContainer>

        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ml-auto'>
            <LinkContainer to='/'>
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/login'>
              <Nav.Link>Sign In</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
