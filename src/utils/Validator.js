class Validator {
  // checks if the value is an email
  static isEmail(value) {
    return value.match(/^[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$/);
  }

  // check if the value is integer or float
  static isNumber(value, integerOnly = true) {
    if (integerOnly) {
      return value.match(/^\s*[+-]?\d+\s*$/);
    }

    return value.match(/^\s*[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?\s*$/);
  }

  // check if the strinc contains alphabets (spaces) only
  static isAlphabet(value, allowSpaces = true) {
    if (allowSpaces) {
      return value.match(/^[a-zA-Z\s]+$/);
    }

    return value.match(/^[a-zA-Z]+$/);
  }
}

module.exports = Validator;
