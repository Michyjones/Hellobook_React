import {BORROW_BOOK_SUCCESS,RETURN_BOOK_SUCCESS,ERRORHANDLER} from "./actionTypes";
import axios from "axios";
import { getSingleBook } from "../actions/bookActions";
import swal from "sweetalert";
import { redirect } from "../helpers/history";


const basePath =process.env.REACT_APP_base_path;

export const borrowBook = data => {
  return dispatch => {
    let token = localStorage.getItem("token");
    return axios
      .post(`${basePath}/users/books/${data.book_id}`,{},{
        headers: { Authorization: "Bearer " + token }
      })
      .then(result => {
        const Message = result.data.Message;
        dispatch({ type: BORROW_BOOK_SUCCESS, Message });
        dispatch(getSingleBook(data.book_id));
        swal("Success",Message);
        redirect("/history");
       
      })
      .catch(error => {
        const Message = error.response.data.Message;
        if (error.response.status === 404) {
          dispatch({
            type: ERRORHANDLER,
            data: error.response.data.Message || error.response.data.Error
          });
        }
        else if (error.response.status === 401) {
          dispatch({
            type: ERRORHANDLER,
            data: error.response.data.Message || error.response.data.Error
          });
        }
        else if (error.response.status === 400) {
          dispatch({
            type: ERRORHANDLER,
            data: error.response.data.Message || error.response.data.Error
          });
          swal( "Error",Message);

        }
      });
  };
};
export const returnBook = data => {
  return dispatch => {
    let token = localStorage.getItem("token");
    return axios
      .put(`${basePath}/users/books/${data.book_id}`,{},{
        headers: { Authorization: "Bearer " + token }
      })
      .then(result => {
        const Message = result.data.Message;
        dispatch({ type: RETURN_BOOK_SUCCESS, Message });
        swal("Success", Message);
        dispatch(getSingleBook(data.book_id));
        redirect("/history");
      })
      .catch(error => {
        const Message = error.response.data.Message;
        if (error.response.status === 404) {
          dispatch({
            type: ERRORHANDLER,
            data: error.response.data.Message || error.response.data.Error
              
          });
        }
        else if (error.response.status === 401) {
          dispatch({
            type: ERRORHANDLER,
            data: error.response.data.Message || error.response.data.Error
          });
        }
        else if (error.response.status === 400) {
          dispatch({
            type: ERRORHANDLER,
            data: error.response.data.Message || error.response.data.Error
          });
          swal( "Error",Message);

        }
          
      });
  };
};