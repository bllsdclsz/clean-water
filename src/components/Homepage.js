import React, {Component} from "react";
import { Container, Jumbotron, Media, Row, Col } from "reactstrap";
import Waterfall from "./images/waterfall.jpg";
import River from "./images/river.jpg";
import Glacier from "./images/glacier.jpg";

class Homepage extends Component{
    render() {
        return (
            <>
              <div className="home-content-image">
                
              </div>
                <Container>
                  <Row className="mt-5 mb-5 col-8 offset-2">
                    <Col>
                      <Media>
                        <Media left>
                          <Media className="content-image rounded-circle" object src={River} alt="River" />
                        </Media>
                        <Media body className="ml-5">
                          <Media heading>
                            Media heading
                          </Media>
                          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                        </Media>
                      </Media>
                      <hr/>
                    </Col>
                  </Row>
                  <Row className="mt-5 mb-5 col-8 offset-2">
                    <Col>
                      <Media>
                        <Media body>
                          <Media heading>
                            Media heading
                          </Media>
                          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                        </Media>
                        <Media left href="#" className="ml-5">
                          <Media className="content-image rounded-circle" object src={Glacier} alt="Glacier" />
                        </Media>
                      </Media>
                      <hr/>
                    </Col>
                  </Row>
                  <Row className="mt-5 mb-5 col-8 offset-2">
                    <Col>
                      <Media>
                        <Media left href="#">
                          <Media object data-src="holder.js/64x64" alt="Generic placeholder image" />
                        </Media>
                        <Media body className="ml-5">
                          <Media heading>
                            Media heading
                          </Media>
                          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                        </Media>
                      </Media>
                    </Col>
                  </Row>
                </Container>
            </>
        )
    }
}

export default Homepage;