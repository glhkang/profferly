import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import CommentItem from './comment_item';
import CommentForm from './comment_form';

class CommentsList extends React.Component {
    constructor(props) {
        super(props);

    }


    componentDidMount() {
        console.log('componentdidmount in comments_list')
        console.log(this.props)
        debugger;


        
        this.props.fetchPostComments('5eed0a269803dd90071af9c5'); //postId
        // this.props.fetchPostComments(this.props.currentPost._id); //postId
    }

    // componentDidUpdate() {

    // }


    render() {
        console.log('render inside CommentsList')
        console.log(this.props);
        debugger;

        const { comments, composeComment, currentUser, fetchComment, isLoggedIn, removeComment, currentPost } = this.props;
        

        return (
            //SHOW ALL COMMENTS FOR POST HERE
            <div>
                < CommentForm 
                    isLoggedIn={isLoggedIn}
                    currentUser={currentUser}
                    composeComment={composeComment}

                />
                <ol>
                    <CommentItem
                        comments={comments.comments}
                        removeComment={removeComment}
                        isLoggedIn={isLoggedIn}
                        currentUser={currentUser}
                    />
                    
                </ol>

            </div>
        )
    }
};

export default withRouter(CommentsList);