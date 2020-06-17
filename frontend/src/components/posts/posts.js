import React from 'react';
import { withRouter } from 'react-router-dom';
import PostItem from './post_item';
import PostCompose from './post_compose';

class Posts extends React.Component {
    constructor(props) {
// debugger
        super(props);

        // this.state = {
        //     posts: [],
        // }
    }

//     componentDidMount() {
// // debugger
//         this.props.fetchPosts();
//         // this.props.fetchUsers();
//     }

//     componentWillReceiveProps(newState) {
//         this.setState({ posts: newState.posts });
//     }

//     render() {
// // debugger
//         if (this.props.posts.length === 0 )  {
//             return (<div>There are no Posts</div>)
//         } else {
// // debugger
//             return (
//                 <div>

//                     <PostCompose currentUser={this.props.currentUser} newPost={this.props.newPost} composePost={this.props.composePost} />
//                     <h2>All Posts</h2>
//                     {this.props.posts.map(post => (
//                         <PostItem key={post._id} text={post.text} />
//                     ))}

//                 </div>
//             );
//         }
//     }

    componentDidMount() {
        // debugger
        this.props.fetchUsers();
        this.props.fetchPosts();
    }

    render() {
        // debugger
        console.log(this.props)
        if (this.props.users) {
            return (
                <div>
                    {/* <PostCompose currentUser={this.props.currentUser} newPost={this.props.newPost} composePost={this.props.composePost} /> */}
                    <p>All posts</p>
                    <div>
                        {this.props.posts.map((post, idx) =>
                            <PostItem
                                key={idx}
                                post={post}
                                users={this.props.users}
                                fetchPosts={this.props.fetchPosts}
                                fetchUsers={this.props.fetchUsers}
                                history={this.props.history}
                            />
                        )}
                    </div>
                </div>
            )
        } else {
            return null;
        }
    }
}

export default withRouter(Posts);