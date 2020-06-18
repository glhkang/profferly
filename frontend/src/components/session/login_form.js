import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import "./session_form.css";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
////debugger
    this.state = {
      email: '',
      password: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.guestUserLogin = this.guestUserLogin.bind(this);
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
  ////debugger
    
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

  guestUserLogin(e) {
    e.preventDefault();
    const guestUser = { email: "profferly8@profferly.com", password: "profferly8" };
    this.props.login(guestUser)
  };


  render() {
////debugger
    return (
      <div className="session-form-main">
        <div className="session-form-container">
          <form onSubmit={this.handleSubmit}>
            <div className="session-form">
              <div className="login-signup-header">
                <img src="/assets/images/black_logo_bold.png" />
                <h3>Welcome Back to Profferly!</h3>
              </div>
                {/* <label
                  className="session-form-label">Email
                </label> */}
                <br/>
                <input type="text"
                  className="session-form-field"
                  value={this.state.email}
                  onChange={this.update('email')}
                  placeholder="Email"
                />
              
                {/* <label className="session-form-label">Password
                </label> */}
                <br/>
                <input type="password"
                className="session-form-field"
                  value={this.state.password}
                  onChange={this.update('password')}
                  placeholder="Password"
                />
    
              <input 
                className="session-button"
                type="submit" value="Submit" />
              {this.renderErrors()}
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginForm);