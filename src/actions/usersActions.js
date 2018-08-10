import {CREATE_USER_SUCCESS, ERRORHANDLER, LOGIN_USER_SUCCESS} from "./actionTypes";
import axios from 'axios';
import { redirect } from "../helpers/history"


const basePath =process.env.REACT_APP_base_path;


export const createUser = (user) => {

    return (dispatch) => (
        axios.post(`${basePath}/auth/register`, user).then( user => {
            dispatch({type: CREATE_USER_SUCCESS, user});
            redirect("/login");

        }).catch(error => {
        console.log(error);
        dispatch({type: ERRORHANDLER, error:error.response.data.Message || error.response.data.Error })
        })
    );
};
export const loginUser = (user) => {

    return dispatch => {
        return axios.post(`${basePath}/auth/login`, user).then( user => {console.log(user)
                const token = user.data.token;
                const IsAdmin = user.data.IsAdmin;
                localStorage.setItem("token", token)
                // localStorage.setItem("IsAdmin", IsAdmin)
                localStorage.setItem("loggedIn", true)
                dispatch({type: LOGIN_USER_SUCCESS, user: {token, IsAdmin}})
            }
        ).catch(error => {
            console.log(error);
            dispatch({type: ERRORHANDLER, error:error.response.data.Message || error.response.data.Error })
        })
    };
};