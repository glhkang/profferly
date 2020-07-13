import { connect } from 'react-redux';
import { fetchComment, fetchAllComments, fetchPostComments, composeComment, removeComment } from '../../actions/comment_actions';
import CommentsForm from './comments_form';

// const mapStateToProps = (state, ownProps) => ({
//     return {
        
//     }
// })


const mapDispatchToProps = dispatch => {
    return {
        fetchComment: commentId => dispatch(fetchComment(commentId)),
        fetchAllComments: () => dispatch(fetchAllComments()),
        fetchPostComments: () => dispatch(fetchPostComments()),
        composeComment: (data) => dispatch(composeComment(data)),
        removeComment: (commentId) => dispatch(removeComment(commentId)),
    };
};

export default connect(null, mapDispatchToProps)(CommentsForm)