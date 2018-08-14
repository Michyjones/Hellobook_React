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
      </Fragment>
    );
  }
}
export default Home;
