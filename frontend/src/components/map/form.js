import React from 'react';


class FormWindow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            description: "",
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
    }

    update(field) {
        return (e) =>
          this.setState({
            [field]: e.currentTarget.value,
          });
    }

    handleSubmit(e){
        e.preventDefault();
        if (this.state.title.length !== 0 && this.state.description.length !== 0) {
            const newMarker = {
                title: this.state.title,
                description: this.state.description,
                longitude: this.props.longitude,
                latitude: this.props.latitude,
            };
        this.props.newMarker(newMarker);
        }
    }

    render() {
        return (
          <div>
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