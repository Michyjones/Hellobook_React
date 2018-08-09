import {
  ADD_BOOK_SUCCESS,
  ERRORHANDLER,
  EDIT_BOOK_SUCCESS,
  GET_SINGLE_BOOK,
  DELETE_BOOK_SUCCESS
} from "../actions/actionTypes";

const initialState = { details: {} };

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_SINGLE_BOOK:
      return {
        ...state,
        details: action.data
      };

    case ADD_BOOK_SUCCESS:
      return {
        ...state,
        details: action.book
      };

    case EDIT_BOOK_SUCCESS:
      return {
        ...state,
        // details: action.book
        message: action.Message
      };
      case DELETE_BOOK_SUCCESS:
      return {
        ...state,
        // details: action.book
        message: action.Message
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
