import React, { Component, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Login.css";
import Header from "./Header";
import { getUserHistory } from "../actions/bookActions";
import { connect } from "react-redux";
import JwPagination from "jw-react-pagination";
import { redirect } from "../helpers/history";

class History extends Component {
  constructor() {
    super();
    this.state = {
      pageBooks: []
    };
  }
  componentDidMount() {
    this.props.getUserHistory();
    if (!this.props.user.loggedIn) {
      redirect("/login");
    }
  }
  _onchangeBookpage = pageBooks => {
    this.setState({ pageBooks });
  };

  render() {
    const { history } = this.props.history || [];
    return (
      <Fragment>
        <Header />
        <div className="container">
          <div className="row">
            <p />
            <h1>
              <center>Book History</center>
            </h1>
            <center>
              <p>
                <strong>
                  This are the books you have Borrowed from our catlog from the
                  day you registered with us. All the book history is available
                  here.
                </strong>
              </p>
              <p />
              <p />
            </center>

            <div className="col-md-10 col-md-offset-1">
              <div className="panel panel-default panel-table">
                <div className="panel-heading">
                  <div className="row">
                    <div className="col col-xs-6">
                      <h3 className="panel-title">Book History</h3>
                    </div>
                  </div>
                </div>
                <div className="panel-body">
                  {history.loading ? (
                    <h1 />
                  ) : (
                    <table className="table table-striped table-bordered table-list">
                      <thead>
                        <tr>
                          <th>Book Name</th>
                          <th>Category</th>
                          <th> Date Borrowed</th>
                          <th className="hidden-xs">Date Returned</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.state.pageBooks.map((history, index) => (
                          <tr key={index}>
                            <td>{history.book_name}</td>
                            <td>{history.category}</td>
                            <td>{history.date_borrowed}</td>

                            <td className="hidden-xs">
                              {history.date_returned}
                            </td>
                            <td>
                              {history.returned ? (
                                <b className="text-success">Returned</b>
                              ) : (
                                <b className="text-danger">Not Returned</b>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                  <JwPagination
                    items={this.props.history.history}
                    pageSize={5}
                    onChangePage={this._onchangeBookpage}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    history: state.history,
    user: state.user
  };
};

const mapDispatchToProps = dispatch => ({
  getUserHistory: () => getUserHistory(dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(History);
