import { CREATE_USER_SUCCESS } from "../actions/actionTypes";
import { ERRORHANDLER } from "../actions/actionTypes";
import {
  LOGIN_USER_SUCCESS,
  LOGOUT_SUCCESS,
  REQUEST_RESET_SUCCESS,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAIL
} from "../actions/actionTypes";
const initialState = {
  loggedIn: JSON.parse(localStorage.getItem("loggedIn")),
  token: localStorage.getItem("token"),
  IsAdmin: JSON.parse(localStorage.getItem("IsAdmin"))
};
// User authentication /reset and change password reducers
export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER_SUCCESS:
      return {
        ...state,
        details: action.user
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        loggedIn: true,
        token: action.user.token,
        IsAdmin: action.user.IsAdmin
      };

    case LOGOUT_SUCCESS:
      return {
        ...state,
        details: action.data.Message
      };

    case ERRORHANDLER:
      return {
        ...state,
        error: action.error
      };
    case REQUEST_RESET_SUCCESS:
      return {
        ...state,
        Message: action.data.Message
      };
    case RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        Message: action.data.Message
      };
    case RESET_PASSWORD_FAIL:
      return {
        ...state,
        Message: action.data.Message
      };
    default:
      return state;
  }
};
