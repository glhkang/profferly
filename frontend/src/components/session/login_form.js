import React from 'react';
import { withRouter } from 'react-router-dom';
import "./session_form.css";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
//debugger
    this.state = {
      email: '',
      password: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  // Once the user has been authenticated, redirect to the Tweets page. /TWEETS was edited below
  
  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      this.props.history.push('/posts');
    }

    // Set or clear errors
    this.setState({errors: nextProps.errors})
  }

  // Handle field updates (called in the render method)
  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  // Handle form submission
  handleSubmit(e) {
    e.preventDefault();
    let user = {
      email: this.state.email,
      password: this.state.password
    };
  //debugger
    
    this.props.login(user); 
  }

  // Render the session errors if there are any
  renderErrors() {
    return(
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}
            className="session-errors">
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
            <h3>Welcome Back to Profferly!</h3>
              <label
                className="session-form-label">Email
              <br/>
              <input type="text"
                className="session-form-field"
                value={this.state.email}
                onChange={this.update('email')}
                placeholder="Email"
              />
              </label>
            
              <label className="session-form-label">Password
              <br/>
              <input type="password"
              className="session-form-field"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="Password"
              />
              </label>
  
            <input 
              className="session-button"
              type="submit" value="Submit" />
            {this.renderErrors()}
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(LoginForm);