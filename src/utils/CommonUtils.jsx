class CommonUtils {
/**
 * Tells if the provided object is empty
 * @param {mixed} obj
 */
  static isEmpty(obj) {
    let isEmpty = false;
    const type = typeof obj;

    isEmpty = isEmpty || !obj;
    isEmpty = isEmpty || (type === 'undefined'); // if it is undefined
    isEmpty = isEmpty || (obj === null); // if it is null
    isEmpty = isEmpty || (type === 'string' && (obj === '')); // if the string is empty
    isEmpty = isEmpty || (obj === false || obj === 0); // if boolean value returns false
    isEmpty = isEmpty || (Array.isArray(obj) && obj.length === 0); // if array is empty
    isEmpty = isEmpty || (type === 'object' && Object.keys(obj).length === 0); // if object is empty

    return isEmpty;
  }

  /**
 * Tells if a string is Empty or Null.
 * If the provided params is of any other type than string, then it will return true
 * @param {string} obj
 */
  static isStringEmptyOrNull(obj) {
    const type = typeof obj;

    let isStringEmptyOrNull = false;

    if (obj === null || type !== 'string' || obj === '') { isStringEmptyOrNull = true; }

    return isStringEmptyOrNull;
  }

  /**
 * Performs the left trim
 * @param {string} strToTrim
 * @param {string} trimMe
 */
  static ltrim(strToTrim, trimMe) {
    let trimmedStr = strToTrim;

    if (!CommonUtils.isStringEmptyOrNull(trimmedStr) && !CommonUtils.isStringEmptyOrNull(trimMe)) {
      while (trimmedStr.length === 0 || trimmedStr.startsWith(trimMe)) {
        trimmedStr = trimmedStr.substr(trimMe.length);
      }
    }

    return trimmedStr;
  }

  /**
 * Performs the right trim
 * @param {string} strToTrim
 * @param {string} trimMe
 */
  static rtrim(strToTrim, trimMe) {
    let trimmedStr = strToTrim;

    if (!CommonUtils.isStringEmptyOrNull(trimmedStr) && !CommonUtils.isStringEmptyOrNull(trimMe)) {
      while (trimmedStr.length === 0 || trimmedStr.endsWith(trimMe)) {
        trimmedStr = trimmedStr.substr(0, trimmedStr.lastIndexOf(trimMe));
      }
    }

    return trimmedStr;
  }

  /**
 * Tells if given object is Array|Object
 * @param {mixed} obj
 */
  static isEnumerable(obj) {
    let isEnumerable = false;

    if (Array.isArray(obj) || (obj instanceof Object)) {
      isEnumerable = true;
    }

    return isEnumerable;
  }

  /**
 * Tells if a key exists
 * @param {string} key
 * @param {array|object} obj
 */
  static keyExists(key, obj) {
    if ((Array.isArray(obj) && key in obj) ||
            (obj instanceof Object && Object.prototype.hasOwnProperty.call(obj, key))) {
      return true;
    }

    return false;
  }

  /**
 *
 * @param {array|object} obj
 * @param {string} key key string separated with dot
 * @param {mixed} defaultValue  the default value to be returned if the specified
 * array key does not exists
 */
  static getObjectValue(obj, key, defaultValue = null) {
    let enumerator = obj;
    let property = key;

    if (CommonUtils.isEnumerable(enumerator) && CommonUtils.keyExists(property, enumerator)) {
      return enumerator[property];
    }

    const dotLastIndex = property.lastIndexOf('.');

    if (dotLastIndex >= 0) {
      const withoutLastKey = property.substr(0, dotLastIndex);
      enumerator = CommonUtils.getObjectValue(enumerator, withoutLastKey, defaultValue);
      property = property.substr(dotLastIndex + 1);
    }

    if (CommonUtils.isEnumerable(enumerator)) {
      return (CommonUtils.keyExists(property, enumerator) ? enumerator[property] : defaultValue);
    }
    return defaultValue;
  }

  /**
 * If the searched value is empty, then it gives the default value
 * @param {array|object} obj
 * @param {string} key key string separated with dot
 * @param {mixed} defaultValue  the default value to be returned if the specified
 * array key does not exists
 */
  static getObjectValueIfEmpty(obj, key, defaultValue = null) {
    const value = CommonUtils.getObjectValue(obj, key);

    if (CommonUtils.isEmpty(value)) { return defaultValue; }
    return value;
  }

  /**
 * Filters the array or object for empty values
 * @param {array|object} obj
 */
  static filter(obj) {
    let filteredObj = obj;

    if (CommonUtils.isEnumerable(obj)) {
      Object.keys(filteredObj).forEach((keyName) => {
        if (CommonUtils.isEmpty(filteredObj[keyName])) {
          delete filteredObj[keyName];
        }
      });

      // if array reset the keys
      if (Array.isArray(filteredObj)) {
        filteredObj = Object.values(filteredObj);
      }
    }

    return filteredObj;
  }

  /**
   * Creates new object from the two given objects with newObject
   * overriding properties of oldObject. This does not affect objects passwed in arguments
   * @param {object} oldObject
   * @param {object} newObject
   */
  static clone(oldObject, newObject) {
    return { ...oldObject, ...newObject };
  }

  /**
   * Get number from string 
   * @param {string} str 
   */
  static getNumber(str) {
    const number = str.replace(/([^0-9])+/g, '');
    return number;
  }
  static titleCase(str) {
    str = str.toLowerCase().split(' ');
    for (let i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
  }
}

module.exports = CommonUtils;
