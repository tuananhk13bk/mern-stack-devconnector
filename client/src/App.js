import React, { Component } from "react";

import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import Landing from "./components/Layout/Landing";
import LoginContainer from "./containers/LoginContainer";
import RegisterContainer from "./containers/RegisterContainer";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <div className="container">
            <Route exact path="/register" component={RegisterContainer} />
            <Route exact path="/login" component={LoginContainer} />
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}
