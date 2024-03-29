import React from "react";
import { withRouter } from "react-router-dom";
import CommentItem from "./comment_item";
import "./comments.css";

class CommentsList extends React.Component {
  render() {
    const { comments, currentUser, currentPost, removeComment } = this.props;

    return (
      <div className="comments-cont">
        <ol className="comments-list-ol">
          <div className="comments-list-li-cont">
            {comments
              ? comments.map((comment) => (
                  <CommentItem
                    comment={comment}
                    currentUser={currentUser}
                    removeComment={removeComment}
                    currentPost={currentPost}
                    key={comment._id}
                  />
                ))
              : null}
          </div>
        </ol>
      </div>
    );
  }
}

export default withRouter(CommentsList);
