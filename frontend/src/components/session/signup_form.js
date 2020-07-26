import React from 'react';
import { withRouter, Link } from 'react-router-dom';
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
    this.demoUserLogin = this.demoUserLogin.bind(this);
  }

  componentWillReceiveProps(nextProps) {
  ////debugger
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
////debugger
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

  demoUserLogin(e) {
    e.preventDefault();
    const demoUser = { email: "gloria@gloria.com", password: "gloria" };
    this.props.login(demoUser)
  };


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
  //////debugger
    return (
      <div className="session-form-main">
        <div className="session-form-container">
          <form onSubmit={this.handleSubmit}>
            <div className="session-form">
              <div className="login-signup-header">
                <img src="/assets/images/black_logo_bold.png" alt="Profferly Logo" />
                <h3>Sign Up for Profferly!</h3>
              </div>
              {/* <label className="session-form-label">
                Email
              </label> */}
              <br />
              <input
                type="email"
                className="session-form-field"
                value={this.state.email}
                onChange={this.update("email")}
                placeholder="Email"
              />

              {/* <label className="session-form-label">
                Username
              </label> */}
              <br />
              <input
                type="text"
                className="session-form-field"
                value={this.state.username}
                onChange={this.update("username")}
                placeholder="Username"
              />

              {/* <label className="session-form-label">
                Password
              </label> */}
              <br />
              <input
                type="password"
                className="session-form-field"
                value={this.state.password}
                onChange={this.update("password")}
                placeholder="Password"
              />

              {/* <br /> */}

              <input className="session-button" type="submit" value="Submit" />
              <input
                className="demo-button"
                type="submit"
                value="Demo User"
                onClick={this.demoUserLogin}
              />



              <div className="session-form-bottom">
                <span className="bottom-session-text">Already have an account?&nbsp;{" "}
                  <Link to="/login" className="bottom-session-link">Click here!
                  </Link>
                </span>
              </div>

              <div className="session-errors">
                {this.renderErrors()}
              </div>

            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(SignupForm);