import {
  ADD_BOOK_SUCCESS,
  EDIT_BOOK_SUCCESS,
  ERRORHANDLER,
  FETCHING_BOOKS,
  FETCHING_BOOKS_ERROR,
  FETCHING_BOOKS_SUCCESS,
  GET_SINGLE_BOOK,
  GET_HISTORY,
  GET_HISTORY_SUCCESS,
  FETCHING_HISTORY_ERROR,
  DELETE_BOOK_SUCCESS
} from "./actionTypes";
import axios from "axios";
import swal from "sweetalert";
import { redirect } from "../helpers/history";

const basePath = process.env.REACT_APP_base_path;
const token = localStorage.getItem("token");

// This function  Adds a book in the library
export const addBook = book => {
  return dispatch => {
    let token = localStorage.getItem("token");

    axios
      .post(`${basePath}/books`, book, {
        headers: { Authorization: "Bearer " + token }
      })
      .then(book => dispatch({ type: ADD_BOOK_SUCCESS, book }))
      .catch(error => {
        dispatch({
          type: ERRORHANDLER,
          error: error.response.data.Message || error.response.data.Error
        });
      });
  };
};

// This function  edits an existing  book in the library
export const editBook = data => {
  return dispatch => {
    let token = localStorage.getItem("token");
    axios
      .put(`${basePath}/books/${data.book_id}`, data.book, {
        headers: { Authorization: "Bearer " + token }
      })
      .then(result => {
        const Message = result.data.Message;
        dispatch({ type: EDIT_BOOK_SUCCESS, Message });
        swal("Success", Message);
      })
      .catch(error => {
        if (error.response.status === 404) {
          dispatch({
            type: ERRORHANDLER,
            data: error.response.data.Message || error.response.data.Error
          });
        }
      });
  };
};
// This function  deletess an existing  book in the library
export const deleteBook = data => {
  return dispatch => {
    let token = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    axios
      .delete(`${basePath}/books/${data.book_id}`, {}, {})
      .then(result => {
        const Message = result.data.Message;
        dispatch({ type: DELETE_BOOK_SUCCESS, Message });
        swal("Success", Message);
        redirect("/view");
      })
      .catch(error => {
        const Message = error.response.data.Message;
        if (error.response.status === 404) {
          dispatch({
            type: ERRORHANDLER,
            data: error.response.data.Message || error.response.data.Error
          });
          swal("Error", Message);
        }
        if (error.response.status === 409) {
          dispatch({
            type: ERRORHANDLER,
            data: error.response.data.Message || error.response.data.Error
          });
          swal("Error", Message);
        }
      });
  };
};
// This function  retrieves all the books in the library
export const fetchBooks = dispatch => {
  dispatch({ type: FETCHING_BOOKS });
  let token = localStorage.getItem("token");
  axios
    .get(`${basePath}/books`, { headers: { Authorization: "Bearer " + token } })
    .then(response => {
      dispatch({ type: FETCHING_BOOKS_SUCCESS, data: response.data });
    })
    .catch(error => {
      dispatch({
        type: FETCHING_BOOKS_ERROR,
        data: error.response.data || error.response.data.Error
      });
    });
};

// This function  retrieves a single book in the library
export const getSingleBook = data => {
  return dispatch => {
    axios
      .get(`${basePath}/books/${data.book_id}`, {
        headers: { Authorization: "Bearer " + data.token }
      })
      .then(res => {
        dispatch({ type: GET_SINGLE_BOOK, data: res.data[0] });
      })
      .catch(error => {
        dispatch({
          type: ERRORHANDLER,
          error: error.response.data.Message || error.response.data.Error
        });
      });
  };
};
// This function  retrieves all borrowed books by a user in the library
export const getUserHistory = dispatch => {
  dispatch({ type: GET_HISTORY });
  axios
    .get(`${basePath}/users/books`, {
      headers: { Authorization: "Bearer " + token }
    })
    .then(response => {
      dispatch({ type: GET_HISTORY_SUCCESS, data: response.data });
    })
    .catch(error => {
      dispatch({
        type: FETCHING_HISTORY_ERROR,
        data: error.response.data || error.response.data.Error
      });
    });
};
