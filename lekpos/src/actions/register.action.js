import { REGISTER_FETCHING, REGISTER_FAILED, REGISTER_SUCCESS } from "../constants";

export const setRegisterStateToFetching = () => ({
    type: REGISTER_FETCHING,    
})

export const setRegisterStateToFailed = () => ({
    type: REGISTER_FAILED,
})

export const setRegisterStateToSuccess = (payload) => ({
    type: REGISTER_SUCCESS,
    payload
})



export const register = value => {
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
  