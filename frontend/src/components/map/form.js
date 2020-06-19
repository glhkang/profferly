import React from 'react';
import * as MarkerApiUtil from "../../util/marker_util";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";


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
      this.props.history.push('/map');
    }

    update(field) {
        return (e) =>
          this.setState({
            [field]: e.currentTarget.value,
          });
    }

    handleSubmit(e){
            const newMarker = {
              title: this.state.title,
              description: this.state.description,
              longitude: this.props.location.state.longitude,
              latitude: this.props.location.state.latitude,
            };
            this.setState = ({
              title: "",
              description: "",
            });
         MarkerApiUtil.writeMarker(newMarker);
         this.props.history.go();

    }

    render() {
      console.log(this.props)
        return (
          <div>
            <button
              onClick={this.handleButton}>
              Go back
            </button>
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                value={this.state.description}
                onChange={this.update("description")}
                placeholder="Description"
              />
              <br />
              <input
                type="text"
                value={this.state.title}
                onChange={this.update("title")}
                placeholder="Title"
              />
              <br />
              <button>Submit</button>
            </form>
          </div>
        );
    }
}


export default FormWindow;