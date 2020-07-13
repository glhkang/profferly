import React from 'react';
import { withRouter } from 'react-router-dom';


class CommentsForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: '',
        };
        this.redirectToPostShow = this.redirectToPostShow.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        const postId = parseInt(this.props.match.params.postId);
        const data = Object.assign({}, this.state, {
            post_id: postId,
        })

        this.props.composeComment(data);
        this.redirectToPostShow();
    }

    redirectToPostShow() {
        const url = `/posts/${this.props.match.params.postId}`
        this.props.history.push(url);
    }

    update(field){
        return e => this.setState({ [field]: e.currentTarget.value }); 
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <label >Leave a Comment</label>
                    <br />
                    <textarea
                        cols="30"
                        rows="8"
                        value={this.state.body}
                        onChange={this.update("body")}
                        placeholder="Write your comment!"
                    />
                    <br />
                    <input type='submit' value={'Submit Your Comment'} />
                </form>
            </div>
        )
    }
};

export default withRouter(CommentsForm);