import React from 'react';

class PostItem extends React.Component {
    constructor(props) {
        super(props)
        
        this.handleClick = this.handleClick.bind(this);
        this.handleButton = this.handleButton.bind(this);
    }

    handleClick() {
        this.props.history.push(`/users/${this.props.post.user}` )
    }
    
    handleButton(e) {
        e.preventDefault();
        this.props.removePost(this.props.post._id);
        this.props.history.go();
    }

    render() {
             const post = this.props.post;
             const user = this.props.users[this.props.post.user];
////debugger
        if (post && user) {
            return (
                <li>
                    <div>
                        <div className="post-text">{post.text}</div>
                        <div onClick={this.handleClick}>
                            {user.username}
                        </div>
                        <div className="post-date">{post.date}</div>
                        {(this.props.currentUser.id === user._id) ? 
                            <button onClick={this.handleButton}>Delete</button> : <div></div>
                        }
                    </div>
                </li>
            )
        } else {
            // ////debugger
            return null;
        }
    }
}

export default PostItem;