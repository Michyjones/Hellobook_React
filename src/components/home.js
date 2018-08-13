import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component, Fragment } from "react";
import Header from "./Header";

// This component render home page
class Home extends Component {
  render() {
    return (
      <Fragment>
        <Header />

        <div className="welcome">Hello Books Library</div>
        <div className="container">
          <p>
            <strong>
              Hello_Books API is an application that helps manage a library and
              its processes like stocking, tracking and renting books. With this
              application users are able to find and rent books. The application
              also has an admin section where the admin can do things like add
              books, delete books and modify book information.
            </strong>
            <strong>Features </strong>
            <br />
            1.Users can create an account and log in <br />
            2.Users can view books. <br />
            3.Only Authenticated Users can borrow and return books.
            <br />
            4.Only admin users should be able to add, modify and delete book
            information <br />
            5.Users can view their profile and their borrowing history
            <br />
          </p>
        </div>
      </Fragment>
    );
  }
}
export default Home;
