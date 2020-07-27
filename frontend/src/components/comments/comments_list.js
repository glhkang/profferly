import React from 'react';
import { withRouter } from 'react-router-dom';
import CommentItem from './comment_item';
// import CommentForm from './comment_form';
import './comments.css';

class CommentsList extends React.Component {
    render() {
        // const { comments, composeComment, currentUser, currentPost, removeComment } = this.props;
        const { comments, currentUser, currentPost, removeComment } = this.props;
// debugger

        return (
            <div className="comments-cont" >
                {/* <CommentForm 
                    currentUser={currentUser}
                    composeComment={composeComment}
                    currentPost={currentPost}
                /> */}
                <ol class="comments-list-ol" >
                    <div className="comments-list-li-cont">
                        {comments ? comments.map(comment => (

                            <CommentItem
                                comment={comment}
                                currentUser={currentUser}
                                removeComment={removeComment}
                                currentPost={currentPost}
                                key={comment._id}
                            />
                    
                        )) : null}
                    </div>
                </ol>
            </div>
        )
    }
};

export default withRouter(CommentsList);