import React from 'react';
import { withRouter } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import CommentItem from './comment_item';
import CommentForm from './comment_form';
import '../posts/post.css';

class CommentsList extends React.Component {
    // constructor(props) {
    //     super(props);

    // }


    // componentDidMount() {
    //     console.log('componentdidmount in comments_list')
    //     console.log(this.props)
    //     debugger;


        
    //     // this.props.fetchPostComments('5eed0a269803dd90071af9c5'); 
    //     this.props.fetchPostComments(this.props.currentPost._id); //postId
    // }



    render() {



        const { comments, composeComment, currentUser, currentPost, removeComment } = this.props;
        // fetchComment
        
        console.log('render inside CommentsList')
        console.log(comments);
        debugger;
        

        return (
            //SHOW ALL COMMENTS FOR POST HERE
            <div className="comments-cont" >
                {/* THIS IS THE COMMENTS LIST */}
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

                    />
                    
                </ol>

            </div>
        )
    }
};

export default withRouter(CommentsList);