import { LOGOUT_SUCCESS, ERRORHANDLER } from "./actionTypes";
import axios from "axios";
import swal from "sweetalert";

const basePath = "http://localhost:5000/api/v2";
const token = localStorage.getItem("token");

export const logoutUser = user => {
  return dispatch => {
    return axios
      .post(
        `${basePath}/auth/logout`,
        {},
        {
          headers: { Authorization: "Bearer " + token }
        }
      )
      .then(resp => {
        const Message = resp.data.Message;
        dispatch({ type: LOGOUT_SUCCESS, data : {Message }});
        localStorage.removeItem("token");
        swal("Success", Message);
        // this.props.history.push("/login");
      })
      .catch(error => {
          const Message = error.response.data.Message;
        if (error.response.status === 401) {
          dispatch({
            type: ERRORHANDLER,
            error: error.response.data.Message || error.response.data.Error
            
          });
          localStorage.removeItem("token");
          swal("Error", Message);
        } else if (error.response.status === 400) {
        const Message = error.response.data.Message;
          dispatch({
            type: ERRORHANDLER,
            error: error.response.data.Message || error.response.data.Error
          });
          localStorage.removeItem("token");
          swal("Error", Message);
        }
        // dispatch({type: ERRORHANDLER, error:error.response.data.Message || error.response.data.Error })
      });
  };
};
