import { CREATE_USER_SUCCESS }from '../actions/actionTypes';
import { ERRORHANDLER}from '../actions/actionTypes';
import { LOGIN_USER_SUCCESS, LOGOUT_SUCCESS}from '../actions/actionTypes';
const initialState = {};

export default (state = initialState, action) => {
    switch(action.type){

        case CREATE_USER_SUCCESS:
            
            return {
                ...state,
                details: action.user
            };

        case LOGIN_USER_SUCCESS:

            return {
                ...state,
                details: action.user
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

        default:
            return state;
    }
}