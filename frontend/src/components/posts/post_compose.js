import React from 'react';
import axios from 'axios';
import PostItem from './post_item';
import PhotoIndex from "../photos/PhotoIndex";
import NewPhotoUpload from "../photos/NewPhotoUpload";

const endpoint = "http://localhost:3000/api/posts/";
// const endpoint = "http://profferly.herokuapp/api/photos/upload";

class PostCompose extends React.Component {
    constructor(props) {
// debugger
        super(props);

        this.state = {
            text: "",
            file: null,
            newPost: ""
            // selectedFile: null,
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // componentWillReceiveProps(nextProps) {
    //     this.setState({ newPost: nextProps.newPost.text });
    // }

    handleSelectedFile = e => {
// debugger
        e.preventDefault();
        this.setState({
            file: e.target.files[0]
        });
    };

    handleSubmit(e) {
        // console.log(e, e.target, e.currentTarget);
    // debugger
        e.preventDefault();
        
            const data = new FormData();
            data.append("file", this.state.file);
            data.append("text", this.state.text);
            this.props.composePost(data);
    // debugger
        // console.log(data);
        // axios
        //     .post(endpoint, data)
        //     .then(() => {
        //     this.props.history.push("/");
        //     })
        //     .catch(error => {
        //     alert("Error, please try again");
        // });

        // let post = {
        //     text: this.state,
        //     file: this.state.file
        // };
        // console.log("post:" + post);
        // this.setState({ text: '' })
        setTimeout(function(){window.location.reload();},500);
        // this.props.location.reload();
    }


    
    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };
           
    update() {
// //debugger
        return e => this.setState({
            text: e.currentTarget.value
        });
    }

    render() {
//debugger
        return (
            <div>
                {/* <PhotoIndex /> */}
                <form onSubmit={this.handleSubmit}>
                    {/* <div>
                        <form onSubmit={this.handleUpload}> */}
                  <div className="post-compose">
                    <textarea className="post-textarea" 
                      value={this.state.text}
                      onChange={this.update()}
                      placeholder="What's up?"
                    //   wrap="hard"
                    />
                  <input className="post-button" type="submit" value="Submit" />
                  </div>

                  <input
                      type="file"
                      className="custom-file-input"
                      name="file"
                      id="file"
                      for="file"
                    //   style={{display: "none"}}
                      accept='image/*'
                    //   color={{color: 'tranparent'}}
                      onChange={this.handleSelectedFile}
                  />
                            {/* <button type="submit">Upload</button>
                        </form>
                    </div> */}

                </form>
                <br />
                {/* <PostItem text={this.state.newPost} /> */}
            </div>
        )
    }
}

export default PostCompose;