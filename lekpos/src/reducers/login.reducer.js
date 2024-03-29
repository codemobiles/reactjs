import {
  LOGIN_FETCHING,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  LOGOUT
} from "../constants";

const initialState = {
  isFetching: false,
  isError: false,
  result: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_FETCHING:
      return { ...state, isFetching: true, isError: false, result: null };
    case LOGIN_FAILED:
      return { ...state, isFetching: false, isError: true, result: null };
    case LOGIN_SUCCESS:
      return { ...state, isFetching: false, isError: false, result: payload };
    case LOGOUT:
      return { ...state, result: "", isFetching: false, isError: false };

    default:
      return state;
  }
};
