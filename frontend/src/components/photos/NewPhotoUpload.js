import React, { Component } from "react";
import axios from "axios";

const endpoint = "http://localhost:3000/api/photos/upload";
// const endpoint = "http://profferly.herokuapp.com/api/photos/upload";

class NewPhotoUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
      imageURL: null,
    };
  }

  // handleSelectedFile = (e) => {
  //   e.preventDefault();
  //   this.setState({
  //     selectedFile: e.target.files[0],
  //   });
  // };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleUpload = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    data.append("file", this.state.selectedFile);

    axios
      .post(endpoint, data)
      .then(() => {
        this.props.history.push("/");
      })
      .catch((error) => {
        alert("Error, please try again");
      });
  };

  handleFile = (e) => {
    const reader = new FileReader();
    const file = e.currentTarget.files[0];
    reader.onloadend = () =>
      this.setState({ imageURL: reader.result, selectedFile: file });
    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ imageURL: "", selectedFile: null });
    }
  };

  render() {
    return (
      <div>
        Upload a photo!
        <form onSubmit={this.handleUpload}>
          <div>
            <input
              type="file"
              name=""
              id=""
              // onChange={this.handleSelectedFile}
              onChange={this.handleFile}
            />
          </div>
          <button type="submit">Upload</button>
        </form>
      </div>
    );
  }
}

export default NewPhotoUpload;
