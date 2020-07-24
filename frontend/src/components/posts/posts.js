import React from 'react';
import { withRouter } from 'react-router-dom';
import PostItem from './post_item';
import PostCompose from './post_compose';
import MapContainer from '../map/map';
import { removePost } from '../../actions/post_actions';
import './posts.css';

class Posts extends React.Component {
     componentDidMount() {
        this.props.fetchUsers();
        this.props.fetchPosts();
        this.props.fetchAllComments();
    }

    render() {
        if (this.props.users) {
            return (
                <div className="all-posts">
                  <div className="all-posts-above" />
                    {/* <button onClick={(e) => {e.preventDefault(); this.props.history.push('/map')}}>Map</button> */}
                  <section className="posts-container">
                    <div className="posts-body">
                    <h3>Talk to us.</h3>          
                    <PostCompose currentUser={this.props.currentUser} newPost={this.props.newPost} composePost={this.props.composePost} history={this.props.history}/>

                    <h5>Happenings:</h5>
                      <div className="posts">
                          {this.props.posts.map((post, idx) =>
                              <PostItem
                                  key={idx}
                                  post={post}
                                  users={this.props.users}
                                  fetchPosts={this.props.fetchPosts}
                                  fetchUsers={this.props.fetchUsers}
                                  history={this.props.history}
                                  currentUser={this.props.currentUser}
                                  removePost={this.props.removePost} 

                                  fetchPostComments={this.props.fetchPostComments}
                                  composeComment={this.props.composeComment}
                                  fetchComment={this.props.fetchComment}
                                  removeComment={this.props.removeComment}
                                  comments={this.props.comments}
                                  fetchAllComments={this.props.fetchAllComments}
                              />
                          )}
                      </div>
                    </div>
                  </section>
                
                <div className="map-container">
                    <MapContainer
                        history={this.props.history}
                        path='/posts'
                    />
                </div>
              </div>
            )
        } else {
            return null;
        }
    }
}

export default withRouter(Posts);