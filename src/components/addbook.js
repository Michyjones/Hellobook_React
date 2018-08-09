import React, { Component, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Login.css";
import { addBook } from "../actions/bookActions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Header from "./Header";

class Createbook extends Component {
  state = {
    book: {
      serial_no: "",
      book_name: "",
      category: "",
      availabilty: true
    }
  };

  updateBookState = (field, e) => {
    let newBookState = Object.assign({}, this.state.book);
    newBookState[field] = e.target.value;
    this.setState({ book: newBookState });
  };

  submitForm = e => {
    e.preventDefault();
    this.props.addNewBook(this.state.book);
    this.props.history.push("/view");
  };

  render() {
    const { updateBookState, submitForm } = this;
    const { serial_no, book_name, category } = this.state.book;
    return (
      <Fragment>
        <Header />
        <div className="container">
          <div className="main-login main-center">
            <div className="form-horizontal">
              {this.props.book.error && (
                <div className="alert alert-danger" role="alert">
                  <center>{this.props.book.error}</center>
                </div>
              )}
              <div className="form-group">
                <label htmlFor="book">Serial No:</label>
                <div className="cols-sm-10">
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="fa fa-list-ol" aria-hidden="true" />
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      value={serial_no}
                      onChange={e => {
                        updateBookState("serial_no", e);
                      }}
                      placeholder="Enter Serial number"
                      id="book"
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label className="cols-sm-2 control-label">Book Name</label>
                <div className="cols-sm-10">
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="fa fa-book" aria-hidden="true" />
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      value={book_name}
                      onChange={e => {
                        updateBookState("book_name", e);
                      }}
                      placeholder="Enter Book name"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label className="cols-sm-2 control-label">Category</label>
                <div className="cols-sm-10">
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="fa fa-cubes" aria-hidden="true" />
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      value={category}
                      onChange={e => {
                        updateBookState("category", e);
                      }}
                      placeholder="Enter Book Category"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="form-group ">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={submitForm}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({ book: state.book });

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      addNewBook: addBook
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Createbook);
