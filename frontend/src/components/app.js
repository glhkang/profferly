import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, BrowserRouter } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import Footer from './footer/footer';
import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import '../App.css';
import PostsContainer from './posts/posts_container';
import ProfileContainer from './profile/profile_container';
import PhotoDelete from "./PhotoDelete";
import NewPhotoUpload from "./NewPhotoUpload";

const App = () => (
  <div className="app-main">
    <NavBarContainer />
    {/* <BrowserRouter> */}
    {/* <PhotoDelete />
    <NewPhotoUpload /> */}
    <Switch>
      <AuthRoute exact path="/" component={MainPage} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />

      <ProtectedRoute exact path="/posts" component={PostsContainer} />
      <ProtectedRoute exact path="/users/:id" component={ProfileContainer} />
    </Switch>
    <div className="app-main-footer">
      <Footer />
    </div>
    {/* </BrowserRouter> */}
  </div>
);

export default App;