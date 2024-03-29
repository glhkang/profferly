import React from "react";
import Moment from "react-moment";
import "./post.css";
import CommentsList from "../comments/comments_list";
import CommentForm from "../comments/comment_form";
import LikesDislikes from "../likesdislikes/likes_dislikes";

class PostItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleButton = this.handleButton.bind(this);
    this.state = { showComments: false, commentDisplayText: "Show Comments" };
  }

  handleClick() {
    this.props.history.push(`/users/${this.props.post.user}`);
  }

  handleButton(e) {
    e.preventDefault();
    this.props.removePost(this.props.post._id);
    this.props.history.go();
  }

  onClick() {
    if (this.state.commentDisplayText === "Show Comments") {
      this.setState((prevState) => ({
        showComments: !prevState.showComments,
        commentDisplayText: "Hide Comments",
      }));
    } else {
      this.setState((prevState) => ({
        showComments: !prevState.showComments,
        commentDisplayText: "Show Comments",
      }));
    }
  }

  render() {
    const post = this.props.post;
    const user = this.props.users[this.props.post.user];
    const dateStr = post.date.toString();

    if (post.file && user) {
      return (
        <li
          className="post-item-li"
          data-aos="zoom-out-right"
          data-aos-once="true"
        >
          <div className="post-item">
            <div>
              <img
                className="post-item-image"
                src={post.file}
                alt="uploaded by user to accompany post"
              />
            </div>
            <div className="post-item-text">{post.text}</div>
            <div className="post-item-footer">
              <div className="post-item-posted">
                Posted by{" "}
                <span className="post-item-username" onClick={this.handleClick}>
                  {user.username}
                </span>
              </div>
              <Moment format="MMM DD, YYYY [at] h:mmA" className="post-date">
                {dateStr}
              </Moment>
              <br />
              <LikesDislikes
                postId={post._id}
                userId={user._id}
                currentUserId={this.props.currentUser.id}
              />
              {this.props.currentUser.id === user._id ? (
                <button
                  className="post-item-footer-button"
                  onClick={this.handleButton}
                >
                  Delete
                </button>
              ) : (
                <div></div>
              )}
            </div>

            <CommentForm
              currentUser={this.props.currentUser}
              composeComment={this.props.composeComment}
              // currentPost={this.props.currentPost}
              currentPost={this.props.post}
            />
            <div className="show-hide-comments" onClick={() => this.onClick()}>
              {this.state.commentDisplayText}
            </div>
            {this.state.showComments ? (
              <CommentsList
                currentPost={this.props.post}
                comments={this.props.comments}
                fetchPostComments={this.props.fetchPostComments}
                fetchComment={this.props.fetchComment}
                removeComment={this.props.removeComment}
                isLoggedIn={this.props.isLoggedIn}
                currentUser={this.props.currentUser}
                fetchAllComments={this.props.fetchAllComments}
              />
            ) : null}
          </div>
        </li>
      );
    } else if (!post.file && user) {
      return (
        <li
          className="post-item-li"
          data-aos="zoom-out-right"
          data-aos-once="true"
        >
          <div className="post-item">
            <div className="post-item-text">{post.text}</div>
            <div className="post-item-footer">
              <div className="post-item-posted">
                Posted by{" "}
                <span className="post-item-username" onClick={this.handleClick}>
                  {user.username}
                </span>
              </div>
              <Moment format="MMM DD, YYYY [at] h:mmA" className="post-date">
                {dateStr}
              </Moment>
              <br />
              <LikesDislikes
                postId={post._id}
                userId={user._id}
                currentUserId={this.props.currentUser.id}
              />
              {this.props.currentUser.id === user._id ? (
                <button
                  className="post-item-footer-button"
                  onClick={this.handleButton}
                >
                  Delete
                </button>
              ) : (
                <div></div>
              )}
            </div>

            <CommentForm
              currentUser={this.props.currentUser}
              composeComment={this.props.composeComment}
              currentPost={this.props.post}
            />
            <div className="show-hide-comments" onClick={() => this.onClick()}>
              {this.state.commentDisplayText}
            </div>
            {this.state.showComments ? (
              <CommentsList
                currentPost={this.props.post}
                comments={this.props.comments}
                fetchPostComments={this.props.fetchPostComments}
                fetchComment={this.props.fetchComment}
                removeComment={this.props.removeComment}
                isLoggedIn={this.props.isLoggedIn}
                currentUser={this.props.currentUser}
                fetchAllComments={this.props.fetchAllComments}
              />
            ) : null}
          </div>
        </li>
      );
    } else {
      return null;
    }
  }
}

export default PostItem;
