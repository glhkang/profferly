import React from 'react';


class FormWindow extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            info: "",
            another: "yey"
        }
         this.handleSubmit = this.handleSubmit.bind(this);
          this.update = this.update.bind(this);
    }

    update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
    }

  handleSubmit(e) {
    e.preventDefault();
    const info2 = this.state.info;
    this.setState({info:"", another:info2})
  }

    render() {
        return(
            <div>
            <h1>{this.state.another}</h1>
            <form onSubmit={this.handleSubmit}> 
            <input type="text"  value={this.state.info}
                onChange={this.update('info')}
                placeholder="Info" />
            <button>Submit!</button>
            </form>
            </div>
        )
    }
}


export default FormWindow;