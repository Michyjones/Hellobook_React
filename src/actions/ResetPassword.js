import axios from "axios";
import swal from "sweetalert";

const basePath = process.env.REACT_APP_base_path;
const reset_url = `${basePath}/auth/reset-password`;
const change_url = `${basePath}/auth/change-password`;
const token = localStorage.getItem("token");

/**
 * Request password reset link function
 * @param{Email} - user registered email
 * @returns{String} - Message
 */
export const requestReset = data => {
  return dispatch => {
    return axios
      .post(reset_url, {
        email: data.email
      })
      .then(res => {
        const Message = res.data.Message;
        dispatch({
          type: "REQUEST_RESET_SUCCESS",
          data: {
            Message
          }
        });
        swal("Success", Message);
      })
      .catch(error => {
        if (error.response.status === 400) {
          const Message = "No user registered with this email.";
          dispatch({ type: "REQUEST_RESET_FAIL", data: { Message } });
        }
      });
  };
};
export const passwordReset = data => {
    console.log(data)
  return dispatch => {
    axios.defaults.headers.common["Authorization"] = "Bearer "+ data.token;
    return axios
      .post(
        change_url,
        {
          old_password: data.old_password,
          new_password: data.new_password
        }
      )
      .then(res => {
          console.log(res.data)
        const Message = res.data.Message;
        dispatch({
          type: "RESET_PASSWORD_SUCCESS",
          data: {
            Message
          }
        });
        swal("Success", Message);
      })
      .catch(error => {
          console.log(error.response.data)
        if (error.response.status === 400) {
          const Message = "No user registered with this email.";
          dispatch({ type: "RESET_PASSWORD_FAIL", data: { Message } });
        }
      });
  };
};
