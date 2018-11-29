import CommonUtils from './CommonUtils';
import { months } from './../constants/DateConstants';

class DateUtils {
  /**
   * Date in yyyy-m-d || yyyy-mm-dd format
   * @param {string} date
   */
  static getInstance(date) {
    if (date instanceof Date) return date;
    if (CommonUtils.isEmpty(date)) return null;

    let theDate = null;

    /**
     * Needed becuase Safari does not support new Date('2017-5-1')
     * It is invalid. You have to give something like new Date(2017, 5, 1)
     */
    if (typeof date === 'string') {
      const split = date.split('-');

      if (split.length === 3) {
        const year = split[0];
        const month = parseInt(split[1], 10) - 1;
        const day = parseInt(split[2], 10);

        theDate = new Date(year, month, day);
      }
    }

    return theDate;
  }

  /**
   * Formats the date in the given format
   * You can give the separator for dates but for time it will always be : (You can not change it)
   * If no format is given, the Date object will be returned.
   * dateSeparator will be '-' by default
   * @param {string|Date} theDate
   * @param {string} format
   * @param {char} dateSeparator
   */
  static getDateInFormat(theDate, format, dateSeparator) {
    const theSeparator = dateSeparator || '-';
    const dateObj = DateUtils.getDayMonthYear(theDate);

    if (CommonUtils.isEmpty(dateObj)) return null;

    if (CommonUtils.isEmpty(format) || format === DateUtils.dateInstance) {
      return dateObj.dateInstance;
    }

    const twoCharsMonth = dateObj.month.toString().length < 2 ? (`0${dateObj.month}`) : dateObj.month;
    const twoCharsDate = dateObj.day.toString().length < 2 ? (`0${dateObj.day}`) : dateObj.day;
    const twoCharsHour = dateObj.hour.toString().length < 2 ? (`0${dateObj.hour}`) : dateObj.hour;
    const twoCharsMin = dateObj.minute.toString().length < 2 ? (`0${dateObj.minute}`) : dateObj.minute;
    const twoCharsSec = dateObj.second.toString().length < 2 ? (`0${dateObj.second}`) : dateObj.second;

    const dateAttributes = [];
    const timeAttributes = [];

    switch (format) {
      case DateUtils.yyyymmdd:
        dateAttributes.push(dateObj.year);
        dateAttributes.push(twoCharsMonth);
        dateAttributes.push(twoCharsDate);
        break;

      case DateUtils.ddmmyyyy:
        dateAttributes.push(twoCharsDate);
        dateAttributes.push(twoCharsMonth);
        dateAttributes.push(dateObj.year);
        break;

      case DateUtils.yyyymmddHHMMSS:
        dateAttributes.push(dateObj.year);
        dateAttributes.push(twoCharsMonth);
        dateAttributes.push(twoCharsDate);

        timeAttributes.push(twoCharsHour);
        timeAttributes.push(twoCharsMin);
        timeAttributes.push(twoCharsSec);
        break;

      case DateUtils.dMY: {
        const monthName = CommonUtils.getObjectValue(months, `${dateObj.month - 1}.shortName`, '');
        dateAttributes.push(twoCharsDate);
        dateAttributes.push(monthName);
        dateAttributes.push(dateObj.year);
      }
        break;

      case DateUtils.dMYY: {
        const monthName = CommonUtils.getObjectValue(months, `${dateObj.month - 1}.shortName`, '');
        dateAttributes.push(twoCharsDate);
        dateAttributes.push(monthName);
        dateAttributes.push(dateObj.year.toString().substr(dateObj.year.toString().length-2));
      }
        break;

      case DateUtils.d:
        dateAttributes.push(twoCharsDate);
        break;

      case DateUtils.MY: {
        const monthName = CommonUtils.getObjectValue(months, `${dateObj.month - 1}.shortName`, '');
        dateAttributes.push(monthName);
        dateAttributes.push(dateObj.year);
      }
        break;

        // default is yyyymmdd format
      default:
        dateAttributes.push(dateObj.year);
        dateAttributes.push(twoCharsMonth);
        dateAttributes.push(twoCharsDate);
        break;
    }

    const formattedTime = timeAttributes.length > 0 ? (` ${timeAttributes.join(':')}`) : '';
    const formattedDateTime = dateAttributes.join(theSeparator) + formattedTime;

    return formattedDateTime;
  }

  /**
 * Get Date Attributes from date object
 * @param {object} input
 */
  static getDayMonthYear(input) {
    const inputObj = DateUtils.getInstance(input);

    return {
      day: inputObj.getDate(), // day in date
      month: (inputObj.getMonth() + 1), // month starts with 0
      year: inputObj.getFullYear(), // get full year
      hour: inputObj.getHours(), // get Hours
      minute: inputObj.getMinutes(), // get Minutes
      second: inputObj.getSeconds(), // get Seconds
      dateInstance: inputObj, // get date Instance
    };
  }

  /**
     * compares dates based on year month and date
     * e.g x is less than y i.e. x = 12th Nov 2015 and y = 14th Nov 2015 return -1
     * if x is greater than y return 1
     * if they are equal return 0
     * @param  {date} fDate date to be compared with
     * @param  {date} sDate date to compare to
     * @return {-1, 0, 1}
     */
  static compareDates(fDate, sDate) {
    const x = new Date(fDate);
    const y = new Date(sDate);

    const xYear = x.getFullYear();
    const yYear = y.getFullYear();

    if (xYear > yYear) {
      return 1;
    }

    if (xYear < yYear) {
      return -1;
    }

    const xMonth = x.getMonth();
    const yMonth = y.getMonth();

    if (xMonth > yMonth) {
      return 1;
    }

    if (xMonth < yMonth) {
      return -1;
    }

    const xDate = x.getDate();
    const yDate = y.getDate();

    if (xDate > yDate) {
      return 1;
    }

    if (xDate < yDate) {
      return -1;
    }

    return 0;
  }


  /**
 * Adds the given time to date
 *
 * toAdd Params should be in the following format
 * {
 *      days  : 0, //days to add
 *      hours : 0, //hours to add
 *      mins  : 0, //minutes to add
 *      secs  : 0, //seconds to add
 *      msecs : 0, //milli seconds to add
 * }
 *
 * @param {string|Date} theDate
 * @param {Object} toAdd
 * @return {Date}
 */
  static add(theDate, toAdd) {
    const dateObj = DateUtils.getInstance(theDate);
    // Ms stands for MilliSeconds
    const daysInMs = (toAdd.days || 0) * 24 * 60 * 60 * 1000;
    const hoursInMs = (toAdd.hours || 0) * 60 * 60 * 1000;
    const minutesInMs = (toAdd.mins || 0) * 60 * 1000;
    const secInMs = (toAdd.secs || 0) * 1000;
    const msInMs = (toAdd.msecs || 0);

    const toAddTime = daysInMs + hoursInMs + minutesInMs + secInMs + msInMs;
    const modifiedDate = new Date(dateObj.getTime() + toAddTime);

    return modifiedDate;
  }

  /**
   * Gives start date and end date for a month for the given year
   * @param {string|Date} date
   */
  static getMonthRangeDates(date) {
    const theDate = DateUtils.getDayMonthYear(DateUtils.getInstance(date));
    const month = theDate.month;
    const year = theDate.year;

    const selectedDate = DateUtils.getInstance(`${year}-${month}-01`);
    const y = selectedDate.getFullYear();
    const m = selectedDate.getMonth() + 1;

    const range = {};

    range.startDate = DateUtils.getDateInFormat(DateUtils.getInstance(`${y}-${m}-01`), DateUtils.yyyymmdd, '-');
    range.endDate = DateUtils.getDateInFormat(DateUtils.getInstance(`${y}-${m + 1}-00`), DateUtils.yyyymmdd, '-');

    return range;
  }

  /**
   * Fills an array with all the dates between this range
   * @param {string|Date} from
   * @param {string|Date} to
   */
  static fillDateForRange(from, to, format = DateUtils.yyyymmdd) {
    const container = [];

    let theDate = DateUtils.getDateInFormat(from, DateUtils.yyyymmdd, '-');
    const endDate = DateUtils.getDateInFormat(to, DateUtils.yyyymmdd, '-');


    while (DateUtils.compareDates(theDate, endDate) <= 0) {
      container.push(DateUtils.getDateInFormat(theDate, format));
      theDate = DateUtils.getDateInFormat(DateUtils.add(theDate, { days: 1 }), DateUtils.yyyymmdd, '-');
    }

    return container;
  }

    static getDay(d)
    {
        var date = new Date(d);

        if ( isNaN( date .getTime() ) )
        {
            return d;
        }
        else
        {

            var month = new Array();
            month[0] = "Jan";
            month[1] = "Feb";
            month[2] = "Mar";
            month[3] = "Apr";
            month[4] = "May";
            month[5] = "Jun";
            month[6] = "Jul";
            month[7] = "Aug";
            month[8] = "Sept";
            month[9] = "Oct";
            month[10] = "Nov";
            month[11] = "Dec";

            var day = date.getDate();

            if(day < 10)
            {
                day = "0"+day;
            }

            return    day
        }

    }

    getMonth(d)
    {
        var date = new Date(d);

        if ( isNaN( date .getTime() ) )
        {
            return d;
        }
        else
        {

            var month = new Array();
            month[0] = "Jan";
            month[1] = "Feb";
            month[2] = "Mar";
            month[3] = "Apr";
            month[4] = "May";
            month[5] = "Jun";
            month[6] = "Jul";
            month[7] = "Aug";
            month[8] = "Sept";
            month[9] = "Oct";
            month[10] = "Nov";
            month[11] = "Dec";

            day = date.getDate();

            if(day < 10)
            {
                day = "0"+day;
            }

            return   month[date.getMonth()]
        }

    }
    getYear(d)
    {
        var date = new Date(d);

        if ( isNaN( date .getTime() ) )
        {
            return d;
        }
        else
        {

            var month = new Array();
            month[0] = "Jan";
            month[1] = "Feb";
            month[2] = "Mar";
            month[3] = "Apr";
            month[4] = "May";
            month[5] = "Jun";
            month[6] = "Jul";
            month[7] = "Aug";
            month[8] = "Sept";
            month[9] = "Oct";
            month[10] = "Nov";
            month[11] = "Dec";

            day = date.getDate();

            if(day < 10)
            {
                day = "0"+day;
            }

            return     date.getFullYear();
        }

    }

  /*
| CONSTANTS
*/
  static get yyyymmdd() { return 'yyyymmdd'; }
  static get yyyymmddHHMMSS() { return 'yyyymmddHHMMSS'; }
  static get ddmmyyyy() { return 'ddmmyyyy'; }
  static get dMY() { return 'dMY'; }
    static get dMYY() { return 'dMYY'; }

    static get d() { return 'd'; }
  static get MY() { return 'MY'; }
  static get dateInstance() { return 'dateInstance'; }
}

module.exports = DateUtils;
