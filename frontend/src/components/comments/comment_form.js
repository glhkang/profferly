import React from 'react';


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


        console.log(this.props.match.params.postId);
        debugger;

        const postId = parseInt(this.props.match.params.postId);
        const text = this.state.text;
        const comment = Object.assign({}, this.state, {
            post_id: postId,
            text,

        })

        this.props.composeComment(comment)
            .then(console.log('comment was succesfully saved to DB!'));

    }


    render() {
        const { isLoggedIn } = this.props;
        
        //SHOW NEWCOMMENTSUBMISSION FORM IF LOGGED IN/AUTHENTICATED

        const newCommentForm = isLoggedIn ? (
            <form onSubmit={this.handleSubmit} >
                <label >Leave a Comment</label>
                <br />
                <textarea
                    cols="30"
                    rows="8"
                    value={this.state.text}
                    onChange={this.update("text")}
                    placeholder="Write your comment!"
                />
                <br />
                <input type='submit' value={'Submit Your Comment'} />
            </form>


        ) :

            <div>
                <a href="/login" >Log in</a> to leave a comment!
            </div>

            // hyperlink to login page
            ;


        return (
            <div>
                {newCommentForm} 
            </div>
        )
    }




};

export default CommentForm;