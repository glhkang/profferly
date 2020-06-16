import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, BrowserRouter } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import Footer from './footer/footer';
import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import '../App.css';

const App = () => (
    <div className="app-main">
        <NavBarContainer />
        {/* <BrowserRouter> */}
            <Switch>
                <AuthRoute exact path="/" component={MainPage} />
                <AuthRoute exact path="/login" component={LoginFormContainer} />
                <AuthRoute exact path="/signup" component={SignupFormContainer} />
            </Switch>
        <Footer />
        {/* </BrowserRouter> */}
    </div>
);

export default App;