import React from 'react';
import { withRouter } from 'react-router-dom';
import './session_form.css';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
      // fname: '',
      // lname: '',
      // password2: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
  }

  componentWillReceiveProps(nextProps) {
  debugger
    if (nextProps.signedIn === true) {
      this.props.history.push('/posts');
    }

    this.setState({errors: nextProps.errors})
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
debugger
    e.preventDefault();
    let user = {
      email: this.state.email,
      username: this.state.username,
      password: this.state.password,
      // fname: this.state.fname,
      // lname: this.state.lname,
      // password2: this.state.password2
    };

    this.props.signup(user, this.props.history); 
  }

  renderErrors() {
    return (
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`} className="session-errors">
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  render() {
  //debugger
    return (
      <div className="session-form-container">
        <form onSubmit={this.handleSubmit}>
          <div className="session-form">
            <h3>Sign up for Profferly!</h3>
            <label className="session-form-label">
              Email
              <br />
              <input
                type="email"
                className="session-form-field"
                value={this.state.email}
                onChange={this.update("email")}
                placeholder="Email"
              />
            </label>

            <label className="session-form-label">
              Username
              <br />
              <input
                type="text"
                className="session-form-field"
                value={this.state.username}
                onChange={this.update("username")}
                placeholder="Username"
              />
            </label>

            <label className="session-form-label">
              Password
              <br />
              <input
                type="password"
                className="session-form-field"
                value={this.state.password}
                onChange={this.update("password")}
                placeholder="Password"
              />
              
            </label>

            <br />
            {/* <input type="text"
              value={this.state.fname}
              onChange={this.update('fname')}
              placeholder="First Name"
            />
            <br />
            <input type="text"
              value={this.state.lname}
              onChange={this.update('lname')}
              placeholder="Last name"
            /> */}
            {/* <br/>
              <input type="password"
                value={this.state.password2}
                onChange={this.update('password2')}
                placeholder="Confirm Password"
              /> */}
            <input className="session-button" type="submit" value="Submit" />
            {this.renderErrors()}
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SignupForm);