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
  FETCHING_HISTORY_ERROR
} from "./actionTypes";
import axios from "axios";

const basePath = "http://localhost:5000/api/v2";
const token = localStorage.getItem("token");

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
      })
      .catch(error => {
        if (error.response.status === 404) {
          console.log(error.response);
          dispatch({
            type: ERRORHANDLER,
            data: error.response.data.Message || error.response.data.Error
          });
        }
      });
  };
};
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
        // dispatch({type: ERRORHANDLER, error: error.response.data.Message || error.response.data.Error})
      });
  };
};
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
