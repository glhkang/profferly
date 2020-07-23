import React from 'react';
import Moment from "react-moment";
import './comments.css';

class CommentItem extends React.Component {

    render() {
        const { comment, currentUser, removeComment, currentPost } = this.props;

        return (
            (comment.post === currentPost._id) ?
                (<li className="comments-list-li" >
                        <div className="comments-text" >{comment.text}</div>

                        <div className="comments-username" >{'Comment by: ' + comment.author.username}</div>
                        <span className="comments-left">Left on </span>
                        <Moment format="MMMM Do YYYY [at] h:mm a" className="comments-date" >{comment.date.toString()}</Moment>
                        <div>
                            {(comment.author._id === currentUser.id) ?
                                (<button 
                                    className="comments-del-button"
                                    onClick={() => {
                                    removeComment(comment._id)
                                }}>
                                    Delete Your Comment
                                </button>) : null}
                        </div>
                </li>) : null
        )
    }
};

export default CommentItem;