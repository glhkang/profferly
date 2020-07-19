import React from 'react';
import '../posts/post.css';

class CommentItem extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        console.log('render inside CommentItem');


        
        const { comments, currentUser, removeComment } = this.props;
        console.log(comments);
        debugger;

        return (
            <div className="comments-list-li-cont">
                {comments ? comments.map(comment => (
                    <li className="comments-list-li" >
                        {/* <div>These are individual Comment Items</div> */}
                        <div className="comments-text" >{comment.text}</div>

                        <div className="comments-username" >{'Comment left by: ' + comment.author.username}</div>

                        <div>
                            {(comment.author._id === currentUser.id) ?
                                (<button onClick={() => {
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