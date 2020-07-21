import { connect } from 'react-redux';
import { fetchPosts, composePost, removePost } from '../../actions/post_actions';
import { fetchUsers } from '../../actions/user_actions';
import Posts from './posts';

import { fetchComment, fetchPostComments, composeComment, removeComment, fetchAllComments } from '../../actions/comment_actions';

const mapStateToProps = (state, ownProps) => {

    return {
        posts: Object.values(state.posts.all),
        currentUser: state.session.user,
        newPost: state.posts.new,
        users: state.users,
        comments: state.comments.all, //this is for fetchAllComments
        // comments: state.comments.comments, //this is for fetchPostComments

    };
};

const mapDispatchToProps = dispatch => {
//debugger
    return {
        fetchPosts: () => dispatch(fetchPosts()),
        composePost: data => dispatch(composePost(data)),
        fetchUsers: () => dispatch(fetchUsers()),
        removePost: id => dispatch(removePost(id)),

        fetchAllComments: () => dispatch(fetchAllComments()),
        composeComment: (comment) => dispatch(composeComment(comment)),
        removeComment: (commentId) => dispatch(removeComment(commentId)),
        fetchPostComments: (postId) => dispatch(fetchPostComments(postId)),
        fetchComment: commentId => dispatch(fetchComment(commentId)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);