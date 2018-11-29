import CommonUtils from './../utils/CommonUtils';

class CommonHelper {
  static getSelectedHotelId(selectedHoteObj) {
    return CommonUtils.getObjectValueIfEmpty(selectedHoteObj, 'propertyId', 0);
  }

  static saveSelectedHotelToStorage(propertyId) {
    localStorage.setItem('FabHotelId', propertyId);
  }

  static getStorageSelectedHotel() {
    return localStorage.getItem('FabHotelId');
  }

  static clearStorageSelectedHotel() {
    localStorage.removeItem('FabHotelId');
  }

  static isHotelSelected() {
    return !CommonUtils.isEmpty(localStorage.getItem('FabHotelId'));
  }

  static disableBodyScroll() {
    document.body.style.width = '100%';
    document.body.style.height = '100%';
    document.body.style.position = 'fixed';
  }

  static enableBodyScroll() {
    document.body.style.width = '';
    document.body.style.height = '';
    document.body.style.position = '';
  }
}

export default CommonHelper;
