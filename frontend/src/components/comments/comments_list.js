import React from 'react';
import { withRouter } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import CommentItem from './comment_item';
import CommentForm from './comment_form';
// import '../posts/post.css';
import './comments.css';

class CommentsList extends React.Component {
    constructor(props) {
        super(props);
        

    }


    componentDidMount() {
        // this.props.fetchPostComments('5eed0a269803dd90071af9c5'); 
        console.log('componentdidmount in comments_list')
        this.props.fetchPostComments(this.props.currentPost._id); //postId
        this.props.fetchAllComments();
        // console.log(this.props)
        // debugger;
    }



    render() {
        const { comments, composeComment, currentUser, currentPost, removeComment } = this.props;
        
        // console.log('render inside CommentsList')
        // console.log(comments);
        // debugger;
        

        return (
            //SHOW ALL COMMENTS FOR POST HERE
            <div className="comments-cont" >
                < CommentForm 
                    currentUser={currentUser}
                    composeComment={composeComment}
                    currentPost={currentPost}
                />
                <ol class="comments-list-ol" >
                    <CommentItem
                        comments={comments}
                        currentUser={currentUser}
                        removeComment={removeComment}
                        currentPost={currentPost}
                    />
                    
                </ol>

            </div>
        )
    }
};

export default withRouter(CommentsList);