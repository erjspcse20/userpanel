import { actions } from './../constants/Constants';
import {login} from  './../constants/Urls';
import CommonUtils from './../utils/CommonUtils';
import Request from './../utils/Request';

/**
 * Login Actions
 */
export function loginResetStore() {
  return {
    type: actions.LOGIN_RESET_STORE,
  };
}

export function loginResetStorage() {
  return {
    type: actions.LOGIN_RESET_STORAGE,
  };
}

export function loginInit() {
  return {
    type: actions.LOGIN_REQUEST_INIT,
  };
}

export function loginSuccessful(data, headers, params) {
  return {
    type: actions.LOGIN_REQUEST_SUCCESS,
    payload: {
      receivedAt: Date.now(),
      data,
      headers,
      params,
    },
  };
}

export function loginFailed(error) {
  return {
    type: actions.LOGIN_REQUEST_FAILED,
  };
}

export function loginRequest(header) {
  return (dispatch) => {
    const successFn = (data, headers) => {
      dispatch(loginSuccessful(data, headers, header));
    };

    const errorFn = (error) => {
      dispatch(loginFailed(error));
    };

    dispatch(loginInit());

    const api = new Request(dispatch, successFn, errorFn, false);
    return api.post(login.LOGIN_REQUEST,null, header);
  };
}


export function logoutFailed(error) {
  return {
    type: actions.LOGOUT_REQUEST,
  };
}

export function logoutSuccessful() {
  return {
    type: actions.LOGOUT_REQUEST,
  };
}

export function logoutUser() {
  return (dispatch) => {
    const successFn = (data, headers) => {
      dispatch(logoutSuccessful(data, headers));
    };

    const errorFn = (error) => {
      dispatch(logoutFailed(error));
    };

    const api = new Request(dispatch, successFn, errorFn);
    return api.post(login.LOGOUT_REQUEST);
  };
}



