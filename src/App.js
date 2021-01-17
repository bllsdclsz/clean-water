import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Homepage from "./components/Homepage.js";
import Aboutuspage from "./components/Aboutuspage.js";
import Projectspage from "./components/Projectspage.js";
import Contactpage from "./components/Contactpage.js";

function App() {
  return (
    <Router>
      <Route path="/" component={Homepage}/>
      <Route path="/aboutus/" component={Aboutuspage}/>
      <Route path="/projects/" component={Projectspage}/>
      <Route path="/contact/" component={Contactpage}/>
    </Router>
  );
}

export default App;
