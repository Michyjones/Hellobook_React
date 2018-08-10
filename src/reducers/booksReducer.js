import {FETCHING_BOOKS , FETCHING_BOOKS_SUCCESS, FETCHING_BOOKS_ERROR} from '../actions/actionTypes';

const initialState = {
    message:'',
    error:false,
    loading: false,
    books: [],

};

export default (state = initialState, action) => {
    switch(action.type){

        case FETCHING_BOOKS :

            return {
                ...state,
                message:'Retrieving book',
                error:false,
                loading: true,
                books: [],
            };
        case FETCHING_BOOKS_SUCCESS:
            return {
                ...state,
                message:' Books retrieved successfully',
                error:false,
                loading: false,
                books: action.data.books,
            };
        case FETCHING_BOOKS_ERROR:
            return {
                ...state,
                message: action.data.Message,
                error:true,
                loading: false,
                books:[]
            };

        default:
            return state;
    }
}