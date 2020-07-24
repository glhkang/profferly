import React from 'react';
import Moment from "react-moment";
import './post.css';
import CommentsList from '../comments/comments_list';
import LikesDislikes from '../likesdislikes/likes_dislikes';


class PostItem extends React.Component {
    constructor(props) {
        super(props)
        
        this.handleClick = this.handleClick.bind(this);
        this.handleButton = this.handleButton.bind(this);
    }

    handleClick() {
        this.props.history.push(`/users/${this.props.post.user}` )
    }
    
    handleButton(e) {
        e.preventDefault();
        this.props.removePost(this.props.post._id);
        this.props.history.go();
    }

    render() {
      // debugger
             const post = this.props.post;
             const user = this.props.users[this.props.post.user];

            //  const date = post.date; 
            //  let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            //  let localtime = post.date.toLocaleString("en-US", options);
             ////debugger
             const dateStr = post.date.toString();
             if (post.file && user) {
                 return (
                <li className="post-item-li" >
                    <div className="post-item">
                        <div><img className="post-item-image" src= {post.file}/></div>
                        <div className="post-item-text">{post.text}</div>
                        <div className="post-item-footer">
                            {/* <LikesDislikes postId={post._id} userId={user._id} currentUserId={this.props.currentUser.id}/> */}
                            <div className="post-item-posted">
                                Posted by <span className="post-item-username" onClick={this.handleClick}>{user.username}</span>
                            </div>
                            <Moment format="MMM DD, YYYY [at] h:mmA" className="post-date" >{dateStr}</Moment>
                            <br/>
                            <LikesDislikes postId={post._id} userId={user._id} currentUserId={this.props.currentUser.id}/>
                            {/* <div className="post-date">{localtime}</div> */}
                            {(this.props.currentUser.id === user._id) ? 
                                <button className="post-item-footer-button" onClick={this.handleButton}>Delete</button> : <div></div>
                            }
                        </div>

                        <CommentsList 
                            currentPost={this.props.post}
                            comments={this.props.comments}
                            fetchPostComments={this.props.fetchPostComments}

                            composeComment={this.props.composeComment}
                            fetchComment={this.props.fetchComment}
                            removeComment={this.props.removeComment}
                            isLoggedIn={this.props.isLoggedIn}
                            currentUser={this.props.currentUser}
                            fetchAllComments={this.props.fetchAllComments}
                        />

                    </div>
                </li>
            )
            } else if (!post.file && user) {
                return (
                    <li className="post-item-li" >
                        <div className="post-item">
                            <div className="post-item-text">{post.text}</div>
                            <div className="post-item-footer">
                                {/* <LikesDislikes postId={post._id} userId={user._id} currentUserId={this.props.currentUser.id}/> */}
                                <div className="post-item-posted">
                                    Posted by <span className="post-item-username" onClick={this.handleClick}>{user.username}</span>
                                </div>
                                <Moment format="MMM DD, YYYY [at] h:mmA" className="post-date" >{dateStr}</Moment>
                                <br/>
                                <LikesDislikes postId={post._id} userId={user._id} currentUserId={this.props.currentUser.id}/>
                                {/* <div className="post-date">{localtime}</div> */}
                                {(this.props.currentUser.id === user._id) ? 
                                    <button className="post-item-footer-button" onClick={this.handleButton}>Delete</button> : <div></div>
                                }
                            </div>
    
                            <CommentsList 
                                currentPost={this.props.post}
                                comments={this.props.comments}
                                fetchPostComments={this.props.fetchPostComments}
    
                                composeComment={this.props.composeComment}
                                fetchComment={this.props.fetchComment}
                                removeComment={this.props.removeComment}
                                isLoggedIn={this.props.isLoggedIn}
                                currentUser={this.props.currentUser}
                                fetchAllComments={this.props.fetchAllComments}
                            />
    
                        </div>
                    </li>
                )
        } else {
            // ////debugger
            return null;
        }
    }
}

export default PostItem;