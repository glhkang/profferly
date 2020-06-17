import React, { Component } from "react";
import axios from "axios";

import { Card, CardHeader, CardText, CardBody, Row, Col } from "reactstrap";

const endpoint = "http://localhost:3000/api/document/upload";

class NewFileUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null
    };
  }

  handleSelectedFile = e => {
    e.preventDefault();
    this.setState({
      selectedFile: e.target.files[0]
    });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleUpload = event => {
    event.preventDefault();
    const data = new FormData(event.target);
    data.append("file", this.state.selectedFile);

    axios
      .post(endpoint, data)
      .then(() => {
        this.props.history.push("/");
      })
      .catch(error => {
        alert("Error, please try again");
      });
  };

  render() {
    const { selectedFile } = this.state;

    return (
      <div>
        <Row>
          <Col xs="4">
            <Card>
              <CardHeader >
                Upload a photo!
              </CardHeader>
              <CardBody>
                <CardText>
                  <form onSubmit={this.handleUpload}>


                    <div>
                      <input
                        type="file"
                        name=""
                        id=""
                        onChange={this.handleSelectedFile}
                      />
                    </div>
                    <button type="submit" >
                      Upload
                    </button>
                  </form>
                </CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default NewFileUpload;
