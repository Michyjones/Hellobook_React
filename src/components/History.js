import React, { Component, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Login.css";
import Header from "./Header";
import { getUserHistory } from "../actions/bookActions";
import { connect } from "react-redux";

class History extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    console.log("sdgsdgfsdfsd");
    this.props.getUserHistory();
  }
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
                  </div>
                </div>
                <div className="panel-body">
                  {history.loading ? (
                    <h1 />
                  ) : (
                    <table className="table table-striped table-bordered table-list">
                      <thead>
                        <tr>
                          <th>Book id</th>
                          <th className="hidden-xs">User Email</th>
                          <th> Date Borrowed</th>
                          <th className="hidden-xs">Date Returned</th>
                          <th className="hidden-xs">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {history.map(history => (
                          <tr>
                            <td>{history.book_id}</td>

                            <td>{history.user_email}</td>
                            <td>{history.date_borrowed}</td>

                            <td>{history.date_returned}</td>
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
  return { history: state.history };
};

const mapDispatchToProps = dispatch => ({
  getUserHistory: () => getUserHistory(dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(History);
