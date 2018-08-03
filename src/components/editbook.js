import React, { Component, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Login.css";
import { editBook, getSingleBook } from "../actions/bookActions";
import { connect } from "react-redux";
import Header from "./Header";

class Editbook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edited: {}
    };
  }

  _getSingleBook = () => {
    const book_id = this.props.match.params.id;
    const token = localStorage.getItem("token");
    this.setState({ book_id: book_id });
    this.props.getSingleBook({ book_id, token });
  };

  submitForm = e => {
    e.preventDefault();
    // console.log(this.state.book_id);
    const book = {};
    const book_id = this.props.match.params.id;
    book["serial_no"] = this.value("serial_no");
    book["category"] = this.value("category");
    book["book_name"] = this.value("book_name");
    console.log("tfsggagerueuw", book);
    this.props.editNewBook({ book, book_id });
    this.props.history.push("/view");
  };

  componentDidMount() {
    this._getSingleBook();
  }
  Changes = e => {
    const val = {};
    const edited = this.state.edited;
    edited[e.target.name] = true;
    val["edited"] = edited;
    val[e.target.name] = e.target.value;
    this.setState(val);
  };

  value = name => {
    if (this.state.edited[name]) {
      return this.state[name];
    }
    return this.props.book.details[name];
  };
  render() {
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
                      name="serial_no"
                      className="form-control"
                      value={this.value("serial_no")}
                      onChange={this.Changes}
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
                      name="book_name"
                      className="form-control"
                      value={this.value("book_name")}
                      onChange={this.Changes}
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
                      name="category"
                      value={this.value("category")}
                      onChange={this.Changes}
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
                  onClick={this.submitForm}
                >
                  Update
                </button>
                <button pullRight type="button" className="btn btn-danger">
                  Delete
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
  return {
    editNewBook: data => dispatch(editBook(data)),
    getSingleBook: data => dispatch(getSingleBook(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Editbook);
