import {CREATE_USER_SUCCESS, ERRORHANDLER, LOGIN_USER_SUCCESS} from "./actionTypes";
import axios from "axios";
import { redirect } from "../helpers/history";



const basePath =process.env.REACT_APP_base_path;

//This function register a new user to the library
 
export const createUser = (user) => {

  return (dispatch) => (
    axios.post(`${basePath}/auth/register`, user).then( user => {
      dispatch({type: CREATE_USER_SUCCESS, user});
      redirect("/login");

    }).catch(error => {
      dispatch({type: ERRORHANDLER, error:error.response.data.Message || error.response.data.Error });
    })
  );
};

//This function logs in  a user into the library
export const loginUser = user => {
  
  return dispatch => {
    return axios.post(`${basePath}/auth/login`, user).then( user => {
      const token = user.data.token;
      const IsAdmin = user.data.IsAdmin;
      localStorage.setItem("token", token);
      localStorage.setItem("IsAdmin", IsAdmin);
      localStorage.setItem("loggedIn", true);
      dispatch({type: LOGIN_USER_SUCCESS, user: {token, IsAdmin}});
      redirect("/view");
    }
    ).catch(error => {
      dispatch({type: ERRORHANDLER, error:error.response.data.Message || error.response.data.Error });
    });
  };
};