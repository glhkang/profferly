import React from 'react';
import PostItem from '../posts/post_item';
import PostCompose from '../posts/post_compose';
import './profile.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";

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

    renderCurrentUser() {
////debugger
        const list = Object.values(this.props.posts[1]).map((post) => {
            return (
                <div className="posts">
                    <li>
                        <div className="post-item" key={post._id}>
                            <img className="post-item-image" src= {post.file} />
                            <div className="post-item-text">
                                {post.text}
                            </div>
                        <div className="post-item-footer">
                    <button className="post-item-footer-button" onClick={() => {
                        return(
                        this.props.removePost(post._id)
                        .then(() => this.props.history.go())                        
                        )
                    }
                }
                        
                    >Delete</button></div></div>
                  
                    </li>
                    </div>
            )
        });

        return (
            <div className="user-profile">
                <h2>Hello, {this.props.currentUser.email}!</h2>
                <div className="post-compose">
                <PostCompose currentUser={this.props.currentUser} newPost={this.props.newPost} composePost={this.props.composePost} history={this.props.history} />
                </div>
                <ul className="profile-list">
                    {list}
                </ul>
            </div>
        )
        
        
    }



    renderAsAnotherUser() {
        if (this.props.users) {
        const list = Object.values(this.props.posts[1]).map((post) => {
////debugger
        return(
                    <li> 
                        <div className="post-item" key={post._id}>
                        <img className="post-item-image" src= {post.file} />
                        <div className="post-item-text">
                            {post.text}
                        </div>
                        </div>
                    </li>  
            )
        });

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
                <div className="profile-top-section"/>
                <div className="profile-loading">Loading...</div>
                </div>
            )
        } else {
            return (
                <div className="profile-main">
                    <div className="profile-top-section"/>
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