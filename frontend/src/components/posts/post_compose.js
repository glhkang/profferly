import React from "react";

class PostCompose extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      file: null,
      newPost: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSelectedFile = (e) => {
    e.preventDefault();
    this.setState({
      file: e.target.files[0],
    });
  };

  handleSubmit(e) {
    e.preventDefault();
    const data = new FormData();

    if (this.state.file === null) {
      data.append("text", this.state.text);
      this.props.composePost(data);
    } else {
      data.append("file", this.state.file);
      data.append("text", this.state.text);
      this.props.composePost(data);
    }

    setTimeout(function () {
      window.location.reload();
    }, 500);
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  update() {
    return (e) =>
      this.setState({
        text: e.currentTarget.value,
      });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="post-compose">
            <textarea
              className="post-textarea"
              value={this.state.text}
              onChange={this.update()}
              placeholder="What's up?"
            />
            <input className="post-button" type="submit" value="Submit" />
          </div>

          <input
            type="file"
            className="custom-file-input"
            name="file"
            id="file"
            htmlFor="file"
            accept="image/*"
            onChange={this.handleSelectedFile}
          />
        </form>
        <br />
      </div>
    );
  }
}

export default PostCompose;
