import React from 'react';

class CommentItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log('render inside CommentItem');
        console.log(this.props);
        debugger;
        const { comments, currentUser, removeComment } = this.props;

        

        return (
            <div>
                These are individual Comment Items



                {comments ? comments.map(comment => (
                    <li  >
                        <div>{comment.text}</div>
                        <br/>
                        <div>{'Comment left by: ' + comment.author.username}</div>
                        <br />
                        <div>
                            {(comment.author._id === currentUser.id) ?
                                (<button onClick={() => {
                                    removeComment(comment._id)
                                }}>
                                    Delete comment
                                </button>) : null}
                        </div>


                    </li>
                )) : null}
            </div>
        )
    }
};

export default CommentItem;