import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component, Fragment } from "react";
import Header from "./Header";

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Header />

        <div className="welcome">Hello Books Library</div>
        <div className="container">
          <p>
            Hello_Books API is an application that helps manage a library and
            its processes like stocking, tracking and renting books. With this
            application users are able to find and rent books. The application
            also has an admin section where the admin can do things like add
            books, delete books and modify book information. ##Features ##User
            Features 1.Users can create an account and log in 2.Users can view
            books. 3.Only Authenticated Users can borrow and return books.
            4.Only admin users should be able to add, modify and delete book
            information 5.Users can view their profile and their borrowing
            history ##Admin Features Admin can add a book to the system Admin
            can update book information in the system Admin remove a book from
            the system Install Instructions Pre-requisites: Node v10.4.0 Clone
            this repository https://github.com/brian-mecha/hello-books-React.git
            Install the apps dependencies by running npm install Open a terminal
            and cd into the cloned repository #Run npm start #Test npm test More
            info
          </p>
        </div>
      </Fragment>
    );
  }
}
export default Home;
