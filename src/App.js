import React, { Component } from "react";
import "./img/andela.png";
import "./App.css";
import "./styles/Login.css";
import "./styles/home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";
import Register from "./components/RegisterForm";
import Login from "./components/LoginForm";
import { Switch, BrowserRouter as Router, Route} from "react-router-dom";
import {Provider} from "react-redux";
import {store }from "./store";
import Views from "./components/viewbooks";
import Home from "./components/home";
import addbook from "./components/addbook";
import editbook from "./components/editbook";
import singleBook from "./components/singleBook";
import History from "./components/History";
import NoMatch from "./components/NoMatch";
import RequestPassword from "./components/RequestPassword";
import PasswordReset from "./components/ResetPassword";



class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          {/*<Header />*/}
          <Router>
            <div>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/register" component={Register} />
                <Route path="/login" component={Login} />
                <Route path="/view" component={Views}/>
                <Route path="/home" component={Home}/>
                <Route path="/addbook" component={addbook}/>
                <Route path="/editbook/:id" component={editbook}/>
                <Route exact path="/book/:id" component={singleBook}/>
                <Route path="/history" component={History}/>
                <Route path="/requestpassword" component={RequestPassword}/>
                <Route path="/changepassword" component={PasswordReset}/>
                <Route path="*" component={NoMatch}/>
                  
              </Switch>
            </div>
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
