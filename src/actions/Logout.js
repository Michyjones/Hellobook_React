import { LOGOUT_SUCCESS, ERRORHANDLER } from "./actionTypes";
import axios from "axios";
import swal from "sweetalert";
import { redirect } from "../helpers/history";

const basePath = process.env.REACT_APP_base_path;
export const logoutUser = data => {
  return dispatch => {
    return axios
      .post(
        `${basePath}/auth/logout`,
        {},
        {
          headers: { Authorization: "Bearer " + data.token }
        }
      )
      .then(resp => {
        const Message = resp.data.Message;
        dispatch({ type: LOGOUT_SUCCESS, data: { Message } });
        swal("Success", Message);
        localStorage.clear();
        redirect("/login");
      })
      .catch(error => {
        const Message = error.response.data.Message;
        if (error.response.status === 401) {
          dispatch({
            type: ERRORHANDLER,
            error: error.response.data.Message || error.response.data.Error
          });
          swal("Error", Message);
          localStorage.clear();
          redirect("/login");
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
