import React, {Component} from "react";
import { Col, Container, Row, Table } from "reactstrap";

class Aboutus extends Component{
    render() {
        return (
            <>
                <h3 className="text-center mt-5 mb-5">ABOUT US</h3>
                <Container className="offset-sm-3 col-sm-6 aboutus-container">
                    <Row className="offset-sm-3 col-sm-9">
                        <Col>
                        <span className="first-letter">L</span>orem ipsum dolor sit amet, 
                        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                        mollit anim id est laborum.
                        </Col>
                    </Row>
                    <Row className="col-sm-9">
                        <Col>
                        <span className="first-letter">Y</span>orem ipsum dolor sit amet, 
                        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                         dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                         laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                          in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                           cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                           </Col>
                    </Row>
                    <Row className="offset-sm-3 col-sm-9">
                        <Col>
                        <span className="first-letter">T</span>orem ipsum dolor sit amet,
                         consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                         magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                         aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                          esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
                          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                          </Col>
                    </Row>
                    <Row className="mt-5">
                        <Col>
                            <Table striped>
                                <thead>
                                    <tr>
                                    <th>Year</th>
                                    <th>Total Water</th>
                                    <th>Recycled Water</th>
                                    <th>Recycling Cost</th>
                                    <th>Fund Percentages</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">2020</th>
                                        <td>10 000 000 000&#13221;</td>
                                        <td>200 000&#13221;</td>
                                        <td>300 000$</td>
                                        <td>30%</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2019</th>
                                        <td>1 000 000 000&#13221;</td>
                                        <td>200 000&#13221;</td>
                                        <td>450 000$</td>
                                        <td>50%</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2018</th>
                                        <td>3 500 000 000&#13221;</td>
                                        <td>450 000&#13221;</td>
                                        <td>860 000$</td>
                                        <td>74%</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}

export default Aboutus;