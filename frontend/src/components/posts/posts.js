import React from 'react';
import { withRouter } from 'react-router-dom';
import PostItem from './post_item';
import PostCompose from './post_compose';
import { removePost } from '../../actions/post_actions';
import './posts.css';

class Posts extends React.Component {
     componentDidMount() {
        this.props.fetchUsers();
        this.props.fetchPosts();
    }

    render() {
// //debugger
        if (this.props.users) {
            return (
              <div className="all-posts">
                    {/* <button onClick={(e) => {e.preventDefault(); this.props.history.push('/map')}}>Map</button> */}
                <div className="posts-container">
                  <h3>Talk to us.</h3>
                  
                    <div className="posts-body">
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
                              />
                          )}
                      </div>
                    </div>
                  </div>

                  <div class="clear"></div>
              </div>
            )
        } else {
            return null;
        }
    }
}

export default withRouter(Posts);