import React from 'react';
import PostItem from './post_item';

class PostCompose extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: "",
            newPost: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
debugger
        this.setState({ newPost: nextProps.newPost.text });
    }

    handleSubmit(e) {
        e.preventDefault();
        let post = {
            text: this.state.text
        };

        this.props.composePost(post);
        this.setState({ text: '' })
    }

    update() {
debugger
        return e => this.setState({
            text: e.currentTarget.value
        });
    }

    render() {
debugger
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input type="textarea"
                            value={this.state.text}
                            onChange={this.update()}
                            placeholder="Write your post..."
                        />
                        <input type="submit" value="Submit" />
                    </div>
                </form>
                <br />
                {/* <PostItem text={this.state.newPost} /> */}
            </div>
        )
    }
}

export default PostCompose;