import React, { Component } from "react";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/login/loginActions";
import store from "./store";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import NotFound from "./components/NotFound";
import Footer from "./components/Layout/Footer";
import LandingContainer from "./containers/LandingContainer";
import LoginContainer from "./containers/LoginContainer";
import RegisterContainer from "./containers/RegisterContainer";
import NavbarContainer from "./containers/NavbarContainer";
import DashboardContainer from "./containers/DashboardContainer";
import PrivateRouteContainer from "./containers/PrivateRouteContainer";
import EditProfileContainer from "./containers/EditProfileContainer";
import AddExperienceContainer from "./containers/AddExperienceContainer";
import AddEducationContainer from "./containers/AddEducationContainer";
import { clearCurrentProfile } from "./actions/profile/profileActions";
import ProfilesContainer from "./containers/ProfilesContainer";

// check for token
if (localStorage.jwtToken) {
  // set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // decode token and get user info and expiration
  const decoded = jwt_decode(localStorage.jwtToken);
  // set user is Authenticated
  store.dispatch(setCurrentUser(decoded));
  // check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // clear current profile
    store.dispatch(clearCurrentProfile);
    // Redirect to login
    window.location.href = "/login";
  }
}

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavbarContainer />
          <Switch>
            <Route exact path="/" component={LandingContainer} />
            {/* <div className="container"> */}
            <Route exact path="/register" component={RegisterContainer} />
            <Route exact path="/login" component={LoginContainer} />
            <Route exact path="/profiles" component={ProfilesContainer} />
            <PrivateRouteContainer
              exact
              path="/dashboard"
              component={DashboardContainer}
            />
            <PrivateRouteContainer
              exact
              path="/create-profile"
              component={EditProfileContainer}
            />
            <PrivateRouteContainer
              exact
              path="/edit-profile"
              component={EditProfileContainer}
            />
            <PrivateRouteContainer
              exact
              path="/add-experience"
              component={AddExperienceContainer}
            />
            <PrivateRouteContainer
              exact
              path="/add-education"
              component={AddEducationContainer}
            />
            <Route component={NotFound} />
            {/* </div> */}
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}
