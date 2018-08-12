import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { passwordReset } from "../actions/ResetPassword";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Login.css";
import Header from "./Header";
import { redirect } from "../helpers/history";


/**
 * This component render page for users to request password reset
 */
class PasswordReset extends Component {
  constructor() {
    super();
    this.state = {
      visible: true
    };
  }

  /**
   * The function closes the alert box
   */
  _onDismiss = () => {
    this.setState({
      visible: false
    });
  };
  componentDidMount() {
    if (!this.props.user.loggedIn) {
      redirect("/login");
    }
  }

  /**
   * Makes a server request to send an password reset link into user email
   * @param {string} email
   * @return {string} message
   */
  _resetPassword = e => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const old_password = e.target.elements.old_password.value;
    const new_password = e.target.elements.new_password.value;
    const confirm_password = e.target.elements.confirm_new_password.value;
    this.props.passwordReset({ old_password, new_password, confirm_password, token });
    this.forceUpdate();
  };

  render() {
    return (
      <Fragment>
        <Header />

        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-4 col-md-offset-4">
              <div className="loginform">
                <h3>Change Password </h3>
                <h4>Change Your current password</h4>
                <hr />

                <form
                  className="form-horizontal"
                  method="post"
                  onSubmit={this._resetPassword}
                >
                  <div className="form-group">
                    <label
                      htmlFor="old_password"
                      className="cols-sm-2 control-label"
                    >
                          Old Password
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
                          name="old_password"
                          className="form-control"
                          placeholder="Enter Old Password"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label
                      htmlFor="new_password"
                      className="cols-sm-2 control-label"
                    >
                        New Password
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
                          name="new_password"
                          className="form-control"
                          placeholder="Enter New Password"
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
                        Confirm Password
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
                          name="confirm_new_password"
                          className="form-control"
                          placeholder="Confirm New Password"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group pull-right" id="submit">
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }

  _handleSubmit(event) {
    event.preventDefault();
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = dispatch => ({
  passwordReset: data => dispatch(passwordReset(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PasswordReset);
