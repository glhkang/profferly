import React from 'react';
import PostItem from '../posts/post_item';
import PostCompose from '../posts/post_compose';
import './profile.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";
// import CommentsList from '../comments/comments_list';
// import LikesDislikes from '../likesdislikes/likes_dislikes';
// import Moment from "react-moment";

class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        }

        this.renderAsAnotherUser = this.renderAsAnotherUser.bind(this);
        this.renderCurrentUser = this.renderCurrentUser.bind(this);
    }

    componentWillMount() {
//debugger
        this.props.fetchUserPosts(this.props.user);
        this.props.fetchUsers();
        this.props.fetchPhotos();
    }

    componentWillReceiveProps(newState) {
////debugger
        this.setState({ posts: newState.posts });
    }

    capitalize(string) {
        let firstChar = string[0].toUpperCase();
        let rest = string.slice(1);

        return firstChar + rest;
    }

    renderCurrentUser() {
////debugger
        const list = Object.values(this.props.posts[1]).map((post, idx) => 
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
        ); 

        return (
            <div>
                <div className="user-profile">
                <h2>Hello, {this.capitalize(this.props.currentUser.username)}</h2>
                <PostCompose currentUser={this.props.currentUser} newPost={this.props.newPost} composePost={this.props.composePost} history={this.props.history} />
                </div>
                <ul className="profile-list">
                    {list}
                </ul>
            </div>
        )        
    }

    renderAsAnotherUser() {
// debugger
        if (this.props.users) {
            const list = Object.values(this.props.posts[1]).map((post, idx) =>
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
            );

            return (
                <div className="another-class">
                    <h2>All of {this.props.users[this.props.user].username}'s Posts</h2>
                    <ul className="posts">
                        {list}
                    </ul>
                </div>
            )
        }
    }

    render() {
        if (!this.state.user && (this.state.posts.length === 0)) {
            return (<div className="profile-main">
                <div className="profile-loading">LOADING...</div>
                </div>
            )
        } else {
            return (
                <div className="profile-main">
                    {/* <div className="profile-main-body"> */}
                        <button className="profile-button" onClick={() => this.props.history.push('/posts')}><FontAwesomeIcon className="font-awesome-back" icon={faArrowCircleLeft} /></button>
                        {this.props.currentUser.id === this.props.user ? 
                        this.renderCurrentUser() : this.renderAsAnotherUser()}
                    {/* </div> */}
                </div>
            )
        }
    }
}

export default Profile;