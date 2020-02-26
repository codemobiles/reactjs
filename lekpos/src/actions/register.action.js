import {
  REGISTER_FETCHING,
  REGISTER_FAILED,
  REGISTER_SUCCESS,
  server
} from "../constants";

import httpClient from "./../utils/HttpClient";

export const setRegisterStateToFetching = () => ({
  type: REGISTER_FETCHING
});

export const setRegisterStateToFailed = () => ({
  type: REGISTER_FAILED
});

export const setRegisterStateToSuccess = payload => ({
  type: REGISTER_SUCCESS,
  payload
});

export const register = (values, history) => {
  return async dispatch => {
    dispatch(setRegisterStateToFetching());
    const response = await httpClient.post(server.REGISTER_URL, values);
    if (response.data.result == "ok") {
      dispatch(setRegisterStateToSuccess(response.data));
      history.push("/login");
    } else {
      dispatch(setRegisterStateToFailed());
    }
  };
};
