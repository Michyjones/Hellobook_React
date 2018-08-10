import React, { Component, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import { createUser } from "../actions/usersActions";
import { bindActionCreators } from "redux";
import Header from "./Header";

class Register extends Component {
  state = {
    user: {
      first_name: "",
      last_name: "",
      email: "",
      address: "",
      password: "",
      confirm_password: ""
    }
  };

  updateUserState = (field, e) => {
    let newUserState = Object.assign({}, this.state.user);
    newUserState[field] = e.target.value;
    this.setState({ user: newUserState });
  };

  submitForm = () => {
    this.props.createNewUser(this.state.user);
    this.props.history.push("/login");
  };

  render() {
    const { updateUserState, submitForm } = this;
    const {
      first_name,
      last_name,
      email,
      address,
      password,
      confirm_password
    } = this.state.user;
    return (
      <Fragment>
        <Header />
        <div className="container">
          <div className="main-login main-center">
            <div className="form-horizontal">
              {this.props.user.error && (
                <div className="alert alert-danger" role="alert">
                  <center>{this.props.user.error}</center>
                </div>
              )}
              <div className="form-group">
                <label className="cols-sm-2 control-label">First Name</label>
                <div className="cols-sm-10">
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="fa fa-user fa" aria-hidden="true" />
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      value={first_name}
                      onChange={e => {
                        updateUserState("first_name", e);
                      }}
                      placeholder="Enter your First Name"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label className="cols-sm-2 control-label">Last Name</label>
                <div className="cols-sm-10">
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="fa fa-user fa" aria-hidden="true" />
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      value={last_name}
                      onChange={e => {
                        updateUserState("last_name", e);
                      }}
                      placeholder="Enter your Last Name"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label className="cols-sm-2 control-label">Email</label>
                <div className="cols-sm-10">
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="fa fa-envelope fa" aria-hidden="true" />
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      value={email}
                      onChange={e => {
                        updateUserState("email", e);
                      }}
                      placeholder="Enter your Email"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label className="cols-sm-2 control-label">Address</label>
                <div className="cols-sm-10">
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="fa fa-users fa" aria-hidden="true" />
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      value={address}
                      onChange={e => {
                        updateUserState("address", e);
                      }}
                      placeholder="Enter your Address"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label className="cols-sm-2 control-label">Password</label>
                <div className="cols-sm-10">
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="fa fa-lock fa-lg" aria-hidden="true" />
                    </span>
                    <input
                      type="password"
                      className="form-control"
                      value={password}
                      onChange={e => {
                        updateUserState("password", e);
                      }}
                      placeholder="Enter your Password"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label className="cols-sm-2 control-label">
                  Confirm Password
                </label>
                <div className="cols-sm-10">
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="fa fa-lock fa-lg" aria-hidden="true" />
                    </span>
                    <input
                      type="password"
                      className="form-control"
                      value={confirm_password}
                      onChange={e => {
                        updateUserState("confirm_password", e);
                      }}
                      name="confirm"
                      id="confirm"
                      placeholder="Confirm your Password"
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
                  Register
                </button>
              </div>
              <div className="login-register">
                <a href="/login">Login</a>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({ user: state.user });

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      createNewUser: createUser
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
