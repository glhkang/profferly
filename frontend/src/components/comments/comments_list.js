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
        this.props.fetchPostComments("5eecbe2e9dd093c7937b5b87"); //postId
    }

    // componentDidUpdate() {

    // }


    render() {
        console.log(this.props);
        debugger;

        const { isLoggedIn, currentUser, comments, removeComment, fetchComment, fetchPostComments, composeComment } = this.props;
        

        return (
            //SHOW ALL COMMENTS FOR POST HERE
            <div>
                < CommentForm 
                    isLoggedIn={isLoggedIn}
                    currentUser={currentUser}

                />
                <ol>
                    <CommentItem
                        comments={comments}
                        removeComment={removeComment}
                    />
                    
                </ol>

            </div>
        )
    }
};

export default withRouter(CommentsList);