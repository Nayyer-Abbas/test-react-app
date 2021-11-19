import './App.css';
import Home from './home.js';
import About from './about.js';
import Services from './services.js';
import Contact from './contact.js';
import Doctors from './doctors.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './header';


function App() {
  return (
    <>
    
    <Router>
      <Header></Header>
      <Route exact path="/">
        <Home name ="Home" />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/services">
        <Services />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="/doctors">
        <Doctors />
      </Route>
    </Router>
    </>
  );
}



export default App;
