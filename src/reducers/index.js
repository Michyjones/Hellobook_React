import {combineReducers} from 'redux';
import user from './usersReducers';
import book from './bookReducers';
import books from './booksReducer';




export default combineReducers({
    user,
    book,
    books,

})