import React from 'react';
import Moment from "react-moment";
import './post.css';

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
            //  const date = post.date; 
            //  let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            //  let localtime = post.date.toLocaleString("en-US", options);
             ////debugger
             const dateStr = post.date.toString();
             if (post && user) {
                 return (
                <li>
                    <div className="post-item">
                        <div><img className="post-item-image" src= {post.file}/></div>
                        <div className="post-item-text">{post.text}</div>
                        <div className="post-item-footer">
                            <div className="post-item-username"onClick={this.handleClick}>
                                {user.username}
                            </div>
                            <Moment format="HH:mm on MMM DD, YYYY" className="post-date" >{dateStr}</Moment>
                            {/* <div className="post-date">{localtime}</div> */}
                            {(this.props.currentUser.id === user._id) ? 
                                <button className="post-item-footer-button" onClick={this.handleButton}>Delete</button> : <div></div>
                            }
                        </div>
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