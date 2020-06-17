import React from 'react';

class PostItem extends React.Component {
    constructor(props) {
        super(props)
        
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.history.push(`/users/${this.props.post.user}`)
    }

    render() {
             const post = this.props.post;
             const user = this.props.users[this.props.post.user];
// debugger
        if (post && user) {
            return (
                <li>
                    <div>
                        <div>{post.text}</div>
                        <div onClick={this.handleClick}>
                            {user.username}
                        </div>
                    </div>
                </li>
            )
        } else {
            // debugger
            return null;
        }
    }
}

export default PostItem;