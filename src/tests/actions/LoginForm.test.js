import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import axios from "axios";
import moxios from "moxios";
import loginUser from "../../actions/usersActions";
import * as types from "../../actions/actionTypes";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("login action tests", () => {
  beforeEach(() => {
    moxios.install(axios);
  });

  afterEach(() => {
    moxios.uninstall(axios);
  });

  const loginInput = { email: "test@gmail.com", passoword: "qwerty@123" };

  xit("creates ADD_RESPONSE_MESSAGE action after successfully login", done => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {
          Message: "Logged in successfully",
          username: "samkaris",
          email: "sam@gmail.com",
          is_admin: true,
          access_token: "token......"
        }
      });
    });

    const expectedAction = [
      {
        response: {
          Message: "Logged in successfully",
          username: "samkaris",
          email: "sam@gmail.com",
          is_admin: true,
          access_token: "token......"
        },
        type: types.LOGIN_USER_SUCCESS
      }
    ];

    const store = mockStore({ user: {} });
    // return store.dispatch(loginUser({loginInput}));
    return store.dispatch(loginUser(loginInput)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
      done();
    });
  });

  xit("creates ADD_RESPONSE_MESSAGE action after successfully login", done => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        user: {
          token: "Invalid username or password!",
          IsAdmin: true
        }
      });
    });

    const expectedAction = [
      {
        message: {
          message: "Invalid username or password!",
          status_code: 401
        },
        type: types.ADD_RESPONSE_MESSAGE
      }
    ];

    const store = mockStore({ user: {} });

    return store.dispatch(loginUser(loginInput)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
      done();
    });
  });
});
