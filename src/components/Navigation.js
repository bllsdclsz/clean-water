import React, {Component} from "react";
import { Link } from "react-router-dom";
import {Nav, Navbar, NavItem, NavLink, NavbarBrand, Media} from "reactstrap";
import Logo from "./images/logo.png";

class Navigation extends Component{
    render() {
        return (
            <>
                <Navbar color="success" dark expand="sm" className="flex justify-content-between p-0">
                    <NavbarBrand className="p-0 m-0" href="/">
                        <Media className="p-0 m-0 app-logo" src={Logo} />
                    </NavbarBrand>
                    <Nav className="mr-auto" navbar pills>
                        <NavItem>
                            <NavLink><Link to={process.env.PUBLIC_URL + "/"}>Home</Link></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink ><Link to={process.env.PUBLIC_URL + "/aboutus"}>About Us</Link></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink ><Link to={process.env.PUBLIC_URL + "/contact"}>Contact</Link></NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
            </>
        )
    }
}

export default Navigation;