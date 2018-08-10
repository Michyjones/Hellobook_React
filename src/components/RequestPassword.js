import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { requestReset } from "../actions/ResetPassword";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Login.css";
import Header from "./Header";

/**
 * This component render page for users to request password reset
 */
class RequestPassword extends Component {
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

  /**
   * Makes a server request to send an password reset link into user email
   * @param {string} email
   * @return {string} message
   */
  _requestReset = e => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    this.props.requestReset({ email });
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
                <h3>Request Password Reset</h3>
                <h5>Enter your email.</h5>
                <hr />

                <form
                  className="form-horizontal"
                  method="post"
                  onSubmit={this._requestReset}
                >
                  <div className="form-group">
                    <label htmlFor="email" className="cols-sm-2 control-label">
                      Email
                    </label>
                    <div className="cols-sm-6">
                      <div className="input-group">
                        <span className="input-group-addon">
                          <i className="fa fa-envelope fa" aria-hidden="true" />
                        </span>
                        <input
                          type="text"
                          name="email"
                          className="form-control"
                          placeholder="Enter your Email"
                          required
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
  requestReset: data => dispatch(requestReset(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RequestPassword);
