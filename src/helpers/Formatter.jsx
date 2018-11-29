class Formatter {
/**
 * Changes
 * 1 to 01
 * 30 to 30
 * 35 to 35
 * NaN to --
 * @param {number} count
 */
  static formatCount(count, noValueText = '--') {
    if (isNaN(count)) return noValueText;
    if (count < 10 && count.toString().length === 1) return (`0${count}`);

    return count;
  }

  /**
  * Changes
  * 3 to 03%
  * 30 to 30%
  * 35 to 35%
  * NaN to --
  * @param {number} count
  */
  static formatPercent(count, noValueText = '--') {
    const formatCount = this.formatCount(count, noValueText);

    if (isNaN(formatCount)) return noValueText;
    return `${formatCount}%`;
  }

  /**
  * Changes
  * 3.6 to 4
  * Math.round()
  * NaN to --
  * @param {number} count
  */
  static formatAmount(amount, noValueText = '--') {
    const formatCount = this.formatCount(amount, noValueText);

    if (isNaN(formatCount)) return noValueText;
    return Math.round(formatCount);
  }

  /**
   * Changes
   *
   * 100 to 100
   * 1000 to 1,000
   * 1234 to 1,234
   * 12347777 to 12,347,777
   * 12347777.897 to 12,347,777.897
   * @param {number} amount
   * @param {string} noValueText
   */
  static priceWithCommas(amount, noValueText = '--') {
    if (isNaN(amount)) return noValueText;

    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  /**
  * Changes
  * 3 to 3.0
  * 3.2 to 3.2
  * To set decimal place
  * NaN to --
  * @param {number} count
  */
  static formatRating(count, toDecimal = 1, noValueText = '--') {
    if (isNaN(count)) return noValueText;

    return count.toFixed(toDecimal);
  }
}

export default Formatter;
