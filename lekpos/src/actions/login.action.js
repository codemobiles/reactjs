import { LOGIN_FETCHING, LOGIN_FAILED, LOGIN_SUCCESS } from "../constants";

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

export const login = value => {
  return dispatch => {
    dispatch(setLoginStateToFetching());
    setTimeout(() => {
      dispatch(
        setLoginStateToSuccess({
          result: "ok",
          data: ["angular", "react", "vue"]
        })
      );
    }, 1000);
  };
};
