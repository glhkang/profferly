import React from 'react';
// import '../posts/post.css';
import './comments.css';

class CommentForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        const postId = this.props.currentPost._id;
        // const postId = parseInt(this.props.currentPost._id);
        const text = this.state.text;
        const comment = Object.assign({}, this.state, {
            post: postId,
            text,

        })
        console.log(this.state.text)
        console.log(comment)
        debugger;

        this.props.composeComment(comment)
            .then(console.log('comment was succesfully saved to DB!'));

    }


    render() {




        return (
                <form className="comment-form" onSubmit={this.handleSubmit} >
                    <br />
                    {/* <label >Leave a Comment</label> */}
                    <textarea
                        className="comment-form-textarea"
                        cols="30"
                        rows="5"
                        maxlength="200"
                        value={this.state.text}
                        onChange={this.update("text")}
                        placeholder="Leave a comment!"
                    />
                    <input className="comment-form-button" type='submit' value={'Submit Comment'} />
                </form>
        )
    }




};

export default CommentForm;