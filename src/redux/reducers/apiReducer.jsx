import { GET_DATA, SET_ERROR, SET_LOADING } from "./../type";
const initialState = {
  data: [],
  loading: false,
  error: "",
};

export const apiReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return {
        data: action.payload,
        loading: false,
        error: "",
      };
    case SET_LOADING:
      return {
        data:[],
        loading: true,
        error:'',
      };
    case SET_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
