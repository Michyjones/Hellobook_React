import { CREATE_USER_SUCCESS }from '../actions/actionTypes';
import { ERRORHANDLER}from '../actions/actionTypes';
import { LOGIN_USER_SUCCESS, LOGOUT_SUCCESS}from '../actions/actionTypes';
const initialState = {
    loggedIn: localStorage.getItem('loggedIn'),
    token: localStorage.getItem('token')
};

export default(state = initialState, action) => {
    switch(action.type){

        case CREATE_USER_SUCCESS:
            return {
                ...state,
                details: action.user
            };

        case LOGIN_USER_SUCCESS:
            const {token, IsAdmin} = action.user;
            const newState = Object.assign({}, state, {loggedIn: true, details: token, IsAdmin});
            return newState;

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