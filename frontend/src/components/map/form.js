import React from "react";
import * as MarkerApiUtil from "../../util/marker_util";
import "./map.css";

class FormWindow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.handleButton = this.handleButton.bind(this);
  }

  handleButton(e) {
    e.preventDefault();
    this.props.history.goBack();
    return false;
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    const newMarker = {
      title: this.state.title,
      description: this.state.description,
      longitude: this.props.location.state.longitude,
      latitude: this.props.location.state.latitude,
    };
    this.setState = {
      title: "",
      description: "",
    };
    MarkerApiUtil.writeMarker(newMarker);
    this.handleButton(e);
    console.log('heroku test');
    setTimeout(function () {
      window.location.reload();
    }, 10);

    console.log('heroku test');
  }

  render() {
    return (
      <div className="map-form-container">
        <div className="map-form">
          <div className="map-form-header">Add Your Event to the Map!</div>
          <br />
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={this.state.title}
              onChange={this.update("title")}
              placeholder="Title"
              className="map-inputs"
            />
            <br />
            <textarea
              type="text"
              value={this.state.description}
              onChange={this.update("description")}
              placeholder="Enter a detailed description"
              className="map-inputs"
            />
            <br />
            <button className="submit-button">Submit</button>
          </form>

          <button onClick={this.handleButton} className="return-button">
            Cancel
          </button>
        </div>
      </div>
    );
  }
}

export default FormWindow;
