import {
  BORROW_BOOK_SUCCESS,
  BORROW_BOOK_FAILED,
  RETURN_BOOK_SUCCESS,
  ERRORHANDLER
} from "../actions/actionTypes";

const initialState = { details: {} };
// borrow and return reducers
export default (state = initialState, action) => {
  switch (action.type) {
    case BORROW_BOOK_SUCCESS:
      return {
        ...state,
        details: action.data
      };

    case BORROW_BOOK_FAILED:
      return {
        ...state,
        message: action.data.Message
      };
    case RETURN_BOOK_SUCCESS:
      return {
        ...state,
        details: action.data
      };

    case ERRORHANDLER:
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
};
