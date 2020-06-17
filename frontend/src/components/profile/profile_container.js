import { connect } from 'react-redux';
import { fetchUserPosts, fetchPosts,composePost, removePost } from '../../actions/post_actions';
import { fetchUsers } from "../../actions/user_actions";
import Profile from './profile';

const mapStateToProps = (state, ownProps) => {
    return {
        posts: Object.values(state.posts),
        currentUser: state.session.user,
        user: ownProps.match.params.id,
        users: state.users,
        newPost: state.posts.new,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUserPosts: id => dispatch(fetchUserPosts(id)),
        fetchPosts: () => dispatch(fetchPosts()),
        composePost: data => dispatch(composePost(data)),
        fetchUsers: () => dispatch(fetchUsers()),
        removePost: id => dispatch(removePost(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);