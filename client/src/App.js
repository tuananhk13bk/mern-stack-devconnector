import React, { Component } from "react";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/login/loginActions";
import store from "./store";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import NotFound from "./components/NotFound";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import AllProfilesPage from "./pages/AllProfilesPage";
import ProfileDetailPage from "./pages/ProfileDetailPage";
import DashboardPage from "./pages/DashboardPage";
import PostFeedPage from "./pages/PostFeedPage";
import PostDetailPage from "./pages/PostDetailPage";
import PrivateRouteContainer from "./containers/PrivateRouteContainer";
import EditProfileContainer from "./containers/EditProfileContainer";
import AddExperienceContainer from "./containers/AddExperienceContainer";
import AddEducationContainer from "./containers/AddEducationContainer";
import { clearCurrentProfile } from "./actions/profile/profileActions";
import Layout from "./components/Layout/Layout";

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
        <Layout>
          <Switch>
            <Route exact path="/" component={HomePage} />
            {/* <div className="container"> */}
            <Route exact path="/register" component={RegisterPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/all-profiles" component={AllProfilesPage} />
            <PrivateRouteContainer
              exact
              path="/profile/user/:userId"
              component={ProfileDetailPage}
            />
            <PrivateRouteContainer
              exact
              path="/dashboard"
              component={DashboardPage}
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
            <PrivateRouteContainer
              exact
              path="/feed"
              component={PostFeedPage}
            />
            <PrivateRouteContainer
              exact
              path="/post/:postId"
              component={PostDetailPage}
            />
            <Route exact path="/not-found" component={NotFound} />
            <Route component={NotFound} />
            {/* </div> */}
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}
