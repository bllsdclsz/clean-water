import React, {Component} from "react";
import { Col, Container, Row } from "reactstrap";

class Aboutus extends Component{
    render() {
        return (
            <>
                <h3 className="text-center mt-5 mb-5">ABOUT US</h3>
                <Container className="offset-sm-3 col-sm-6 aboutus-container">
                    <Row className="offset-sm-3 col-sm-9">
                        <Col><span className="first-letter">L</span>orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Col>
                    </Row>
                    <Row className="col-sm-9">
                        <Col><span className="first-letter">Y</span>orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Col>
                    </Row>
                    <Row className="offset-sm-3 col-sm-9">
                        <Col><span className="first-letter">T</span>orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Col>
                    </Row>
                </Container>
            </>
        )
    }
}

export default Aboutus;