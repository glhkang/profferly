import React from 'react';

class CommentItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        // const {} = this.props;

        return (
            <div>
                This is an individual Comment Item :) 


                {/* { this.props.comments ? this.props.comments.maps(comment => (
                    <li  >
                        <div>{comment.text}</div>

                        <div>
                            {(comment.author.id === this.props.session.user.id) ?
                                (<button onClick={() => {
                                    this.props.removeComment(comment.id)
                                }}>
                                    Delete comment
                                </button>) : null}
                            <div>{comment.author.username}</div>
                        </div>

                    </li>
                )) : null} */}
            </div>
        )
    }
};

export default CommentItem;