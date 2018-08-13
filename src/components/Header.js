import React, { Component, Fragment } from "react";
import "../App.css";
import $ from "jquery";
import { Link } from "react-router-dom";
import { logoutUser } from "../actions/Logout";
import { connect } from "react-redux";

// This component render the navbar

class Header extends Component {
  _logoutUser = () => {
    const token = this.props.user.token;
    this.props.logoutUser({ token });
  };

  render() {
    $(function() {
      $(".dropdown").hover(
        function() {
          $(".dropdown-menu", this)
            .stop(true, true)
            .fadeIn("fast");
          $(this).toggleClass("open");
          $("b", this).toggleClass("caret caret-up");
        },
        function() {
          $(".dropdown-menu", this)
            .stop(true, true)
            .fadeOut("fast");
          $(this).toggleClass("open");
          $("b", this).toggleClass("caret caret-up");
        }
      );
    });

    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
              aria-expanded="false"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <a className="navbar-brand">Hello Books</a>
          </div>

          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav">
              <li className="active">
                <Link to="/home">Home</Link>
              </li>
              {this.props.user.loggedIn && (
                <li>
                  <Link to="/view">View Books</Link>
                </li>
              )}
            </ul>
          </div>

          <ul className="nav navbar-nav navbar-right">
            {!this.props.user.loggedIn && (
              <Fragment>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/register">Register</Link>
                </li>
              </Fragment>
            )}
            {this.props.user.loggedIn && (
              <li className="dropdown">
                <a
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Profile <span className="fa fa fa-user" />
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/history">Borrow History</Link>
                  </li>
                  <li>
                    <Link to="/changepassword">Change Password</Link>
                  </li>
                  <li>
                    <a href="/view">View Books</a>
                  </li>
                  <li role="separator" className="divider" />
                  <li>
                    <button className="align-center" onClick={this._logoutUser}>
                      Logout
                    </button>
                  </li>
                </ul>
              </li>
            )}
          </ul>
        </div>
      </nav>
    );
  }
}

// Map store state to props
const mapStateToProps = state => ({ user: state.user });

const mapDispatchToProps = dispatch => {
  return {
    logoutUser: data => dispatch(logoutUser(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
