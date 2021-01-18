import './App.css';
import { BrowserRouter as HashRouter, Route, Switch } from 'react-router-dom';
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
      <Route path="./eko-life/#/" exact component={Homepage}/>
      <Route path="./eko-life/#/aboutus/" exact component={Aboutuspage}/>
      <Route path="./eko-life/#/projects/" exact component={Projectspage}/>
      <Route path="./eko-life/#/contact/" exact component={Contactpage}/>
      </Switch>
      <Footer />
    </HashRouter>
  );
}

export default App;
