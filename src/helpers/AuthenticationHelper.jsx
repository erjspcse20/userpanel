import CommonUtils from './../utils/CommonUtils';
import { timers,TOKEN } from './../constants/Constants';

class AuthenticationHelper {
  static saveAuthToken(token) {
    localStorage.setItem(TOKEN, token);
  }

  static getAuthToken() {
    return localStorage.getItem(TOKEN);
  }

  static clearAuthToken() {
    localStorage.removeItem(TOKEN);
  }

  static saveUserData(userData) {
    const time = ((new Date()).getTime()).toString();

    localStorage.setItem('userData', JSON.stringify((userData)));
    localStorage.setItem('userData_time', time);
  }

  static getUserData() {
    return localStorage.getItem('userData');
  }

  static clearUserData() {
    localStorage.removeItem('userData');
  }

  static isAuthenticated() {
    const isAuthenticated = !CommonUtils.isEmpty(this.getAuthToken());
    return isAuthenticated;
  }

  static isUserData() {
    let isUserData = false;
    if ((new Date()).getTime() - Number(localStorage.getItem('userData_time')) < timers.USERDATA_TIME) {
      isUserData = !CommonUtils.isEmpty(this.getUserData());
    } else {
      isUserData = false;
      localStorage.removeItem('userData');
      localStorage.removeItem('userData_time');
    }
    return isUserData;
  }

  /**
   * Save mobile number to local storage
   * @param {*} mobile
   */
  static saveMobileNumber(mobile) {
    localStorage.setItem('mobile', mobile);
  }

  /**
   * Get mobile number from local storage
   */
  static getMobileNumber() {
    return localStorage.getItem('mobile');
  }
}

export default AuthenticationHelper;
