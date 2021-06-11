import "./App.css";
import React from "react";
import Navbar from "./components/Navbar.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Skills from "./components/pages/Skills";
import About from "./components/pages/About";
import Projects from "./components/pages/Projects";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          {/* <Route path="/skills" exact component={Skills} />
          <Route path="/about" exact component={About} />
          <Route path="/projects" exact component={Projects} /> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
