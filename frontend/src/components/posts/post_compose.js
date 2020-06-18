import React from 'react';
import PostItem from './post_item';
import PhotoDelete from "../PhotoDelete";
import NewPhotoUpload from "../NewPhotoUpload";

class PostCompose extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: "",
            newPost: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // componentWillReceiveProps(nextProps) {
    //     this.setState({ newPost: nextProps.newPost.text });
    // }

    handleSubmit(e) {
        e.preventDefault();
        let post = {
            text: this.state.text
        };

        this.props.composePost(post);
        this.setState({ text: '' })
        this.props.history.go()
    }

    // handleSubmit(e) {
    //     e.preventDefault();
    //     let annotation = merge(
    //         {},
    //         this.state,
    //         { poem_id: this.props.poem.id },
    //         { start_i: this.props.startPos },
    //         { end_i: this.props.endPos }
    //     );
            
    //     this.props.createAnnotation(annotation).then((payload) => {
    //         let newAnnotationId = payload.annotation.id;
    //         this.props.history.push(
    //         `/poems/${this.props.poem.id}/annotations/${newAnnotationId}`
    //         );
    //     });
    // }
           
    update() {
//debugger
        return e => this.setState({
            text: e.currentTarget.value
        });
    }

    render() {
//debugger
        return (
            <div>
                    <PhotoDelete />
                    <NewPhotoUpload />
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