import React, { Component, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import "../styles/Login.css";
import { getSingleBook } from "../actions/bookActions";
import { borrowBook, returnBook } from "../actions/BorrowReturnActions";

import {
  Dropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle
} from "reactstrap";
import { connect } from "react-redux";
import Header from "./Header";

class singleBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book: {
        serial_no: "",
        book_name: "",
        category: ""
      },
      dropdownOpen: false
    };
  }

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  };
  _getSingleBook = () => {
    const book_id = this.props.match.params.id;
    const token = localStorage.getItem("token");
    // let book = this.props;
    this.props.getSingleBook({ book_id, token });
  };
  _borrowBook = () => {
    // const book_id = this.props.book.details.id;
    const book_id = this.props.match.params.id;
    this.props.borrowBook({ book_id });
  };
  _returnBook = () => {
    const book_id = this.props.match.params.id;
    this.props.returnBook({ book_id });
  };
  updateBookState = (field, e) => {
    let newBookState = Object.assign({}, this.state.book);
    newBookState[field] = e.target.value;
    this.setState({ book: newBookState });
  };

  submitForm = e => {
    e.preventDefault();
    this.props.editNewBook(this.state.book);
  };
  componentDidMount() {
    this._getSingleBook();
  }

  render() {
    const book = this.props.book.details;

    return (
      <Fragment>
        <Header />
        <div className="container">
          {book ? (
            <Fragment>
              <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle caret color="success">
                  Filter History
                </DropdownToggle>
                <DropdownMenu>
                  <div>
                    <DropdownItem onClick={this._borrowBook}>
                      Borrow Book
                    </DropdownItem>
                    <DropdownItem onClick={this._returnBook}>
                      Returned Book
                    </DropdownItem>
                  </div>
                </DropdownMenu>
              </Dropdown>
              <div className="row">
                <div className="col-sm-6">
                  <table class="table table-striped">
                    <thead>
                      <tr>
                        <td>Book ID</td>
                        <td>{book.id}</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Book Name</td>
                        <td>{book.book_name}</td>
                      </tr>
                      <tr>
                        <td>Serial Number</td>
                        <td>{book.serial_no}</td>
                      </tr>
                      <tr>
                        <td>Category</td>
                        <td>{book.category}</td>
                      </tr>
                      <tr>
                      <td>Status</td>
                  {" "}
                  {book.availabilty ? (
                    <b className="text-success">Available</b>
                  ) : (
                    <b className="text-danger">Not Available</b>
                  )}
                </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
            </Fragment>
          ) : (
            <h4>Loading ...</h4>
          )}
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({ book: state.book });

const mapDispatchToProps = dispatch => ({
  getSingleBook: data => dispatch(getSingleBook(data)),
  borrowBook: data => dispatch(borrowBook(data)),
  returnBook: data => dispatch(returnBook(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(singleBook);
