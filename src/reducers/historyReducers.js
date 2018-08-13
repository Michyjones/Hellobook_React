import {GET_HISTORY, FETCHING_HISTORY_ERROR, GET_HISTORY_SUCCESS} from "../actions/actionTypes";

const initialState = {
  message:"",
  error:false,
  loading: false,
  history: [],

};
// Retrieving  book histiry reducers
export default (state = initialState, action) => {
  switch(action.type){

    case GET_HISTORY :

      return {
        ...state,
        message:"Retrieving history",
        error:false,
        loading: true,
        history: [],
      };
    case GET_HISTORY_SUCCESS :

      return {
        ...state,
        message:"Retrieving success",
        error:false,
        loading: false,
        history: action.data || [],
      };
    case FETCHING_HISTORY_ERROR:

      return {
        ...state,
        message:"Retrieving error",
        error:true,
        loading: false,
        history: []
      };
    default:
      return state;
  }
};