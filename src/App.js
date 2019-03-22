import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import NavBar from "./components/navbar.jsx";
import Home from "./components/homepage.jsx";
import About from "./components/aboutpage.jsx";
import Projects from "./components/projectpage.jsx";
import Contact from "./components/contactpage.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
class App extends Component {
  componentDidMount() {
    AOS.init();

    AOS.refresh();
  }
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className="container">
          <Home />
          <About />
          <Projects />
          <Contact />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
