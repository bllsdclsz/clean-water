import React, {Component} from "react";
import {Nav, Navbar, NavItem, NavLink, NavbarBrand} from "reactstrap";

class Navigation extends Component{
    render() {
        return (
            <>
                <Navbar color="success" dark expand="sm" className="flex justify-content-between">
                    <NavbarBrand href="/">
                        <h2>My Page</h2>
                    </NavbarBrand>
                    <Nav className="mr-auto" navbar pills>
                        <NavItem>
                            <NavLink href="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/aboutus/">About Us</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/projects/">Projects</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/contact/">Contact</NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
            </>
        )
    }
}

export default Navigation;