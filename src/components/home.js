import "bootstrap/dist/css/bootstrap.min.css";
import React, {Component, Fragment} from "react";
// import Header from "./Header";



class Home extends Component{
    render(){
        return(
            <Fragment>


                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Category</a>
                            <ul>
                                <li><a href="/login">History</a></li>
                                <li><a href="#">Art</a>
                                    <ul>
                                        <li><a href="#">Craft</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">Recipes</a>
                                    <ul>
                                        <li><a href="#">Traditional meals</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">Software Dev</a></li>
                            </ul>
                        </li>
                        <li>
                            
                            <a href="/login">Login</a>
                            

                        </li>
                        <li className="nav pull-right"><a href="/">Register</a></li>

                    </ul>
                </nav>

                <div className="welcome">
                    Hello Books Library
                </div>

            </Fragment>


        );
    }


    }
export default Home;