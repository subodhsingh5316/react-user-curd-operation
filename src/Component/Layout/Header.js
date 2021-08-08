import React from 'react'
import { Container, Nav, Navbar,Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'


export default function Header() {
    return (
        <div>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand >Navbar</Navbar.Brand>
                    </LinkContainer>
                    <Nav className="me-auto">
                        <LinkContainer to='/'>
                            <Nav.Link >Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/about'>
                            <Nav.Link >About</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/contact'>
                            <Nav.Link >Contact</Nav.Link>
                        </LinkContainer>
                    </Nav>
                    <Nav className = 'mr-auto'>
                        <LinkContainer to='/user/adduser'>
                            <Button variant="primary" className = 'btn-outline-light' >Add user</Button>
                         </LinkContainer>

                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}
