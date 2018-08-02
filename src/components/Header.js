import React, { Component } from "react";
import '../App.css';
import {Navbar, Nav, NavItem} from 'react-bootstrap'
import { Link } from "react-router-dom";


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
              <Link to="/">Logout</Link>
            
              </NavItem>

          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </div>
    );
  }
}

export default Header;
