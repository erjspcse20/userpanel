import axios from 'axios';
import {  httpStatusCodes } from './../constants/Constants';
import {BASE_URL} from './../constants/Urls';
import CommonUtils from './CommonUtils';
import {TOKEN_HEADER} from './../constants/Constants';
import AuthenticationHelper from './../helpers/AuthenticationHelper';
// import { logoutUser } from './../actions/LoginProcessAction';

class Request {
  constructor(dispatch, successFn, errorFn, authorize = true) {
    this.authorize = authorize;
    this.successFn = typeof successFn === 'function' ? successFn : () => {};
    this.errorFn = typeof errorFn === 'function' ? errorFn : () => {};
    this.dispatch = typeof dispatch === 'function' ? dispatch : () => {};
  }

  static get baseUrl() {
    return BASE_URL;
  }

  /**
 * GET axios instance and do things that are common for every request
 */
  instance(headers = {}) {

    if (this.authorize) headers.token = AuthenticationHelper.getAuthToken();

    const instance = axios.create({
      baseURL: Request.baseUrl,
      //   timeout: 1000,
      headers,
    });

    // Response Interceptor
    instance.interceptors.response.use(undefined, (error) => {
      const status = CommonUtils.getObjectValue(error, 'response.status', null);

      if (status === httpStatusCodes.UNAUTHORIZED) {
        // Unauthorized User
        // this.dispatch(logoutUser());
      }

      return Promise.reject(error);
    });

    return instance;
  }

  /**
 * Make GET Requests
 * @param {string} url
 * @param {object} params
 */
  get(url, params = {},headers={}) {
    /*
     | Bad Request
     */
    if (this.authorize && !AuthenticationHelper.isAuthenticated()) {
      return this.errorFn([], {}, httpStatusCodes.BAD_REQUEST);
    }

    /*
     | Cancel Request Token
     */
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

      headers[TOKEN_HEADER]=AuthenticationHelper.getAuthToken();
      /*
       | GET Request
       */
    return this.instance(headers)
      .get(url, {
        params,
        cancelToken: source.token,
      })
      .then((response) => {
        const data = CommonUtils.getObjectValue(response, 'data', null);
        const headers = CommonUtils.getObjectValue(response, 'headers', null);
        const isSuccess = true;
        this.successFn(data, headers, isSuccess);
      })
      .catch((error) => {
        const data = CommonUtils.getObjectValue(error, 'response.data', null);
        const headers = CommonUtils.getObjectValue(error, 'response.headers', null);
        const status = CommonUtils.getObjectValue(error, 'response.status', null);
        this.errorFn(data, headers, status);
      });
  }

  /**
 * Make POST Requests
 * @param {string} url
 * @param {object} params
 */
  post(url, params, headers = {}) {
    /*
     | Bad Request
     */
    //alert(headers.companyAddress);
    if (this.authorize && !AuthenticationHelper.isAuthenticated()) {
      return this.errorFn([], {}, httpStatusCodes.BAD_REQUEST);
    }

    /*
     | Cancel Request Token
     */
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();


      headers[TOKEN_HEADER]=AuthenticationHelper.getAuthToken();
    /*
     | POST Request
     */
    return this.instance(headers)
      .post(url, params, {
        cancelToken: source.token,
      })
      .then((response) => {
        const data = CommonUtils.getObjectValue(response, 'data', null);
        const headers = CommonUtils.getObjectValue(response, 'headers', null);
        const isSuccess = true;
        this.successFn(data, headers, isSuccess);
      })
      .catch((error) => {
        console.log(error);
        const data = CommonUtils.getObjectValue(error, 'response.data', null);
        const headers = CommonUtils.getObjectValue(error, 'response.headers', null);
        const status = CommonUtils.getObjectValue(error, 'response.status', null);
        this.errorFn(data, headers, status);
      });
  }
}

export default Request;
