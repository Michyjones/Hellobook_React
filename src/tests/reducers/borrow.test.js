/* import expect from 'expect';**/
import borrow from "../../reducers/borrowreturnReducers";
import * as types from "../../actions/actionTypes";

describe("Login reducer", () => {
  it("should return the initial state", () => {
    expect(borrow(undefined, {})).toEqual({
      details: {}
    });
  });
  it("should handle FETCHING_History ", () => {
    expect(
      borrow(
        {},
        {
          type: types.BORROW_BOOK_SUCCESS
        }
      )
    ).toEqual({
      details: undefined
    });
  });
});

it("should handle Get book Fail", () => {
  expect(
    borrow(
      {},
      { data:{Message: "borrow failed"},
        type: types.BORROW_BOOK_FAILED
      }
    )
  ).toEqual({
    message: "borrow failed"
  });

  it("should handle Get book Fail", () => {
    expect(
      borrow(
        {},
        {data:{details: {}},
          type: types.RETURN_BOOK_SUCCESS
        }
      )
    ).toEqual({
      details: {}
    });
  });

  it("should handle borrow error ", () => {
    expect(
      borrow(
        {},
        {
          type: types.ERRORHANDLER
        }
      )
    ).toEqual({
      error: undefined
    });
  });
});
