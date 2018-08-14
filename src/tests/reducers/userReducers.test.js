/* import expect from 'expect';**/
import loginUser from "../../reducers/usersReducers";
import createUser from "../../reducers/usersReducers";
import * as types from "../../actions/actionTypes";

describe("Login reducer", () => {
  it("should return the initial state", () => {
    expect(loginUser(undefined, {})).toEqual({
      loggedIn: localStorage.getItem("loggedIn"),
      token: localStorage.getItem("token"),
      IsAdmin: localStorage.getItem("IsAdmin")
    });
  });
  xit("should handle LOGIN_USER", () => {
    expect(
      loginUser(
        {},
        {
          type: types.LOGIN_USER_SUCCESS
        }
      )
    ).toEqual({ details: undefined });
  });
});

describe("create User reducer", () => {
  it("should return the initial state", () => {
    expect(createUser(undefined, {})).toEqual({
      loggedIn: localStorage.getItem("loggedIn"),
      token: localStorage.getItem("token"),
      IsAdmin: localStorage.getItem("IsAdmin")
    });
  });
  it("should handle REGISTER_USER", () => {
    expect(
      createUser(
        {},
        {
          type: types.CREATE_USER_SUCCESS
        }
      )
    ).toEqual({ details: undefined });
  });
  it("should handle REGISTER_USER", () => {
    expect(
      loginUser(
        {},
        {
          type: types.CREATE_USER_SUCCESS
        }
      )
    ).toEqual({ details: undefined });
  });
  it("should handle RESET PASSWORD", () => {
    expect(
      loginUser({}, {
        data: {
          Message: "A password reset link has been sent to your email."
        },
        type: types.RESET_PASSWORD_SUCCESS
      })
    ).toEqual({ Message: "A password reset link has been sent to your email." });
  });

  it("should handle RESET PASSWORD", () => {
    expect(
      loginUser({}, {
        data: {
          Message: "A password reset link has been sent to your email."
        },
        type: types.RESET_PASSWORD_FAIL
      })
    ).toEqual({ Message: "A password reset link has been sent to your email." });
  });

  it("should handle RESET PASSWORD", () => {
    expect(
      loginUser({}, {
        data: {
          Message: "A password reset link has been sent to your email."
        },
        type: types.REQUEST_RESET_SUCCESS
      })
    ).toEqual({ Message: "A password reset link has been sent to your email." });
  });

  it("should handle RESET PASSWORD", () => {
    expect(
      loginUser({}, {
        type: types.ERRORHANDLER
      })
    ).toEqual({});
  });
});
