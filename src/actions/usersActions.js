import {CREATE_USER_SUCCESS, ERRORHANDLER, LOGIN_USER_SUCCESS} from "./actionTypes";
import axios from 'axios';



const basePath = 'http://localhost:5000/api/v2';


export const createUser = (user) => {

    return (dispatch) => (
        axios.post(`${basePath}/auth/register`, user).then( user =>
            dispatch({type: CREATE_USER_SUCCESS, user})
        ).catch(error => {
            console.log('error', error.response.data);
            dispatch({type: ERRORHANDLER, error:error.response.data.Message || error.response.data.Error })
        })
    );
};
export const loginUser = (user) => {

    return (dispatch) => (
        axios.post(`${basePath}/auth/login`, user).then( user => {
                localStorage.setItem("token", user.data.token)
                dispatch({type: LOGIN_USER_SUCCESS, user})

            }
        ).catch(error => {
            console.log('error', error.response.data);

            dispatch({type: ERRORHANDLER, error:error.response.data.Message || error.response.data.Error })
        })
    );
};