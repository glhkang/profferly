import React, { Component } from "react";
import { Row, Col, Card, CardHeader, CardText, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import axios from "axios";

class FileUpload extends Component {
  state = {
    documents: []
  };

  deleteDocument = id => {
    axios.delete("/api/document/" + id).then(() => {
      this.setState({
        documents: this.state.documents.filter(document => document._id !== id)
      });
    });
  };

  componentDidMount() {
    axios.get("/api/document").then(res => {
      this.setState({ documents: res.data });
    });
  }

  render() {
    return (
      <div >
        <Col xs="8">
          <Card>
            <CardHeader />
            <CardBody>
              <CardText>
                <table>
                  <thead>
                    <tr>
                      <th>Id</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.documents.map(document => (
                      <tr>
                        <td>{document.document_id}</td>
                        <td>{document.description}</td>
                        <td>
                          <a href={document.fileLink} target="_blank">
                            View Photo
                          </a>
                        </td>
     
                        <td>
                          <button
                            onClick={this.deleteDocument.bind(
                              this,
                              document._id
                            )}
                            
                          >
                            Delete Photo
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </div>
    );
  }
}

export default FileUpload;
