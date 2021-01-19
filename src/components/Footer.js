import React, {Component} from "react";
import { Button, Col, Jumbotron, Row, List } from "reactstrap";

class Footer extends Component{
    render() {
        return (
            <>
                <Jumbotron className="mb-0 mt-5 bg-dark text-white text-center">
                    <Row>
                        <Col className="d-flex flex-column col-sm-4">
                            <h2>A LITTLE ABOUT FUND</h2>
                            <p>
                                <small> 
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
                                    ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                                    in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur 
                                    sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                                    mollit anim id est laborum
                                </small>
                            </p>
                            <Button className="btn btn-warning text-dark border-dark" type="button">DONATE</Button>
                        </Col>
                        <Col className="col-sm-2">
                            <h6>Address</h6>
                                <small>
                                    <List className="list-unstyled">
                                        <li>Samplestrasse 19</li>
                                        <li>10001 Sample City</li>
                                    </List>
                                </small>
                            </Col>
                        <Col className="col-sm-3">
                            <h6>Contacts</h6>
                                <small>
                                    <List className="list-unstyled">
                                        <li>Email:  sample@sample.com</li>
                                        <li>Phone:  000 726 75 30</li>
                                        <li>Fax:    000 726 75 30</li>
                                    </List>
                                </small>
                        </Col>
                        <Col className="col-sm-2">
                            <h6>Links</h6>
                                <small>
                                    <List className="list-unstyled">
                                        <li>Clean Water</li>
                                        <li>Projects</li>
                                        <li>About Us</li>
                                        <li>Contact</li>
                                    </List>
                                </small>
                        </Col>
                    </Row>
                    <hr className="border-white"/>
                    <Row className="offset-3 col-sm-9 footer mb-0 p-0">
                        <Col className="offset-1 col-sm-6">
                            <footer>
                                <p>Copyright <i className="far fa-copyright"></i> 2021 Bilal. All Rights Reserved. All Information Fake.</p>
                            </footer>
                        </Col>
                    </Row>
                </Jumbotron>
            </>
        )
    }
}

export default Footer;