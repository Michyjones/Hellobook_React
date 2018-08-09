import "bootstrap/dist/css/bootstrap.min.css";
import React, {Component} from "react";
import "../styles/Login.css";


class NoMatch extends Component{
render() {
    return(
<div class="container">
  <div class="row">
    <div class="span12">
      <div class="hero-unit center">
          <h1>Page Not Found <small><font face="Tahoma" color="red">Error 404</font></small></h1>
          <br />
          <p><b>Or you could just press this neat little button:</b></p>
          <a href="/home" class="btn btn-large btn-info"><i class="icon-home icon-white"></i> Take Me Home</a>
        </div>
        <br />
        <br />
        <p></p>
    </div>
  </div>
</div>
    );
};
}
export default NoMatch;
