import React, {Component} from "react";
import {Nav, Navbar, NavItem, NavLink, NavbarBrand} from "reactstrap";

class Navigation extends Component{
    render() {
        return (
            <>
                <Navbar color="info" dark expand="lg">
                    <NavbarBrand href="/">
                        <h2>My Page</h2>
                    </NavbarBrand>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/components/">Components</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
            </>
        )
    }
}

export default Navigation;