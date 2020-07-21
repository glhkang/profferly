import { connect } from 'react-redux';
import { fetchPosts, composePost, removePost } from '../../actions/post_actions';
import { fetchUsers } from '../../actions/user_actions';
import Posts from './posts';

const mapStateToProps = (state, ownProps) => {
debugger
    return {
        posts: Object.values(state.posts.all),
        currentUser: state.session.user,
        newPost: state.posts.new,
        users: state.users,
        history: ownProps.history
    };
};

const mapDispatchToProps = dispatch => {
//debugger
    return {
        fetchPosts: () => dispatch(fetchPosts()),
        composePost: data => dispatch(composePost(data)),
        fetchUsers: () => dispatch(fetchUsers()),
        removePost: id => dispatch(removePost(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);