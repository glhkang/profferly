import React from 'react';
import { AuthRoute, ProtectedRoute } from './util/route_util';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import PostsContainer from './components/posts/posts_container';
import ProfileContainer from './components/profile/profile_container';
import MapContainer from "./components/map/map";

const Splash = () => {
    return(
        <div className="splash">
            <div className="splash-posts">
                <ProtectedRoute exact path="/posts" component={PostsContainer} />
                <ProtectedRoute exact path="/users/:id" component={ProfileContainer} />
            </div>
            <div className="splash-map">
                <MapContainer />
            </div>
        </div>
    )
}

export default Splash;