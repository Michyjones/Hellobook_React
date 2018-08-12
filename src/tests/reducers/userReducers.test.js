/* import expect from 'expect';**/
import loginUser from "../../reducers/usersReducers";
import createUser from "../../reducers/usersReducers";
import * as types from "../../actions/actionTypes";

describe("Login reducer", () => {
 
  it("should return the initial state", () => {
    expect(loginUser(undefined, {})).toEqual({
      loggedIn: localStorage.getItem("loggedIn"),
      token :localStorage.getItem("token"),
      IsAdmin: localStorage.getItem("IsAdmin")
    });
  });
  xit("should handle LOGIN_USER", () => {
    expect(
      loginUser({}, {
        type:types.LOGIN_USER_SUCCESS,
      })
    ).toEqual({details: undefined});
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
      createUser({}, {
        type:types.CREATE_USER_SUCCESS,
      })
    ).toEqual({details: undefined});
  }); 
  it("should handle REGISTER_USER", () => {
    expect(
      loginUser({}, {
        type:types.CREATE_USER_SUCCESS,
      })
    ).toEqual({details: undefined});
  }); 
});


  