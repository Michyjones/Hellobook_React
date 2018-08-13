import React, { Component, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Login.css";
import Header from "./Header";
import { fetchBooks } from "../actions/bookActions";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import JwPagination from "jw-react-pagination";
import { redirect } from "../helpers/history";

// This component renders view all books page
class Views extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageBooks: []
    };
  }
  // This protects the page from been assessed by unlogged in users
  componentDidMount() {
    if (!this.props.user.loggedIn) {
      redirect("/login");
    }
    this.props.fetchBooks();
  }
  _onchangeBookpage = pageBooks => {
    this.setState({ pageBooks });
  };
  render() {
    const { books } = this.props;
    return (
      <Fragment>
        <Header />
        <div className="container">
          <div className="row">
            <p />
            <h1>
              <center>Available books in the store</center>
            </h1>
            <center>
              <p>
                Edit book information and add the the books that are not in the
                library. Also delete the outdated copies from the library{" "}
              </p>
              <p>
                Inform us about the book that you would like to be in the store
                and its not available at the moment
              </p>
              <p />
              <p />
            </center>

            <div className="col-md-10 col-md-offset-1">
              <div className="panel panel-default panel-table">
                <div className="panel-heading">
                  <div className="row">
                    <div className="col col-xs-6">
                      <h3 className="panel-title">Available books</h3>
                    </div>
                    {this.props.user.IsAdmin && (
                      <div className="col col-xs-6 text-right">
                        <Link to="/addbook">
                          <button type="button" className="btn btn-primary">
                            Add New Book
                          </button>
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
                <div className="panel-body">
                  {books.loading ? (
                    <h1 />
                  ) : (
                    <table className="table table-striped table-bordered table-list">
                      <thead>
                        <tr>
                          <th>Status</th>
                          <th className="hidden-xs">Serial No</th>
                          <th> Book Name</th>
                          <th className="hidden-xs">Category</th>
                          <th className="hidden-xs">Availability</th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.state.pageBooks.map(book => (
                          <tr key={book.id}>
                            <td>
                              <Link
                                to={`/book/${book.id}`}
                                className="btn btn-warning link"
                              >
                                Details <i className="fa fa-angle-right" />
                              </Link>
                            </td>
                            <td className="hidden-xs">{book.serial_no}</td>
                            <td>{book.book_name}</td>
                            <td className="hidden-xs">{book.category}</td>
                            <td className="hidden-xs">
                              {book.availabilty ? (
                                <b className="text-success">Available</b>
                              ) : (
                                <b className="text-danger">Not Available</b>
                              )}
                            </td>
                            <td>
                              {this.props.user.IsAdmin && (
                                <Link
                                  to={`/editbook/${book.id}`}
                                  className="btn btn-primary"
                                >
                                  Edit <i className="fa fa-edit" />
                                </Link>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
                <div className="panel-footer">
                  <div className="row">
                    <JwPagination
                      items={this.props.books.books}
                      pageSize={5}
                      onChangePage={this._onchangeBookpage}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  books: state.books,
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  fetchBooks: () => fetchBooks(dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Views);
