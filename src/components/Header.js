import React, { Component } from "react";
import '../App.css';
import {Navbar, Nav} from 'react-bootstrap'
import { Link } from "react-router-dom";


class Header extends Component {
  render() {
    return (

        <Navbar default collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/home">Hello Books</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
              <li><Link to="/home">Home</Link>
              </li>

              <li><Link to="/view">About</Link>
              </li>
          </Nav>
          <Nav pullRight>
              <li><Link to="/login">Login</Link>
              </li>

              <li><Link to="/">Register</Link>
              </li>

          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
