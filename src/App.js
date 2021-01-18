import './App.css';
import { HashRouter, Router, Route, Switch } from 'react-router-dom';
import Homepage from "./components/Homepage.js";
import Aboutuspage from "./components/Aboutuspage.js";
import Projectspage from "./components/Projectspage.js";
import Contactpage from "./components/Contactpage.js";
import Navigation from "./components/Navigation.js";
import Footer from "./components/Footer.js";
import "./components/images/waterfall.jpg";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

function App() {
  return (
      <HashRouter basename={process.env.PUBLIC_URL}>
        <Router history={history}>
        <Navigation />
          <Switch>
          <Route path="/" exact component={Homepage}/>
          <Route path="/aboutus" component={Aboutuspage}/>
          <Route path="/projects" component={Projectspage}/>
          <Route path="/contact" component={Contactpage}/>
        </Switch>
        <Footer />
        </Router>
      </HashRouter>
  );
}

export default App;
