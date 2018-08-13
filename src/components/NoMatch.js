import "bootstrap/dist/css/bootstrap.min.css";
import React, {Component} from "react";
import "../styles/Login.css";

// this component renders the page not found
class NoMatch extends Component{
  render() {
    return(
      <div className="container">
        <div className="row">
          <div className="span12">
            <div className="hero-unit center">
              <h1>Page Not Found <small><font face="Tahoma" color="red">Error 404</font></small></h1>
              <br />
              <p><b>Or you could just press this neat little button:</b></p>
              <a href="/home" className="btn btn-large btn-info"><i className="icon-home icon-white"></i> Take Me Home</a>
            </div>
            <br />
            <br />
            <p></p>
          </div>
        </div>
      </div>
    );
  }
}
export default NoMatch;
