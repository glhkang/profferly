import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import "./session_form.css";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    //////debugger
    this.state = {
      email: "",
      password: "",
      errors: {},
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.demoUserLogin = this.demoUserLogin.bind(this);
  }

  // Once the user has been authenticated, redirect to the Tweets page. /TWEETS was edited below

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      this.props.history.push("/posts");
    }

    // Set or clear errors
    this.setState({ errors: nextProps.errors });
  }

  // Handle field updates (called in the render method)
  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  // Handle form submission
  handleSubmit(e) {
    e.preventDefault();
    let user = {
      email: this.state.email,
      password: this.state.password,
    };
    //////debugger

    this.props.login(user);
  }

  // Render the session errors if there are any
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


  // renderErrors() {
  //   return (
  //     <ul className='session-errors'>
  //       {this.props.errors.map((error, idx) => (
  //         <li key={`error.${idx}`}>{error}</li>
  //       ))}
  //     </ul>
  //   );
  // }

  demoUserLogin(e) {
    e.preventDefault();
    const demoUser = { email: "gloria@gloria.com", password: "gloria" };
    this.props.login(demoUser);
  }

  render() {
    //////debugger

    // const { errors } = this.props;

    // const allErrors = (
    //   <div className='error-popup'>
    //     <div>
    //       <ul>
    //         {errors.map((error, i) => (
    //           <li key={`error-${i}`}>{error}</li>
    //         ))}
    //       </ul>
    //     </div>
    //   </div>
    // )

    return (
      <div className="session-form-main">
        <div className="session-form-container">
          <form onSubmit={this.handleSubmit}>
            <div className="session-form">
              <div className="login-signup-header">
                <img src="/assets/images/black_logo_bold.png" alt="Profferly Logo" />
                <h3>Welcome Back to Profferly!</h3>
              </div>
              {/* <label
                  className="session-form-label">Email
                </label> */}
              <br />
              <input
                type="text"
                className="session-form-field"
                value={this.state.email}
                onChange={this.update("email")}
                placeholder="Email"
              />

              {/* <label className="session-form-label">Password
                </label> */}
              <br />
              <input
                type="password"
                className="session-form-field"
                  value={this.state.password}
                  onChange={this.update('password')}
                  placeholder="Password"
                />
    
              <input 
                className="session-button"
                type="submit" value="Submit" />
              <input
                className="demo-button"
                type="submit"
                value="Demo User"
                onClick={this.demoUserLogin}
              />


              <div className="session-form-bottom">
                <span className="bottom-session-text">
                  Don't have an account?&nbsp;{" "}
                  <Link to="/signup" className="bottom-session-link">Click here!
                  </Link>
                </span>
              </div>

              <div className="session-errors">
                {this.renderErrors()}
              </div>

            </div>
          </form>

          {/* {errors} */}
        </div>
      </div>
    );
  }
}

export default withRouter(LoginForm);