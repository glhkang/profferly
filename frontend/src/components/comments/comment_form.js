import React from 'react';
import '../posts/post.css';

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
                    <label >Leave a Comment</label>
                    <textarea
                        cols="30"
                        rows="6"
                        value={this.state.text}
                        onChange={this.update("text")}
                        placeholder="Write your comment!"
                    />
                    <br />
                    <input className="comment-form" type='submit' value={'Submit Your Comment'} />
                </form>
        )
    }




};

export default CommentForm;