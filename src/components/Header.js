import React, { Component } from "react";
import "../App.css";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import{ logoutUser } from '../actions/Logout';
import { connect } from "react-redux";

class Header extends Component {
  render() {
    return (
      <div>
        <Navbar default collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/home">Hello Books</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem>
                <Link to="/home">Home</Link>
              </NavItem>
              <NavItem>
                <Link to="/view">About</Link>
              </NavItem>
            </Nav>
            <Nav pullRight>
              <NavItem>
                <Link to="/login">Login</Link>
              </NavItem>
              <NavItem>
                <Link to="/">Register</Link>
                <button onClick={this.props.logoutUser}>Logout</button>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = state => ({ user: state.user });

const mapDispatchToProps = dispatch => {
  return {
    logoutUser: ()=> dispatch(logoutUser())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
