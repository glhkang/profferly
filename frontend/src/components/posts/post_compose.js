import React from 'react';
import axios from 'axios';
import PostItem from './post_item';
import PhotoIndex from "../photos/PhotoIndex";
import NewPhotoUpload from "../photos/NewPhotoUpload";

const endpoint = "http://localhost:3000/api/photos/upload";
// const endpoint = "http://profferly.herokuapp/api/photos/upload";

class PostCompose extends React.Component {
    constructor(props) {
debugger
        super(props);

        this.state = {
            text: "",
            newPost: "",
            selectedFile: null,
            photos: []
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // componentWillReceiveProps(nextProps) {
    //     this.setState({ newPost: nextProps.newPost.text });
    // }

    handleSubmit(e) {
debugger
        e.preventDefault();
        const data = new FormData(e.target);
        let post = {
            text: this.state.text,
            selectedFile: this.state.selectedFile,
            photos: (this.state.photos).push()
        };
        
        data.append("file", this.state.selectedFile);
        axios
            .post(endpoint, data)
            .then(() => {
            this.props.history.push("/");
            })
            .catch(error => {
            alert("Error, please try again");
        });
        this.props.composePost(post);
        this.setState({ text: '' })
        this.props.history.go();
    }

    handleSelectedFile = e => {
debugger
        e.preventDefault();
        this.setState({
          selectedFile: e.target.files[0]
        });
    };
    
    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };
    
//     handleUpload = event => {
// debugger
//         event.preventDefault();
//         const data = new FormData(event.target);
//         data.append("file", this.state.selectedFile);

//         axios
//             .post(endpoint, data)
//             .then(() => {
//             this.props.history.push("/");
//             })
//             .catch(error => {
//             alert("Error, please try again");
//         });
//     };

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
// debugger
        return e => this.setState({
            text: e.currentTarget.value
        });
    }

    render() {
debugger
        return (
            <div>
                <PhotoIndex />
                <form onSubmit={this.handleSubmit}>
                    {/* <div>
                        <form onSubmit={this.handleUpload}> */}
                            <input
                                type="file"
                                name=""
                                id=""
                                onChange={this.handleSelectedFile}
                            />
                            {/* <button type="submit">Upload</button>
                        </form>
                    </div> */}
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