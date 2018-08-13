/* import expect from 'expect';**/
import books from "../../reducers/booksReducer";
import book from "../../reducers/bookReducers";
import * as types from "../../actions/actionTypes";

// This tests the fetching book reducers
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

  it("should handle Get book Fail", () => {
    expect(
      books(
        {},
        {
          data: {
            books: [],
            error: true,
            loading: false,
            Message: "Fetching false."
          },
          type: types.FETCHING_BOOKS_ERROR
        }
      )
    ).toEqual({
      books: [],
      error: true,
      loading: false,
      message: "Fetching false."
    });
  });
});

describe("Book reducer", () => {
  it("should return the initial state", () => {
    expect(book(undefined, {})).toEqual({
      details: {}
    });
  });

  it("should handle FETCHING_BOOKS ", () => {
    expect(
      book(
        {},
        {
          type: types.ADD_BOOK_SUCCESS
        }
      )
    ).toEqual({
      details: undefined
    });
  });

  it("should handle FETCHING_BOOKS ", () => {
    expect(
      book(
        {},
        {
          type: types.EDIT_BOOK_SUCCESS
        }
      )
    ).toEqual({
      message: undefined
    });
  });

  it("should handle FETCHING_BOOKS ", () => {
    expect(
      book(
        {},
        {
          type: types.DELETE_BOOK_SUCCESS
        }
      )
    ).toEqual({
      message: undefined
    });
  });

  it("should handle FETCHING_BOOKS ", () => {
    expect(
      book(
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
