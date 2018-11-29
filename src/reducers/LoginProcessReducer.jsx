import { actions } from './../constants/Constants';
import CommonUtils from './../utils/CommonUtils';
import AuthenticationHelper from './../helpers/AuthenticationHelper';

const initialState = {
  /*
  * TODO- isAuthenticated and user data need to be fetched from local storage
  */
  isLoggingIn: false,
  isLoggedIn: false,
  isAuthenticated: AuthenticationHelper.isAuthenticated(),
  userData: null,
};

export default (state = initialState, action = {}) => {
  let changes = {};

  switch (action.type) {
    case actions.LOGIN_RESET_STORE:
      changes = { ...initialState, isAuthenticated: AuthenticationHelper.isAuthenticated(), userData: state.userData };
      break;

    case actions.LOGIN_RESET_STORAGE:
      AuthenticationHelper.clearUserData();
      changes = {
        isAuthenticated: false,
        isLoggedIn: false,
      };

      break;

    case actions.LOGIN_REQUEST_INIT:
      changes = {
        isLoggingIn: true,
        isLoggedIn: false,
        isAuthenticated: false,
        userData: null,
      };
      break;

    case actions.LOGIN_REQUEST_SUCCESS: {
      const userData =  CommonUtils.getObjectValueIfEmpty(action, 'payload.data.data.user');

      const authToken = CommonUtils.getObjectValueIfEmpty(action, 'payload.data.data.token', null);
      const isAuthenticated =  !CommonUtils.isEmpty(userData) && !CommonUtils.isEmpty(authToken);
        if (isAuthenticated) AuthenticationHelper.saveAuthToken(authToken);

      changes = {
        isLoggingIn: false,
        isAuthenticated,
        isLoggedIn: CommonUtils.getObjectValueIfEmpty(action, 'payload.data.data.success', false),
        userData,
      };
    }
      break;

    case actions.LOGIN_REQUEST_FAILED:
      changes = {
        isLoggingIn: false,
        isLoggedIn: false,
        isAuthenticated: false,
        userData: null,
      };
      break;



    case actions.LOGOUT_REQUEST:
      AuthenticationHelper.clearAuthToken();
      AuthenticationHelper.clearUserData();
      changes = {
        isAuthenticated: false,
      };
      break;

    default:
      changes = {};
      break;
  }

  return CommonUtils.clone(state, changes);
};
