import React, { Component, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Login.css";
import Header from "./Header";
import { getUserHistory } from "../actions/bookActions";
import { connect } from "react-redux";
import  JwPagination from "jw-react-pagination";

class History extends Component {
  constructor() {
    super();
    this.state={
      pageBooks:[]
  };
  }
  componentDidMount() {
    console.log("sdgsdgfsdfsd");
    this.props.getUserHistory();
  }
    _onchangeBookpage= pageBooks => {
      this.setState({pageBooks})
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
                          <th className="hidden-xs">User Email</th>
                          <th> Date Borrowed</th>
                          <th className="hidden-xs">Date Returned</th>
                          <th className="hidden-xs">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.state.pageBooks.map(history => (
                          <tr>
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
                  <JwPagination
                                        items={this.props.history.history}
                                        pageSize={5}
                                        onChangePage ={this._onchangeBookpage}
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
  return { history: state.history };
};

const mapDispatchToProps = dispatch => ({
  getUserHistory: () => getUserHistory(dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(History);
