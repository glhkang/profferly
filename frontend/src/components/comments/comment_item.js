import React from 'react';
// import '../posts/post.css';
import Moment from "react-moment";
import './comments.css';

class CommentItem extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        // console.log('render inside CommentItem');
        const { comments, currentUser, removeComment } = this.props;

        console.log(comments);
        // debugger;

        // if (comments === undefined ) return (<div></div>);

        return (
            <div className="comments-list-li-cont">
                {comments ? comments.map(comment => (
                    <li className="comments-list-li" >
                        {/* <div>These are individual Comment Items</div> */}
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
                                    Delete comment
                                </button>) : null}
                        </div>


                    </li>
                )) : null}
            </div>
        )
    }
};

export default CommentItem;