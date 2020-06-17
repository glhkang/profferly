import React from 'react';
import PostItem from '../posts/post_item';
import PostCompose from '../posts/post_compose';

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
debugger
        this.props.fetchUserPosts(this.props.user);
        this.props.fetchUsers();
    }

    componentWillReceiveProps(newState) {
debugger
        this.setState({ posts: newState.posts });
    }

    renderCurrentUser() {
debugger
        const list = Object.values(this.props.posts[1]).map((post) => {
            return (
                    <li key={post._id}>{post.text}
                    <button onClick={() => {
                        return(
                        this.props.removePost(post._id)
                        .then(() => this.props.history.go())                        
                        )
                    }
                }
                        
                    >Delete</button>
                    </li>
            )
        });

        return (
            <div>
             
                <h2>Hello {this.props.currentUser.username}</h2>
                <PostCompose currentUser={this.props.currentUser} newPost={this.props.newPost} composePost={this.props.composePost} history={this.props.history} />
                <ul>
                    {list}
                </ul>
            </div>
        )
        
        
    }



    renderAsAnotherUser() {
        if (this.props.users) {
        const list = Object.values(this.props.posts[1]).map((post) => {
debugger
        return(
                    <li key={post._id}>{post.text}</li>  
            )
        });

        return (
            <div>
                <h2>All of {this.props.users[this.props.user].username}'s Posts</h2>
                <ul>
                    {list}
                </ul>
            </div>
        )
    }
}

    render() {
        if (this.state.posts.length === 0) {
            return (<div>Loading..</div>)
        } else {
            return (
                <div>
                    <button onClick={() => this.props.history.push('/posts')}>Go back</button>
                    {this.props.currentUser.id === this.props.user ? 
                    this.renderCurrentUser() : this.renderAsAnotherUser()}
                </div>
            )
        }
    }
}

export default Profile;