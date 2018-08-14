import {combineReducers} from "redux";
import user from "./usersReducers";
import book from "./bookReducers";
import books from "./booksReducer";
import history from "./historyReducers";
import borrowReturn from "./borrowreturnReducers";




export default combineReducers({
  user,
  book,
  books,
  history,
  borrowReturn

});