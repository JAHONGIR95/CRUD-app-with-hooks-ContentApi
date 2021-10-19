import React from 'react'
import { useHistory } from 'react-router'
import { Container, Nav, Navbar, NavbarBrand, NavItem } from 'reactstrap'

export const Header = () => {
    const history = useHistory()
    return (
        <div>
            <Navbar color="dark" dark>
                <Container>
                    <NavbarBrand href="/">My Team</NavbarBrand>
                    <Nav>
                        <NavItem onClick={() => history.push('/add')} className="btn btn-primary">Add User</NavItem>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}
