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

                        <div className="comment-by" >
                            Comment by <span className="comment-author">{comment.author.username}</span> on <Moment format="L [at] h:mmA" className="comments-date" >{comment.date.toString()}</Moment>
                        </div>
                        <div className="comment-author-delete">
                            {(comment.author._id === currentUser.id) ?
                                (<button 
                                    className="comments-del-button"
                                    onClick={() => {
                                    removeComment(comment._id)
                                }}>
                                    Delete Comment
                                </button>) : null}
                        </div>
                </li>) : null
        )
    }
};

export default CommentItem;