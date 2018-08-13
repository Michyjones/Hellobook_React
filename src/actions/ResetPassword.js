import axios from "axios";
import swal from "sweetalert";

const basePath = process.env.REACT_APP_base_path;
const reset_url = `${basePath}/auth/reset-password`;
const change_url = `${basePath}/auth/change-password`;


//This function request password reset via email
 
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

//This function changes password when user is logged in
 
export const passwordReset = data => {
  return dispatch => {
    axios.defaults.headers.common["Authorization"] = "Bearer "+ data.token;
    return axios
      .post(
        
        change_url,
        {
          old_password: data.old_password,
          new_password: data.new_password,
          confirm_password: data.confirm_password
        }
      )
      .then(res => {
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
        const Message = error.response.data.Error;
        if (error.response.status === 400) {
          dispatch({ type: "RESET_PASSWORD_FAIL", data: { Message } });
          swal("Error", Message);
        }
      });
  };
};
