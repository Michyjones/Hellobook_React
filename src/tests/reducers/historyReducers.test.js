/* import expect from 'expect';**/
import history from "../../reducers/historyReducers";
import * as types from "../../actions/actionTypes";

describe("Login reducer", () => {
  it("should return the initial state", () => {
    expect(history(undefined, {})).toEqual({
      message: "",
      error: false,
      loading: false,
      history: []
    });
  });
  it("should handle FETCHING_History ", () => {
    expect(
      history(
        {},
        {
          type: types.GET_HISTORY
        }
      )
    ).toEqual({
      message: "Retrieving history",
      error: false,
      loading: true,
      history: []
    });
  });
});

it("should handle Get book Fail", () => {
  expect(
    history(
      {},
      {
        type: types.GET_HISTORY_SUCCESS
      }
    )
  ).toEqual({
    message: "Retrieving success",
    error: false,
    loading: false,
    history: []
  });

  it("should handle Get book Fail", () => {
    expect(
      history(
        {},
        {
          type: types.FETCHING_HISTORY_ERROR
        }
      )
    ).toEqual({
      message: "Retrieving error",
      error: true,
      loading: false,
      history: []
    });
  });
});
