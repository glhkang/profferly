import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import Footer from './footer/footer';
import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import '../App.css';

import PostsContainer from './posts/posts_container';
import ProfileContainer from './profile/profile_container';
import MapContainer from "./map/map";


const App = () => {
    return (
      <div className="app-main">
        <NavBarContainer />
        {/* <BrowserRouter> */}
        <Switch>
          <AuthRoute exact path="/" component={MainPage} />
          <AuthRoute exact path="/login" component={LoginFormContainer} />
          <AuthRoute exact path="/signup" component={SignupFormContainer} />

          <ProtectedRoute exact path="/posts" component={PostsContainer} />
          <ProtectedRoute
            exact
            path="/users/:id"
            component={ProfileContainer}
          />
          <Route exact path="/map" component={MapContainer} />
        </Switch>
        <Footer />
        {/* </BrowserRouter> */}
      </div>
    );};

export default App;