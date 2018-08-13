import React, { Component, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Login.css";
import { redirect } from "../helpers/history";
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

// This component renders to the single book page
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

  // This send request to get  a single book on the library
  _getSingleBook = () => {
    const book_id = this.props.match.params.id;
    const token = localStorage.getItem("token");
    this.props.getSingleBook({ book_id, token });
  };

  // This send request to borrow book fromthe library
  _borrowBook = () => {
    const book_id = this.props.match.params.id;
    this.props.borrowBook({ book_id });
  };
  // This send request to returns a borrowed to the library

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
  // This protects the page from been assessed by unlogged in users
  componentDidMount() {
    if (!this.props.user.loggedIn) {
      redirect("/login");
    }
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
              <div id="rowj">
                <div className="row">
                  <div className="col-sm-8">
                    <div style={{ backgroundColor: "white" }}>
                      <table className="table table-bordered">
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">Book Name</th>
                            <th scope="col">serial number</th>
                            <th scope="col">Category</th>
                            <th scope="col">Status</th>
                            <th scope="col">
                              <Dropdown
                                isOpen={this.state.dropdownOpen}
                                toggle={this.toggle}
                              >
                                <DropdownToggle caret color="success">
                                  Book Actions
                                </DropdownToggle>

                                <DropdownMenu>
                                  {book.availabilty ? (
                                    <DropdownItem onClick={this._borrowBook}>
                                      Borrow Book
                                    </DropdownItem>
                                  ) : (
                                    <DropdownItem onClick={this._returnBook}>
                                      Return Book
                                    </DropdownItem>
                                  )}
                                </DropdownMenu>
                              </Dropdown>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">{}</th>
                            <td>{book.book_name}</td>
                            <td>{book.serial_no}</td>
                            <td>{book.category}</td>
                            <td>
                              {" "}
                              {book.availabilty ? (
                                <b className="text-success">Available</b>
                              ) : (
                                <b className="text-danger">Not Available</b>
                              )}
                            </td>
                            <td />
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
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
// Map store state to props
const mapStateToProps = state => ({ book: state.book, user: state.user });

const mapDispatchToProps = dispatch => ({
  getSingleBook: data => dispatch(getSingleBook(data)),
  borrowBook: data => dispatch(borrowBook(data)),
  returnBook: data => dispatch(returnBook(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(singleBook);
