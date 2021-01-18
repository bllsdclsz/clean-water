import './App.css';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Homepage from "./components/Homepage.js";
import Aboutuspage from "./components/Aboutuspage.js";
import Projectspage from "./components/Projectspage.js";
import Contactpage from "./components/Contactpage.js";
import Navigation from "./components/Navigation.js";
import Footer from "./components/Footer.js";
import "./components/images/waterfall.jpg";

function App() {
  return (
      <HashRouter basename={process.env.PUBLIC_URL}>
        <Navigation />
          <Switch>
          <Route path={process.env.PUBLIC_URL + "/"} exact component={Homepage}/>
          <Route path={process.env.PUBLIC_URL + "/aboutus"} component={Aboutuspage}/>
          <Route path={process.env.PUBLIC_URL + "/projects"} component={Projectspage}/>
          <Route path={process.env.PUBLIC_URL + "/contact"} component={Contactpage}/>
        </Switch>
        <Footer />
      </HashRouter>
  );
}

export default App;
