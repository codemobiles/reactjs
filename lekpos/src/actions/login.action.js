import {
  LOGIN_FETCHING,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  LOGOUT,
  server
} from "../constants";
import { httpClient } from "./../utils/HttpClient";
import jwt from "jsonwebtoken";

export const setLoginStateToFetching = () => ({
  type: LOGIN_FETCHING
});

export const setLoginStateToFailed = () => ({
  type: LOGIN_FAILED
});

export const setLoginStateToSuccess = payload => ({
  type: LOGIN_SUCCESS,
  payload
});

export const setLoginStateToLogout = () => ({
  type: LOGOUT
});

export const logout = history => {
  return dispatch => {
    localStorage.removeItem(server.TOKEN_KEY);
    localStorage.removeItem(server.REFRESH_TOKEN_KEY);
    dispatch(setLoginStateToLogout());
    history.push("/login");
  };
};

// Called by Login Component
export const login = (value, history) => {
  return async dispatch => {
    try {
      dispatch(setLoginStateToFetching()); // fetching
      let result = await httpClient.post(server.LOGIN_URL, value);
      if (result.data.result === "ok") {
        const { token, refreshToken } = result.data;
        localStorage.setItem(server.TOKEN_KEY, token);
        localStorage.setItem(server.REFRESH_TOKEN_KEY, refreshToken);
        dispatch(setLoginStateToSuccess(result));
        history.push("/stock");
      } else {
        dispatch(setLoginStateToFailed(result));
      }
    } catch (error) {
      dispatch(setLoginStateToFailed({ data: { message: error } }));
    }
  };
};
