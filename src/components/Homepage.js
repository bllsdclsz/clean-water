import React, {Component} from "react";
import { Container, Jumbotron, Media } from "reactstrap";
import Navigation from "./Navigation.js";
import Waterfall from "./images/waterfall.jpg";
import Footer from "./Footer.js";

class Homepage extends Component{
    render() {
        return (
            <>
                <Navigation />
                <Media className="image" object src={Waterfall} alt="Waterfall" />
                <Container className="mt-5">
                  <Media>
                    <Media left href="#">
                      <Media object data-src="holder.js/64x64" alt="Generic placeholder image" />
                    </Media>
                    <Media body>
                      <Media heading>
                        Media heading
                      </Media>
                      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                    </Media>
                  </Media>
                </Container>
                <Container className="mt-5">
                <Media>
                    <Media body>
                      <Media heading>
                        Media heading
                      </Media>
                      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                    </Media>
                    <Media left href="#">
                      <Media object data-src="holder.js/64x64" alt="Generic placeholder image" />
                    </Media>
                  </Media>
                </Container>
                <Container className="mt-5">
                <Media>
                    <Media left href="#">
                      <Media object data-src="holder.js/64x64" alt="Generic placeholder image" />
                    </Media>
                    <Media body>
                      <Media heading>
                        Media heading
                      </Media>
                      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                    </Media>
                  </Media>
                </Container>
                <Footer />
            </>
        )
    }
}

export default Homepage;