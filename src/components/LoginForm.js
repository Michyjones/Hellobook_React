import React, { Component, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { loginUser } from "../actions/usersActions";
import {browserHistory} from 'react-router';
//import {bindActionCreators} from "redux";
import { connect } from "react-redux";
import Header from "./Header";

class Login extends Component {
  state = {
    user: {
      email: "",
      password: ""
    }
  };
  updateUserState = (field, e) => {
    let newUserState = Object.assign({}, this.state.user);
    newUserState[field] = e.target.value;
    this.setState({ user: newUserState });
  };

  submitForm = () => {
    this.props.loginNewUser(this.state.user);
    this.props.history.push("/view");
  };

  render() {
    const { updateUserState, submitForm } = this;
    const { email, password } = this.state.user;
    return (
      <Fragment>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-4 col-md-offset-4">
              <h1 className="text-center login-title">
                <strong>Log in to your account</strong>
              </h1>
              <div className="account-wall">
                {this.props.user.error && (
                  <div className="alert alert-danger" role="alert">
                    <center>{this.props.user.error}</center>
                  </div>
                )}
                <img
                  className="profile-img"
                  src="http://lh6.ggpht.com/_EVthKgfhQEw/TS8jPxDz2_I/AAAAAAAAlP8/3AgGfGpfK7k/s720/IMG_5481.JPG"
                  alt=""
                />
                <div className="main-login main-center">
                  <form className="form-horizontal" method="post" action="#">
                    <div className="form-group">
                      <label
                        htmlFor="email"
                        className="cols-sm-2 control-label"
                      >
                        Email
                      </label>
                      <div className="cols-sm-10">
                        <div className="input-group">
                          <span className="input-group-addon">
                            <i
                              className="fa fa-envelope fa"
                              aria-hidden="true"
                            />
                          </span>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter your Email"
                            value={email}
                            onChange={e => {
                              updateUserState("email", e);
                            }}
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor="password"
                        className="cols-sm-2 control-label"
                      >
                        Password
                      </label>
                      <div className="cols-sm-10">
                        <div className="input-group">
                          <span className="input-group-addon">
                            <i
                              className="fa fa-lock fa-lg"
                              aria-hidden="true"
                            />
                          </span>
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Enter your Password"
                            value={password}
                            onChange={e => {
                              updateUserState("password", e);
                            }}
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group ">
                      <button
                        type="button"
                        className="btn btn-primary btn-lg btn-block login-button"
                        onClick={submitForm}
                      >
                        Login
                      </button>
                    </div>
                    <a href="/" className="pull-right need-help">
                      Forgot password?{" "}
                    </a>
                    <span className="clearfix" />
                  </form>
                </div>
              </div>
              <a href="/" className="text-center new-account">
                Create an account{" "}
              </a>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({ user: state.user });

const mapDispatchToProps = dispatch => {
  return {
    loginNewUser: data => dispatch(loginUser(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
