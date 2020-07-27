import { connect } from 'react-redux';
import { fetchUserPosts, fetchPosts,composePost, removePost } from '../../actions/post_actions';
import { fetchUsers } from "../../actions/user_actions";
import { fetchPhotos } from '../../actions/photo_actions';
import Profile from './profile';
import { fetchComment, fetchPostComments, composeComment, removeComment, fetchAllComments } from '../../actions/comment_actions';

const mapStateToProps = (state, ownProps) => {
// debugger
    return {
        posts: Object.values(state.posts),
        currentUser: state.session.user,
        user: ownProps.match.params.id,
        users: state.users,
        newPost: state.posts.new,
        history: ownProps.history,
        comments: state.comments.all
    };
};

const mapDispatchToProps = dispatch => {
//debugger
    return {
        fetchUserPosts: id => dispatch(fetchUserPosts(id)),
        fetchPosts: () => dispatch(fetchPosts()),
        composePost: data => dispatch(composePost(data)),
        fetchUsers: () => dispatch(fetchUsers()),
        removePost: id => dispatch(removePost(id)),
        fetchPhotos: () => dispatch(fetchPhotos()),
        fetchAllComments: () => dispatch(fetchAllComments()),
        composeComment: (comment) => dispatch(composeComment(comment)),
        removeComment: (commentId) => dispatch(removeComment(commentId)),
        fetchPostComments: (postId) => dispatch(fetchPostComments(postId)),
        fetchComment: commentId => dispatch(fetchComment(commentId)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);