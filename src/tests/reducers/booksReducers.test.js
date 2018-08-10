/* import expect from 'expect';**/
import books from "../../reducers/booksReducer";
import book from "../../reducers/bookReducers";
import * as types from "../../actions/actionTypes";

describe("Login reducer", () => {
  it("should return the initial state", () => {
    expect(books(undefined, {})).toEqual({
      message: "",
      error: false,
      loading: false,
      books: []
    });
  });
  it("should handle FETCHING_BOOKS ", () => {
    expect(
      books(
        {},
        {
          type: types.FETCHING_BOOKS
        }
      )
    ).toEqual({
      message: "Retrieving book",
      error: false,
      loading: true,
      books: []
    });
  });

});

describe("Book reducer", () => {
    it("should return the initial state", () => {
      expect(book(undefined, {})).toEqual({
        details: {} 
      });
    });
    it("should handle GET_SINGLE_BOOK ", () => {
      expect(
        books(
          {},
          {
            type: types.GET_SINGLE_BOOK
          }
        )
      ).toEqual({
        details: undefined
      });
    });
  
  });
  

