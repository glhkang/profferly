import { connect } from 'react-redux';
import { fetchComment, fetchPostComments, composeComment, removeComment } from '../../actions/comment_actions';
import CommentsList from './comments_list';

const mapStateToProps = (state, ownProps) => {
    console.log("mstp comments container: this is current state: ");
    return {
        currentUser: state.session.user, //currentUser has .id and .username here.
        isLoggedIn: state.session.isAuthenticated,
        comments: state.comments,
        // comments: state.post.comments,
    };
};


const mapDispatchToProps = dispatch => {
    return {
        composeComment: (comment) => dispatch(composeComment(comment)),
        fetchComment: commentId => dispatch(fetchComment(commentId)),
        fetchPostComments: (postId) => dispatch(fetchPostComments(postId)),
        removeComment: (commentId) => dispatch(removeComment(commentId)),
        // fetchAllComments: () => dispatch(fetchAllComments()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentsList)