import {BORROW_BOOK_SUCCESS,RETURN_BOOK_SUCCESS, BORROW_BOOK_FAILED, ERRORHANDLER} from "./actionTypes";
import axios from "axios";
import { getSingleBook } from "../actions/bookActions";
import swal from "sweetalert"

const basePath = "http://localhost:5000/api/v2";
const token = localStorage.getItem("token");


export const borrowBook = data => {
    console.log(token)
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
          swal("Success",Message)
        // this.props.history.push(`/books/${data}`);
        })
        .catch(error => {
            const Message = error.response.data.Message;
            console.log("errrrorrr", error.response)
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
            swal( "Error",Message)

          }
        });
    };
  };
  export const returnBook = data => {
    console.log(token)
    return dispatch => {
      let token = localStorage.getItem("token");
      return axios
        .put(`${basePath}/users/books/${data.book_id}`,{},{
          headers: { Authorization: "Bearer " + token }
        })
        .then(result => {
          const Message = result.data.Message;
          dispatch({ type: RETURN_BOOK_SUCCESS, Message });
          swal("Success", Message)
          dispatch(getSingleBook(data.book_id));
        //this.props.history.push(`/books/${data}`);
        })
        .catch(error => {
            const Message = error.response.data.Message;
          if (error.response.status === 404) {
            console.log(error.response);
            dispatch({
              type: ERRORHANDLER,
              data: error.response.data.Message || error.response.data.Error
              
            });
          }
          else if (error.response.status === 401) {
            console.log(error.response);
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
            swal( "Error",Message)

          }
          
        });
    };
  };