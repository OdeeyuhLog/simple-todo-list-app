"use strict";
(self["webpackChunksimple_todo_list_app"] = self["webpackChunksimple_todo_list_app"] || []).push([["main"],{

/***/ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addLeadingZeros)
/* harmony export */ });
function addLeadingZeros(number, targetLength) {
  var sign = number < 0 ? '-' : '';
  var output = Math.abs(number).toString();
  while (output.length < targetLength) {
    output = '0' + output;
  }
  return sign + output;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/defaultLocale/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultLocale/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../locale/en-US/index.js */ "./node_modules/date-fns/esm/locale/en-US/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultOptions/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDefaultOptions: () => (/* binding */ getDefaultOptions),
/* harmony export */   setDefaultOptions: () => (/* binding */ setDefaultOptions)
/* harmony export */ });
var defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}
function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/formatters/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/formatters/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../_lib/getUTCDayOfYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js");
/* harmony import */ var _lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js");
/* harmony import */ var _lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js");
/* harmony import */ var _lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_lib/getUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js");
/* harmony import */ var _lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/getUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js");
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js");
/* harmony import */ var _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lightFormatters/index.js */ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js");







var dayPeriodEnum = {
  am: 'am',
  pm: 'pm',
  midnight: 'midnight',
  noon: 'noon',
  morning: 'morning',
  afternoon: 'afternoon',
  evening: 'evening',
  night: 'night'
};
/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
 * |  p! | Long localized time            |  P! | Long localized date            |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 * - `P` is long localized date format
 * - `p` is long localized time format
 */

var formatters = {
  // Era
  G: function G(date, token, localize) {
    var era = date.getUTCFullYear() > 0 ? 1 : 0;
    switch (token) {
      // AD, BC
      case 'G':
      case 'GG':
      case 'GGG':
        return localize.era(era, {
          width: 'abbreviated'
        });
      // A, B
      case 'GGGGG':
        return localize.era(era, {
          width: 'narrow'
        });
      // Anno Domini, Before Christ
      case 'GGGG':
      default:
        return localize.era(era, {
          width: 'wide'
        });
    }
  },
  // Year
  y: function y(date, token, localize) {
    // Ordinal number
    if (token === 'yo') {
      var signedYear = date.getUTCFullYear();
      // Returns 1 for 1 BC (which is year 0 in JavaScript)
      var year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize.ordinalNumber(year, {
        unit: 'year'
      });
    }
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].y(date, token);
  },
  // Local week-numbering year
  Y: function Y(date, token, localize, options) {
    var signedWeekYear = (0,_lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(date, options);
    // Returns 1 for 1 BC (which is year 0 in JavaScript)
    var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear;

    // Two digit year
    if (token === 'YY') {
      var twoDigitYear = weekYear % 100;
      return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(twoDigitYear, 2);
    }

    // Ordinal number
    if (token === 'Yo') {
      return localize.ordinalNumber(weekYear, {
        unit: 'year'
      });
    }

    // Padding
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(weekYear, token.length);
  },
  // ISO week-numbering year
  R: function R(date, token) {
    var isoWeekYear = (0,_lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date);

    // Padding
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoWeekYear, token.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function u(date, token) {
    var year = date.getUTCFullYear();
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(year, token.length);
  },
  // Quarter
  Q: function Q(date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);
    switch (token) {
      // 1, 2, 3, 4
      case 'Q':
        return String(quarter);
      // 01, 02, 03, 04
      case 'QQ':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(quarter, 2);
      // 1st, 2nd, 3rd, 4th
      case 'Qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4
      case 'QQQ':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case 'QQQQQ':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'formatting'
        });
      // 1st quarter, 2nd quarter, ...
      case 'QQQQ':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone quarter
  q: function q(date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);
    switch (token) {
      // 1, 2, 3, 4
      case 'q':
        return String(quarter);
      // 01, 02, 03, 04
      case 'qq':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(quarter, 2);
      // 1st, 2nd, 3rd, 4th
      case 'qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4
      case 'qqq':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case 'qqqqq':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'standalone'
        });
      // 1st quarter, 2nd quarter, ...
      case 'qqqq':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Month
  M: function M(date, token, localize) {
    var month = date.getUTCMonth();
    switch (token) {
      case 'M':
      case 'MM':
        return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].M(date, token);
      // 1st, 2nd, ..., 12th
      case 'Mo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec
      case 'MMM':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // J, F, ..., D
      case 'MMMMM':
        return localize.month(month, {
          width: 'narrow',
          context: 'formatting'
        });
      // January, February, ..., December
      case 'MMMM':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone month
  L: function L(date, token, localize) {
    var month = date.getUTCMonth();
    switch (token) {
      // 1, 2, ..., 12
      case 'L':
        return String(month + 1);
      // 01, 02, ..., 12
      case 'LL':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(month + 1, 2);
      // 1st, 2nd, ..., 12th
      case 'Lo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec
      case 'LLL':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // J, F, ..., D
      case 'LLLLL':
        return localize.month(month, {
          width: 'narrow',
          context: 'standalone'
        });
      // January, February, ..., December
      case 'LLLL':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Local week of year
  w: function w(date, token, localize, options) {
    var week = (0,_lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(date, options);
    if (token === 'wo') {
      return localize.ordinalNumber(week, {
        unit: 'week'
      });
    }
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(week, token.length);
  },
  // ISO week of year
  I: function I(date, token, localize) {
    var isoWeek = (0,_lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(date);
    if (token === 'Io') {
      return localize.ordinalNumber(isoWeek, {
        unit: 'week'
      });
    }
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoWeek, token.length);
  },
  // Day of the month
  d: function d(date, token, localize) {
    if (token === 'do') {
      return localize.ordinalNumber(date.getUTCDate(), {
        unit: 'date'
      });
    }
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].d(date, token);
  },
  // Day of year
  D: function D(date, token, localize) {
    var dayOfYear = (0,_lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(date);
    if (token === 'Do') {
      return localize.ordinalNumber(dayOfYear, {
        unit: 'dayOfYear'
      });
    }
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dayOfYear, token.length);
  },
  // Day of week
  E: function E(date, token, localize) {
    var dayOfWeek = date.getUTCDay();
    switch (token) {
      // Tue
      case 'E':
      case 'EE':
      case 'EEE':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T
      case 'EEEEE':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu
      case 'EEEEEE':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday
      case 'EEEE':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Local day of week
  e: function e(date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case 'e':
        return String(localDayOfWeek);
      // Padded numerical value
      case 'ee':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localDayOfWeek, 2);
      // 1st, 2nd, ..., 7th
      case 'eo':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });
      case 'eee':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T
      case 'eeeee':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu
      case 'eeeeee':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday
      case 'eeee':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone local day of week
  c: function c(date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      // Numerical value (same as in `e`)
      case 'c':
        return String(localDayOfWeek);
      // Padded numerical value
      case 'cc':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localDayOfWeek, token.length);
      // 1st, 2nd, ..., 7th
      case 'co':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });
      case 'ccc':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // T
      case 'ccccc':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'standalone'
        });
      // Tu
      case 'cccccc':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'standalone'
        });
      // Tuesday
      case 'cccc':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // ISO day of week
  i: function i(date, token, localize) {
    var dayOfWeek = date.getUTCDay();
    var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
    switch (token) {
      // 2
      case 'i':
        return String(isoDayOfWeek);
      // 02
      case 'ii':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoDayOfWeek, token.length);
      // 2nd
      case 'io':
        return localize.ordinalNumber(isoDayOfWeek, {
          unit: 'day'
        });
      // Tue
      case 'iii':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T
      case 'iiiii':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu
      case 'iiiiii':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday
      case 'iiii':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM or PM
  a: function a(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';
    switch (token) {
      case 'a':
      case 'aa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });
      case 'aaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();
      case 'aaaaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });
      case 'aaaa':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM, PM, midnight, noon
  b: function b(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;
    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';
    }
    switch (token) {
      case 'b':
      case 'bb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });
      case 'bbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();
      case 'bbbbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });
      case 'bbbb':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function B(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;
    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }
    switch (token) {
      case 'B':
      case 'BB':
      case 'BBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });
      case 'BBBBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });
      case 'BBBB':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Hour [1-12]
  h: function h(date, token, localize) {
    if (token === 'ho') {
      var hours = date.getUTCHours() % 12;
      if (hours === 0) hours = 12;
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].h(date, token);
  },
  // Hour [0-23]
  H: function H(date, token, localize) {
    if (token === 'Ho') {
      return localize.ordinalNumber(date.getUTCHours(), {
        unit: 'hour'
      });
    }
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].H(date, token);
  },
  // Hour [0-11]
  K: function K(date, token, localize) {
    var hours = date.getUTCHours() % 12;
    if (token === 'Ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(hours, token.length);
  },
  // Hour [1-24]
  k: function k(date, token, localize) {
    var hours = date.getUTCHours();
    if (hours === 0) hours = 24;
    if (token === 'ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(hours, token.length);
  },
  // Minute
  m: function m(date, token, localize) {
    if (token === 'mo') {
      return localize.ordinalNumber(date.getUTCMinutes(), {
        unit: 'minute'
      });
    }
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].m(date, token);
  },
  // Second
  s: function s(date, token, localize) {
    if (token === 'so') {
      return localize.ordinalNumber(date.getUTCSeconds(), {
        unit: 'second'
      });
    }
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].s(date, token);
  },
  // Fraction of second
  S: function S(date, token) {
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].S(date, token);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function X(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
    if (timezoneOffset === 0) {
      return 'Z';
    }
    switch (token) {
      // Hours and optional minutes
      case 'X':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);

      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case 'XXXX':
      case 'XX':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);

      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case 'XXXXX':
      case 'XXX': // Hours and minutes with `:` delimiter
      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function x(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
    switch (token) {
      // Hours and optional minutes
      case 'x':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);

      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case 'xxxx':
      case 'xx':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);

      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case 'xxxxx':
      case 'xxx': // Hours and minutes with `:` delimiter
      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (GMT)
  O: function O(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
    switch (token) {
      // Short
      case 'O':
      case 'OO':
      case 'OOO':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long
      case 'OOOO':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (specific non-location)
  z: function z(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
    switch (token) {
      // Short
      case 'z':
      case 'zz':
      case 'zzz':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long
      case 'zzzz':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Seconds timestamp
  t: function t(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = Math.floor(originalDate.getTime() / 1000);
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(timestamp, token.length);
  },
  // Milliseconds timestamp
  T: function T(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = originalDate.getTime();
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(timestamp, token.length);
  }
};
function formatTimezoneShort(offset, dirtyDelimiter) {
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = Math.floor(absOffset / 60);
  var minutes = absOffset % 60;
  if (minutes === 0) {
    return sign + String(hours);
  }
  var delimiter = dirtyDelimiter || '';
  return sign + String(hours) + delimiter + (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(minutes, 2);
}
function formatTimezoneWithOptionalMinutes(offset, dirtyDelimiter) {
  if (offset % 60 === 0) {
    var sign = offset > 0 ? '-' : '+';
    return sign + (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Math.abs(offset) / 60, 2);
  }
  return formatTimezone(offset, dirtyDelimiter);
}
function formatTimezone(offset, dirtyDelimiter) {
  var delimiter = dirtyDelimiter || '';
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Math.floor(absOffset / 60), 2);
  var minutes = (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js");

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */
var formatters = {
  // Year
  y: function y(date, token) {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |

    var signedYear = date.getUTCFullYear();
    // Returns 1 for 1 BC (which is year 0 in JavaScript)
    var year = signedYear > 0 ? signedYear : 1 - signedYear;
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(token === 'yy' ? year % 100 : year, token.length);
  },
  // Month
  M: function M(date, token) {
    var month = date.getUTCMonth();
    return token === 'M' ? String(month + 1) : (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(month + 1, 2);
  },
  // Day of the month
  d: function d(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCDate(), token.length);
  },
  // AM or PM
  a: function a(date, token) {
    var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? 'pm' : 'am';
    switch (token) {
      case 'a':
      case 'aa':
        return dayPeriodEnumValue.toUpperCase();
      case 'aaa':
        return dayPeriodEnumValue;
      case 'aaaaa':
        return dayPeriodEnumValue[0];
      case 'aaaa':
      default:
        return dayPeriodEnumValue === 'am' ? 'a.m.' : 'p.m.';
    }
  },
  // Hour [1-12]
  h: function h(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCHours() % 12 || 12, token.length);
  },
  // Hour [0-23]
  H: function H(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCHours(), token.length);
  },
  // Minute
  m: function m(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCMinutes(), token.length);
  },
  // Second
  s: function s(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCSeconds(), token.length);
  },
  // Fraction of second
  S: function S(date, token) {
    var numberOfDigits = token.length;
    var milliseconds = date.getUTCMilliseconds();
    var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(fractionalSeconds, token.length);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/longFormatters/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var dateLongFormatter = function dateLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'P':
      return formatLong.date({
        width: 'short'
      });
    case 'PP':
      return formatLong.date({
        width: 'medium'
      });
    case 'PPP':
      return formatLong.date({
        width: 'long'
      });
    case 'PPPP':
    default:
      return formatLong.date({
        width: 'full'
      });
  }
};
var timeLongFormatter = function timeLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'p':
      return formatLong.time({
        width: 'short'
      });
    case 'pp':
      return formatLong.time({
        width: 'medium'
      });
    case 'ppp':
      return formatLong.time({
        width: 'long'
      });
    case 'pppp':
    default:
      return formatLong.time({
        width: 'full'
      });
  }
};
var dateTimeLongFormatter = function dateTimeLongFormatter(pattern, formatLong) {
  var matchResult = pattern.match(/(P+)(p+)?/) || [];
  var datePattern = matchResult[1];
  var timePattern = matchResult[2];
  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong);
  }
  var dateTimeFormat;
  switch (datePattern) {
    case 'P':
      dateTimeFormat = formatLong.dateTime({
        width: 'short'
      });
      break;
    case 'PP':
      dateTimeFormat = formatLong.dateTime({
        width: 'medium'
      });
      break;
    case 'PPP':
      dateTimeFormat = formatLong.dateTime({
        width: 'long'
      });
      break;
    case 'PPPP':
    default:
      dateTimeFormat = formatLong.dateTime({
        width: 'full'
      });
      break;
  }
  return dateTimeFormat.replace('{{date}}', dateLongFormatter(datePattern, formatLong)).replace('{{time}}', timeLongFormatter(timePattern, formatLong));
};
var longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (longFormatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getTimezoneOffsetInMilliseconds)
/* harmony export */ });
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCDayOfYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


var MILLISECONDS_IN_DAY = 86400000;
function getUTCDayOfYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var timestamp = date.getTime();
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
  var startOfYearTimestamp = date.getTime();
  var difference = timestamp - startOfYearTimestamp;
  return Math.floor(difference / MILLISECONDS_IN_DAY) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCISOWeekYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");



function getUTCISOWeekYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var year = date.getUTCFullYear();
  var fourthOfJanuaryOfNextYear = new Date(0);
  fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuaryOfNextYear);
  var fourthOfJanuaryOfThisYear = new Date(0);
  fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuaryOfThisYear);
  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCISOWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




var MILLISECONDS_IN_WEEK = 604800000;
function getUTCISOWeek(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var diff = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date).getTime() - (0,_startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date).getTime();

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)
  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCWeekYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");





function getUTCWeekYear(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var year = date.getUTCFullYear();
  var defaultOptions = (0,_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_2__.getDefaultOptions)();
  var firstWeekContainsDate = (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);

  // Test if weekStartsOn is between 1 and 7 _and_ is not NaN
  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }
  var firstWeekOfNextYear = new Date(0);
  firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(firstWeekOfNextYear, options);
  var firstWeekOfThisYear = new Date(0);
  firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(firstWeekOfThisYear, options);
  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeek/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




var MILLISECONDS_IN_WEEK = 604800000;
function getUTCWeek(dirtyDate, options) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var diff = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date, options).getTime() - (0,_startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date, options).getTime();

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)
  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/protectedTokens/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isProtectedDayOfYearToken: () => (/* binding */ isProtectedDayOfYearToken),
/* harmony export */   isProtectedWeekYearToken: () => (/* binding */ isProtectedWeekYearToken),
/* harmony export */   throwProtectedError: () => (/* binding */ throwProtectedError)
/* harmony export */ });
var protectedDayOfYearTokens = ['D', 'DD'];
var protectedWeekYearTokens = ['YY', 'YYYY'];
function isProtectedDayOfYearToken(token) {
  return protectedDayOfYearTokens.indexOf(token) !== -1;
}
function isProtectedWeekYearToken(token) {
  return protectedWeekYearTokens.indexOf(token) !== -1;
}
function throwProtectedError(token, format, input) {
  if (token === 'YYYY') {
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'YY') {
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'D') {
    throw new RangeError("Use `d` instead of `D` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'DD') {
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCISOWeekYear)
/* harmony export */ });
/* harmony import */ var _getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../getUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



function startOfUTCISOWeekYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var year = (0,_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setUTCFullYear(year, 0, 4);
  fourthOfJanuary.setUTCHours(0, 0, 0, 0);
  var date = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuary);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCISOWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


function startOfUTCISOWeek(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var weekStartsOn = 1;
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCWeekYear)
/* harmony export */ });
/* harmony import */ var _getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../getUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");





function startOfUTCWeekYear(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var defaultOptions = (0,_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var firstWeekContainsDate = (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);
  var year = (0,_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate, options);
  var firstWeek = new Date(0);
  firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setUTCHours(0, 0, 0, 0);
  var date = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(firstWeek, options);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");




function startOfUTCWeek(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var defaultOptions = (0,_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var weekStartsOn = (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0);

  // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }
  var number = Number(dirtyNumber);
  if (isNaN(number)) {
    return number;
  }
  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addMilliseconds/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/addMilliseconds/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addMilliseconds)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addMilliseconds
 * @category Millisecond Helpers
 * @summary Add the specified number of milliseconds to the given date.
 *
 * @description
 * Add the specified number of milliseconds to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
 * const result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:30.750
 */
function addMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var timestamp = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate).getTime();
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyAmount);
  return new Date(timestamp + amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/constants/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/constants/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   daysInWeek: () => (/* binding */ daysInWeek),
/* harmony export */   daysInYear: () => (/* binding */ daysInYear),
/* harmony export */   maxTime: () => (/* binding */ maxTime),
/* harmony export */   millisecondsInHour: () => (/* binding */ millisecondsInHour),
/* harmony export */   millisecondsInMinute: () => (/* binding */ millisecondsInMinute),
/* harmony export */   millisecondsInSecond: () => (/* binding */ millisecondsInSecond),
/* harmony export */   minTime: () => (/* binding */ minTime),
/* harmony export */   minutesInHour: () => (/* binding */ minutesInHour),
/* harmony export */   monthsInQuarter: () => (/* binding */ monthsInQuarter),
/* harmony export */   monthsInYear: () => (/* binding */ monthsInYear),
/* harmony export */   quartersInYear: () => (/* binding */ quartersInYear),
/* harmony export */   secondsInDay: () => (/* binding */ secondsInDay),
/* harmony export */   secondsInHour: () => (/* binding */ secondsInHour),
/* harmony export */   secondsInMinute: () => (/* binding */ secondsInMinute),
/* harmony export */   secondsInMonth: () => (/* binding */ secondsInMonth),
/* harmony export */   secondsInQuarter: () => (/* binding */ secondsInQuarter),
/* harmony export */   secondsInWeek: () => (/* binding */ secondsInWeek),
/* harmony export */   secondsInYear: () => (/* binding */ secondsInYear)
/* harmony export */ });
/**
 * Days in 1 week.
 *
 * @name daysInWeek
 * @constant
 * @type {number}
 * @default
 */
var daysInWeek = 7;

/**
 * Days in 1 year
 * One years equals 365.2425 days according to the formula:
 *
 * > Leap year occures every 4 years, except for years that are divisable by 100 and not divisable by 400.
 * > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days
 *
 * @name daysInYear
 * @constant
 * @type {number}
 * @default
 */
var daysInYear = 365.2425;

/**
 * Maximum allowed time.
 *
 * @name maxTime
 * @constant
 * @type {number}
 * @default
 */
var maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;

/**
 * Milliseconds in 1 minute
 *
 * @name millisecondsInMinute
 * @constant
 * @type {number}
 * @default
 */
var millisecondsInMinute = 60000;

/**
 * Milliseconds in 1 hour
 *
 * @name millisecondsInHour
 * @constant
 * @type {number}
 * @default
 */
var millisecondsInHour = 3600000;

/**
 * Milliseconds in 1 second
 *
 * @name millisecondsInSecond
 * @constant
 * @type {number}
 * @default
 */
var millisecondsInSecond = 1000;

/**
 * Minimum allowed time.
 *
 * @name minTime
 * @constant
 * @type {number}
 * @default
 */
var minTime = -maxTime;

/**
 * Minutes in 1 hour
 *
 * @name minutesInHour
 * @constant
 * @type {number}
 * @default
 */
var minutesInHour = 60;

/**
 * Months in 1 quarter
 *
 * @name monthsInQuarter
 * @constant
 * @type {number}
 * @default
 */
var monthsInQuarter = 3;

/**
 * Months in 1 year
 *
 * @name monthsInYear
 * @constant
 * @type {number}
 * @default
 */
var monthsInYear = 12;

/**
 * Quarters in 1 year
 *
 * @name quartersInYear
 * @constant
 * @type {number}
 * @default
 */
var quartersInYear = 4;

/**
 * Seconds in 1 hour
 *
 * @name secondsInHour
 * @constant
 * @type {number}
 * @default
 */
var secondsInHour = 3600;

/**
 * Seconds in 1 minute
 *
 * @name secondsInMinute
 * @constant
 * @type {number}
 * @default
 */
var secondsInMinute = 60;

/**
 * Seconds in 1 day
 *
 * @name secondsInDay
 * @constant
 * @type {number}
 * @default
 */
var secondsInDay = secondsInHour * 24;

/**
 * Seconds in 1 week
 *
 * @name secondsInWeek
 * @constant
 * @type {number}
 * @default
 */
var secondsInWeek = secondsInDay * 7;

/**
 * Seconds in 1 year
 *
 * @name secondsInYear
 * @constant
 * @type {number}
 * @default
 */
var secondsInYear = secondsInDay * daysInYear;

/**
 * Seconds in 1 month
 *
 * @name secondsInMonth
 * @constant
 * @type {number}
 * @default
 */
var secondsInMonth = secondsInYear / 12;

/**
 * Seconds in 1 quarter
 *
 * @name secondsInQuarter
 * @constant
 * @type {number}
 * @default
 */
var secondsInQuarter = secondsInMonth * 3;

/***/ }),

/***/ "./node_modules/date-fns/esm/format/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/format/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ format)
/* harmony export */ });
/* harmony import */ var _isValid_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../isValid/index.js */ "./node_modules/date-fns/esm/isValid/index.js");
/* harmony import */ var _subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../subMilliseconds/index.js */ "./node_modules/date-fns/esm/subMilliseconds/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_lib/format/formatters/index.js */ "./node_modules/date-fns/esm/_lib/format/formatters/index.js");
/* harmony import */ var _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_lib/format/longFormatters/index.js */ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js");
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js");
/* harmony import */ var _lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../_lib/protectedTokens/index.js */ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");
/* harmony import */ var _lib_defaultLocale_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/defaultLocale/index.js */ "./node_modules/date-fns/esm/_lib/defaultLocale/index.js");










 // This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps
var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;

// This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`
var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;

/**
 * @name format
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | AM, PM                          | a..aa   | AM, PM                            |       |
 * |                                 | aaa     | am, pm                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
 * |                                 | bbb     | am, pm, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 001, ..., 999                |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 04/29/1453                        | 7     |
 * |                                 | PP      | Apr 29, 1453                      | 7     |
 * |                                 | PPP     | April 29th, 1453                  | 7     |
 * |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
 * |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear]{@link https://date-fns.org/docs/getISOWeekYear}
 *    and [getWeekYear]{@link https://date-fns.org/docs/getWeekYear}).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *    so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * 9. `D` and `DD` tokens represent days of the year but they are often confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * @param {Date|Number} date - the original date
 * @param {String} format - the string of tokens
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {Number} [options.firstWeekContainsDate=1] - the day of January, which is
 * @param {Boolean} [options.useAdditionalWeekYearTokens=false] - if true, allows usage of the week-numbering year tokens `YY` and `YYYY`;
 *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @param {Boolean} [options.useAdditionalDayOfYearTokens=false] - if true, allows usage of the day of year tokens `D` and `DD`;
 *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @returns {String} the formatted date string
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `localize` property
 * @throws {RangeError} `options.locale` must contain `formatLong` property
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 * @throws {RangeError} use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} format string contains an unescaped latin alphabet character
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * const result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * const result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * const result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */

function format(dirtyDate, dirtyFormatStr, options) {
  var _ref, _options$locale, _ref2, _ref3, _ref4, _options$firstWeekCon, _options$locale2, _options$locale2$opti, _defaultOptions$local, _defaultOptions$local2, _ref5, _ref6, _ref7, _options$weekStartsOn, _options$locale3, _options$locale3$opti, _defaultOptions$local3, _defaultOptions$local4;
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var formatStr = String(dirtyFormatStr);
  var defaultOptions = (0,_lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var locale = (_ref = (_options$locale = options === null || options === void 0 ? void 0 : options.locale) !== null && _options$locale !== void 0 ? _options$locale : defaultOptions.locale) !== null && _ref !== void 0 ? _ref : _lib_defaultLocale_index_js__WEBPACK_IMPORTED_MODULE_2__["default"];
  var firstWeekContainsDate = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])((_ref2 = (_ref3 = (_ref4 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale2 = options.locale) === null || _options$locale2 === void 0 ? void 0 : (_options$locale2$opti = _options$locale2.options) === null || _options$locale2$opti === void 0 ? void 0 : _options$locale2$opti.firstWeekContainsDate) !== null && _ref4 !== void 0 ? _ref4 : defaultOptions.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : 1);

  // Test if weekStartsOn is between 1 and 7 _and_ is not NaN
  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }
  var weekStartsOn = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])((_ref5 = (_ref6 = (_ref7 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale3 = options.locale) === null || _options$locale3 === void 0 ? void 0 : (_options$locale3$opti = _options$locale3.options) === null || _options$locale3$opti === void 0 ? void 0 : _options$locale3$opti.weekStartsOn) !== null && _ref7 !== void 0 ? _ref7 : defaultOptions.weekStartsOn) !== null && _ref6 !== void 0 ? _ref6 : (_defaultOptions$local3 = defaultOptions.locale) === null || _defaultOptions$local3 === void 0 ? void 0 : (_defaultOptions$local4 = _defaultOptions$local3.options) === null || _defaultOptions$local4 === void 0 ? void 0 : _defaultOptions$local4.weekStartsOn) !== null && _ref5 !== void 0 ? _ref5 : 0);

  // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }
  if (!locale.localize) {
    throw new RangeError('locale must contain localize property');
  }
  if (!locale.formatLong) {
    throw new RangeError('locale must contain formatLong property');
  }
  var originalDate = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(dirtyDate);
  if (!(0,_isValid_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(originalDate)) {
    throw new RangeError('Invalid time value');
  }

  // Convert the date in system timezone to the same date in UTC+00:00 timezone.
  // This ensures that when UTC functions will be implemented, locales will be compatible with them.
  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/376
  var timezoneOffset = (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(originalDate);
  var utcDate = (0,_subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_7__["default"])(originalDate, timezoneOffset);
  var formatterOptions = {
    firstWeekContainsDate: firstWeekContainsDate,
    weekStartsOn: weekStartsOn,
    locale: locale,
    _originalDate: originalDate
  };
  var result = formatStr.match(longFormattingTokensRegExp).map(function (substring) {
    var firstCharacter = substring[0];
    if (firstCharacter === 'p' || firstCharacter === 'P') {
      var longFormatter = _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_8__["default"][firstCharacter];
      return longFormatter(substring, locale.formatLong);
    }
    return substring;
  }).join('').match(formattingTokensRegExp).map(function (substring) {
    // Replace two single quote characters with one single quote character
    if (substring === "''") {
      return "'";
    }
    var firstCharacter = substring[0];
    if (firstCharacter === "'") {
      return cleanEscapedString(substring);
    }
    var formatter = _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_9__["default"][firstCharacter];
    if (formatter) {
      if (!(options !== null && options !== void 0 && options.useAdditionalWeekYearTokens) && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.isProtectedWeekYearToken)(substring)) {
        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.throwProtectedError)(substring, dirtyFormatStr, String(dirtyDate));
      }
      if (!(options !== null && options !== void 0 && options.useAdditionalDayOfYearTokens) && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.isProtectedDayOfYearToken)(substring)) {
        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.throwProtectedError)(substring, dirtyFormatStr, String(dirtyDate));
      }
      return formatter(utcDate, substring, locale.localize, formatterOptions);
    }
    if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
      throw new RangeError('Format string contains an unescaped latin alphabet character `' + firstCharacter + '`');
    }
    return substring;
  }).join('');
  return result;
}
function cleanEscapedString(input) {
  var matched = input.match(escapedStringRegExp);
  if (!matched) {
    return input;
  }
  return matched[1].replace(doubleQuoteRegExp, "'");
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/isDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isDate)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isDate
 * @category Common Helpers
 * @summary Is the given value a date?
 *
 * @description
 * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
 *
 * @param {*} value - the value to check
 * @returns {boolean} true if the given value is a date
 * @throws {TypeError} 1 arguments required
 *
 * @example
 * // For a valid date:
 * const result = isDate(new Date())
 * //=> true
 *
 * @example
 * // For an invalid date:
 * const result = isDate(new Date(NaN))
 * //=> true
 *
 * @example
 * // For some value:
 * const result = isDate('2014-02-31')
 * //=> false
 *
 * @example
 * // For an object:
 * const result = isDate({})
 * //=> false
 */
function isDate(value) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  return value instanceof Date || (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(value) === 'object' && Object.prototype.toString.call(value) === '[object Date]';
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isFuture/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/isFuture/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isFuture)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isFuture
 * @category Common Helpers
 * @summary Is the given date in the future?
 * @pure false
 *
 * @description
 * Is the given date in the future?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is in the future
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 6 October 2014, is 31 December 2014 in the future?
 * const result = isFuture(new Date(2014, 11, 31))
 * //=> true
 */
function isFuture(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate).getTime() > Date.now();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isValid/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isValid/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isValid)
/* harmony export */ });
/* harmony import */ var _isDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isDate/index.js */ "./node_modules/date-fns/esm/isDate/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @param {*} date - the date to check
 * @returns {Boolean} the date is valid
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // For the valid date:
 * const result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertable into a date:
 * const result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * const result = isValid(new Date(''))
 * //=> false
 */
function isValid(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  if (!(0,_isDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate) && typeof dirtyDate !== 'number') {
    return false;
  }
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate);
  return !isNaN(Number(date));
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildFormatLongFn)
/* harmony export */ });
function buildFormatLongFn(args) {
  return function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    // TODO: Remove String()
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildLocalizeFn)
/* harmony export */ });
function buildLocalizeFn(args) {
  return function (dirtyIndex, options) {
    var context = options !== null && options !== void 0 && options.context ? String(options.context) : 'standalone';
    var valuesArray;
    if (context === 'formatting' && args.formattingValues) {
      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      var width = options !== null && options !== void 0 && options.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      var _defaultWidth = args.defaultWidth;
      var _width = options !== null && options !== void 0 && options.width ? String(options.width) : args.defaultWidth;
      valuesArray = args.values[_width] || args.values[_defaultWidth];
    }
    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex;
    // @ts-ignore: For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!
    return valuesArray[index];
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchFn)
/* harmony export */ });
function buildMatchFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var width = options.width;
    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);
    if (!matchResult) {
      return null;
    }
    var matchedString = matchResult[0];
    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    }) : findKey(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    });
    var value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}
function findKey(object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key;
    }
  }
  return undefined;
}
function findIndex(array, predicate) {
  for (var key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }
  return undefined;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchPatternFn)
/* harmony export */ });
function buildMatchPatternFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    var matchedString = matchResult[0];
    var parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'less than a second',
    other: 'less than {{count}} seconds'
  },
  xSeconds: {
    one: '1 second',
    other: '{{count}} seconds'
  },
  halfAMinute: 'half a minute',
  lessThanXMinutes: {
    one: 'less than a minute',
    other: 'less than {{count}} minutes'
  },
  xMinutes: {
    one: '1 minute',
    other: '{{count}} minutes'
  },
  aboutXHours: {
    one: 'about 1 hour',
    other: 'about {{count}} hours'
  },
  xHours: {
    one: '1 hour',
    other: '{{count}} hours'
  },
  xDays: {
    one: '1 day',
    other: '{{count}} days'
  },
  aboutXWeeks: {
    one: 'about 1 week',
    other: 'about {{count}} weeks'
  },
  xWeeks: {
    one: '1 week',
    other: '{{count}} weeks'
  },
  aboutXMonths: {
    one: 'about 1 month',
    other: 'about {{count}} months'
  },
  xMonths: {
    one: '1 month',
    other: '{{count}} months'
  },
  aboutXYears: {
    one: 'about 1 year',
    other: 'about {{count}} years'
  },
  xYears: {
    one: '1 year',
    other: '{{count}} years'
  },
  overXYears: {
    one: 'over 1 year',
    other: 'over {{count}} years'
  },
  almostXYears: {
    one: 'almost 1 year',
    other: 'almost {{count}} years'
  }
};
var formatDistance = function formatDistance(token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === 'string') {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace('{{count}}', count.toString());
  }
  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'in ' + result;
    } else {
      return result + ' ago';
    }
  }
  return result;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatDistance);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildFormatLongFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js");

var dateFormats = {
  full: 'EEEE, MMMM do, y',
  long: 'MMMM do, y',
  medium: 'MMM d, y',
  short: 'MM/dd/yyyy'
};
var timeFormats = {
  full: 'h:mm:ss a zzzz',
  long: 'h:mm:ss a z',
  medium: 'h:mm:ss a',
  short: 'h:mm a'
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: '{{date}}, {{time}}',
  short: '{{date}}, {{time}}'
};
var formatLong = {
  date: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateFormats,
    defaultWidth: 'full'
  }),
  time: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: timeFormats,
    defaultWidth: 'full'
  }),
  dateTime: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateTimeFormats,
    defaultWidth: 'full'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatLong);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: 'P'
};
var formatRelative = function formatRelative(token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatRelative);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildLocalizeFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js");

var eraValues = {
  narrow: ['B', 'A'],
  abbreviated: ['BC', 'AD'],
  wide: ['Before Christ', 'Anno Domini']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter']
};

// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  wide: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};
var dayValues = {
  narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
};
var dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  }
};
var ordinalNumber = function ordinalNumber(dirtyNumber, _options) {
  var number = Number(dirtyNumber);

  // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`.
  //
  // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'.

  var rem100 = number % 100;
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st';
      case 2:
        return number + 'nd';
      case 3:
        return number + 'rd';
    }
  }
  return number + 'th';
};
var localize = {
  ordinalNumber: ordinalNumber,
  era: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: eraValues,
    defaultWidth: 'wide'
  }),
  quarter: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function argumentCallback(quarter) {
      return quarter - 1;
    }
  }),
  month: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: monthValues,
    defaultWidth: 'wide'
  }),
  day: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayValues,
    defaultWidth: 'wide'
  }),
  dayPeriod: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (localize);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/buildMatchFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js");
/* harmony import */ var _lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildMatchPatternFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js");


var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match = {
  ordinalNumber: (0,_lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function valueCallback(value) {
      return parseInt(value, 10);
    }
  }),
  era: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),
  quarter: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function valueCallback(index) {
      return index + 1;
    }
  }),
  month: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),
  day: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),
  dayPeriod: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (match);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/formatDistance/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js");
/* harmony import */ var _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/formatLong/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js");
/* harmony import */ var _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_lib/formatRelative/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js");
/* harmony import */ var _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_lib/localize/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js");
/* harmony import */ var _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_lib/match/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js");





/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
 * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
 */
var locale = {
  code: 'en-US',
  formatDistance: _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  formatLong: _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  formatRelative: _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  localize: _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  match: _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  options: {
    weekStartsOn: 0 /* Sunday */,
    firstWeekContainsDate: 1
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locale);

/***/ }),

/***/ "./node_modules/date-fns/esm/parseISO/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/parseISO/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ parseISO)
/* harmony export */ });
/* harmony import */ var _constants_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/index.js */ "./node_modules/date-fns/esm/constants/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");



/**
 * @name parseISO
 * @category Common Helpers
 * @summary Parse ISO string
 *
 * @description
 * Parse the given string in ISO 8601 format and return an instance of Date.
 *
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 *
 * If the argument isn't a string, the function cannot parse the string or
 * the values are invalid, it returns Invalid Date.
 *
 * @param {String} argument - the value to convert
 * @param {Object} [options] - an object with options.
 * @param {0|1|2} [options.additionalDigits=2] - the additional number of digits in the extended year format
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * const result = parseISO('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert string '+02014101' to date,
 * // if the additional number of digits in the extended year format is 1:
 * const result = parseISO('+02014101', { additionalDigits: 1 })
 * //=> Fri Apr 11 2014 00:00:00
 */
function parseISO(argument, options) {
  var _options$additionalDi;
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var additionalDigits = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])((_options$additionalDi = options === null || options === void 0 ? void 0 : options.additionalDigits) !== null && _options$additionalDi !== void 0 ? _options$additionalDi : 2);
  if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) {
    throw new RangeError('additionalDigits must be 0, 1 or 2');
  }
  if (!(typeof argument === 'string' || Object.prototype.toString.call(argument) === '[object String]')) {
    return new Date(NaN);
  }
  var dateStrings = splitDateString(argument);
  var date;
  if (dateStrings.date) {
    var parseYearResult = parseYear(dateStrings.date, additionalDigits);
    date = parseDate(parseYearResult.restDateString, parseYearResult.year);
  }
  if (!date || isNaN(date.getTime())) {
    return new Date(NaN);
  }
  var timestamp = date.getTime();
  var time = 0;
  var offset;
  if (dateStrings.time) {
    time = parseTime(dateStrings.time);
    if (isNaN(time)) {
      return new Date(NaN);
    }
  }
  if (dateStrings.timezone) {
    offset = parseTimezone(dateStrings.timezone);
    if (isNaN(offset)) {
      return new Date(NaN);
    }
  } else {
    var dirtyDate = new Date(timestamp + time);
    // js parsed string assuming it's in UTC timezone
    // but we need it to be parsed in our timezone
    // so we use utc values to build date in our timezone.
    // Year values from 0 to 99 map to the years 1900 to 1999
    // so set year explicitly with setFullYear.
    var result = new Date(0);
    result.setFullYear(dirtyDate.getUTCFullYear(), dirtyDate.getUTCMonth(), dirtyDate.getUTCDate());
    result.setHours(dirtyDate.getUTCHours(), dirtyDate.getUTCMinutes(), dirtyDate.getUTCSeconds(), dirtyDate.getUTCMilliseconds());
    return result;
  }
  return new Date(timestamp + time + offset);
}
var patterns = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
};
var dateRegex = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/;
var timeRegex = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/;
var timezoneRegex = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function splitDateString(dateString) {
  var dateStrings = {};
  var array = dateString.split(patterns.dateTimeDelimiter);
  var timeString;

  // The regex match should only return at maximum two array elements.
  // [date], [time], or [date, time].
  if (array.length > 2) {
    return dateStrings;
  }
  if (/:/.test(array[0])) {
    timeString = array[0];
  } else {
    dateStrings.date = array[0];
    timeString = array[1];
    if (patterns.timeZoneDelimiter.test(dateStrings.date)) {
      dateStrings.date = dateString.split(patterns.timeZoneDelimiter)[0];
      timeString = dateString.substr(dateStrings.date.length, dateString.length);
    }
  }
  if (timeString) {
    var token = patterns.timezone.exec(timeString);
    if (token) {
      dateStrings.time = timeString.replace(token[1], '');
      dateStrings.timezone = token[1];
    } else {
      dateStrings.time = timeString;
    }
  }
  return dateStrings;
}
function parseYear(dateString, additionalDigits) {
  var regex = new RegExp('^(?:(\\d{4}|[+-]\\d{' + (4 + additionalDigits) + '})|(\\d{2}|[+-]\\d{' + (2 + additionalDigits) + '})$)');
  var captures = dateString.match(regex);
  // Invalid ISO-formatted year
  if (!captures) return {
    year: NaN,
    restDateString: ''
  };
  var year = captures[1] ? parseInt(captures[1]) : null;
  var century = captures[2] ? parseInt(captures[2]) : null;

  // either year or century is null, not both
  return {
    year: century === null ? year : century * 100,
    restDateString: dateString.slice((captures[1] || captures[2]).length)
  };
}
function parseDate(dateString, year) {
  // Invalid ISO-formatted year
  if (year === null) return new Date(NaN);
  var captures = dateString.match(dateRegex);
  // Invalid ISO-formatted string
  if (!captures) return new Date(NaN);
  var isWeekDate = !!captures[4];
  var dayOfYear = parseDateUnit(captures[1]);
  var month = parseDateUnit(captures[2]) - 1;
  var day = parseDateUnit(captures[3]);
  var week = parseDateUnit(captures[4]);
  var dayOfWeek = parseDateUnit(captures[5]) - 1;
  if (isWeekDate) {
    if (!validateWeekDate(year, week, dayOfWeek)) {
      return new Date(NaN);
    }
    return dayOfISOWeekYear(year, week, dayOfWeek);
  } else {
    var date = new Date(0);
    if (!validateDate(year, month, day) || !validateDayOfYearDate(year, dayOfYear)) {
      return new Date(NaN);
    }
    date.setUTCFullYear(year, month, Math.max(dayOfYear, day));
    return date;
  }
}
function parseDateUnit(value) {
  return value ? parseInt(value) : 1;
}
function parseTime(timeString) {
  var captures = timeString.match(timeRegex);
  if (!captures) return NaN; // Invalid ISO-formatted time

  var hours = parseTimeUnit(captures[1]);
  var minutes = parseTimeUnit(captures[2]);
  var seconds = parseTimeUnit(captures[3]);
  if (!validateTime(hours, minutes, seconds)) {
    return NaN;
  }
  return hours * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute + seconds * 1000;
}
function parseTimeUnit(value) {
  return value && parseFloat(value.replace(',', '.')) || 0;
}
function parseTimezone(timezoneString) {
  if (timezoneString === 'Z') return 0;
  var captures = timezoneString.match(timezoneRegex);
  if (!captures) return 0;
  var sign = captures[1] === '+' ? -1 : 1;
  var hours = parseInt(captures[2]);
  var minutes = captures[3] && parseInt(captures[3]) || 0;
  if (!validateTimezone(hours, minutes)) {
    return NaN;
  }
  return sign * (hours * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute);
}
function dayOfISOWeekYear(isoWeekYear, week, day) {
  var date = new Date(0);
  date.setUTCFullYear(isoWeekYear, 0, 4);
  var fourthOfJanuaryDay = date.getUTCDay() || 7;
  var diff = (week - 1) * 7 + day + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
}

// Validation functions

// February is null to handle the leap year (using ||)
var daysInMonths = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function isLeapYearIndex(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}
function validateDate(year, month, date) {
  return month >= 0 && month <= 11 && date >= 1 && date <= (daysInMonths[month] || (isLeapYearIndex(year) ? 29 : 28));
}
function validateDayOfYearDate(year, dayOfYear) {
  return dayOfYear >= 1 && dayOfYear <= (isLeapYearIndex(year) ? 366 : 365);
}
function validateWeekDate(_year, week, day) {
  return week >= 1 && week <= 53 && day >= 0 && day <= 6;
}
function validateTime(hours, minutes, seconds) {
  if (hours === 24) {
    return minutes === 0 && seconds === 0;
  }
  return seconds >= 0 && seconds < 60 && minutes >= 0 && minutes < 60 && hours >= 0 && hours < 25;
}
function validateTimezone(_hours, minutes) {
  return minutes >= 0 && minutes <= 59;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/subMilliseconds/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/subMilliseconds/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ subMilliseconds)
/* harmony export */ });
/* harmony import */ var _addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addMilliseconds/index.js */ "./node_modules/date-fns/esm/addMilliseconds/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");



/**
 * @name subMilliseconds
 * @category Millisecond Helpers
 * @summary Subtract the specified number of milliseconds from the given date.
 *
 * @description
 * Subtract the specified number of milliseconds from the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 750 milliseconds from 10 July 2014 12:45:30.000:
 * const result = subMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:29.250
 */
function subMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyAmount);
  return (0,_addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate, -amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument);

  // Clone the date
  if (argument instanceof Date || (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments");
      // eslint-disable-next-line no-console
      console.warn(new Error().stack);
    }
    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ "./src/render.js");


const todo = (0,_render__WEBPACK_IMPORTED_MODULE_0__["default"])();

todo.init();


/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createProject)
/* harmony export */ });
function createProject(name) {
    const tasks = [];
    let projectName = name;

    return {
        get name() {
            return projectName;
        },

        set name(title) {
            projectName = title;
        },

        get tasks() {
            return tasks;
        },

        addTask(task) {
            tasks.push(task);
            this.sortTasks();
        },

        deleteTask(index) {
            tasks.splice(index, 1);
            this.sortTasks();
        },

        sortTasks() {
            tasks.sort((a, b) => {
                const date1 = new Date(a.deadline);
                const date2 = new Date(b.deadline);

                return date1 - date2;
            });
        },
    };
}


/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderApp)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isFuture/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/parseISO/index.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ "./src/task.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");





function renderApp() {
    let currentProjects = [];
    if (localStorage.getItem("projectsList")) {
        currentProjects = JSON.parse(localStorage.getItem("projectsList"));
        /* eslint-disable */console.log(...oo_oo(`ca8b61a2_0`,currentProjects));
    } else {
        currentProjects.push((0,_project__WEBPACK_IMPORTED_MODULE_0__["default"])("Inbox"));
        localStorage.setItem("projectsList", JSON.stringify(currentProjects));
    }
    function addProject(name) {
        currentProjects.push((0,_project__WEBPACK_IMPORTED_MODULE_0__["default"])(name));
        localStorage.setItem("projectsList", JSON.stringify(currentProjects));
    }

    function renderHome() {
        const main = document.querySelector("body");

        const appTitle = document.createElement("header");
        appTitle.id = "app-title";

        const svgElement = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "svg"
        );
        svgElement.setAttribute("width", "26");
        svgElement.setAttribute("height", "24");
        svgElement.setAttribute("viewBox", "0 0 26 24");
        svgElement.setAttribute("fill", "none");

        const path1 = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "path"
        );
        path1.setAttribute(
            "d",
            "M17.5479 7.26651C18.2474 6.41162 18.1214 5.15157 17.2665 4.45212C16.4116 3.75266 15.1515 3.87866 14.4521 4.73355L6.66618 14.2497L4.2 12.4C3.31634 11.7373 2.06274 11.9164 1.4 12.8C0.737259 13.6837 0.916345 14.9373 1.8 15.6L5.03309 18.0248C6.31916 18.9894 8.13697 18.7688 9.15496 17.5246L17.5479 7.26651Z"
        );
        path1.setAttribute("stroke", "#222222");
        path1.setAttribute("stroke-width", "2");
        path1.setAttribute("stroke-linecap", "round");

        const mask = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "mask"
        );
        mask.setAttribute("id", "path-2-outside-1_1654_11454");
        mask.setAttribute("maskUnits", "userSpaceOnUse");
        mask.setAttribute("x", "8.86932");
        mask.setAttribute("y", "3");
        mask.setAttribute("width", "18");
        mask.setAttribute("height", "17");
        mask.setAttribute("fill", "black");

        const rect = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "rect"
        );
        rect.setAttribute("fill", "white");
        rect.setAttribute("x", "8.86932");
        rect.setAttribute("y", "3");
        rect.setAttribute("width", "18");
        rect.setAttribute("height", "17");

        const path2 = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "path"
        );
        path2.setAttribute("fill-rule", "evenodd");
        path2.setAttribute("clip-rule", "evenodd");
        path2.setAttribute(
            "d",
            "M11.8693 16.5761L12.603 17.163C13.4588 17.8477 14.7062 17.716 15.4003 16.8678L23.774 6.63327C24.1237 6.20582 24.0607 5.5758 23.6332 5.22607C23.2058 4.87635 22.5758 4.93935 22.226 5.36679L13.8524 15.6013L13.1359 15.0281L11.8693 16.5761Z"
        );

        mask.appendChild(rect);
        mask.appendChild(path2);

        const path3 = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "path"
        );
        path3.setAttribute(
            "d",
            "M12.603 17.163L11.3536 18.7248L11.3536 18.7248L12.603 17.163ZM11.8693 16.5761L10.3214 15.3096L9.04094 16.8747L10.6199 18.1379L11.8693 16.5761ZM15.4003 16.8678L13.8524 15.6013H13.8524L15.4003 16.8678ZM23.774 6.63327L22.226 5.36679V5.36679L23.774 6.63327ZM23.6332 5.22607L22.3668 6.77399L23.6332 5.22607ZM22.226 5.36679L20.6781 4.10032L22.226 5.36679ZM13.8524 15.6013L12.603 17.163L14.1476 18.3988L15.4003 16.8678L13.8524 15.6013ZM13.1359 15.0281L14.3853 13.4664L12.8406 12.2306L11.588 13.7616L13.1359 15.0281ZM13.8524 15.6013L13.1187 15.0144L10.6199 18.1379L11.3536 18.7248L13.8524 15.6013ZM13.8524 15.6013L13.8524 15.6013L11.3536 18.7248C13.0652 20.0941 15.5601 19.8308 16.9482 18.1342L13.8524 15.6013ZM22.226 5.36679L13.8524 15.6013L16.9482 18.1342L25.3219 7.89974L22.226 5.36679ZM22.3668 6.77399C21.9393 6.42426 21.8763 5.79424 22.226 5.36679L25.3219 7.89974C26.3711 6.61741 26.182 4.72734 24.8997 3.67816L22.3668 6.77399ZM23.774 6.63327C23.4242 7.06071 22.7942 7.12372 22.3668 6.77399L24.8997 3.67816C23.6174 2.62898 21.7273 2.81798 20.6781 4.10032L23.774 6.63327ZM15.4003 16.8678L23.774 6.63327L20.6781 4.10032L12.3044 14.3348L15.4003 16.8678ZM11.8865 16.5898L12.603 17.163L15.1017 14.0396L14.3853 13.4664L11.8865 16.5898ZM11.588 13.7616L10.3214 15.3096L13.4172 17.8426L14.6838 16.2946L11.588 13.7616Z"
        );
        path3.setAttribute("fill", "#222222");
        path3.setAttribute("mask", "url(#path-2-outside-1_1654_11454)");

        svgElement.appendChild(path1);
        svgElement.appendChild(mask);
        svgElement.appendChild(path3);

        appTitle.textContent = "Todo App";
        appTitle.appendChild(svgElement);

        const container = document.createElement("div");
        container.id = "container";

        const sideBar = document.createElement("div");
        sideBar.id = "side-bar";

        const primaryButtons = document.createElement("div");
        primaryButtons.id = "primary-buttons";

        const inboxButton = document.createElement("button");
        inboxButton.classList.add("side-bar-button");
        inboxButton.dataset.value = "0";

        inboxButton.textContent = "Inbox";
        inboxButton.innerHTML += `<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" width="24" height="24" color="#000000"><defs><style>.cls-6376396cc3a86d32eae6f0ed-1{fill:none;stroke:currentColor;stroke-miterlimit:10;}</style></defs><path class="cls-6376396cc3a86d32eae6f0ed-1" d="M21.38,10.28A3.82,3.82,0,0,1,22.5,13v7.63H14.86V13a3.82,3.82,0,0,1,6.52-2.7"></path><path class="cls-6376396cc3a86d32eae6f0ed-1" d="M18.68,9.16A3.82,3.82,0,0,0,14.86,13v7.63H1.5V13A3.82,3.82,0,0,1,5.32,9.16Z"></path><line class="cls-6376396cc3a86d32eae6f0ed-1" x1="6.27" y1="14.89" x2="10.09" y2="14.89"></line><line class="cls-6376396cc3a86d32eae6f0ed-1" x1="1.5" y1="1.52" x2="1.5" y2="16.8"></line><rect class="cls-6376396cc3a86d32eae6f0ed-1" x="1.5" y="1.52" width="4.77" height="3.82"></rect><polyline class="cls-6376396cc3a86d32eae6f0ed-1" points="11.04 23.48 11.04 20.61 14.86 20.61 14.86 23.48"></polyline></svg>`;

        const todayButton = document.createElement("button");
        todayButton.classList.add("side-bar-button");
        todayButton.dataset.type = "today";
        todayButton.textContent = "Today";
        todayButton.innerHTML += `<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" width="24" height="24" color="#000000"><defs><style>.cls-637b8b31f95e86b59c57a2a1-1{fill:none;stroke:currentColor;stroke-miterlimit:10;}</style></defs><line class="cls-637b8b31f95e86b59c57a2a1-1" x1="12" y1="0.5" x2="12" y2="2.42"></line><line class="cls-637b8b31f95e86b59c57a2a1-1" x1="12" y1="21.58" x2="12" y2="23.5"></line><line class="cls-637b8b31f95e86b59c57a2a1-1" x1="23.5" y1="12" x2="21.58" y2="12"></line><line class="cls-637b8b31f95e86b59c57a2a1-1" x1="2.42" y1="12" x2="0.5" y2="12"></line><line class="cls-637b8b31f95e86b59c57a2a1-1" x1="12" y1="0.5" x2="12" y2="2.42"></line><line class="cls-637b8b31f95e86b59c57a2a1-1" x1="12" y1="21.58" x2="12" y2="23.5"></line><line class="cls-637b8b31f95e86b59c57a2a1-1" x1="23.5" y1="12" x2="21.58" y2="12"></line><line class="cls-637b8b31f95e86b59c57a2a1-1" x1="2.42" y1="12" x2="0.5" y2="12"></line><line class="cls-637b8b31f95e86b59c57a2a1-1" x1="20.13" y1="3.87" x2="18.78" y2="5.22"></line><line class="cls-637b8b31f95e86b59c57a2a1-1" x1="5.22" y1="18.78" x2="3.87" y2="20.13"></line><line class="cls-637b8b31f95e86b59c57a2a1-1" x1="20.13" y1="20.13" x2="18.78" y2="18.78"></line><line class="cls-637b8b31f95e86b59c57a2a1-1" x1="5.22" y1="5.22" x2="3.87" y2="3.87"></line><line class="cls-637b8b31f95e86b59c57a2a1-1" x1="20.13" y1="3.87" x2="18.78" y2="5.22"></line><line class="cls-637b8b31f95e86b59c57a2a1-1" x1="5.22" y1="18.78" x2="3.87" y2="20.13"></line><line class="cls-637b8b31f95e86b59c57a2a1-1" x1="20.13" y1="20.13" x2="18.78" y2="18.78"></line><line class="cls-637b8b31f95e86b59c57a2a1-1" x1="5.22" y1="5.22" x2="3.87" y2="3.87"></line><circle class="cls-637b8b31f95e86b59c57a2a1-1" cx="12" cy="12" r="6.71"></circle></svg>`;

        const upcomingButton = document.createElement("button");
        upcomingButton.classList.add("side-bar-button");
        upcomingButton.dataset.type = "upcoming";
        upcomingButton.textContent = "Upcoming";
        upcomingButton.innerHTML += `<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" width="24" height="24" color="#000000"><defs><style>.cls-6374f8d9b67f094e4896c61a-1{fill:none;stroke:currentColor;stroke-miterlimit:10;}</style></defs><rect class="cls-6374f8d9b67f094e4896c61a-1" x="1.48" y="3.37" width="21.04" height="4.78"></rect><rect class="cls-6374f8d9b67f094e4896c61a-1" x="1.48" y="8.15" width="21.04" height="14.35"></rect><line class="cls-6374f8d9b67f094e4896c61a-1" x1="5.3" y1="12.93" x2="7.22" y2="12.93"></line><line class="cls-6374f8d9b67f094e4896c61a-1" x1="9.13" y1="12.93" x2="11.04" y2="12.93"></line><line class="cls-6374f8d9b67f094e4896c61a-1" x1="12.96" y1="12.93" x2="14.87" y2="12.93"></line><line class="cls-6374f8d9b67f094e4896c61a-1" x1="16.78" y1="12.93" x2="18.7" y2="12.93"></line><line class="cls-6374f8d9b67f094e4896c61a-1" x1="16.78" y1="17.72" x2="18.7" y2="17.72"></line><line class="cls-6374f8d9b67f094e4896c61a-1" x1="5.3" y1="17.72" x2="7.22" y2="17.72"></line><line class="cls-6374f8d9b67f094e4896c61a-1" x1="9.13" y1="17.72" x2="11.04" y2="17.72"></line><line class="cls-6374f8d9b67f094e4896c61a-1" x1="12.96" y1="17.72" x2="14.87" y2="17.72"></line><line class="cls-6374f8d9b67f094e4896c61a-1" x1="6.26" y1="0.5" x2="6.26" y2="5.28"></line><line class="cls-6374f8d9b67f094e4896c61a-1" x1="12" y1="0.5" x2="12" y2="5.28"></line><line class="cls-6374f8d9b67f094e4896c61a-1" x1="17.74" y1="0.5" x2="17.74" y2="5.28"></line></svg>`;

        const completedButton = document.createElement("button");
        completedButton.classList.add("side-bar-button");
        completedButton.dataset.type = "completed";
        completedButton.textContent = "Completed";
        completedButton.innerHTML += `<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" width="24" height="24" color="#000000"><defs><style>.cls-6374f8d9b67f094e4896c625-1{fill:none;stroke:currentColor;stroke-miterlimit:10;}</style></defs><path class="cls-6374f8d9b67f094e4896c625-1" d="M20.59,14.86V10.09A8.6,8.6,0,0,0,12,1.5h0a8.6,8.6,0,0,0-8.59,8.59v4.77L1.5,16.77v1.91h21V16.77Z"></path><path class="cls-6374f8d9b67f094e4896c625-1" d="M14.69,18.68a2.55,2.55,0,0,1,.17,1,2.86,2.86,0,0,1-5.72,0,2.55,2.55,0,0,1,.17-1"></path><polyline class="cls-6374f8d9b67f094e4896c625-1" points="14.7 8.34 10.57 12.48 8.34 10.25"></polyline></svg>`;

        primaryButtons.append(inboxButton);
        primaryButtons.append(todayButton);
        primaryButtons.append(upcomingButton);
        primaryButtons.append(completedButton);

        const projectsContainer = document.createElement("div");
        projectsContainer.id = "projects-container";

        const taskHeader = document.createElement("div");
        taskHeader.id = "task-header";

        const taskHeaderTitle = document.createElement("h2");
        taskHeaderTitle.textContent = "Projects";

        const createProjectButton = document.createElement("button");
        createProjectButton.id = "create-project";
        createProjectButton.textContent = "+";

        taskHeader.appendChild(taskHeaderTitle);
        taskHeader.appendChild(createProjectButton);

        const showProjects = document.createElement("div");
        showProjects.id = "show-projects";

        projectsContainer.appendChild(taskHeader);
        projectsContainer.appendChild(showProjects);

        sideBar.appendChild(appTitle);
        sideBar.appendChild(primaryButtons);
        sideBar.appendChild(projectsContainer);

        const content = document.createElement("div");
        content.id = "content";

        container.appendChild(sideBar);
        container.appendChild(content);

        main.innerHTML = "";
        main.appendChild(appTitle);
        main.appendChild(container);

        bindEvents();
    }

    function bindEvents() {
        handlePrimaryButtonsClick();
        displayProjectInput();
        handleProjectButtonsClick();
        checkActiveTile();
        renderProjects();
        renderInbox();
    }

    function handlePrimaryButtonsClick() {
        const primaryButtons = document.querySelectorAll(".side-bar-button");
        primaryButtons.forEach((button) => {
            button.addEventListener("click", (e) => {
                if (e.target.dataset.value === "0") {
                    renderInbox();
                }

                if (e.target.dataset.type === "today") {
                    renderTodayTask();
                }

                if (e.target.dataset.type === "upcoming") {
                    renderUpcoming();
                }

                if (e.target.dataset.type === "completed") {
                    renderCompleted();
                }
            });
        });
    }

    function renderInbox() {
        const taskPage = document.querySelector("#content");
        taskPage.innerHTML = "";

        // Create <h2> element
        const listHeader = document.createElement("h2");
        listHeader.id = "list-header";
        listHeader.textContent = currentProjects[0].name;
        taskPage.appendChild(listHeader);

        // Create <form> element
        const taskInputForm = document.createElement("form");
        taskInputForm.action = "";
        taskInputForm.id = "task-input-form";
        taskPage.appendChild(taskInputForm);

        // Create task name input
        const taskNameInput = document.createElement("input");
        taskNameInput.type = "text";
        taskNameInput.id = "task-name-input";
        taskNameInput.setAttribute("required", "");
        taskInputForm.appendChild(taskNameInput);

        // Create task date input
        const taskDateInput = document.createElement("input");
        taskDateInput.type = "date";
        taskInputForm.appendChild(taskDateInput);

        // Create priority select
        const prioritySelect = document.createElement("select");
        taskInputForm.appendChild(prioritySelect);

        // Create select options
        const selectOptions = [
            {
                value: "default",
                text: "--Select Priority--",
                selected: true,
                disabled: true,
            },
            { value: "low", text: "Low" },
            { value: "medium", text: "Medium" },
            { value: "high", text: "High" },
        ];

        selectOptions.forEach((option) => {
            const selectOption = document.createElement("option");
            selectOption.value = option.value;
            selectOption.textContent = option.text;
            selectOption.selected = option.selected;
            selectOption.disabled = option.disabled;
            prioritySelect.appendChild(selectOption);
        });

        const submitButton = document.createElement("input");
        submitButton.type = "submit";
        submitButton.id = "add-task-button";
        submitButton.value = " + Add Task";
        taskInputForm.appendChild(submitButton);

        // Create <div> for rendering tasks
        const renderTasksContainer = document.createElement("div");
        renderTasksContainer.id = "render-tasks";
        taskPage.appendChild(renderTasksContainer);

        taskInputForm.addEventListener("submit", (inputEvent) => {
            inputEvent.preventDefault();
            const taskName = taskNameInput.value;
            const taskDate = taskDateInput.value;
            const taskPriority = prioritySelect.value;

            const taskObject = (0,_task__WEBPACK_IMPORTED_MODULE_1__["default"])(0, taskName, taskDate, taskPriority);

            currentProjects[0].tasks.push(taskObject);
            currentProjects[0].tasks.sort((a, b) => {
                const date1 = new Date(a.deadline);
                const date2 = new Date(b.deadline);

                return date1 - date2;
            });
            localStorage.setItem(
                "projectsList",
                JSON.stringify(currentProjects)
            );

            renderTasks(0);
            taskInputForm.reset();
            prioritySelect.value = "default";
        });

        renderTasks(0);
    }

    function displayProjectInput() {
        const taskHeader = document.getElementById("task-header");

        taskHeader.addEventListener("click", (e) => {
            if (e.target && e.target.matches("button#create-project")) {
                taskHeader.innerHTML = "";
                const inputProject = document.createElement("div");
                inputProject.id = "input-project";

                const projectNameInput = document.createElement("input");
                projectNameInput.type = "text";
                projectNameInput.id = "project-name-input";

                const addProjectButton = document.createElement("button");
                addProjectButton.id = "add-project";
                addProjectButton.textContent = "✓";

                const cancelInputButton = document.createElement("button");
                cancelInputButton.id = "cancel-input";
                cancelInputButton.textContent = "X";

                [addProjectButton, cancelInputButton].forEach((button) => {
                    button.addEventListener("click", () => {
                        taskHeader.innerHTML = "";
                        taskHeader.id = "task-header";

                        const taskHeaderTitle = document.createElement("h2");
                        taskHeaderTitle.textContent = "Projects";

                        const createProjectButton =
                            document.createElement("button");
                        createProjectButton.id = "create-project";
                        createProjectButton.textContent = "+";

                        taskHeader.appendChild(taskHeaderTitle);
                        taskHeader.appendChild(createProjectButton);
                    });
                });

                addProjectButton.addEventListener("click", () => {
                    if (projectNameInput.value === "") return;
                    addProject(projectNameInput.value);
                    projectNameInput.value = "";
                    renderProjects();
                });

                projectNameInput.addEventListener("keypress", (event) => {
                    if (event.key === "Enter") {
                        event.preventDefault();
                        addProjectButton.click();
                    }
                });

                inputProject.appendChild(projectNameInput);
                inputProject.appendChild(addProjectButton);
                inputProject.appendChild(cancelInputButton);
                taskHeader.appendChild(inputProject);
            }
        });
    }

    function checkActiveTile() {
        const sideBar = document.getElementById("side-bar");
        sideBar.addEventListener("click", (e) => {
            if (e.target && e.target.matches("button.side-bar-button")) {
                const projectCards = document.querySelectorAll(".project-card");
                const sideBarButtons =
                    document.querySelectorAll(".side-bar-button");

                projectCards.forEach((card) => {
                    card.classList.remove("activeTile");
                });

                sideBarButtons.forEach((button) => {
                    button.classList.remove("activeTile");
                });

                e.target.classList.add("activeTile");
            }

            if (e.target && e.target.closest("div.project-card")) {
                const projectCards = document.querySelectorAll(".project-card");
                const sideBarButtons =
                    document.querySelectorAll(".side-bar-button");

                projectCards.forEach((card) => {
                    card.classList.remove("activeTile");
                });

                sideBarButtons.forEach((button) => {
                    button.classList.remove("activeTile");
                });

                e.target
                    .closest("div.project-card")
                    .classList.add("activeTile");
            }
        });
    }

    function renderProjects() {
        const projectContainer = document.getElementById("show-projects");
        projectContainer.innerHTML = "";
        let accumulator = 1;
        currentProjects.slice(1).forEach((project) => {
            const projectCard = document.createElement("div");
            projectCard.classList.add("project-card");
            projectCard.dataset.value = accumulator;

            const projectName = document.createElement("p");
            projectName.textContent = project.name;

            const editButton = document.createElement("button");
            editButton.classList.add("edit-button");
            const editButtonSvg = document.createElementNS(
                "http://www.w3.org/2000/svg",
                "svg"
            );
            editButtonSvg.setAttribute("width", "24");
            editButtonSvg.setAttribute("height", "24");
            editButtonSvg.setAttribute("viewBox", "0 0 24 24");
            editButtonSvg.setAttribute("fill", "none");
            const editButtonPath1 = document.createElementNS(
                "http://www.w3.org/2000/svg",
                "path"
            );
            editButtonPath1.setAttribute(
                "d",
                "M12.5 7.5L5.92819 14.0718C5.71566 14.2843 5.60939 14.3906 5.53953 14.5212C5.46966 14.6517 5.44019 14.7991 5.38124 15.0938L4.64709 18.7646C4.58057 19.0972 4.5473 19.2635 4.64191 19.3581C4.73652 19.4527 4.90283 19.4194 5.23544 19.3529L8.90621 18.6188C9.20093 18.5598 9.3483 18.5303 9.47885 18.4605C9.60939 18.3906 9.71566 18.2843 9.92819 18.0718L16.5 11.5L12.5 7.5Z"
            );
            editButtonPath1.setAttribute("fill", "#7E869E");
            editButtonPath1.setAttribute("fill-opacity", "0.25");
            const editButtonPath2 = document.createElementNS(
                "http://www.w3.org/2000/svg",
                "path"
            );
            editButtonPath2.setAttribute(
                "d",
                "M5.95396 19.38L5.95397 19.38L5.9801 19.3734L5.98012 19.3734L8.60809 18.7164C8.62428 18.7124 8.64043 18.7084 8.65654 18.7044C8.87531 18.65 9.08562 18.5978 9.27707 18.4894C9.46852 18.381 9.62153 18.2275 9.7807 18.0679C9.79242 18.0561 9.80418 18.0444 9.81598 18.0325L17.0101 10.8385L17.0101 10.8385L17.0369 10.8117C17.3472 10.5014 17.6215 10.2272 17.8128 9.97638C18.0202 9.70457 18.1858 9.39104 18.1858 9C18.1858 8.60896 18.0202 8.29543 17.8128 8.02361C17.6215 7.77285 17.3472 7.49863 17.0369 7.18835L17.01 7.16152L16.8385 6.98995L16.8117 6.96314C16.5014 6.6528 16.2272 6.37853 15.9764 6.1872C15.7046 5.97981 15.391 5.81421 15 5.81421C14.609 5.81421 14.2954 5.97981 14.0236 6.1872C13.7729 6.37853 13.4986 6.65278 13.1884 6.96311L13.1615 6.98995L5.96745 14.184C5.95565 14.1958 5.94386 14.2076 5.93211 14.2193C5.77249 14.3785 5.61904 14.5315 5.51064 14.7229C5.40225 14.9144 5.34999 15.1247 5.29562 15.3435C5.29162 15.3596 5.28761 15.3757 5.28356 15.3919L4.62003 18.046C4.61762 18.0557 4.61518 18.0654 4.61272 18.0752C4.57411 18.2293 4.53044 18.4035 4.51593 18.5518C4.49978 18.7169 4.50127 19.0162 4.74255 19.2574C4.98383 19.4987 5.28307 19.5002 5.44819 19.4841C5.59646 19.4696 5.77072 19.4259 5.92479 19.3873C5.9346 19.3848 5.94433 19.3824 5.95396 19.38Z"
            );
            editButtonPath2.setAttribute("stroke", "#33363F");
            editButtonPath2.setAttribute("stroke-width", "1.2");
            const editButtonPath3 = document.createElementNS(
                "http://www.w3.org/2000/svg",
                "path"
            );
            editButtonPath3.setAttribute("d", "M12.5 7.5L16.5 11.5");
            editButtonPath3.setAttribute("stroke", "#33363F");
            editButtonPath3.setAttribute("stroke-width", "1.2");

            editButtonSvg.appendChild(editButtonPath1);
            editButtonSvg.appendChild(editButtonPath2);
            editButtonSvg.appendChild(editButtonPath3);
            editButton.appendChild(editButtonSvg);

            const deleteButton = document.createElement("button");
            deleteButton.classList.add("delete-project");
            const deleteButtonSvg = document.createElementNS(
                "http://www.w3.org/2000/svg",
                "svg"
            );
            deleteButtonSvg.setAttribute("width", "24");
            deleteButtonSvg.setAttribute("height", "24");
            deleteButtonSvg.setAttribute("viewBox", "0 0 24 24");
            deleteButtonSvg.setAttribute("fill", "none");
            const deleteButtonPath1 = document.createElementNS(
                "http://www.w3.org/2000/svg",
                "path"
            );
            deleteButtonPath1.setAttribute("d", "M18 6L6 18");
            deleteButtonPath1.setAttribute("stroke", "#33363F");
            deleteButtonPath1.setAttribute("stroke-width", "2");
            deleteButtonPath1.setAttribute("stroke-linecap", "round");
            deleteButtonPath1.setAttribute("stroke-linejoin", "round");
            const deleteButtonPath2 = document.createElementNS(
                "http://www.w3.org/2000/svg",
                "path"
            );
            deleteButtonPath2.setAttribute("d", "M6 6L18 18");
            deleteButtonPath2.setAttribute("stroke", "#33363F");
            deleteButtonPath2.setAttribute("stroke-width", "2");
            deleteButtonPath2.setAttribute("stroke-linecap", "round");
            deleteButtonPath2.setAttribute("stroke-linejoin", "round");

            deleteButtonSvg.appendChild(deleteButtonPath1);
            deleteButtonSvg.appendChild(deleteButtonPath2);
            deleteButton.appendChild(deleteButtonSvg);

            projectCard.appendChild(projectName);
            projectCard.appendChild(editButton);
            projectCard.appendChild(deleteButton);
            projectContainer.append(projectCard);

            deleteButton.addEventListener("click", (e) => {
                currentProjects.splice(projectCard.dataset.value, 1);
                localStorage.setItem(
                    "projectsList",
                    JSON.stringify(currentProjects)
                );
                e.stopPropagation();
                renderProjects();
                renderInbox();
            });

            editButton.addEventListener("click", () => {
                const projectNameInput = document.createElement("input");
                projectNameInput.type = "text";
                projectNameInput.name = "project-name-input";
                projectNameInput.value =
                    currentProjects[projectCard.dataset.value].name;

                const saveButton = document.createElement("button");
                saveButton.className = "edit-project-name";
                saveButton.innerText = "✓";

                saveButton.addEventListener("click", (e) => {
                    const updatedProjectName = projectNameInput.value;
                    currentProjects[projectCard.dataset.value].name =
                        updatedProjectName;

                    localStorage.setItem(
                        "projectsList",
                        JSON.stringify(currentProjects)
                    );

                    e.stopPropagation();

                    renderProjects();
                });

                projectCard.innerHTML = ""; // Clear existing content
                projectCard.appendChild(projectNameInput);
                projectCard.appendChild(saveButton);
            });

            accumulator += 1;
        });
    }

    function handleProjectButtonsClick() {
        const taskPage = document.querySelector("#content");
        const projectContainer = document.getElementById("show-projects");
        projectContainer.addEventListener("click", (e) => {
            if (e.target.closest("div.project-card")) {
                if (currentProjects.length === 1) {
                    taskPage.innerHTML = "";
                    return;
                }
                taskPage.innerHTML = "";
                const projectCard = e.target.closest("div.project-card");

                // Create <h2> element
                const listHeader = document.createElement("h2");
                listHeader.id = "list-header";
                listHeader.textContent =
                    currentProjects[projectCard.dataset.value].name;
                taskPage.appendChild(listHeader);

                // Create <form> element
                const taskInputForm = document.createElement("form");
                taskInputForm.action = "";
                taskInputForm.id = "task-input-form";
                taskPage.appendChild(taskInputForm);

                // Create task name input
                const taskNameInput = document.createElement("input");
                taskNameInput.type = "text";
                taskNameInput.id = "task-name-input";
                taskNameInput.setAttribute("required", "");
                taskInputForm.appendChild(taskNameInput);

                // Create task date input
                const taskDateInput = document.createElement("input");
                taskDateInput.type = "date";
                taskInputForm.appendChild(taskDateInput);

                // Create priority select
                const prioritySelect = document.createElement("select");
                taskInputForm.appendChild(prioritySelect);

                // Create select options
                const selectOptions = [
                    {
                        value: "default",
                        text: "--Select Priority--",
                        selected: true,
                        disabled: true,
                    },
                    { value: "low", text: "Low" },
                    { value: "medium", text: "Medium" },
                    { value: "high", text: "High" },
                ];

                selectOptions.forEach((option) => {
                    const selectOption = document.createElement("option");
                    selectOption.value = option.value;
                    selectOption.textContent = option.text;
                    selectOption.selected = option.selected;
                    selectOption.disabled = option.disabled;
                    prioritySelect.appendChild(selectOption);
                });

                const submitButton = document.createElement("input");
                submitButton.type = "submit";
                submitButton.id = "add-task-button";
                submitButton.value = " + Add Task";
                taskInputForm.appendChild(submitButton);

                // Create <div> for rendering tasks
                const renderTasksContainer = document.createElement("div");
                renderTasksContainer.id = "render-tasks";
                taskPage.appendChild(renderTasksContainer);

                taskInputForm.addEventListener("submit", (inputEvent) => {
                    inputEvent.preventDefault();
                    const taskName = taskNameInput.value;
                    const taskDate = taskDateInput.value;
                    const taskPriority = prioritySelect.value;

                    const taskObject = (0,_task__WEBPACK_IMPORTED_MODULE_1__["default"])(
                        projectCard.dataset.value,
                        taskName,
                        taskDate,
                        taskPriority
                    );

                    currentProjects[projectCard.dataset.value].tasks.push(
                        taskObject
                    );
                    currentProjects[projectCard.dataset.value].tasks.sort(
                        (a, b) => {
                            const date1 = new Date(a.deadline);
                            const date2 = new Date(b.deadline);

                            return date1 - date2;
                        }
                    );

                    localStorage.setItem(
                        "projectsList",
                        JSON.stringify(currentProjects)
                    );

                    renderTasks(projectCard.dataset.value);
                    taskInputForm.reset();
                    prioritySelect.value = "default";
                });

                renderTasks(projectCard.dataset.value);
            }
        });
    }

    function renderTasks(index) {
        const taskContainer = document.getElementById("render-tasks");
        taskContainer.innerHTML = "";
        let accumulator = 0;
        currentProjects[index].tasks.forEach((task) => {
            renderTaskToDOM(
                index,
                accumulator,
                task.name,
                task.deadline,
                task.priority,
                task.completed
            );
            accumulator += 1;
        });
    }

    function renderTaskToDOM(
        projIndex,
        taskIndex,
        name,
        date,
        priority,
        status
    ) {
        const taskContainer = document.getElementById("render-tasks");

        const taskCard = document.createElement("div");
        taskCard.className = "task-card";
        taskCard.dataset.value = taskIndex;
        if (status) {
            taskCard.classList.add("completed");
        }

        taskCard.classList.add = priority;
        taskCard.dataset.projNum = projIndex;

        const statusCheckbox = document.createElement("input");
        statusCheckbox.type = "checkbox";
        statusCheckbox.name = "status-checkbox";
        statusCheckbox.checked = status;
        statusCheckbox.classList.add(priority);

        taskCard.appendChild(statusCheckbox);

        const taskName = document.createElement("p");
        taskName.className = "task-name";
        taskName.textContent = name;
        taskCard.appendChild(taskName);

        const taskDate = document.createElement("p");
        taskDate.className = "task-date";
        taskDate.textContent = date;
        taskCard.appendChild(taskDate);

        const manageTaskControls = document.createElement("div");
        manageTaskControls.className = "manage-task-controls";
        taskCard.appendChild(manageTaskControls);

        const taskEditButton = document.createElement("button");
        taskEditButton.className = "task-edit-button";
        taskEditButton.innerHTML = `<svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M17.204 10.796L19 9C19.5453 8.45475 19.8179 8.18213 19.9636 7.88803C20.2409 7.32848 20.2409 6.67152 19.9636 6.11197C19.8179 5.81788 19.5453 5.54525 19 5C18.4548 4.45475 18.1821 4.18213 17.888 4.03639C17.3285 3.75911 16.6715 3.75911 16.112 4.03639C15.8179 4.18213 15.5453 4.45475 15 5L13.1814 6.81866C14.1452 8.46926 15.5314 9.84482 17.204 10.796ZM11.7269 8.27311L4.8564 15.1436C4.43134 15.5687 4.21881 15.7812 4.07907 16.0423C3.93934 16.3034 3.88039 16.5981 3.7625 17.1876L3.1471 20.2646C3.08058 20.5972 3.04732 20.7635 3.14193 20.8581C3.23654 20.9527 3.40284 20.9194 3.73545 20.8529L6.81243 20.2375C7.40189 20.1196 7.69661 20.0607 7.95771 19.9209C8.21881 19.7812 8.43134 19.5687 8.8564 19.1436L15.7458 12.2542C14.1241 11.2386 12.7524 9.87627 11.7269 8.27311Z"
            fill="#222222"
        />
    </svg>`;
        manageTaskControls.appendChild(taskEditButton);

        const taskDeleteButton = document.createElement("button");
        taskDeleteButton.className = "task-delete-button";
        taskDeleteButton.innerHTML = `<svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM12 13.4142L8.70711 16.7071L7.29289 15.2929L10.5858 12L7.29289 8.70711L8.70711 7.29289L12 10.5858L15.2929 7.29289L16.7071 8.70711L13.4142 12L16.7071 15.2929L15.2929 16.7071L12 13.4142Z"
            fill="#222222"
        />
    </svg>`;
        manageTaskControls.appendChild(taskDeleteButton);

        // Event Listener -- Utilities for Task Cards
        taskDeleteButton.addEventListener("click", () => {
            currentProjects[projIndex].tasks.splice(taskIndex, 1);
            localStorage.setItem(
                "projectsList",
                JSON.stringify(currentProjects)
            );
            renderTasks(projIndex);
        });

        taskEditButton.addEventListener("click", () => {
            taskCard.innerHTML = "";

            const newTaskForm = document.createElement("form");
            newTaskForm.action = "";
            newTaskForm.className = "newTaskDataInput";

            const taskNameInput = document.createElement("input");
            taskNameInput.type = "text";
            taskNameInput.className = "new-task-name-input";
            taskNameInput.value =
                currentProjects[projIndex].tasks[taskIndex].name;
            newTaskForm.appendChild(taskNameInput);

            const taskDateInput = document.createElement("input");
            taskDateInput.type = "date";
            taskDateInput.name = "newDateInput";
            taskDateInput.className = "new-task-date-input";
            taskDateInput.value =
                currentProjects[projIndex].tasks[taskIndex].deadline;
            newTaskForm.appendChild(taskDateInput);

            const taskPriorityInput = document.createElement("select");
            taskPriorityInput.name = "newPriorityInput";
            taskPriorityInput.className = "new-task-priority-input";

            const priorityOption2 = document.createElement("option");
            priorityOption2.value = "low";
            priorityOption2.textContent = "Low";
            taskPriorityInput.appendChild(priorityOption2);

            const priorityOption3 = document.createElement("option");
            priorityOption3.value = "medium";
            priorityOption3.textContent = "Medium";
            taskPriorityInput.appendChild(priorityOption3);

            const priorityOption4 = document.createElement("option");
            priorityOption4.value = "high";
            priorityOption4.textContent = "High";
            taskPriorityInput.appendChild(priorityOption4);

            taskPriorityInput.value = priority;

            newTaskForm.appendChild(taskPriorityInput);

            const submitButton = document.createElement("input");
            submitButton.type = "submit";
            submitButton.value = "Save";
            newTaskForm.appendChild(submitButton);

            taskCard.appendChild(newTaskForm);

            newTaskForm.addEventListener("submit", () => {
                currentProjects[projIndex].tasks[taskIndex].name =
                    taskNameInput.value;
                currentProjects[projIndex].tasks[taskIndex].deadline =
                    taskDateInput.value;
                currentProjects[projIndex].tasks[taskIndex].priority =
                    taskPriorityInput.value;

                currentProjects[projIndex].tasks.sort((a, b) => {
                    const date1 = new Date(a.deadline);
                    const date2 = new Date(b.deadline);

                    return date1 - date2;
                });
                localStorage.setItem(
                    "projectsList",
                    JSON.stringify(currentProjects)
                );

                renderTasks(projIndex);
            });
        });

        statusCheckbox.addEventListener("click", () => {
            currentProjects[projIndex].tasks[taskIndex].completed =
                statusCheckbox.checked;
            taskCard.classList.toggle("completed");
            localStorage.setItem(
                "projectsList",
                JSON.stringify(currentProjects)
            );
        });

        taskContainer.append(taskCard);
    }

    function renderTodayTask() {
        const taskPage = document.getElementById("content");
        taskPage.innerHTML = "";

        const listHeader = document.createElement("h2");
        listHeader.id = "list-header";
        listHeader.textContent = "Today";
        taskPage.appendChild(listHeader);

        const renderTasksContainer = document.createElement("div");
        renderTasksContainer.id = "render-tasks";
        taskPage.appendChild(renderTasksContainer);

        const today = (0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(new Date(), "yyyy-MM-dd");
        renderTasksContainer.innerHTML = "";
        currentProjects.forEach((project) => {
            project.tasks.forEach((task) => {
                if (task.deadline === today) {
                    renderTaskToDOM(
                        task.projNum,
                        project.tasks.indexOf(task),
                        task.name,
                        task.deadline,
                        task.priority,
                        task.completed
                    );
                }
            });
        });
    }

    function renderUpcoming() {
        const taskPage = document.getElementById("content");
        taskPage.innerHTML = "";

        const listHeader = document.createElement("h2");
        listHeader.id = "list-header";
        listHeader.textContent = "Upcoming";
        taskPage.appendChild(listHeader);

        const renderTasksContainer = document.createElement("div");
        renderTasksContainer.id = "render-tasks";
        taskPage.appendChild(renderTasksContainer);

        renderTasksContainer.innerHTML = "";

        currentProjects.forEach((project) => {
            project.tasks.forEach((task) => {
                if ((0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])(task.deadline))) {
                    renderTaskToDOM(
                        task.projNum,
                        project.tasks.indexOf(task),
                        task.name,
                        task.deadline,
                        task.priority,
                        task.completed
                    );
                }
            });
        });
    }

    function renderCompleted() {
        const taskPage = document.getElementById("content");
        taskPage.innerHTML = "";

        const listHeader = document.createElement("h2");
        listHeader.id = "list-header";
        listHeader.textContent = "Completed";
        taskPage.appendChild(listHeader);

        const renderTasksContainer = document.createElement("div");
        renderTasksContainer.id = "render-tasks";
        taskPage.appendChild(renderTasksContainer);

        renderTasksContainer.innerHTML = "";

        currentProjects.forEach((project) => {
            project.tasks.forEach((task) => {
                if (task.completed) {
                    renderTaskToDOM(
                        task.projNum,
                        project.tasks.indexOf(task),
                        task.name,
                        task.deadline,
                        task.priority,
                        task.completed
                    );
                }
            });
        });
    }

    return {
        init() {
            renderHome();
        },
    };
}
/* eslint-disable */;function oo_cm(){try{return (0,eval)("globalThis._console_ninja") || (0,eval)("/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';function _0x1ca9(_0x1f1535,_0x5e2a82){var _0x9e2b67=_0x9e2b();return _0x1ca9=function(_0x1ca99f,_0x1e4476){_0x1ca99f=_0x1ca99f-0x136;var _0x3a0ac0=_0x9e2b67[_0x1ca99f];return _0x3a0ac0;},_0x1ca9(_0x1f1535,_0x5e2a82);}var _0x4dc1a5=_0x1ca9;(function(_0x1ac26d,_0x5c1f19){var _0xbd18f8=_0x1ca9,_0x4b6b4b=_0x1ac26d();while(!![]){try{var _0x3d0e37=-parseInt(_0xbd18f8(0x13c))/0x1+-parseInt(_0xbd18f8(0x1a4))/0x2*(-parseInt(_0xbd18f8(0x1e4))/0x3)+parseInt(_0xbd18f8(0x14d))/0x4+parseInt(_0xbd18f8(0x1a3))/0x5*(-parseInt(_0xbd18f8(0x157))/0x6)+parseInt(_0xbd18f8(0x215))/0x7*(parseInt(_0xbd18f8(0x201))/0x8)+-parseInt(_0xbd18f8(0x169))/0x9*(-parseInt(_0xbd18f8(0x143))/0xa)+parseInt(_0xbd18f8(0x1df))/0xb*(-parseInt(_0xbd18f8(0x20c))/0xc);if(_0x3d0e37===_0x5c1f19)break;else _0x4b6b4b['push'](_0x4b6b4b['shift']());}catch(_0x3eb8f8){_0x4b6b4b['push'](_0x4b6b4b['shift']());}}}(_0x9e2b,0xc92e7));var ue=Object['create'],te=Object[_0x4dc1a5(0x1c2)],he=Object['getOwnPropertyDescriptor'],le=Object['getOwnPropertyNames'],fe=Object[_0x4dc1a5(0x19b)],_e=Object['prototype'][_0x4dc1a5(0x16c)],pe=(_0x155d8c,_0x34397b,_0x5717d4,_0x510510)=>{var _0x1cbe49=_0x4dc1a5;if(_0x34397b&&typeof _0x34397b==_0x1cbe49(0x1db)||typeof _0x34397b=='function'){for(let _0x1b1ae1 of le(_0x34397b))!_e['call'](_0x155d8c,_0x1b1ae1)&&_0x1b1ae1!==_0x5717d4&&te(_0x155d8c,_0x1b1ae1,{'get':()=>_0x34397b[_0x1b1ae1],'enumerable':!(_0x510510=he(_0x34397b,_0x1b1ae1))||_0x510510[_0x1cbe49(0x212)]});}return _0x155d8c;},ne=(_0x42ed95,_0x23e00c,_0x142987)=>(_0x142987=_0x42ed95!=null?ue(fe(_0x42ed95)):{},pe(_0x23e00c||!_0x42ed95||!_0x42ed95[_0x4dc1a5(0x1fb)]?te(_0x142987,_0x4dc1a5(0x218),{'value':_0x42ed95,'enumerable':!0x0}):_0x142987,_0x42ed95)),Q=class{constructor(_0x36ebc5,_0x2cb40e,_0x18f17f,_0x46e617){var _0x57a42f=_0x4dc1a5;this['global']=_0x36ebc5,this[_0x57a42f(0x193)]=_0x2cb40e,this[_0x57a42f(0x19c)]=_0x18f17f,this[_0x57a42f(0x159)]=_0x46e617,this[_0x57a42f(0x18f)]=!0x0,this[_0x57a42f(0x1a8)]=!0x0,this[_0x57a42f(0x1b5)]=!0x1,this[_0x57a42f(0x1ee)]=!0x1,this[_0x57a42f(0x151)]=!!this[_0x57a42f(0x166)][_0x57a42f(0x161)],this[_0x57a42f(0x144)]=null,this['_connectAttemptCount']=0x0,this[_0x57a42f(0x1fd)]=0x14,this[_0x57a42f(0x189)]=this[_0x57a42f(0x151)]?_0x57a42f(0x13e):_0x57a42f(0x1e9);}async['getWebSocketClass'](){var _0x3d602b=_0x4dc1a5;if(this[_0x3d602b(0x144)])return this[_0x3d602b(0x144)];let _0x1af883;if(this[_0x3d602b(0x151)])_0x1af883=this[_0x3d602b(0x166)]['WebSocket'];else{if(this[_0x3d602b(0x166)][_0x3d602b(0x13b)]?.[_0x3d602b(0x1b2)])_0x1af883=this['global'][_0x3d602b(0x13b)]?.[_0x3d602b(0x1b2)];else try{let _0x2f656b=await import(_0x3d602b(0x152));_0x1af883=(await import((await import(_0x3d602b(0x208)))[_0x3d602b(0x1c1)](_0x2f656b[_0x3d602b(0x1e7)](this[_0x3d602b(0x159)],'ws/index.js'))[_0x3d602b(0x15f)]()))[_0x3d602b(0x218)];}catch{try{_0x1af883=require(require('path')['join'](this[_0x3d602b(0x159)],'ws'));}catch{throw new Error(_0x3d602b(0x1a1));}}}return this[_0x3d602b(0x144)]=_0x1af883,_0x1af883;}[_0x4dc1a5(0x17f)](){var _0x2dd7d4=_0x4dc1a5;this[_0x2dd7d4(0x1ee)]||this[_0x2dd7d4(0x1b5)]||this[_0x2dd7d4(0x188)]>=this[_0x2dd7d4(0x1fd)]||(this[_0x2dd7d4(0x1a8)]=!0x1,this['_connecting']=!0x0,this[_0x2dd7d4(0x188)]++,this[_0x2dd7d4(0x1bb)]=new Promise((_0x7b5c2e,_0x3269e)=>{var _0x52ccd1=_0x2dd7d4;this['getWebSocketClass']()['then'](_0x4992a5=>{var _0x359fc7=_0x1ca9;let _0x5d79c8=new _0x4992a5(_0x359fc7(0x203)+this[_0x359fc7(0x193)]+':'+this['port']);_0x5d79c8[_0x359fc7(0x1d2)]=()=>{var _0x4bba45=_0x359fc7;this[_0x4bba45(0x18f)]=!0x1,this[_0x4bba45(0x1a6)](_0x5d79c8),this[_0x4bba45(0x1f1)](),_0x3269e(new Error(_0x4bba45(0x190)));},_0x5d79c8[_0x359fc7(0x156)]=()=>{var _0x5d9ff3=_0x359fc7;this[_0x5d9ff3(0x151)]||_0x5d79c8[_0x5d9ff3(0x191)]&&_0x5d79c8[_0x5d9ff3(0x191)][_0x5d9ff3(0x1fe)]&&_0x5d79c8[_0x5d9ff3(0x191)][_0x5d9ff3(0x1fe)](),_0x7b5c2e(_0x5d79c8);},_0x5d79c8[_0x359fc7(0x1dc)]=()=>{var _0x52668d=_0x359fc7;this[_0x52668d(0x1a8)]=!0x0,this[_0x52668d(0x1a6)](_0x5d79c8),this[_0x52668d(0x1f1)]();},_0x5d79c8['onmessage']=_0x1872de=>{var _0x3beba0=_0x359fc7;try{_0x1872de&&_0x1872de[_0x3beba0(0x1b8)]&&this['_inBrowser']&&JSON[_0x3beba0(0x1f5)](_0x1872de['data'])[_0x3beba0(0x147)]==='reload'&&this['global'][_0x3beba0(0x211)][_0x3beba0(0x1bd)]();}catch{}};})[_0x52ccd1(0x1d5)](_0x49865c=>(this[_0x52ccd1(0x1b5)]=!0x0,this[_0x52ccd1(0x1ee)]=!0x1,this[_0x52ccd1(0x1a8)]=!0x1,this['_allowedToSend']=!0x0,this[_0x52ccd1(0x188)]=0x0,_0x49865c))[_0x52ccd1(0x1d6)](_0x1342ad=>(this['_connected']=!0x1,this['_connecting']=!0x1,_0x3269e(new Error(_0x52ccd1(0x209)+(_0x1342ad&&_0x1342ad['message'])))));}));}[_0x4dc1a5(0x1a6)](_0x2d0c09){var _0x1d1415=_0x4dc1a5;this[_0x1d1415(0x1b5)]=!0x1,this[_0x1d1415(0x1ee)]=!0x1;try{_0x2d0c09[_0x1d1415(0x1dc)]=null,_0x2d0c09[_0x1d1415(0x1d2)]=null,_0x2d0c09[_0x1d1415(0x156)]=null;}catch{}try{_0x2d0c09[_0x1d1415(0x1be)]<0x2&&_0x2d0c09[_0x1d1415(0x217)]();}catch{}}[_0x4dc1a5(0x1f1)](){var _0x2daa17=_0x4dc1a5;clearTimeout(this['_reconnectTimeout']),!(this['_connectAttemptCount']>=this[_0x2daa17(0x1fd)])&&(this[_0x2daa17(0x1d4)]=setTimeout(()=>{var _0x52b0c2=_0x2daa17;this[_0x52b0c2(0x1b5)]||this[_0x52b0c2(0x1ee)]||(this[_0x52b0c2(0x17f)](),this['_ws']?.[_0x52b0c2(0x1d6)](()=>this[_0x52b0c2(0x1f1)]()));},0x1f4),this[_0x2daa17(0x1d4)][_0x2daa17(0x1fe)]&&this[_0x2daa17(0x1d4)][_0x2daa17(0x1fe)]());}async[_0x4dc1a5(0x18b)](_0x4eb41c){var _0x16fabe=_0x4dc1a5;try{if(!this['_allowedToSend'])return;this['_allowedToConnectOnSend']&&this[_0x16fabe(0x17f)](),(await this['_ws'])['send'](JSON['stringify'](_0x4eb41c));}catch(_0x5952a6){console[_0x16fabe(0x206)](this['_sendErrorMessage']+':\\x20'+(_0x5952a6&&_0x5952a6['message'])),this[_0x16fabe(0x18f)]=!0x1,this[_0x16fabe(0x1f1)]();}}};function V(_0x3808c7,_0x19dfe3,_0x31af00,_0x476498,_0x1f0dc6){var _0x521b66=_0x4dc1a5;let _0xfc8e2=_0x31af00[_0x521b66(0x196)](',')['map'](_0xab9a90=>{var _0x54b02b=_0x521b66;try{_0x3808c7[_0x54b02b(0x185)]||((_0x1f0dc6===_0x54b02b(0x13a)||_0x1f0dc6==='remix'||_0x1f0dc6==='astro')&&(_0x1f0dc6+=_0x3808c7[_0x54b02b(0x13b)]?.[_0x54b02b(0x14b)]?.['node']?_0x54b02b(0x1d9):_0x54b02b(0x198)),_0x3808c7[_0x54b02b(0x185)]={'id':+new Date(),'tool':_0x1f0dc6});let _0x5158af=new Q(_0x3808c7,_0x19dfe3,_0xab9a90,_0x476498);return _0x5158af['send'][_0x54b02b(0x1ba)](_0x5158af);}catch(_0x356d47){return console['warn']('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host',_0x356d47&&_0x356d47[_0x54b02b(0x1f0)]),()=>{};}});return _0xf43b0c=>_0xfc8e2['forEach'](_0x4af2f0=>_0x4af2f0(_0xf43b0c));}function H(_0x23da07){var _0x1a88fd=_0x4dc1a5;let _0x5327a2=function(_0x33a0c3,_0x5e871b){return _0x5e871b-_0x33a0c3;},_0x4a1828;if(_0x23da07[_0x1a88fd(0x1b0)])_0x4a1828=function(){var _0x427157=_0x1a88fd;return _0x23da07[_0x427157(0x1b0)][_0x427157(0x138)]();};else{if(_0x23da07[_0x1a88fd(0x13b)]&&_0x23da07[_0x1a88fd(0x13b)][_0x1a88fd(0x1ab)])_0x4a1828=function(){var _0x470afa=_0x1a88fd;return _0x23da07[_0x470afa(0x13b)]['hrtime']();},_0x5327a2=function(_0x37cf1c,_0xa6481a){return 0x3e8*(_0xa6481a[0x0]-_0x37cf1c[0x0])+(_0xa6481a[0x1]-_0x37cf1c[0x1])/0xf4240;};else try{let {performance:_0xcd213f}=require(_0x1a88fd(0x16b));_0x4a1828=function(){return _0xcd213f['now']();};}catch{_0x4a1828=function(){return+new Date();};}}return{'elapsed':_0x5327a2,'timeStamp':_0x4a1828,'now':()=>Date['now']()};}function X(_0x359b7e,_0xdc0df2,_0x42c0b2){var _0x454613=_0x4dc1a5;if(_0x359b7e[_0x454613(0x15c)]!==void 0x0)return _0x359b7e['_consoleNinjaAllowedToStart'];let _0x34a60d=_0x359b7e[_0x454613(0x13b)]?.[_0x454613(0x14b)]?.['node'];return _0x34a60d&&_0x42c0b2===_0x454613(0x17d)?_0x359b7e[_0x454613(0x15c)]=!0x1:_0x359b7e[_0x454613(0x15c)]=_0x34a60d||!_0xdc0df2||_0x359b7e[_0x454613(0x211)]?.[_0x454613(0x148)]&&_0xdc0df2[_0x454613(0x19a)](_0x359b7e[_0x454613(0x211)][_0x454613(0x148)]),_0x359b7e[_0x454613(0x15c)];}function _0x9e2b(){var _0x5af523=['depth','unknown','getOwnPropertySymbols','__es'+'Module','getOwnPropertyNames','_maxConnectAttemptCount','unref','_setNodePermissions','number','160904PvzjKK','_HTMLAllCollection','ws://','type','replace','warn','cappedProps','url','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','slice','_p_length','19557672WlNUzd','reduceLimits','allStrLength','_quotedRegExp','sortProps','location','enumerable','root_exp','isArray','168TZbfid','capped','close','default','isExpressionToEvaluate','constructor','elements','serialize','now','root_exp_id','next.js','process','1136087VdbNdO','_addLoadNode','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help','_getOwnPropertySymbols','positiveInfinity','symbol','trace','15280AqmEiZ','_WebSocketClass','','_sortProps','method','hostname','null','length','versions','_isPrimitiveType','5108508ZEQVri','_hasMapOnItsPath','current','...','_inBrowser','path','value','getOwnPropertyDescriptor','[object\\x20Array]','onopen','55446RggfsH','_regExpToString','nodeModules','_setNodeId','undefined','_consoleNinjaAllowedToStart','indexOf','_dateToString','toString','elapsed','WebSocket','_blacklistedProperty','autoExpandPreviousObjects','_getOwnPropertyDescriptor',':logPointId:','global','concat','NEGATIVE_INFINITY','5742gBFcCS','substr','perf_hooks','hasOwnProperty','_treeNodePropertiesBeforeFullValue','props','autoExpandMaxDepth','Number','parent','node','error','_hasSymbolPropertyOnItsPath','totalStrLength','call','_cleanNode','_treeNodePropertiesAfterFullValue','Buffer','timeStamp','_objectToString','_numberRegExp','nuxt','array','_connectToHostNow','stack','_setNodeExpandableState','[object\\x20BigInt]','log','function','_console_ninja_session','resolveGetters','HTMLAllCollection','_connectAttemptCount','_sendErrorMessage','set','send','prototype',\"c:\\\\Users\\\\Nikko\\\\.vscode\\\\extensions\\\\wallabyjs.console-ninja-0.0.160\\\\node_modules\",'push','_allowedToSend','logger\\x20websocket\\x20error','_socket','_capIfString','host','Map','expId','split','boolean','\\x20browser','_p_name','includes','getPrototypeOf','port','_isSet','stackTraceLimit','argumentResolutionError','webpack','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','_setNodeLabel','205HVwfVG','5308MdSJjq','bigint','_disposeWebsocket','[object\\x20Date]','_allowedToConnectOnSend','setter','_console_ninja','hrtime','_type','funcName','_undefined','autoExpand','performance','_addObjectProperty','_WebSocket','_setNodeQueryPath','String','_connected','_processTreeNodeResult','match','data','name','bind','_ws','Set','reload','readyState','noFunctions','expressionsToEvaluate','pathToFileURL','defineProperty','toLowerCase','autoExpandLimit','Symbol','_propertyName','_additionalMetadata','POSITIVE_INFINITY','strLength','console','hits','_isNegativeZero','_getOwnPropertyNames','pop','_addProperty','_Symbol','forEach','onerror','_setNodeExpressionPath','_reconnectTimeout','then','catch','disabledLog','level','\\x20server','count','object','onclose','_isArray','negativeInfinity','11AJnNRW','autoExpandPropertyCount','_isMap','string','_property','1395jimyPK','valueOf','cappedElements','join','date','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help','time','nan','_keyStrRegExp','_hasSetOnItsPath','_connecting','stringify','message','_attemptToReconnectShortly','index','test','timeEnd','parse','_isPrimitiveWrapperType','negativeZero'];_0x9e2b=function(){return _0x5af523;};return _0x9e2b();}((_0x4db0eb,_0x3901f8,_0x331a0e,_0x3899a6,_0x3d334d,_0x234705,_0x57cb6f,_0x4ff9f6,_0x59ef06)=>{var _0x147004=_0x4dc1a5;if(_0x4db0eb['_console_ninja'])return _0x4db0eb[_0x147004(0x1aa)];if(!X(_0x4db0eb,_0x4ff9f6,_0x3d334d))return _0x4db0eb[_0x147004(0x1aa)]={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x4db0eb['_console_ninja'];let _0x338045={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x54dcdc={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2},_0x206220=H(_0x4db0eb),_0x46dd27=_0x206220[_0x147004(0x160)],_0x10908a=_0x206220[_0x147004(0x17a)],_0x5d82b4=_0x206220[_0x147004(0x138)],_0x5a5fbb={'hits':{},'ts':{}},_0x2984e0=_0x49cb1a=>{_0x5a5fbb['ts'][_0x49cb1a]=_0x10908a();},_0x3c074b=(_0x2ced5e,_0x2375cf)=>{var _0x1ebba1=_0x147004;let _0xc1a3f4=_0x5a5fbb['ts'][_0x2375cf];if(delete _0x5a5fbb['ts'][_0x2375cf],_0xc1a3f4){let _0x151711=_0x46dd27(_0xc1a3f4,_0x10908a());_0x1d652f(_0x3f6ae2(_0x1ebba1(0x1ea),_0x2ced5e,_0x5d82b4(),_0x1bf95b,[_0x151711],_0x2375cf));}},_0x29d960=_0x2d7a25=>_0xb52106=>{try{_0x2984e0(_0xb52106),_0x2d7a25(_0xb52106);}finally{_0x4db0eb['console']['time']=_0x2d7a25;}},_0x2d0382=_0x4ce42e=>_0x3076e7=>{var _0x2b133c=_0x147004;try{let [_0x210e1d,_0x507d51]=_0x3076e7[_0x2b133c(0x196)](_0x2b133c(0x165));_0x3c074b(_0x507d51,_0x210e1d),_0x4ce42e(_0x210e1d);}finally{_0x4db0eb['console'][_0x2b133c(0x1f4)]=_0x4ce42e;}};_0x4db0eb['_console_ninja']={'consoleLog':(_0xa3c474,_0x285a57)=>{var _0x267cee=_0x147004;_0x4db0eb[_0x267cee(0x1ca)][_0x267cee(0x183)]['name']!==_0x267cee(0x1d7)&&_0x1d652f(_0x3f6ae2('log',_0xa3c474,_0x5d82b4(),_0x1bf95b,_0x285a57));},'consoleTrace':(_0x48809b,_0x5645d8)=>{var _0x416fa1=_0x147004;_0x4db0eb[_0x416fa1(0x1ca)]['log']['name']!=='disabledTrace'&&_0x1d652f(_0x3f6ae2(_0x416fa1(0x142),_0x48809b,_0x5d82b4(),_0x1bf95b,_0x5645d8));},'consoleTime':()=>{var _0x156190=_0x147004;_0x4db0eb['console'][_0x156190(0x1ea)]=_0x29d960(_0x4db0eb[_0x156190(0x1ca)][_0x156190(0x1ea)]);},'consoleTimeEnd':()=>{var _0x5d670a=_0x147004;_0x4db0eb[_0x5d670a(0x1ca)][_0x5d670a(0x1f4)]=_0x2d0382(_0x4db0eb['console'][_0x5d670a(0x1f4)]);},'autoLog':(_0x173725,_0x37f10d)=>{var _0x2ac0a7=_0x147004;_0x1d652f(_0x3f6ae2(_0x2ac0a7(0x183),_0x37f10d,_0x5d82b4(),_0x1bf95b,[_0x173725]));},'autoTrace':(_0x2a2939,_0x35d313)=>{var _0x5def4c=_0x147004;_0x1d652f(_0x3f6ae2(_0x5def4c(0x142),_0x35d313,_0x5d82b4(),_0x1bf95b,[_0x2a2939]));},'autoTime':(_0x86e6b1,_0x105825,_0x3d1b54)=>{_0x2984e0(_0x3d1b54);},'autoTimeEnd':(_0x4fa930,_0x550b90,_0x1e0656)=>{_0x3c074b(_0x550b90,_0x1e0656);}};let _0x1d652f=V(_0x4db0eb,_0x3901f8,_0x331a0e,_0x3899a6,_0x3d334d),_0x1bf95b=_0x4db0eb[_0x147004(0x185)];class _0x435aa7{constructor(){var _0x2b5159=_0x147004;this[_0x2b5159(0x1ec)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x2b5159(0x17c)]=/^(0|[1-9][0-9]*)$/,this[_0x2b5159(0x20f)]=/'([^\\\\']|\\\\')*'/,this[_0x2b5159(0x1ae)]=_0x4db0eb[_0x2b5159(0x15b)],this['_HTMLAllCollection']=_0x4db0eb[_0x2b5159(0x187)],this[_0x2b5159(0x164)]=Object[_0x2b5159(0x154)],this[_0x2b5159(0x1cd)]=Object[_0x2b5159(0x1fc)],this[_0x2b5159(0x1d0)]=_0x4db0eb[_0x2b5159(0x1c5)],this[_0x2b5159(0x158)]=RegExp[_0x2b5159(0x18c)][_0x2b5159(0x15f)],this[_0x2b5159(0x15e)]=Date[_0x2b5159(0x18c)][_0x2b5159(0x15f)];}['serialize'](_0x132eb6,_0x1de6c2,_0x576948,_0x5e1def){var _0x33e49c=_0x147004,_0x3acfba=this,_0x535b51=_0x576948['autoExpand'];function _0x30dfdb(_0x6b7289,_0x40fe48,_0x46b4dd){var _0x4d4ddf=_0x1ca9;_0x40fe48[_0x4d4ddf(0x204)]=_0x4d4ddf(0x1f9),_0x40fe48[_0x4d4ddf(0x173)]=_0x6b7289[_0x4d4ddf(0x1f0)],_0x2cb7ac=_0x46b4dd[_0x4d4ddf(0x172)]['current'],_0x46b4dd[_0x4d4ddf(0x172)]['current']=_0x40fe48,_0x3acfba[_0x4d4ddf(0x16d)](_0x40fe48,_0x46b4dd);}if(_0x1de6c2&&_0x1de6c2[_0x33e49c(0x19f)])_0x30dfdb(_0x1de6c2,_0x132eb6,_0x576948);else try{_0x576948[_0x33e49c(0x1d8)]++,_0x576948[_0x33e49c(0x1af)]&&_0x576948[_0x33e49c(0x163)]['push'](_0x1de6c2);var _0x414715,_0x5b2389,_0x513122,_0x2f5212,_0x4eefb2=[],_0x4c18d2=[],_0x218cec,_0x547c69=this[_0x33e49c(0x1ac)](_0x1de6c2),_0x11256e=_0x547c69===_0x33e49c(0x17e),_0x47cb39=!0x1,_0x2fd8f8=_0x547c69==='function',_0x3bcd1c=this[_0x33e49c(0x14c)](_0x547c69),_0x50c645=this[_0x33e49c(0x1f6)](_0x547c69),_0x4e5bd7=_0x3bcd1c||_0x50c645,_0x5938d2={},_0x44c09f=0x0,_0x58a0b5=!0x1,_0x2cb7ac,_0x4fc888=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x576948[_0x33e49c(0x1f8)]){if(_0x11256e){if(_0x5b2389=_0x1de6c2['length'],_0x5b2389>_0x576948['elements']){for(_0x513122=0x0,_0x2f5212=_0x576948[_0x33e49c(0x136)],_0x414715=_0x513122;_0x414715<_0x2f5212;_0x414715++)_0x4c18d2['push'](_0x3acfba[_0x33e49c(0x1cf)](_0x4eefb2,_0x1de6c2,_0x547c69,_0x414715,_0x576948));_0x132eb6[_0x33e49c(0x1e6)]=!0x0;}else{for(_0x513122=0x0,_0x2f5212=_0x5b2389,_0x414715=_0x513122;_0x414715<_0x2f5212;_0x414715++)_0x4c18d2[_0x33e49c(0x18e)](_0x3acfba['_addProperty'](_0x4eefb2,_0x1de6c2,_0x547c69,_0x414715,_0x576948));}_0x576948[_0x33e49c(0x1e0)]+=_0x4c18d2['length'];}if(!(_0x547c69===_0x33e49c(0x149)||_0x547c69===_0x33e49c(0x15b))&&!_0x3bcd1c&&_0x547c69!==_0x33e49c(0x1b4)&&_0x547c69!==_0x33e49c(0x179)&&_0x547c69!=='bigint'){var _0x16cc0e=_0x5e1def['props']||_0x576948[_0x33e49c(0x16e)];if(this[_0x33e49c(0x19d)](_0x1de6c2)?(_0x414715=0x0,_0x1de6c2[_0x33e49c(0x1d1)](function(_0x38ad9f){var _0x1b65f4=_0x33e49c;if(_0x44c09f++,_0x576948['autoExpandPropertyCount']++,_0x44c09f>_0x16cc0e){_0x58a0b5=!0x0;return;}if(!_0x576948[_0x1b65f4(0x219)]&&_0x576948[_0x1b65f4(0x1af)]&&_0x576948[_0x1b65f4(0x1e0)]>_0x576948[_0x1b65f4(0x1c4)]){_0x58a0b5=!0x0;return;}_0x4c18d2[_0x1b65f4(0x18e)](_0x3acfba[_0x1b65f4(0x1cf)](_0x4eefb2,_0x1de6c2,_0x1b65f4(0x1bc),_0x414715++,_0x576948,function(_0x30c5c4){return function(){return _0x30c5c4;};}(_0x38ad9f)));})):this[_0x33e49c(0x1e1)](_0x1de6c2)&&_0x1de6c2['forEach'](function(_0x1d8f47,_0x56e90f){var _0x57a775=_0x33e49c;if(_0x44c09f++,_0x576948[_0x57a775(0x1e0)]++,_0x44c09f>_0x16cc0e){_0x58a0b5=!0x0;return;}if(!_0x576948['isExpressionToEvaluate']&&_0x576948[_0x57a775(0x1af)]&&_0x576948[_0x57a775(0x1e0)]>_0x576948[_0x57a775(0x1c4)]){_0x58a0b5=!0x0;return;}var _0x4547a2=_0x56e90f['toString']();_0x4547a2[_0x57a775(0x14a)]>0x64&&(_0x4547a2=_0x4547a2[_0x57a775(0x20a)](0x0,0x64)+_0x57a775(0x150)),_0x4c18d2[_0x57a775(0x18e)](_0x3acfba[_0x57a775(0x1cf)](_0x4eefb2,_0x1de6c2,_0x57a775(0x194),_0x4547a2,_0x576948,function(_0x2317dc){return function(){return _0x2317dc;};}(_0x1d8f47)));}),!_0x47cb39){try{for(_0x218cec in _0x1de6c2)if(!(_0x11256e&&_0x4fc888[_0x33e49c(0x1f3)](_0x218cec))&&!this['_blacklistedProperty'](_0x1de6c2,_0x218cec,_0x576948)){if(_0x44c09f++,_0x576948[_0x33e49c(0x1e0)]++,_0x44c09f>_0x16cc0e){_0x58a0b5=!0x0;break;}if(!_0x576948['isExpressionToEvaluate']&&_0x576948['autoExpand']&&_0x576948[_0x33e49c(0x1e0)]>_0x576948['autoExpandLimit']){_0x58a0b5=!0x0;break;}_0x4c18d2[_0x33e49c(0x18e)](_0x3acfba['_addObjectProperty'](_0x4eefb2,_0x5938d2,_0x1de6c2,_0x547c69,_0x218cec,_0x576948));}}catch{}if(_0x5938d2[_0x33e49c(0x20b)]=!0x0,_0x2fd8f8&&(_0x5938d2[_0x33e49c(0x199)]=!0x0),!_0x58a0b5){var _0x5b5162=[][_0x33e49c(0x167)](this[_0x33e49c(0x1cd)](_0x1de6c2))['concat'](this[_0x33e49c(0x13f)](_0x1de6c2));for(_0x414715=0x0,_0x5b2389=_0x5b5162[_0x33e49c(0x14a)];_0x414715<_0x5b2389;_0x414715++)if(_0x218cec=_0x5b5162[_0x414715],!(_0x11256e&&_0x4fc888[_0x33e49c(0x1f3)](_0x218cec['toString']()))&&!this[_0x33e49c(0x162)](_0x1de6c2,_0x218cec,_0x576948)&&!_0x5938d2['_p_'+_0x218cec[_0x33e49c(0x15f)]()]){if(_0x44c09f++,_0x576948[_0x33e49c(0x1e0)]++,_0x44c09f>_0x16cc0e){_0x58a0b5=!0x0;break;}if(!_0x576948[_0x33e49c(0x219)]&&_0x576948[_0x33e49c(0x1af)]&&_0x576948[_0x33e49c(0x1e0)]>_0x576948[_0x33e49c(0x1c4)]){_0x58a0b5=!0x0;break;}_0x4c18d2[_0x33e49c(0x18e)](_0x3acfba[_0x33e49c(0x1b1)](_0x4eefb2,_0x5938d2,_0x1de6c2,_0x547c69,_0x218cec,_0x576948));}}}}}if(_0x132eb6['type']=_0x547c69,_0x4e5bd7?(_0x132eb6['value']=_0x1de6c2[_0x33e49c(0x1e5)](),this[_0x33e49c(0x192)](_0x547c69,_0x132eb6,_0x576948,_0x5e1def)):_0x547c69==='date'?_0x132eb6[_0x33e49c(0x153)]=this['_dateToString'][_0x33e49c(0x176)](_0x1de6c2):_0x547c69===_0x33e49c(0x1a5)?_0x132eb6['value']=_0x1de6c2[_0x33e49c(0x15f)]():_0x547c69==='RegExp'?_0x132eb6[_0x33e49c(0x153)]=this[_0x33e49c(0x158)][_0x33e49c(0x176)](_0x1de6c2):_0x547c69===_0x33e49c(0x141)&&this[_0x33e49c(0x1d0)]?_0x132eb6['value']=this[_0x33e49c(0x1d0)][_0x33e49c(0x18c)]['toString']['call'](_0x1de6c2):!_0x576948[_0x33e49c(0x1f8)]&&!(_0x547c69===_0x33e49c(0x149)||_0x547c69===_0x33e49c(0x15b))&&(delete _0x132eb6['value'],_0x132eb6['capped']=!0x0),_0x58a0b5&&(_0x132eb6[_0x33e49c(0x207)]=!0x0),_0x2cb7ac=_0x576948[_0x33e49c(0x172)]['current'],_0x576948['node']['current']=_0x132eb6,this[_0x33e49c(0x16d)](_0x132eb6,_0x576948),_0x4c18d2['length']){for(_0x414715=0x0,_0x5b2389=_0x4c18d2[_0x33e49c(0x14a)];_0x414715<_0x5b2389;_0x414715++)_0x4c18d2[_0x414715](_0x414715);}_0x4eefb2['length']&&(_0x132eb6[_0x33e49c(0x16e)]=_0x4eefb2);}catch(_0xc0760f){_0x30dfdb(_0xc0760f,_0x132eb6,_0x576948);}return this['_additionalMetadata'](_0x1de6c2,_0x132eb6),this[_0x33e49c(0x178)](_0x132eb6,_0x576948),_0x576948[_0x33e49c(0x172)][_0x33e49c(0x14f)]=_0x2cb7ac,_0x576948[_0x33e49c(0x1d8)]--,_0x576948['autoExpand']=_0x535b51,_0x576948[_0x33e49c(0x1af)]&&_0x576948['autoExpandPreviousObjects'][_0x33e49c(0x1ce)](),_0x132eb6;}[_0x147004(0x13f)](_0x42fc79){var _0x2eba37=_0x147004;return Object['getOwnPropertySymbols']?Object[_0x2eba37(0x1fa)](_0x42fc79):[];}['_isSet'](_0x4e1c74){var _0x1558c8=_0x147004;return!!(_0x4e1c74&&_0x4db0eb[_0x1558c8(0x1bc)]&&this[_0x1558c8(0x17b)](_0x4e1c74)==='[object\\x20Set]'&&_0x4e1c74[_0x1558c8(0x1d1)]);}['_blacklistedProperty'](_0x14fc8a,_0x5124d8,_0x31bed7){var _0x2224e1=_0x147004;return _0x31bed7[_0x2224e1(0x1bf)]?typeof _0x14fc8a[_0x5124d8]=='function':!0x1;}[_0x147004(0x1ac)](_0x24d85a){var _0x27bd86=_0x147004,_0x54208b='';return _0x54208b=typeof _0x24d85a,_0x54208b===_0x27bd86(0x1db)?this[_0x27bd86(0x17b)](_0x24d85a)===_0x27bd86(0x155)?_0x54208b=_0x27bd86(0x17e):this[_0x27bd86(0x17b)](_0x24d85a)===_0x27bd86(0x1a7)?_0x54208b=_0x27bd86(0x1e8):this[_0x27bd86(0x17b)](_0x24d85a)===_0x27bd86(0x182)?_0x54208b=_0x27bd86(0x1a5):_0x24d85a===null?_0x54208b=_0x27bd86(0x149):_0x24d85a[_0x27bd86(0x21a)]&&(_0x54208b=_0x24d85a[_0x27bd86(0x21a)]['name']||_0x54208b):_0x54208b===_0x27bd86(0x15b)&&this['_HTMLAllCollection']&&_0x24d85a instanceof this[_0x27bd86(0x202)]&&(_0x54208b='HTMLAllCollection'),_0x54208b;}[_0x147004(0x17b)](_0x3caeb0){var _0x5acc48=_0x147004;return Object['prototype'][_0x5acc48(0x15f)][_0x5acc48(0x176)](_0x3caeb0);}[_0x147004(0x14c)](_0x3cac68){var _0x27f641=_0x147004;return _0x3cac68===_0x27f641(0x197)||_0x3cac68===_0x27f641(0x1e2)||_0x3cac68===_0x27f641(0x200);}[_0x147004(0x1f6)](_0x3ccc1a){var _0x4572be=_0x147004;return _0x3ccc1a==='Boolean'||_0x3ccc1a==='String'||_0x3ccc1a===_0x4572be(0x170);}[_0x147004(0x1cf)](_0x19741a,_0x20337b,_0x3a0b7b,_0x4af6cd,_0x178640,_0x27bdf7){var _0x94c1c2=this;return function(_0xeb264d){var _0x4d198a=_0x1ca9,_0x1f318d=_0x178640[_0x4d198a(0x172)][_0x4d198a(0x14f)],_0x1a7cea=_0x178640[_0x4d198a(0x172)]['index'],_0x5a46f7=_0x178640[_0x4d198a(0x172)][_0x4d198a(0x171)];_0x178640[_0x4d198a(0x172)]['parent']=_0x1f318d,_0x178640[_0x4d198a(0x172)][_0x4d198a(0x1f2)]=typeof _0x4af6cd==_0x4d198a(0x200)?_0x4af6cd:_0xeb264d,_0x19741a['push'](_0x94c1c2['_property'](_0x20337b,_0x3a0b7b,_0x4af6cd,_0x178640,_0x27bdf7)),_0x178640[_0x4d198a(0x172)]['parent']=_0x5a46f7,_0x178640['node']['index']=_0x1a7cea;};}[_0x147004(0x1b1)](_0x184bf0,_0x43266f,_0x3a8dbf,_0x2779e6,_0x29da80,_0x587c4d,_0x12bd20){var _0x54adb1=this;return _0x43266f['_p_'+_0x29da80['toString']()]=!0x0,function(_0xafa158){var _0x426a84=_0x1ca9,_0x6f2995=_0x587c4d[_0x426a84(0x172)][_0x426a84(0x14f)],_0x371c42=_0x587c4d['node'][_0x426a84(0x1f2)],_0x3dca6a=_0x587c4d['node'][_0x426a84(0x171)];_0x587c4d[_0x426a84(0x172)]['parent']=_0x6f2995,_0x587c4d[_0x426a84(0x172)][_0x426a84(0x1f2)]=_0xafa158,_0x184bf0[_0x426a84(0x18e)](_0x54adb1[_0x426a84(0x1e3)](_0x3a8dbf,_0x2779e6,_0x29da80,_0x587c4d,_0x12bd20)),_0x587c4d[_0x426a84(0x172)][_0x426a84(0x171)]=_0x3dca6a,_0x587c4d[_0x426a84(0x172)][_0x426a84(0x1f2)]=_0x371c42;};}[_0x147004(0x1e3)](_0x234faf,_0x12f064,_0x22bd6d,_0x51ceb7,_0x3df80b){var _0x2aab32=_0x147004,_0x5a345a=this;_0x3df80b||(_0x3df80b=function(_0x14d626,_0x1d4c49){return _0x14d626[_0x1d4c49];});var _0x1e172f=_0x22bd6d['toString'](),_0x44efa6=_0x51ceb7['expressionsToEvaluate']||{},_0x549e33=_0x51ceb7[_0x2aab32(0x1f8)],_0x56e644=_0x51ceb7['isExpressionToEvaluate'];try{var _0x4cd283=this[_0x2aab32(0x1e1)](_0x234faf),_0xa2423d=_0x1e172f;_0x4cd283&&_0xa2423d[0x0]==='\\x27'&&(_0xa2423d=_0xa2423d[_0x2aab32(0x16a)](0x1,_0xa2423d['length']-0x2));var _0x175f53=_0x51ceb7[_0x2aab32(0x1c0)]=_0x44efa6['_p_'+_0xa2423d];_0x175f53&&(_0x51ceb7[_0x2aab32(0x1f8)]=_0x51ceb7[_0x2aab32(0x1f8)]+0x1),_0x51ceb7[_0x2aab32(0x219)]=!!_0x175f53;var _0x12f5dd=typeof _0x22bd6d==_0x2aab32(0x141),_0x35859d={'name':_0x12f5dd||_0x4cd283?_0x1e172f:this[_0x2aab32(0x1c6)](_0x1e172f)};if(_0x12f5dd&&(_0x35859d[_0x2aab32(0x141)]=!0x0),!(_0x12f064===_0x2aab32(0x17e)||_0x12f064==='Error')){var _0x4d5caa=this['_getOwnPropertyDescriptor'](_0x234faf,_0x22bd6d);if(_0x4d5caa&&(_0x4d5caa[_0x2aab32(0x18a)]&&(_0x35859d[_0x2aab32(0x1a9)]=!0x0),_0x4d5caa['get']&&!_0x175f53&&!_0x51ceb7[_0x2aab32(0x186)]))return _0x35859d['getter']=!0x0,this['_processTreeNodeResult'](_0x35859d,_0x51ceb7),_0x35859d;}var _0x38dd23;try{_0x38dd23=_0x3df80b(_0x234faf,_0x22bd6d);}catch(_0x520dbf){return _0x35859d={'name':_0x1e172f,'type':_0x2aab32(0x1f9),'error':_0x520dbf[_0x2aab32(0x1f0)]},this['_processTreeNodeResult'](_0x35859d,_0x51ceb7),_0x35859d;}var _0x1e9f8c=this[_0x2aab32(0x1ac)](_0x38dd23),_0x2a65f8=this['_isPrimitiveType'](_0x1e9f8c);if(_0x35859d[_0x2aab32(0x204)]=_0x1e9f8c,_0x2a65f8)this[_0x2aab32(0x1b6)](_0x35859d,_0x51ceb7,_0x38dd23,function(){var _0x472ed1=_0x2aab32;_0x35859d['value']=_0x38dd23['valueOf'](),!_0x175f53&&_0x5a345a[_0x472ed1(0x192)](_0x1e9f8c,_0x35859d,_0x51ceb7,{});});else{var _0x3b16e7=_0x51ceb7[_0x2aab32(0x1af)]&&_0x51ceb7['level']<_0x51ceb7['autoExpandMaxDepth']&&_0x51ceb7['autoExpandPreviousObjects'][_0x2aab32(0x15d)](_0x38dd23)<0x0&&_0x1e9f8c!==_0x2aab32(0x184)&&_0x51ceb7[_0x2aab32(0x1e0)]<_0x51ceb7[_0x2aab32(0x1c4)];_0x3b16e7||_0x51ceb7[_0x2aab32(0x1d8)]<_0x549e33||_0x175f53?(this['serialize'](_0x35859d,_0x38dd23,_0x51ceb7,_0x175f53||{}),this[_0x2aab32(0x1c7)](_0x38dd23,_0x35859d)):this[_0x2aab32(0x1b6)](_0x35859d,_0x51ceb7,_0x38dd23,function(){var _0x353781=_0x2aab32;_0x1e9f8c===_0x353781(0x149)||_0x1e9f8c==='undefined'||(delete _0x35859d['value'],_0x35859d[_0x353781(0x216)]=!0x0);});}return _0x35859d;}finally{_0x51ceb7[_0x2aab32(0x1c0)]=_0x44efa6,_0x51ceb7[_0x2aab32(0x1f8)]=_0x549e33,_0x51ceb7[_0x2aab32(0x219)]=_0x56e644;}}[_0x147004(0x192)](_0x2c7072,_0x248a85,_0x5645e6,_0x58faaa){var _0x107b6d=_0x147004,_0x4ace72=_0x58faaa[_0x107b6d(0x1c9)]||_0x5645e6[_0x107b6d(0x1c9)];if((_0x2c7072===_0x107b6d(0x1e2)||_0x2c7072===_0x107b6d(0x1b4))&&_0x248a85[_0x107b6d(0x153)]){let _0x5e7bdd=_0x248a85[_0x107b6d(0x153)][_0x107b6d(0x14a)];_0x5645e6[_0x107b6d(0x20e)]+=_0x5e7bdd,_0x5645e6[_0x107b6d(0x20e)]>_0x5645e6[_0x107b6d(0x175)]?(_0x248a85[_0x107b6d(0x216)]='',delete _0x248a85[_0x107b6d(0x153)]):_0x5e7bdd>_0x4ace72&&(_0x248a85[_0x107b6d(0x216)]=_0x248a85[_0x107b6d(0x153)][_0x107b6d(0x16a)](0x0,_0x4ace72),delete _0x248a85['value']);}}[_0x147004(0x1e1)](_0x5a29e5){var _0x5ef6d0=_0x147004;return!!(_0x5a29e5&&_0x4db0eb['Map']&&this[_0x5ef6d0(0x17b)](_0x5a29e5)==='[object\\x20Map]'&&_0x5a29e5[_0x5ef6d0(0x1d1)]);}[_0x147004(0x1c6)](_0x122398){var _0x21653b=_0x147004;if(_0x122398[_0x21653b(0x1b7)](/^\\d+$/))return _0x122398;var _0x15b719;try{_0x15b719=JSON[_0x21653b(0x1ef)](''+_0x122398);}catch{_0x15b719='\\x22'+this[_0x21653b(0x17b)](_0x122398)+'\\x22';}return _0x15b719[_0x21653b(0x1b7)](/^\"([a-zA-Z_][a-zA-Z_0-9]*)\"$/)?_0x15b719=_0x15b719[_0x21653b(0x16a)](0x1,_0x15b719['length']-0x2):_0x15b719=_0x15b719['replace'](/'/g,'\\x5c\\x27')['replace'](/\\\\\"/g,'\\x22')[_0x21653b(0x205)](/(^\"|\"$)/g,'\\x27'),_0x15b719;}[_0x147004(0x1b6)](_0x159a0e,_0x25ee54,_0xb9cd0d,_0x3d922f){var _0x4a188c=_0x147004;this[_0x4a188c(0x16d)](_0x159a0e,_0x25ee54),_0x3d922f&&_0x3d922f(),this[_0x4a188c(0x1c7)](_0xb9cd0d,_0x159a0e),this[_0x4a188c(0x178)](_0x159a0e,_0x25ee54);}[_0x147004(0x16d)](_0x18cd0d,_0x6a3dd4){var _0x3eff24=_0x147004;this[_0x3eff24(0x15a)](_0x18cd0d,_0x6a3dd4),this[_0x3eff24(0x1b3)](_0x18cd0d,_0x6a3dd4),this[_0x3eff24(0x1d3)](_0x18cd0d,_0x6a3dd4),this[_0x3eff24(0x1ff)](_0x18cd0d,_0x6a3dd4);}['_setNodeId'](_0x435a41,_0x394165){}[_0x147004(0x1b3)](_0x2db00c,_0x2f95a1){}['_setNodeLabel'](_0x939c9,_0x12bfc1){}['_isUndefined'](_0x911bed){var _0x465cdc=_0x147004;return _0x911bed===this[_0x465cdc(0x1ae)];}[_0x147004(0x178)](_0x57453b,_0x4f7d4d){var _0x19bd21=_0x147004;this[_0x19bd21(0x1a2)](_0x57453b,_0x4f7d4d),this['_setNodeExpandableState'](_0x57453b),_0x4f7d4d[_0x19bd21(0x210)]&&this[_0x19bd21(0x146)](_0x57453b),this['_addFunctionsNode'](_0x57453b,_0x4f7d4d),this[_0x19bd21(0x13d)](_0x57453b,_0x4f7d4d),this[_0x19bd21(0x177)](_0x57453b);}['_additionalMetadata'](_0x24eb0f,_0xcb30d9){var _0x57a427=_0x147004;try{_0x24eb0f&&typeof _0x24eb0f[_0x57a427(0x14a)]==_0x57a427(0x200)&&(_0xcb30d9['length']=_0x24eb0f[_0x57a427(0x14a)]);}catch{}if(_0xcb30d9[_0x57a427(0x204)]===_0x57a427(0x200)||_0xcb30d9[_0x57a427(0x204)]===_0x57a427(0x170)){if(isNaN(_0xcb30d9[_0x57a427(0x153)]))_0xcb30d9[_0x57a427(0x1eb)]=!0x0,delete _0xcb30d9[_0x57a427(0x153)];else switch(_0xcb30d9[_0x57a427(0x153)]){case Number[_0x57a427(0x1c8)]:_0xcb30d9[_0x57a427(0x140)]=!0x0,delete _0xcb30d9[_0x57a427(0x153)];break;case Number['NEGATIVE_INFINITY']:_0xcb30d9[_0x57a427(0x1de)]=!0x0,delete _0xcb30d9[_0x57a427(0x153)];break;case 0x0:this[_0x57a427(0x1cc)](_0xcb30d9[_0x57a427(0x153)])&&(_0xcb30d9[_0x57a427(0x1f7)]=!0x0);break;}}else _0xcb30d9['type']==='function'&&typeof _0x24eb0f[_0x57a427(0x1b9)]==_0x57a427(0x1e2)&&_0x24eb0f[_0x57a427(0x1b9)]&&_0xcb30d9[_0x57a427(0x1b9)]&&_0x24eb0f[_0x57a427(0x1b9)]!==_0xcb30d9['name']&&(_0xcb30d9[_0x57a427(0x1ad)]=_0x24eb0f[_0x57a427(0x1b9)]);}[_0x147004(0x1cc)](_0x5b8672){var _0x225577=_0x147004;return 0x1/_0x5b8672===Number[_0x225577(0x168)];}['_sortProps'](_0x4910cd){var _0x59235c=_0x147004;!_0x4910cd[_0x59235c(0x16e)]||!_0x4910cd[_0x59235c(0x16e)][_0x59235c(0x14a)]||_0x4910cd[_0x59235c(0x204)]===_0x59235c(0x17e)||_0x4910cd[_0x59235c(0x204)]==='Map'||_0x4910cd[_0x59235c(0x204)]===_0x59235c(0x1bc)||_0x4910cd[_0x59235c(0x16e)]['sort'](function(_0x2917ad,_0xf83a11){var _0x136c94=_0x59235c,_0x4c24b5=_0x2917ad[_0x136c94(0x1b9)][_0x136c94(0x1c3)](),_0x11f900=_0xf83a11[_0x136c94(0x1b9)][_0x136c94(0x1c3)]();return _0x4c24b5<_0x11f900?-0x1:_0x4c24b5>_0x11f900?0x1:0x0;});}['_addFunctionsNode'](_0x343986,_0x1c6eaa){var _0x3e3c93=_0x147004;if(!(_0x1c6eaa[_0x3e3c93(0x1bf)]||!_0x343986[_0x3e3c93(0x16e)]||!_0x343986[_0x3e3c93(0x16e)][_0x3e3c93(0x14a)])){for(var _0x8fb6ad=[],_0x4705fe=[],_0x121c3b=0x0,_0x24c4f4=_0x343986[_0x3e3c93(0x16e)][_0x3e3c93(0x14a)];_0x121c3b<_0x24c4f4;_0x121c3b++){var _0x38fe04=_0x343986[_0x3e3c93(0x16e)][_0x121c3b];_0x38fe04['type']===_0x3e3c93(0x184)?_0x8fb6ad[_0x3e3c93(0x18e)](_0x38fe04):_0x4705fe['push'](_0x38fe04);}if(!(!_0x4705fe[_0x3e3c93(0x14a)]||_0x8fb6ad[_0x3e3c93(0x14a)]<=0x1)){_0x343986['props']=_0x4705fe;var _0x13f57e={'functionsNode':!0x0,'props':_0x8fb6ad};this[_0x3e3c93(0x15a)](_0x13f57e,_0x1c6eaa),this[_0x3e3c93(0x1a2)](_0x13f57e,_0x1c6eaa),this[_0x3e3c93(0x181)](_0x13f57e),this[_0x3e3c93(0x1ff)](_0x13f57e,_0x1c6eaa),_0x13f57e['id']+='\\x20f',_0x343986[_0x3e3c93(0x16e)]['unshift'](_0x13f57e);}}}[_0x147004(0x13d)](_0x319b43,_0xf512aa){}[_0x147004(0x181)](_0x3b31c8){}[_0x147004(0x1dd)](_0x216509){var _0x50cd5a=_0x147004;return Array[_0x50cd5a(0x214)](_0x216509)||typeof _0x216509==_0x50cd5a(0x1db)&&this[_0x50cd5a(0x17b)](_0x216509)===_0x50cd5a(0x155);}[_0x147004(0x1ff)](_0x1d3256,_0x28649d){}[_0x147004(0x177)](_0x346714){var _0x32a70a=_0x147004;delete _0x346714[_0x32a70a(0x174)],delete _0x346714[_0x32a70a(0x1ed)],delete _0x346714[_0x32a70a(0x14e)];}['_setNodeExpressionPath'](_0x16c008,_0x317929){}['_propertyAccessor'](_0x471b88){var _0x2635df=_0x147004;return _0x471b88?_0x471b88['match'](this['_numberRegExp'])?'['+_0x471b88+']':_0x471b88['match'](this[_0x2635df(0x1ec)])?'.'+_0x471b88:_0x471b88[_0x2635df(0x1b7)](this[_0x2635df(0x20f)])?'['+_0x471b88+']':'[\\x27'+_0x471b88+'\\x27]':'';}}let _0x3e92ad=new _0x435aa7();function _0x3f6ae2(_0x484e9a,_0x47078a,_0x3effcf,_0x1fa5b1,_0x20bea7,_0x16291d){var _0x128002=_0x147004;let _0x924949,_0x2e4066;try{_0x2e4066=_0x10908a(),_0x924949=_0x5a5fbb[_0x47078a],!_0x924949||_0x2e4066-_0x924949['ts']>0x1f4&&_0x924949[_0x128002(0x1da)]&&_0x924949['time']/_0x924949[_0x128002(0x1da)]<0x64?(_0x5a5fbb[_0x47078a]=_0x924949={'count':0x0,'time':0x0,'ts':_0x2e4066},_0x5a5fbb[_0x128002(0x1cb)]={}):_0x2e4066-_0x5a5fbb['hits']['ts']>0x32&&_0x5a5fbb['hits']['count']&&_0x5a5fbb[_0x128002(0x1cb)][_0x128002(0x1ea)]/_0x5a5fbb['hits']['count']<0x64&&(_0x5a5fbb[_0x128002(0x1cb)]={});let _0x468dab=[],_0x3d220a=_0x924949[_0x128002(0x20d)]||_0x5a5fbb['hits'][_0x128002(0x20d)]?_0x54dcdc:_0x338045,_0x340aae=_0x2333f2=>{var _0x25fc6c=_0x128002;let _0x1a5ea1={};return _0x1a5ea1[_0x25fc6c(0x16e)]=_0x2333f2[_0x25fc6c(0x16e)],_0x1a5ea1[_0x25fc6c(0x136)]=_0x2333f2[_0x25fc6c(0x136)],_0x1a5ea1[_0x25fc6c(0x1c9)]=_0x2333f2['strLength'],_0x1a5ea1[_0x25fc6c(0x175)]=_0x2333f2[_0x25fc6c(0x175)],_0x1a5ea1[_0x25fc6c(0x1c4)]=_0x2333f2['autoExpandLimit'],_0x1a5ea1[_0x25fc6c(0x16f)]=_0x2333f2[_0x25fc6c(0x16f)],_0x1a5ea1[_0x25fc6c(0x210)]=!0x1,_0x1a5ea1['noFunctions']=!_0x59ef06,_0x1a5ea1[_0x25fc6c(0x1f8)]=0x1,_0x1a5ea1['level']=0x0,_0x1a5ea1[_0x25fc6c(0x195)]=_0x25fc6c(0x139),_0x1a5ea1['rootExpression']=_0x25fc6c(0x213),_0x1a5ea1[_0x25fc6c(0x1af)]=!0x0,_0x1a5ea1[_0x25fc6c(0x163)]=[],_0x1a5ea1[_0x25fc6c(0x1e0)]=0x0,_0x1a5ea1[_0x25fc6c(0x186)]=!0x0,_0x1a5ea1['allStrLength']=0x0,_0x1a5ea1[_0x25fc6c(0x172)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x1a5ea1;};for(var _0x3e9d90=0x0;_0x3e9d90<_0x20bea7[_0x128002(0x14a)];_0x3e9d90++)_0x468dab[_0x128002(0x18e)](_0x3e92ad[_0x128002(0x137)]({'timeNode':_0x484e9a==='time'||void 0x0},_0x20bea7[_0x3e9d90],_0x340aae(_0x3d220a),{}));if(_0x484e9a==='trace'){let _0x1392a8=Error[_0x128002(0x19e)];try{Error[_0x128002(0x19e)]=0x1/0x0,_0x468dab[_0x128002(0x18e)](_0x3e92ad[_0x128002(0x137)]({'stackNode':!0x0},new Error()[_0x128002(0x180)],_0x340aae(_0x3d220a),{'strLength':0x1/0x0}));}finally{Error[_0x128002(0x19e)]=_0x1392a8;}}return{'method':_0x128002(0x183),'version':_0x234705,'args':[{'ts':_0x3effcf,'session':_0x1fa5b1,'args':_0x468dab,'id':_0x47078a,'context':_0x16291d}]};}catch(_0x4ccff8){return{'method':_0x128002(0x183),'version':_0x234705,'args':[{'ts':_0x3effcf,'session':_0x1fa5b1,'args':[{'type':_0x128002(0x1f9),'error':_0x4ccff8&&_0x4ccff8['message']}],'id':_0x47078a,'context':_0x16291d}]};}finally{try{if(_0x924949&&_0x2e4066){let _0x17e760=_0x10908a();_0x924949[_0x128002(0x1da)]++,_0x924949[_0x128002(0x1ea)]+=_0x46dd27(_0x2e4066,_0x17e760),_0x924949['ts']=_0x17e760,_0x5a5fbb[_0x128002(0x1cb)]['count']++,_0x5a5fbb['hits']['time']+=_0x46dd27(_0x2e4066,_0x17e760),_0x5a5fbb[_0x128002(0x1cb)]['ts']=_0x17e760,(_0x924949[_0x128002(0x1da)]>0x32||_0x924949[_0x128002(0x1ea)]>0x64)&&(_0x924949[_0x128002(0x20d)]=!0x0),(_0x5a5fbb[_0x128002(0x1cb)][_0x128002(0x1da)]>0x3e8||_0x5a5fbb[_0x128002(0x1cb)][_0x128002(0x1ea)]>0x12c)&&(_0x5a5fbb[_0x128002(0x1cb)][_0x128002(0x20d)]=!0x0);}}catch{}}}return _0x4db0eb[_0x147004(0x1aa)];})(globalThis,'127.0.0.1','62024',_0x4dc1a5(0x18d),_0x4dc1a5(0x1a0),'1.0.0','1688302033184',[\"localhost\",\"127.0.0.1\",\"example.cypress.io\",\"DESKTOP-Q57EGBM\",\"192.168.1.2\"],_0x4dc1a5(0x145));");}catch(e){}};function oo_oo(i,...v){try{oo_cm().consoleLog(i, v);}catch(e){} return v};function oo_tr(i,...v){try{oo_cm().consoleTrace(i, v);}catch(e){} return v};function oo_ts(){try{oo_cm().consoleTime();}catch(e){}};function oo_te(){try{oo_cm().consoleTimeEnd();}catch(e){}};/*eslint eslint-comments/disable-enable-pair:,eslint-comments/no-unlimited-disable:,eslint-comments/no-aggregating-enable:,eslint-comments/no-duplicate-disable:,eslint-comments/no-unused-disable:,eslint-comments/no-unused-enable:,*/

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createTask)
/* harmony export */ });
function createTask(projNumber, name, date, priority) {
    let taskName = name;
    let taskDueDate = date;
    let taskPriority = priority;
    let completed = false;

    return {
        get name() {
            return taskName;
        },

        set name(newName) {
            taskName = newName;
        },

        get priority() {
            return taskPriority;
        },

        set priority(newPriority) {
            taskPriority = newPriority;
        },

        get deadline() {
            return taskDueDate;
        },

        set deadline(newDate) {
            taskDueDate = newDate;
        },

        set completed(status) {
            completed = status;
        },

        get completed() {
            return completed;
        },

        get projNum() {
            return projNumber;
        },
    };
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ1B3RDtBQUN4RCxpRUFBZSw4REFBYTs7Ozs7Ozs7Ozs7Ozs7O0FDRDVCO0FBQ087QUFDUDtBQUNBO0FBQ087QUFDUDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOcUU7QUFDSjtBQUNRO0FBQ2Q7QUFDUTtBQUNOO0FBQ0g7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLFdBQVcsaUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQSx5QkFBeUIsd0VBQWM7QUFDdkM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLHFFQUFlO0FBQzVCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0EsV0FBVyxxRUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBLHNCQUFzQiwyRUFBaUI7O0FBRXZDO0FBQ0EsV0FBVyxxRUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcscUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUscUVBQWU7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUscUVBQWU7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsaUVBQWU7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHFFQUFlO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLGVBQWUsb0VBQVU7QUFDekI7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsV0FBVyxxRUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBLGtCQUFrQix1RUFBYTtBQUMvQjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxXQUFXLHFFQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsV0FBVyxpRUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBLG9CQUFvQix5RUFBZTtBQUNuQztBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxXQUFXLHFFQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHFFQUFlO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHFFQUFlO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHFFQUFlO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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O0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RMbUM7QUFDZ0I7QUFDbEI7QUFDb0I7QUFDUTtBQUMyQjtBQUM2QjtBQUN6RTtBQUNNO0FBQ1c7QUFDVCxDQUFDO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLHNCQUFzQiwyQkFBMkI7QUFDakQsc0JBQXNCLGlDQUFpQztBQUN2RCxzQkFBc0IsNkJBQTZCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsaURBQVU7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0Isb0RBQU07QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLG9EQUFRLENBQUMsb0RBQVE7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxxQkFBcUIsaUJBQWlCLElBQUksd0lBQXdJLHNDQUFzQyx3QkFBd0IsNkNBQTZDLDBCQUEwQixtQ0FBbUMsa0JBQWtCLCtCQUErQixzQkFBc0IsK0JBQStCLDRDQUE0QyxZQUFZLElBQUksbVpBQW1aLCtCQUErQiw4Q0FBOEMsaUJBQWlCLDJDQUEyQyxtQkFBbUIsK09BQStPLHdCQUF3QixnRkFBZ0Ysb0hBQW9ILDhHQUE4RyxHQUFHLGtCQUFrQixvRkFBb0YsdUZBQXVGLG9DQUFvQyxnQ0FBZ0MscURBQXFELHdCQUF3Qix3ZEFBd2QsNkJBQTZCLHdCQUF3Qix3REFBd0QsY0FBYyx3RUFBd0UsS0FBSywrSEFBK0gsU0FBUyw2Q0FBNkMsdUxBQXVMLE1BQU0sSUFBSSx5RUFBeUUsTUFBTSxxQ0FBcUMsbURBQW1ELHFCQUFxQix3QkFBd0IseU9BQXlPLHdCQUF3QixnREFBZ0Qsc0JBQXNCLHNGQUFzRixpQ0FBaUMsd0JBQXdCLDhIQUE4SCxrQ0FBa0Msd0JBQXdCLDBLQUEwSyxrQ0FBa0Msd0JBQXdCLHdGQUF3RixvQ0FBb0Msd0JBQXdCLElBQUksMExBQTBMLFVBQVUsaVZBQWlWLElBQUksOEJBQThCLHdCQUF3Qix3REFBd0QsSUFBSSxvR0FBb0csT0FBTyxJQUFJLGdFQUFnRSxRQUFRLHFCQUFxQix3QkFBd0IseUlBQXlJLHdCQUF3QiwwSUFBMEksK0ZBQStGLG1DQUFtQyx3QkFBd0IsSUFBSSxrQ0FBa0MscUhBQXFILGlCQUFpQix5SkFBeUosOERBQThELHdCQUF3QixpRUFBaUUsd0JBQXdCLElBQUksOE9BQThPLGtDQUFrQyxFQUFFLDZEQUE2RCx1REFBdUQsaUJBQWlCLCtIQUErSCxFQUFFLHdFQUF3RSxzQkFBc0Isd0JBQXdCLDRDQUE0Qyw0QkFBNEIsV0FBVyxvREFBb0Qsd0JBQXdCLHlEQUF5RCxLQUFLLG1HQUFtRyx3QkFBd0IsZ0RBQWdELHlDQUF5Qyx1RkFBdUYsU0FBUyxLQUFLLHNCQUFzQiwyQkFBMkIscUJBQXFCLDZCQUE2QixNQUFNLHFCQUFxQixzQkFBc0IsT0FBTyxvRUFBb0UsMENBQTBDLHdCQUF3QiwwRkFBMEYsd0VBQXdFLDRSQUE0UixtQkFBbUIsKzZHQUErNkcsbUJBQW1CLG1CQUFtQixrQkFBa0IsK0ZBQStGLHdCQUF3QixrRUFBa0UseUVBQXlFLG1CQUFtQixzQkFBc0IscUJBQXFCLHdCQUF3QixpQkFBaUIsbUJBQW1CLGtCQUFrQixzQkFBc0IsNkJBQTZCLGVBQWUsa0lBQWtJLFlBQVksd0hBQXdILHFKQUFxSixTQUFTLFNBQVMsdUJBQXVCLHdDQUF3QyxtQ0FBbUMsd0JBQXdCLHlDQUF5QyxnREFBZ0QsK0NBQStDLCtGQUErRixrQ0FBa0MsSUFBSSwyQ0FBMkMsUUFBUSx5Q0FBeUMsa0NBQWtDLHdCQUF3QixJQUFJLHdFQUF3RSxxREFBcUQsUUFBUSxvREFBb0QsNkJBQTZCLHFDQUFxQyx3QkFBd0IsaUpBQWlKLHdDQUF3Qyx3QkFBd0IsZ0pBQWdKLG9CQUFvQix3QkFBd0IsaUdBQWlHLHVCQUF1Qix3QkFBd0IsaUdBQWlHLG1DQUFtQyx3QkFBd0Isb0ZBQW9GLHFDQUFxQyx3QkFBd0Isb0ZBQW9GLDhDQUE4QyxzQkFBc0IsaURBQWlELGtDQUFrQyx5R0FBeUcsZ0JBQWdCLGNBQWMsd0JBQXdCLDYxQkFBNjFCLHVEQUF1RCx5RUFBeUUsa0RBQWtELHNCQUFzQix5UEFBeVAsbUZBQW1GLFNBQVMsMEdBQTBHLHNWQUFzViw0REFBNEQsRUFBRSxhQUFhLGdDQUFnQyxjQUFjLGtFQUFrRSw0RUFBNEUsb0JBQW9CLDhHQUE4RyxrQ0FBa0MsS0FBSywwREFBMEQsb0JBQW9CLHVIQUF1SCxrREFBa0QsZ0tBQWdLLDhEQUE4RCxvR0FBb0csd0JBQXdCLDJFQUEyRSxlQUFlLFFBQVEsdUhBQXVILGVBQWUsUUFBUSx1SUFBdUksa0JBQWtCLG9CQUFvQixlQUFlLHlGQUF5Rix3QkFBd0Isa0VBQWtFLGVBQWUsUUFBUSwrSEFBK0gsZUFBZSxRQUFRLHNDQUFzQywwT0FBME8sa0JBQWtCLG9CQUFvQixlQUFlLGNBQWMsSUFBSSxrSkFBa0osa0VBQWtFLGVBQWUsT0FBTyw0SEFBNEgsZUFBZSxPQUFPLDRIQUE0SCxPQUFPLDhGQUE4RixtSEFBbUgsd0RBQXdELG9CQUFvQiwyTkFBMk4sa0VBQWtFLGVBQWUsT0FBTyx1SEFBdUgsZUFBZSxPQUFPLDJIQUEySCwwNUJBQTA1Qix3REFBd0Qsb0JBQW9CLDZDQUE2Qyw4REFBOEQsaUJBQWlCLDBDQUEwQywrVEFBK1QsOEJBQThCLHdCQUF3QiwrRUFBK0Usc0JBQXNCLHdCQUF3Qix1SUFBdUksd0RBQXdELHdCQUF3QixpRkFBaUYsOEJBQThCLHFDQUFxQyxxa0JBQXFrQiw4QkFBOEIsd0JBQXdCLDJFQUEyRSw4QkFBOEIsd0JBQXdCLGlHQUFpRyw4QkFBOEIsd0JBQXdCLGtGQUFrRixnRkFBZ0YsbUJBQW1CLDJCQUEyQixxTEFBcUwsMFVBQTBVLDBGQUEwRixtQkFBbUIseUVBQXlFLDBLQUEwSyx1VUFBdVUsc0VBQXNFLHVDQUF1QyxvREFBb0QsNkJBQTZCLEVBQUUsc0ZBQXNGLHFGQUFxRixJQUFJLG9FQUFvRSwwR0FBMEcscUVBQXFFLGlIQUFpSCw0REFBNEQseUVBQXlFLHVHQUF1RyxxRUFBcUUsME9BQTBPLGNBQWMsSUFBSSwwQ0FBMEMsaUJBQWlCLGtCQUFrQiw2RUFBNkUsZ0VBQWdFLDhGQUE4RixtSEFBbUgsd0JBQXdCLGtIQUFrSCxHQUFHLEVBQUUsS0FBSyw4UEFBOFAsMEhBQTBILCtHQUErRyx3QkFBd0IscUhBQXFILEdBQUcsa0JBQWtCLFFBQVEsb0hBQW9ILDREQUE0RCwyRkFBMkYsOEZBQThGLDREQUE0RCwrU0FBK1MsOEJBQThCLHdCQUF3Qiw0SEFBNEgsOEJBQThCLHdCQUF3QiwwREFBMEQsY0FBYyxJQUFJLGdEQUFnRCxNQUFNLDZEQUE2RCwyUUFBMlEsNERBQTRELHdCQUF3Qiw0SkFBNEosd0NBQXdDLHdCQUF3QixpTEFBaUwscUNBQXFDLHlDQUF5Qyx1Q0FBdUMsNEJBQTRCLHdCQUF3QiwyQ0FBMkMsd0NBQXdDLHdCQUF3QixvUkFBb1IsNkNBQTZDLHdCQUF3QixJQUFJLG9IQUFvSCxPQUFPLG1HQUFtRywwR0FBMEcseUNBQXlDLGtHQUFrRyxNQUFNLHFHQUFxRyxNQUFNLGlHQUFpRyxRQUFRLGlRQUFpUSw4QkFBOEIsd0JBQXdCLGlEQUFpRCwwQkFBMEIsd0JBQXdCLHFSQUFxUiw0SUFBNEksNkRBQTZELEdBQUcsMkNBQTJDLHdCQUF3QixpSEFBaUgsd0dBQXdHLG9CQUFvQixhQUFhLHFEQUFxRCwwR0FBMEcsc0VBQXNFLDZCQUE2QixlQUFlLHdDQUF3QyxxUEFBcVAseUNBQXlDLCtCQUErQiw4QkFBOEIsd0JBQXdCLHFJQUFxSSx5Q0FBeUMsOEJBQThCLHdCQUF3QiwwR0FBMEcsaURBQWlELGlDQUFpQyx3QkFBd0IsNk9BQTZPLDhCQUE4QixnRkFBZ0Ysd0JBQXdCLHdCQUF3QixJQUFJLG1OQUFtTixzQ0FBc0MsK0JBQStCLG9MQUFvTCxFQUFFLHNJQUFzSSx3QkFBd0IsaUJBQWlCLHF1QkFBcXVCLGlEQUFpRCxhQUFhLHNCQUFzQixzQ0FBc0MscUVBQXFFLHdDQUF3Qyw2Q0FBNkMsR0FBRyx3QkFBd0Isc0NBQXNDLElBQUkseUZBQXlGLGlCQUFpQixxREFBcUQsb0JBQW9CLElBQUksUUFBUSxvQ0FBb0MsT0FBTyx1REFBdUQsdUZBQXVGLElBQUksaUJBQWlCLE9BQU8sdURBQXVELDRDQUE0QyxnRUFBZ0UscUNBQXFDLElBQUksUUFBUSxJQUFJLHlCQUF5QiwwQkFBMEIsNmdCQUE2Z0IsU0FBUyxvQ0FBb0Msc01BQXNNLElBQUksWUFBWSx1QkFBdUIsSUFBSSwwQkFBMEIsV0FBVyxVQUFVLHVCQUF1QixJQUFJLDRCQUE0QixXQUFXLFVBQVUsaUJBQWlCLElBQUksdUJBQXVCLFlBQVksaUJBQWlCLElBQUksMEJBQTBCLFlBQVk7Ozs7Ozs7Ozs7Ozs7O0FDcDdCbHltQztBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUMzQ2U7QUFDZjs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsR0FBRztBQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2ltcGxlLXRvZG8tbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvYWRkTGVhZGluZ1plcm9zL2luZGV4LmpzIiwid2VicGFjazovL3NpbXBsZS10b2RvLWxpc3QtYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2RlZmF1bHRMb2NhbGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2ltcGxlLXRvZG8tbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZGVmYXVsdE9wdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2ltcGxlLXRvZG8tbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZm9ybWF0L2Zvcm1hdHRlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2ltcGxlLXRvZG8tbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZm9ybWF0L2xpZ2h0Rm9ybWF0dGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly9zaW1wbGUtdG9kby1saXN0LWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9mb3JtYXQvbG9uZ0Zvcm1hdHRlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2ltcGxlLXRvZG8tbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9zaW1wbGUtdG9kby1saXN0LWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENEYXlPZlllYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2ltcGxlLXRvZG8tbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDSVNPV2Vla1llYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2ltcGxlLXRvZG8tbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDSVNPV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly9zaW1wbGUtdG9kby1saXN0LWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENXZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly9zaW1wbGUtdG9kby1saXN0LWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3NpbXBsZS10b2RvLWxpc3QtYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3Byb3RlY3RlZFRva2Vucy9pbmRleC5qcyIsIndlYnBhY2s6Ly9zaW1wbGUtdG9kby1saXN0LWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2ltcGxlLXRvZG8tbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3NpbXBsZS10b2RvLWxpc3QtYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENJU09XZWVrL2luZGV4LmpzIiwid2VicGFjazovL3NpbXBsZS10b2RvLWxpc3QtYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENXZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly9zaW1wbGUtdG9kby1saXN0LWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9zdGFydE9mVVRDV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly9zaW1wbGUtdG9kby1saXN0LWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi90b0ludGVnZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2ltcGxlLXRvZG8tbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2FkZE1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9zaW1wbGUtdG9kby1saXN0LWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vY29uc3RhbnRzL2luZGV4LmpzIiwid2VicGFjazovL3NpbXBsZS10b2RvLWxpc3QtYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9mb3JtYXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2ltcGxlLXRvZG8tbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9zaW1wbGUtdG9kby1saXN0LWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNGdXR1cmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2ltcGxlLXRvZG8tbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzVmFsaWQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2ltcGxlLXRvZG8tbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkRm9ybWF0TG9uZ0ZuL2luZGV4LmpzIiwid2VicGFjazovL3NpbXBsZS10b2RvLWxpc3QtYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZExvY2FsaXplRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2ltcGxlLXRvZG8tbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkTWF0Y2hGbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9zaW1wbGUtdG9kby1saXN0LWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRNYXRjaFBhdHRlcm5Gbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9zaW1wbGUtdG9kby1saXN0LWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2ltcGxlLXRvZG8tbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdExvbmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2ltcGxlLXRvZG8tbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdFJlbGF0aXZlL2luZGV4LmpzIiwid2VicGFjazovL3NpbXBsZS10b2RvLWxpc3QtYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9sb2NhbGl6ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9zaW1wbGUtdG9kby1saXN0LWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvbWF0Y2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2ltcGxlLXRvZG8tbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9pbmRleC5qcyIsIndlYnBhY2s6Ly9zaW1wbGUtdG9kby1saXN0LWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vcGFyc2VJU08vaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2ltcGxlLXRvZG8tbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N1Yk1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9zaW1wbGUtdG9kby1saXN0LWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vdG9EYXRlL2luZGV4LmpzIiwid2VicGFjazovL3NpbXBsZS10b2RvLWxpc3QtYXBwLy4vc3JjL3N0eWxlLnNjc3M/YmMzYiIsIndlYnBhY2s6Ly9zaW1wbGUtdG9kby1saXN0LWFwcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9zaW1wbGUtdG9kby1saXN0LWFwcC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3NpbXBsZS10b2RvLWxpc3QtYXBwLy4vc3JjL3JlbmRlci5qcyIsIndlYnBhY2s6Ly9zaW1wbGUtdG9kby1saXN0LWFwcC8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL3NpbXBsZS10b2RvLWxpc3QtYXBwLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRMZWFkaW5nWmVyb3MobnVtYmVyLCB0YXJnZXRMZW5ndGgpIHtcbiAgdmFyIHNpZ24gPSBudW1iZXIgPCAwID8gJy0nIDogJyc7XG4gIHZhciBvdXRwdXQgPSBNYXRoLmFicyhudW1iZXIpLnRvU3RyaW5nKCk7XG4gIHdoaWxlIChvdXRwdXQubGVuZ3RoIDwgdGFyZ2V0TGVuZ3RoKSB7XG4gICAgb3V0cHV0ID0gJzAnICsgb3V0cHV0O1xuICB9XG4gIHJldHVybiBzaWduICsgb3V0cHV0O1xufSIsImltcG9ydCBkZWZhdWx0TG9jYWxlIGZyb20gXCIuLi8uLi9sb2NhbGUvZW4tVVMvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGRlZmF1bHRMb2NhbGU7IiwidmFyIGRlZmF1bHRPcHRpb25zID0ge307XG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVmYXVsdE9wdGlvbnMoKSB7XG4gIHJldHVybiBkZWZhdWx0T3B0aW9ucztcbn1cbmV4cG9ydCBmdW5jdGlvbiBzZXREZWZhdWx0T3B0aW9ucyhuZXdPcHRpb25zKSB7XG4gIGRlZmF1bHRPcHRpb25zID0gbmV3T3B0aW9ucztcbn0iLCJpbXBvcnQgZ2V0VVRDRGF5T2ZZZWFyIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ0RheU9mWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFVUQ0lTT1dlZWsgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDSVNPV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFVUQ0lTT1dlZWtZZWFyIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VVRDV2VlayBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VVRDV2Vla1llYXIgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCBhZGRMZWFkaW5nWmVyb3MgZnJvbSBcIi4uLy4uL2FkZExlYWRpbmdaZXJvcy9pbmRleC5qc1wiO1xuaW1wb3J0IGxpZ2h0Rm9ybWF0dGVycyBmcm9tIFwiLi4vbGlnaHRGb3JtYXR0ZXJzL2luZGV4LmpzXCI7XG52YXIgZGF5UGVyaW9kRW51bSA9IHtcbiAgYW06ICdhbScsXG4gIHBtOiAncG0nLFxuICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgbm9vbjogJ25vb24nLFxuICBtb3JuaW5nOiAnbW9ybmluZycsXG4gIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgbmlnaHQ6ICduaWdodCdcbn07XG4vKlxuICogfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCAgYSAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgfCAgQSogfCBNaWxsaXNlY29uZHMgaW4gZGF5ICAgICAgICAgICAgfFxuICogfCAgYiAgfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgfCAgQiAgfCBGbGV4aWJsZSBkYXkgcGVyaW9kICAgICAgICAgICAgfFxuICogfCAgYyAgfCBTdGFuZC1hbG9uZSBsb2NhbCBkYXkgb2Ygd2VlayAgfCAgQyogfCBMb2NhbGl6ZWQgaG91ciB3LyBkYXkgcGVyaW9kICAgfFxuICogfCAgZCAgfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgfCAgRCAgfCBEYXkgb2YgeWVhciAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgZSAgfCBMb2NhbCBkYXkgb2Ygd2VlayAgICAgICAgICAgICAgfCAgRSAgfCBEYXkgb2Ygd2VlayAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgZiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgRiogfCBEYXkgb2Ygd2VlayBpbiBtb250aCAgICAgICAgICAgfFxuICogfCAgZyogfCBNb2RpZmllZCBKdWxpYW4gZGF5ICAgICAgICAgICAgfCAgRyAgfCBFcmEgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgaCAgfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgfCAgSCAgfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgaSEgfCBJU08gZGF5IG9mIHdlZWsgICAgICAgICAgICAgICAgfCAgSSEgfCBJU08gd2VlayBvZiB5ZWFyICAgICAgICAgICAgICAgfFxuICogfCAgaiogfCBMb2NhbGl6ZWQgaG91ciB3LyBkYXkgcGVyaW9kICAgfCAgSiogfCBMb2NhbGl6ZWQgaG91ciB3L28gZGF5IHBlcmlvZCAgfFxuICogfCAgayAgfCBIb3VyIFsxLTI0XSAgICAgICAgICAgICAgICAgICAgfCAgSyAgfCBIb3VyIFswLTExXSAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbCogfCAoZGVwcmVjYXRlZCkgICAgICAgICAgICAgICAgICAgfCAgTCAgfCBTdGFuZC1hbG9uZSBtb250aCAgICAgICAgICAgICAgfFxuICogfCAgbSAgfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTSAgfCBNb250aCAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbyEgfCBPcmRpbmFsIG51bWJlciBtb2RpZmllciAgICAgICAgfCAgTyAgfCBUaW1lem9uZSAoR01UKSAgICAgICAgICAgICAgICAgfFxuICogfCAgcCEgfCBMb25nIGxvY2FsaXplZCB0aW1lICAgICAgICAgICAgfCAgUCEgfCBMb25nIGxvY2FsaXplZCBkYXRlICAgICAgICAgICAgfFxuICogfCAgcSAgfCBTdGFuZC1hbG9uZSBxdWFydGVyICAgICAgICAgICAgfCAgUSAgfCBRdWFydGVyICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgciogfCBSZWxhdGVkIEdyZWdvcmlhbiB5ZWFyICAgICAgICAgfCAgUiEgfCBJU08gd2Vlay1udW1iZXJpbmcgeWVhciAgICAgICAgfFxuICogfCAgcyAgfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgfCAgUyAgfCBGcmFjdGlvbiBvZiBzZWNvbmQgICAgICAgICAgICAgfFxuICogfCAgdCEgfCBTZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICAgICAgfCAgVCEgfCBNaWxsaXNlY29uZHMgdGltZXN0YW1wICAgICAgICAgfFxuICogfCAgdSAgfCBFeHRlbmRlZCB5ZWFyICAgICAgICAgICAgICAgICAgfCAgVSogfCBDeWNsaWMgeWVhciAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgdiogfCBUaW1lem9uZSAoZ2VuZXJpYyBub24tbG9jYXQuKSAgfCAgViogfCBUaW1lem9uZSAobG9jYXRpb24pICAgICAgICAgICAgfFxuICogfCAgdyAgfCBMb2NhbCB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgfCAgVyogfCBXZWVrIG9mIG1vbnRoICAgICAgICAgICAgICAgICAgfFxuICogfCAgeCAgfCBUaW1lem9uZSAoSVNPLTg2MDEgdy9vIFopICAgICAgfCAgWCAgfCBUaW1lem9uZSAoSVNPLTg2MDEpICAgICAgICAgICAgfFxuICogfCAgeSAgfCBZZWFyIChhYnMpICAgICAgICAgICAgICAgICAgICAgfCAgWSAgfCBMb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgfFxuICogfCAgeiAgfCBUaW1lem9uZSAoc3BlY2lmaWMgbm9uLWxvY2F0LikgfCAgWiogfCBUaW1lem9uZSAoYWxpYXNlcykgICAgICAgICAgICAgfFxuICpcbiAqIExldHRlcnMgbWFya2VkIGJ5ICogYXJlIG5vdCBpbXBsZW1lbnRlZCBidXQgcmVzZXJ2ZWQgYnkgVW5pY29kZSBzdGFuZGFyZC5cbiAqXG4gKiBMZXR0ZXJzIG1hcmtlZCBieSAhIGFyZSBub24tc3RhbmRhcmQsIGJ1dCBpbXBsZW1lbnRlZCBieSBkYXRlLWZuczpcbiAqIC0gYG9gIG1vZGlmaWVzIHRoZSBwcmV2aW91cyB0b2tlbiB0byB0dXJuIGl0IGludG8gYW4gb3JkaW5hbCAoc2VlIGBmb3JtYXRgIGRvY3MpXG4gKiAtIGBpYCBpcyBJU08gZGF5IG9mIHdlZWsuIEZvciBgaWAgYW5kIGBpaWAgaXMgcmV0dXJucyBudW1lcmljIElTTyB3ZWVrIGRheXMsXG4gKiAgIGkuZS4gNyBmb3IgU3VuZGF5LCAxIGZvciBNb25kYXksIGV0Yy5cbiAqIC0gYElgIGlzIElTTyB3ZWVrIG9mIHllYXIsIGFzIG9wcG9zZWQgdG8gYHdgIHdoaWNoIGlzIGxvY2FsIHdlZWsgb2YgeWVhci5cbiAqIC0gYFJgIGlzIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyLCBhcyBvcHBvc2VkIHRvIGBZYCB3aGljaCBpcyBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyLlxuICogICBgUmAgaXMgc3VwcG9zZWQgdG8gYmUgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIGBJYCBhbmQgYGlgXG4gKiAgIGZvciB1bml2ZXJzYWwgSVNPIHdlZWstbnVtYmVyaW5nIGRhdGUsIHdoZXJlYXNcbiAqICAgYFlgIGlzIHN1cHBvc2VkIHRvIGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBgd2AgYW5kIGBlYFxuICogICBmb3Igd2Vlay1udW1iZXJpbmcgZGF0ZSBzcGVjaWZpYyB0byB0aGUgbG9jYWxlLlxuICogLSBgUGAgaXMgbG9uZyBsb2NhbGl6ZWQgZGF0ZSBmb3JtYXRcbiAqIC0gYHBgIGlzIGxvbmcgbG9jYWxpemVkIHRpbWUgZm9ybWF0XG4gKi9cblxudmFyIGZvcm1hdHRlcnMgPSB7XG4gIC8vIEVyYVxuICBHOiBmdW5jdGlvbiBHKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBlcmEgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCkgPiAwID8gMSA6IDA7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gQUQsIEJDXG4gICAgICBjYXNlICdHJzpcbiAgICAgIGNhc2UgJ0dHJzpcbiAgICAgIGNhc2UgJ0dHRyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5lcmEoZXJhLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCdcbiAgICAgICAgfSk7XG4gICAgICAvLyBBLCBCXG4gICAgICBjYXNlICdHR0dHRyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5lcmEoZXJhLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnXG4gICAgICAgIH0pO1xuICAgICAgLy8gQW5ubyBEb21pbmksIEJlZm9yZSBDaHJpc3RcbiAgICAgIGNhc2UgJ0dHR0cnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gWWVhclxuICB5OiBmdW5jdGlvbiB5KGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIC8vIE9yZGluYWwgbnVtYmVyXG4gICAgaWYgKHRva2VuID09PSAneW8nKSB7XG4gICAgICB2YXIgc2lnbmVkWWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTtcbiAgICAgIC8vIFJldHVybnMgMSBmb3IgMSBCQyAod2hpY2ggaXMgeWVhciAwIGluIEphdmFTY3JpcHQpXG4gICAgICB2YXIgeWVhciA9IHNpZ25lZFllYXIgPiAwID8gc2lnbmVkWWVhciA6IDEgLSBzaWduZWRZZWFyO1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoeWVhciwge1xuICAgICAgICB1bml0OiAneWVhcidcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLnkoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBMb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gIFk6IGZ1bmN0aW9uIFkoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIHNpZ25lZFdlZWtZZWFyID0gZ2V0VVRDV2Vla1llYXIoZGF0ZSwgb3B0aW9ucyk7XG4gICAgLy8gUmV0dXJucyAxIGZvciAxIEJDICh3aGljaCBpcyB5ZWFyIDAgaW4gSmF2YVNjcmlwdClcbiAgICB2YXIgd2Vla1llYXIgPSBzaWduZWRXZWVrWWVhciA+IDAgPyBzaWduZWRXZWVrWWVhciA6IDEgLSBzaWduZWRXZWVrWWVhcjtcblxuICAgIC8vIFR3byBkaWdpdCB5ZWFyXG4gICAgaWYgKHRva2VuID09PSAnWVknKSB7XG4gICAgICB2YXIgdHdvRGlnaXRZZWFyID0gd2Vla1llYXIgJSAxMDA7XG4gICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHR3b0RpZ2l0WWVhciwgMik7XG4gICAgfVxuXG4gICAgLy8gT3JkaW5hbCBudW1iZXJcbiAgICBpZiAodG9rZW4gPT09ICdZbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHdlZWtZZWFyLCB7XG4gICAgICAgIHVuaXQ6ICd5ZWFyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gUGFkZGluZ1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3Mod2Vla1llYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gIFI6IGZ1bmN0aW9uIFIoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgaXNvV2Vla1llYXIgPSBnZXRVVENJU09XZWVrWWVhcihkYXRlKTtcblxuICAgIC8vIFBhZGRpbmdcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGlzb1dlZWtZZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBFeHRlbmRlZCB5ZWFyLiBUaGlzIGlzIGEgc2luZ2xlIG51bWJlciBkZXNpZ25hdGluZyB0aGUgeWVhciBvZiB0aGlzIGNhbGVuZGFyIHN5c3RlbS5cbiAgLy8gVGhlIG1haW4gZGlmZmVyZW5jZSBiZXR3ZWVuIGB5YCBhbmQgYHVgIGxvY2FsaXplcnMgYXJlIEIuQy4geWVhcnM6XG4gIC8vIHwgWWVhciB8IGB5YCB8IGB1YCB8XG4gIC8vIHwtLS0tLS18LS0tLS18LS0tLS18XG4gIC8vIHwgQUMgMSB8ICAgMSB8ICAgMSB8XG4gIC8vIHwgQkMgMSB8ICAgMSB8ICAgMCB8XG4gIC8vIHwgQkMgMiB8ICAgMiB8ICAtMSB8XG4gIC8vIEFsc28gYHl5YCBhbHdheXMgcmV0dXJucyB0aGUgbGFzdCB0d28gZGlnaXRzIG9mIGEgeWVhcixcbiAgLy8gd2hpbGUgYHV1YCBwYWRzIHNpbmdsZSBkaWdpdCB5ZWFycyB0byAyIGNoYXJhY3RlcnMgYW5kIHJldHVybnMgb3RoZXIgeWVhcnMgdW5jaGFuZ2VkLlxuICB1OiBmdW5jdGlvbiB1KGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIHllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh5ZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBRdWFydGVyXG4gIFE6IGZ1bmN0aW9uIFEoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIHF1YXJ0ZXIgPSBNYXRoLmNlaWwoKGRhdGUuZ2V0VVRDTW9udGgoKSArIDEpIC8gMyk7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMSwgMiwgMywgNFxuICAgICAgY2FzZSAnUSc6XG4gICAgICAgIHJldHVybiBTdHJpbmcocXVhcnRlcik7XG4gICAgICAvLyAwMSwgMDIsIDAzLCAwNFxuICAgICAgY2FzZSAnUVEnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHF1YXJ0ZXIsIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIDNyZCwgNHRoXG4gICAgICBjYXNlICdRbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB1bml0OiAncXVhcnRlcidcbiAgICAgICAgfSk7XG4gICAgICAvLyBRMSwgUTIsIFEzLCBRNFxuICAgICAgY2FzZSAnUVFRJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIDEsIDIsIDMsIDQgKG5hcnJvdyBxdWFydGVyOyBjb3VsZCBiZSBub3QgbnVtZXJpY2FsKVxuICAgICAgY2FzZSAnUVFRUVEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uXG4gICAgICBjYXNlICdRUVFRJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFN0YW5kLWFsb25lIHF1YXJ0ZXJcbiAgcTogZnVuY3Rpb24gcShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgcXVhcnRlciA9IE1hdGguY2VpbCgoZGF0ZS5nZXRVVENNb250aCgpICsgMSkgLyAzKTtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAxLCAyLCAzLCA0XG4gICAgICBjYXNlICdxJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhxdWFydGVyKTtcbiAgICAgIC8vIDAxLCAwMiwgMDMsIDA0XG4gICAgICBjYXNlICdxcSc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MocXVhcnRlciwgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgM3JkLCA0dGhcbiAgICAgIGNhc2UgJ3FvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIocXVhcnRlciwge1xuICAgICAgICAgIHVuaXQ6ICdxdWFydGVyJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFExLCBRMiwgUTMsIFE0XG4gICAgICBjYXNlICdxcXEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gMSwgMiwgMywgNCAobmFycm93IHF1YXJ0ZXI7IGNvdWxkIGJlIG5vdCBudW1lcmljYWwpXG4gICAgICBjYXNlICdxcXFxcSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi5cbiAgICAgIGNhc2UgJ3FxcXEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gTW9udGhcbiAgTTogZnVuY3Rpb24gTShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgbW9udGggPSBkYXRlLmdldFVUQ01vbnRoKCk7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnTSc6XG4gICAgICBjYXNlICdNTSc6XG4gICAgICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuTShkYXRlLCB0b2tlbik7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCAxMnRoXG4gICAgICBjYXNlICdNbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKG1vbnRoICsgMSwge1xuICAgICAgICAgIHVuaXQ6ICdtb250aCdcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW4sIEZlYiwgLi4uLCBEZWNcbiAgICAgIGNhc2UgJ01NTSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEosIEYsIC4uLiwgRFxuICAgICAgY2FzZSAnTU1NTU0nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXJcbiAgICAgIGNhc2UgJ01NTU0nOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBTdGFuZC1hbG9uZSBtb250aFxuICBMOiBmdW5jdGlvbiBMKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBtb250aCA9IGRhdGUuZ2V0VVRDTW9udGgoKTtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAxLCAyLCAuLi4sIDEyXG4gICAgICBjYXNlICdMJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhtb250aCArIDEpO1xuICAgICAgLy8gMDEsIDAyLCAuLi4sIDEyXG4gICAgICBjYXNlICdMTCc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MobW9udGggKyAxLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDEydGhcbiAgICAgIGNhc2UgJ0xvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobW9udGggKyAxLCB7XG4gICAgICAgICAgdW5pdDogJ21vbnRoJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEphbiwgRmViLCAuLi4sIERlY1xuICAgICAgY2FzZSAnTExMJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSiwgRiwgLi4uLCBEXG4gICAgICBjYXNlICdMTExMTCc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlclxuICAgICAgY2FzZSAnTExMTCc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIExvY2FsIHdlZWsgb2YgeWVhclxuICB3OiBmdW5jdGlvbiB3KGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciB3ZWVrID0gZ2V0VVRDV2VlayhkYXRlLCBvcHRpb25zKTtcbiAgICBpZiAodG9rZW4gPT09ICd3bycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHdlZWssIHtcbiAgICAgICAgdW5pdDogJ3dlZWsnXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh3ZWVrLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBJU08gd2VlayBvZiB5ZWFyXG4gIEk6IGZ1bmN0aW9uIEkoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGlzb1dlZWsgPSBnZXRVVENJU09XZWVrKGRhdGUpO1xuICAgIGlmICh0b2tlbiA9PT0gJ0lvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaXNvV2Vlaywge1xuICAgICAgICB1bml0OiAnd2VlaydcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGlzb1dlZWssIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIERheSBvZiB0aGUgbW9udGhcbiAgZDogZnVuY3Rpb24gZChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdkbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDRGF0ZSgpLCB7XG4gICAgICAgIHVuaXQ6ICdkYXRlJ1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuZChkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIERheSBvZiB5ZWFyXG4gIEQ6IGZ1bmN0aW9uIEQoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGRheU9mWWVhciA9IGdldFVUQ0RheU9mWWVhcihkYXRlKTtcbiAgICBpZiAodG9rZW4gPT09ICdEbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRheU9mWWVhciwge1xuICAgICAgICB1bml0OiAnZGF5T2ZZZWFyJ1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF5T2ZZZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBEYXkgb2Ygd2Vla1xuICBFOiBmdW5jdGlvbiBFKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFR1ZVxuICAgICAgY2FzZSAnRSc6XG4gICAgICBjYXNlICdFRSc6XG4gICAgICBjYXNlICdFRUUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFRcbiAgICAgIGNhc2UgJ0VFRUVFJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcbiAgICAgIGNhc2UgJ0VFRUVFRSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuICAgICAgY2FzZSAnRUVFRSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gTG9jYWwgZGF5IG9mIHdlZWtcbiAgZTogZnVuY3Rpb24gZShkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgZGF5T2ZXZWVrID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgICB2YXIgbG9jYWxEYXlPZldlZWsgPSAoZGF5T2ZXZWVrIC0gb3B0aW9ucy53ZWVrU3RhcnRzT24gKyA4KSAlIDcgfHwgNztcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBOdW1lcmljYWwgdmFsdWUgKE50aCBkYXkgb2Ygd2VlayB3aXRoIGN1cnJlbnQgbG9jYWxlIG9yIHdlZWtTdGFydHNPbilcbiAgICAgIGNhc2UgJ2UnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKGxvY2FsRGF5T2ZXZWVrKTtcbiAgICAgIC8vIFBhZGRlZCBudW1lcmljYWwgdmFsdWVcbiAgICAgIGNhc2UgJ2VlJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhsb2NhbERheU9mV2VlaywgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCA3dGhcbiAgICAgIGNhc2UgJ2VvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobG9jYWxEYXlPZldlZWssIHtcbiAgICAgICAgICB1bml0OiAnZGF5J1xuICAgICAgICB9KTtcbiAgICAgIGNhc2UgJ2VlZSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuICAgICAgY2FzZSAnZWVlZWUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuICAgICAgY2FzZSAnZWVlZWVlJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG4gICAgICBjYXNlICdlZWVlJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBTdGFuZC1hbG9uZSBsb2NhbCBkYXkgb2Ygd2Vla1xuICBjOiBmdW5jdGlvbiBjKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xuICAgIHZhciBsb2NhbERheU9mV2VlayA9IChkYXlPZldlZWsgLSBvcHRpb25zLndlZWtTdGFydHNPbiArIDgpICUgNyB8fCA3O1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIE51bWVyaWNhbCB2YWx1ZSAoc2FtZSBhcyBpbiBgZWApXG4gICAgICBjYXNlICdjJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhsb2NhbERheU9mV2Vlayk7XG4gICAgICAvLyBQYWRkZWQgbnVtZXJpY2FsIHZhbHVlXG4gICAgICBjYXNlICdjYyc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MobG9jYWxEYXlPZldlZWssIHRva2VuLmxlbmd0aCk7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCA3dGhcbiAgICAgIGNhc2UgJ2NvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobG9jYWxEYXlPZldlZWssIHtcbiAgICAgICAgICB1bml0OiAnZGF5J1xuICAgICAgICB9KTtcbiAgICAgIGNhc2UgJ2NjYyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuICAgICAgY2FzZSAnY2NjY2MnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuICAgICAgY2FzZSAnY2NjY2NjJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG4gICAgICBjYXNlICdjY2NjJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBJU08gZGF5IG9mIHdlZWtcbiAgaTogZnVuY3Rpb24gaShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgZGF5T2ZXZWVrID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgICB2YXIgaXNvRGF5T2ZXZWVrID0gZGF5T2ZXZWVrID09PSAwID8gNyA6IGRheU9mV2VlaztcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAyXG4gICAgICBjYXNlICdpJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhpc29EYXlPZldlZWspO1xuICAgICAgLy8gMDJcbiAgICAgIGNhc2UgJ2lpJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhpc29EYXlPZldlZWssIHRva2VuLmxlbmd0aCk7XG4gICAgICAvLyAybmRcbiAgICAgIGNhc2UgJ2lvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaXNvRGF5T2ZXZWVrLCB7XG4gICAgICAgICAgdW5pdDogJ2RheSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVcbiAgICAgIGNhc2UgJ2lpaSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuICAgICAgY2FzZSAnaWlpaWknOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuICAgICAgY2FzZSAnaWlpaWlpJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG4gICAgICBjYXNlICdpaWlpJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBBTSBvciBQTVxuICBhOiBmdW5jdGlvbiBhKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlID0gaG91cnMgLyAxMiA+PSAxID8gJ3BtJyA6ICdhbSc7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnYSc6XG4gICAgICBjYXNlICdhYSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgY2FzZSAnYWFhJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSkudG9Mb3dlckNhc2UoKTtcbiAgICAgIGNhc2UgJ2FhYWFhJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgY2FzZSAnYWFhYSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gQU0sIFBNLCBtaWRuaWdodCwgbm9vblxuICBiOiBmdW5jdGlvbiBiKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlO1xuICAgIGlmIChob3VycyA9PT0gMTIpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubm9vbjtcbiAgICB9IGVsc2UgaWYgKGhvdXJzID09PSAwKSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm1pZG5pZ2h0O1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBob3VycyAvIDEyID49IDEgPyAncG0nIDogJ2FtJztcbiAgICB9XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnYic6XG4gICAgICBjYXNlICdiYic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgY2FzZSAnYmJiJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSkudG9Mb3dlckNhc2UoKTtcbiAgICAgIGNhc2UgJ2JiYmJiJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgY2FzZSAnYmJiYic6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gaW4gdGhlIG1vcm5pbmcsIGluIHRoZSBhZnRlcm5vb24sIGluIHRoZSBldmVuaW5nLCBhdCBuaWdodFxuICBCOiBmdW5jdGlvbiBCKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlO1xuICAgIGlmIChob3VycyA+PSAxNykge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5ldmVuaW5nO1xuICAgIH0gZWxzZSBpZiAoaG91cnMgPj0gMTIpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0uYWZ0ZXJub29uO1xuICAgIH0gZWxzZSBpZiAoaG91cnMgPj0gNCkge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5tb3JuaW5nO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm5pZ2h0O1xuICAgIH1cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdCJzpcbiAgICAgIGNhc2UgJ0JCJzpcbiAgICAgIGNhc2UgJ0JCQic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgY2FzZSAnQkJCQkInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICBjYXNlICdCQkJCJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBIb3VyIFsxLTEyXVxuICBoOiBmdW5jdGlvbiBoKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ2hvJykge1xuICAgICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpICUgMTI7XG4gICAgICBpZiAoaG91cnMgPT09IDApIGhvdXJzID0gMTI7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihob3Vycywge1xuICAgICAgICB1bml0OiAnaG91cidcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLmgoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBIb3VyIFswLTIzXVxuICBIOiBmdW5jdGlvbiBIKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ0hvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRVVENIb3VycygpLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuSChkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIEhvdXIgWzAtMTFdXG4gIEs6IGZ1bmN0aW9uIEsoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpICUgMTI7XG4gICAgaWYgKHRva2VuID09PSAnS28nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihob3Vycywge1xuICAgICAgICB1bml0OiAnaG91cidcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGhvdXJzLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBIb3VyIFsxLTI0XVxuICBrOiBmdW5jdGlvbiBrKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICBpZiAoaG91cnMgPT09IDApIGhvdXJzID0gMjQ7XG4gICAgaWYgKHRva2VuID09PSAna28nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihob3Vycywge1xuICAgICAgICB1bml0OiAnaG91cidcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGhvdXJzLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBNaW51dGVcbiAgbTogZnVuY3Rpb24gbShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdtbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDTWludXRlcygpLCB7XG4gICAgICAgIHVuaXQ6ICdtaW51dGUnXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5tKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gU2Vjb25kXG4gIHM6IGZ1bmN0aW9uIHMoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnc28nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFVUQ1NlY29uZHMoKSwge1xuICAgICAgICB1bml0OiAnc2Vjb25kJ1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMucyhkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIEZyYWN0aW9uIG9mIHNlY29uZFxuICBTOiBmdW5jdGlvbiBTKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5TKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gVGltZXpvbmUgKElTTy04NjAxLiBJZiBvZmZzZXQgaXMgMCwgb3V0cHV0IGlzIGFsd2F5cyBgJ1onYClcbiAgWDogZnVuY3Rpb24gWChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lem9uZU9mZnNldCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuICAgIGlmICh0aW1lem9uZU9mZnNldCA9PT0gMCkge1xuICAgICAgcmV0dXJuICdaJztcbiAgICB9XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gSG91cnMgYW5kIG9wdGlvbmFsIG1pbnV0ZXNcbiAgICAgIGNhc2UgJ1gnOlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKHRpbWV6b25lT2Zmc2V0KTtcblxuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgWFhgXG4gICAgICBjYXNlICdYWFhYJzpcbiAgICAgIGNhc2UgJ1hYJzpcbiAgICAgICAgLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCk7XG5cbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGggYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYFhYWGBcbiAgICAgIGNhc2UgJ1hYWFhYJzpcbiAgICAgIGNhc2UgJ1hYWCc6IC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGggYDpgIGRlbGltaXRlclxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgIH1cbiAgfSxcbiAgLy8gVGltZXpvbmUgKElTTy04NjAxLiBJZiBvZmZzZXQgaXMgMCwgb3V0cHV0IGlzIGAnKzAwOjAwJ2Agb3IgZXF1aXZhbGVudClcbiAgeDogZnVuY3Rpb24geChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lem9uZU9mZnNldCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIEhvdXJzIGFuZCBvcHRpb25hbCBtaW51dGVzXG4gICAgICBjYXNlICd4JzpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lV2l0aE9wdGlvbmFsTWludXRlcyh0aW1lem9uZU9mZnNldCk7XG5cbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYHh4YFxuICAgICAgY2FzZSAneHh4eCc6XG4gICAgICBjYXNlICd4eCc6XG4gICAgICAgIC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQpO1xuXG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRoIGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGB4eHhgXG4gICAgICBjYXNlICd4eHh4eCc6XG4gICAgICBjYXNlICd4eHgnOiAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRoIGA6YCBkZWxpbWl0ZXJcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICB9XG4gIH0sXG4gIC8vIFRpbWV6b25lIChHTVQpXG4gIE86IGZ1bmN0aW9uIE8oZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBTaG9ydFxuICAgICAgY2FzZSAnTyc6XG4gICAgICBjYXNlICdPTyc6XG4gICAgICBjYXNlICdPT08nOlxuICAgICAgICByZXR1cm4gJ0dNVCcgKyBmb3JtYXRUaW1lem9uZVNob3J0KHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgICAgLy8gTG9uZ1xuICAgICAgY2FzZSAnT09PTyc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gJ0dNVCcgKyBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICB9XG4gIH0sXG4gIC8vIFRpbWV6b25lIChzcGVjaWZpYyBub24tbG9jYXRpb24pXG4gIHo6IGZ1bmN0aW9uIHooZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBTaG9ydFxuICAgICAgY2FzZSAneic6XG4gICAgICBjYXNlICd6eic6XG4gICAgICBjYXNlICd6enonOlxuICAgICAgICByZXR1cm4gJ0dNVCcgKyBmb3JtYXRUaW1lem9uZVNob3J0KHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgICAgLy8gTG9uZ1xuICAgICAgY2FzZSAnenp6eic6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gJ0dNVCcgKyBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICB9XG4gIH0sXG4gIC8vIFNlY29uZHMgdGltZXN0YW1wXG4gIHQ6IGZ1bmN0aW9uIHQoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXN0YW1wID0gTWF0aC5mbG9vcihvcmlnaW5hbERhdGUuZ2V0VGltZSgpIC8gMTAwMCk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0aW1lc3RhbXAsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIE1pbGxpc2Vjb25kcyB0aW1lc3RhbXBcbiAgVDogZnVuY3Rpb24gVChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lc3RhbXAgPSBvcmlnaW5hbERhdGUuZ2V0VGltZSgpO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModGltZXN0YW1wLCB0b2tlbi5sZW5ndGgpO1xuICB9XG59O1xuZnVuY3Rpb24gZm9ybWF0VGltZXpvbmVTaG9ydChvZmZzZXQsIGRpcnR5RGVsaW1pdGVyKSB7XG4gIHZhciBzaWduID0gb2Zmc2V0ID4gMCA/ICctJyA6ICcrJztcbiAgdmFyIGFic09mZnNldCA9IE1hdGguYWJzKG9mZnNldCk7XG4gIHZhciBob3VycyA9IE1hdGguZmxvb3IoYWJzT2Zmc2V0IC8gNjApO1xuICB2YXIgbWludXRlcyA9IGFic09mZnNldCAlIDYwO1xuICBpZiAobWludXRlcyA9PT0gMCkge1xuICAgIHJldHVybiBzaWduICsgU3RyaW5nKGhvdXJzKTtcbiAgfVxuICB2YXIgZGVsaW1pdGVyID0gZGlydHlEZWxpbWl0ZXIgfHwgJyc7XG4gIHJldHVybiBzaWduICsgU3RyaW5nKGhvdXJzKSArIGRlbGltaXRlciArIGFkZExlYWRpbmdaZXJvcyhtaW51dGVzLCAyKTtcbn1cbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lV2l0aE9wdGlvbmFsTWludXRlcyhvZmZzZXQsIGRpcnR5RGVsaW1pdGVyKSB7XG4gIGlmIChvZmZzZXQgJSA2MCA9PT0gMCkge1xuICAgIHZhciBzaWduID0gb2Zmc2V0ID4gMCA/ICctJyA6ICcrJztcbiAgICByZXR1cm4gc2lnbiArIGFkZExlYWRpbmdaZXJvcyhNYXRoLmFicyhvZmZzZXQpIC8gNjAsIDIpO1xuICB9XG4gIHJldHVybiBmb3JtYXRUaW1lem9uZShvZmZzZXQsIGRpcnR5RGVsaW1pdGVyKTtcbn1cbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lKG9mZnNldCwgZGlydHlEZWxpbWl0ZXIpIHtcbiAgdmFyIGRlbGltaXRlciA9IGRpcnR5RGVsaW1pdGVyIHx8ICcnO1xuICB2YXIgc2lnbiA9IG9mZnNldCA+IDAgPyAnLScgOiAnKyc7XG4gIHZhciBhYnNPZmZzZXQgPSBNYXRoLmFicyhvZmZzZXQpO1xuICB2YXIgaG91cnMgPSBhZGRMZWFkaW5nWmVyb3MoTWF0aC5mbG9vcihhYnNPZmZzZXQgLyA2MCksIDIpO1xuICB2YXIgbWludXRlcyA9IGFkZExlYWRpbmdaZXJvcyhhYnNPZmZzZXQgJSA2MCwgMik7XG4gIHJldHVybiBzaWduICsgaG91cnMgKyBkZWxpbWl0ZXIgKyBtaW51dGVzO1xufVxuZXhwb3J0IGRlZmF1bHQgZm9ybWF0dGVyczsiLCJpbXBvcnQgYWRkTGVhZGluZ1plcm9zIGZyb20gXCIuLi8uLi9hZGRMZWFkaW5nWmVyb3MvaW5kZXguanNcIjtcbi8qXG4gKiB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18XG4gKiB8ICBhICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBBKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBkICB8IERheSBvZiBtb250aCAgICAgICAgICAgICAgICAgICB8ICBEICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBoICB8IEhvdXIgWzEtMTJdICAgICAgICAgICAgICAgICAgICB8ICBIICB8IEhvdXIgWzAtMjNdICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBtICB8IE1pbnV0ZSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBNICB8IE1vbnRoICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBzICB8IFNlY29uZCAgICAgICAgICAgICAgICAgICAgICAgICB8ICBTICB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICB8XG4gKiB8ICB5ICB8IFllYXIgKGFicykgICAgICAgICAgICAgICAgICAgICB8ICBZICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKlxuICogTGV0dGVycyBtYXJrZWQgYnkgKiBhcmUgbm90IGltcGxlbWVudGVkIGJ1dCByZXNlcnZlZCBieSBVbmljb2RlIHN0YW5kYXJkLlxuICovXG52YXIgZm9ybWF0dGVycyA9IHtcbiAgLy8gWWVhclxuICB5OiBmdW5jdGlvbiB5KGRhdGUsIHRva2VuKSB7XG4gICAgLy8gRnJvbSBodHRwOi8vd3d3LnVuaWNvZGUub3JnL3JlcG9ydHMvdHIzNS90cjM1LTMxL3RyMzUtZGF0ZXMuaHRtbCNEYXRlX0Zvcm1hdF90b2tlbnNcbiAgICAvLyB8IFllYXIgICAgIHwgICAgIHkgfCB5eSB8ICAgeXl5IHwgIHl5eXkgfCB5eXl5eSB8XG4gICAgLy8gfC0tLS0tLS0tLS18LS0tLS0tLXwtLS0tfC0tLS0tLS18LS0tLS0tLXwtLS0tLS0tfFxuICAgIC8vIHwgQUQgMSAgICAgfCAgICAgMSB8IDAxIHwgICAwMDEgfCAgMDAwMSB8IDAwMDAxIHxcbiAgICAvLyB8IEFEIDEyICAgIHwgICAgMTIgfCAxMiB8ICAgMDEyIHwgIDAwMTIgfCAwMDAxMiB8XG4gICAgLy8gfCBBRCAxMjMgICB8ICAgMTIzIHwgMjMgfCAgIDEyMyB8ICAwMTIzIHwgMDAxMjMgfFxuICAgIC8vIHwgQUQgMTIzNCAgfCAgMTIzNCB8IDM0IHwgIDEyMzQgfCAgMTIzNCB8IDAxMjM0IHxcbiAgICAvLyB8IEFEIDEyMzQ1IHwgMTIzNDUgfCA0NSB8IDEyMzQ1IHwgMTIzNDUgfCAxMjM0NSB8XG5cbiAgICB2YXIgc2lnbmVkWWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTtcbiAgICAvLyBSZXR1cm5zIDEgZm9yIDEgQkMgKHdoaWNoIGlzIHllYXIgMCBpbiBKYXZhU2NyaXB0KVxuICAgIHZhciB5ZWFyID0gc2lnbmVkWWVhciA+IDAgPyBzaWduZWRZZWFyIDogMSAtIHNpZ25lZFllYXI7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0b2tlbiA9PT0gJ3l5JyA/IHllYXIgJSAxMDAgOiB5ZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBNb250aFxuICBNOiBmdW5jdGlvbiBNKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIG1vbnRoID0gZGF0ZS5nZXRVVENNb250aCgpO1xuICAgIHJldHVybiB0b2tlbiA9PT0gJ00nID8gU3RyaW5nKG1vbnRoICsgMSkgOiBhZGRMZWFkaW5nWmVyb3MobW9udGggKyAxLCAyKTtcbiAgfSxcbiAgLy8gRGF5IG9mIHRoZSBtb250aFxuICBkOiBmdW5jdGlvbiBkKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ0RhdGUoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gQU0gb3IgUE1cbiAgYTogZnVuY3Rpb24gYShkYXRlLCB0b2tlbikge1xuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXRlLmdldFVUQ0hvdXJzKCkgLyAxMiA+PSAxID8gJ3BtJyA6ICdhbSc7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnYSc6XG4gICAgICBjYXNlICdhYSc6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWUudG9VcHBlckNhc2UoKTtcbiAgICAgIGNhc2UgJ2FhYSc6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWU7XG4gICAgICBjYXNlICdhYWFhYSc6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWVbMF07XG4gICAgICBjYXNlICdhYWFhJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWUgPT09ICdhbScgPyAnYS5tLicgOiAncC5tLic7XG4gICAgfVxuICB9LFxuICAvLyBIb3VyIFsxLTEyXVxuICBoOiBmdW5jdGlvbiBoKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ0hvdXJzKCkgJSAxMiB8fCAxMiwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSG91ciBbMC0yM11cbiAgSDogZnVuY3Rpb24gSChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENIb3VycygpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBNaW51dGVcbiAgbTogZnVuY3Rpb24gbShkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENNaW51dGVzKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIFNlY29uZFxuICBzOiBmdW5jdGlvbiBzKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ1NlY29uZHMoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gRnJhY3Rpb24gb2Ygc2Vjb25kXG4gIFM6IGZ1bmN0aW9uIFMoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgbnVtYmVyT2ZEaWdpdHMgPSB0b2tlbi5sZW5ndGg7XG4gICAgdmFyIG1pbGxpc2Vjb25kcyA9IGRhdGUuZ2V0VVRDTWlsbGlzZWNvbmRzKCk7XG4gICAgdmFyIGZyYWN0aW9uYWxTZWNvbmRzID0gTWF0aC5mbG9vcihtaWxsaXNlY29uZHMgKiBNYXRoLnBvdygxMCwgbnVtYmVyT2ZEaWdpdHMgLSAzKSk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhmcmFjdGlvbmFsU2Vjb25kcywgdG9rZW4ubGVuZ3RoKTtcbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IGZvcm1hdHRlcnM7IiwidmFyIGRhdGVMb25nRm9ybWF0dGVyID0gZnVuY3Rpb24gZGF0ZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZykge1xuICBzd2l0Y2ggKHBhdHRlcm4pIHtcbiAgICBjYXNlICdQJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoe1xuICAgICAgICB3aWR0aDogJ3Nob3J0J1xuICAgICAgfSk7XG4gICAgY2FzZSAnUFAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7XG4gICAgICAgIHdpZHRoOiAnbWVkaXVtJ1xuICAgICAgfSk7XG4gICAgY2FzZSAnUFBQJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoe1xuICAgICAgICB3aWR0aDogJ2xvbmcnXG4gICAgICB9KTtcbiAgICBjYXNlICdQUFBQJzpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7XG4gICAgICAgIHdpZHRoOiAnZnVsbCdcbiAgICAgIH0pO1xuICB9XG59O1xudmFyIHRpbWVMb25nRm9ybWF0dGVyID0gZnVuY3Rpb24gdGltZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZykge1xuICBzd2l0Y2ggKHBhdHRlcm4pIHtcbiAgICBjYXNlICdwJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoe1xuICAgICAgICB3aWR0aDogJ3Nob3J0J1xuICAgICAgfSk7XG4gICAgY2FzZSAncHAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XG4gICAgICAgIHdpZHRoOiAnbWVkaXVtJ1xuICAgICAgfSk7XG4gICAgY2FzZSAncHBwJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoe1xuICAgICAgICB3aWR0aDogJ2xvbmcnXG4gICAgICB9KTtcbiAgICBjYXNlICdwcHBwJzpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XG4gICAgICAgIHdpZHRoOiAnZnVsbCdcbiAgICAgIH0pO1xuICB9XG59O1xudmFyIGRhdGVUaW1lTG9uZ0Zvcm1hdHRlciA9IGZ1bmN0aW9uIGRhdGVUaW1lTG9uZ0Zvcm1hdHRlcihwYXR0ZXJuLCBmb3JtYXRMb25nKSB7XG4gIHZhciBtYXRjaFJlc3VsdCA9IHBhdHRlcm4ubWF0Y2goLyhQKykocCspPy8pIHx8IFtdO1xuICB2YXIgZGF0ZVBhdHRlcm4gPSBtYXRjaFJlc3VsdFsxXTtcbiAgdmFyIHRpbWVQYXR0ZXJuID0gbWF0Y2hSZXN1bHRbMl07XG4gIGlmICghdGltZVBhdHRlcm4pIHtcbiAgICByZXR1cm4gZGF0ZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZyk7XG4gIH1cbiAgdmFyIGRhdGVUaW1lRm9ybWF0O1xuICBzd2l0Y2ggKGRhdGVQYXR0ZXJuKSB7XG4gICAgY2FzZSAnUCc6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoe1xuICAgICAgICB3aWR0aDogJ3Nob3J0J1xuICAgICAgfSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdQUCc6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoe1xuICAgICAgICB3aWR0aDogJ21lZGl1bSdcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnUFBQJzpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7XG4gICAgICAgIHdpZHRoOiAnbG9uZydcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnUFBQUCc6XG4gICAgZGVmYXVsdDpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7XG4gICAgICAgIHdpZHRoOiAnZnVsbCdcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG4gIH1cbiAgcmV0dXJuIGRhdGVUaW1lRm9ybWF0LnJlcGxhY2UoJ3t7ZGF0ZX19JywgZGF0ZUxvbmdGb3JtYXR0ZXIoZGF0ZVBhdHRlcm4sIGZvcm1hdExvbmcpKS5yZXBsYWNlKCd7e3RpbWV9fScsIHRpbWVMb25nRm9ybWF0dGVyKHRpbWVQYXR0ZXJuLCBmb3JtYXRMb25nKSk7XG59O1xudmFyIGxvbmdGb3JtYXR0ZXJzID0ge1xuICBwOiB0aW1lTG9uZ0Zvcm1hdHRlcixcbiAgUDogZGF0ZVRpbWVMb25nRm9ybWF0dGVyXG59O1xuZXhwb3J0IGRlZmF1bHQgbG9uZ0Zvcm1hdHRlcnM7IiwiLyoqXG4gKiBHb29nbGUgQ2hyb21lIGFzIG9mIDY3LjAuMzM5Ni44NyBpbnRyb2R1Y2VkIHRpbWV6b25lcyB3aXRoIG9mZnNldCB0aGF0IGluY2x1ZGVzIHNlY29uZHMuXG4gKiBUaGV5IHVzdWFsbHkgYXBwZWFyIGZvciBkYXRlcyB0aGF0IGRlbm90ZSB0aW1lIGJlZm9yZSB0aGUgdGltZXpvbmVzIHdlcmUgaW50cm9kdWNlZFxuICogKGUuZy4gZm9yICdFdXJvcGUvUHJhZ3VlJyB0aW1lem9uZSB0aGUgb2Zmc2V0IGlzIEdNVCswMDo1Nzo0NCBiZWZvcmUgMSBPY3RvYmVyIDE4OTFcbiAqIGFuZCBHTVQrMDE6MDA6MDAgYWZ0ZXIgdGhhdCBkYXRlKVxuICpcbiAqIERhdGUjZ2V0VGltZXpvbmVPZmZzZXQgcmV0dXJucyB0aGUgb2Zmc2V0IGluIG1pbnV0ZXMgYW5kIHdvdWxkIHJldHVybiA1NyBmb3IgdGhlIGV4YW1wbGUgYWJvdmUsXG4gKiB3aGljaCB3b3VsZCBsZWFkIHRvIGluY29ycmVjdCBjYWxjdWxhdGlvbnMuXG4gKlxuICogVGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoZSB0aW1lem9uZSBvZmZzZXQgaW4gbWlsbGlzZWNvbmRzIHRoYXQgdGFrZXMgc2Vjb25kcyBpbiBhY2NvdW50LlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKGRhdGUpIHtcbiAgdmFyIHV0Y0RhdGUgPSBuZXcgRGF0ZShEYXRlLlVUQyhkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSwgZGF0ZS5nZXREYXRlKCksIGRhdGUuZ2V0SG91cnMoKSwgZGF0ZS5nZXRNaW51dGVzKCksIGRhdGUuZ2V0U2Vjb25kcygpLCBkYXRlLmdldE1pbGxpc2Vjb25kcygpKSk7XG4gIHV0Y0RhdGUuc2V0VVRDRnVsbFllYXIoZGF0ZS5nZXRGdWxsWWVhcigpKTtcbiAgcmV0dXJuIGRhdGUuZ2V0VGltZSgpIC0gdXRjRGF0ZS5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbnZhciBNSUxMSVNFQ09ORFNfSU5fREFZID0gODY0MDAwMDA7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENEYXlPZlllYXIoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgdGltZXN0YW1wID0gZGF0ZS5nZXRUaW1lKCk7XG4gIGRhdGUuc2V0VVRDTW9udGgoMCwgMSk7XG4gIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mWWVhclRpbWVzdGFtcCA9IGRhdGUuZ2V0VGltZSgpO1xuICB2YXIgZGlmZmVyZW5jZSA9IHRpbWVzdGFtcCAtIHN0YXJ0T2ZZZWFyVGltZXN0YW1wO1xuICByZXR1cm4gTWF0aC5mbG9vcihkaWZmZXJlbmNlIC8gTUlMTElTRUNPTkRTX0lOX0RBWSkgKyAxO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ0lTT1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENJU09XZWVrL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENJU09XZWVrWWVhcihkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciB5ZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhciA9IG5ldyBEYXRlKDApO1xuICBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIgKyAxLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhci5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZOZXh0WWVhciA9IHN0YXJ0T2ZVVENJU09XZWVrKGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhciA9IG5ldyBEYXRlKDApO1xuICBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZlRoaXNZZWFyID0gc3RhcnRPZlVUQ0lTT1dlZWsoZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhcik7XG4gIGlmIChkYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mTmV4dFllYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXIgKyAxO1xuICB9IGVsc2UgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZUaGlzWWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhcjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geWVhciAtIDE7XG4gIH1cbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDSVNPV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDSVNPV2Vla1llYXIgZnJvbSBcIi4uL3N0YXJ0T2ZVVENJU09XZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG52YXIgTUlMTElTRUNPTkRTX0lOX1dFRUsgPSA2MDQ4MDAwMDA7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENJU09XZWVrKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRpZmYgPSBzdGFydE9mVVRDSVNPV2VlayhkYXRlKS5nZXRUaW1lKCkgLSBzdGFydE9mVVRDSVNPV2Vla1llYXIoZGF0ZSkuZ2V0VGltZSgpO1xuXG4gIC8vIFJvdW5kIHRoZSBudW1iZXIgb2YgZGF5cyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyXG4gIC8vIGJlY2F1c2UgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaW4gYSB3ZWVrIGlzIG5vdCBjb25zdGFudFxuICAvLyAoZS5nLiBpdCdzIGRpZmZlcmVudCBpbiB0aGUgd2VlayBvZiB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpXG4gIHJldHVybiBNYXRoLnJvdW5kKGRpZmYgLyBNSUxMSVNFQ09ORFNfSU5fV0VFSykgKyAxO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4uL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENXZWVrWWVhcihkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgdmFyIF9yZWYsIF9yZWYyLCBfcmVmMywgX29wdGlvbnMkZmlyc3RXZWVrQ29uLCBfb3B0aW9ucyRsb2NhbGUsIF9vcHRpb25zJGxvY2FsZSRvcHRpbywgX2RlZmF1bHRPcHRpb25zJGxvY2FsLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyO1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIHllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7XG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIHZhciBmaXJzdFdlZWtDb250YWluc0RhdGUgPSB0b0ludGVnZXIoKF9yZWYgPSAoX3JlZjIgPSAoX3JlZjMgPSAoX29wdGlvbnMkZmlyc3RXZWVrQ29uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX29wdGlvbnMkZmlyc3RXZWVrQ29uICE9PSB2b2lkIDAgPyBfb3B0aW9ucyRmaXJzdFdlZWtDb24gOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlJG9wdGlvID0gX29wdGlvbnMkbG9jYWxlLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlJG9wdGlvLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjMgIT09IHZvaWQgMCA/IF9yZWYzIDogZGVmYXVsdE9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmMiAhPT0gdm9pZCAwID8gX3JlZjIgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsID0gZGVmYXVsdE9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsLm9wdGlvbnMpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmICE9PSB2b2lkIDAgPyBfcmVmIDogMSk7XG5cbiAgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAxIGFuZCA3IF9hbmRfIGlzIG5vdCBOYU5cbiAgaWYgKCEoZmlyc3RXZWVrQ29udGFpbnNEYXRlID49IDEgJiYgZmlyc3RXZWVrQ29udGFpbnNEYXRlIDw9IDcpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2ZpcnN0V2Vla0NvbnRhaW5zRGF0ZSBtdXN0IGJlIGJldHdlZW4gMSBhbmQgNyBpbmNsdXNpdmVseScpO1xuICB9XG4gIHZhciBmaXJzdFdlZWtPZk5leHRZZWFyID0gbmV3IERhdGUoMCk7XG4gIGZpcnN0V2Vla09mTmV4dFllYXIuc2V0VVRDRnVsbFllYXIoeWVhciArIDEsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vla09mTmV4dFllYXIuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mTmV4dFllYXIgPSBzdGFydE9mVVRDV2VlayhmaXJzdFdlZWtPZk5leHRZZWFyLCBvcHRpb25zKTtcbiAgdmFyIGZpcnN0V2Vla09mVGhpc1llYXIgPSBuZXcgRGF0ZSgwKTtcbiAgZmlyc3RXZWVrT2ZUaGlzWWVhci5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWtPZlRoaXNZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZlRoaXNZZWFyID0gc3RhcnRPZlVUQ1dlZWsoZmlyc3RXZWVrT2ZUaGlzWWVhciwgb3B0aW9ucyk7XG4gIGlmIChkYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mTmV4dFllYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXIgKyAxO1xuICB9IGVsc2UgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZUaGlzWWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhcjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geWVhciAtIDE7XG4gIH1cbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2Vla1llYXIgZnJvbSBcIi4uL3N0YXJ0T2ZVVENXZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG52YXIgTUlMTElTRUNPTkRTX0lOX1dFRUsgPSA2MDQ4MDAwMDA7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENXZWVrKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRpZmYgPSBzdGFydE9mVVRDV2VlayhkYXRlLCBvcHRpb25zKS5nZXRUaW1lKCkgLSBzdGFydE9mVVRDV2Vla1llYXIoZGF0ZSwgb3B0aW9ucykuZ2V0VGltZSgpO1xuXG4gIC8vIFJvdW5kIHRoZSBudW1iZXIgb2YgZGF5cyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyXG4gIC8vIGJlY2F1c2UgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaW4gYSB3ZWVrIGlzIG5vdCBjb25zdGFudFxuICAvLyAoZS5nLiBpdCdzIGRpZmZlcmVudCBpbiB0aGUgd2VlayBvZiB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpXG4gIHJldHVybiBNYXRoLnJvdW5kKGRpZmYgLyBNSUxMSVNFQ09ORFNfSU5fV0VFSykgKyAxO1xufSIsInZhciBwcm90ZWN0ZWREYXlPZlllYXJUb2tlbnMgPSBbJ0QnLCAnREQnXTtcbnZhciBwcm90ZWN0ZWRXZWVrWWVhclRva2VucyA9IFsnWVknLCAnWVlZWSddO1xuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW4odG9rZW4pIHtcbiAgcmV0dXJuIHByb3RlY3RlZERheU9mWWVhclRva2Vucy5pbmRleE9mKHRva2VuKSAhPT0gLTE7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuKHRva2VuKSB7XG4gIHJldHVybiBwcm90ZWN0ZWRXZWVrWWVhclRva2Vucy5pbmRleE9mKHRva2VuKSAhPT0gLTE7XG59XG5leHBvcnQgZnVuY3Rpb24gdGhyb3dQcm90ZWN0ZWRFcnJvcih0b2tlbiwgZm9ybWF0LCBpbnB1dCkge1xuICBpZiAodG9rZW4gPT09ICdZWVlZJykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVXNlIGB5eXl5YCBpbnN0ZWFkIG9mIGBZWVlZYCAoaW4gYFwiLmNvbmNhdChmb3JtYXQsIFwiYCkgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdG8gdGhlIGlucHV0IGBcIikuY29uY2F0KGlucHV0LCBcImA7IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFwiKSk7XG4gIH0gZWxzZSBpZiAodG9rZW4gPT09ICdZWScpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlVzZSBgeXlgIGluc3RlYWQgb2YgYFlZYCAoaW4gYFwiLmNvbmNhdChmb3JtYXQsIFwiYCkgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdG8gdGhlIGlucHV0IGBcIikuY29uY2F0KGlucHV0LCBcImA7IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFwiKSk7XG4gIH0gZWxzZSBpZiAodG9rZW4gPT09ICdEJykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVXNlIGBkYCBpbnN0ZWFkIG9mIGBEYCAoaW4gYFwiLmNvbmNhdChmb3JtYXQsIFwiYCkgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdG8gdGhlIGlucHV0IGBcIikuY29uY2F0KGlucHV0LCBcImA7IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFwiKSk7XG4gIH0gZWxzZSBpZiAodG9rZW4gPT09ICdERCcpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlVzZSBgZGRgIGluc3RlYWQgb2YgYEREYCAoaW4gYFwiLmNvbmNhdChmb3JtYXQsIFwiYCkgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdG8gdGhlIGlucHV0IGBcIikuY29uY2F0KGlucHV0LCBcImA7IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFwiKSk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJpbXBvcnQgZ2V0VVRDSVNPV2Vla1llYXIgZnJvbSBcIi4uL2dldFVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ0lTT1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENJU09XZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZVVENJU09XZWVrWWVhcihkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciB5ZWFyID0gZ2V0VVRDSVNPV2Vla1llYXIoZGlydHlEYXRlKTtcbiAgdmFyIGZvdXJ0aE9mSmFudWFyeSA9IG5ldyBEYXRlKDApO1xuICBmb3VydGhPZkphbnVhcnkuc2V0VVRDRnVsbFllYXIoeWVhciwgMCwgNCk7XG4gIGZvdXJ0aE9mSmFudWFyeS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIGRhdGUgPSBzdGFydE9mVVRDSVNPV2Vlayhmb3VydGhPZkphbnVhcnkpO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ0lTT1dlZWsoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgd2Vla1N0YXJ0c09uID0gMTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRheSA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gIHZhciBkaWZmID0gKGRheSA8IHdlZWtTdGFydHNPbiA/IDcgOiAwKSArIGRheSAtIHdlZWtTdGFydHNPbjtcbiAgZGF0ZS5zZXRVVENEYXRlKGRhdGUuZ2V0VVRDRGF0ZSgpIC0gZGlmZik7XG4gIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCBnZXRVVENXZWVrWWVhciBmcm9tIFwiLi4vZ2V0VVRDV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuLi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ1dlZWtZZWFyKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICB2YXIgX3JlZiwgX3JlZjIsIF9yZWYzLCBfb3B0aW9ucyRmaXJzdFdlZWtDb24sIF9vcHRpb25zJGxvY2FsZSwgX29wdGlvbnMkbG9jYWxlJG9wdGlvLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDI7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICB2YXIgZmlyc3RXZWVrQ29udGFpbnNEYXRlID0gdG9JbnRlZ2VyKChfcmVmID0gKF9yZWYyID0gKF9yZWYzID0gKF9vcHRpb25zJGZpcnN0V2Vla0NvbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9vcHRpb25zJGZpcnN0V2Vla0NvbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkZmlyc3RXZWVrQ29uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9IF9vcHRpb25zJGxvY2FsZS5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZSRvcHRpby5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYzICE9PSB2b2lkIDAgPyBfcmVmMyA6IGRlZmF1bHRPcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjIgIT09IHZvaWQgMCA/IF9yZWYyIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IDEpO1xuICB2YXIgeWVhciA9IGdldFVUQ1dlZWtZZWFyKGRpcnR5RGF0ZSwgb3B0aW9ucyk7XG4gIHZhciBmaXJzdFdlZWsgPSBuZXcgRGF0ZSgwKTtcbiAgZmlyc3RXZWVrLnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vlay5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIGRhdGUgPSBzdGFydE9mVVRDV2VlayhmaXJzdFdlZWssIG9wdGlvbnMpO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuLi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ1dlZWsoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHZhciBfcmVmLCBfcmVmMiwgX3JlZjMsIF9vcHRpb25zJHdlZWtTdGFydHNPbiwgX29wdGlvbnMkbG9jYWxlLCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8sIF9kZWZhdWx0T3B0aW9ucyRsb2NhbCwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMjtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIHZhciB3ZWVrU3RhcnRzT24gPSB0b0ludGVnZXIoKF9yZWYgPSAoX3JlZjIgPSAoX3JlZjMgPSAoX29wdGlvbnMkd2Vla1N0YXJ0c09uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX29wdGlvbnMkd2Vla1N0YXJ0c09uICE9PSB2b2lkIDAgPyBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlJG9wdGlvID0gX29wdGlvbnMkbG9jYWxlLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlJG9wdGlvLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjMgIT09IHZvaWQgMCA/IF9yZWYzIDogZGVmYXVsdE9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmMiAhPT0gdm9pZCAwID8gX3JlZjIgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsID0gZGVmYXVsdE9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsLm9wdGlvbnMpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmICE9PSB2b2lkIDAgPyBfcmVmIDogMCk7XG5cbiAgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAwIGFuZCA2IF9hbmRfIGlzIG5vdCBOYU5cbiAgaWYgKCEod2Vla1N0YXJ0c09uID49IDAgJiYgd2Vla1N0YXJ0c09uIDw9IDYpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3dlZWtTdGFydHNPbiBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNiBpbmNsdXNpdmVseScpO1xuICB9XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkYXkgPSBkYXRlLmdldFVUQ0RheSgpO1xuICB2YXIgZGlmZiA9IChkYXkgPCB3ZWVrU3RhcnRzT24gPyA3IDogMCkgKyBkYXkgLSB3ZWVrU3RhcnRzT247XG4gIGRhdGUuc2V0VVRDRGF0ZShkYXRlLmdldFVUQ0RhdGUoKSAtIGRpZmYpO1xuICBkYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0ludGVnZXIoZGlydHlOdW1iZXIpIHtcbiAgaWYgKGRpcnR5TnVtYmVyID09PSBudWxsIHx8IGRpcnR5TnVtYmVyID09PSB0cnVlIHx8IGRpcnR5TnVtYmVyID09PSBmYWxzZSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG4gIGlmIChpc05hTihudW1iZXIpKSB7XG4gICAgcmV0dXJuIG51bWJlcjtcbiAgfVxuICByZXR1cm4gbnVtYmVyIDwgMCA/IE1hdGguY2VpbChudW1iZXIpIDogTWF0aC5mbG9vcihudW1iZXIpO1xufSIsImltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGFkZE1pbGxpc2Vjb25kc1xuICogQGNhdGVnb3J5IE1pbGxpc2Vjb25kIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IC0gdGhlIGFtb3VudCBvZiBtaWxsaXNlY29uZHMgdG8gYmUgYWRkZWQuIFBvc2l0aXZlIGRlY2ltYWxzIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5mbG9vcmAsIGRlY2ltYWxzIGxlc3MgdGhhbiB6ZXJvIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5jZWlsYC5cbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgbWlsbGlzZWNvbmRzIGFkZGVkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFkZCA3NTAgbWlsbGlzZWNvbmRzIHRvIDEwIEp1bHkgMjAxNCAxMjo0NTozMC4wMDA6XG4gKiBjb25zdCByZXN1bHQgPSBhZGRNaWxsaXNlY29uZHMobmV3IERhdGUoMjAxNCwgNiwgMTAsIDEyLCA0NSwgMzAsIDApLCA3NTApXG4gKiAvLz0+IFRodSBKdWwgMTAgMjAxNCAxMjo0NTozMC43NTBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkTWlsbGlzZWNvbmRzKGRpcnR5RGF0ZSwgZGlydHlBbW91bnQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciB0aW1lc3RhbXAgPSB0b0RhdGUoZGlydHlEYXRlKS5nZXRUaW1lKCk7XG4gIHZhciBhbW91bnQgPSB0b0ludGVnZXIoZGlydHlBbW91bnQpO1xuICByZXR1cm4gbmV3IERhdGUodGltZXN0YW1wICsgYW1vdW50KTtcbn0iLCIvKipcbiAqIERheXMgaW4gMSB3ZWVrLlxuICpcbiAqIEBuYW1lIGRheXNJbldlZWtcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgZGF5c0luV2VlayA9IDc7XG5cbi8qKlxuICogRGF5cyBpbiAxIHllYXJcbiAqIE9uZSB5ZWFycyBlcXVhbHMgMzY1LjI0MjUgZGF5cyBhY2NvcmRpbmcgdG8gdGhlIGZvcm11bGE6XG4gKlxuICogPiBMZWFwIHllYXIgb2NjdXJlcyBldmVyeSA0IHllYXJzLCBleGNlcHQgZm9yIHllYXJzIHRoYXQgYXJlIGRpdmlzYWJsZSBieSAxMDAgYW5kIG5vdCBkaXZpc2FibGUgYnkgNDAwLlxuICogPiAxIG1lYW4geWVhciA9ICgzNjUrMS80LTEvMTAwKzEvNDAwKSBkYXlzID0gMzY1LjI0MjUgZGF5c1xuICpcbiAqIEBuYW1lIGRheXNJblllYXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgZGF5c0luWWVhciA9IDM2NS4yNDI1O1xuXG4vKipcbiAqIE1heGltdW0gYWxsb3dlZCB0aW1lLlxuICpcbiAqIEBuYW1lIG1heFRpbWVcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgbWF4VGltZSA9IE1hdGgucG93KDEwLCA4KSAqIDI0ICogNjAgKiA2MCAqIDEwMDA7XG5cbi8qKlxuICogTWlsbGlzZWNvbmRzIGluIDEgbWludXRlXG4gKlxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5NaW51dGVcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgbWlsbGlzZWNvbmRzSW5NaW51dGUgPSA2MDAwMDtcblxuLyoqXG4gKiBNaWxsaXNlY29uZHMgaW4gMSBob3VyXG4gKlxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5Ib3VyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIG1pbGxpc2Vjb25kc0luSG91ciA9IDM2MDAwMDA7XG5cbi8qKlxuICogTWlsbGlzZWNvbmRzIGluIDEgc2Vjb25kXG4gKlxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5TZWNvbmRcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgbWlsbGlzZWNvbmRzSW5TZWNvbmQgPSAxMDAwO1xuXG4vKipcbiAqIE1pbmltdW0gYWxsb3dlZCB0aW1lLlxuICpcbiAqIEBuYW1lIG1pblRpbWVcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgbWluVGltZSA9IC1tYXhUaW1lO1xuXG4vKipcbiAqIE1pbnV0ZXMgaW4gMSBob3VyXG4gKlxuICogQG5hbWUgbWludXRlc0luSG91clxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBtaW51dGVzSW5Ib3VyID0gNjA7XG5cbi8qKlxuICogTW9udGhzIGluIDEgcXVhcnRlclxuICpcbiAqIEBuYW1lIG1vbnRoc0luUXVhcnRlclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBtb250aHNJblF1YXJ0ZXIgPSAzO1xuXG4vKipcbiAqIE1vbnRocyBpbiAxIHllYXJcbiAqXG4gKiBAbmFtZSBtb250aHNJblllYXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgbW9udGhzSW5ZZWFyID0gMTI7XG5cbi8qKlxuICogUXVhcnRlcnMgaW4gMSB5ZWFyXG4gKlxuICogQG5hbWUgcXVhcnRlcnNJblllYXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgcXVhcnRlcnNJblllYXIgPSA0O1xuXG4vKipcbiAqIFNlY29uZHMgaW4gMSBob3VyXG4gKlxuICogQG5hbWUgc2Vjb25kc0luSG91clxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBzZWNvbmRzSW5Ib3VyID0gMzYwMDtcblxuLyoqXG4gKiBTZWNvbmRzIGluIDEgbWludXRlXG4gKlxuICogQG5hbWUgc2Vjb25kc0luTWludXRlXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIHNlY29uZHNJbk1pbnV0ZSA9IDYwO1xuXG4vKipcbiAqIFNlY29uZHMgaW4gMSBkYXlcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5EYXlcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgc2Vjb25kc0luRGF5ID0gc2Vjb25kc0luSG91ciAqIDI0O1xuXG4vKipcbiAqIFNlY29uZHMgaW4gMSB3ZWVrXG4gKlxuICogQG5hbWUgc2Vjb25kc0luV2Vla1xuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBzZWNvbmRzSW5XZWVrID0gc2Vjb25kc0luRGF5ICogNztcblxuLyoqXG4gKiBTZWNvbmRzIGluIDEgeWVhclxuICpcbiAqIEBuYW1lIHNlY29uZHNJblllYXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgc2Vjb25kc0luWWVhciA9IHNlY29uZHNJbkRheSAqIGRheXNJblllYXI7XG5cbi8qKlxuICogU2Vjb25kcyBpbiAxIG1vbnRoXG4gKlxuICogQG5hbWUgc2Vjb25kc0luTW9udGhcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgc2Vjb25kc0luTW9udGggPSBzZWNvbmRzSW5ZZWFyIC8gMTI7XG5cbi8qKlxuICogU2Vjb25kcyBpbiAxIHF1YXJ0ZXJcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5RdWFydGVyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIHNlY29uZHNJblF1YXJ0ZXIgPSBzZWNvbmRzSW5Nb250aCAqIDM7IiwiaW1wb3J0IGlzVmFsaWQgZnJvbSBcIi4uL2lzVmFsaWQvaW5kZXguanNcIjtcbmltcG9ydCBzdWJNaWxsaXNlY29uZHMgZnJvbSBcIi4uL3N1Yk1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgZm9ybWF0dGVycyBmcm9tIFwiLi4vX2xpYi9mb3JtYXQvZm9ybWF0dGVycy9pbmRleC5qc1wiO1xuaW1wb3J0IGxvbmdGb3JtYXR0ZXJzIGZyb20gXCIuLi9fbGliL2Zvcm1hdC9sb25nRm9ybWF0dGVycy9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMgZnJvbSBcIi4uL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHsgaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbiwgaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuLCB0aHJvd1Byb3RlY3RlZEVycm9yIH0gZnJvbSBcIi4uL19saWIvcHJvdGVjdGVkVG9rZW5zL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4uL19saWIvZGVmYXVsdE9wdGlvbnMvaW5kZXguanNcIjtcbmltcG9ydCBkZWZhdWx0TG9jYWxlIGZyb20gXCIuLi9fbGliL2RlZmF1bHRMb2NhbGUvaW5kZXguanNcIjsgLy8gVGhpcyBSZWdFeHAgY29uc2lzdHMgb2YgdGhyZWUgcGFydHMgc2VwYXJhdGVkIGJ5IGB8YDpcbi8vIC0gW3lZUXFNTHdJZERlY2loSEtrbXNdbyBtYXRjaGVzIGFueSBhdmFpbGFibGUgb3JkaW5hbCBudW1iZXIgdG9rZW5cbi8vICAgKG9uZSBvZiB0aGUgY2VydGFpbiBsZXR0ZXJzIGZvbGxvd2VkIGJ5IGBvYClcbi8vIC0gKFxcdylcXDEqIG1hdGNoZXMgYW55IHNlcXVlbmNlcyBvZiB0aGUgc2FtZSBsZXR0ZXJcbi8vIC0gJycgbWF0Y2hlcyB0d28gcXVvdGUgY2hhcmFjdGVycyBpbiBhIHJvd1xuLy8gLSAnKCcnfFteJ10pKygnfCQpIG1hdGNoZXMgYW55dGhpbmcgc3Vycm91bmRlZCBieSB0d28gcXVvdGUgY2hhcmFjdGVycyAoJyksXG4vLyAgIGV4Y2VwdCBhIHNpbmdsZSBxdW90ZSBzeW1ib2wsIHdoaWNoIGVuZHMgdGhlIHNlcXVlbmNlLlxuLy8gICBUd28gcXVvdGUgY2hhcmFjdGVycyBkbyBub3QgZW5kIHRoZSBzZXF1ZW5jZS5cbi8vICAgSWYgdGhlcmUgaXMgbm8gbWF0Y2hpbmcgc2luZ2xlIHF1b3RlXG4vLyAgIHRoZW4gdGhlIHNlcXVlbmNlIHdpbGwgY29udGludWUgdW50aWwgdGhlIGVuZCBvZiB0aGUgc3RyaW5nLlxuLy8gLSAuIG1hdGNoZXMgYW55IHNpbmdsZSBjaGFyYWN0ZXIgdW5tYXRjaGVkIGJ5IHByZXZpb3VzIHBhcnRzIG9mIHRoZSBSZWdFeHBzXG52YXIgZm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCA9IC9beVlRcU1Md0lkRGVjaWhIS2ttc11vfChcXHcpXFwxKnwnJ3wnKCcnfFteJ10pKygnfCQpfC4vZztcblxuLy8gVGhpcyBSZWdFeHAgY2F0Y2hlcyBzeW1ib2xzIGVzY2FwZWQgYnkgcXVvdGVzLCBhbmQgYWxzb1xuLy8gc2VxdWVuY2VzIG9mIHN5bWJvbHMgUCwgcCwgYW5kIHRoZSBjb21iaW5hdGlvbnMgbGlrZSBgUFBQUFBQUHBwcHBwYFxudmFyIGxvbmdGb3JtYXR0aW5nVG9rZW5zUmVnRXhwID0gL1ArcCt8UCt8cCt8Jyd8JygnJ3xbXiddKSsoJ3wkKXwuL2c7XG52YXIgZXNjYXBlZFN0cmluZ1JlZ0V4cCA9IC9eJyhbXl0qPyknPyQvO1xudmFyIGRvdWJsZVF1b3RlUmVnRXhwID0gLycnL2c7XG52YXIgdW5lc2NhcGVkTGF0aW5DaGFyYWN0ZXJSZWdFeHAgPSAvW2EtekEtWl0vO1xuXG4vKipcbiAqIEBuYW1lIGZvcm1hdFxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBGb3JtYXQgdGhlIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIGZvcm1hdHRlZCBkYXRlIHN0cmluZyBpbiB0aGUgZ2l2ZW4gZm9ybWF0LiBUaGUgcmVzdWx0IG1heSB2YXJ5IGJ5IGxvY2FsZS5cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoZSBgZm9ybWF0YCB0b2tlbnMgZGlmZmVyIGZyb20gTW9tZW50LmpzIGFuZCBvdGhlciBsaWJyYXJpZXMuXG4gKiA+IFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICpcbiAqIFRoZSBjaGFyYWN0ZXJzIHdyYXBwZWQgYmV0d2VlbiB0d28gc2luZ2xlIHF1b3RlcyBjaGFyYWN0ZXJzICgnKSBhcmUgZXNjYXBlZC5cbiAqIFR3byBzaW5nbGUgcXVvdGVzIGluIGEgcm93LCB3aGV0aGVyIGluc2lkZSBvciBvdXRzaWRlIGEgcXVvdGVkIHNlcXVlbmNlLCByZXByZXNlbnQgYSAncmVhbCcgc2luZ2xlIHF1b3RlLlxuICogKHNlZSB0aGUgbGFzdCBleGFtcGxlKVxuICpcbiAqIEZvcm1hdCBvZiB0aGUgc3RyaW5nIGlzIGJhc2VkIG9uIFVuaWNvZGUgVGVjaG5pY2FsIFN0YW5kYXJkICMzNTpcbiAqIGh0dHBzOi8vd3d3LnVuaWNvZGUub3JnL3JlcG9ydHMvdHIzNS90cjM1LWRhdGVzLmh0bWwjRGF0ZV9GaWVsZF9TeW1ib2xfVGFibGVcbiAqIHdpdGggYSBmZXcgYWRkaXRpb25zIChzZWUgbm90ZSA3IGJlbG93IHRoZSB0YWJsZSkuXG4gKlxuICogQWNjZXB0ZWQgcGF0dGVybnM6XG4gKiB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQYXR0ZXJuIHwgUmVzdWx0IGV4YW1wbGVzICAgICAgICAgICAgICAgICAgIHwgTm90ZXMgfFxuICogfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLXxcbiAqIHwgRXJhICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEcuLkdHRyAgfCBBRCwgQkMgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBHR0dHICAgIHwgQW5ubyBEb21pbmksIEJlZm9yZSBDaHJpc3QgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgR0dHR0cgICB8IEEsIEIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgQ2FsZW5kYXIgeWVhciAgICAgICAgICAgICAgICAgICB8IHkgICAgICAgfCA0NCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5byAgICAgIHwgNDR0aCwgMXN0LCAwdGgsIDE3dGggICAgICAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXkgICAgICB8IDQ0LCAwMSwgMDAsIDE3ICAgICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5eSAgICAgfCAwNDQsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eXl5ICAgIHwgMDA0NCwgMDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXl5eXkgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSAgIHxcbiAqIHwgTG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhciAgICAgICB8IFkgICAgICAgfCA0NCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZbyAgICAgIHwgNDR0aCwgMXN0LCAxOTAwdGgsIDIwMTd0aCAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVkgICAgICB8IDQ0LCAwMSwgMDAsIDE3ICAgICAgICAgICAgICAgICAgICB8IDUsOCAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZWSAgICAgfCAwNDQsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWVlZICAgIHwgMDA0NCwgMDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgIHwgNSw4ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVlZWVkgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSAgIHxcbiAqIHwgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgICB8IFIgICAgICAgfCAtNDMsIDAsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUiAgICAgIHwgLTQzLCAwMCwgMDEsIDE5MDAsIDIwMTcgICAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlJSICAgICB8IC0wNDMsIDAwMCwgMDAxLCAxOTAwLCAyMDE3ICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSUlIgICAgfCAtMDA0MywgMDAwMCwgMDAwMSwgMTkwMCwgMjAxNyAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUlJSUiAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1LDcgfFxuICogfCBFeHRlbmRlZCB5ZWFyICAgICAgICAgICAgICAgICAgIHwgdSAgICAgICB8IC00MywgMCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1ICAgICAgfCAtNDMsIDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dXUgICAgIHwgLTA0MywgMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXV1dSAgICB8IC0wMDQzLCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1dXV1ICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUgICB8XG4gKiB8IFF1YXJ0ZXIgKGZvcm1hdHRpbmcpICAgICAgICAgICAgfCBRICAgICAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUW8gICAgICB8IDFzdCwgMm5kLCAzcmQsIDR0aCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRICAgICAgfCAwMSwgMDIsIDAzLCAwNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUVEgICAgIHwgUTEsIFEyLCBRMywgUTQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVFRUSAgICB8IDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRUVFRICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCA0ICAgICB8XG4gKiB8IFF1YXJ0ZXIgKHN0YW5kLWFsb25lKSAgICAgICAgICAgfCBxICAgICAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcW8gICAgICB8IDFzdCwgMm5kLCAzcmQsIDR0aCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxICAgICAgfCAwMSwgMDIsIDAzLCAwNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcXEgICAgIHwgUTEsIFEyLCBRMywgUTQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXFxcSAgICB8IDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxcXFxICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCA0ICAgICB8XG4gKiB8IE1vbnRoIChmb3JtYXR0aW5nKSAgICAgICAgICAgICAgfCBNICAgICAgIHwgMSwgMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTW8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDEydGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NICAgICAgfCAwMSwgMDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTU0gICAgIHwgSmFuLCBGZWIsIC4uLiwgRGVjICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NTSAgICB8IEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NTU1NICAgfCBKLCBGLCAuLi4sIEQgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IE1vbnRoIChzdGFuZC1hbG9uZSkgICAgICAgICAgICAgfCBMICAgICAgIHwgMSwgMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDEydGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMICAgICAgfCAwMSwgMDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTEwgICAgIHwgSmFuLCBGZWIsIC4uLiwgRGVjICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTExMTCAgICB8IEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMTExMICAgfCBKLCBGLCAuLi4sIEQgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IExvY2FsIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgfCB3ICAgICAgIHwgMSwgMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgd28gICAgICB8IDFzdCwgMm5kLCAuLi4sIDUzdGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHd3ICAgICAgfCAwMSwgMDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IElTTyB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgICAgfCBJICAgICAgIHwgMSwgMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSW8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDUzdGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IElJICAgICAgfCAwMSwgMDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8IERheSBvZiBtb250aCAgICAgICAgICAgICAgICAgICAgfCBkICAgICAgIHwgMSwgMiwgLi4uLCAzMSAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDMxc3QgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGRkICAgICAgfCAwMSwgMDIsIC4uLiwgMzEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IERheSBvZiB5ZWFyICAgICAgICAgICAgICAgICAgICAgfCBEICAgICAgIHwgMSwgMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgICAgIHwgOSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDM2NXRoLCAzNjZ0aCAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEREICAgICAgfCAwMSwgMDIsIC4uLiwgMzY1LCAzNjYgICAgICAgICAgICAgfCA5ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEREQgICAgIHwgMDAxLCAwMDIsIC4uLiwgMzY1LCAzNjYgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRERERCAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMgICAgIHxcbiAqIHwgRGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICAgICAgICB8IEUuLkVFRSAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBFRUVFICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRUVFRUUgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEVFRUVFRSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCAgICAgICB8XG4gKiB8IElTTyBkYXkgb2Ygd2VlayAoZm9ybWF0dGluZykgICAgfCBpICAgICAgIHwgMSwgMiwgMywgLi4uLCA3ICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaW8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDd0aCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpICAgICAgfCAwMSwgMDIsIC4uLiwgMDcgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWkgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpaSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaWlpICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWlpaWkgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgNyAgICAgfFxuICogfCBMb2NhbCBkYXkgb2Ygd2VlayAoZm9ybWF0dGluZykgIHwgZSAgICAgICB8IDIsIDMsIDQsIC4uLiwgMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVvICAgICAgfCAybmQsIDNyZCwgLi4uLCAxc3QgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZSAgICAgIHwgMDIsIDAzLCAuLi4sIDAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZWUgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWVlZSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlZWVlICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8ICAgICAgIHxcbiAqIHwgTG9jYWwgZGF5IG9mIHdlZWsgKHN0YW5kLWFsb25lKSB8IGMgICAgICAgfCAyLCAzLCA0LCAuLi4sIDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjbyAgICAgIHwgMm5kLCAzcmQsIC4uLiwgMXN0ICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2MgICAgICB8IDAyLCAwMywgLi4uLCAwMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjYyAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2NjICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjY2MgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjY2NjYyAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCAgICAgICB8XG4gKiB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhLi5hYSAgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWFhICAgICB8IGFtLCBwbSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFhYWEgICAgfCBhLm0uLCBwLm0uICAgICAgICAgICAgICAgICAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYWFhYSAgIHwgYSwgcCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgIHwgYi4uYmIgICB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGJiYiAgICAgfCBhbSwgcG0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBiYmJiICAgIHwgYS5tLiwgcC5tLiwgbm9vbiwgbWlkbmlnaHQgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYmJiYmIgICB8IGEsIHAsIG4sIG1pICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgRmxleGlibGUgZGF5IHBlcmlvZCAgICAgICAgICAgICB8IEIuLkJCQiAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBCQkJCICAgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgQkJCQkIgICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgICB8IGggICAgICAgfCAxLCAyLCAuLi4sIDExLCAxMiAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBobyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTF0aCwgMTJ0aCAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaGggICAgICB8IDAxLCAwMiwgLi4uLCAxMSwgMTIgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgICB8IEggICAgICAgfCAwLCAxLCAyLCAuLi4sIDIzICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBIbyAgICAgIHwgMHRoLCAxc3QsIDJuZCwgLi4uLCAyM3JkICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSEggICAgICB8IDAwLCAwMSwgMDIsIC4uLiwgMjMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMC0xMV0gICAgICAgICAgICAgICAgICAgICB8IEsgICAgICAgfCAxLCAyLCAuLi4sIDExLCAwICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBLbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTF0aCwgMHRoICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgS0sgICAgICB8IDAxLCAwMiwgLi4uLCAxMSwgMDAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMS0yNF0gICAgICAgICAgICAgICAgICAgICB8IGsgICAgICAgfCAyNCwgMSwgMiwgLi4uLCAyMyAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBrbyAgICAgIHwgMjR0aCwgMXN0LCAybmQsIC4uLiwgMjNyZCAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwga2sgICAgICB8IDI0LCAwMSwgMDIsIC4uLiwgMjMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgICB8IG0gICAgICAgfCAwLCAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtbyAgICAgIHwgMHRoLCAxc3QsIC4uLiwgNTl0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbW0gICAgICB8IDAwLCAwMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgICB8IHMgICAgICAgfCAwLCAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBzbyAgICAgIHwgMHRoLCAxc3QsIC4uLiwgNTl0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgc3MgICAgICB8IDAwLCAwMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgICB8IFMgICAgICAgfCAwLCAxLCAuLi4sIDkgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTUyAgICAgIHwgMDAsIDAxLCAuLi4sIDk5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU1NTICAgICB8IDAwMCwgMDAxLCAuLi4sIDk5OSAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNTU1MgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzICAgICB8XG4gKiB8IFRpbWV6b25lIChJU08tODYwMSB3LyBaKSAgICAgICAgfCBYICAgICAgIHwgLTA4LCArMDUzMCwgWiAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFggICAgICB8IC0wODAwLCArMDUzMCwgWiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYWCAgICAgfCAtMDg6MDAsICswNTozMCwgWiAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWFhYICAgIHwgLTA4MDAsICswNTMwLCBaLCArMTIzNDU2ICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFhYWFggICB8IC0wODowMCwgKzA1OjMwLCBaLCArMTI6MzQ6NTYgICAgICB8ICAgICAgIHxcbiAqIHwgVGltZXpvbmUgKElTTy04NjAxIHcvbyBaKSAgICAgICB8IHggICAgICAgfCAtMDgsICswNTMwLCArMDAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eCAgICAgIHwgLTA4MDAsICswNTMwLCArMDAwMCAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHh4ICAgICB8IC0wODowMCwgKzA1OjMwLCArMDA6MDAgICAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4eHggICAgfCAtMDgwMCwgKzA1MzAsICswMDAwLCArMTIzNDU2ICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eHh4eCAgIHwgLTA4OjAwLCArMDU6MzAsICswMDowMCwgKzEyOjM0OjU2IHwgICAgICAgfFxuICogfCBUaW1lem9uZSAoR01UKSAgICAgICAgICAgICAgICAgIHwgTy4uLk9PTyB8IEdNVC04LCBHTVQrNTozMCwgR01UKzAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE9PT08gICAgfCBHTVQtMDg6MDAsIEdNVCswNTozMCwgR01UKzAwOjAwICAgfCAyICAgICB8XG4gKiB8IFRpbWV6b25lIChzcGVjaWZpYyBub24tbG9jYXQuKSAgfCB6Li4uenp6IHwgR01ULTgsIEdNVCs1OjMwLCBHTVQrMCAgICAgICAgICAgIHwgNiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgenp6eiAgICB8IEdNVC0wODowMCwgR01UKzA1OjMwLCBHTVQrMDA6MDAgICB8IDIsNiAgIHxcbiAqIHwgU2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgICAgICB8IHQgICAgICAgfCA1MTI5Njk1MjAgICAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB0dCAgICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw3ICAgfFxuICogfCBNaWxsaXNlY29uZHMgdGltZXN0YW1wICAgICAgICAgIHwgVCAgICAgICB8IDUxMjk2OTUyMDkwMCAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFRUICAgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDcgICB8XG4gKiB8IExvbmcgbG9jYWxpemVkIGRhdGUgICAgICAgICAgICAgfCBQICAgICAgIHwgMDQvMjkvMTQ1MyAgICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFAgICAgICB8IEFwciAyOSwgMTQ1MyAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUCAgICAgfCBBcHJpbCAyOXRoLCAxNDUzICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFBQICAgIHwgRnJpZGF5LCBBcHJpbCAyOXRoLCAxNDUzICAgICAgICAgIHwgMiw3ICAgfFxuICogfCBMb25nIGxvY2FsaXplZCB0aW1lICAgICAgICAgICAgIHwgcCAgICAgICB8IDEyOjAwIEFNICAgICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBwICAgICAgfCAxMjowMDowMCBBTSAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwcHAgICAgIHwgMTI6MDA6MDAgQU0gR01UKzIgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcHBwcCAgICB8IDEyOjAwOjAwIEFNIEdNVCswMjowMCAgICAgICAgICAgICB8IDIsNyAgIHxcbiAqIHwgQ29tYmluYXRpb24gb2YgZGF0ZSBhbmQgdGltZSAgICB8IFBwICAgICAgfCAwNC8yOS8xNDUzLCAxMjowMCBBTSAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUHBwICAgIHwgQXByIDI5LCAxNDUzLCAxMjowMDowMCBBTSAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQcHBwICB8IEFwcmlsIDI5dGgsIDE0NTMgYXQgLi4uICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUFBwcHBwfCBGcmlkYXksIEFwcmlsIDI5dGgsIDE0NTMgYXQgLi4uICAgfCAyLDcgICB8XG4gKiBOb3RlczpcbiAqIDEuIFwiRm9ybWF0dGluZ1wiIHVuaXRzIChlLmcuIGZvcm1hdHRpbmcgcXVhcnRlcikgaW4gdGhlIGRlZmF1bHQgZW4tVVMgbG9jYWxlXG4gKiAgICBhcmUgdGhlIHNhbWUgYXMgXCJzdGFuZC1hbG9uZVwiIHVuaXRzLCBidXQgYXJlIGRpZmZlcmVudCBpbiBzb21lIGxhbmd1YWdlcy5cbiAqICAgIFwiRm9ybWF0dGluZ1wiIHVuaXRzIGFyZSBkZWNsaW5lZCBhY2NvcmRpbmcgdG8gdGhlIHJ1bGVzIG9mIHRoZSBsYW5ndWFnZVxuICogICAgaW4gdGhlIGNvbnRleHQgb2YgYSBkYXRlLiBcIlN0YW5kLWFsb25lXCIgdW5pdHMgYXJlIGFsd2F5cyBub21pbmF0aXZlIHNpbmd1bGFyOlxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnZG8gTExMTCcsIHtsb2NhbGU6IGNzfSkgLy89PiAnNi4gbGlzdG9wYWQnYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnZG8gTU1NTScsIHtsb2NhbGU6IGNzfSkgLy89PiAnNi4gbGlzdG9wYWR1J2BcbiAqXG4gKiAyLiBBbnkgc2VxdWVuY2Ugb2YgdGhlIGlkZW50aWNhbCBsZXR0ZXJzIGlzIGEgcGF0dGVybiwgdW5sZXNzIGl0IGlzIGVzY2FwZWQgYnlcbiAqICAgIHRoZSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVycyAoc2VlIGJlbG93KS5cbiAqICAgIElmIHRoZSBzZXF1ZW5jZSBpcyBsb25nZXIgdGhhbiBsaXN0ZWQgaW4gdGFibGUgKGUuZy4gYEVFRUVFRUVFRUVFYClcbiAqICAgIHRoZSBvdXRwdXQgd2lsbCBiZSB0aGUgc2FtZSBhcyBkZWZhdWx0IHBhdHRlcm4gZm9yIHRoaXMgdW5pdCwgdXN1YWxseVxuICogICAgdGhlIGxvbmdlc3Qgb25lIChpbiBjYXNlIG9mIElTTyB3ZWVrZGF5cywgYEVFRUVgKS4gRGVmYXVsdCBwYXR0ZXJucyBmb3IgdW5pdHNcbiAqICAgIGFyZSBtYXJrZWQgd2l0aCBcIjJcIiBpbiB0aGUgbGFzdCBjb2x1bW4gb2YgdGhlIHRhYmxlLlxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NJykgLy89PiAnTm92J2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU0nKSAvLz0+ICdOb3ZlbWJlcidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NTScpIC8vPT4gJ04nYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTU1NJykgLy89PiAnTm92ZW1iZXInYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTU1NTScpIC8vPT4gJ05vdmVtYmVyJ2BcbiAqXG4gKiAzLiBTb21lIHBhdHRlcm5zIGNvdWxkIGJlIHVubGltaXRlZCBsZW5ndGggKHN1Y2ggYXMgYHl5eXl5eXl5YCkuXG4gKiAgICBUaGUgb3V0cHV0IHdpbGwgYmUgcGFkZGVkIHdpdGggemVyb3MgdG8gbWF0Y2ggdGhlIGxlbmd0aCBvZiB0aGUgcGF0dGVybi5cbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ3l5eXl5eXl5JykgLy89PiAnMDAwMDIwMTcnYFxuICpcbiAqIDQuIGBRUVFRUWAgYW5kIGBxcXFxcWAgY291bGQgYmUgbm90IHN0cmljdGx5IG51bWVyaWNhbCBpbiBzb21lIGxvY2FsZXMuXG4gKiAgICBUaGVzZSB0b2tlbnMgcmVwcmVzZW50IHRoZSBzaG9ydGVzdCBmb3JtIG9mIHRoZSBxdWFydGVyLlxuICpcbiAqIDUuIFRoZSBtYWluIGRpZmZlcmVuY2UgYmV0d2VlbiBgeWAgYW5kIGB1YCBwYXR0ZXJucyBhcmUgQi5DLiB5ZWFyczpcbiAqXG4gKiAgICB8IFllYXIgfCBgeWAgfCBgdWAgfFxuICogICAgfC0tLS0tLXwtLS0tLXwtLS0tLXxcbiAqICAgIHwgQUMgMSB8ICAgMSB8ICAgMSB8XG4gKiAgICB8IEJDIDEgfCAgIDEgfCAgIDAgfFxuICogICAgfCBCQyAyIHwgICAyIHwgIC0xIHxcbiAqXG4gKiAgICBBbHNvIGB5eWAgYWx3YXlzIHJldHVybnMgdGhlIGxhc3QgdHdvIGRpZ2l0cyBvZiBhIHllYXIsXG4gKiAgICB3aGlsZSBgdXVgIHBhZHMgc2luZ2xlIGRpZ2l0IHllYXJzIHRvIDIgY2hhcmFjdGVycyBhbmQgcmV0dXJucyBvdGhlciB5ZWFycyB1bmNoYW5nZWQ6XG4gKlxuICogICAgfCBZZWFyIHwgYHl5YCB8IGB1dWAgfFxuICogICAgfC0tLS0tLXwtLS0tLS18LS0tLS0tfFxuICogICAgfCAxICAgIHwgICAwMSB8ICAgMDEgfFxuICogICAgfCAxNCAgIHwgICAxNCB8ICAgMTQgfFxuICogICAgfCAzNzYgIHwgICA3NiB8ICAzNzYgfFxuICogICAgfCAxNDUzIHwgICA1MyB8IDE0NTMgfFxuICpcbiAqICAgIFRoZSBzYW1lIGRpZmZlcmVuY2UgaXMgdHJ1ZSBmb3IgbG9jYWwgYW5kIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFycyAoYFlgIGFuZCBgUmApLFxuICogICAgZXhjZXB0IGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXJzIGFyZSBkZXBlbmRlbnQgb24gYG9wdGlvbnMud2Vla1N0YXJ0c09uYFxuICogICAgYW5kIGBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZWAgKGNvbXBhcmUgW2dldElTT1dlZWtZZWFyXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL2dldElTT1dlZWtZZWFyfVxuICogICAgYW5kIFtnZXRXZWVrWWVhcl17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9nZXRXZWVrWWVhcn0pLlxuICpcbiAqIDYuIFNwZWNpZmljIG5vbi1sb2NhdGlvbiB0aW1lem9uZXMgYXJlIGN1cnJlbnRseSB1bmF2YWlsYWJsZSBpbiBgZGF0ZS1mbnNgLFxuICogICAgc28gcmlnaHQgbm93IHRoZXNlIHRva2VucyBmYWxsIGJhY2sgdG8gR01UIHRpbWV6b25lcy5cbiAqXG4gKiA3LiBUaGVzZSBwYXR0ZXJucyBhcmUgbm90IGluIHRoZSBVbmljb2RlIFRlY2huaWNhbCBTdGFuZGFyZCAjMzU6XG4gKiAgICAtIGBpYDogSVNPIGRheSBvZiB3ZWVrXG4gKiAgICAtIGBJYDogSVNPIHdlZWsgb2YgeWVhclxuICogICAgLSBgUmA6IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gKiAgICAtIGB0YDogc2Vjb25kcyB0aW1lc3RhbXBcbiAqICAgIC0gYFRgOiBtaWxsaXNlY29uZHMgdGltZXN0YW1wXG4gKiAgICAtIGBvYDogb3JkaW5hbCBudW1iZXIgbW9kaWZpZXJcbiAqICAgIC0gYFBgOiBsb25nIGxvY2FsaXplZCBkYXRlXG4gKiAgICAtIGBwYDogbG9uZyBsb2NhbGl6ZWQgdGltZVxuICpcbiAqIDguIGBZWWAgYW5kIGBZWVlZYCB0b2tlbnMgcmVwcmVzZW50IHdlZWstbnVtYmVyaW5nIHllYXJzIGJ1dCB0aGV5IGFyZSBvZnRlbiBjb25mdXNlZCB3aXRoIHllYXJzLlxuICogICAgWW91IHNob3VsZCBlbmFibGUgYG9wdGlvbnMudXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zYCB0byB1c2UgdGhlbS4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKlxuICogOS4gYERgIGFuZCBgRERgIHRva2VucyByZXByZXNlbnQgZGF5cyBvZiB0aGUgeWVhciBidXQgdGhleSBhcmUgb2Z0ZW4gY29uZnVzZWQgd2l0aCBkYXlzIG9mIHRoZSBtb250aC5cbiAqICAgIFlvdSBzaG91bGQgZW5hYmxlIGBvcHRpb25zLnVzZUFkZGl0aW9uYWxEYXlPZlllYXJUb2tlbnNgIHRvIHVzZSB0aGVtLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBmb3JtYXQgLSB0aGUgc3RyaW5nIG9mIHRva2Vuc1xuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlPTFdIC0gdGhlIGRheSBvZiBKYW51YXJ5LCB3aGljaCBpc1xuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy51c2VBZGRpdGlvbmFsV2Vla1llYXJUb2tlbnM9ZmFsc2VdIC0gaWYgdHJ1ZSwgYWxsb3dzIHVzYWdlIG9mIHRoZSB3ZWVrLW51bWJlcmluZyB5ZWFyIHRva2VucyBgWVlgIGFuZCBgWVlZWWA7XG4gKiAgIHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zPWZhbHNlXSAtIGlmIHRydWUsIGFsbG93cyB1c2FnZSBvZiB0aGUgZGF5IG9mIHllYXIgdG9rZW5zIGBEYCBhbmQgYEREYDtcbiAqICAgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAcmV0dXJucyB7U3RyaW5nfSB0aGUgZm9ybWF0dGVkIGRhdGUgc3RyaW5nXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgZGF0ZWAgbXVzdCBub3QgYmUgSW52YWxpZCBEYXRlXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5sb2NhbGVgIG11c3QgY29udGFpbiBgbG9jYWxpemVgIHByb3BlcnR5XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5sb2NhbGVgIG11c3QgY29udGFpbiBgZm9ybWF0TG9uZ2AgcHJvcGVydHlcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZWAgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDdcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgeXl5eWAgaW5zdGVhZCBvZiBgWVlZWWAgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gdXNlIGB5eWAgaW5zdGVhZCBvZiBgWVlgIGZvciBmb3JtYXR0aW5nIHllYXJzIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgZGAgaW5zdGVhZCBvZiBgRGAgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gdXNlIGBkZGAgaW5zdGVhZCBvZiBgRERgIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGZvcm1hdCBzdHJpbmcgY29udGFpbnMgYW4gdW5lc2NhcGVkIGxhdGluIGFscGhhYmV0IGNoYXJhY3RlclxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBSZXByZXNlbnQgMTEgRmVicnVhcnkgMjAxNCBpbiBtaWRkbGUtZW5kaWFuIGZvcm1hdDpcbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCAxLCAxMSksICdNTS9kZC95eXl5JylcbiAqIC8vPT4gJzAyLzExLzIwMTQnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFJlcHJlc2VudCAyIEp1bHkgMjAxNCBpbiBFc3BlcmFudG86XG4gKiBpbXBvcnQgeyBlb0xvY2FsZSB9IGZyb20gJ2RhdGUtZm5zL2xvY2FsZS9lbydcbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCA2LCAyKSwgXCJkbyAnZGUnIE1NTU0geXl5eVwiLCB7XG4gKiAgIGxvY2FsZTogZW9Mb2NhbGVcbiAqIH0pXG4gKiAvLz0+ICcyLWEgZGUganVsaW8gMjAxNCdcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRXNjYXBlIHN0cmluZyBieSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVyczpcbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCA2LCAyLCAxNSksIFwiaCAnbycnY2xvY2snXCIpXG4gKiAvLz0+IFwiMyBvJ2Nsb2NrXCJcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb3JtYXQoZGlydHlEYXRlLCBkaXJ0eUZvcm1hdFN0ciwgb3B0aW9ucykge1xuICB2YXIgX3JlZiwgX29wdGlvbnMkbG9jYWxlLCBfcmVmMiwgX3JlZjMsIF9yZWY0LCBfb3B0aW9ucyRmaXJzdFdlZWtDb24sIF9vcHRpb25zJGxvY2FsZTIsIF9vcHRpb25zJGxvY2FsZTIkb3B0aSwgX2RlZmF1bHRPcHRpb25zJGxvY2FsLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLCBfcmVmNSwgX3JlZjYsIF9yZWY3LCBfb3B0aW9ucyR3ZWVrU3RhcnRzT24sIF9vcHRpb25zJGxvY2FsZTMsIF9vcHRpb25zJGxvY2FsZTMkb3B0aSwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMywgX2RlZmF1bHRPcHRpb25zJGxvY2FsNDtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBmb3JtYXRTdHIgPSBTdHJpbmcoZGlydHlGb3JtYXRTdHIpO1xuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICB2YXIgbG9jYWxlID0gKF9yZWYgPSAoX29wdGlvbnMkbG9jYWxlID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmxvY2FsZSkgIT09IG51bGwgJiYgX29wdGlvbnMkbG9jYWxlICE9PSB2b2lkIDAgPyBfb3B0aW9ucyRsb2NhbGUgOiBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpICE9PSBudWxsICYmIF9yZWYgIT09IHZvaWQgMCA/IF9yZWYgOiBkZWZhdWx0TG9jYWxlO1xuICB2YXIgZmlyc3RXZWVrQ29udGFpbnNEYXRlID0gdG9JbnRlZ2VyKChfcmVmMiA9IChfcmVmMyA9IChfcmVmNCA9IChfb3B0aW9ucyRmaXJzdFdlZWtDb24gPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyRmaXJzdFdlZWtDb24gIT09IHZvaWQgMCA/IF9vcHRpb25zJGZpcnN0V2Vla0NvbiA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZTIgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZTIkb3B0aSA9IF9vcHRpb25zJGxvY2FsZTIub3B0aW9ucykgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlMiRvcHRpID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3B0aW9ucyRsb2NhbGUyJG9wdGkuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmNCAhPT0gdm9pZCAwID8gX3JlZjQgOiBkZWZhdWx0T3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYzICE9PSB2b2lkIDAgPyBfcmVmMyA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPSBfZGVmYXVsdE9wdGlvbnMkbG9jYWwub3B0aW9ucykgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RlZmF1bHRPcHRpb25zJGxvY2FsMi5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYyICE9PSB2b2lkIDAgPyBfcmVmMiA6IDEpO1xuXG4gIC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMSBhbmQgNyBfYW5kXyBpcyBub3QgTmFOXG4gIGlmICghKGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA+PSAxICYmIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA8PSA3KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdmaXJzdFdlZWtDb250YWluc0RhdGUgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDcgaW5jbHVzaXZlbHknKTtcbiAgfVxuICB2YXIgd2Vla1N0YXJ0c09uID0gdG9JbnRlZ2VyKChfcmVmNSA9IChfcmVmNiA9IChfcmVmNyA9IChfb3B0aW9ucyR3ZWVrU3RhcnRzT24gPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gIT09IHZvaWQgMCA/IF9vcHRpb25zJHdlZWtTdGFydHNPbiA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZTMgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlMyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZTMkb3B0aSA9IF9vcHRpb25zJGxvY2FsZTMub3B0aW9ucykgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlMyRvcHRpID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3B0aW9ucyRsb2NhbGUzJG9wdGkud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmNyAhPT0gdm9pZCAwID8gX3JlZjcgOiBkZWZhdWx0T3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWY2ICE9PSB2b2lkIDAgPyBfcmVmNiA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwzID0gZGVmYXVsdE9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwzID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsNCA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDMub3B0aW9ucykgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsNCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RlZmF1bHRPcHRpb25zJGxvY2FsNC53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWY1ICE9PSB2b2lkIDAgPyBfcmVmNSA6IDApO1xuXG4gIC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMCBhbmQgNiBfYW5kXyBpcyBub3QgTmFOXG4gIGlmICghKHdlZWtTdGFydHNPbiA+PSAwICYmIHdlZWtTdGFydHNPbiA8PSA2KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd3ZWVrU3RhcnRzT24gbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDYgaW5jbHVzaXZlbHknKTtcbiAgfVxuICBpZiAoIWxvY2FsZS5sb2NhbGl6ZSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdsb2NhbGUgbXVzdCBjb250YWluIGxvY2FsaXplIHByb3BlcnR5Jyk7XG4gIH1cbiAgaWYgKCFsb2NhbGUuZm9ybWF0TG9uZykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdsb2NhbGUgbXVzdCBjb250YWluIGZvcm1hdExvbmcgcHJvcGVydHknKTtcbiAgfVxuICB2YXIgb3JpZ2luYWxEYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIGlmICghaXNWYWxpZChvcmlnaW5hbERhdGUpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0ludmFsaWQgdGltZSB2YWx1ZScpO1xuICB9XG5cbiAgLy8gQ29udmVydCB0aGUgZGF0ZSBpbiBzeXN0ZW0gdGltZXpvbmUgdG8gdGhlIHNhbWUgZGF0ZSBpbiBVVEMrMDA6MDAgdGltZXpvbmUuXG4gIC8vIFRoaXMgZW5zdXJlcyB0aGF0IHdoZW4gVVRDIGZ1bmN0aW9ucyB3aWxsIGJlIGltcGxlbWVudGVkLCBsb2NhbGVzIHdpbGwgYmUgY29tcGF0aWJsZSB3aXRoIHRoZW0uXG4gIC8vIFNlZSBhbiBpc3N1ZSBhYm91dCBVVEMgZnVuY3Rpb25zOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuICB2YXIgdGltZXpvbmVPZmZzZXQgPSBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKG9yaWdpbmFsRGF0ZSk7XG4gIHZhciB1dGNEYXRlID0gc3ViTWlsbGlzZWNvbmRzKG9yaWdpbmFsRGF0ZSwgdGltZXpvbmVPZmZzZXQpO1xuICB2YXIgZm9ybWF0dGVyT3B0aW9ucyA9IHtcbiAgICBmaXJzdFdlZWtDb250YWluc0RhdGU6IGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSxcbiAgICB3ZWVrU3RhcnRzT246IHdlZWtTdGFydHNPbixcbiAgICBsb2NhbGU6IGxvY2FsZSxcbiAgICBfb3JpZ2luYWxEYXRlOiBvcmlnaW5hbERhdGVcbiAgfTtcbiAgdmFyIHJlc3VsdCA9IGZvcm1hdFN0ci5tYXRjaChsb25nRm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCkubWFwKGZ1bmN0aW9uIChzdWJzdHJpbmcpIHtcbiAgICB2YXIgZmlyc3RDaGFyYWN0ZXIgPSBzdWJzdHJpbmdbMF07XG4gICAgaWYgKGZpcnN0Q2hhcmFjdGVyID09PSAncCcgfHwgZmlyc3RDaGFyYWN0ZXIgPT09ICdQJykge1xuICAgICAgdmFyIGxvbmdGb3JtYXR0ZXIgPSBsb25nRm9ybWF0dGVyc1tmaXJzdENoYXJhY3Rlcl07XG4gICAgICByZXR1cm4gbG9uZ0Zvcm1hdHRlcihzdWJzdHJpbmcsIGxvY2FsZS5mb3JtYXRMb25nKTtcbiAgICB9XG4gICAgcmV0dXJuIHN1YnN0cmluZztcbiAgfSkuam9pbignJykubWF0Y2goZm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCkubWFwKGZ1bmN0aW9uIChzdWJzdHJpbmcpIHtcbiAgICAvLyBSZXBsYWNlIHR3byBzaW5nbGUgcXVvdGUgY2hhcmFjdGVycyB3aXRoIG9uZSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVyXG4gICAgaWYgKHN1YnN0cmluZyA9PT0gXCInJ1wiKSB7XG4gICAgICByZXR1cm4gXCInXCI7XG4gICAgfVxuICAgIHZhciBmaXJzdENoYXJhY3RlciA9IHN1YnN0cmluZ1swXTtcbiAgICBpZiAoZmlyc3RDaGFyYWN0ZXIgPT09IFwiJ1wiKSB7XG4gICAgICByZXR1cm4gY2xlYW5Fc2NhcGVkU3RyaW5nKHN1YnN0cmluZyk7XG4gICAgfVxuICAgIHZhciBmb3JtYXR0ZXIgPSBmb3JtYXR0ZXJzW2ZpcnN0Q2hhcmFjdGVyXTtcbiAgICBpZiAoZm9ybWF0dGVyKSB7XG4gICAgICBpZiAoIShvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLnVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2VucykgJiYgaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuKHN1YnN0cmluZykpIHtcbiAgICAgICAgdGhyb3dQcm90ZWN0ZWRFcnJvcihzdWJzdHJpbmcsIGRpcnR5Rm9ybWF0U3RyLCBTdHJpbmcoZGlydHlEYXRlKSk7XG4gICAgICB9XG4gICAgICBpZiAoIShvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLnVzZUFkZGl0aW9uYWxEYXlPZlllYXJUb2tlbnMpICYmIGlzUHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW4oc3Vic3RyaW5nKSkge1xuICAgICAgICB0aHJvd1Byb3RlY3RlZEVycm9yKHN1YnN0cmluZywgZGlydHlGb3JtYXRTdHIsIFN0cmluZyhkaXJ0eURhdGUpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmb3JtYXR0ZXIodXRjRGF0ZSwgc3Vic3RyaW5nLCBsb2NhbGUubG9jYWxpemUsIGZvcm1hdHRlck9wdGlvbnMpO1xuICAgIH1cbiAgICBpZiAoZmlyc3RDaGFyYWN0ZXIubWF0Y2godW5lc2NhcGVkTGF0aW5DaGFyYWN0ZXJSZWdFeHApKSB7XG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignRm9ybWF0IHN0cmluZyBjb250YWlucyBhbiB1bmVzY2FwZWQgbGF0aW4gYWxwaGFiZXQgY2hhcmFjdGVyIGAnICsgZmlyc3RDaGFyYWN0ZXIgKyAnYCcpO1xuICAgIH1cbiAgICByZXR1cm4gc3Vic3RyaW5nO1xuICB9KS5qb2luKCcnKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIGNsZWFuRXNjYXBlZFN0cmluZyhpbnB1dCkge1xuICB2YXIgbWF0Y2hlZCA9IGlucHV0Lm1hdGNoKGVzY2FwZWRTdHJpbmdSZWdFeHApO1xuICBpZiAoIW1hdGNoZWQpIHtcbiAgICByZXR1cm4gaW5wdXQ7XG4gIH1cbiAgcmV0dXJuIG1hdGNoZWRbMV0ucmVwbGFjZShkb3VibGVRdW90ZVJlZ0V4cCwgXCInXCIpO1xufSIsImltcG9ydCBfdHlwZW9mIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2ZcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gdmFsdWUgYSBkYXRlP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLiBUaGUgZnVuY3Rpb24gd29ya3MgZm9yIGRhdGVzIHRyYW5zZmVycmVkIGFjcm9zcyBpZnJhbWVzLlxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgLSB0aGUgdmFsdWUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtib29sZWFufSB0cnVlIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyBhIGRhdGVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIGEgdmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZShuZXcgRGF0ZSgpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBhbiBpbnZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUobmV3IERhdGUoTmFOKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3Igc29tZSB2YWx1ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZSgnMjAxNC0wMi0zMScpXG4gKiAvLz0+IGZhbHNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBhbiBvYmplY3Q6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUoe30pXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzRGF0ZSh2YWx1ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgRGF0ZSB8fCBfdHlwZW9mKHZhbHVlKSA9PT0gJ29iamVjdCcgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNGdXR1cmVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgaW4gdGhlIGZ1dHVyZT9cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSBpbiB0aGUgZnV0dXJlP1xuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhpcyBmdW5jdGlvbiBpcyBub3QgcHJlc2VudCBpbiB0aGUgRlAgc3VibW9kdWxlIGFzXG4gKiA+IGl0IHVzZXMgYERhdGUubm93KClgIGludGVybmFsbHkgaGVuY2UgaW1wdXJlIGFuZCBjYW4ndCBiZSBzYWZlbHkgY3VycmllZC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyBpbiB0aGUgZnV0dXJlXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgNiBPY3RvYmVyIDIwMTQsIGlzIDMxIERlY2VtYmVyIDIwMTQgaW4gdGhlIGZ1dHVyZT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzRnV0dXJlKG5ldyBEYXRlKDIwMTQsIDExLCAzMSkpXG4gKiAvLz0+IHRydWVcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNGdXR1cmUoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gdG9EYXRlKGRpcnR5RGF0ZSkuZ2V0VGltZSgpID4gRGF0ZS5ub3coKTtcbn0iLCJpbXBvcnQgaXNEYXRlIGZyb20gXCIuLi9pc0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNWYWxpZFxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSB2YWxpZD9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybnMgZmFsc2UgaWYgYXJndW1lbnQgaXMgSW52YWxpZCBEYXRlIGFuZCB0cnVlIG90aGVyd2lzZS5cbiAqIEFyZ3VtZW50IGlzIGNvbnZlcnRlZCB0byBEYXRlIHVzaW5nIGB0b0RhdGVgLiBTZWUgW3RvRGF0ZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy90b0RhdGV9XG4gKiBJbnZhbGlkIERhdGUgaXMgYSBEYXRlLCB3aG9zZSB0aW1lIHZhbHVlIGlzIE5hTi5cbiAqXG4gKiBUaW1lIHZhbHVlIG9mIERhdGU6IGh0dHA6Ly9lczUuZ2l0aHViLmlvLyN4MTUuOS4xLjFcbiAqXG4gKiBAcGFyYW0geyp9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIHZhbGlkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSB2YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNWYWxpZChuZXcgRGF0ZSgyMDE0LCAxLCAzMSkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSB2YWx1ZSwgY29udmVydGFibGUgaW50byBhIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc1ZhbGlkKDEzOTM4MDQ4MDAwMDApXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSBpbnZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc1ZhbGlkKG5ldyBEYXRlKCcnKSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNWYWxpZChkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIGlmICghaXNEYXRlKGRpcnR5RGF0ZSkgJiYgdHlwZW9mIGRpcnR5RGF0ZSAhPT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgcmV0dXJuICFpc05hTihOdW1iZXIoZGF0ZSkpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkRm9ybWF0TG9uZ0ZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gICAgLy8gVE9ETzogUmVtb3ZlIFN0cmluZygpXG4gICAgdmFyIHdpZHRoID0gb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgIHZhciBmb3JtYXQgPSBhcmdzLmZvcm1hdHNbd2lkdGhdIHx8IGFyZ3MuZm9ybWF0c1thcmdzLmRlZmF1bHRXaWR0aF07XG4gICAgcmV0dXJuIGZvcm1hdDtcbiAgfTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZExvY2FsaXplRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKGRpcnR5SW5kZXgsIG9wdGlvbnMpIHtcbiAgICB2YXIgY29udGV4dCA9IG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMuY29udGV4dCA/IFN0cmluZyhvcHRpb25zLmNvbnRleHQpIDogJ3N0YW5kYWxvbmUnO1xuICAgIHZhciB2YWx1ZXNBcnJheTtcbiAgICBpZiAoY29udGV4dCA9PT0gJ2Zvcm1hdHRpbmcnICYmIGFyZ3MuZm9ybWF0dGluZ1ZhbHVlcykge1xuICAgICAgdmFyIGRlZmF1bHRXaWR0aCA9IGFyZ3MuZGVmYXVsdEZvcm1hdHRpbmdXaWR0aCB8fCBhcmdzLmRlZmF1bHRXaWR0aDtcbiAgICAgIHZhciB3aWR0aCA9IG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBkZWZhdWx0V2lkdGg7XG4gICAgICB2YWx1ZXNBcnJheSA9IGFyZ3MuZm9ybWF0dGluZ1ZhbHVlc1t3aWR0aF0gfHwgYXJncy5mb3JtYXR0aW5nVmFsdWVzW2RlZmF1bHRXaWR0aF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBfZGVmYXVsdFdpZHRoID0gYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgICB2YXIgX3dpZHRoID0gb3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgICAgdmFsdWVzQXJyYXkgPSBhcmdzLnZhbHVlc1tfd2lkdGhdIHx8IGFyZ3MudmFsdWVzW19kZWZhdWx0V2lkdGhdO1xuICAgIH1cbiAgICB2YXIgaW5kZXggPSBhcmdzLmFyZ3VtZW50Q2FsbGJhY2sgPyBhcmdzLmFyZ3VtZW50Q2FsbGJhY2soZGlydHlJbmRleCkgOiBkaXJ0eUluZGV4O1xuICAgIC8vIEB0cy1pZ25vcmU6IEZvciBzb21lIHJlYXNvbiBUeXBlU2NyaXB0IGp1c3QgZG9uJ3Qgd2FudCB0byBtYXRjaCBpdCwgbm8gbWF0dGVyIGhvdyBoYXJkIHdlIHRyeS4gSSBjaGFsbGVuZ2UgeW91IHRvIHRyeSB0byByZW1vdmUgaXQhXG4gICAgcmV0dXJuIHZhbHVlc0FycmF5W2luZGV4XTtcbiAgfTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZE1hdGNoRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKHN0cmluZykge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICB2YXIgd2lkdGggPSBvcHRpb25zLndpZHRoO1xuICAgIHZhciBtYXRjaFBhdHRlcm4gPSB3aWR0aCAmJiBhcmdzLm1hdGNoUGF0dGVybnNbd2lkdGhdIHx8IGFyZ3MubWF0Y2hQYXR0ZXJuc1thcmdzLmRlZmF1bHRNYXRjaFdpZHRoXTtcbiAgICB2YXIgbWF0Y2hSZXN1bHQgPSBzdHJpbmcubWF0Y2gobWF0Y2hQYXR0ZXJuKTtcbiAgICBpZiAoIW1hdGNoUmVzdWx0KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgdmFyIG1hdGNoZWRTdHJpbmcgPSBtYXRjaFJlc3VsdFswXTtcbiAgICB2YXIgcGFyc2VQYXR0ZXJucyA9IHdpZHRoICYmIGFyZ3MucGFyc2VQYXR0ZXJuc1t3aWR0aF0gfHwgYXJncy5wYXJzZVBhdHRlcm5zW2FyZ3MuZGVmYXVsdFBhcnNlV2lkdGhdO1xuICAgIHZhciBrZXkgPSBBcnJheS5pc0FycmF5KHBhcnNlUGF0dGVybnMpID8gZmluZEluZGV4KHBhcnNlUGF0dGVybnMsIGZ1bmN0aW9uIChwYXR0ZXJuKSB7XG4gICAgICByZXR1cm4gcGF0dGVybi50ZXN0KG1hdGNoZWRTdHJpbmcpO1xuICAgIH0pIDogZmluZEtleShwYXJzZVBhdHRlcm5zLCBmdW5jdGlvbiAocGF0dGVybikge1xuICAgICAgcmV0dXJuIHBhdHRlcm4udGVzdChtYXRjaGVkU3RyaW5nKTtcbiAgICB9KTtcbiAgICB2YXIgdmFsdWU7XG4gICAgdmFsdWUgPSBhcmdzLnZhbHVlQ2FsbGJhY2sgPyBhcmdzLnZhbHVlQ2FsbGJhY2soa2V5KSA6IGtleTtcbiAgICB2YWx1ZSA9IG9wdGlvbnMudmFsdWVDYWxsYmFjayA/IG9wdGlvbnMudmFsdWVDYWxsYmFjayh2YWx1ZSkgOiB2YWx1ZTtcbiAgICB2YXIgcmVzdCA9IHN0cmluZy5zbGljZShtYXRjaGVkU3RyaW5nLmxlbmd0aCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIHJlc3Q6IHJlc3RcbiAgICB9O1xuICB9O1xufVxuZnVuY3Rpb24gZmluZEtleShvYmplY3QsIHByZWRpY2F0ZSkge1xuICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgaWYgKG9iamVjdC5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIHByZWRpY2F0ZShvYmplY3Rba2V5XSkpIHtcbiAgICAgIHJldHVybiBrZXk7XG4gICAgfVxuICB9XG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5mdW5jdGlvbiBmaW5kSW5kZXgoYXJyYXksIHByZWRpY2F0ZSkge1xuICBmb3IgKHZhciBrZXkgPSAwOyBrZXkgPCBhcnJheS5sZW5ndGg7IGtleSsrKSB7XG4gICAgaWYgKHByZWRpY2F0ZShhcnJheVtrZXldKSkge1xuICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZE1hdGNoUGF0dGVybkZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgdmFyIG1hdGNoUmVzdWx0ID0gc3RyaW5nLm1hdGNoKGFyZ3MubWF0Y2hQYXR0ZXJuKTtcbiAgICBpZiAoIW1hdGNoUmVzdWx0KSByZXR1cm4gbnVsbDtcbiAgICB2YXIgbWF0Y2hlZFN0cmluZyA9IG1hdGNoUmVzdWx0WzBdO1xuICAgIHZhciBwYXJzZVJlc3VsdCA9IHN0cmluZy5tYXRjaChhcmdzLnBhcnNlUGF0dGVybik7XG4gICAgaWYgKCFwYXJzZVJlc3VsdCkgcmV0dXJuIG51bGw7XG4gICAgdmFyIHZhbHVlID0gYXJncy52YWx1ZUNhbGxiYWNrID8gYXJncy52YWx1ZUNhbGxiYWNrKHBhcnNlUmVzdWx0WzBdKSA6IHBhcnNlUmVzdWx0WzBdO1xuICAgIHZhbHVlID0gb3B0aW9ucy52YWx1ZUNhbGxiYWNrID8gb3B0aW9ucy52YWx1ZUNhbGxiYWNrKHZhbHVlKSA6IHZhbHVlO1xuICAgIHZhciByZXN0ID0gc3RyaW5nLnNsaWNlKG1hdGNoZWRTdHJpbmcubGVuZ3RoKTtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgcmVzdDogcmVzdFxuICAgIH07XG4gIH07XG59IiwidmFyIGZvcm1hdERpc3RhbmNlTG9jYWxlID0ge1xuICBsZXNzVGhhblhTZWNvbmRzOiB7XG4gICAgb25lOiAnbGVzcyB0aGFuIGEgc2Vjb25kJyxcbiAgICBvdGhlcjogJ2xlc3MgdGhhbiB7e2NvdW50fX0gc2Vjb25kcydcbiAgfSxcbiAgeFNlY29uZHM6IHtcbiAgICBvbmU6ICcxIHNlY29uZCcsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gc2Vjb25kcydcbiAgfSxcbiAgaGFsZkFNaW51dGU6ICdoYWxmIGEgbWludXRlJyxcbiAgbGVzc1RoYW5YTWludXRlczoge1xuICAgIG9uZTogJ2xlc3MgdGhhbiBhIG1pbnV0ZScsXG4gICAgb3RoZXI6ICdsZXNzIHRoYW4ge3tjb3VudH19IG1pbnV0ZXMnXG4gIH0sXG4gIHhNaW51dGVzOiB7XG4gICAgb25lOiAnMSBtaW51dGUnLFxuICAgIG90aGVyOiAne3tjb3VudH19IG1pbnV0ZXMnXG4gIH0sXG4gIGFib3V0WEhvdXJzOiB7XG4gICAgb25lOiAnYWJvdXQgMSBob3VyJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSBob3VycydcbiAgfSxcbiAgeEhvdXJzOiB7XG4gICAgb25lOiAnMSBob3VyJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBob3VycydcbiAgfSxcbiAgeERheXM6IHtcbiAgICBvbmU6ICcxIGRheScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gZGF5cydcbiAgfSxcbiAgYWJvdXRYV2Vla3M6IHtcbiAgICBvbmU6ICdhYm91dCAxIHdlZWsnLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IHdlZWtzJ1xuICB9LFxuICB4V2Vla3M6IHtcbiAgICBvbmU6ICcxIHdlZWsnLFxuICAgIG90aGVyOiAne3tjb3VudH19IHdlZWtzJ1xuICB9LFxuICBhYm91dFhNb250aHM6IHtcbiAgICBvbmU6ICdhYm91dCAxIG1vbnRoJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSBtb250aHMnXG4gIH0sXG4gIHhNb250aHM6IHtcbiAgICBvbmU6ICcxIG1vbnRoJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBtb250aHMnXG4gIH0sXG4gIGFib3V0WFllYXJzOiB7XG4gICAgb25lOiAnYWJvdXQgMSB5ZWFyJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSB5ZWFycydcbiAgfSxcbiAgeFllYXJzOiB7XG4gICAgb25lOiAnMSB5ZWFyJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSB5ZWFycydcbiAgfSxcbiAgb3ZlclhZZWFyczoge1xuICAgIG9uZTogJ292ZXIgMSB5ZWFyJyxcbiAgICBvdGhlcjogJ292ZXIge3tjb3VudH19IHllYXJzJ1xuICB9LFxuICBhbG1vc3RYWWVhcnM6IHtcbiAgICBvbmU6ICdhbG1vc3QgMSB5ZWFyJyxcbiAgICBvdGhlcjogJ2FsbW9zdCB7e2NvdW50fX0geWVhcnMnXG4gIH1cbn07XG52YXIgZm9ybWF0RGlzdGFuY2UgPSBmdW5jdGlvbiBmb3JtYXREaXN0YW5jZSh0b2tlbiwgY291bnQsIG9wdGlvbnMpIHtcbiAgdmFyIHJlc3VsdDtcbiAgdmFyIHRva2VuVmFsdWUgPSBmb3JtYXREaXN0YW5jZUxvY2FsZVt0b2tlbl07XG4gIGlmICh0eXBlb2YgdG9rZW5WYWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlO1xuICB9IGVsc2UgaWYgKGNvdW50ID09PSAxKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vbmU7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vdGhlci5yZXBsYWNlKCd7e2NvdW50fX0nLCBjb3VudC50b1N0cmluZygpKTtcbiAgfVxuICBpZiAob3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy5hZGRTdWZmaXgpIHtcbiAgICBpZiAob3B0aW9ucy5jb21wYXJpc29uICYmIG9wdGlvbnMuY29tcGFyaXNvbiA+IDApIHtcbiAgICAgIHJldHVybiAnaW4gJyArIHJlc3VsdDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHJlc3VsdCArICcgYWdvJztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5leHBvcnQgZGVmYXVsdCBmb3JtYXREaXN0YW5jZTsiLCJpbXBvcnQgYnVpbGRGb3JtYXRMb25nRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRGb3JtYXRMb25nRm4vaW5kZXguanNcIjtcbnZhciBkYXRlRm9ybWF0cyA9IHtcbiAgZnVsbDogJ0VFRUUsIE1NTU0gZG8sIHknLFxuICBsb25nOiAnTU1NTSBkbywgeScsXG4gIG1lZGl1bTogJ01NTSBkLCB5JyxcbiAgc2hvcnQ6ICdNTS9kZC95eXl5J1xufTtcbnZhciB0aW1lRm9ybWF0cyA9IHtcbiAgZnVsbDogJ2g6bW06c3MgYSB6enp6JyxcbiAgbG9uZzogJ2g6bW06c3MgYSB6JyxcbiAgbWVkaXVtOiAnaDptbTpzcyBhJyxcbiAgc2hvcnQ6ICdoOm1tIGEnXG59O1xudmFyIGRhdGVUaW1lRm9ybWF0cyA9IHtcbiAgZnVsbDogXCJ7e2RhdGV9fSAnYXQnIHt7dGltZX19XCIsXG4gIGxvbmc6IFwie3tkYXRlfX0gJ2F0JyB7e3RpbWV9fVwiLFxuICBtZWRpdW06ICd7e2RhdGV9fSwge3t0aW1lfX0nLFxuICBzaG9ydDogJ3t7ZGF0ZX19LCB7e3RpbWV9fSdcbn07XG52YXIgZm9ybWF0TG9uZyA9IHtcbiAgZGF0ZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IGRhdGVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXG4gIH0pLFxuICB0aW1lOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogdGltZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSksXG4gIGRhdGVUaW1lOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogZGF0ZVRpbWVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXG4gIH0pXG59O1xuZXhwb3J0IGRlZmF1bHQgZm9ybWF0TG9uZzsiLCJ2YXIgZm9ybWF0UmVsYXRpdmVMb2NhbGUgPSB7XG4gIGxhc3RXZWVrOiBcIidsYXN0JyBlZWVlICdhdCcgcFwiLFxuICB5ZXN0ZXJkYXk6IFwiJ3llc3RlcmRheSBhdCcgcFwiLFxuICB0b2RheTogXCIndG9kYXkgYXQnIHBcIixcbiAgdG9tb3Jyb3c6IFwiJ3RvbW9ycm93IGF0JyBwXCIsXG4gIG5leHRXZWVrOiBcImVlZWUgJ2F0JyBwXCIsXG4gIG90aGVyOiAnUCdcbn07XG52YXIgZm9ybWF0UmVsYXRpdmUgPSBmdW5jdGlvbiBmb3JtYXRSZWxhdGl2ZSh0b2tlbiwgX2RhdGUsIF9iYXNlRGF0ZSwgX29wdGlvbnMpIHtcbiAgcmV0dXJuIGZvcm1hdFJlbGF0aXZlTG9jYWxlW3Rva2VuXTtcbn07XG5leHBvcnQgZGVmYXVsdCBmb3JtYXRSZWxhdGl2ZTsiLCJpbXBvcnQgYnVpbGRMb2NhbGl6ZUZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkTG9jYWxpemVGbi9pbmRleC5qc1wiO1xudmFyIGVyYVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ0InLCAnQSddLFxuICBhYmJyZXZpYXRlZDogWydCQycsICdBRCddLFxuICB3aWRlOiBbJ0JlZm9yZSBDaHJpc3QnLCAnQW5ubyBEb21pbmknXVxufTtcbnZhciBxdWFydGVyVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnMScsICcyJywgJzMnLCAnNCddLFxuICBhYmJyZXZpYXRlZDogWydRMScsICdRMicsICdRMycsICdRNCddLFxuICB3aWRlOiBbJzFzdCBxdWFydGVyJywgJzJuZCBxdWFydGVyJywgJzNyZCBxdWFydGVyJywgJzR0aCBxdWFydGVyJ11cbn07XG5cbi8vIE5vdGU6IGluIEVuZ2xpc2gsIHRoZSBuYW1lcyBvZiBkYXlzIG9mIHRoZSB3ZWVrIGFuZCBtb250aHMgYXJlIGNhcGl0YWxpemVkLlxuLy8gSWYgeW91IGFyZSBtYWtpbmcgYSBuZXcgbG9jYWxlIGJhc2VkIG9uIHRoaXMgb25lLCBjaGVjayBpZiB0aGUgc2FtZSBpcyB0cnVlIGZvciB0aGUgbGFuZ3VhZ2UgeW91J3JlIHdvcmtpbmcgb24uXG4vLyBHZW5lcmFsbHksIGZvcm1hdHRlZCBkYXRlcyBzaG91bGQgbG9vayBsaWtlIHRoZXkgYXJlIGluIHRoZSBtaWRkbGUgb2YgYSBzZW50ZW5jZSxcbi8vIGUuZy4gaW4gU3BhbmlzaCBsYW5ndWFnZSB0aGUgd2Vla2RheXMgYW5kIG1vbnRocyBzaG91bGQgYmUgaW4gdGhlIGxvd2VyY2FzZS5cbnZhciBtb250aFZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ0onLCAnRicsICdNJywgJ0EnLCAnTScsICdKJywgJ0onLCAnQScsICdTJywgJ08nLCAnTicsICdEJ10sXG4gIGFiYnJldmlhdGVkOiBbJ0phbicsICdGZWInLCAnTWFyJywgJ0FwcicsICdNYXknLCAnSnVuJywgJ0p1bCcsICdBdWcnLCAnU2VwJywgJ09jdCcsICdOb3YnLCAnRGVjJ10sXG4gIHdpZGU6IFsnSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknLCAnSnVuZScsICdKdWx5JywgJ0F1Z3VzdCcsICdTZXB0ZW1iZXInLCAnT2N0b2JlcicsICdOb3ZlbWJlcicsICdEZWNlbWJlciddXG59O1xudmFyIGRheVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ1MnLCAnTScsICdUJywgJ1cnLCAnVCcsICdGJywgJ1MnXSxcbiAgc2hvcnQ6IFsnU3UnLCAnTW8nLCAnVHUnLCAnV2UnLCAnVGgnLCAnRnInLCAnU2EnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnU3VuJywgJ01vbicsICdUdWUnLCAnV2VkJywgJ1RodScsICdGcmknLCAnU2F0J10sXG4gIHdpZGU6IFsnU3VuZGF5JywgJ01vbmRheScsICdUdWVzZGF5JywgJ1dlZG5lc2RheScsICdUaHVyc2RheScsICdGcmlkYXknLCAnU2F0dXJkYXknXVxufTtcbnZhciBkYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiAnYScsXG4gICAgcG06ICdwJyxcbiAgICBtaWRuaWdodDogJ21pJyxcbiAgICBub29uOiAnbicsXG4gICAgbW9ybmluZzogJ21vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnbmlnaHQnXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06ICdBTScsXG4gICAgcG06ICdQTScsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgICBuaWdodDogJ25pZ2h0J1xuICB9LFxuICB3aWRlOiB7XG4gICAgYW06ICdhLm0uJyxcbiAgICBwbTogJ3AubS4nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnZXZlbmluZycsXG4gICAgbmlnaHQ6ICduaWdodCdcbiAgfVxufTtcbnZhciBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogJ2EnLFxuICAgIHBtOiAncCcsXG4gICAgbWlkbmlnaHQ6ICdtaScsXG4gICAgbm9vbjogJ24nLFxuICAgIG1vcm5pbmc6ICdpbiB0aGUgbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnaW4gdGhlIGFmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2luIHRoZSBldmVuaW5nJyxcbiAgICBuaWdodDogJ2F0IG5pZ2h0J1xuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiAnQU0nLFxuICAgIHBtOiAnUE0nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnaW4gdGhlIG1vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2luIHRoZSBhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdpbiB0aGUgZXZlbmluZycsXG4gICAgbmlnaHQ6ICdhdCBuaWdodCdcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiAnYS5tLicsXG4gICAgcG06ICdwLm0uJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ2luIHRoZSBtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdpbiB0aGUgYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnaW4gdGhlIGV2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnYXQgbmlnaHQnXG4gIH1cbn07XG52YXIgb3JkaW5hbE51bWJlciA9IGZ1bmN0aW9uIG9yZGluYWxOdW1iZXIoZGlydHlOdW1iZXIsIF9vcHRpb25zKSB7XG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuXG4gIC8vIElmIG9yZGluYWwgbnVtYmVycyBkZXBlbmQgb24gY29udGV4dCwgZm9yIGV4YW1wbGUsXG4gIC8vIGlmIHRoZXkgYXJlIGRpZmZlcmVudCBmb3IgZGlmZmVyZW50IGdyYW1tYXRpY2FsIGdlbmRlcnMsXG4gIC8vIHVzZSBgb3B0aW9ucy51bml0YC5cbiAgLy9cbiAgLy8gYHVuaXRgIGNhbiBiZSAneWVhcicsICdxdWFydGVyJywgJ21vbnRoJywgJ3dlZWsnLCAnZGF0ZScsICdkYXlPZlllYXInLFxuICAvLyAnZGF5JywgJ2hvdXInLCAnbWludXRlJywgJ3NlY29uZCcuXG5cbiAgdmFyIHJlbTEwMCA9IG51bWJlciAlIDEwMDtcbiAgaWYgKHJlbTEwMCA+IDIwIHx8IHJlbTEwMCA8IDEwKSB7XG4gICAgc3dpdGNoIChyZW0xMDAgJSAxMCkge1xuICAgICAgY2FzZSAxOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ3N0JztcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgcmV0dXJuIG51bWJlciArICduZCc7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAncmQnO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbnVtYmVyICsgJ3RoJztcbn07XG52YXIgbG9jYWxpemUgPSB7XG4gIG9yZGluYWxOdW1iZXI6IG9yZGluYWxOdW1iZXIsXG4gIGVyYTogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGVyYVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgcXVhcnRlcjogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IHF1YXJ0ZXJWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZScsXG4gICAgYXJndW1lbnRDYWxsYmFjazogZnVuY3Rpb24gYXJndW1lbnRDYWxsYmFjayhxdWFydGVyKSB7XG4gICAgICByZXR1cm4gcXVhcnRlciAtIDE7XG4gICAgfVxuICB9KSxcbiAgbW9udGg6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBtb250aFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5OiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZGF5VmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBkYXlQZXJpb2Q6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBkYXlQZXJpb2RWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZScsXG4gICAgZm9ybWF0dGluZ1ZhbHVlczogZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0Rm9ybWF0dGluZ1dpZHRoOiAnd2lkZSdcbiAgfSlcbn07XG5leHBvcnQgZGVmYXVsdCBsb2NhbGl6ZTsiLCJpbXBvcnQgYnVpbGRNYXRjaEZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkTWF0Y2hGbi9pbmRleC5qc1wiO1xuaW1wb3J0IGJ1aWxkTWF0Y2hQYXR0ZXJuRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRNYXRjaFBhdHRlcm5Gbi9pbmRleC5qc1wiO1xudmFyIG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXihcXGQrKSh0aHxzdHxuZHxyZCk/L2k7XG52YXIgcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybiA9IC9cXGQrL2k7XG52YXIgbWF0Y2hFcmFQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXihifGEpL2ksXG4gIGFiYnJldmlhdGVkOiAvXihiXFwuP1xccz9jXFwuP3xiXFwuP1xccz9jXFwuP1xccz9lXFwuP3xhXFwuP1xccz9kXFwuP3xjXFwuP1xccz9lXFwuPykvaSxcbiAgd2lkZTogL14oYmVmb3JlIGNocmlzdHxiZWZvcmUgY29tbW9uIGVyYXxhbm5vIGRvbWluaXxjb21tb24gZXJhKS9pXG59O1xudmFyIHBhcnNlRXJhUGF0dGVybnMgPSB7XG4gIGFueTogWy9eYi9pLCAvXihhfGMpL2ldXG59O1xudmFyIG1hdGNoUXVhcnRlclBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eWzEyMzRdL2ksXG4gIGFiYnJldmlhdGVkOiAvXnFbMTIzNF0vaSxcbiAgd2lkZTogL15bMTIzNF0odGh8c3R8bmR8cmQpPyBxdWFydGVyL2lcbn07XG52YXIgcGFyc2VRdWFydGVyUGF0dGVybnMgPSB7XG4gIGFueTogWy8xL2ksIC8yL2ksIC8zL2ksIC80L2ldXG59O1xudmFyIG1hdGNoTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXltqZm1hc29uZF0vaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKGphbnxmZWJ8bWFyfGFwcnxtYXl8anVufGp1bHxhdWd8c2VwfG9jdHxub3Z8ZGVjKS9pLFxuICB3aWRlOiAvXihqYW51YXJ5fGZlYnJ1YXJ5fG1hcmNofGFwcmlsfG1heXxqdW5lfGp1bHl8YXVndXN0fHNlcHRlbWJlcnxvY3RvYmVyfG5vdmVtYmVyfGRlY2VtYmVyKS9pXG59O1xudmFyIHBhcnNlTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbL15qL2ksIC9eZi9pLCAvXm0vaSwgL15hL2ksIC9ebS9pLCAvXmovaSwgL15qL2ksIC9eYS9pLCAvXnMvaSwgL15vL2ksIC9ebi9pLCAvXmQvaV0sXG4gIGFueTogWy9eamEvaSwgL15mL2ksIC9ebWFyL2ksIC9eYXAvaSwgL15tYXkvaSwgL15qdW4vaSwgL15qdWwvaSwgL15hdS9pLCAvXnMvaSwgL15vL2ksIC9ebi9pLCAvXmQvaV1cbn07XG52YXIgbWF0Y2hEYXlQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXltzbXR3Zl0vaSxcbiAgc2hvcnQ6IC9eKHN1fG1vfHR1fHdlfHRofGZyfHNhKS9pLFxuICBhYmJyZXZpYXRlZDogL14oc3VufG1vbnx0dWV8d2VkfHRodXxmcml8c2F0KS9pLFxuICB3aWRlOiAvXihzdW5kYXl8bW9uZGF5fHR1ZXNkYXl8d2VkbmVzZGF5fHRodXJzZGF5fGZyaWRheXxzYXR1cmRheSkvaVxufTtcbnZhciBwYXJzZURheVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IFsvXnMvaSwgL15tL2ksIC9edC9pLCAvXncvaSwgL150L2ksIC9eZi9pLCAvXnMvaV0sXG4gIGFueTogWy9ec3UvaSwgL15tL2ksIC9edHUvaSwgL153L2ksIC9edGgvaSwgL15mL2ksIC9ec2EvaV1cbn07XG52YXIgbWF0Y2hEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXihhfHB8bWl8bnwoaW4gdGhlfGF0KSAobW9ybmluZ3xhZnRlcm5vb258ZXZlbmluZ3xuaWdodCkpL2ksXG4gIGFueTogL14oW2FwXVxcLj9cXHM/bVxcLj98bWlkbmlnaHR8bm9vbnwoaW4gdGhlfGF0KSAobW9ybmluZ3xhZnRlcm5vb258ZXZlbmluZ3xuaWdodCkpL2lcbn07XG52YXIgcGFyc2VEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgYW55OiB7XG4gICAgYW06IC9eYS9pLFxuICAgIHBtOiAvXnAvaSxcbiAgICBtaWRuaWdodDogL15taS9pLFxuICAgIG5vb246IC9ebm8vaSxcbiAgICBtb3JuaW5nOiAvbW9ybmluZy9pLFxuICAgIGFmdGVybm9vbjogL2FmdGVybm9vbi9pLFxuICAgIGV2ZW5pbmc6IC9ldmVuaW5nL2ksXG4gICAgbmlnaHQ6IC9uaWdodC9pXG4gIH1cbn07XG52YXIgbWF0Y2ggPSB7XG4gIG9yZGluYWxOdW1iZXI6IGJ1aWxkTWF0Y2hQYXR0ZXJuRm4oe1xuICAgIG1hdGNoUGF0dGVybjogbWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybixcbiAgICBwYXJzZVBhdHRlcm46IHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4sXG4gICAgdmFsdWVDYWxsYmFjazogZnVuY3Rpb24gdmFsdWVDYWxsYmFjayh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHBhcnNlSW50KHZhbHVlLCAxMCk7XG4gICAgfVxuICB9KSxcbiAgZXJhOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRXJhUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZUVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgcXVhcnRlcjogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55JyxcbiAgICB2YWx1ZUNhbGxiYWNrOiBmdW5jdGlvbiB2YWx1ZUNhbGxiYWNrKGluZGV4KSB7XG4gICAgICByZXR1cm4gaW5kZXggKyAxO1xuICAgIH1cbiAgfSksXG4gIG1vbnRoOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIGRheTogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaERheVBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VEYXlQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIGRheVBlcmlvZDogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaERheVBlcmlvZFBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnYW55JyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBlcmlvZFBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KVxufTtcbmV4cG9ydCBkZWZhdWx0IG1hdGNoOyIsImltcG9ydCBmb3JtYXREaXN0YW5jZSBmcm9tIFwiLi9fbGliL2Zvcm1hdERpc3RhbmNlL2luZGV4LmpzXCI7XG5pbXBvcnQgZm9ybWF0TG9uZyBmcm9tIFwiLi9fbGliL2Zvcm1hdExvbmcvaW5kZXguanNcIjtcbmltcG9ydCBmb3JtYXRSZWxhdGl2ZSBmcm9tIFwiLi9fbGliL2Zvcm1hdFJlbGF0aXZlL2luZGV4LmpzXCI7XG5pbXBvcnQgbG9jYWxpemUgZnJvbSBcIi4vX2xpYi9sb2NhbGl6ZS9pbmRleC5qc1wiO1xuaW1wb3J0IG1hdGNoIGZyb20gXCIuL19saWIvbWF0Y2gvaW5kZXguanNcIjtcbi8qKlxuICogQHR5cGUge0xvY2FsZX1cbiAqIEBjYXRlZ29yeSBMb2NhbGVzXG4gKiBAc3VtbWFyeSBFbmdsaXNoIGxvY2FsZSAoVW5pdGVkIFN0YXRlcykuXG4gKiBAbGFuZ3VhZ2UgRW5nbGlzaFxuICogQGlzby02MzktMiBlbmdcbiAqIEBhdXRob3IgU2FzaGEgS29zcyBbQGtvc3Nub2NvcnBde0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9rb3Nzbm9jb3JwfVxuICogQGF1dGhvciBMZXNoYSBLb3NzIFtAbGVzaGFrb3NzXXtAbGluayBodHRwczovL2dpdGh1Yi5jb20vbGVzaGFrb3NzfVxuICovXG52YXIgbG9jYWxlID0ge1xuICBjb2RlOiAnZW4tVVMnLFxuICBmb3JtYXREaXN0YW5jZTogZm9ybWF0RGlzdGFuY2UsXG4gIGZvcm1hdExvbmc6IGZvcm1hdExvbmcsXG4gIGZvcm1hdFJlbGF0aXZlOiBmb3JtYXRSZWxhdGl2ZSxcbiAgbG9jYWxpemU6IGxvY2FsaXplLFxuICBtYXRjaDogbWF0Y2gsXG4gIG9wdGlvbnM6IHtcbiAgICB3ZWVrU3RhcnRzT246IDAgLyogU3VuZGF5ICovLFxuICAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogMVxuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgbG9jYWxlOyIsImltcG9ydCB7IG1pbGxpc2Vjb25kc0luSG91ciwgbWlsbGlzZWNvbmRzSW5NaW51dGUgfSBmcm9tIFwiLi4vY29uc3RhbnRzL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgcGFyc2VJU09cbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgUGFyc2UgSVNPIHN0cmluZ1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUGFyc2UgdGhlIGdpdmVuIHN0cmluZyBpbiBJU08gODYwMSBmb3JtYXQgYW5kIHJldHVybiBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEZ1bmN0aW9uIGFjY2VwdHMgY29tcGxldGUgSVNPIDg2MDEgZm9ybWF0cyBhcyB3ZWxsIGFzIHBhcnRpYWwgaW1wbGVtZW50YXRpb25zLlxuICogSVNPIDg2MDE6IGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPXzg2MDFcbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXNuJ3QgYSBzdHJpbmcsIHRoZSBmdW5jdGlvbiBjYW5ub3QgcGFyc2UgdGhlIHN0cmluZyBvclxuICogdGhlIHZhbHVlcyBhcmUgaW52YWxpZCwgaXQgcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHswfDF8Mn0gW29wdGlvbnMuYWRkaXRpb25hbERpZ2l0cz0yXSAtIHRoZSBhZGRpdGlvbmFsIG51bWJlciBvZiBkaWdpdHMgaW4gdGhlIGV4dGVuZGVkIHllYXIgZm9ybWF0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMuYWRkaXRpb25hbERpZ2l0c2AgbXVzdCBiZSAwLCAxIG9yIDJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCBzdHJpbmcgJzIwMTQtMDItMTFUMTE6MzA6MzAnIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBwYXJzZUlTTygnMjAxNC0wMi0xMVQxMTozMDozMCcpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHN0cmluZyAnKzAyMDE0MTAxJyB0byBkYXRlLFxuICogLy8gaWYgdGhlIGFkZGl0aW9uYWwgbnVtYmVyIG9mIGRpZ2l0cyBpbiB0aGUgZXh0ZW5kZWQgeWVhciBmb3JtYXQgaXMgMTpcbiAqIGNvbnN0IHJlc3VsdCA9IHBhcnNlSVNPKCcrMDIwMTQxMDEnLCB7IGFkZGl0aW9uYWxEaWdpdHM6IDEgfSlcbiAqIC8vPT4gRnJpIEFwciAxMSAyMDE0IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhcnNlSVNPKGFyZ3VtZW50LCBvcHRpb25zKSB7XG4gIHZhciBfb3B0aW9ucyRhZGRpdGlvbmFsRGk7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYWRkaXRpb25hbERpZ2l0cyA9IHRvSW50ZWdlcigoX29wdGlvbnMkYWRkaXRpb25hbERpID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmFkZGl0aW9uYWxEaWdpdHMpICE9PSBudWxsICYmIF9vcHRpb25zJGFkZGl0aW9uYWxEaSAhPT0gdm9pZCAwID8gX29wdGlvbnMkYWRkaXRpb25hbERpIDogMik7XG4gIGlmIChhZGRpdGlvbmFsRGlnaXRzICE9PSAyICYmIGFkZGl0aW9uYWxEaWdpdHMgIT09IDEgJiYgYWRkaXRpb25hbERpZ2l0cyAhPT0gMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdhZGRpdGlvbmFsRGlnaXRzIG11c3QgYmUgMCwgMSBvciAyJyk7XG4gIH1cbiAgaWYgKCEodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpID09PSAnW29iamVjdCBTdHJpbmddJykpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxuICB2YXIgZGF0ZVN0cmluZ3MgPSBzcGxpdERhdGVTdHJpbmcoYXJndW1lbnQpO1xuICB2YXIgZGF0ZTtcbiAgaWYgKGRhdGVTdHJpbmdzLmRhdGUpIHtcbiAgICB2YXIgcGFyc2VZZWFyUmVzdWx0ID0gcGFyc2VZZWFyKGRhdGVTdHJpbmdzLmRhdGUsIGFkZGl0aW9uYWxEaWdpdHMpO1xuICAgIGRhdGUgPSBwYXJzZURhdGUocGFyc2VZZWFyUmVzdWx0LnJlc3REYXRlU3RyaW5nLCBwYXJzZVllYXJSZXN1bHQueWVhcik7XG4gIH1cbiAgaWYgKCFkYXRlIHx8IGlzTmFOKGRhdGUuZ2V0VGltZSgpKSkge1xuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG4gIHZhciB0aW1lc3RhbXAgPSBkYXRlLmdldFRpbWUoKTtcbiAgdmFyIHRpbWUgPSAwO1xuICB2YXIgb2Zmc2V0O1xuICBpZiAoZGF0ZVN0cmluZ3MudGltZSkge1xuICAgIHRpbWUgPSBwYXJzZVRpbWUoZGF0ZVN0cmluZ3MudGltZSk7XG4gICAgaWYgKGlzTmFOKHRpbWUpKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgICB9XG4gIH1cbiAgaWYgKGRhdGVTdHJpbmdzLnRpbWV6b25lKSB7XG4gICAgb2Zmc2V0ID0gcGFyc2VUaW1lem9uZShkYXRlU3RyaW5ncy50aW1lem9uZSk7XG4gICAgaWYgKGlzTmFOKG9mZnNldCkpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgZGlydHlEYXRlID0gbmV3IERhdGUodGltZXN0YW1wICsgdGltZSk7XG4gICAgLy8ganMgcGFyc2VkIHN0cmluZyBhc3N1bWluZyBpdCdzIGluIFVUQyB0aW1lem9uZVxuICAgIC8vIGJ1dCB3ZSBuZWVkIGl0IHRvIGJlIHBhcnNlZCBpbiBvdXIgdGltZXpvbmVcbiAgICAvLyBzbyB3ZSB1c2UgdXRjIHZhbHVlcyB0byBidWlsZCBkYXRlIGluIG91ciB0aW1lem9uZS5cbiAgICAvLyBZZWFyIHZhbHVlcyBmcm9tIDAgdG8gOTkgbWFwIHRvIHRoZSB5ZWFycyAxOTAwIHRvIDE5OTlcbiAgICAvLyBzbyBzZXQgeWVhciBleHBsaWNpdGx5IHdpdGggc2V0RnVsbFllYXIuXG4gICAgdmFyIHJlc3VsdCA9IG5ldyBEYXRlKDApO1xuICAgIHJlc3VsdC5zZXRGdWxsWWVhcihkaXJ0eURhdGUuZ2V0VVRDRnVsbFllYXIoKSwgZGlydHlEYXRlLmdldFVUQ01vbnRoKCksIGRpcnR5RGF0ZS5nZXRVVENEYXRlKCkpO1xuICAgIHJlc3VsdC5zZXRIb3VycyhkaXJ0eURhdGUuZ2V0VVRDSG91cnMoKSwgZGlydHlEYXRlLmdldFVUQ01pbnV0ZXMoKSwgZGlydHlEYXRlLmdldFVUQ1NlY29uZHMoKSwgZGlydHlEYXRlLmdldFVUQ01pbGxpc2Vjb25kcygpKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIHJldHVybiBuZXcgRGF0ZSh0aW1lc3RhbXAgKyB0aW1lICsgb2Zmc2V0KTtcbn1cbnZhciBwYXR0ZXJucyA9IHtcbiAgZGF0ZVRpbWVEZWxpbWl0ZXI6IC9bVCBdLyxcbiAgdGltZVpvbmVEZWxpbWl0ZXI6IC9bWiBdL2ksXG4gIHRpbWV6b25lOiAvKFtaKy1dLiopJC9cbn07XG52YXIgZGF0ZVJlZ2V4ID0gL14tPyg/OihcXGR7M30pfChcXGR7Mn0pKD86LT8oXFxkezJ9KSk/fFcoXFxkezJ9KSg/Oi0/KFxcZHsxfSkpP3wpJC87XG52YXIgdGltZVJlZ2V4ID0gL14oXFxkezJ9KD86Wy4sXVxcZCopPykoPzo6PyhcXGR7Mn0oPzpbLixdXFxkKik/KSk/KD86Oj8oXFxkezJ9KD86Wy4sXVxcZCopPykpPyQvO1xudmFyIHRpbWV6b25lUmVnZXggPSAvXihbKy1dKShcXGR7Mn0pKD86Oj8oXFxkezJ9KSk/JC87XG5mdW5jdGlvbiBzcGxpdERhdGVTdHJpbmcoZGF0ZVN0cmluZykge1xuICB2YXIgZGF0ZVN0cmluZ3MgPSB7fTtcbiAgdmFyIGFycmF5ID0gZGF0ZVN0cmluZy5zcGxpdChwYXR0ZXJucy5kYXRlVGltZURlbGltaXRlcik7XG4gIHZhciB0aW1lU3RyaW5nO1xuXG4gIC8vIFRoZSByZWdleCBtYXRjaCBzaG91bGQgb25seSByZXR1cm4gYXQgbWF4aW11bSB0d28gYXJyYXkgZWxlbWVudHMuXG4gIC8vIFtkYXRlXSwgW3RpbWVdLCBvciBbZGF0ZSwgdGltZV0uXG4gIGlmIChhcnJheS5sZW5ndGggPiAyKSB7XG4gICAgcmV0dXJuIGRhdGVTdHJpbmdzO1xuICB9XG4gIGlmICgvOi8udGVzdChhcnJheVswXSkpIHtcbiAgICB0aW1lU3RyaW5nID0gYXJyYXlbMF07XG4gIH0gZWxzZSB7XG4gICAgZGF0ZVN0cmluZ3MuZGF0ZSA9IGFycmF5WzBdO1xuICAgIHRpbWVTdHJpbmcgPSBhcnJheVsxXTtcbiAgICBpZiAocGF0dGVybnMudGltZVpvbmVEZWxpbWl0ZXIudGVzdChkYXRlU3RyaW5ncy5kYXRlKSkge1xuICAgICAgZGF0ZVN0cmluZ3MuZGF0ZSA9IGRhdGVTdHJpbmcuc3BsaXQocGF0dGVybnMudGltZVpvbmVEZWxpbWl0ZXIpWzBdO1xuICAgICAgdGltZVN0cmluZyA9IGRhdGVTdHJpbmcuc3Vic3RyKGRhdGVTdHJpbmdzLmRhdGUubGVuZ3RoLCBkYXRlU3RyaW5nLmxlbmd0aCk7XG4gICAgfVxuICB9XG4gIGlmICh0aW1lU3RyaW5nKSB7XG4gICAgdmFyIHRva2VuID0gcGF0dGVybnMudGltZXpvbmUuZXhlYyh0aW1lU3RyaW5nKTtcbiAgICBpZiAodG9rZW4pIHtcbiAgICAgIGRhdGVTdHJpbmdzLnRpbWUgPSB0aW1lU3RyaW5nLnJlcGxhY2UodG9rZW5bMV0sICcnKTtcbiAgICAgIGRhdGVTdHJpbmdzLnRpbWV6b25lID0gdG9rZW5bMV07XG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGVTdHJpbmdzLnRpbWUgPSB0aW1lU3RyaW5nO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZGF0ZVN0cmluZ3M7XG59XG5mdW5jdGlvbiBwYXJzZVllYXIoZGF0ZVN0cmluZywgYWRkaXRpb25hbERpZ2l0cykge1xuICB2YXIgcmVnZXggPSBuZXcgUmVnRXhwKCdeKD86KFxcXFxkezR9fFsrLV1cXFxcZHsnICsgKDQgKyBhZGRpdGlvbmFsRGlnaXRzKSArICd9KXwoXFxcXGR7Mn18WystXVxcXFxkeycgKyAoMiArIGFkZGl0aW9uYWxEaWdpdHMpICsgJ30pJCknKTtcbiAgdmFyIGNhcHR1cmVzID0gZGF0ZVN0cmluZy5tYXRjaChyZWdleCk7XG4gIC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCB5ZWFyXG4gIGlmICghY2FwdHVyZXMpIHJldHVybiB7XG4gICAgeWVhcjogTmFOLFxuICAgIHJlc3REYXRlU3RyaW5nOiAnJ1xuICB9O1xuICB2YXIgeWVhciA9IGNhcHR1cmVzWzFdID8gcGFyc2VJbnQoY2FwdHVyZXNbMV0pIDogbnVsbDtcbiAgdmFyIGNlbnR1cnkgPSBjYXB0dXJlc1syXSA/IHBhcnNlSW50KGNhcHR1cmVzWzJdKSA6IG51bGw7XG5cbiAgLy8gZWl0aGVyIHllYXIgb3IgY2VudHVyeSBpcyBudWxsLCBub3QgYm90aFxuICByZXR1cm4ge1xuICAgIHllYXI6IGNlbnR1cnkgPT09IG51bGwgPyB5ZWFyIDogY2VudHVyeSAqIDEwMCxcbiAgICByZXN0RGF0ZVN0cmluZzogZGF0ZVN0cmluZy5zbGljZSgoY2FwdHVyZXNbMV0gfHwgY2FwdHVyZXNbMl0pLmxlbmd0aClcbiAgfTtcbn1cbmZ1bmN0aW9uIHBhcnNlRGF0ZShkYXRlU3RyaW5nLCB5ZWFyKSB7XG4gIC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCB5ZWFyXG4gIGlmICh5ZWFyID09PSBudWxsKSByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgdmFyIGNhcHR1cmVzID0gZGF0ZVN0cmluZy5tYXRjaChkYXRlUmVnZXgpO1xuICAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgc3RyaW5nXG4gIGlmICghY2FwdHVyZXMpIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB2YXIgaXNXZWVrRGF0ZSA9ICEhY2FwdHVyZXNbNF07XG4gIHZhciBkYXlPZlllYXIgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzFdKTtcbiAgdmFyIG1vbnRoID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1syXSkgLSAxO1xuICB2YXIgZGF5ID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1szXSk7XG4gIHZhciB3ZWVrID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1s0XSk7XG4gIHZhciBkYXlPZldlZWsgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzVdKSAtIDE7XG4gIGlmIChpc1dlZWtEYXRlKSB7XG4gICAgaWYgKCF2YWxpZGF0ZVdlZWtEYXRlKHllYXIsIHdlZWssIGRheU9mV2VlaykpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICAgIH1cbiAgICByZXR1cm4gZGF5T2ZJU09XZWVrWWVhcih5ZWFyLCB3ZWVrLCBkYXlPZldlZWspO1xuICB9IGVsc2Uge1xuICAgIHZhciBkYXRlID0gbmV3IERhdGUoMCk7XG4gICAgaWYgKCF2YWxpZGF0ZURhdGUoeWVhciwgbW9udGgsIGRheSkgfHwgIXZhbGlkYXRlRGF5T2ZZZWFyRGF0ZSh5ZWFyLCBkYXlPZlllYXIpKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgICB9XG4gICAgZGF0ZS5zZXRVVENGdWxsWWVhcih5ZWFyLCBtb250aCwgTWF0aC5tYXgoZGF5T2ZZZWFyLCBkYXkpKTtcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxufVxuZnVuY3Rpb24gcGFyc2VEYXRlVW5pdCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPyBwYXJzZUludCh2YWx1ZSkgOiAxO1xufVxuZnVuY3Rpb24gcGFyc2VUaW1lKHRpbWVTdHJpbmcpIHtcbiAgdmFyIGNhcHR1cmVzID0gdGltZVN0cmluZy5tYXRjaCh0aW1lUmVnZXgpO1xuICBpZiAoIWNhcHR1cmVzKSByZXR1cm4gTmFOOyAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgdGltZVxuXG4gIHZhciBob3VycyA9IHBhcnNlVGltZVVuaXQoY2FwdHVyZXNbMV0pO1xuICB2YXIgbWludXRlcyA9IHBhcnNlVGltZVVuaXQoY2FwdHVyZXNbMl0pO1xuICB2YXIgc2Vjb25kcyA9IHBhcnNlVGltZVVuaXQoY2FwdHVyZXNbM10pO1xuICBpZiAoIXZhbGlkYXRlVGltZShob3VycywgbWludXRlcywgc2Vjb25kcykpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG4gIHJldHVybiBob3VycyAqIG1pbGxpc2Vjb25kc0luSG91ciArIG1pbnV0ZXMgKiBtaWxsaXNlY29uZHNJbk1pbnV0ZSArIHNlY29uZHMgKiAxMDAwO1xufVxuZnVuY3Rpb24gcGFyc2VUaW1lVW5pdCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgJiYgcGFyc2VGbG9hdCh2YWx1ZS5yZXBsYWNlKCcsJywgJy4nKSkgfHwgMDtcbn1cbmZ1bmN0aW9uIHBhcnNlVGltZXpvbmUodGltZXpvbmVTdHJpbmcpIHtcbiAgaWYgKHRpbWV6b25lU3RyaW5nID09PSAnWicpIHJldHVybiAwO1xuICB2YXIgY2FwdHVyZXMgPSB0aW1lem9uZVN0cmluZy5tYXRjaCh0aW1lem9uZVJlZ2V4KTtcbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIDA7XG4gIHZhciBzaWduID0gY2FwdHVyZXNbMV0gPT09ICcrJyA/IC0xIDogMTtcbiAgdmFyIGhvdXJzID0gcGFyc2VJbnQoY2FwdHVyZXNbMl0pO1xuICB2YXIgbWludXRlcyA9IGNhcHR1cmVzWzNdICYmIHBhcnNlSW50KGNhcHR1cmVzWzNdKSB8fCAwO1xuICBpZiAoIXZhbGlkYXRlVGltZXpvbmUoaG91cnMsIG1pbnV0ZXMpKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuICByZXR1cm4gc2lnbiAqIChob3VycyAqIG1pbGxpc2Vjb25kc0luSG91ciArIG1pbnV0ZXMgKiBtaWxsaXNlY29uZHNJbk1pbnV0ZSk7XG59XG5mdW5jdGlvbiBkYXlPZklTT1dlZWtZZWFyKGlzb1dlZWtZZWFyLCB3ZWVrLCBkYXkpIHtcbiAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgwKTtcbiAgZGF0ZS5zZXRVVENGdWxsWWVhcihpc29XZWVrWWVhciwgMCwgNCk7XG4gIHZhciBmb3VydGhPZkphbnVhcnlEYXkgPSBkYXRlLmdldFVUQ0RheSgpIHx8IDc7XG4gIHZhciBkaWZmID0gKHdlZWsgLSAxKSAqIDcgKyBkYXkgKyAxIC0gZm91cnRoT2ZKYW51YXJ5RGF5O1xuICBkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkgKyBkaWZmKTtcbiAgcmV0dXJuIGRhdGU7XG59XG5cbi8vIFZhbGlkYXRpb24gZnVuY3Rpb25zXG5cbi8vIEZlYnJ1YXJ5IGlzIG51bGwgdG8gaGFuZGxlIHRoZSBsZWFwIHllYXIgKHVzaW5nIHx8KVxudmFyIGRheXNJbk1vbnRocyA9IFszMSwgbnVsbCwgMzEsIDMwLCAzMSwgMzAsIDMxLCAzMSwgMzAsIDMxLCAzMCwgMzFdO1xuZnVuY3Rpb24gaXNMZWFwWWVhckluZGV4KHllYXIpIHtcbiAgcmV0dXJuIHllYXIgJSA0MDAgPT09IDAgfHwgeWVhciAlIDQgPT09IDAgJiYgeWVhciAlIDEwMCAhPT0gMDtcbn1cbmZ1bmN0aW9uIHZhbGlkYXRlRGF0ZSh5ZWFyLCBtb250aCwgZGF0ZSkge1xuICByZXR1cm4gbW9udGggPj0gMCAmJiBtb250aCA8PSAxMSAmJiBkYXRlID49IDEgJiYgZGF0ZSA8PSAoZGF5c0luTW9udGhzW21vbnRoXSB8fCAoaXNMZWFwWWVhckluZGV4KHllYXIpID8gMjkgOiAyOCkpO1xufVxuZnVuY3Rpb24gdmFsaWRhdGVEYXlPZlllYXJEYXRlKHllYXIsIGRheU9mWWVhcikge1xuICByZXR1cm4gZGF5T2ZZZWFyID49IDEgJiYgZGF5T2ZZZWFyIDw9IChpc0xlYXBZZWFySW5kZXgoeWVhcikgPyAzNjYgOiAzNjUpO1xufVxuZnVuY3Rpb24gdmFsaWRhdGVXZWVrRGF0ZShfeWVhciwgd2VlaywgZGF5KSB7XG4gIHJldHVybiB3ZWVrID49IDEgJiYgd2VlayA8PSA1MyAmJiBkYXkgPj0gMCAmJiBkYXkgPD0gNjtcbn1cbmZ1bmN0aW9uIHZhbGlkYXRlVGltZShob3VycywgbWludXRlcywgc2Vjb25kcykge1xuICBpZiAoaG91cnMgPT09IDI0KSB7XG4gICAgcmV0dXJuIG1pbnV0ZXMgPT09IDAgJiYgc2Vjb25kcyA9PT0gMDtcbiAgfVxuICByZXR1cm4gc2Vjb25kcyA+PSAwICYmIHNlY29uZHMgPCA2MCAmJiBtaW51dGVzID49IDAgJiYgbWludXRlcyA8IDYwICYmIGhvdXJzID49IDAgJiYgaG91cnMgPCAyNTtcbn1cbmZ1bmN0aW9uIHZhbGlkYXRlVGltZXpvbmUoX2hvdXJzLCBtaW51dGVzKSB7XG4gIHJldHVybiBtaW51dGVzID49IDAgJiYgbWludXRlcyA8PSA1OTtcbn0iLCJpbXBvcnQgYWRkTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9hZGRNaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdWJNaWxsaXNlY29uZHNcbiAqIEBjYXRlZ29yeSBNaWxsaXNlY29uZCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBTdWJ0cmFjdCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgZnJvbSB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFN1YnRyYWN0IHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBmcm9tIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IC0gdGhlIGFtb3VudCBvZiBtaWxsaXNlY29uZHMgdG8gYmUgc3VidHJhY3RlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxuICogQHJldHVybnMge0RhdGV9IHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBtaWxsaXNlY29uZHMgc3VidHJhY3RlZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdWJ0cmFjdCA3NTAgbWlsbGlzZWNvbmRzIGZyb20gMTAgSnVseSAyMDE0IDEyOjQ1OjMwLjAwMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN1Yk1pbGxpc2Vjb25kcyhuZXcgRGF0ZSgyMDE0LCA2LCAxMCwgMTIsIDQ1LCAzMCwgMCksIDc1MClcbiAqIC8vPT4gVGh1IEp1bCAxMCAyMDE0IDEyOjQ1OjI5LjI1MFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdWJNaWxsaXNlY29uZHMoZGlydHlEYXRlLCBkaXJ0eUFtb3VudCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGFtb3VudCA9IHRvSW50ZWdlcihkaXJ0eUFtb3VudCk7XG4gIHJldHVybiBhZGRNaWxsaXNlY29uZHMoZGlydHlEYXRlLCAtYW1vdW50KTtcbn0iLCJpbXBvcnQgX3R5cGVvZiBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7XG5cbiAgLy8gQ2xvbmUgdGhlIGRhdGVcbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCBfdHlwZW9mKGFyZ3VtZW50KSA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI3N0cmluZy1hcmd1bWVudHNcIik7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgcmVuZGVyQXBwIGZyb20gXCIuL3JlbmRlclwiO1xyXG5cclxuY29uc3QgdG9kbyA9IHJlbmRlckFwcCgpO1xyXG5cclxudG9kby5pbml0KCk7XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVByb2plY3QobmFtZSkge1xyXG4gICAgY29uc3QgdGFza3MgPSBbXTtcclxuICAgIGxldCBwcm9qZWN0TmFtZSA9IG5hbWU7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBnZXQgbmFtZSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHByb2plY3ROYW1lO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHNldCBuYW1lKHRpdGxlKSB7XHJcbiAgICAgICAgICAgIHByb2plY3ROYW1lID0gdGl0bGU7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgZ2V0IHRhc2tzKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGFza3M7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgYWRkVGFzayh0YXNrKSB7XHJcbiAgICAgICAgICAgIHRhc2tzLnB1c2godGFzayk7XHJcbiAgICAgICAgICAgIHRoaXMuc29ydFRhc2tzKCk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgZGVsZXRlVGFzayhpbmRleCkge1xyXG4gICAgICAgICAgICB0YXNrcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICB0aGlzLnNvcnRUYXNrcygpO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHNvcnRUYXNrcygpIHtcclxuICAgICAgICAgICAgdGFza3Muc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0ZTEgPSBuZXcgRGF0ZShhLmRlYWRsaW5lKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGUyID0gbmV3IERhdGUoYi5kZWFkbGluZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGUxIC0gZGF0ZTI7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICB9O1xyXG59XHJcbiIsImltcG9ydCB7IGZvcm1hdCwgaXNGdXR1cmUsIHBhcnNlSVNPIH0gZnJvbSBcImRhdGUtZm5zXCI7XHJcbmltcG9ydCBjcmVhdGVQcm9qZWN0IGZyb20gXCIuL3Byb2plY3RcIjtcclxuaW1wb3J0IGNyZWF0ZVRhc2sgZnJvbSBcIi4vdGFza1wiO1xyXG5pbXBvcnQgXCIuL3N0eWxlLnNjc3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlckFwcCgpIHtcclxuICAgIGxldCBjdXJyZW50UHJvamVjdHMgPSBbXTtcclxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzTGlzdFwiKSkge1xyXG4gICAgICAgIGN1cnJlbnRQcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c0xpc3RcIikpO1xyXG4gICAgICAgIC8qIGVzbGludC1kaXNhYmxlICovY29uc29sZS5sb2coLi4ub29fb28oYGNhOGI2MWEyXzBgLGN1cnJlbnRQcm9qZWN0cykpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjdXJyZW50UHJvamVjdHMucHVzaChjcmVhdGVQcm9qZWN0KFwiSW5ib3hcIikpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNMaXN0XCIsIEpTT04uc3RyaW5naWZ5KGN1cnJlbnRQcm9qZWN0cykpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gYWRkUHJvamVjdChuYW1lKSB7XHJcbiAgICAgICAgY3VycmVudFByb2plY3RzLnB1c2goY3JlYXRlUHJvamVjdChuYW1lKSk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c0xpc3RcIiwgSlNPTi5zdHJpbmdpZnkoY3VycmVudFByb2plY3RzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVuZGVySG9tZSgpIHtcclxuICAgICAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XHJcblxyXG4gICAgICAgIGNvbnN0IGFwcFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcclxuICAgICAgICBhcHBUaXRsZS5pZCA9IFwiYXBwLXRpdGxlXCI7XHJcblxyXG4gICAgICAgIGNvbnN0IHN2Z0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXHJcbiAgICAgICAgICAgIFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcclxuICAgICAgICAgICAgXCJzdmdcIlxyXG4gICAgICAgICk7XHJcbiAgICAgICAgc3ZnRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBcIjI2XCIpO1xyXG4gICAgICAgIHN2Z0VsZW1lbnQuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIFwiMjRcIik7XHJcbiAgICAgICAgc3ZnRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJ2aWV3Qm94XCIsIFwiMCAwIDI2IDI0XCIpO1xyXG4gICAgICAgIHN2Z0VsZW1lbnQuc2V0QXR0cmlidXRlKFwiZmlsbFwiLCBcIm5vbmVcIik7XHJcblxyXG4gICAgICAgIGNvbnN0IHBhdGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFxyXG4gICAgICAgICAgICBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXHJcbiAgICAgICAgICAgIFwicGF0aFwiXHJcbiAgICAgICAgKTtcclxuICAgICAgICBwYXRoMS5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgICAgICAgIFwiZFwiLFxyXG4gICAgICAgICAgICBcIk0xNy41NDc5IDcuMjY2NTFDMTguMjQ3NCA2LjQxMTYyIDE4LjEyMTQgNS4xNTE1NyAxNy4yNjY1IDQuNDUyMTJDMTYuNDExNiAzLjc1MjY2IDE1LjE1MTUgMy44Nzg2NiAxNC40NTIxIDQuNzMzNTVMNi42NjYxOCAxNC4yNDk3TDQuMiAxMi40QzMuMzE2MzQgMTEuNzM3MyAyLjA2Mjc0IDExLjkxNjQgMS40IDEyLjhDMC43MzcyNTkgMTMuNjgzNyAwLjkxNjM0NSAxNC45MzczIDEuOCAxNS42TDUuMDMzMDkgMTguMDI0OEM2LjMxOTE2IDE4Ljk4OTQgOC4xMzY5NyAxOC43Njg4IDkuMTU0OTYgMTcuNTI0NkwxNy41NDc5IDcuMjY2NTFaXCJcclxuICAgICAgICApO1xyXG4gICAgICAgIHBhdGgxLnNldEF0dHJpYnV0ZShcInN0cm9rZVwiLCBcIiMyMjIyMjJcIik7XHJcbiAgICAgICAgcGF0aDEuc2V0QXR0cmlidXRlKFwic3Ryb2tlLXdpZHRoXCIsIFwiMlwiKTtcclxuICAgICAgICBwYXRoMS5zZXRBdHRyaWJ1dGUoXCJzdHJva2UtbGluZWNhcFwiLCBcInJvdW5kXCIpO1xyXG5cclxuICAgICAgICBjb25zdCBtYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFxyXG4gICAgICAgICAgICBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXHJcbiAgICAgICAgICAgIFwibWFza1wiXHJcbiAgICAgICAgKTtcclxuICAgICAgICBtYXNrLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicGF0aC0yLW91dHNpZGUtMV8xNjU0XzExNDU0XCIpO1xyXG4gICAgICAgIG1hc2suc2V0QXR0cmlidXRlKFwibWFza1VuaXRzXCIsIFwidXNlclNwYWNlT25Vc2VcIik7XHJcbiAgICAgICAgbWFzay5zZXRBdHRyaWJ1dGUoXCJ4XCIsIFwiOC44NjkzMlwiKTtcclxuICAgICAgICBtYXNrLnNldEF0dHJpYnV0ZShcInlcIiwgXCIzXCIpO1xyXG4gICAgICAgIG1hc2suc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgXCIxOFwiKTtcclxuICAgICAgICBtYXNrLnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCBcIjE3XCIpO1xyXG4gICAgICAgIG1hc2suc2V0QXR0cmlidXRlKFwiZmlsbFwiLCBcImJsYWNrXCIpO1xyXG5cclxuICAgICAgICBjb25zdCByZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFxyXG4gICAgICAgICAgICBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXHJcbiAgICAgICAgICAgIFwicmVjdFwiXHJcbiAgICAgICAgKTtcclxuICAgICAgICByZWN0LnNldEF0dHJpYnV0ZShcImZpbGxcIiwgXCJ3aGl0ZVwiKTtcclxuICAgICAgICByZWN0LnNldEF0dHJpYnV0ZShcInhcIiwgXCI4Ljg2OTMyXCIpO1xyXG4gICAgICAgIHJlY3Quc2V0QXR0cmlidXRlKFwieVwiLCBcIjNcIik7XHJcbiAgICAgICAgcmVjdC5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBcIjE4XCIpO1xyXG4gICAgICAgIHJlY3Quc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIFwiMTdcIik7XHJcblxyXG4gICAgICAgIGNvbnN0IHBhdGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFxyXG4gICAgICAgICAgICBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXHJcbiAgICAgICAgICAgIFwicGF0aFwiXHJcbiAgICAgICAgKTtcclxuICAgICAgICBwYXRoMi5zZXRBdHRyaWJ1dGUoXCJmaWxsLXJ1bGVcIiwgXCJldmVub2RkXCIpO1xyXG4gICAgICAgIHBhdGgyLnNldEF0dHJpYnV0ZShcImNsaXAtcnVsZVwiLCBcImV2ZW5vZGRcIik7XHJcbiAgICAgICAgcGF0aDIuc2V0QXR0cmlidXRlKFxyXG4gICAgICAgICAgICBcImRcIixcclxuICAgICAgICAgICAgXCJNMTEuODY5MyAxNi41NzYxTDEyLjYwMyAxNy4xNjNDMTMuNDU4OCAxNy44NDc3IDE0LjcwNjIgMTcuNzE2IDE1LjQwMDMgMTYuODY3OEwyMy43NzQgNi42MzMyN0MyNC4xMjM3IDYuMjA1ODIgMjQuMDYwNyA1LjU3NTggMjMuNjMzMiA1LjIyNjA3QzIzLjIwNTggNC44NzYzNSAyMi41NzU4IDQuOTM5MzUgMjIuMjI2IDUuMzY2NzlMMTMuODUyNCAxNS42MDEzTDEzLjEzNTkgMTUuMDI4MUwxMS44NjkzIDE2LjU3NjFaXCJcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBtYXNrLmFwcGVuZENoaWxkKHJlY3QpO1xyXG4gICAgICAgIG1hc2suYXBwZW5kQ2hpbGQocGF0aDIpO1xyXG5cclxuICAgICAgICBjb25zdCBwYXRoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcclxuICAgICAgICAgICAgXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxyXG4gICAgICAgICAgICBcInBhdGhcIlxyXG4gICAgICAgICk7XHJcbiAgICAgICAgcGF0aDMuc2V0QXR0cmlidXRlKFxyXG4gICAgICAgICAgICBcImRcIixcclxuICAgICAgICAgICAgXCJNMTIuNjAzIDE3LjE2M0wxMS4zNTM2IDE4LjcyNDhMMTEuMzUzNiAxOC43MjQ4TDEyLjYwMyAxNy4xNjNaTTExLjg2OTMgMTYuNTc2MUwxMC4zMjE0IDE1LjMwOTZMOS4wNDA5NCAxNi44NzQ3TDEwLjYxOTkgMTguMTM3OUwxMS44NjkzIDE2LjU3NjFaTTE1LjQwMDMgMTYuODY3OEwxMy44NTI0IDE1LjYwMTNIMTMuODUyNEwxNS40MDAzIDE2Ljg2NzhaTTIzLjc3NCA2LjYzMzI3TDIyLjIyNiA1LjM2Njc5VjUuMzY2NzlMMjMuNzc0IDYuNjMzMjdaTTIzLjYzMzIgNS4yMjYwN0wyMi4zNjY4IDYuNzczOTlMMjMuNjMzMiA1LjIyNjA3Wk0yMi4yMjYgNS4zNjY3OUwyMC42NzgxIDQuMTAwMzJMMjIuMjI2IDUuMzY2NzlaTTEzLjg1MjQgMTUuNjAxM0wxMi42MDMgMTcuMTYzTDE0LjE0NzYgMTguMzk4OEwxNS40MDAzIDE2Ljg2NzhMMTMuODUyNCAxNS42MDEzWk0xMy4xMzU5IDE1LjAyODFMMTQuMzg1MyAxMy40NjY0TDEyLjg0MDYgMTIuMjMwNkwxMS41ODggMTMuNzYxNkwxMy4xMzU5IDE1LjAyODFaTTEzLjg1MjQgMTUuNjAxM0wxMy4xMTg3IDE1LjAxNDRMMTAuNjE5OSAxOC4xMzc5TDExLjM1MzYgMTguNzI0OEwxMy44NTI0IDE1LjYwMTNaTTEzLjg1MjQgMTUuNjAxM0wxMy44NTI0IDE1LjYwMTNMMTEuMzUzNiAxOC43MjQ4QzEzLjA2NTIgMjAuMDk0MSAxNS41NjAxIDE5LjgzMDggMTYuOTQ4MiAxOC4xMzQyTDEzLjg1MjQgMTUuNjAxM1pNMjIuMjI2IDUuMzY2NzlMMTMuODUyNCAxNS42MDEzTDE2Ljk0ODIgMTguMTM0MkwyNS4zMjE5IDcuODk5NzRMMjIuMjI2IDUuMzY2NzlaTTIyLjM2NjggNi43NzM5OUMyMS45MzkzIDYuNDI0MjYgMjEuODc2MyA1Ljc5NDI0IDIyLjIyNiA1LjM2Njc5TDI1LjMyMTkgNy44OTk3NEMyNi4zNzExIDYuNjE3NDEgMjYuMTgyIDQuNzI3MzQgMjQuODk5NyAzLjY3ODE2TDIyLjM2NjggNi43NzM5OVpNMjMuNzc0IDYuNjMzMjdDMjMuNDI0MiA3LjA2MDcxIDIyLjc5NDIgNy4xMjM3MiAyMi4zNjY4IDYuNzczOTlMMjQuODk5NyAzLjY3ODE2QzIzLjYxNzQgMi42Mjg5OCAyMS43MjczIDIuODE3OTggMjAuNjc4MSA0LjEwMDMyTDIzLjc3NCA2LjYzMzI3Wk0xNS40MDAzIDE2Ljg2NzhMMjMuNzc0IDYuNjMzMjdMMjAuNjc4MSA0LjEwMDMyTDEyLjMwNDQgMTQuMzM0OEwxNS40MDAzIDE2Ljg2NzhaTTExLjg4NjUgMTYuNTg5OEwxMi42MDMgMTcuMTYzTDE1LjEwMTcgMTQuMDM5NkwxNC4zODUzIDEzLjQ2NjRMMTEuODg2NSAxNi41ODk4Wk0xMS41ODggMTMuNzYxNkwxMC4zMjE0IDE1LjMwOTZMMTMuNDE3MiAxNy44NDI2TDE0LjY4MzggMTYuMjk0NkwxMS41ODggMTMuNzYxNlpcIlxyXG4gICAgICAgICk7XHJcbiAgICAgICAgcGF0aDMuc2V0QXR0cmlidXRlKFwiZmlsbFwiLCBcIiMyMjIyMjJcIik7XHJcbiAgICAgICAgcGF0aDMuc2V0QXR0cmlidXRlKFwibWFza1wiLCBcInVybCgjcGF0aC0yLW91dHNpZGUtMV8xNjU0XzExNDU0KVwiKTtcclxuXHJcbiAgICAgICAgc3ZnRWxlbWVudC5hcHBlbmRDaGlsZChwYXRoMSk7XHJcbiAgICAgICAgc3ZnRWxlbWVudC5hcHBlbmRDaGlsZChtYXNrKTtcclxuICAgICAgICBzdmdFbGVtZW50LmFwcGVuZENoaWxkKHBhdGgzKTtcclxuXHJcbiAgICAgICAgYXBwVGl0bGUudGV4dENvbnRlbnQgPSBcIlRvZG8gQXBwXCI7XHJcbiAgICAgICAgYXBwVGl0bGUuYXBwZW5kQ2hpbGQoc3ZnRWxlbWVudCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgY29udGFpbmVyLmlkID0gXCJjb250YWluZXJcIjtcclxuXHJcbiAgICAgICAgY29uc3Qgc2lkZUJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgc2lkZUJhci5pZCA9IFwic2lkZS1iYXJcIjtcclxuXHJcbiAgICAgICAgY29uc3QgcHJpbWFyeUJ1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHByaW1hcnlCdXR0b25zLmlkID0gXCJwcmltYXJ5LWJ1dHRvbnNcIjtcclxuXHJcbiAgICAgICAgY29uc3QgaW5ib3hCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIGluYm94QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJzaWRlLWJhci1idXR0b25cIik7XHJcbiAgICAgICAgaW5ib3hCdXR0b24uZGF0YXNldC52YWx1ZSA9IFwiMFwiO1xyXG5cclxuICAgICAgICBpbmJveEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiSW5ib3hcIjtcclxuICAgICAgICBpbmJveEJ1dHRvbi5pbm5lckhUTUwgKz0gYDxzdmcgaWQ9XCJMYXllcl8xXCIgZGF0YS1uYW1lPVwiTGF5ZXIgMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3Ryb2tlLXdpZHRoPVwiMS41XCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgY29sb3I9XCIjMDAwMDAwXCI+PGRlZnM+PHN0eWxlPi5jbHMtNjM3NjM5NmNjM2E4NmQzMmVhZTZmMGVkLTF7ZmlsbDpub25lO3N0cm9rZTpjdXJyZW50Q29sb3I7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPVwiY2xzLTYzNzYzOTZjYzNhODZkMzJlYWU2ZjBlZC0xXCIgZD1cIk0yMS4zOCwxMC4yOEEzLjgyLDMuODIsMCwwLDEsMjIuNSwxM3Y3LjYzSDE0Ljg2VjEzYTMuODIsMy44MiwwLDAsMSw2LjUyLTIuN1wiPjwvcGF0aD48cGF0aCBjbGFzcz1cImNscy02Mzc2Mzk2Y2MzYTg2ZDMyZWFlNmYwZWQtMVwiIGQ9XCJNMTguNjgsOS4xNkEzLjgyLDMuODIsMCwwLDAsMTQuODYsMTN2Ny42M0gxLjVWMTNBMy44MiwzLjgyLDAsMCwxLDUuMzIsOS4xNlpcIj48L3BhdGg+PGxpbmUgY2xhc3M9XCJjbHMtNjM3NjM5NmNjM2E4NmQzMmVhZTZmMGVkLTFcIiB4MT1cIjYuMjdcIiB5MT1cIjE0Ljg5XCIgeDI9XCIxMC4wOVwiIHkyPVwiMTQuODlcIj48L2xpbmU+PGxpbmUgY2xhc3M9XCJjbHMtNjM3NjM5NmNjM2E4NmQzMmVhZTZmMGVkLTFcIiB4MT1cIjEuNVwiIHkxPVwiMS41MlwiIHgyPVwiMS41XCIgeTI9XCIxNi44XCI+PC9saW5lPjxyZWN0IGNsYXNzPVwiY2xzLTYzNzYzOTZjYzNhODZkMzJlYWU2ZjBlZC0xXCIgeD1cIjEuNVwiIHk9XCIxLjUyXCIgd2lkdGg9XCI0Ljc3XCIgaGVpZ2h0PVwiMy44MlwiPjwvcmVjdD48cG9seWxpbmUgY2xhc3M9XCJjbHMtNjM3NjM5NmNjM2E4NmQzMmVhZTZmMGVkLTFcIiBwb2ludHM9XCIxMS4wNCAyMy40OCAxMS4wNCAyMC42MSAxNC44NiAyMC42MSAxNC44NiAyMy40OFwiPjwvcG9seWxpbmU+PC9zdmc+YDtcclxuXHJcbiAgICAgICAgY29uc3QgdG9kYXlCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIHRvZGF5QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJzaWRlLWJhci1idXR0b25cIik7XHJcbiAgICAgICAgdG9kYXlCdXR0b24uZGF0YXNldC50eXBlID0gXCJ0b2RheVwiO1xyXG4gICAgICAgIHRvZGF5QnV0dG9uLnRleHRDb250ZW50ID0gXCJUb2RheVwiO1xyXG4gICAgICAgIHRvZGF5QnV0dG9uLmlubmVySFRNTCArPSBgPHN2ZyBpZD1cIkxheWVyXzFcIiBkYXRhLW5hbWU9XCJMYXllciAxXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2Utd2lkdGg9XCIxLjVcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiBjb2xvcj1cIiMwMDAwMDBcIj48ZGVmcz48c3R5bGU+LmNscy02MzdiOGIzMWY5NWU4NmI1OWM1N2EyYTEtMXtmaWxsOm5vbmU7c3Ryb2tlOmN1cnJlbnRDb2xvcjtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9PC9zdHlsZT48L2RlZnM+PGxpbmUgY2xhc3M9XCJjbHMtNjM3YjhiMzFmOTVlODZiNTljNTdhMmExLTFcIiB4MT1cIjEyXCIgeTE9XCIwLjVcIiB4Mj1cIjEyXCIgeTI9XCIyLjQyXCI+PC9saW5lPjxsaW5lIGNsYXNzPVwiY2xzLTYzN2I4YjMxZjk1ZTg2YjU5YzU3YTJhMS0xXCIgeDE9XCIxMlwiIHkxPVwiMjEuNThcIiB4Mj1cIjEyXCIgeTI9XCIyMy41XCI+PC9saW5lPjxsaW5lIGNsYXNzPVwiY2xzLTYzN2I4YjMxZjk1ZTg2YjU5YzU3YTJhMS0xXCIgeDE9XCIyMy41XCIgeTE9XCIxMlwiIHgyPVwiMjEuNThcIiB5Mj1cIjEyXCI+PC9saW5lPjxsaW5lIGNsYXNzPVwiY2xzLTYzN2I4YjMxZjk1ZTg2YjU5YzU3YTJhMS0xXCIgeDE9XCIyLjQyXCIgeTE9XCIxMlwiIHgyPVwiMC41XCIgeTI9XCIxMlwiPjwvbGluZT48bGluZSBjbGFzcz1cImNscy02MzdiOGIzMWY5NWU4NmI1OWM1N2EyYTEtMVwiIHgxPVwiMTJcIiB5MT1cIjAuNVwiIHgyPVwiMTJcIiB5Mj1cIjIuNDJcIj48L2xpbmU+PGxpbmUgY2xhc3M9XCJjbHMtNjM3YjhiMzFmOTVlODZiNTljNTdhMmExLTFcIiB4MT1cIjEyXCIgeTE9XCIyMS41OFwiIHgyPVwiMTJcIiB5Mj1cIjIzLjVcIj48L2xpbmU+PGxpbmUgY2xhc3M9XCJjbHMtNjM3YjhiMzFmOTVlODZiNTljNTdhMmExLTFcIiB4MT1cIjIzLjVcIiB5MT1cIjEyXCIgeDI9XCIyMS41OFwiIHkyPVwiMTJcIj48L2xpbmU+PGxpbmUgY2xhc3M9XCJjbHMtNjM3YjhiMzFmOTVlODZiNTljNTdhMmExLTFcIiB4MT1cIjIuNDJcIiB5MT1cIjEyXCIgeDI9XCIwLjVcIiB5Mj1cIjEyXCI+PC9saW5lPjxsaW5lIGNsYXNzPVwiY2xzLTYzN2I4YjMxZjk1ZTg2YjU5YzU3YTJhMS0xXCIgeDE9XCIyMC4xM1wiIHkxPVwiMy44N1wiIHgyPVwiMTguNzhcIiB5Mj1cIjUuMjJcIj48L2xpbmU+PGxpbmUgY2xhc3M9XCJjbHMtNjM3YjhiMzFmOTVlODZiNTljNTdhMmExLTFcIiB4MT1cIjUuMjJcIiB5MT1cIjE4Ljc4XCIgeDI9XCIzLjg3XCIgeTI9XCIyMC4xM1wiPjwvbGluZT48bGluZSBjbGFzcz1cImNscy02MzdiOGIzMWY5NWU4NmI1OWM1N2EyYTEtMVwiIHgxPVwiMjAuMTNcIiB5MT1cIjIwLjEzXCIgeDI9XCIxOC43OFwiIHkyPVwiMTguNzhcIj48L2xpbmU+PGxpbmUgY2xhc3M9XCJjbHMtNjM3YjhiMzFmOTVlODZiNTljNTdhMmExLTFcIiB4MT1cIjUuMjJcIiB5MT1cIjUuMjJcIiB4Mj1cIjMuODdcIiB5Mj1cIjMuODdcIj48L2xpbmU+PGxpbmUgY2xhc3M9XCJjbHMtNjM3YjhiMzFmOTVlODZiNTljNTdhMmExLTFcIiB4MT1cIjIwLjEzXCIgeTE9XCIzLjg3XCIgeDI9XCIxOC43OFwiIHkyPVwiNS4yMlwiPjwvbGluZT48bGluZSBjbGFzcz1cImNscy02MzdiOGIzMWY5NWU4NmI1OWM1N2EyYTEtMVwiIHgxPVwiNS4yMlwiIHkxPVwiMTguNzhcIiB4Mj1cIjMuODdcIiB5Mj1cIjIwLjEzXCI+PC9saW5lPjxsaW5lIGNsYXNzPVwiY2xzLTYzN2I4YjMxZjk1ZTg2YjU5YzU3YTJhMS0xXCIgeDE9XCIyMC4xM1wiIHkxPVwiMjAuMTNcIiB4Mj1cIjE4Ljc4XCIgeTI9XCIxOC43OFwiPjwvbGluZT48bGluZSBjbGFzcz1cImNscy02MzdiOGIzMWY5NWU4NmI1OWM1N2EyYTEtMVwiIHgxPVwiNS4yMlwiIHkxPVwiNS4yMlwiIHgyPVwiMy44N1wiIHkyPVwiMy44N1wiPjwvbGluZT48Y2lyY2xlIGNsYXNzPVwiY2xzLTYzN2I4YjMxZjk1ZTg2YjU5YzU3YTJhMS0xXCIgY3g9XCIxMlwiIGN5PVwiMTJcIiByPVwiNi43MVwiPjwvY2lyY2xlPjwvc3ZnPmA7XHJcblxyXG4gICAgICAgIGNvbnN0IHVwY29taW5nQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICB1cGNvbWluZ0J1dHRvbi5jbGFzc0xpc3QuYWRkKFwic2lkZS1iYXItYnV0dG9uXCIpO1xyXG4gICAgICAgIHVwY29taW5nQnV0dG9uLmRhdGFzZXQudHlwZSA9IFwidXBjb21pbmdcIjtcclxuICAgICAgICB1cGNvbWluZ0J1dHRvbi50ZXh0Q29udGVudCA9IFwiVXBjb21pbmdcIjtcclxuICAgICAgICB1cGNvbWluZ0J1dHRvbi5pbm5lckhUTUwgKz0gYDxzdmcgaWQ9XCJMYXllcl8xXCIgZGF0YS1uYW1lPVwiTGF5ZXIgMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3Ryb2tlLXdpZHRoPVwiMS41XCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgY29sb3I9XCIjMDAwMDAwXCI+PGRlZnM+PHN0eWxlPi5jbHMtNjM3NGY4ZDliNjdmMDk0ZTQ4OTZjNjFhLTF7ZmlsbDpub25lO3N0cm9rZTpjdXJyZW50Q29sb3I7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fTwvc3R5bGU+PC9kZWZzPjxyZWN0IGNsYXNzPVwiY2xzLTYzNzRmOGQ5YjY3ZjA5NGU0ODk2YzYxYS0xXCIgeD1cIjEuNDhcIiB5PVwiMy4zN1wiIHdpZHRoPVwiMjEuMDRcIiBoZWlnaHQ9XCI0Ljc4XCI+PC9yZWN0PjxyZWN0IGNsYXNzPVwiY2xzLTYzNzRmOGQ5YjY3ZjA5NGU0ODk2YzYxYS0xXCIgeD1cIjEuNDhcIiB5PVwiOC4xNVwiIHdpZHRoPVwiMjEuMDRcIiBoZWlnaHQ9XCIxNC4zNVwiPjwvcmVjdD48bGluZSBjbGFzcz1cImNscy02Mzc0ZjhkOWI2N2YwOTRlNDg5NmM2MWEtMVwiIHgxPVwiNS4zXCIgeTE9XCIxMi45M1wiIHgyPVwiNy4yMlwiIHkyPVwiMTIuOTNcIj48L2xpbmU+PGxpbmUgY2xhc3M9XCJjbHMtNjM3NGY4ZDliNjdmMDk0ZTQ4OTZjNjFhLTFcIiB4MT1cIjkuMTNcIiB5MT1cIjEyLjkzXCIgeDI9XCIxMS4wNFwiIHkyPVwiMTIuOTNcIj48L2xpbmU+PGxpbmUgY2xhc3M9XCJjbHMtNjM3NGY4ZDliNjdmMDk0ZTQ4OTZjNjFhLTFcIiB4MT1cIjEyLjk2XCIgeTE9XCIxMi45M1wiIHgyPVwiMTQuODdcIiB5Mj1cIjEyLjkzXCI+PC9saW5lPjxsaW5lIGNsYXNzPVwiY2xzLTYzNzRmOGQ5YjY3ZjA5NGU0ODk2YzYxYS0xXCIgeDE9XCIxNi43OFwiIHkxPVwiMTIuOTNcIiB4Mj1cIjE4LjdcIiB5Mj1cIjEyLjkzXCI+PC9saW5lPjxsaW5lIGNsYXNzPVwiY2xzLTYzNzRmOGQ5YjY3ZjA5NGU0ODk2YzYxYS0xXCIgeDE9XCIxNi43OFwiIHkxPVwiMTcuNzJcIiB4Mj1cIjE4LjdcIiB5Mj1cIjE3LjcyXCI+PC9saW5lPjxsaW5lIGNsYXNzPVwiY2xzLTYzNzRmOGQ5YjY3ZjA5NGU0ODk2YzYxYS0xXCIgeDE9XCI1LjNcIiB5MT1cIjE3LjcyXCIgeDI9XCI3LjIyXCIgeTI9XCIxNy43MlwiPjwvbGluZT48bGluZSBjbGFzcz1cImNscy02Mzc0ZjhkOWI2N2YwOTRlNDg5NmM2MWEtMVwiIHgxPVwiOS4xM1wiIHkxPVwiMTcuNzJcIiB4Mj1cIjExLjA0XCIgeTI9XCIxNy43MlwiPjwvbGluZT48bGluZSBjbGFzcz1cImNscy02Mzc0ZjhkOWI2N2YwOTRlNDg5NmM2MWEtMVwiIHgxPVwiMTIuOTZcIiB5MT1cIjE3LjcyXCIgeDI9XCIxNC44N1wiIHkyPVwiMTcuNzJcIj48L2xpbmU+PGxpbmUgY2xhc3M9XCJjbHMtNjM3NGY4ZDliNjdmMDk0ZTQ4OTZjNjFhLTFcIiB4MT1cIjYuMjZcIiB5MT1cIjAuNVwiIHgyPVwiNi4yNlwiIHkyPVwiNS4yOFwiPjwvbGluZT48bGluZSBjbGFzcz1cImNscy02Mzc0ZjhkOWI2N2YwOTRlNDg5NmM2MWEtMVwiIHgxPVwiMTJcIiB5MT1cIjAuNVwiIHgyPVwiMTJcIiB5Mj1cIjUuMjhcIj48L2xpbmU+PGxpbmUgY2xhc3M9XCJjbHMtNjM3NGY4ZDliNjdmMDk0ZTQ4OTZjNjFhLTFcIiB4MT1cIjE3Ljc0XCIgeTE9XCIwLjVcIiB4Mj1cIjE3Ljc0XCIgeTI9XCI1LjI4XCI+PC9saW5lPjwvc3ZnPmA7XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbXBsZXRlZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgY29tcGxldGVkQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJzaWRlLWJhci1idXR0b25cIik7XHJcbiAgICAgICAgY29tcGxldGVkQnV0dG9uLmRhdGFzZXQudHlwZSA9IFwiY29tcGxldGVkXCI7XHJcbiAgICAgICAgY29tcGxldGVkQnV0dG9uLnRleHRDb250ZW50ID0gXCJDb21wbGV0ZWRcIjtcclxuICAgICAgICBjb21wbGV0ZWRCdXR0b24uaW5uZXJIVE1MICs9IGA8c3ZnIGlkPVwiTGF5ZXJfMVwiIGRhdGEtbmFtZT1cIkxheWVyIDFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0cm9rZS13aWR0aD1cIjEuNVwiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIGNvbG9yPVwiIzAwMDAwMFwiPjxkZWZzPjxzdHlsZT4uY2xzLTYzNzRmOGQ5YjY3ZjA5NGU0ODk2YzYyNS0xe2ZpbGw6bm9uZTtzdHJva2U6Y3VycmVudENvbG9yO3N0cm9rZS1taXRlcmxpbWl0OjEwO308L3N0eWxlPjwvZGVmcz48cGF0aCBjbGFzcz1cImNscy02Mzc0ZjhkOWI2N2YwOTRlNDg5NmM2MjUtMVwiIGQ9XCJNMjAuNTksMTQuODZWMTAuMDlBOC42LDguNiwwLDAsMCwxMiwxLjVoMGE4LjYsOC42LDAsMCwwLTguNTksOC41OXY0Ljc3TDEuNSwxNi43N3YxLjkxaDIxVjE2Ljc3WlwiPjwvcGF0aD48cGF0aCBjbGFzcz1cImNscy02Mzc0ZjhkOWI2N2YwOTRlNDg5NmM2MjUtMVwiIGQ9XCJNMTQuNjksMTguNjhhMi41NSwyLjU1LDAsMCwxLC4xNywxLDIuODYsMi44NiwwLDAsMS01LjcyLDAsMi41NSwyLjU1LDAsMCwxLC4xNy0xXCI+PC9wYXRoPjxwb2x5bGluZSBjbGFzcz1cImNscy02Mzc0ZjhkOWI2N2YwOTRlNDg5NmM2MjUtMVwiIHBvaW50cz1cIjE0LjcgOC4zNCAxMC41NyAxMi40OCA4LjM0IDEwLjI1XCI+PC9wb2x5bGluZT48L3N2Zz5gO1xyXG5cclxuICAgICAgICBwcmltYXJ5QnV0dG9ucy5hcHBlbmQoaW5ib3hCdXR0b24pO1xyXG4gICAgICAgIHByaW1hcnlCdXR0b25zLmFwcGVuZCh0b2RheUJ1dHRvbik7XHJcbiAgICAgICAgcHJpbWFyeUJ1dHRvbnMuYXBwZW5kKHVwY29taW5nQnV0dG9uKTtcclxuICAgICAgICBwcmltYXJ5QnV0dG9ucy5hcHBlbmQoY29tcGxldGVkQnV0dG9uKTtcclxuXHJcbiAgICAgICAgY29uc3QgcHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHByb2plY3RzQ29udGFpbmVyLmlkID0gXCJwcm9qZWN0cy1jb250YWluZXJcIjtcclxuXHJcbiAgICAgICAgY29uc3QgdGFza0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgdGFza0hlYWRlci5pZCA9IFwidGFzay1oZWFkZXJcIjtcclxuXHJcbiAgICAgICAgY29uc3QgdGFza0hlYWRlclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gICAgICAgIHRhc2tIZWFkZXJUaXRsZS50ZXh0Q29udGVudCA9IFwiUHJvamVjdHNcIjtcclxuXHJcbiAgICAgICAgY29uc3QgY3JlYXRlUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgY3JlYXRlUHJvamVjdEJ1dHRvbi5pZCA9IFwiY3JlYXRlLXByb2plY3RcIjtcclxuICAgICAgICBjcmVhdGVQcm9qZWN0QnV0dG9uLnRleHRDb250ZW50ID0gXCIrXCI7XHJcblxyXG4gICAgICAgIHRhc2tIZWFkZXIuYXBwZW5kQ2hpbGQodGFza0hlYWRlclRpdGxlKTtcclxuICAgICAgICB0YXNrSGVhZGVyLmFwcGVuZENoaWxkKGNyZWF0ZVByb2plY3RCdXR0b24pO1xyXG5cclxuICAgICAgICBjb25zdCBzaG93UHJvamVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHNob3dQcm9qZWN0cy5pZCA9IFwic2hvdy1wcm9qZWN0c1wiO1xyXG5cclxuICAgICAgICBwcm9qZWN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrSGVhZGVyKTtcclxuICAgICAgICBwcm9qZWN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChzaG93UHJvamVjdHMpO1xyXG5cclxuICAgICAgICBzaWRlQmFyLmFwcGVuZENoaWxkKGFwcFRpdGxlKTtcclxuICAgICAgICBzaWRlQmFyLmFwcGVuZENoaWxkKHByaW1hcnlCdXR0b25zKTtcclxuICAgICAgICBzaWRlQmFyLmFwcGVuZENoaWxkKHByb2plY3RzQ29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgY29udGVudC5pZCA9IFwiY29udGVudFwiO1xyXG5cclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc2lkZUJhcik7XHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xyXG5cclxuICAgICAgICBtYWluLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChhcHBUaXRsZSk7XHJcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChjb250YWluZXIpO1xyXG5cclxuICAgICAgICBiaW5kRXZlbnRzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYmluZEV2ZW50cygpIHtcclxuICAgICAgICBoYW5kbGVQcmltYXJ5QnV0dG9uc0NsaWNrKCk7XHJcbiAgICAgICAgZGlzcGxheVByb2plY3RJbnB1dCgpO1xyXG4gICAgICAgIGhhbmRsZVByb2plY3RCdXR0b25zQ2xpY2soKTtcclxuICAgICAgICBjaGVja0FjdGl2ZVRpbGUoKTtcclxuICAgICAgICByZW5kZXJQcm9qZWN0cygpO1xyXG4gICAgICAgIHJlbmRlckluYm94KCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlUHJpbWFyeUJ1dHRvbnNDbGljaygpIHtcclxuICAgICAgICBjb25zdCBwcmltYXJ5QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2lkZS1iYXItYnV0dG9uXCIpO1xyXG4gICAgICAgIHByaW1hcnlCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xyXG4gICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZS50YXJnZXQuZGF0YXNldC52YWx1ZSA9PT0gXCIwXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZW5kZXJJbmJveCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldC5kYXRhc2V0LnR5cGUgPT09IFwidG9kYXlcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlclRvZGF5VGFzaygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldC5kYXRhc2V0LnR5cGUgPT09IFwidXBjb21pbmdcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlclVwY29taW5nKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0LmRhdGFzZXQudHlwZSA9PT0gXCJjb21wbGV0ZWRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlckNvbXBsZXRlZCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZW5kZXJJbmJveCgpIHtcclxuICAgICAgICBjb25zdCB0YXNrUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcclxuICAgICAgICB0YXNrUGFnZS5pbm5lckhUTUwgPSBcIlwiO1xyXG5cclxuICAgICAgICAvLyBDcmVhdGUgPGgyPiBlbGVtZW50XHJcbiAgICAgICAgY29uc3QgbGlzdEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAgICAgICBsaXN0SGVhZGVyLmlkID0gXCJsaXN0LWhlYWRlclwiO1xyXG4gICAgICAgIGxpc3RIZWFkZXIudGV4dENvbnRlbnQgPSBjdXJyZW50UHJvamVjdHNbMF0ubmFtZTtcclxuICAgICAgICB0YXNrUGFnZS5hcHBlbmRDaGlsZChsaXN0SGVhZGVyKTtcclxuXHJcbiAgICAgICAgLy8gQ3JlYXRlIDxmb3JtPiBlbGVtZW50XHJcbiAgICAgICAgY29uc3QgdGFza0lucHV0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xyXG4gICAgICAgIHRhc2tJbnB1dEZvcm0uYWN0aW9uID0gXCJcIjtcclxuICAgICAgICB0YXNrSW5wdXRGb3JtLmlkID0gXCJ0YXNrLWlucHV0LWZvcm1cIjtcclxuICAgICAgICB0YXNrUGFnZS5hcHBlbmRDaGlsZCh0YXNrSW5wdXRGb3JtKTtcclxuXHJcbiAgICAgICAgLy8gQ3JlYXRlIHRhc2sgbmFtZSBpbnB1dFxyXG4gICAgICAgIGNvbnN0IHRhc2tOYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgdGFza05hbWVJbnB1dC50eXBlID0gXCJ0ZXh0XCI7XHJcbiAgICAgICAgdGFza05hbWVJbnB1dC5pZCA9IFwidGFzay1uYW1lLWlucHV0XCI7XHJcbiAgICAgICAgdGFza05hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJyZXF1aXJlZFwiLCBcIlwiKTtcclxuICAgICAgICB0YXNrSW5wdXRGb3JtLmFwcGVuZENoaWxkKHRhc2tOYW1lSW5wdXQpO1xyXG5cclxuICAgICAgICAvLyBDcmVhdGUgdGFzayBkYXRlIGlucHV0XHJcbiAgICAgICAgY29uc3QgdGFza0RhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgICB0YXNrRGF0ZUlucHV0LnR5cGUgPSBcImRhdGVcIjtcclxuICAgICAgICB0YXNrSW5wdXRGb3JtLmFwcGVuZENoaWxkKHRhc2tEYXRlSW5wdXQpO1xyXG5cclxuICAgICAgICAvLyBDcmVhdGUgcHJpb3JpdHkgc2VsZWN0XHJcbiAgICAgICAgY29uc3QgcHJpb3JpdHlTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xyXG4gICAgICAgIHRhc2tJbnB1dEZvcm0uYXBwZW5kQ2hpbGQocHJpb3JpdHlTZWxlY3QpO1xyXG5cclxuICAgICAgICAvLyBDcmVhdGUgc2VsZWN0IG9wdGlvbnNcclxuICAgICAgICBjb25zdCBzZWxlY3RPcHRpb25zID0gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogXCJkZWZhdWx0XCIsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIi0tU2VsZWN0IFByaW9yaXR5LS1cIixcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6IHRydWUsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwibG93XCIsIHRleHQ6IFwiTG93XCIgfSxcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCJtZWRpdW1cIiwgdGV4dDogXCJNZWRpdW1cIiB9LFxyXG4gICAgICAgICAgICB7IHZhbHVlOiBcImhpZ2hcIiwgdGV4dDogXCJIaWdoXCIgfSxcclxuICAgICAgICBdO1xyXG5cclxuICAgICAgICBzZWxlY3RPcHRpb25zLmZvckVhY2goKG9wdGlvbikgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBzZWxlY3RPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xyXG4gICAgICAgICAgICBzZWxlY3RPcHRpb24udmFsdWUgPSBvcHRpb24udmFsdWU7XHJcbiAgICAgICAgICAgIHNlbGVjdE9wdGlvbi50ZXh0Q29udGVudCA9IG9wdGlvbi50ZXh0O1xyXG4gICAgICAgICAgICBzZWxlY3RPcHRpb24uc2VsZWN0ZWQgPSBvcHRpb24uc2VsZWN0ZWQ7XHJcbiAgICAgICAgICAgIHNlbGVjdE9wdGlvbi5kaXNhYmxlZCA9IG9wdGlvbi5kaXNhYmxlZDtcclxuICAgICAgICAgICAgcHJpb3JpdHlTZWxlY3QuYXBwZW5kQ2hpbGQoc2VsZWN0T3B0aW9uKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgIHN1Ym1pdEJ1dHRvbi50eXBlID0gXCJzdWJtaXRcIjtcclxuICAgICAgICBzdWJtaXRCdXR0b24uaWQgPSBcImFkZC10YXNrLWJ1dHRvblwiO1xyXG4gICAgICAgIHN1Ym1pdEJ1dHRvbi52YWx1ZSA9IFwiICsgQWRkIFRhc2tcIjtcclxuICAgICAgICB0YXNrSW5wdXRGb3JtLmFwcGVuZENoaWxkKHN1Ym1pdEJ1dHRvbik7XHJcblxyXG4gICAgICAgIC8vIENyZWF0ZSA8ZGl2PiBmb3IgcmVuZGVyaW5nIHRhc2tzXHJcbiAgICAgICAgY29uc3QgcmVuZGVyVGFza3NDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHJlbmRlclRhc2tzQ29udGFpbmVyLmlkID0gXCJyZW5kZXItdGFza3NcIjtcclxuICAgICAgICB0YXNrUGFnZS5hcHBlbmRDaGlsZChyZW5kZXJUYXNrc0NvbnRhaW5lcik7XHJcblxyXG4gICAgICAgIHRhc2tJbnB1dEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoaW5wdXRFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpbnB1dEV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhc2tOYW1lID0gdGFza05hbWVJbnB1dC52YWx1ZTtcclxuICAgICAgICAgICAgY29uc3QgdGFza0RhdGUgPSB0YXNrRGF0ZUlucHV0LnZhbHVlO1xyXG4gICAgICAgICAgICBjb25zdCB0YXNrUHJpb3JpdHkgPSBwcmlvcml0eVNlbGVjdC52YWx1ZTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHRhc2tPYmplY3QgPSBjcmVhdGVUYXNrKDAsIHRhc2tOYW1lLCB0YXNrRGF0ZSwgdGFza1ByaW9yaXR5KTtcclxuXHJcbiAgICAgICAgICAgIGN1cnJlbnRQcm9qZWN0c1swXS50YXNrcy5wdXNoKHRhc2tPYmplY3QpO1xyXG4gICAgICAgICAgICBjdXJyZW50UHJvamVjdHNbMF0udGFza3Muc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0ZTEgPSBuZXcgRGF0ZShhLmRlYWRsaW5lKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGUyID0gbmV3IERhdGUoYi5kZWFkbGluZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGUxIC0gZGF0ZTI7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcclxuICAgICAgICAgICAgICAgIFwicHJvamVjdHNMaXN0XCIsXHJcbiAgICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeShjdXJyZW50UHJvamVjdHMpXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICByZW5kZXJUYXNrcygwKTtcclxuICAgICAgICAgICAgdGFza0lucHV0Rm9ybS5yZXNldCgpO1xyXG4gICAgICAgICAgICBwcmlvcml0eVNlbGVjdC52YWx1ZSA9IFwiZGVmYXVsdFwiO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZW5kZXJUYXNrcygwKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkaXNwbGF5UHJvamVjdElucHV0KCkge1xyXG4gICAgICAgIGNvbnN0IHRhc2tIZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2staGVhZGVyXCIpO1xyXG5cclxuICAgICAgICB0YXNrSGVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZS50YXJnZXQgJiYgZS50YXJnZXQubWF0Y2hlcyhcImJ1dHRvbiNjcmVhdGUtcHJvamVjdFwiKSkge1xyXG4gICAgICAgICAgICAgICAgdGFza0hlYWRlci5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaW5wdXRQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgICAgIGlucHV0UHJvamVjdC5pZCA9IFwiaW5wdXQtcHJvamVjdFwiO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3ROYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgICAgICAgICBwcm9qZWN0TmFtZUlucHV0LnR5cGUgPSBcInRleHRcIjtcclxuICAgICAgICAgICAgICAgIHByb2plY3ROYW1lSW5wdXQuaWQgPSBcInByb2plY3QtbmFtZS1pbnB1dFwiO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgICAgICAgICAgYWRkUHJvamVjdEJ1dHRvbi5pZCA9IFwiYWRkLXByb2plY3RcIjtcclxuICAgICAgICAgICAgICAgIGFkZFByb2plY3RCdXR0b24udGV4dENvbnRlbnQgPSBcIuKck1wiO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGNhbmNlbElucHV0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICAgICAgICAgIGNhbmNlbElucHV0QnV0dG9uLmlkID0gXCJjYW5jZWwtaW5wdXRcIjtcclxuICAgICAgICAgICAgICAgIGNhbmNlbElucHV0QnV0dG9uLnRleHRDb250ZW50ID0gXCJYXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgW2FkZFByb2plY3RCdXR0b24sIGNhbmNlbElucHV0QnV0dG9uXS5mb3JFYWNoKChidXR0b24pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFza0hlYWRlci5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrSGVhZGVyLmlkID0gXCJ0YXNrLWhlYWRlclwiO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFza0hlYWRlclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrSGVhZGVyVGl0bGUudGV4dENvbnRlbnQgPSBcIlByb2plY3RzXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjcmVhdGVQcm9qZWN0QnV0dG9uID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZVByb2plY3RCdXR0b24uaWQgPSBcImNyZWF0ZS1wcm9qZWN0XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZVByb2plY3RCdXR0b24udGV4dENvbnRlbnQgPSBcIitcIjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tIZWFkZXIuYXBwZW5kQ2hpbGQodGFza0hlYWRlclRpdGxlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFza0hlYWRlci5hcHBlbmRDaGlsZChjcmVhdGVQcm9qZWN0QnV0dG9uKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGFkZFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocHJvamVjdE5hbWVJbnB1dC52YWx1ZSA9PT0gXCJcIikgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZFByb2plY3QocHJvamVjdE5hbWVJbnB1dC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdE5hbWVJbnB1dC52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyUHJvamVjdHMoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHByb2plY3ROYW1lSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXByZXNzXCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChldmVudC5rZXkgPT09IFwiRW50ZXJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRQcm9qZWN0QnV0dG9uLmNsaWNrKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaW5wdXRQcm9qZWN0LmFwcGVuZENoaWxkKHByb2plY3ROYW1lSW5wdXQpO1xyXG4gICAgICAgICAgICAgICAgaW5wdXRQcm9qZWN0LmFwcGVuZENoaWxkKGFkZFByb2plY3RCdXR0b24pO1xyXG4gICAgICAgICAgICAgICAgaW5wdXRQcm9qZWN0LmFwcGVuZENoaWxkKGNhbmNlbElucHV0QnV0dG9uKTtcclxuICAgICAgICAgICAgICAgIHRhc2tIZWFkZXIuYXBwZW5kQ2hpbGQoaW5wdXRQcm9qZWN0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNoZWNrQWN0aXZlVGlsZSgpIHtcclxuICAgICAgICBjb25zdCBzaWRlQmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWRlLWJhclwiKTtcclxuICAgICAgICBzaWRlQmFyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZS50YXJnZXQgJiYgZS50YXJnZXQubWF0Y2hlcyhcImJ1dHRvbi5zaWRlLWJhci1idXR0b25cIikpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3RDYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdC1jYXJkXCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2lkZUJhckJ1dHRvbnMgPVxyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2lkZS1iYXItYnV0dG9uXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIHByb2plY3RDYXJkcy5mb3JFYWNoKChjYXJkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FyZC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlVGlsZVwiKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHNpZGVCYXJCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlVGlsZVwiKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVUaWxlXCIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoZS50YXJnZXQgJiYgZS50YXJnZXQuY2xvc2VzdChcImRpdi5wcm9qZWN0LWNhcmRcIikpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3RDYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdC1jYXJkXCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2lkZUJhckJ1dHRvbnMgPVxyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2lkZS1iYXItYnV0dG9uXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIHByb2plY3RDYXJkcy5mb3JFYWNoKChjYXJkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FyZC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlVGlsZVwiKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHNpZGVCYXJCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlVGlsZVwiKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGUudGFyZ2V0XHJcbiAgICAgICAgICAgICAgICAgICAgLmNsb3Nlc3QoXCJkaXYucHJvamVjdC1jYXJkXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVUaWxlXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVuZGVyUHJvamVjdHMoKSB7XHJcbiAgICAgICAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2hvdy1wcm9qZWN0c1wiKTtcclxuICAgICAgICBwcm9qZWN0Q29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgbGV0IGFjY3VtdWxhdG9yID0gMTtcclxuICAgICAgICBjdXJyZW50UHJvamVjdHMuc2xpY2UoMSkuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIHByb2plY3RDYXJkLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWNhcmRcIik7XHJcbiAgICAgICAgICAgIHByb2plY3RDYXJkLmRhdGFzZXQudmFsdWUgPSBhY2N1bXVsYXRvcjtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgICAgIHByb2plY3ROYW1lLnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgICAgIGVkaXRCdXR0b24uY2xhc3NMaXN0LmFkZChcImVkaXQtYnV0dG9uXCIpO1xyXG4gICAgICAgICAgICBjb25zdCBlZGl0QnV0dG9uU3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFxyXG4gICAgICAgICAgICAgICAgXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxyXG4gICAgICAgICAgICAgICAgXCJzdmdcIlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBlZGl0QnV0dG9uU3ZnLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIFwiMjRcIik7XHJcbiAgICAgICAgICAgIGVkaXRCdXR0b25Tdmcuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIFwiMjRcIik7XHJcbiAgICAgICAgICAgIGVkaXRCdXR0b25Tdmcuc2V0QXR0cmlidXRlKFwidmlld0JveFwiLCBcIjAgMCAyNCAyNFwiKTtcclxuICAgICAgICAgICAgZWRpdEJ1dHRvblN2Zy5zZXRBdHRyaWJ1dGUoXCJmaWxsXCIsIFwibm9uZVwiKTtcclxuICAgICAgICAgICAgY29uc3QgZWRpdEJ1dHRvblBhdGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFxyXG4gICAgICAgICAgICAgICAgXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxyXG4gICAgICAgICAgICAgICAgXCJwYXRoXCJcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgZWRpdEJ1dHRvblBhdGgxLnNldEF0dHJpYnV0ZShcclxuICAgICAgICAgICAgICAgIFwiZFwiLFxyXG4gICAgICAgICAgICAgICAgXCJNMTIuNSA3LjVMNS45MjgxOSAxNC4wNzE4QzUuNzE1NjYgMTQuMjg0MyA1LjYwOTM5IDE0LjM5MDYgNS41Mzk1MyAxNC41MjEyQzUuNDY5NjYgMTQuNjUxNyA1LjQ0MDE5IDE0Ljc5OTEgNS4zODEyNCAxNS4wOTM4TDQuNjQ3MDkgMTguNzY0NkM0LjU4MDU3IDE5LjA5NzIgNC41NDczIDE5LjI2MzUgNC42NDE5MSAxOS4zNTgxQzQuNzM2NTIgMTkuNDUyNyA0LjkwMjgzIDE5LjQxOTQgNS4yMzU0NCAxOS4zNTI5TDguOTA2MjEgMTguNjE4OEM5LjIwMDkzIDE4LjU1OTggOS4zNDgzIDE4LjUzMDMgOS40Nzg4NSAxOC40NjA1QzkuNjA5MzkgMTguMzkwNiA5LjcxNTY2IDE4LjI4NDMgOS45MjgxOSAxOC4wNzE4TDE2LjUgMTEuNUwxMi41IDcuNVpcIlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBlZGl0QnV0dG9uUGF0aDEuc2V0QXR0cmlidXRlKFwiZmlsbFwiLCBcIiM3RTg2OUVcIik7XHJcbiAgICAgICAgICAgIGVkaXRCdXR0b25QYXRoMS5zZXRBdHRyaWJ1dGUoXCJmaWxsLW9wYWNpdHlcIiwgXCIwLjI1XCIpO1xyXG4gICAgICAgICAgICBjb25zdCBlZGl0QnV0dG9uUGF0aDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXHJcbiAgICAgICAgICAgICAgICBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXHJcbiAgICAgICAgICAgICAgICBcInBhdGhcIlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBlZGl0QnV0dG9uUGF0aDIuc2V0QXR0cmlidXRlKFxyXG4gICAgICAgICAgICAgICAgXCJkXCIsXHJcbiAgICAgICAgICAgICAgICBcIk01Ljk1Mzk2IDE5LjM4TDUuOTUzOTcgMTkuMzhMNS45ODAxIDE5LjM3MzRMNS45ODAxMiAxOS4zNzM0TDguNjA4MDkgMTguNzE2NEM4LjYyNDI4IDE4LjcxMjQgOC42NDA0MyAxOC43MDg0IDguNjU2NTQgMTguNzA0NEM4Ljg3NTMxIDE4LjY1IDkuMDg1NjIgMTguNTk3OCA5LjI3NzA3IDE4LjQ4OTRDOS40Njg1MiAxOC4zODEgOS42MjE1MyAxOC4yMjc1IDkuNzgwNyAxOC4wNjc5QzkuNzkyNDIgMTguMDU2MSA5LjgwNDE4IDE4LjA0NDQgOS44MTU5OCAxOC4wMzI1TDE3LjAxMDEgMTAuODM4NUwxNy4wMTAxIDEwLjgzODVMMTcuMDM2OSAxMC44MTE3QzE3LjM0NzIgMTAuNTAxNCAxNy42MjE1IDEwLjIyNzIgMTcuODEyOCA5Ljk3NjM4QzE4LjAyMDIgOS43MDQ1NyAxOC4xODU4IDkuMzkxMDQgMTguMTg1OCA5QzE4LjE4NTggOC42MDg5NiAxOC4wMjAyIDguMjk1NDMgMTcuODEyOCA4LjAyMzYxQzE3LjYyMTUgNy43NzI4NSAxNy4zNDcyIDcuNDk4NjMgMTcuMDM2OSA3LjE4ODM1TDE3LjAxIDcuMTYxNTJMMTYuODM4NSA2Ljk4OTk1TDE2LjgxMTcgNi45NjMxNEMxNi41MDE0IDYuNjUyOCAxNi4yMjcyIDYuMzc4NTMgMTUuOTc2NCA2LjE4NzJDMTUuNzA0NiA1Ljk3OTgxIDE1LjM5MSA1LjgxNDIxIDE1IDUuODE0MjFDMTQuNjA5IDUuODE0MjEgMTQuMjk1NCA1Ljk3OTgxIDE0LjAyMzYgNi4xODcyQzEzLjc3MjkgNi4zNzg1MyAxMy40OTg2IDYuNjUyNzggMTMuMTg4NCA2Ljk2MzExTDEzLjE2MTUgNi45ODk5NUw1Ljk2NzQ1IDE0LjE4NEM1Ljk1NTY1IDE0LjE5NTggNS45NDM4NiAxNC4yMDc2IDUuOTMyMTEgMTQuMjE5M0M1Ljc3MjQ5IDE0LjM3ODUgNS42MTkwNCAxNC41MzE1IDUuNTEwNjQgMTQuNzIyOUM1LjQwMjI1IDE0LjkxNDQgNS4zNDk5OSAxNS4xMjQ3IDUuMjk1NjIgMTUuMzQzNUM1LjI5MTYyIDE1LjM1OTYgNS4yODc2MSAxNS4zNzU3IDUuMjgzNTYgMTUuMzkxOUw0LjYyMDAzIDE4LjA0NkM0LjYxNzYyIDE4LjA1NTcgNC42MTUxOCAxOC4wNjU0IDQuNjEyNzIgMTguMDc1MkM0LjU3NDExIDE4LjIyOTMgNC41MzA0NCAxOC40MDM1IDQuNTE1OTMgMTguNTUxOEM0LjQ5OTc4IDE4LjcxNjkgNC41MDEyNyAxOS4wMTYyIDQuNzQyNTUgMTkuMjU3NEM0Ljk4MzgzIDE5LjQ5ODcgNS4yODMwNyAxOS41MDAyIDUuNDQ4MTkgMTkuNDg0MUM1LjU5NjQ2IDE5LjQ2OTYgNS43NzA3MiAxOS40MjU5IDUuOTI0NzkgMTkuMzg3M0M1LjkzNDYgMTkuMzg0OCA1Ljk0NDMzIDE5LjM4MjQgNS45NTM5NiAxOS4zOFpcIlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBlZGl0QnV0dG9uUGF0aDIuc2V0QXR0cmlidXRlKFwic3Ryb2tlXCIsIFwiIzMzMzYzRlwiKTtcclxuICAgICAgICAgICAgZWRpdEJ1dHRvblBhdGgyLnNldEF0dHJpYnV0ZShcInN0cm9rZS13aWR0aFwiLCBcIjEuMlwiKTtcclxuICAgICAgICAgICAgY29uc3QgZWRpdEJ1dHRvblBhdGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFxyXG4gICAgICAgICAgICAgICAgXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxyXG4gICAgICAgICAgICAgICAgXCJwYXRoXCJcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgZWRpdEJ1dHRvblBhdGgzLnNldEF0dHJpYnV0ZShcImRcIiwgXCJNMTIuNSA3LjVMMTYuNSAxMS41XCIpO1xyXG4gICAgICAgICAgICBlZGl0QnV0dG9uUGF0aDMuc2V0QXR0cmlidXRlKFwic3Ryb2tlXCIsIFwiIzMzMzYzRlwiKTtcclxuICAgICAgICAgICAgZWRpdEJ1dHRvblBhdGgzLnNldEF0dHJpYnV0ZShcInN0cm9rZS13aWR0aFwiLCBcIjEuMlwiKTtcclxuXHJcbiAgICAgICAgICAgIGVkaXRCdXR0b25TdmcuYXBwZW5kQ2hpbGQoZWRpdEJ1dHRvblBhdGgxKTtcclxuICAgICAgICAgICAgZWRpdEJ1dHRvblN2Zy5hcHBlbmRDaGlsZChlZGl0QnV0dG9uUGF0aDIpO1xyXG4gICAgICAgICAgICBlZGl0QnV0dG9uU3ZnLmFwcGVuZENoaWxkKGVkaXRCdXR0b25QYXRoMyk7XHJcbiAgICAgICAgICAgIGVkaXRCdXR0b24uYXBwZW5kQ2hpbGQoZWRpdEJ1dHRvblN2Zyk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgICAgICBkZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZChcImRlbGV0ZS1wcm9qZWN0XCIpO1xyXG4gICAgICAgICAgICBjb25zdCBkZWxldGVCdXR0b25TdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXHJcbiAgICAgICAgICAgICAgICBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXHJcbiAgICAgICAgICAgICAgICBcInN2Z1wiXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGRlbGV0ZUJ1dHRvblN2Zy5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBcIjI0XCIpO1xyXG4gICAgICAgICAgICBkZWxldGVCdXR0b25Tdmcuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIFwiMjRcIik7XHJcbiAgICAgICAgICAgIGRlbGV0ZUJ1dHRvblN2Zy5zZXRBdHRyaWJ1dGUoXCJ2aWV3Qm94XCIsIFwiMCAwIDI0IDI0XCIpO1xyXG4gICAgICAgICAgICBkZWxldGVCdXR0b25Tdmcuc2V0QXR0cmlidXRlKFwiZmlsbFwiLCBcIm5vbmVcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZUJ1dHRvblBhdGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFxyXG4gICAgICAgICAgICAgICAgXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxyXG4gICAgICAgICAgICAgICAgXCJwYXRoXCJcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgZGVsZXRlQnV0dG9uUGF0aDEuc2V0QXR0cmlidXRlKFwiZFwiLCBcIk0xOCA2TDYgMThcIik7XHJcbiAgICAgICAgICAgIGRlbGV0ZUJ1dHRvblBhdGgxLnNldEF0dHJpYnV0ZShcInN0cm9rZVwiLCBcIiMzMzM2M0ZcIik7XHJcbiAgICAgICAgICAgIGRlbGV0ZUJ1dHRvblBhdGgxLnNldEF0dHJpYnV0ZShcInN0cm9rZS13aWR0aFwiLCBcIjJcIik7XHJcbiAgICAgICAgICAgIGRlbGV0ZUJ1dHRvblBhdGgxLnNldEF0dHJpYnV0ZShcInN0cm9rZS1saW5lY2FwXCIsIFwicm91bmRcIik7XHJcbiAgICAgICAgICAgIGRlbGV0ZUJ1dHRvblBhdGgxLnNldEF0dHJpYnV0ZShcInN0cm9rZS1saW5lam9pblwiLCBcInJvdW5kXCIpO1xyXG4gICAgICAgICAgICBjb25zdCBkZWxldGVCdXR0b25QYXRoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcclxuICAgICAgICAgICAgICAgIFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcclxuICAgICAgICAgICAgICAgIFwicGF0aFwiXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGRlbGV0ZUJ1dHRvblBhdGgyLnNldEF0dHJpYnV0ZShcImRcIiwgXCJNNiA2TDE4IDE4XCIpO1xyXG4gICAgICAgICAgICBkZWxldGVCdXR0b25QYXRoMi5zZXRBdHRyaWJ1dGUoXCJzdHJva2VcIiwgXCIjMzMzNjNGXCIpO1xyXG4gICAgICAgICAgICBkZWxldGVCdXR0b25QYXRoMi5zZXRBdHRyaWJ1dGUoXCJzdHJva2Utd2lkdGhcIiwgXCIyXCIpO1xyXG4gICAgICAgICAgICBkZWxldGVCdXR0b25QYXRoMi5zZXRBdHRyaWJ1dGUoXCJzdHJva2UtbGluZWNhcFwiLCBcInJvdW5kXCIpO1xyXG4gICAgICAgICAgICBkZWxldGVCdXR0b25QYXRoMi5zZXRBdHRyaWJ1dGUoXCJzdHJva2UtbGluZWpvaW5cIiwgXCJyb3VuZFwiKTtcclxuXHJcbiAgICAgICAgICAgIGRlbGV0ZUJ1dHRvblN2Zy5hcHBlbmRDaGlsZChkZWxldGVCdXR0b25QYXRoMSk7XHJcbiAgICAgICAgICAgIGRlbGV0ZUJ1dHRvblN2Zy5hcHBlbmRDaGlsZChkZWxldGVCdXR0b25QYXRoMik7XHJcbiAgICAgICAgICAgIGRlbGV0ZUJ1dHRvbi5hcHBlbmRDaGlsZChkZWxldGVCdXR0b25TdmcpO1xyXG5cclxuICAgICAgICAgICAgcHJvamVjdENhcmQuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWUpO1xyXG4gICAgICAgICAgICBwcm9qZWN0Q2FyZC5hcHBlbmRDaGlsZChlZGl0QnV0dG9uKTtcclxuICAgICAgICAgICAgcHJvamVjdENhcmQuYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcclxuICAgICAgICAgICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmQocHJvamVjdENhcmQpO1xyXG5cclxuICAgICAgICAgICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY3VycmVudFByb2plY3RzLnNwbGljZShwcm9qZWN0Q2FyZC5kYXRhc2V0LnZhbHVlLCAxKTtcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxyXG4gICAgICAgICAgICAgICAgICAgIFwicHJvamVjdHNMaXN0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoY3VycmVudFByb2plY3RzKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICByZW5kZXJQcm9qZWN0cygpO1xyXG4gICAgICAgICAgICAgICAgcmVuZGVySW5ib3goKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBlZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0TmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgICAgICAgICAgcHJvamVjdE5hbWVJbnB1dC50eXBlID0gXCJ0ZXh0XCI7XHJcbiAgICAgICAgICAgICAgICBwcm9qZWN0TmFtZUlucHV0Lm5hbWUgPSBcInByb2plY3QtbmFtZS1pbnB1dFwiO1xyXG4gICAgICAgICAgICAgICAgcHJvamVjdE5hbWVJbnB1dC52YWx1ZSA9XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFByb2plY3RzW3Byb2plY3RDYXJkLmRhdGFzZXQudmFsdWVdLm5hbWU7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2F2ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgICAgICAgICBzYXZlQnV0dG9uLmNsYXNzTmFtZSA9IFwiZWRpdC1wcm9qZWN0LW5hbWVcIjtcclxuICAgICAgICAgICAgICAgIHNhdmVCdXR0b24uaW5uZXJUZXh0ID0gXCLinJNcIjtcclxuXHJcbiAgICAgICAgICAgICAgICBzYXZlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWRQcm9qZWN0TmFtZSA9IHByb2plY3ROYW1lSW5wdXQudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFByb2plY3RzW3Byb2plY3RDYXJkLmRhdGFzZXQudmFsdWVdLm5hbWUgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVkUHJvamVjdE5hbWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInByb2plY3RzTGlzdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeShjdXJyZW50UHJvamVjdHMpXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyUHJvamVjdHMoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHByb2plY3RDYXJkLmlubmVySFRNTCA9IFwiXCI7IC8vIENsZWFyIGV4aXN0aW5nIGNvbnRlbnRcclxuICAgICAgICAgICAgICAgIHByb2plY3RDYXJkLmFwcGVuZENoaWxkKHByb2plY3ROYW1lSW5wdXQpO1xyXG4gICAgICAgICAgICAgICAgcHJvamVjdENhcmQuYXBwZW5kQ2hpbGQoc2F2ZUJ1dHRvbik7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgYWNjdW11bGF0b3IgKz0gMTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVQcm9qZWN0QnV0dG9uc0NsaWNrKCkge1xyXG4gICAgICAgIGNvbnN0IHRhc2tQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xyXG4gICAgICAgIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNob3ctcHJvamVjdHNcIik7XHJcbiAgICAgICAgcHJvamVjdENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgaWYgKGUudGFyZ2V0LmNsb3Nlc3QoXCJkaXYucHJvamVjdC1jYXJkXCIpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudFByb2plY3RzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRhc2tQYWdlLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGFza1BhZ2UuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3RDYXJkID0gZS50YXJnZXQuY2xvc2VzdChcImRpdi5wcm9qZWN0LWNhcmRcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gQ3JlYXRlIDxoMj4gZWxlbWVudFxyXG4gICAgICAgICAgICAgICAgY29uc3QgbGlzdEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAgICAgICAgICAgICAgIGxpc3RIZWFkZXIuaWQgPSBcImxpc3QtaGVhZGVyXCI7XHJcbiAgICAgICAgICAgICAgICBsaXN0SGVhZGVyLnRleHRDb250ZW50ID1cclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50UHJvamVjdHNbcHJvamVjdENhcmQuZGF0YXNldC52YWx1ZV0ubmFtZTtcclxuICAgICAgICAgICAgICAgIHRhc2tQYWdlLmFwcGVuZENoaWxkKGxpc3RIZWFkZXIpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIENyZWF0ZSA8Zm9ybT4gZWxlbWVudFxyXG4gICAgICAgICAgICAgICAgY29uc3QgdGFza0lucHV0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xyXG4gICAgICAgICAgICAgICAgdGFza0lucHV0Rm9ybS5hY3Rpb24gPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgdGFza0lucHV0Rm9ybS5pZCA9IFwidGFzay1pbnB1dC1mb3JtXCI7XHJcbiAgICAgICAgICAgICAgICB0YXNrUGFnZS5hcHBlbmRDaGlsZCh0YXNrSW5wdXRGb3JtKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBDcmVhdGUgdGFzayBuYW1lIGlucHV0XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0YXNrTmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgICAgICAgICAgdGFza05hbWVJbnB1dC50eXBlID0gXCJ0ZXh0XCI7XHJcbiAgICAgICAgICAgICAgICB0YXNrTmFtZUlucHV0LmlkID0gXCJ0YXNrLW5hbWUtaW5wdXRcIjtcclxuICAgICAgICAgICAgICAgIHRhc2tOYW1lSW5wdXQuc2V0QXR0cmlidXRlKFwicmVxdWlyZWRcIiwgXCJcIik7XHJcbiAgICAgICAgICAgICAgICB0YXNrSW5wdXRGb3JtLmFwcGVuZENoaWxkKHRhc2tOYW1lSW5wdXQpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIENyZWF0ZSB0YXNrIGRhdGUgaW5wdXRcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tEYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgICAgICAgICB0YXNrRGF0ZUlucHV0LnR5cGUgPSBcImRhdGVcIjtcclxuICAgICAgICAgICAgICAgIHRhc2tJbnB1dEZvcm0uYXBwZW5kQ2hpbGQodGFza0RhdGVJbnB1dCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gQ3JlYXRlIHByaW9yaXR5IHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJpb3JpdHlTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xyXG4gICAgICAgICAgICAgICAgdGFza0lucHV0Rm9ybS5hcHBlbmRDaGlsZChwcmlvcml0eVNlbGVjdCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gQ3JlYXRlIHNlbGVjdCBvcHRpb25zXHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RPcHRpb25zID0gW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwiZGVmYXVsdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIi0tU2VsZWN0IFByaW9yaXR5LS1cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyB2YWx1ZTogXCJsb3dcIiwgdGV4dDogXCJMb3dcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgdmFsdWU6IFwibWVkaXVtXCIsIHRleHQ6IFwiTWVkaXVtXCIgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHZhbHVlOiBcImhpZ2hcIiwgdGV4dDogXCJIaWdoXCIgfSxcclxuICAgICAgICAgICAgICAgIF07XHJcblxyXG4gICAgICAgICAgICAgICAgc2VsZWN0T3B0aW9ucy5mb3JFYWNoKChvcHRpb24pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdE9wdGlvbi52YWx1ZSA9IG9wdGlvbi52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RPcHRpb24udGV4dENvbnRlbnQgPSBvcHRpb24udGV4dDtcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RPcHRpb24uc2VsZWN0ZWQgPSBvcHRpb24uc2VsZWN0ZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0T3B0aW9uLmRpc2FibGVkID0gb3B0aW9uLmRpc2FibGVkO1xyXG4gICAgICAgICAgICAgICAgICAgIHByaW9yaXR5U2VsZWN0LmFwcGVuZENoaWxkKHNlbGVjdE9wdGlvbik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgICAgICAgICBzdWJtaXRCdXR0b24udHlwZSA9IFwic3VibWl0XCI7XHJcbiAgICAgICAgICAgICAgICBzdWJtaXRCdXR0b24uaWQgPSBcImFkZC10YXNrLWJ1dHRvblwiO1xyXG4gICAgICAgICAgICAgICAgc3VibWl0QnV0dG9uLnZhbHVlID0gXCIgKyBBZGQgVGFza1wiO1xyXG4gICAgICAgICAgICAgICAgdGFza0lucHV0Rm9ybS5hcHBlbmRDaGlsZChzdWJtaXRCdXR0b24pO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIENyZWF0ZSA8ZGl2PiBmb3IgcmVuZGVyaW5nIHRhc2tzXHJcbiAgICAgICAgICAgICAgICBjb25zdCByZW5kZXJUYXNrc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgICAgICByZW5kZXJUYXNrc0NvbnRhaW5lci5pZCA9IFwicmVuZGVyLXRhc2tzXCI7XHJcbiAgICAgICAgICAgICAgICB0YXNrUGFnZS5hcHBlbmRDaGlsZChyZW5kZXJUYXNrc0NvbnRhaW5lcik7XHJcblxyXG4gICAgICAgICAgICAgICAgdGFza0lucHV0Rm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChpbnB1dEV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRFdmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tOYW1lID0gdGFza05hbWVJbnB1dC52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXNrRGF0ZSA9IHRhc2tEYXRlSW5wdXQudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFza1ByaW9yaXR5ID0gcHJpb3JpdHlTZWxlY3QudmFsdWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tPYmplY3QgPSBjcmVhdGVUYXNrKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0Q2FyZC5kYXRhc2V0LnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFza0RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tQcmlvcml0eVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQcm9qZWN0c1twcm9qZWN0Q2FyZC5kYXRhc2V0LnZhbHVlXS50YXNrcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrT2JqZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50UHJvamVjdHNbcHJvamVjdENhcmQuZGF0YXNldC52YWx1ZV0udGFza3Muc29ydChcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGUxID0gbmV3IERhdGUoYS5kZWFkbGluZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRlMiA9IG5ldyBEYXRlKGIuZGVhZGxpbmUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRlMSAtIGRhdGUyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicHJvamVjdHNMaXN0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KGN1cnJlbnRQcm9qZWN0cylcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZW5kZXJUYXNrcyhwcm9qZWN0Q2FyZC5kYXRhc2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB0YXNrSW5wdXRGb3JtLnJlc2V0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHlTZWxlY3QudmFsdWUgPSBcImRlZmF1bHRcIjtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHJlbmRlclRhc2tzKHByb2plY3RDYXJkLmRhdGFzZXQudmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVuZGVyVGFza3MoaW5kZXgpIHtcclxuICAgICAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZW5kZXItdGFza3NcIik7XHJcbiAgICAgICAgdGFza0NvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgIGxldCBhY2N1bXVsYXRvciA9IDA7XHJcbiAgICAgICAgY3VycmVudFByb2plY3RzW2luZGV4XS50YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XHJcbiAgICAgICAgICAgIHJlbmRlclRhc2tUb0RPTShcclxuICAgICAgICAgICAgICAgIGluZGV4LFxyXG4gICAgICAgICAgICAgICAgYWNjdW11bGF0b3IsXHJcbiAgICAgICAgICAgICAgICB0YXNrLm5hbWUsXHJcbiAgICAgICAgICAgICAgICB0YXNrLmRlYWRsaW5lLFxyXG4gICAgICAgICAgICAgICAgdGFzay5wcmlvcml0eSxcclxuICAgICAgICAgICAgICAgIHRhc2suY29tcGxldGVkXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGFjY3VtdWxhdG9yICs9IDE7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVuZGVyVGFza1RvRE9NKFxyXG4gICAgICAgIHByb2pJbmRleCxcclxuICAgICAgICB0YXNrSW5kZXgsXHJcbiAgICAgICAgbmFtZSxcclxuICAgICAgICBkYXRlLFxyXG4gICAgICAgIHByaW9yaXR5LFxyXG4gICAgICAgIHN0YXR1c1xyXG4gICAgKSB7XHJcbiAgICAgICAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVuZGVyLXRhc2tzXCIpO1xyXG5cclxuICAgICAgICBjb25zdCB0YXNrQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgdGFza0NhcmQuY2xhc3NOYW1lID0gXCJ0YXNrLWNhcmRcIjtcclxuICAgICAgICB0YXNrQ2FyZC5kYXRhc2V0LnZhbHVlID0gdGFza0luZGV4O1xyXG4gICAgICAgIGlmIChzdGF0dXMpIHtcclxuICAgICAgICAgICAgdGFza0NhcmQuY2xhc3NMaXN0LmFkZChcImNvbXBsZXRlZFwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRhc2tDYXJkLmNsYXNzTGlzdC5hZGQgPSBwcmlvcml0eTtcclxuICAgICAgICB0YXNrQ2FyZC5kYXRhc2V0LnByb2pOdW0gPSBwcm9qSW5kZXg7XHJcblxyXG4gICAgICAgIGNvbnN0IHN0YXR1c0NoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgIHN0YXR1c0NoZWNrYm94LnR5cGUgPSBcImNoZWNrYm94XCI7XHJcbiAgICAgICAgc3RhdHVzQ2hlY2tib3gubmFtZSA9IFwic3RhdHVzLWNoZWNrYm94XCI7XHJcbiAgICAgICAgc3RhdHVzQ2hlY2tib3guY2hlY2tlZCA9IHN0YXR1cztcclxuICAgICAgICBzdGF0dXNDaGVja2JveC5jbGFzc0xpc3QuYWRkKHByaW9yaXR5KTtcclxuXHJcbiAgICAgICAgdGFza0NhcmQuYXBwZW5kQ2hpbGQoc3RhdHVzQ2hlY2tib3gpO1xyXG5cclxuICAgICAgICBjb25zdCB0YXNrTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgIHRhc2tOYW1lLmNsYXNzTmFtZSA9IFwidGFzay1uYW1lXCI7XHJcbiAgICAgICAgdGFza05hbWUudGV4dENvbnRlbnQgPSBuYW1lO1xyXG4gICAgICAgIHRhc2tDYXJkLmFwcGVuZENoaWxkKHRhc2tOYW1lKTtcclxuXHJcbiAgICAgICAgY29uc3QgdGFza0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgICB0YXNrRGF0ZS5jbGFzc05hbWUgPSBcInRhc2stZGF0ZVwiO1xyXG4gICAgICAgIHRhc2tEYXRlLnRleHRDb250ZW50ID0gZGF0ZTtcclxuICAgICAgICB0YXNrQ2FyZC5hcHBlbmRDaGlsZCh0YXNrRGF0ZSk7XHJcblxyXG4gICAgICAgIGNvbnN0IG1hbmFnZVRhc2tDb250cm9scyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgbWFuYWdlVGFza0NvbnRyb2xzLmNsYXNzTmFtZSA9IFwibWFuYWdlLXRhc2stY29udHJvbHNcIjtcclxuICAgICAgICB0YXNrQ2FyZC5hcHBlbmRDaGlsZChtYW5hZ2VUYXNrQ29udHJvbHMpO1xyXG5cclxuICAgICAgICBjb25zdCB0YXNrRWRpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgdGFza0VkaXRCdXR0b24uY2xhc3NOYW1lID0gXCJ0YXNrLWVkaXQtYnV0dG9uXCI7XHJcbiAgICAgICAgdGFza0VkaXRCdXR0b24uaW5uZXJIVE1MID0gYDxzdmdcclxuICAgICAgICB3aWR0aD1cIjI0XCJcclxuICAgICAgICBoZWlnaHQ9XCIyNFwiXHJcbiAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgPlxyXG4gICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgIGZpbGwtcnVsZT1cImV2ZW5vZGRcIlxyXG4gICAgICAgICAgICBjbGlwLXJ1bGU9XCJldmVub2RkXCJcclxuICAgICAgICAgICAgZD1cIk0xNy4yMDQgMTAuNzk2TDE5IDlDMTkuNTQ1MyA4LjQ1NDc1IDE5LjgxNzkgOC4xODIxMyAxOS45NjM2IDcuODg4MDNDMjAuMjQwOSA3LjMyODQ4IDIwLjI0MDkgNi42NzE1MiAxOS45NjM2IDYuMTExOTdDMTkuODE3OSA1LjgxNzg4IDE5LjU0NTMgNS41NDUyNSAxOSA1QzE4LjQ1NDggNC40NTQ3NSAxOC4xODIxIDQuMTgyMTMgMTcuODg4IDQuMDM2MzlDMTcuMzI4NSAzLjc1OTExIDE2LjY3MTUgMy43NTkxMSAxNi4xMTIgNC4wMzYzOUMxNS44MTc5IDQuMTgyMTMgMTUuNTQ1MyA0LjQ1NDc1IDE1IDVMMTMuMTgxNCA2LjgxODY2QzE0LjE0NTIgOC40NjkyNiAxNS41MzE0IDkuODQ0ODIgMTcuMjA0IDEwLjc5NlpNMTEuNzI2OSA4LjI3MzExTDQuODU2NCAxNS4xNDM2QzQuNDMxMzQgMTUuNTY4NyA0LjIxODgxIDE1Ljc4MTIgNC4wNzkwNyAxNi4wNDIzQzMuOTM5MzQgMTYuMzAzNCAzLjg4MDM5IDE2LjU5ODEgMy43NjI1IDE3LjE4NzZMMy4xNDcxIDIwLjI2NDZDMy4wODA1OCAyMC41OTcyIDMuMDQ3MzIgMjAuNzYzNSAzLjE0MTkzIDIwLjg1ODFDMy4yMzY1NCAyMC45NTI3IDMuNDAyODQgMjAuOTE5NCAzLjczNTQ1IDIwLjg1MjlMNi44MTI0MyAyMC4yMzc1QzcuNDAxODkgMjAuMTE5NiA3LjY5NjYxIDIwLjA2MDcgNy45NTc3MSAxOS45MjA5QzguMjE4ODEgMTkuNzgxMiA4LjQzMTM0IDE5LjU2ODcgOC44NTY0IDE5LjE0MzZMMTUuNzQ1OCAxMi4yNTQyQzE0LjEyNDEgMTEuMjM4NiAxMi43NTI0IDkuODc2MjcgMTEuNzI2OSA4LjI3MzExWlwiXHJcbiAgICAgICAgICAgIGZpbGw9XCIjMjIyMjIyXCJcclxuICAgICAgICAvPlxyXG4gICAgPC9zdmc+YDtcclxuICAgICAgICBtYW5hZ2VUYXNrQ29udHJvbHMuYXBwZW5kQ2hpbGQodGFza0VkaXRCdXR0b24pO1xyXG5cclxuICAgICAgICBjb25zdCB0YXNrRGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICB0YXNrRGVsZXRlQnV0dG9uLmNsYXNzTmFtZSA9IFwidGFzay1kZWxldGUtYnV0dG9uXCI7XHJcbiAgICAgICAgdGFza0RlbGV0ZUJ1dHRvbi5pbm5lckhUTUwgPSBgPHN2Z1xyXG4gICAgICAgIHdpZHRoPVwiMjRcIlxyXG4gICAgICAgIGhlaWdodD1cIjI0XCJcclxuICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcclxuICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICA+XHJcbiAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgZmlsbC1ydWxlPVwiZXZlbm9kZFwiXHJcbiAgICAgICAgICAgIGNsaXAtcnVsZT1cImV2ZW5vZGRcIlxyXG4gICAgICAgICAgICBkPVwiTTIxIDEyQzIxIDE2Ljk3MDYgMTYuOTcwNiAyMSAxMiAyMUM3LjAyOTQ0IDIxIDMgMTYuOTcwNiAzIDEyQzMgNy4wMjk0NCA3LjAyOTQ0IDMgMTIgM0MxNi45NzA2IDMgMjEgNy4wMjk0NCAyMSAxMlpNMTIgMTMuNDE0Mkw4LjcwNzExIDE2LjcwNzFMNy4yOTI4OSAxNS4yOTI5TDEwLjU4NTggMTJMNy4yOTI4OSA4LjcwNzExTDguNzA3MTEgNy4yOTI4OUwxMiAxMC41ODU4TDE1LjI5MjkgNy4yOTI4OUwxNi43MDcxIDguNzA3MTFMMTMuNDE0MiAxMkwxNi43MDcxIDE1LjI5MjlMMTUuMjkyOSAxNi43MDcxTDEyIDEzLjQxNDJaXCJcclxuICAgICAgICAgICAgZmlsbD1cIiMyMjIyMjJcIlxyXG4gICAgICAgIC8+XHJcbiAgICA8L3N2Zz5gO1xyXG4gICAgICAgIG1hbmFnZVRhc2tDb250cm9scy5hcHBlbmRDaGlsZCh0YXNrRGVsZXRlQnV0dG9uKTtcclxuXHJcbiAgICAgICAgLy8gRXZlbnQgTGlzdGVuZXIgLS0gVXRpbGl0aWVzIGZvciBUYXNrIENhcmRzXHJcbiAgICAgICAgdGFza0RlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBjdXJyZW50UHJvamVjdHNbcHJvakluZGV4XS50YXNrcy5zcGxpY2UodGFza0luZGV4LCAxKTtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXHJcbiAgICAgICAgICAgICAgICBcInByb2plY3RzTGlzdFwiLFxyXG4gICAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoY3VycmVudFByb2plY3RzKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICByZW5kZXJUYXNrcyhwcm9qSW5kZXgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0YXNrRWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0YXNrQ2FyZC5pbm5lckhUTUwgPSBcIlwiO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbmV3VGFza0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcclxuICAgICAgICAgICAgbmV3VGFza0Zvcm0uYWN0aW9uID0gXCJcIjtcclxuICAgICAgICAgICAgbmV3VGFza0Zvcm0uY2xhc3NOYW1lID0gXCJuZXdUYXNrRGF0YUlucHV0XCI7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB0YXNrTmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgICAgICB0YXNrTmFtZUlucHV0LnR5cGUgPSBcInRleHRcIjtcclxuICAgICAgICAgICAgdGFza05hbWVJbnB1dC5jbGFzc05hbWUgPSBcIm5ldy10YXNrLW5hbWUtaW5wdXRcIjtcclxuICAgICAgICAgICAgdGFza05hbWVJbnB1dC52YWx1ZSA9XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50UHJvamVjdHNbcHJvakluZGV4XS50YXNrc1t0YXNrSW5kZXhdLm5hbWU7XHJcbiAgICAgICAgICAgIG5ld1Rhc2tGb3JtLmFwcGVuZENoaWxkKHRhc2tOYW1lSW5wdXQpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgdGFza0RhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgICAgICAgdGFza0RhdGVJbnB1dC50eXBlID0gXCJkYXRlXCI7XHJcbiAgICAgICAgICAgIHRhc2tEYXRlSW5wdXQubmFtZSA9IFwibmV3RGF0ZUlucHV0XCI7XHJcbiAgICAgICAgICAgIHRhc2tEYXRlSW5wdXQuY2xhc3NOYW1lID0gXCJuZXctdGFzay1kYXRlLWlucHV0XCI7XHJcbiAgICAgICAgICAgIHRhc2tEYXRlSW5wdXQudmFsdWUgPVxyXG4gICAgICAgICAgICAgICAgY3VycmVudFByb2plY3RzW3Byb2pJbmRleF0udGFza3NbdGFza0luZGV4XS5kZWFkbGluZTtcclxuICAgICAgICAgICAgbmV3VGFza0Zvcm0uYXBwZW5kQ2hpbGQodGFza0RhdGVJbnB1dCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB0YXNrUHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XHJcbiAgICAgICAgICAgIHRhc2tQcmlvcml0eUlucHV0Lm5hbWUgPSBcIm5ld1ByaW9yaXR5SW5wdXRcIjtcclxuICAgICAgICAgICAgdGFza1ByaW9yaXR5SW5wdXQuY2xhc3NOYW1lID0gXCJuZXctdGFzay1wcmlvcml0eS1pbnB1dFwiO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcHJpb3JpdHlPcHRpb24yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcclxuICAgICAgICAgICAgcHJpb3JpdHlPcHRpb24yLnZhbHVlID0gXCJsb3dcIjtcclxuICAgICAgICAgICAgcHJpb3JpdHlPcHRpb24yLnRleHRDb250ZW50ID0gXCJMb3dcIjtcclxuICAgICAgICAgICAgdGFza1ByaW9yaXR5SW5wdXQuYXBwZW5kQ2hpbGQocHJpb3JpdHlPcHRpb24yKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5T3B0aW9uMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XHJcbiAgICAgICAgICAgIHByaW9yaXR5T3B0aW9uMy52YWx1ZSA9IFwibWVkaXVtXCI7XHJcbiAgICAgICAgICAgIHByaW9yaXR5T3B0aW9uMy50ZXh0Q29udGVudCA9IFwiTWVkaXVtXCI7XHJcbiAgICAgICAgICAgIHRhc2tQcmlvcml0eUlucHV0LmFwcGVuZENoaWxkKHByaW9yaXR5T3B0aW9uMyk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBwcmlvcml0eU9wdGlvbjQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xyXG4gICAgICAgICAgICBwcmlvcml0eU9wdGlvbjQudmFsdWUgPSBcImhpZ2hcIjtcclxuICAgICAgICAgICAgcHJpb3JpdHlPcHRpb240LnRleHRDb250ZW50ID0gXCJIaWdoXCI7XHJcbiAgICAgICAgICAgIHRhc2tQcmlvcml0eUlucHV0LmFwcGVuZENoaWxkKHByaW9yaXR5T3B0aW9uNCk7XHJcblxyXG4gICAgICAgICAgICB0YXNrUHJpb3JpdHlJbnB1dC52YWx1ZSA9IHByaW9yaXR5O1xyXG5cclxuICAgICAgICAgICAgbmV3VGFza0Zvcm0uYXBwZW5kQ2hpbGQodGFza1ByaW9yaXR5SW5wdXQpO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgICAgICBzdWJtaXRCdXR0b24udHlwZSA9IFwic3VibWl0XCI7XHJcbiAgICAgICAgICAgIHN1Ym1pdEJ1dHRvbi52YWx1ZSA9IFwiU2F2ZVwiO1xyXG4gICAgICAgICAgICBuZXdUYXNrRm9ybS5hcHBlbmRDaGlsZChzdWJtaXRCdXR0b24pO1xyXG5cclxuICAgICAgICAgICAgdGFza0NhcmQuYXBwZW5kQ2hpbGQobmV3VGFza0Zvcm0pO1xyXG5cclxuICAgICAgICAgICAgbmV3VGFza0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50UHJvamVjdHNbcHJvakluZGV4XS50YXNrc1t0YXNrSW5kZXhdLm5hbWUgPVxyXG4gICAgICAgICAgICAgICAgICAgIHRhc2tOYW1lSW5wdXQudmFsdWU7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50UHJvamVjdHNbcHJvakluZGV4XS50YXNrc1t0YXNrSW5kZXhdLmRlYWRsaW5lID1cclxuICAgICAgICAgICAgICAgICAgICB0YXNrRGF0ZUlucHV0LnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgY3VycmVudFByb2plY3RzW3Byb2pJbmRleF0udGFza3NbdGFza0luZGV4XS5wcmlvcml0eSA9XHJcbiAgICAgICAgICAgICAgICAgICAgdGFza1ByaW9yaXR5SW5wdXQudmFsdWU7XHJcblxyXG4gICAgICAgICAgICAgICAgY3VycmVudFByb2plY3RzW3Byb2pJbmRleF0udGFza3Muc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGUxID0gbmV3IERhdGUoYS5kZWFkbGluZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0ZTIgPSBuZXcgRGF0ZShiLmRlYWRsaW5lKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGUxIC0gZGF0ZTI7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxyXG4gICAgICAgICAgICAgICAgICAgIFwicHJvamVjdHNMaXN0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoY3VycmVudFByb2plY3RzKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZW5kZXJUYXNrcyhwcm9qSW5kZXgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc3RhdHVzQ2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgY3VycmVudFByb2plY3RzW3Byb2pJbmRleF0udGFza3NbdGFza0luZGV4XS5jb21wbGV0ZWQgPVxyXG4gICAgICAgICAgICAgICAgc3RhdHVzQ2hlY2tib3guY2hlY2tlZDtcclxuICAgICAgICAgICAgdGFza0NhcmQuY2xhc3NMaXN0LnRvZ2dsZShcImNvbXBsZXRlZFwiKTtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXHJcbiAgICAgICAgICAgICAgICBcInByb2plY3RzTGlzdFwiLFxyXG4gICAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoY3VycmVudFByb2plY3RzKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0YXNrQ29udGFpbmVyLmFwcGVuZCh0YXNrQ2FyZCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVuZGVyVG9kYXlUYXNrKCkge1xyXG4gICAgICAgIGNvbnN0IHRhc2tQYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xyXG4gICAgICAgIHRhc2tQYWdlLmlubmVySFRNTCA9IFwiXCI7XHJcblxyXG4gICAgICAgIGNvbnN0IGxpc3RIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgICAgICAgbGlzdEhlYWRlci5pZCA9IFwibGlzdC1oZWFkZXJcIjtcclxuICAgICAgICBsaXN0SGVhZGVyLnRleHRDb250ZW50ID0gXCJUb2RheVwiO1xyXG4gICAgICAgIHRhc2tQYWdlLmFwcGVuZENoaWxkKGxpc3RIZWFkZXIpO1xyXG5cclxuICAgICAgICBjb25zdCByZW5kZXJUYXNrc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgcmVuZGVyVGFza3NDb250YWluZXIuaWQgPSBcInJlbmRlci10YXNrc1wiO1xyXG4gICAgICAgIHRhc2tQYWdlLmFwcGVuZENoaWxkKHJlbmRlclRhc2tzQ29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgY29uc3QgdG9kYXkgPSBmb3JtYXQobmV3IERhdGUoKSwgXCJ5eXl5LU1NLWRkXCIpO1xyXG4gICAgICAgIHJlbmRlclRhc2tzQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgY3VycmVudFByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcclxuICAgICAgICAgICAgcHJvamVjdC50YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGFzay5kZWFkbGluZSA9PT0gdG9kYXkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZW5kZXJUYXNrVG9ET00oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2sucHJvak51bSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdC50YXNrcy5pbmRleE9mKHRhc2spLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2suZGVhZGxpbmUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2sucHJpb3JpdHksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2suY29tcGxldGVkXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVuZGVyVXBjb21pbmcoKSB7XHJcbiAgICAgICAgY29uc3QgdGFza1BhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XHJcbiAgICAgICAgdGFza1BhZ2UuaW5uZXJIVE1MID0gXCJcIjtcclxuXHJcbiAgICAgICAgY29uc3QgbGlzdEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAgICAgICBsaXN0SGVhZGVyLmlkID0gXCJsaXN0LWhlYWRlclwiO1xyXG4gICAgICAgIGxpc3RIZWFkZXIudGV4dENvbnRlbnQgPSBcIlVwY29taW5nXCI7XHJcbiAgICAgICAgdGFza1BhZ2UuYXBwZW5kQ2hpbGQobGlzdEhlYWRlcik7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlbmRlclRhc2tzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICByZW5kZXJUYXNrc0NvbnRhaW5lci5pZCA9IFwicmVuZGVyLXRhc2tzXCI7XHJcbiAgICAgICAgdGFza1BhZ2UuYXBwZW5kQ2hpbGQocmVuZGVyVGFza3NDb250YWluZXIpO1xyXG5cclxuICAgICAgICByZW5kZXJUYXNrc0NvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xyXG5cclxuICAgICAgICBjdXJyZW50UHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBwcm9qZWN0LnRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChpc0Z1dHVyZShwYXJzZUlTTyh0YXNrLmRlYWRsaW5lKSkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZW5kZXJUYXNrVG9ET00oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2sucHJvak51bSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdC50YXNrcy5pbmRleE9mKHRhc2spLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2suZGVhZGxpbmUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2sucHJpb3JpdHksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2suY29tcGxldGVkXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVuZGVyQ29tcGxldGVkKCkge1xyXG4gICAgICAgIGNvbnN0IHRhc2tQYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xyXG4gICAgICAgIHRhc2tQYWdlLmlubmVySFRNTCA9IFwiXCI7XHJcblxyXG4gICAgICAgIGNvbnN0IGxpc3RIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgICAgICAgbGlzdEhlYWRlci5pZCA9IFwibGlzdC1oZWFkZXJcIjtcclxuICAgICAgICBsaXN0SGVhZGVyLnRleHRDb250ZW50ID0gXCJDb21wbGV0ZWRcIjtcclxuICAgICAgICB0YXNrUGFnZS5hcHBlbmRDaGlsZChsaXN0SGVhZGVyKTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVuZGVyVGFza3NDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHJlbmRlclRhc2tzQ29udGFpbmVyLmlkID0gXCJyZW5kZXItdGFza3NcIjtcclxuICAgICAgICB0YXNrUGFnZS5hcHBlbmRDaGlsZChyZW5kZXJUYXNrc0NvbnRhaW5lcik7XHJcblxyXG4gICAgICAgIHJlbmRlclRhc2tzQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XHJcblxyXG4gICAgICAgIGN1cnJlbnRQcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHByb2plY3QudGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRhc2suY29tcGxldGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyVGFza1RvRE9NKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrLnByb2pOdW0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3QudGFza3MuaW5kZXhPZih0YXNrKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFzay5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrLmRlYWRsaW5lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrLnByaW9yaXR5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrLmNvbXBsZXRlZFxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaW5pdCgpIHtcclxuICAgICAgICAgICAgcmVuZGVySG9tZSgpO1xyXG4gICAgICAgIH0sXHJcbiAgICB9O1xyXG59XHJcbi8qIGVzbGludC1kaXNhYmxlICovO2Z1bmN0aW9uIG9vX2NtKCl7dHJ5e3JldHVybiAoMCxldmFsKShcImdsb2JhbFRoaXMuX2NvbnNvbGVfbmluamFcIikgfHwgKDAsZXZhbCkoXCIvKiBodHRwczovL2dpdGh1Yi5jb20vd2FsbGFieWpzL2NvbnNvbGUtbmluamEjaG93LWRvZXMtaXQtd29yayAqLyd1c2Ugc3RyaWN0JztmdW5jdGlvbiBfMHgxY2E5KF8weDFmMTUzNSxfMHg1ZTJhODIpe3ZhciBfMHg5ZTJiNjc9XzB4OWUyYigpO3JldHVybiBfMHgxY2E5PWZ1bmN0aW9uKF8weDFjYTk5ZixfMHgxZTQ0NzYpe18weDFjYTk5Zj1fMHgxY2E5OWYtMHgxMzY7dmFyIF8weDNhMGFjMD1fMHg5ZTJiNjdbXzB4MWNhOTlmXTtyZXR1cm4gXzB4M2EwYWMwO30sXzB4MWNhOShfMHgxZjE1MzUsXzB4NWUyYTgyKTt9dmFyIF8weDRkYzFhNT1fMHgxY2E5OyhmdW5jdGlvbihfMHgxYWMyNmQsXzB4NWMxZjE5KXt2YXIgXzB4YmQxOGY4PV8weDFjYTksXzB4NGI2YjRiPV8weDFhYzI2ZCgpO3doaWxlKCEhW10pe3RyeXt2YXIgXzB4M2QwZTM3PS1wYXJzZUludChfMHhiZDE4ZjgoMHgxM2MpKS8weDErLXBhcnNlSW50KF8weGJkMThmOCgweDFhNCkpLzB4MiooLXBhcnNlSW50KF8weGJkMThmOCgweDFlNCkpLzB4MykrcGFyc2VJbnQoXzB4YmQxOGY4KDB4MTRkKSkvMHg0K3BhcnNlSW50KF8weGJkMThmOCgweDFhMykpLzB4NSooLXBhcnNlSW50KF8weGJkMThmOCgweDE1NykpLzB4NikrcGFyc2VJbnQoXzB4YmQxOGY4KDB4MjE1KSkvMHg3KihwYXJzZUludChfMHhiZDE4ZjgoMHgyMDEpKS8weDgpKy1wYXJzZUludChfMHhiZDE4ZjgoMHgxNjkpKS8weDkqKC1wYXJzZUludChfMHhiZDE4ZjgoMHgxNDMpKS8weGEpK3BhcnNlSW50KF8weGJkMThmOCgweDFkZikpLzB4YiooLXBhcnNlSW50KF8weGJkMThmOCgweDIwYykpLzB4Yyk7aWYoXzB4M2QwZTM3PT09XzB4NWMxZjE5KWJyZWFrO2Vsc2UgXzB4NGI2YjRiWydwdXNoJ10oXzB4NGI2YjRiWydzaGlmdCddKCkpO31jYXRjaChfMHgzZWI4Zjgpe18weDRiNmI0YlsncHVzaCddKF8weDRiNmI0Ylsnc2hpZnQnXSgpKTt9fX0oXzB4OWUyYiwweGM5MmU3KSk7dmFyIHVlPU9iamVjdFsnY3JlYXRlJ10sdGU9T2JqZWN0W18weDRkYzFhNSgweDFjMildLGhlPU9iamVjdFsnZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yJ10sbGU9T2JqZWN0WydnZXRPd25Qcm9wZXJ0eU5hbWVzJ10sZmU9T2JqZWN0W18weDRkYzFhNSgweDE5YildLF9lPU9iamVjdFsncHJvdG90eXBlJ11bXzB4NGRjMWE1KDB4MTZjKV0scGU9KF8weDE1NWQ4YyxfMHgzNDM5N2IsXzB4NTcxN2Q0LF8weDUxMDUxMCk9Pnt2YXIgXzB4MWNiZTQ5PV8weDRkYzFhNTtpZihfMHgzNDM5N2ImJnR5cGVvZiBfMHgzNDM5N2I9PV8weDFjYmU0OSgweDFkYil8fHR5cGVvZiBfMHgzNDM5N2I9PSdmdW5jdGlvbicpe2ZvcihsZXQgXzB4MWIxYWUxIG9mIGxlKF8weDM0Mzk3YikpIV9lWydjYWxsJ10oXzB4MTU1ZDhjLF8weDFiMWFlMSkmJl8weDFiMWFlMSE9PV8weDU3MTdkNCYmdGUoXzB4MTU1ZDhjLF8weDFiMWFlMSx7J2dldCc6KCk9Pl8weDM0Mzk3YltfMHgxYjFhZTFdLCdlbnVtZXJhYmxlJzohKF8weDUxMDUxMD1oZShfMHgzNDM5N2IsXzB4MWIxYWUxKSl8fF8weDUxMDUxMFtfMHgxY2JlNDkoMHgyMTIpXX0pO31yZXR1cm4gXzB4MTU1ZDhjO30sbmU9KF8weDQyZWQ5NSxfMHgyM2UwMGMsXzB4MTQyOTg3KT0+KF8weDE0Mjk4Nz1fMHg0MmVkOTUhPW51bGw/dWUoZmUoXzB4NDJlZDk1KSk6e30scGUoXzB4MjNlMDBjfHwhXzB4NDJlZDk1fHwhXzB4NDJlZDk1W18weDRkYzFhNSgweDFmYildP3RlKF8weDE0Mjk4NyxfMHg0ZGMxYTUoMHgyMTgpLHsndmFsdWUnOl8weDQyZWQ5NSwnZW51bWVyYWJsZSc6ITB4MH0pOl8weDE0Mjk4NyxfMHg0MmVkOTUpKSxRPWNsYXNze2NvbnN0cnVjdG9yKF8weDM2ZWJjNSxfMHgyY2I0MGUsXzB4MThmMTdmLF8weDQ2ZTYxNyl7dmFyIF8weDU3YTQyZj1fMHg0ZGMxYTU7dGhpc1snZ2xvYmFsJ109XzB4MzZlYmM1LHRoaXNbXzB4NTdhNDJmKDB4MTkzKV09XzB4MmNiNDBlLHRoaXNbXzB4NTdhNDJmKDB4MTljKV09XzB4MThmMTdmLHRoaXNbXzB4NTdhNDJmKDB4MTU5KV09XzB4NDZlNjE3LHRoaXNbXzB4NTdhNDJmKDB4MThmKV09ITB4MCx0aGlzW18weDU3YTQyZigweDFhOCldPSEweDAsdGhpc1tfMHg1N2E0MmYoMHgxYjUpXT0hMHgxLHRoaXNbXzB4NTdhNDJmKDB4MWVlKV09ITB4MSx0aGlzW18weDU3YTQyZigweDE1MSldPSEhdGhpc1tfMHg1N2E0MmYoMHgxNjYpXVtfMHg1N2E0MmYoMHgxNjEpXSx0aGlzW18weDU3YTQyZigweDE0NCldPW51bGwsdGhpc1snX2Nvbm5lY3RBdHRlbXB0Q291bnQnXT0weDAsdGhpc1tfMHg1N2E0MmYoMHgxZmQpXT0weDE0LHRoaXNbXzB4NTdhNDJmKDB4MTg5KV09dGhpc1tfMHg1N2E0MmYoMHgxNTEpXT9fMHg1N2E0MmYoMHgxM2UpOl8weDU3YTQyZigweDFlOSk7fWFzeW5jWydnZXRXZWJTb2NrZXRDbGFzcyddKCl7dmFyIF8weDNkNjAyYj1fMHg0ZGMxYTU7aWYodGhpc1tfMHgzZDYwMmIoMHgxNDQpXSlyZXR1cm4gdGhpc1tfMHgzZDYwMmIoMHgxNDQpXTtsZXQgXzB4MWFmODgzO2lmKHRoaXNbXzB4M2Q2MDJiKDB4MTUxKV0pXzB4MWFmODgzPXRoaXNbXzB4M2Q2MDJiKDB4MTY2KV1bJ1dlYlNvY2tldCddO2Vsc2V7aWYodGhpc1tfMHgzZDYwMmIoMHgxNjYpXVtfMHgzZDYwMmIoMHgxM2IpXT8uW18weDNkNjAyYigweDFiMildKV8weDFhZjg4Mz10aGlzWydnbG9iYWwnXVtfMHgzZDYwMmIoMHgxM2IpXT8uW18weDNkNjAyYigweDFiMildO2Vsc2UgdHJ5e2xldCBfMHgyZjY1NmI9YXdhaXQgaW1wb3J0KF8weDNkNjAyYigweDE1MikpO18weDFhZjg4Mz0oYXdhaXQgaW1wb3J0KChhd2FpdCBpbXBvcnQoXzB4M2Q2MDJiKDB4MjA4KSkpW18weDNkNjAyYigweDFjMSldKF8weDJmNjU2YltfMHgzZDYwMmIoMHgxZTcpXSh0aGlzW18weDNkNjAyYigweDE1OSldLCd3cy9pbmRleC5qcycpKVtfMHgzZDYwMmIoMHgxNWYpXSgpKSlbXzB4M2Q2MDJiKDB4MjE4KV07fWNhdGNoe3RyeXtfMHgxYWY4ODM9cmVxdWlyZShyZXF1aXJlKCdwYXRoJylbJ2pvaW4nXSh0aGlzW18weDNkNjAyYigweDE1OSldLCd3cycpKTt9Y2F0Y2h7dGhyb3cgbmV3IEVycm9yKF8weDNkNjAyYigweDFhMSkpO319fXJldHVybiB0aGlzW18weDNkNjAyYigweDE0NCldPV8weDFhZjg4MyxfMHgxYWY4ODM7fVtfMHg0ZGMxYTUoMHgxN2YpXSgpe3ZhciBfMHgyZGQ3ZDQ9XzB4NGRjMWE1O3RoaXNbXzB4MmRkN2Q0KDB4MWVlKV18fHRoaXNbXzB4MmRkN2Q0KDB4MWI1KV18fHRoaXNbXzB4MmRkN2Q0KDB4MTg4KV0+PXRoaXNbXzB4MmRkN2Q0KDB4MWZkKV18fCh0aGlzW18weDJkZDdkNCgweDFhOCldPSEweDEsdGhpc1snX2Nvbm5lY3RpbmcnXT0hMHgwLHRoaXNbXzB4MmRkN2Q0KDB4MTg4KV0rKyx0aGlzW18weDJkZDdkNCgweDFiYildPW5ldyBQcm9taXNlKChfMHg3YjVjMmUsXzB4MzI2OWUpPT57dmFyIF8weDUyY2NkMT1fMHgyZGQ3ZDQ7dGhpc1snZ2V0V2ViU29ja2V0Q2xhc3MnXSgpWyd0aGVuJ10oXzB4NDk5MmE1PT57dmFyIF8weDM1OWZjNz1fMHgxY2E5O2xldCBfMHg1ZDc5Yzg9bmV3IF8weDQ5OTJhNShfMHgzNTlmYzcoMHgyMDMpK3RoaXNbXzB4MzU5ZmM3KDB4MTkzKV0rJzonK3RoaXNbJ3BvcnQnXSk7XzB4NWQ3OWM4W18weDM1OWZjNygweDFkMildPSgpPT57dmFyIF8weDRiYmE0NT1fMHgzNTlmYzc7dGhpc1tfMHg0YmJhNDUoMHgxOGYpXT0hMHgxLHRoaXNbXzB4NGJiYTQ1KDB4MWE2KV0oXzB4NWQ3OWM4KSx0aGlzW18weDRiYmE0NSgweDFmMSldKCksXzB4MzI2OWUobmV3IEVycm9yKF8weDRiYmE0NSgweDE5MCkpKTt9LF8weDVkNzljOFtfMHgzNTlmYzcoMHgxNTYpXT0oKT0+e3ZhciBfMHg1ZDlmZjM9XzB4MzU5ZmM3O3RoaXNbXzB4NWQ5ZmYzKDB4MTUxKV18fF8weDVkNzljOFtfMHg1ZDlmZjMoMHgxOTEpXSYmXzB4NWQ3OWM4W18weDVkOWZmMygweDE5MSldW18weDVkOWZmMygweDFmZSldJiZfMHg1ZDc5YzhbXzB4NWQ5ZmYzKDB4MTkxKV1bXzB4NWQ5ZmYzKDB4MWZlKV0oKSxfMHg3YjVjMmUoXzB4NWQ3OWM4KTt9LF8weDVkNzljOFtfMHgzNTlmYzcoMHgxZGMpXT0oKT0+e3ZhciBfMHg1MjY2OGQ9XzB4MzU5ZmM3O3RoaXNbXzB4NTI2NjhkKDB4MWE4KV09ITB4MCx0aGlzW18weDUyNjY4ZCgweDFhNildKF8weDVkNzljOCksdGhpc1tfMHg1MjY2OGQoMHgxZjEpXSgpO30sXzB4NWQ3OWM4Wydvbm1lc3NhZ2UnXT1fMHgxODcyZGU9Pnt2YXIgXzB4M2JlYmEwPV8weDM1OWZjNzt0cnl7XzB4MTg3MmRlJiZfMHgxODcyZGVbXzB4M2JlYmEwKDB4MWI4KV0mJnRoaXNbJ19pbkJyb3dzZXInXSYmSlNPTltfMHgzYmViYTAoMHgxZjUpXShfMHgxODcyZGVbJ2RhdGEnXSlbXzB4M2JlYmEwKDB4MTQ3KV09PT0ncmVsb2FkJyYmdGhpc1snZ2xvYmFsJ11bXzB4M2JlYmEwKDB4MjExKV1bXzB4M2JlYmEwKDB4MWJkKV0oKTt9Y2F0Y2h7fX07fSlbXzB4NTJjY2QxKDB4MWQ1KV0oXzB4NDk4NjVjPT4odGhpc1tfMHg1MmNjZDEoMHgxYjUpXT0hMHgwLHRoaXNbXzB4NTJjY2QxKDB4MWVlKV09ITB4MSx0aGlzW18weDUyY2NkMSgweDFhOCldPSEweDEsdGhpc1snX2FsbG93ZWRUb1NlbmQnXT0hMHgwLHRoaXNbXzB4NTJjY2QxKDB4MTg4KV09MHgwLF8weDQ5ODY1YykpW18weDUyY2NkMSgweDFkNildKF8weDEzNDJhZD0+KHRoaXNbJ19jb25uZWN0ZWQnXT0hMHgxLHRoaXNbJ19jb25uZWN0aW5nJ109ITB4MSxfMHgzMjY5ZShuZXcgRXJyb3IoXzB4NTJjY2QxKDB4MjA5KSsoXzB4MTM0MmFkJiZfMHgxMzQyYWRbJ21lc3NhZ2UnXSkpKSkpO30pKTt9W18weDRkYzFhNSgweDFhNildKF8weDJkMGMwOSl7dmFyIF8weDFkMTQxNT1fMHg0ZGMxYTU7dGhpc1tfMHgxZDE0MTUoMHgxYjUpXT0hMHgxLHRoaXNbXzB4MWQxNDE1KDB4MWVlKV09ITB4MTt0cnl7XzB4MmQwYzA5W18weDFkMTQxNSgweDFkYyldPW51bGwsXzB4MmQwYzA5W18weDFkMTQxNSgweDFkMildPW51bGwsXzB4MmQwYzA5W18weDFkMTQxNSgweDE1NildPW51bGw7fWNhdGNoe310cnl7XzB4MmQwYzA5W18weDFkMTQxNSgweDFiZSldPDB4MiYmXzB4MmQwYzA5W18weDFkMTQxNSgweDIxNyldKCk7fWNhdGNoe319W18weDRkYzFhNSgweDFmMSldKCl7dmFyIF8weDJkYWExNz1fMHg0ZGMxYTU7Y2xlYXJUaW1lb3V0KHRoaXNbJ19yZWNvbm5lY3RUaW1lb3V0J10pLCEodGhpc1snX2Nvbm5lY3RBdHRlbXB0Q291bnQnXT49dGhpc1tfMHgyZGFhMTcoMHgxZmQpXSkmJih0aGlzW18weDJkYWExNygweDFkNCldPXNldFRpbWVvdXQoKCk9Pnt2YXIgXzB4NTJiMGMyPV8weDJkYWExNzt0aGlzW18weDUyYjBjMigweDFiNSldfHx0aGlzW18weDUyYjBjMigweDFlZSldfHwodGhpc1tfMHg1MmIwYzIoMHgxN2YpXSgpLHRoaXNbJ193cyddPy5bXzB4NTJiMGMyKDB4MWQ2KV0oKCk9PnRoaXNbXzB4NTJiMGMyKDB4MWYxKV0oKSkpO30sMHgxZjQpLHRoaXNbXzB4MmRhYTE3KDB4MWQ0KV1bXzB4MmRhYTE3KDB4MWZlKV0mJnRoaXNbXzB4MmRhYTE3KDB4MWQ0KV1bXzB4MmRhYTE3KDB4MWZlKV0oKSk7fWFzeW5jW18weDRkYzFhNSgweDE4YildKF8weDRlYjQxYyl7dmFyIF8weDE2ZmFiZT1fMHg0ZGMxYTU7dHJ5e2lmKCF0aGlzWydfYWxsb3dlZFRvU2VuZCddKXJldHVybjt0aGlzWydfYWxsb3dlZFRvQ29ubmVjdE9uU2VuZCddJiZ0aGlzW18weDE2ZmFiZSgweDE3ZildKCksKGF3YWl0IHRoaXNbJ193cyddKVsnc2VuZCddKEpTT05bJ3N0cmluZ2lmeSddKF8weDRlYjQxYykpO31jYXRjaChfMHg1OTUyYTYpe2NvbnNvbGVbXzB4MTZmYWJlKDB4MjA2KV0odGhpc1snX3NlbmRFcnJvck1lc3NhZ2UnXSsnOlxcXFx4MjAnKyhfMHg1OTUyYTYmJl8weDU5NTJhNlsnbWVzc2FnZSddKSksdGhpc1tfMHgxNmZhYmUoMHgxOGYpXT0hMHgxLHRoaXNbXzB4MTZmYWJlKDB4MWYxKV0oKTt9fX07ZnVuY3Rpb24gVihfMHgzODA4YzcsXzB4MTlkZmUzLF8weDMxYWYwMCxfMHg0NzY0OTgsXzB4MWYwZGM2KXt2YXIgXzB4NTIxYjY2PV8weDRkYzFhNTtsZXQgXzB4ZmM4ZTI9XzB4MzFhZjAwW18weDUyMWI2NigweDE5NildKCcsJylbJ21hcCddKF8weGFiOWE5MD0+e3ZhciBfMHg1NGIwMmI9XzB4NTIxYjY2O3RyeXtfMHgzODA4YzdbXzB4NTRiMDJiKDB4MTg1KV18fCgoXzB4MWYwZGM2PT09XzB4NTRiMDJiKDB4MTNhKXx8XzB4MWYwZGM2PT09J3JlbWl4J3x8XzB4MWYwZGM2PT09J2FzdHJvJykmJihfMHgxZjBkYzYrPV8weDM4MDhjN1tfMHg1NGIwMmIoMHgxM2IpXT8uW18weDU0YjAyYigweDE0YildPy5bJ25vZGUnXT9fMHg1NGIwMmIoMHgxZDkpOl8weDU0YjAyYigweDE5OCkpLF8weDM4MDhjN1tfMHg1NGIwMmIoMHgxODUpXT17J2lkJzorbmV3IERhdGUoKSwndG9vbCc6XzB4MWYwZGM2fSk7bGV0IF8weDUxNThhZj1uZXcgUShfMHgzODA4YzcsXzB4MTlkZmUzLF8weGFiOWE5MCxfMHg0NzY0OTgpO3JldHVybiBfMHg1MTU4YWZbJ3NlbmQnXVtfMHg1NGIwMmIoMHgxYmEpXShfMHg1MTU4YWYpO31jYXRjaChfMHgzNTZkNDcpe3JldHVybiBjb25zb2xlWyd3YXJuJ10oJ2xvZ2dlclxcXFx4MjBmYWlsZWRcXFxceDIwdG9cXFxceDIwY29ubmVjdFxcXFx4MjB0b1xcXFx4MjBob3N0JyxfMHgzNTZkNDcmJl8weDM1NmQ0N1tfMHg1NGIwMmIoMHgxZjApXSksKCk9Pnt9O319KTtyZXR1cm4gXzB4ZjQzYjBjPT5fMHhmYzhlMlsnZm9yRWFjaCddKF8weDRhZjJmMD0+XzB4NGFmMmYwKF8weGY0M2IwYykpO31mdW5jdGlvbiBIKF8weDIzZGEwNyl7dmFyIF8weDFhODhmZD1fMHg0ZGMxYTU7bGV0IF8weDUzMjdhMj1mdW5jdGlvbihfMHgzM2EwYzMsXzB4NWU4NzFiKXtyZXR1cm4gXzB4NWU4NzFiLV8weDMzYTBjMzt9LF8weDRhMTgyODtpZihfMHgyM2RhMDdbXzB4MWE4OGZkKDB4MWIwKV0pXzB4NGExODI4PWZ1bmN0aW9uKCl7dmFyIF8weDQyNzE1Nz1fMHgxYTg4ZmQ7cmV0dXJuIF8weDIzZGEwN1tfMHg0MjcxNTcoMHgxYjApXVtfMHg0MjcxNTcoMHgxMzgpXSgpO307ZWxzZXtpZihfMHgyM2RhMDdbXzB4MWE4OGZkKDB4MTNiKV0mJl8weDIzZGEwN1tfMHgxYTg4ZmQoMHgxM2IpXVtfMHgxYTg4ZmQoMHgxYWIpXSlfMHg0YTE4Mjg9ZnVuY3Rpb24oKXt2YXIgXzB4NDcwYWZhPV8weDFhODhmZDtyZXR1cm4gXzB4MjNkYTA3W18weDQ3MGFmYSgweDEzYildWydocnRpbWUnXSgpO30sXzB4NTMyN2EyPWZ1bmN0aW9uKF8weDM3Y2YxYyxfMHhhNjQ4MWEpe3JldHVybiAweDNlOCooXzB4YTY0ODFhWzB4MF0tXzB4MzdjZjFjWzB4MF0pKyhfMHhhNjQ4MWFbMHgxXS1fMHgzN2NmMWNbMHgxXSkvMHhmNDI0MDt9O2Vsc2UgdHJ5e2xldCB7cGVyZm9ybWFuY2U6XzB4Y2QyMTNmfT1yZXF1aXJlKF8weDFhODhmZCgweDE2YikpO18weDRhMTgyOD1mdW5jdGlvbigpe3JldHVybiBfMHhjZDIxM2ZbJ25vdyddKCk7fTt9Y2F0Y2h7XzB4NGExODI4PWZ1bmN0aW9uKCl7cmV0dXJuK25ldyBEYXRlKCk7fTt9fXJldHVybnsnZWxhcHNlZCc6XzB4NTMyN2EyLCd0aW1lU3RhbXAnOl8weDRhMTgyOCwnbm93JzooKT0+RGF0ZVsnbm93J10oKX07fWZ1bmN0aW9uIFgoXzB4MzU5YjdlLF8weGRjMGRmMixfMHg0MmMwYjIpe3ZhciBfMHg0NTQ2MTM9XzB4NGRjMWE1O2lmKF8weDM1OWI3ZVtfMHg0NTQ2MTMoMHgxNWMpXSE9PXZvaWQgMHgwKXJldHVybiBfMHgzNTliN2VbJ19jb25zb2xlTmluamFBbGxvd2VkVG9TdGFydCddO2xldCBfMHgzNGE2MGQ9XzB4MzU5YjdlW18weDQ1NDYxMygweDEzYildPy5bXzB4NDU0NjEzKDB4MTRiKV0/Llsnbm9kZSddO3JldHVybiBfMHgzNGE2MGQmJl8weDQyYzBiMj09PV8weDQ1NDYxMygweDE3ZCk/XzB4MzU5YjdlW18weDQ1NDYxMygweDE1YyldPSEweDE6XzB4MzU5YjdlW18weDQ1NDYxMygweDE1YyldPV8weDM0YTYwZHx8IV8weGRjMGRmMnx8XzB4MzU5YjdlW18weDQ1NDYxMygweDIxMSldPy5bXzB4NDU0NjEzKDB4MTQ4KV0mJl8weGRjMGRmMltfMHg0NTQ2MTMoMHgxOWEpXShfMHgzNTliN2VbXzB4NDU0NjEzKDB4MjExKV1bXzB4NDU0NjEzKDB4MTQ4KV0pLF8weDM1OWI3ZVtfMHg0NTQ2MTMoMHgxNWMpXTt9ZnVuY3Rpb24gXzB4OWUyYigpe3ZhciBfMHg1YWY1MjM9WydkZXB0aCcsJ3Vua25vd24nLCdnZXRPd25Qcm9wZXJ0eVN5bWJvbHMnLCdfX2VzJysnTW9kdWxlJywnZ2V0T3duUHJvcGVydHlOYW1lcycsJ19tYXhDb25uZWN0QXR0ZW1wdENvdW50JywndW5yZWYnLCdfc2V0Tm9kZVBlcm1pc3Npb25zJywnbnVtYmVyJywnMTYwOTA0UHZ6aktLJywnX0hUTUxBbGxDb2xsZWN0aW9uJywnd3M6Ly8nLCd0eXBlJywncmVwbGFjZScsJ3dhcm4nLCdjYXBwZWRQcm9wcycsJ3VybCcsJ2ZhaWxlZFxcXFx4MjB0b1xcXFx4MjBjb25uZWN0XFxcXHgyMHRvXFxcXHgyMGhvc3Q6XFxcXHgyMCcsJ3NsaWNlJywnX3BfbGVuZ3RoJywnMTk1NTc2NzJXbE5VemQnLCdyZWR1Y2VMaW1pdHMnLCdhbGxTdHJMZW5ndGgnLCdfcXVvdGVkUmVnRXhwJywnc29ydFByb3BzJywnbG9jYXRpb24nLCdlbnVtZXJhYmxlJywncm9vdF9leHAnLCdpc0FycmF5JywnMTY4VFpiZmlkJywnY2FwcGVkJywnY2xvc2UnLCdkZWZhdWx0JywnaXNFeHByZXNzaW9uVG9FdmFsdWF0ZScsJ2NvbnN0cnVjdG9yJywnZWxlbWVudHMnLCdzZXJpYWxpemUnLCdub3cnLCdyb290X2V4cF9pZCcsJ25leHQuanMnLCdwcm9jZXNzJywnMTEzNjA4N1ZkYk5kTycsJ19hZGRMb2FkTm9kZScsJ0NvbnNvbGVcXFxceDIwTmluamFcXFxceDIwZmFpbGVkXFxcXHgyMHRvXFxcXHgyMHNlbmRcXFxceDIwbG9ncyxcXFxceDIwcmVmcmVzaGluZ1xcXFx4MjB0aGVcXFxceDIwcGFnZVxcXFx4MjBtYXlcXFxceDIwaGVscCcsJ19nZXRPd25Qcm9wZXJ0eVN5bWJvbHMnLCdwb3NpdGl2ZUluZmluaXR5Jywnc3ltYm9sJywndHJhY2UnLCcxNTI4MEFxbUVpWicsJ19XZWJTb2NrZXRDbGFzcycsJycsJ19zb3J0UHJvcHMnLCdtZXRob2QnLCdob3N0bmFtZScsJ251bGwnLCdsZW5ndGgnLCd2ZXJzaW9ucycsJ19pc1ByaW1pdGl2ZVR5cGUnLCc1MTA4NTA4WkVRVnJpJywnX2hhc01hcE9uSXRzUGF0aCcsJ2N1cnJlbnQnLCcuLi4nLCdfaW5Ccm93c2VyJywncGF0aCcsJ3ZhbHVlJywnZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yJywnW29iamVjdFxcXFx4MjBBcnJheV0nLCdvbm9wZW4nLCc1NTQ0NlJnZ2ZzSCcsJ19yZWdFeHBUb1N0cmluZycsJ25vZGVNb2R1bGVzJywnX3NldE5vZGVJZCcsJ3VuZGVmaW5lZCcsJ19jb25zb2xlTmluamFBbGxvd2VkVG9TdGFydCcsJ2luZGV4T2YnLCdfZGF0ZVRvU3RyaW5nJywndG9TdHJpbmcnLCdlbGFwc2VkJywnV2ViU29ja2V0JywnX2JsYWNrbGlzdGVkUHJvcGVydHknLCdhdXRvRXhwYW5kUHJldmlvdXNPYmplY3RzJywnX2dldE93blByb3BlcnR5RGVzY3JpcHRvcicsJzpsb2dQb2ludElkOicsJ2dsb2JhbCcsJ2NvbmNhdCcsJ05FR0FUSVZFX0lORklOSVRZJywnNTc0MmdCRmNDUycsJ3N1YnN0cicsJ3BlcmZfaG9va3MnLCdoYXNPd25Qcm9wZXJ0eScsJ190cmVlTm9kZVByb3BlcnRpZXNCZWZvcmVGdWxsVmFsdWUnLCdwcm9wcycsJ2F1dG9FeHBhbmRNYXhEZXB0aCcsJ051bWJlcicsJ3BhcmVudCcsJ25vZGUnLCdlcnJvcicsJ19oYXNTeW1ib2xQcm9wZXJ0eU9uSXRzUGF0aCcsJ3RvdGFsU3RyTGVuZ3RoJywnY2FsbCcsJ19jbGVhbk5vZGUnLCdfdHJlZU5vZGVQcm9wZXJ0aWVzQWZ0ZXJGdWxsVmFsdWUnLCdCdWZmZXInLCd0aW1lU3RhbXAnLCdfb2JqZWN0VG9TdHJpbmcnLCdfbnVtYmVyUmVnRXhwJywnbnV4dCcsJ2FycmF5JywnX2Nvbm5lY3RUb0hvc3ROb3cnLCdzdGFjaycsJ19zZXROb2RlRXhwYW5kYWJsZVN0YXRlJywnW29iamVjdFxcXFx4MjBCaWdJbnRdJywnbG9nJywnZnVuY3Rpb24nLCdfY29uc29sZV9uaW5qYV9zZXNzaW9uJywncmVzb2x2ZUdldHRlcnMnLCdIVE1MQWxsQ29sbGVjdGlvbicsJ19jb25uZWN0QXR0ZW1wdENvdW50JywnX3NlbmRFcnJvck1lc3NhZ2UnLCdzZXQnLCdzZW5kJywncHJvdG90eXBlJyxcXFwiYzpcXFxcXFxcXFVzZXJzXFxcXFxcXFxOaWtrb1xcXFxcXFxcLnZzY29kZVxcXFxcXFxcZXh0ZW5zaW9uc1xcXFxcXFxcd2FsbGFieWpzLmNvbnNvbGUtbmluamEtMC4wLjE2MFxcXFxcXFxcbm9kZV9tb2R1bGVzXFxcIiwncHVzaCcsJ19hbGxvd2VkVG9TZW5kJywnbG9nZ2VyXFxcXHgyMHdlYnNvY2tldFxcXFx4MjBlcnJvcicsJ19zb2NrZXQnLCdfY2FwSWZTdHJpbmcnLCdob3N0JywnTWFwJywnZXhwSWQnLCdzcGxpdCcsJ2Jvb2xlYW4nLCdcXFxceDIwYnJvd3NlcicsJ19wX25hbWUnLCdpbmNsdWRlcycsJ2dldFByb3RvdHlwZU9mJywncG9ydCcsJ19pc1NldCcsJ3N0YWNrVHJhY2VMaW1pdCcsJ2FyZ3VtZW50UmVzb2x1dGlvbkVycm9yJywnd2VicGFjaycsJ2ZhaWxlZFxcXFx4MjB0b1xcXFx4MjBmaW5kXFxcXHgyMGFuZFxcXFx4MjBsb2FkXFxcXHgyMFdlYlNvY2tldCcsJ19zZXROb2RlTGFiZWwnLCcyMDVIVndmVkcnLCc1MzA4TWRTSmpxJywnYmlnaW50JywnX2Rpc3Bvc2VXZWJzb2NrZXQnLCdbb2JqZWN0XFxcXHgyMERhdGVdJywnX2FsbG93ZWRUb0Nvbm5lY3RPblNlbmQnLCdzZXR0ZXInLCdfY29uc29sZV9uaW5qYScsJ2hydGltZScsJ190eXBlJywnZnVuY05hbWUnLCdfdW5kZWZpbmVkJywnYXV0b0V4cGFuZCcsJ3BlcmZvcm1hbmNlJywnX2FkZE9iamVjdFByb3BlcnR5JywnX1dlYlNvY2tldCcsJ19zZXROb2RlUXVlcnlQYXRoJywnU3RyaW5nJywnX2Nvbm5lY3RlZCcsJ19wcm9jZXNzVHJlZU5vZGVSZXN1bHQnLCdtYXRjaCcsJ2RhdGEnLCduYW1lJywnYmluZCcsJ193cycsJ1NldCcsJ3JlbG9hZCcsJ3JlYWR5U3RhdGUnLCdub0Z1bmN0aW9ucycsJ2V4cHJlc3Npb25zVG9FdmFsdWF0ZScsJ3BhdGhUb0ZpbGVVUkwnLCdkZWZpbmVQcm9wZXJ0eScsJ3RvTG93ZXJDYXNlJywnYXV0b0V4cGFuZExpbWl0JywnU3ltYm9sJywnX3Byb3BlcnR5TmFtZScsJ19hZGRpdGlvbmFsTWV0YWRhdGEnLCdQT1NJVElWRV9JTkZJTklUWScsJ3N0ckxlbmd0aCcsJ2NvbnNvbGUnLCdoaXRzJywnX2lzTmVnYXRpdmVaZXJvJywnX2dldE93blByb3BlcnR5TmFtZXMnLCdwb3AnLCdfYWRkUHJvcGVydHknLCdfU3ltYm9sJywnZm9yRWFjaCcsJ29uZXJyb3InLCdfc2V0Tm9kZUV4cHJlc3Npb25QYXRoJywnX3JlY29ubmVjdFRpbWVvdXQnLCd0aGVuJywnY2F0Y2gnLCdkaXNhYmxlZExvZycsJ2xldmVsJywnXFxcXHgyMHNlcnZlcicsJ2NvdW50Jywnb2JqZWN0Jywnb25jbG9zZScsJ19pc0FycmF5JywnbmVnYXRpdmVJbmZpbml0eScsJzExQUpuTlJXJywnYXV0b0V4cGFuZFByb3BlcnR5Q291bnQnLCdfaXNNYXAnLCdzdHJpbmcnLCdfcHJvcGVydHknLCcxMzk1amlteVBLJywndmFsdWVPZicsJ2NhcHBlZEVsZW1lbnRzJywnam9pbicsJ2RhdGUnLCdDb25zb2xlXFxcXHgyME5pbmphXFxcXHgyMGZhaWxlZFxcXFx4MjB0b1xcXFx4MjBzZW5kXFxcXHgyMGxvZ3MsXFxcXHgyMHJlc3RhcnRpbmdcXFxceDIwdGhlXFxcXHgyMHByb2Nlc3NcXFxceDIwbWF5XFxcXHgyMGhlbHAnLCd0aW1lJywnbmFuJywnX2tleVN0clJlZ0V4cCcsJ19oYXNTZXRPbkl0c1BhdGgnLCdfY29ubmVjdGluZycsJ3N0cmluZ2lmeScsJ21lc3NhZ2UnLCdfYXR0ZW1wdFRvUmVjb25uZWN0U2hvcnRseScsJ2luZGV4JywndGVzdCcsJ3RpbWVFbmQnLCdwYXJzZScsJ19pc1ByaW1pdGl2ZVdyYXBwZXJUeXBlJywnbmVnYXRpdmVaZXJvJ107XzB4OWUyYj1mdW5jdGlvbigpe3JldHVybiBfMHg1YWY1MjM7fTtyZXR1cm4gXzB4OWUyYigpO30oKF8weDRkYjBlYixfMHgzOTAxZjgsXzB4MzMxYTBlLF8weDM4OTlhNixfMHgzZDMzNGQsXzB4MjM0NzA1LF8weDU3Y2I2ZixfMHg0ZmY5ZjYsXzB4NTllZjA2KT0+e3ZhciBfMHgxNDcwMDQ9XzB4NGRjMWE1O2lmKF8weDRkYjBlYlsnX2NvbnNvbGVfbmluamEnXSlyZXR1cm4gXzB4NGRiMGViW18weDE0NzAwNCgweDFhYSldO2lmKCFYKF8weDRkYjBlYixfMHg0ZmY5ZjYsXzB4M2QzMzRkKSlyZXR1cm4gXzB4NGRiMGViW18weDE0NzAwNCgweDFhYSldPXsnY29uc29sZUxvZyc6KCk9Pnt9LCdjb25zb2xlVHJhY2UnOigpPT57fSwnY29uc29sZVRpbWUnOigpPT57fSwnY29uc29sZVRpbWVFbmQnOigpPT57fSwnYXV0b0xvZyc6KCk9Pnt9LCdhdXRvVHJhY2UnOigpPT57fSwnYXV0b1RpbWUnOigpPT57fSwnYXV0b1RpbWVFbmQnOigpPT57fX0sXzB4NGRiMGViWydfY29uc29sZV9uaW5qYSddO2xldCBfMHgzMzgwNDU9eydwcm9wcyc6MHg2NCwnZWxlbWVudHMnOjB4NjQsJ3N0ckxlbmd0aCc6MHg0MDAqMHgzMiwndG90YWxTdHJMZW5ndGgnOjB4NDAwKjB4MzIsJ2F1dG9FeHBhbmRMaW1pdCc6MHgxMzg4LCdhdXRvRXhwYW5kTWF4RGVwdGgnOjB4YX0sXzB4NTRkY2RjPXsncHJvcHMnOjB4NSwnZWxlbWVudHMnOjB4NSwnc3RyTGVuZ3RoJzoweDEwMCwndG90YWxTdHJMZW5ndGgnOjB4MTAwKjB4MywnYXV0b0V4cGFuZExpbWl0JzoweDFlLCdhdXRvRXhwYW5kTWF4RGVwdGgnOjB4Mn0sXzB4MjA2MjIwPUgoXzB4NGRiMGViKSxfMHg0NmRkMjc9XzB4MjA2MjIwW18weDE0NzAwNCgweDE2MCldLF8weDEwOTA4YT1fMHgyMDYyMjBbXzB4MTQ3MDA0KDB4MTdhKV0sXzB4NWQ4MmI0PV8weDIwNjIyMFtfMHgxNDcwMDQoMHgxMzgpXSxfMHg1YTVmYmI9eydoaXRzJzp7fSwndHMnOnt9fSxfMHgyOTg0ZTA9XzB4NDljYjFhPT57XzB4NWE1ZmJiWyd0cyddW18weDQ5Y2IxYV09XzB4MTA5MDhhKCk7fSxfMHgzYzA3NGI9KF8weDJjZWQ1ZSxfMHgyMzc1Y2YpPT57dmFyIF8weDFlYmJhMT1fMHgxNDcwMDQ7bGV0IF8weGMxYTNmND1fMHg1YTVmYmJbJ3RzJ11bXzB4MjM3NWNmXTtpZihkZWxldGUgXzB4NWE1ZmJiWyd0cyddW18weDIzNzVjZl0sXzB4YzFhM2Y0KXtsZXQgXzB4MTUxNzExPV8weDQ2ZGQyNyhfMHhjMWEzZjQsXzB4MTA5MDhhKCkpO18weDFkNjUyZihfMHgzZjZhZTIoXzB4MWViYmExKDB4MWVhKSxfMHgyY2VkNWUsXzB4NWQ4MmI0KCksXzB4MWJmOTViLFtfMHgxNTE3MTFdLF8weDIzNzVjZikpO319LF8weDI5ZDk2MD1fMHgyZDdhMjU9Pl8weGI1MjEwNj0+e3RyeXtfMHgyOTg0ZTAoXzB4YjUyMTA2KSxfMHgyZDdhMjUoXzB4YjUyMTA2KTt9ZmluYWxseXtfMHg0ZGIwZWJbJ2NvbnNvbGUnXVsndGltZSddPV8weDJkN2EyNTt9fSxfMHgyZDAzODI9XzB4NGNlNDJlPT5fMHgzMDc2ZTc9Pnt2YXIgXzB4MmIxMzNjPV8weDE0NzAwNDt0cnl7bGV0IFtfMHgyMTBlMWQsXzB4NTA3ZDUxXT1fMHgzMDc2ZTdbXzB4MmIxMzNjKDB4MTk2KV0oXzB4MmIxMzNjKDB4MTY1KSk7XzB4M2MwNzRiKF8weDUwN2Q1MSxfMHgyMTBlMWQpLF8weDRjZTQyZShfMHgyMTBlMWQpO31maW5hbGx5e18weDRkYjBlYlsnY29uc29sZSddW18weDJiMTMzYygweDFmNCldPV8weDRjZTQyZTt9fTtfMHg0ZGIwZWJbJ19jb25zb2xlX25pbmphJ109eydjb25zb2xlTG9nJzooXzB4YTNjNDc0LF8weDI4NWE1Nyk9Pnt2YXIgXzB4MjY3Y2VlPV8weDE0NzAwNDtfMHg0ZGIwZWJbXzB4MjY3Y2VlKDB4MWNhKV1bXzB4MjY3Y2VlKDB4MTgzKV1bJ25hbWUnXSE9PV8weDI2N2NlZSgweDFkNykmJl8weDFkNjUyZihfMHgzZjZhZTIoJ2xvZycsXzB4YTNjNDc0LF8weDVkODJiNCgpLF8weDFiZjk1YixfMHgyODVhNTcpKTt9LCdjb25zb2xlVHJhY2UnOihfMHg0ODgwOWIsXzB4NTY0NWQ4KT0+e3ZhciBfMHg0MTZmYTE9XzB4MTQ3MDA0O18weDRkYjBlYltfMHg0MTZmYTEoMHgxY2EpXVsnbG9nJ11bJ25hbWUnXSE9PSdkaXNhYmxlZFRyYWNlJyYmXzB4MWQ2NTJmKF8weDNmNmFlMihfMHg0MTZmYTEoMHgxNDIpLF8weDQ4ODA5YixfMHg1ZDgyYjQoKSxfMHgxYmY5NWIsXzB4NTY0NWQ4KSk7fSwnY29uc29sZVRpbWUnOigpPT57dmFyIF8weDE1NjE5MD1fMHgxNDcwMDQ7XzB4NGRiMGViWydjb25zb2xlJ11bXzB4MTU2MTkwKDB4MWVhKV09XzB4MjlkOTYwKF8weDRkYjBlYltfMHgxNTYxOTAoMHgxY2EpXVtfMHgxNTYxOTAoMHgxZWEpXSk7fSwnY29uc29sZVRpbWVFbmQnOigpPT57dmFyIF8weDVkNjcwYT1fMHgxNDcwMDQ7XzB4NGRiMGViW18weDVkNjcwYSgweDFjYSldW18weDVkNjcwYSgweDFmNCldPV8weDJkMDM4MihfMHg0ZGIwZWJbJ2NvbnNvbGUnXVtfMHg1ZDY3MGEoMHgxZjQpXSk7fSwnYXV0b0xvZyc6KF8weDE3MzcyNSxfMHgzN2YxMGQpPT57dmFyIF8weDJhYzBhNz1fMHgxNDcwMDQ7XzB4MWQ2NTJmKF8weDNmNmFlMihfMHgyYWMwYTcoMHgxODMpLF8weDM3ZjEwZCxfMHg1ZDgyYjQoKSxfMHgxYmY5NWIsW18weDE3MzcyNV0pKTt9LCdhdXRvVHJhY2UnOihfMHgyYTI5MzksXzB4MzVkMzEzKT0+e3ZhciBfMHg1ZGVmNGM9XzB4MTQ3MDA0O18weDFkNjUyZihfMHgzZjZhZTIoXzB4NWRlZjRjKDB4MTQyKSxfMHgzNWQzMTMsXzB4NWQ4MmI0KCksXzB4MWJmOTViLFtfMHgyYTI5MzldKSk7fSwnYXV0b1RpbWUnOihfMHg4NmU2YjEsXzB4MTA1ODI1LF8weDNkMWI1NCk9PntfMHgyOTg0ZTAoXzB4M2QxYjU0KTt9LCdhdXRvVGltZUVuZCc6KF8weDRmYTkzMCxfMHg1NTBiOTAsXzB4MWUwNjU2KT0+e18weDNjMDc0YihfMHg1NTBiOTAsXzB4MWUwNjU2KTt9fTtsZXQgXzB4MWQ2NTJmPVYoXzB4NGRiMGViLF8weDM5MDFmOCxfMHgzMzFhMGUsXzB4Mzg5OWE2LF8weDNkMzM0ZCksXzB4MWJmOTViPV8weDRkYjBlYltfMHgxNDcwMDQoMHgxODUpXTtjbGFzcyBfMHg0MzVhYTd7Y29uc3RydWN0b3IoKXt2YXIgXzB4MmI1MTU5PV8weDE0NzAwNDt0aGlzW18weDJiNTE1OSgweDFlYyldPS9eKD8hKD86ZG98aWZ8aW58Zm9yfGxldHxuZXd8dHJ5fHZhcnxjYXNlfGVsc2V8ZW51bXxldmFsfGZhbHNlfG51bGx8dGhpc3x0cnVlfHZvaWR8d2l0aHxicmVha3xjYXRjaHxjbGFzc3xjb25zdHxzdXBlcnx0aHJvd3x3aGlsZXx5aWVsZHxkZWxldGV8ZXhwb3J0fGltcG9ydHxwdWJsaWN8cmV0dXJufHN0YXRpY3xzd2l0Y2h8dHlwZW9mfGRlZmF1bHR8ZXh0ZW5kc3xmaW5hbGx5fHBhY2thZ2V8cHJpdmF0ZXxjb250aW51ZXxkZWJ1Z2dlcnxmdW5jdGlvbnxhcmd1bWVudHN8aW50ZXJmYWNlfHByb3RlY3RlZHxpbXBsZW1lbnRzfGluc3RhbmNlb2YpJClbXyRhLXpBLVpcXFxceEEwLVxcXFx1RkZGRl1bXyRhLXpBLVowLTlcXFxceEEwLVxcXFx1RkZGRl0qJC8sdGhpc1tfMHgyYjUxNTkoMHgxN2MpXT0vXigwfFsxLTldWzAtOV0qKSQvLHRoaXNbXzB4MmI1MTU5KDB4MjBmKV09LycoW15cXFxcXFxcXCddfFxcXFxcXFxcJykqJy8sdGhpc1tfMHgyYjUxNTkoMHgxYWUpXT1fMHg0ZGIwZWJbXzB4MmI1MTU5KDB4MTViKV0sdGhpc1snX0hUTUxBbGxDb2xsZWN0aW9uJ109XzB4NGRiMGViW18weDJiNTE1OSgweDE4NyldLHRoaXNbXzB4MmI1MTU5KDB4MTY0KV09T2JqZWN0W18weDJiNTE1OSgweDE1NCldLHRoaXNbXzB4MmI1MTU5KDB4MWNkKV09T2JqZWN0W18weDJiNTE1OSgweDFmYyldLHRoaXNbXzB4MmI1MTU5KDB4MWQwKV09XzB4NGRiMGViW18weDJiNTE1OSgweDFjNSldLHRoaXNbXzB4MmI1MTU5KDB4MTU4KV09UmVnRXhwW18weDJiNTE1OSgweDE4YyldW18weDJiNTE1OSgweDE1ZildLHRoaXNbXzB4MmI1MTU5KDB4MTVlKV09RGF0ZVtfMHgyYjUxNTkoMHgxOGMpXVtfMHgyYjUxNTkoMHgxNWYpXTt9WydzZXJpYWxpemUnXShfMHgxMzJlYjYsXzB4MWRlNmMyLF8weDU3Njk0OCxfMHg1ZTFkZWYpe3ZhciBfMHgzM2U0OWM9XzB4MTQ3MDA0LF8weDNhY2ZiYT10aGlzLF8weDUzNWI1MT1fMHg1NzY5NDhbJ2F1dG9FeHBhbmQnXTtmdW5jdGlvbiBfMHgzMGRmZGIoXzB4NmI3Mjg5LF8weDQwZmU0OCxfMHg0NmI0ZGQpe3ZhciBfMHg0ZDRkZGY9XzB4MWNhOTtfMHg0MGZlNDhbXzB4NGQ0ZGRmKDB4MjA0KV09XzB4NGQ0ZGRmKDB4MWY5KSxfMHg0MGZlNDhbXzB4NGQ0ZGRmKDB4MTczKV09XzB4NmI3Mjg5W18weDRkNGRkZigweDFmMCldLF8weDJjYjdhYz1fMHg0NmI0ZGRbXzB4NGQ0ZGRmKDB4MTcyKV1bJ2N1cnJlbnQnXSxfMHg0NmI0ZGRbXzB4NGQ0ZGRmKDB4MTcyKV1bJ2N1cnJlbnQnXT1fMHg0MGZlNDgsXzB4M2FjZmJhW18weDRkNGRkZigweDE2ZCldKF8weDQwZmU0OCxfMHg0NmI0ZGQpO31pZihfMHgxZGU2YzImJl8weDFkZTZjMltfMHgzM2U0OWMoMHgxOWYpXSlfMHgzMGRmZGIoXzB4MWRlNmMyLF8weDEzMmViNixfMHg1NzY5NDgpO2Vsc2UgdHJ5e18weDU3Njk0OFtfMHgzM2U0OWMoMHgxZDgpXSsrLF8weDU3Njk0OFtfMHgzM2U0OWMoMHgxYWYpXSYmXzB4NTc2OTQ4W18weDMzZTQ5YygweDE2MyldWydwdXNoJ10oXzB4MWRlNmMyKTt2YXIgXzB4NDE0NzE1LF8weDViMjM4OSxfMHg1MTMxMjIsXzB4MmY1MjEyLF8weDRlZWZiMj1bXSxfMHg0YzE4ZDI9W10sXzB4MjE4Y2VjLF8weDU0N2M2OT10aGlzW18weDMzZTQ5YygweDFhYyldKF8weDFkZTZjMiksXzB4MTEyNTZlPV8weDU0N2M2OT09PV8weDMzZTQ5YygweDE3ZSksXzB4NDdjYjM5PSEweDEsXzB4MmZkOGY4PV8weDU0N2M2OT09PSdmdW5jdGlvbicsXzB4M2JjZDFjPXRoaXNbXzB4MzNlNDljKDB4MTRjKV0oXzB4NTQ3YzY5KSxfMHg1MGM2NDU9dGhpc1tfMHgzM2U0OWMoMHgxZjYpXShfMHg1NDdjNjkpLF8weDRlNWJkNz1fMHgzYmNkMWN8fF8weDUwYzY0NSxfMHg1OTM4ZDI9e30sXzB4NDRjMDlmPTB4MCxfMHg1OGEwYjU9ITB4MSxfMHgyY2I3YWMsXzB4NGZjODg4PS9eKChbMS05XXsxfVswLTldKil8MCkkLztpZihfMHg1NzY5NDhbXzB4MzNlNDljKDB4MWY4KV0pe2lmKF8weDExMjU2ZSl7aWYoXzB4NWIyMzg5PV8weDFkZTZjMlsnbGVuZ3RoJ10sXzB4NWIyMzg5Pl8weDU3Njk0OFsnZWxlbWVudHMnXSl7Zm9yKF8weDUxMzEyMj0weDAsXzB4MmY1MjEyPV8weDU3Njk0OFtfMHgzM2U0OWMoMHgxMzYpXSxfMHg0MTQ3MTU9XzB4NTEzMTIyO18weDQxNDcxNTxfMHgyZjUyMTI7XzB4NDE0NzE1KyspXzB4NGMxOGQyWydwdXNoJ10oXzB4M2FjZmJhW18weDMzZTQ5YygweDFjZildKF8weDRlZWZiMixfMHgxZGU2YzIsXzB4NTQ3YzY5LF8weDQxNDcxNSxfMHg1NzY5NDgpKTtfMHgxMzJlYjZbXzB4MzNlNDljKDB4MWU2KV09ITB4MDt9ZWxzZXtmb3IoXzB4NTEzMTIyPTB4MCxfMHgyZjUyMTI9XzB4NWIyMzg5LF8weDQxNDcxNT1fMHg1MTMxMjI7XzB4NDE0NzE1PF8weDJmNTIxMjtfMHg0MTQ3MTUrKylfMHg0YzE4ZDJbXzB4MzNlNDljKDB4MThlKV0oXzB4M2FjZmJhWydfYWRkUHJvcGVydHknXShfMHg0ZWVmYjIsXzB4MWRlNmMyLF8weDU0N2M2OSxfMHg0MTQ3MTUsXzB4NTc2OTQ4KSk7fV8weDU3Njk0OFtfMHgzM2U0OWMoMHgxZTApXSs9XzB4NGMxOGQyWydsZW5ndGgnXTt9aWYoIShfMHg1NDdjNjk9PT1fMHgzM2U0OWMoMHgxNDkpfHxfMHg1NDdjNjk9PT1fMHgzM2U0OWMoMHgxNWIpKSYmIV8weDNiY2QxYyYmXzB4NTQ3YzY5IT09XzB4MzNlNDljKDB4MWI0KSYmXzB4NTQ3YzY5IT09XzB4MzNlNDljKDB4MTc5KSYmXzB4NTQ3YzY5IT09J2JpZ2ludCcpe3ZhciBfMHgxNmNjMGU9XzB4NWUxZGVmWydwcm9wcyddfHxfMHg1NzY5NDhbXzB4MzNlNDljKDB4MTZlKV07aWYodGhpc1tfMHgzM2U0OWMoMHgxOWQpXShfMHgxZGU2YzIpPyhfMHg0MTQ3MTU9MHgwLF8weDFkZTZjMltfMHgzM2U0OWMoMHgxZDEpXShmdW5jdGlvbihfMHgzOGFkOWYpe3ZhciBfMHgxYjY1ZjQ9XzB4MzNlNDljO2lmKF8weDQ0YzA5ZisrLF8weDU3Njk0OFsnYXV0b0V4cGFuZFByb3BlcnR5Q291bnQnXSsrLF8weDQ0YzA5Zj5fMHgxNmNjMGUpe18weDU4YTBiNT0hMHgwO3JldHVybjt9aWYoIV8weDU3Njk0OFtfMHgxYjY1ZjQoMHgyMTkpXSYmXzB4NTc2OTQ4W18weDFiNjVmNCgweDFhZildJiZfMHg1NzY5NDhbXzB4MWI2NWY0KDB4MWUwKV0+XzB4NTc2OTQ4W18weDFiNjVmNCgweDFjNCldKXtfMHg1OGEwYjU9ITB4MDtyZXR1cm47fV8weDRjMThkMltfMHgxYjY1ZjQoMHgxOGUpXShfMHgzYWNmYmFbXzB4MWI2NWY0KDB4MWNmKV0oXzB4NGVlZmIyLF8weDFkZTZjMixfMHgxYjY1ZjQoMHgxYmMpLF8weDQxNDcxNSsrLF8weDU3Njk0OCxmdW5jdGlvbihfMHgzMGM1YzQpe3JldHVybiBmdW5jdGlvbigpe3JldHVybiBfMHgzMGM1YzQ7fTt9KF8weDM4YWQ5ZikpKTt9KSk6dGhpc1tfMHgzM2U0OWMoMHgxZTEpXShfMHgxZGU2YzIpJiZfMHgxZGU2YzJbJ2ZvckVhY2gnXShmdW5jdGlvbihfMHgxZDhmNDcsXzB4NTZlOTBmKXt2YXIgXzB4NTdhNzc1PV8weDMzZTQ5YztpZihfMHg0NGMwOWYrKyxfMHg1NzY5NDhbXzB4NTdhNzc1KDB4MWUwKV0rKyxfMHg0NGMwOWY+XzB4MTZjYzBlKXtfMHg1OGEwYjU9ITB4MDtyZXR1cm47fWlmKCFfMHg1NzY5NDhbJ2lzRXhwcmVzc2lvblRvRXZhbHVhdGUnXSYmXzB4NTc2OTQ4W18weDU3YTc3NSgweDFhZildJiZfMHg1NzY5NDhbXzB4NTdhNzc1KDB4MWUwKV0+XzB4NTc2OTQ4W18weDU3YTc3NSgweDFjNCldKXtfMHg1OGEwYjU9ITB4MDtyZXR1cm47fXZhciBfMHg0NTQ3YTI9XzB4NTZlOTBmWyd0b1N0cmluZyddKCk7XzB4NDU0N2EyW18weDU3YTc3NSgweDE0YSldPjB4NjQmJihfMHg0NTQ3YTI9XzB4NDU0N2EyW18weDU3YTc3NSgweDIwYSldKDB4MCwweDY0KStfMHg1N2E3NzUoMHgxNTApKSxfMHg0YzE4ZDJbXzB4NTdhNzc1KDB4MThlKV0oXzB4M2FjZmJhW18weDU3YTc3NSgweDFjZildKF8weDRlZWZiMixfMHgxZGU2YzIsXzB4NTdhNzc1KDB4MTk0KSxfMHg0NTQ3YTIsXzB4NTc2OTQ4LGZ1bmN0aW9uKF8weDIzMTdkYyl7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIF8weDIzMTdkYzt9O30oXzB4MWQ4ZjQ3KSkpO30pLCFfMHg0N2NiMzkpe3RyeXtmb3IoXzB4MjE4Y2VjIGluIF8weDFkZTZjMilpZighKF8weDExMjU2ZSYmXzB4NGZjODg4W18weDMzZTQ5YygweDFmMyldKF8weDIxOGNlYykpJiYhdGhpc1snX2JsYWNrbGlzdGVkUHJvcGVydHknXShfMHgxZGU2YzIsXzB4MjE4Y2VjLF8weDU3Njk0OCkpe2lmKF8weDQ0YzA5ZisrLF8weDU3Njk0OFtfMHgzM2U0OWMoMHgxZTApXSsrLF8weDQ0YzA5Zj5fMHgxNmNjMGUpe18weDU4YTBiNT0hMHgwO2JyZWFrO31pZighXzB4NTc2OTQ4Wydpc0V4cHJlc3Npb25Ub0V2YWx1YXRlJ10mJl8weDU3Njk0OFsnYXV0b0V4cGFuZCddJiZfMHg1NzY5NDhbXzB4MzNlNDljKDB4MWUwKV0+XzB4NTc2OTQ4WydhdXRvRXhwYW5kTGltaXQnXSl7XzB4NThhMGI1PSEweDA7YnJlYWs7fV8weDRjMThkMltfMHgzM2U0OWMoMHgxOGUpXShfMHgzYWNmYmFbJ19hZGRPYmplY3RQcm9wZXJ0eSddKF8weDRlZWZiMixfMHg1OTM4ZDIsXzB4MWRlNmMyLF8weDU0N2M2OSxfMHgyMThjZWMsXzB4NTc2OTQ4KSk7fX1jYXRjaHt9aWYoXzB4NTkzOGQyW18weDMzZTQ5YygweDIwYildPSEweDAsXzB4MmZkOGY4JiYoXzB4NTkzOGQyW18weDMzZTQ5YygweDE5OSldPSEweDApLCFfMHg1OGEwYjUpe3ZhciBfMHg1YjUxNjI9W11bXzB4MzNlNDljKDB4MTY3KV0odGhpc1tfMHgzM2U0OWMoMHgxY2QpXShfMHgxZGU2YzIpKVsnY29uY2F0J10odGhpc1tfMHgzM2U0OWMoMHgxM2YpXShfMHgxZGU2YzIpKTtmb3IoXzB4NDE0NzE1PTB4MCxfMHg1YjIzODk9XzB4NWI1MTYyW18weDMzZTQ5YygweDE0YSldO18weDQxNDcxNTxfMHg1YjIzODk7XzB4NDE0NzE1KyspaWYoXzB4MjE4Y2VjPV8weDViNTE2MltfMHg0MTQ3MTVdLCEoXzB4MTEyNTZlJiZfMHg0ZmM4ODhbXzB4MzNlNDljKDB4MWYzKV0oXzB4MjE4Y2VjWyd0b1N0cmluZyddKCkpKSYmIXRoaXNbXzB4MzNlNDljKDB4MTYyKV0oXzB4MWRlNmMyLF8weDIxOGNlYyxfMHg1NzY5NDgpJiYhXzB4NTkzOGQyWydfcF8nK18weDIxOGNlY1tfMHgzM2U0OWMoMHgxNWYpXSgpXSl7aWYoXzB4NDRjMDlmKyssXzB4NTc2OTQ4W18weDMzZTQ5YygweDFlMCldKyssXzB4NDRjMDlmPl8weDE2Y2MwZSl7XzB4NThhMGI1PSEweDA7YnJlYWs7fWlmKCFfMHg1NzY5NDhbXzB4MzNlNDljKDB4MjE5KV0mJl8weDU3Njk0OFtfMHgzM2U0OWMoMHgxYWYpXSYmXzB4NTc2OTQ4W18weDMzZTQ5YygweDFlMCldPl8weDU3Njk0OFtfMHgzM2U0OWMoMHgxYzQpXSl7XzB4NThhMGI1PSEweDA7YnJlYWs7fV8weDRjMThkMltfMHgzM2U0OWMoMHgxOGUpXShfMHgzYWNmYmFbXzB4MzNlNDljKDB4MWIxKV0oXzB4NGVlZmIyLF8weDU5MzhkMixfMHgxZGU2YzIsXzB4NTQ3YzY5LF8weDIxOGNlYyxfMHg1NzY5NDgpKTt9fX19fWlmKF8weDEzMmViNlsndHlwZSddPV8weDU0N2M2OSxfMHg0ZTViZDc/KF8weDEzMmViNlsndmFsdWUnXT1fMHgxZGU2YzJbXzB4MzNlNDljKDB4MWU1KV0oKSx0aGlzW18weDMzZTQ5YygweDE5MildKF8weDU0N2M2OSxfMHgxMzJlYjYsXzB4NTc2OTQ4LF8weDVlMWRlZikpOl8weDU0N2M2OT09PSdkYXRlJz9fMHgxMzJlYjZbXzB4MzNlNDljKDB4MTUzKV09dGhpc1snX2RhdGVUb1N0cmluZyddW18weDMzZTQ5YygweDE3NildKF8weDFkZTZjMik6XzB4NTQ3YzY5PT09XzB4MzNlNDljKDB4MWE1KT9fMHgxMzJlYjZbJ3ZhbHVlJ109XzB4MWRlNmMyW18weDMzZTQ5YygweDE1ZildKCk6XzB4NTQ3YzY5PT09J1JlZ0V4cCc/XzB4MTMyZWI2W18weDMzZTQ5YygweDE1MyldPXRoaXNbXzB4MzNlNDljKDB4MTU4KV1bXzB4MzNlNDljKDB4MTc2KV0oXzB4MWRlNmMyKTpfMHg1NDdjNjk9PT1fMHgzM2U0OWMoMHgxNDEpJiZ0aGlzW18weDMzZTQ5YygweDFkMCldP18weDEzMmViNlsndmFsdWUnXT10aGlzW18weDMzZTQ5YygweDFkMCldW18weDMzZTQ5YygweDE4YyldWyd0b1N0cmluZyddWydjYWxsJ10oXzB4MWRlNmMyKTohXzB4NTc2OTQ4W18weDMzZTQ5YygweDFmOCldJiYhKF8weDU0N2M2OT09PV8weDMzZTQ5YygweDE0OSl8fF8weDU0N2M2OT09PV8weDMzZTQ5YygweDE1YikpJiYoZGVsZXRlIF8weDEzMmViNlsndmFsdWUnXSxfMHgxMzJlYjZbJ2NhcHBlZCddPSEweDApLF8weDU4YTBiNSYmKF8weDEzMmViNltfMHgzM2U0OWMoMHgyMDcpXT0hMHgwKSxfMHgyY2I3YWM9XzB4NTc2OTQ4W18weDMzZTQ5YygweDE3MildWydjdXJyZW50J10sXzB4NTc2OTQ4Wydub2RlJ11bJ2N1cnJlbnQnXT1fMHgxMzJlYjYsdGhpc1tfMHgzM2U0OWMoMHgxNmQpXShfMHgxMzJlYjYsXzB4NTc2OTQ4KSxfMHg0YzE4ZDJbJ2xlbmd0aCddKXtmb3IoXzB4NDE0NzE1PTB4MCxfMHg1YjIzODk9XzB4NGMxOGQyW18weDMzZTQ5YygweDE0YSldO18weDQxNDcxNTxfMHg1YjIzODk7XzB4NDE0NzE1KyspXzB4NGMxOGQyW18weDQxNDcxNV0oXzB4NDE0NzE1KTt9XzB4NGVlZmIyWydsZW5ndGgnXSYmKF8weDEzMmViNltfMHgzM2U0OWMoMHgxNmUpXT1fMHg0ZWVmYjIpO31jYXRjaChfMHhjMDc2MGYpe18weDMwZGZkYihfMHhjMDc2MGYsXzB4MTMyZWI2LF8weDU3Njk0OCk7fXJldHVybiB0aGlzWydfYWRkaXRpb25hbE1ldGFkYXRhJ10oXzB4MWRlNmMyLF8weDEzMmViNiksdGhpc1tfMHgzM2U0OWMoMHgxNzgpXShfMHgxMzJlYjYsXzB4NTc2OTQ4KSxfMHg1NzY5NDhbXzB4MzNlNDljKDB4MTcyKV1bXzB4MzNlNDljKDB4MTRmKV09XzB4MmNiN2FjLF8weDU3Njk0OFtfMHgzM2U0OWMoMHgxZDgpXS0tLF8weDU3Njk0OFsnYXV0b0V4cGFuZCddPV8weDUzNWI1MSxfMHg1NzY5NDhbXzB4MzNlNDljKDB4MWFmKV0mJl8weDU3Njk0OFsnYXV0b0V4cGFuZFByZXZpb3VzT2JqZWN0cyddW18weDMzZTQ5YygweDFjZSldKCksXzB4MTMyZWI2O31bXzB4MTQ3MDA0KDB4MTNmKV0oXzB4NDJmYzc5KXt2YXIgXzB4MmViYTM3PV8weDE0NzAwNDtyZXR1cm4gT2JqZWN0WydnZXRPd25Qcm9wZXJ0eVN5bWJvbHMnXT9PYmplY3RbXzB4MmViYTM3KDB4MWZhKV0oXzB4NDJmYzc5KTpbXTt9WydfaXNTZXQnXShfMHg0ZTFjNzQpe3ZhciBfMHgxNTU4Yzg9XzB4MTQ3MDA0O3JldHVybiEhKF8weDRlMWM3NCYmXzB4NGRiMGViW18weDE1NThjOCgweDFiYyldJiZ0aGlzW18weDE1NThjOCgweDE3YildKF8weDRlMWM3NCk9PT0nW29iamVjdFxcXFx4MjBTZXRdJyYmXzB4NGUxYzc0W18weDE1NThjOCgweDFkMSldKTt9WydfYmxhY2tsaXN0ZWRQcm9wZXJ0eSddKF8weDE0ZmM4YSxfMHg1MTI0ZDgsXzB4MzFiZWQ3KXt2YXIgXzB4MjIyNGUxPV8weDE0NzAwNDtyZXR1cm4gXzB4MzFiZWQ3W18weDIyMjRlMSgweDFiZildP3R5cGVvZiBfMHgxNGZjOGFbXzB4NTEyNGQ4XT09J2Z1bmN0aW9uJzohMHgxO31bXzB4MTQ3MDA0KDB4MWFjKV0oXzB4MjRkODVhKXt2YXIgXzB4MjdiZDg2PV8weDE0NzAwNCxfMHg1NDIwOGI9Jyc7cmV0dXJuIF8weDU0MjA4Yj10eXBlb2YgXzB4MjRkODVhLF8weDU0MjA4Yj09PV8weDI3YmQ4NigweDFkYik/dGhpc1tfMHgyN2JkODYoMHgxN2IpXShfMHgyNGQ4NWEpPT09XzB4MjdiZDg2KDB4MTU1KT9fMHg1NDIwOGI9XzB4MjdiZDg2KDB4MTdlKTp0aGlzW18weDI3YmQ4NigweDE3YildKF8weDI0ZDg1YSk9PT1fMHgyN2JkODYoMHgxYTcpP18weDU0MjA4Yj1fMHgyN2JkODYoMHgxZTgpOnRoaXNbXzB4MjdiZDg2KDB4MTdiKV0oXzB4MjRkODVhKT09PV8weDI3YmQ4NigweDE4Mik/XzB4NTQyMDhiPV8weDI3YmQ4NigweDFhNSk6XzB4MjRkODVhPT09bnVsbD9fMHg1NDIwOGI9XzB4MjdiZDg2KDB4MTQ5KTpfMHgyNGQ4NWFbXzB4MjdiZDg2KDB4MjFhKV0mJihfMHg1NDIwOGI9XzB4MjRkODVhW18weDI3YmQ4NigweDIxYSldWyduYW1lJ118fF8weDU0MjA4Yik6XzB4NTQyMDhiPT09XzB4MjdiZDg2KDB4MTViKSYmdGhpc1snX0hUTUxBbGxDb2xsZWN0aW9uJ10mJl8weDI0ZDg1YSBpbnN0YW5jZW9mIHRoaXNbXzB4MjdiZDg2KDB4MjAyKV0mJihfMHg1NDIwOGI9J0hUTUxBbGxDb2xsZWN0aW9uJyksXzB4NTQyMDhiO31bXzB4MTQ3MDA0KDB4MTdiKV0oXzB4M2NhZWIwKXt2YXIgXzB4NWFjYzQ4PV8weDE0NzAwNDtyZXR1cm4gT2JqZWN0Wydwcm90b3R5cGUnXVtfMHg1YWNjNDgoMHgxNWYpXVtfMHg1YWNjNDgoMHgxNzYpXShfMHgzY2FlYjApO31bXzB4MTQ3MDA0KDB4MTRjKV0oXzB4M2NhYzY4KXt2YXIgXzB4MjdmNjQxPV8weDE0NzAwNDtyZXR1cm4gXzB4M2NhYzY4PT09XzB4MjdmNjQxKDB4MTk3KXx8XzB4M2NhYzY4PT09XzB4MjdmNjQxKDB4MWUyKXx8XzB4M2NhYzY4PT09XzB4MjdmNjQxKDB4MjAwKTt9W18weDE0NzAwNCgweDFmNildKF8weDNjY2MxYSl7dmFyIF8weDQ1NzJiZT1fMHgxNDcwMDQ7cmV0dXJuIF8weDNjY2MxYT09PSdCb29sZWFuJ3x8XzB4M2NjYzFhPT09J1N0cmluZyd8fF8weDNjY2MxYT09PV8weDQ1NzJiZSgweDE3MCk7fVtfMHgxNDcwMDQoMHgxY2YpXShfMHgxOTc0MWEsXzB4MjAzMzdiLF8weDNhMGI3YixfMHg0YWY2Y2QsXzB4MTc4NjQwLF8weDI3YmRmNyl7dmFyIF8weDk0YzFjMj10aGlzO3JldHVybiBmdW5jdGlvbihfMHhlYjI2NGQpe3ZhciBfMHg0ZDE5OGE9XzB4MWNhOSxfMHgxZjMxOGQ9XzB4MTc4NjQwW18weDRkMTk4YSgweDE3MildW18weDRkMTk4YSgweDE0ZildLF8weDFhN2NlYT1fMHgxNzg2NDBbXzB4NGQxOThhKDB4MTcyKV1bJ2luZGV4J10sXzB4NWE0NmY3PV8weDE3ODY0MFtfMHg0ZDE5OGEoMHgxNzIpXVtfMHg0ZDE5OGEoMHgxNzEpXTtfMHgxNzg2NDBbXzB4NGQxOThhKDB4MTcyKV1bJ3BhcmVudCddPV8weDFmMzE4ZCxfMHgxNzg2NDBbXzB4NGQxOThhKDB4MTcyKV1bXzB4NGQxOThhKDB4MWYyKV09dHlwZW9mIF8weDRhZjZjZD09XzB4NGQxOThhKDB4MjAwKT9fMHg0YWY2Y2Q6XzB4ZWIyNjRkLF8weDE5NzQxYVsncHVzaCddKF8weDk0YzFjMlsnX3Byb3BlcnR5J10oXzB4MjAzMzdiLF8weDNhMGI3YixfMHg0YWY2Y2QsXzB4MTc4NjQwLF8weDI3YmRmNykpLF8weDE3ODY0MFtfMHg0ZDE5OGEoMHgxNzIpXVsncGFyZW50J109XzB4NWE0NmY3LF8weDE3ODY0MFsnbm9kZSddWydpbmRleCddPV8weDFhN2NlYTt9O31bXzB4MTQ3MDA0KDB4MWIxKV0oXzB4MTg0YmYwLF8weDQzMjY2ZixfMHgzYThkYmYsXzB4Mjc3OWU2LF8weDI5ZGE4MCxfMHg1ODdjNGQsXzB4MTJiZDIwKXt2YXIgXzB4NTRhZGIxPXRoaXM7cmV0dXJuIF8weDQzMjY2ZlsnX3BfJytfMHgyOWRhODBbJ3RvU3RyaW5nJ10oKV09ITB4MCxmdW5jdGlvbihfMHhhZmExNTgpe3ZhciBfMHg0MjZhODQ9XzB4MWNhOSxfMHg2ZjI5OTU9XzB4NTg3YzRkW18weDQyNmE4NCgweDE3MildW18weDQyNmE4NCgweDE0ZildLF8weDM3MWM0Mj1fMHg1ODdjNGRbJ25vZGUnXVtfMHg0MjZhODQoMHgxZjIpXSxfMHgzZGNhNmE9XzB4NTg3YzRkWydub2RlJ11bXzB4NDI2YTg0KDB4MTcxKV07XzB4NTg3YzRkW18weDQyNmE4NCgweDE3MildWydwYXJlbnQnXT1fMHg2ZjI5OTUsXzB4NTg3YzRkW18weDQyNmE4NCgweDE3MildW18weDQyNmE4NCgweDFmMildPV8weGFmYTE1OCxfMHgxODRiZjBbXzB4NDI2YTg0KDB4MThlKV0oXzB4NTRhZGIxW18weDQyNmE4NCgweDFlMyldKF8weDNhOGRiZixfMHgyNzc5ZTYsXzB4MjlkYTgwLF8weDU4N2M0ZCxfMHgxMmJkMjApKSxfMHg1ODdjNGRbXzB4NDI2YTg0KDB4MTcyKV1bXzB4NDI2YTg0KDB4MTcxKV09XzB4M2RjYTZhLF8weDU4N2M0ZFtfMHg0MjZhODQoMHgxNzIpXVtfMHg0MjZhODQoMHgxZjIpXT1fMHgzNzFjNDI7fTt9W18weDE0NzAwNCgweDFlMyldKF8weDIzNGZhZixfMHgxMmYwNjQsXzB4MjJiZDZkLF8weDUxY2ViNyxfMHgzZGY4MGIpe3ZhciBfMHgyYWFiMzI9XzB4MTQ3MDA0LF8weDVhMzQ1YT10aGlzO18weDNkZjgwYnx8KF8weDNkZjgwYj1mdW5jdGlvbihfMHgxNGQ2MjYsXzB4MWQ0YzQ5KXtyZXR1cm4gXzB4MTRkNjI2W18weDFkNGM0OV07fSk7dmFyIF8weDFlMTcyZj1fMHgyMmJkNmRbJ3RvU3RyaW5nJ10oKSxfMHg0NGVmYTY9XzB4NTFjZWI3WydleHByZXNzaW9uc1RvRXZhbHVhdGUnXXx8e30sXzB4NTQ5ZTMzPV8weDUxY2ViN1tfMHgyYWFiMzIoMHgxZjgpXSxfMHg1NmU2NDQ9XzB4NTFjZWI3Wydpc0V4cHJlc3Npb25Ub0V2YWx1YXRlJ107dHJ5e3ZhciBfMHg0Y2QyODM9dGhpc1tfMHgyYWFiMzIoMHgxZTEpXShfMHgyMzRmYWYpLF8weGEyNDIzZD1fMHgxZTE3MmY7XzB4NGNkMjgzJiZfMHhhMjQyM2RbMHgwXT09PSdcXFxceDI3JyYmKF8weGEyNDIzZD1fMHhhMjQyM2RbXzB4MmFhYjMyKDB4MTZhKV0oMHgxLF8weGEyNDIzZFsnbGVuZ3RoJ10tMHgyKSk7dmFyIF8weDE3NWY1Mz1fMHg1MWNlYjdbXzB4MmFhYjMyKDB4MWMwKV09XzB4NDRlZmE2WydfcF8nK18weGEyNDIzZF07XzB4MTc1ZjUzJiYoXzB4NTFjZWI3W18weDJhYWIzMigweDFmOCldPV8weDUxY2ViN1tfMHgyYWFiMzIoMHgxZjgpXSsweDEpLF8weDUxY2ViN1tfMHgyYWFiMzIoMHgyMTkpXT0hIV8weDE3NWY1Mzt2YXIgXzB4MTJmNWRkPXR5cGVvZiBfMHgyMmJkNmQ9PV8weDJhYWIzMigweDE0MSksXzB4MzU4NTlkPXsnbmFtZSc6XzB4MTJmNWRkfHxfMHg0Y2QyODM/XzB4MWUxNzJmOnRoaXNbXzB4MmFhYjMyKDB4MWM2KV0oXzB4MWUxNzJmKX07aWYoXzB4MTJmNWRkJiYoXzB4MzU4NTlkW18weDJhYWIzMigweDE0MSldPSEweDApLCEoXzB4MTJmMDY0PT09XzB4MmFhYjMyKDB4MTdlKXx8XzB4MTJmMDY0PT09J0Vycm9yJykpe3ZhciBfMHg0ZDVjYWE9dGhpc1snX2dldE93blByb3BlcnR5RGVzY3JpcHRvciddKF8weDIzNGZhZixfMHgyMmJkNmQpO2lmKF8weDRkNWNhYSYmKF8weDRkNWNhYVtfMHgyYWFiMzIoMHgxOGEpXSYmKF8weDM1ODU5ZFtfMHgyYWFiMzIoMHgxYTkpXT0hMHgwKSxfMHg0ZDVjYWFbJ2dldCddJiYhXzB4MTc1ZjUzJiYhXzB4NTFjZWI3W18weDJhYWIzMigweDE4NildKSlyZXR1cm4gXzB4MzU4NTlkWydnZXR0ZXInXT0hMHgwLHRoaXNbJ19wcm9jZXNzVHJlZU5vZGVSZXN1bHQnXShfMHgzNTg1OWQsXzB4NTFjZWI3KSxfMHgzNTg1OWQ7fXZhciBfMHgzOGRkMjM7dHJ5e18weDM4ZGQyMz1fMHgzZGY4MGIoXzB4MjM0ZmFmLF8weDIyYmQ2ZCk7fWNhdGNoKF8weDUyMGRiZil7cmV0dXJuIF8weDM1ODU5ZD17J25hbWUnOl8weDFlMTcyZiwndHlwZSc6XzB4MmFhYjMyKDB4MWY5KSwnZXJyb3InOl8weDUyMGRiZltfMHgyYWFiMzIoMHgxZjApXX0sdGhpc1snX3Byb2Nlc3NUcmVlTm9kZVJlc3VsdCddKF8weDM1ODU5ZCxfMHg1MWNlYjcpLF8weDM1ODU5ZDt9dmFyIF8weDFlOWY4Yz10aGlzW18weDJhYWIzMigweDFhYyldKF8weDM4ZGQyMyksXzB4MmE2NWY4PXRoaXNbJ19pc1ByaW1pdGl2ZVR5cGUnXShfMHgxZTlmOGMpO2lmKF8weDM1ODU5ZFtfMHgyYWFiMzIoMHgyMDQpXT1fMHgxZTlmOGMsXzB4MmE2NWY4KXRoaXNbXzB4MmFhYjMyKDB4MWI2KV0oXzB4MzU4NTlkLF8weDUxY2ViNyxfMHgzOGRkMjMsZnVuY3Rpb24oKXt2YXIgXzB4NDcyZWQxPV8weDJhYWIzMjtfMHgzNTg1OWRbJ3ZhbHVlJ109XzB4MzhkZDIzWyd2YWx1ZU9mJ10oKSwhXzB4MTc1ZjUzJiZfMHg1YTM0NWFbXzB4NDcyZWQxKDB4MTkyKV0oXzB4MWU5ZjhjLF8weDM1ODU5ZCxfMHg1MWNlYjcse30pO30pO2Vsc2V7dmFyIF8weDNiMTZlNz1fMHg1MWNlYjdbXzB4MmFhYjMyKDB4MWFmKV0mJl8weDUxY2ViN1snbGV2ZWwnXTxfMHg1MWNlYjdbJ2F1dG9FeHBhbmRNYXhEZXB0aCddJiZfMHg1MWNlYjdbJ2F1dG9FeHBhbmRQcmV2aW91c09iamVjdHMnXVtfMHgyYWFiMzIoMHgxNWQpXShfMHgzOGRkMjMpPDB4MCYmXzB4MWU5ZjhjIT09XzB4MmFhYjMyKDB4MTg0KSYmXzB4NTFjZWI3W18weDJhYWIzMigweDFlMCldPF8weDUxY2ViN1tfMHgyYWFiMzIoMHgxYzQpXTtfMHgzYjE2ZTd8fF8weDUxY2ViN1tfMHgyYWFiMzIoMHgxZDgpXTxfMHg1NDllMzN8fF8weDE3NWY1Mz8odGhpc1snc2VyaWFsaXplJ10oXzB4MzU4NTlkLF8weDM4ZGQyMyxfMHg1MWNlYjcsXzB4MTc1ZjUzfHx7fSksdGhpc1tfMHgyYWFiMzIoMHgxYzcpXShfMHgzOGRkMjMsXzB4MzU4NTlkKSk6dGhpc1tfMHgyYWFiMzIoMHgxYjYpXShfMHgzNTg1OWQsXzB4NTFjZWI3LF8weDM4ZGQyMyxmdW5jdGlvbigpe3ZhciBfMHgzNTM3ODE9XzB4MmFhYjMyO18weDFlOWY4Yz09PV8weDM1Mzc4MSgweDE0OSl8fF8weDFlOWY4Yz09PSd1bmRlZmluZWQnfHwoZGVsZXRlIF8weDM1ODU5ZFsndmFsdWUnXSxfMHgzNTg1OWRbXzB4MzUzNzgxKDB4MjE2KV09ITB4MCk7fSk7fXJldHVybiBfMHgzNTg1OWQ7fWZpbmFsbHl7XzB4NTFjZWI3W18weDJhYWIzMigweDFjMCldPV8weDQ0ZWZhNixfMHg1MWNlYjdbXzB4MmFhYjMyKDB4MWY4KV09XzB4NTQ5ZTMzLF8weDUxY2ViN1tfMHgyYWFiMzIoMHgyMTkpXT1fMHg1NmU2NDQ7fX1bXzB4MTQ3MDA0KDB4MTkyKV0oXzB4MmM3MDcyLF8weDI0OGE4NSxfMHg1NjQ1ZTYsXzB4NThmYWFhKXt2YXIgXzB4MTA3YjZkPV8weDE0NzAwNCxfMHg0YWNlNzI9XzB4NThmYWFhW18weDEwN2I2ZCgweDFjOSldfHxfMHg1NjQ1ZTZbXzB4MTA3YjZkKDB4MWM5KV07aWYoKF8weDJjNzA3Mj09PV8weDEwN2I2ZCgweDFlMil8fF8weDJjNzA3Mj09PV8weDEwN2I2ZCgweDFiNCkpJiZfMHgyNDhhODVbXzB4MTA3YjZkKDB4MTUzKV0pe2xldCBfMHg1ZTdiZGQ9XzB4MjQ4YTg1W18weDEwN2I2ZCgweDE1MyldW18weDEwN2I2ZCgweDE0YSldO18weDU2NDVlNltfMHgxMDdiNmQoMHgyMGUpXSs9XzB4NWU3YmRkLF8weDU2NDVlNltfMHgxMDdiNmQoMHgyMGUpXT5fMHg1NjQ1ZTZbXzB4MTA3YjZkKDB4MTc1KV0/KF8weDI0OGE4NVtfMHgxMDdiNmQoMHgyMTYpXT0nJyxkZWxldGUgXzB4MjQ4YTg1W18weDEwN2I2ZCgweDE1MyldKTpfMHg1ZTdiZGQ+XzB4NGFjZTcyJiYoXzB4MjQ4YTg1W18weDEwN2I2ZCgweDIxNildPV8weDI0OGE4NVtfMHgxMDdiNmQoMHgxNTMpXVtfMHgxMDdiNmQoMHgxNmEpXSgweDAsXzB4NGFjZTcyKSxkZWxldGUgXzB4MjQ4YTg1Wyd2YWx1ZSddKTt9fVtfMHgxNDcwMDQoMHgxZTEpXShfMHg1YTI5ZTUpe3ZhciBfMHg1ZWY2ZDA9XzB4MTQ3MDA0O3JldHVybiEhKF8weDVhMjllNSYmXzB4NGRiMGViWydNYXAnXSYmdGhpc1tfMHg1ZWY2ZDAoMHgxN2IpXShfMHg1YTI5ZTUpPT09J1tvYmplY3RcXFxceDIwTWFwXScmJl8weDVhMjllNVtfMHg1ZWY2ZDAoMHgxZDEpXSk7fVtfMHgxNDcwMDQoMHgxYzYpXShfMHgxMjIzOTgpe3ZhciBfMHgyMTY1M2I9XzB4MTQ3MDA0O2lmKF8weDEyMjM5OFtfMHgyMTY1M2IoMHgxYjcpXSgvXlxcXFxkKyQvKSlyZXR1cm4gXzB4MTIyMzk4O3ZhciBfMHgxNWI3MTk7dHJ5e18weDE1YjcxOT1KU09OW18weDIxNjUzYigweDFlZildKCcnK18weDEyMjM5OCk7fWNhdGNoe18weDE1YjcxOT0nXFxcXHgyMicrdGhpc1tfMHgyMTY1M2IoMHgxN2IpXShfMHgxMjIzOTgpKydcXFxceDIyJzt9cmV0dXJuIF8weDE1YjcxOVtfMHgyMTY1M2IoMHgxYjcpXSgvXlxcXCIoW2EtekEtWl9dW2EtekEtWl8wLTldKilcXFwiJC8pP18weDE1YjcxOT1fMHgxNWI3MTlbXzB4MjE2NTNiKDB4MTZhKV0oMHgxLF8weDE1YjcxOVsnbGVuZ3RoJ10tMHgyKTpfMHgxNWI3MTk9XzB4MTViNzE5WydyZXBsYWNlJ10oLycvZywnXFxcXHg1Y1xcXFx4MjcnKVsncmVwbGFjZSddKC9cXFxcXFxcXFxcXCIvZywnXFxcXHgyMicpW18weDIxNjUzYigweDIwNSldKC8oXlxcXCJ8XFxcIiQpL2csJ1xcXFx4MjcnKSxfMHgxNWI3MTk7fVtfMHgxNDcwMDQoMHgxYjYpXShfMHgxNTlhMGUsXzB4MjVlZTU0LF8weGI5Y2QwZCxfMHgzZDkyMmYpe3ZhciBfMHg0YTE4OGM9XzB4MTQ3MDA0O3RoaXNbXzB4NGExODhjKDB4MTZkKV0oXzB4MTU5YTBlLF8weDI1ZWU1NCksXzB4M2Q5MjJmJiZfMHgzZDkyMmYoKSx0aGlzW18weDRhMTg4YygweDFjNyldKF8weGI5Y2QwZCxfMHgxNTlhMGUpLHRoaXNbXzB4NGExODhjKDB4MTc4KV0oXzB4MTU5YTBlLF8weDI1ZWU1NCk7fVtfMHgxNDcwMDQoMHgxNmQpXShfMHgxOGNkMGQsXzB4NmEzZGQ0KXt2YXIgXzB4M2VmZjI0PV8weDE0NzAwNDt0aGlzW18weDNlZmYyNCgweDE1YSldKF8weDE4Y2QwZCxfMHg2YTNkZDQpLHRoaXNbXzB4M2VmZjI0KDB4MWIzKV0oXzB4MThjZDBkLF8weDZhM2RkNCksdGhpc1tfMHgzZWZmMjQoMHgxZDMpXShfMHgxOGNkMGQsXzB4NmEzZGQ0KSx0aGlzW18weDNlZmYyNCgweDFmZildKF8weDE4Y2QwZCxfMHg2YTNkZDQpO31bJ19zZXROb2RlSWQnXShfMHg0MzVhNDEsXzB4Mzk0MTY1KXt9W18weDE0NzAwNCgweDFiMyldKF8weDJkYjAwYyxfMHgyZjk1YTEpe31bJ19zZXROb2RlTGFiZWwnXShfMHg5MzljOSxfMHgxMmJmYzEpe31bJ19pc1VuZGVmaW5lZCddKF8weDkxMWJlZCl7dmFyIF8weDQ2NWNkYz1fMHgxNDcwMDQ7cmV0dXJuIF8weDkxMWJlZD09PXRoaXNbXzB4NDY1Y2RjKDB4MWFlKV07fVtfMHgxNDcwMDQoMHgxNzgpXShfMHg1NzQ1M2IsXzB4NGY3ZDRkKXt2YXIgXzB4MTliZDIxPV8weDE0NzAwNDt0aGlzW18weDE5YmQyMSgweDFhMildKF8weDU3NDUzYixfMHg0ZjdkNGQpLHRoaXNbJ19zZXROb2RlRXhwYW5kYWJsZVN0YXRlJ10oXzB4NTc0NTNiKSxfMHg0ZjdkNGRbXzB4MTliZDIxKDB4MjEwKV0mJnRoaXNbXzB4MTliZDIxKDB4MTQ2KV0oXzB4NTc0NTNiKSx0aGlzWydfYWRkRnVuY3Rpb25zTm9kZSddKF8weDU3NDUzYixfMHg0ZjdkNGQpLHRoaXNbXzB4MTliZDIxKDB4MTNkKV0oXzB4NTc0NTNiLF8weDRmN2Q0ZCksdGhpc1tfMHgxOWJkMjEoMHgxNzcpXShfMHg1NzQ1M2IpO31bJ19hZGRpdGlvbmFsTWV0YWRhdGEnXShfMHgyNGViMGYsXzB4Y2IzMGQ5KXt2YXIgXzB4NTdhNDI3PV8weDE0NzAwNDt0cnl7XzB4MjRlYjBmJiZ0eXBlb2YgXzB4MjRlYjBmW18weDU3YTQyNygweDE0YSldPT1fMHg1N2E0MjcoMHgyMDApJiYoXzB4Y2IzMGQ5WydsZW5ndGgnXT1fMHgyNGViMGZbXzB4NTdhNDI3KDB4MTRhKV0pO31jYXRjaHt9aWYoXzB4Y2IzMGQ5W18weDU3YTQyNygweDIwNCldPT09XzB4NTdhNDI3KDB4MjAwKXx8XzB4Y2IzMGQ5W18weDU3YTQyNygweDIwNCldPT09XzB4NTdhNDI3KDB4MTcwKSl7aWYoaXNOYU4oXzB4Y2IzMGQ5W18weDU3YTQyNygweDE1MyldKSlfMHhjYjMwZDlbXzB4NTdhNDI3KDB4MWViKV09ITB4MCxkZWxldGUgXzB4Y2IzMGQ5W18weDU3YTQyNygweDE1MyldO2Vsc2Ugc3dpdGNoKF8weGNiMzBkOVtfMHg1N2E0MjcoMHgxNTMpXSl7Y2FzZSBOdW1iZXJbXzB4NTdhNDI3KDB4MWM4KV06XzB4Y2IzMGQ5W18weDU3YTQyNygweDE0MCldPSEweDAsZGVsZXRlIF8weGNiMzBkOVtfMHg1N2E0MjcoMHgxNTMpXTticmVhaztjYXNlIE51bWJlclsnTkVHQVRJVkVfSU5GSU5JVFknXTpfMHhjYjMwZDlbXzB4NTdhNDI3KDB4MWRlKV09ITB4MCxkZWxldGUgXzB4Y2IzMGQ5W18weDU3YTQyNygweDE1MyldO2JyZWFrO2Nhc2UgMHgwOnRoaXNbXzB4NTdhNDI3KDB4MWNjKV0oXzB4Y2IzMGQ5W18weDU3YTQyNygweDE1MyldKSYmKF8weGNiMzBkOVtfMHg1N2E0MjcoMHgxZjcpXT0hMHgwKTticmVhazt9fWVsc2UgXzB4Y2IzMGQ5Wyd0eXBlJ109PT0nZnVuY3Rpb24nJiZ0eXBlb2YgXzB4MjRlYjBmW18weDU3YTQyNygweDFiOSldPT1fMHg1N2E0MjcoMHgxZTIpJiZfMHgyNGViMGZbXzB4NTdhNDI3KDB4MWI5KV0mJl8weGNiMzBkOVtfMHg1N2E0MjcoMHgxYjkpXSYmXzB4MjRlYjBmW18weDU3YTQyNygweDFiOSldIT09XzB4Y2IzMGQ5WyduYW1lJ10mJihfMHhjYjMwZDlbXzB4NTdhNDI3KDB4MWFkKV09XzB4MjRlYjBmW18weDU3YTQyNygweDFiOSldKTt9W18weDE0NzAwNCgweDFjYyldKF8weDViODY3Mil7dmFyIF8weDIyNTU3Nz1fMHgxNDcwMDQ7cmV0dXJuIDB4MS9fMHg1Yjg2NzI9PT1OdW1iZXJbXzB4MjI1NTc3KDB4MTY4KV07fVsnX3NvcnRQcm9wcyddKF8weDQ5MTBjZCl7dmFyIF8weDU5MjM1Yz1fMHgxNDcwMDQ7IV8weDQ5MTBjZFtfMHg1OTIzNWMoMHgxNmUpXXx8IV8weDQ5MTBjZFtfMHg1OTIzNWMoMHgxNmUpXVtfMHg1OTIzNWMoMHgxNGEpXXx8XzB4NDkxMGNkW18weDU5MjM1YygweDIwNCldPT09XzB4NTkyMzVjKDB4MTdlKXx8XzB4NDkxMGNkW18weDU5MjM1YygweDIwNCldPT09J01hcCd8fF8weDQ5MTBjZFtfMHg1OTIzNWMoMHgyMDQpXT09PV8weDU5MjM1YygweDFiYyl8fF8weDQ5MTBjZFtfMHg1OTIzNWMoMHgxNmUpXVsnc29ydCddKGZ1bmN0aW9uKF8weDI5MTdhZCxfMHhmODNhMTEpe3ZhciBfMHgxMzZjOTQ9XzB4NTkyMzVjLF8weDRjMjRiNT1fMHgyOTE3YWRbXzB4MTM2Yzk0KDB4MWI5KV1bXzB4MTM2Yzk0KDB4MWMzKV0oKSxfMHgxMWY5MDA9XzB4ZjgzYTExW18weDEzNmM5NCgweDFiOSldW18weDEzNmM5NCgweDFjMyldKCk7cmV0dXJuIF8weDRjMjRiNTxfMHgxMWY5MDA/LTB4MTpfMHg0YzI0YjU+XzB4MTFmOTAwPzB4MToweDA7fSk7fVsnX2FkZEZ1bmN0aW9uc05vZGUnXShfMHgzNDM5ODYsXzB4MWM2ZWFhKXt2YXIgXzB4M2UzYzkzPV8weDE0NzAwNDtpZighKF8weDFjNmVhYVtfMHgzZTNjOTMoMHgxYmYpXXx8IV8weDM0Mzk4NltfMHgzZTNjOTMoMHgxNmUpXXx8IV8weDM0Mzk4NltfMHgzZTNjOTMoMHgxNmUpXVtfMHgzZTNjOTMoMHgxNGEpXSkpe2Zvcih2YXIgXzB4OGZiNmFkPVtdLF8weDQ3MDVmZT1bXSxfMHgxMjFjM2I9MHgwLF8weDI0YzRmND1fMHgzNDM5ODZbXzB4M2UzYzkzKDB4MTZlKV1bXzB4M2UzYzkzKDB4MTRhKV07XzB4MTIxYzNiPF8weDI0YzRmNDtfMHgxMjFjM2IrKyl7dmFyIF8weDM4ZmUwND1fMHgzNDM5ODZbXzB4M2UzYzkzKDB4MTZlKV1bXzB4MTIxYzNiXTtfMHgzOGZlMDRbJ3R5cGUnXT09PV8weDNlM2M5MygweDE4NCk/XzB4OGZiNmFkW18weDNlM2M5MygweDE4ZSldKF8weDM4ZmUwNCk6XzB4NDcwNWZlWydwdXNoJ10oXzB4MzhmZTA0KTt9aWYoISghXzB4NDcwNWZlW18weDNlM2M5MygweDE0YSldfHxfMHg4ZmI2YWRbXzB4M2UzYzkzKDB4MTRhKV08PTB4MSkpe18weDM0Mzk4NlsncHJvcHMnXT1fMHg0NzA1ZmU7dmFyIF8weDEzZjU3ZT17J2Z1bmN0aW9uc05vZGUnOiEweDAsJ3Byb3BzJzpfMHg4ZmI2YWR9O3RoaXNbXzB4M2UzYzkzKDB4MTVhKV0oXzB4MTNmNTdlLF8weDFjNmVhYSksdGhpc1tfMHgzZTNjOTMoMHgxYTIpXShfMHgxM2Y1N2UsXzB4MWM2ZWFhKSx0aGlzW18weDNlM2M5MygweDE4MSldKF8weDEzZjU3ZSksdGhpc1tfMHgzZTNjOTMoMHgxZmYpXShfMHgxM2Y1N2UsXzB4MWM2ZWFhKSxfMHgxM2Y1N2VbJ2lkJ10rPSdcXFxceDIwZicsXzB4MzQzOTg2W18weDNlM2M5MygweDE2ZSldWyd1bnNoaWZ0J10oXzB4MTNmNTdlKTt9fX1bXzB4MTQ3MDA0KDB4MTNkKV0oXzB4MzE5YjQzLF8weGY1MTJhYSl7fVtfMHgxNDcwMDQoMHgxODEpXShfMHgzYjMxYzgpe31bXzB4MTQ3MDA0KDB4MWRkKV0oXzB4MjE2NTA5KXt2YXIgXzB4NTBjZDVhPV8weDE0NzAwNDtyZXR1cm4gQXJyYXlbXzB4NTBjZDVhKDB4MjE0KV0oXzB4MjE2NTA5KXx8dHlwZW9mIF8weDIxNjUwOT09XzB4NTBjZDVhKDB4MWRiKSYmdGhpc1tfMHg1MGNkNWEoMHgxN2IpXShfMHgyMTY1MDkpPT09XzB4NTBjZDVhKDB4MTU1KTt9W18weDE0NzAwNCgweDFmZildKF8weDFkMzI1NixfMHgyODY0OWQpe31bXzB4MTQ3MDA0KDB4MTc3KV0oXzB4MzQ2NzE0KXt2YXIgXzB4MzJhNzBhPV8weDE0NzAwNDtkZWxldGUgXzB4MzQ2NzE0W18weDMyYTcwYSgweDE3NCldLGRlbGV0ZSBfMHgzNDY3MTRbXzB4MzJhNzBhKDB4MWVkKV0sZGVsZXRlIF8weDM0NjcxNFtfMHgzMmE3MGEoMHgxNGUpXTt9Wydfc2V0Tm9kZUV4cHJlc3Npb25QYXRoJ10oXzB4MTZjMDA4LF8weDMxNzkyOSl7fVsnX3Byb3BlcnR5QWNjZXNzb3InXShfMHg0NzFiODgpe3ZhciBfMHgyNjM1ZGY9XzB4MTQ3MDA0O3JldHVybiBfMHg0NzFiODg/XzB4NDcxYjg4WydtYXRjaCddKHRoaXNbJ19udW1iZXJSZWdFeHAnXSk/J1snK18weDQ3MWI4OCsnXSc6XzB4NDcxYjg4WydtYXRjaCddKHRoaXNbXzB4MjYzNWRmKDB4MWVjKV0pPycuJytfMHg0NzFiODg6XzB4NDcxYjg4W18weDI2MzVkZigweDFiNyldKHRoaXNbXzB4MjYzNWRmKDB4MjBmKV0pPydbJytfMHg0NzFiODgrJ10nOidbXFxcXHgyNycrXzB4NDcxYjg4KydcXFxceDI3XSc6Jyc7fX1sZXQgXzB4M2U5MmFkPW5ldyBfMHg0MzVhYTcoKTtmdW5jdGlvbiBfMHgzZjZhZTIoXzB4NDg0ZTlhLF8weDQ3MDc4YSxfMHgzZWZmY2YsXzB4MWZhNWIxLF8weDIwYmVhNyxfMHgxNjI5MWQpe3ZhciBfMHgxMjgwMDI9XzB4MTQ3MDA0O2xldCBfMHg5MjQ5NDksXzB4MmU0MDY2O3RyeXtfMHgyZTQwNjY9XzB4MTA5MDhhKCksXzB4OTI0OTQ5PV8weDVhNWZiYltfMHg0NzA3OGFdLCFfMHg5MjQ5NDl8fF8weDJlNDA2Ni1fMHg5MjQ5NDlbJ3RzJ10+MHgxZjQmJl8weDkyNDk0OVtfMHgxMjgwMDIoMHgxZGEpXSYmXzB4OTI0OTQ5Wyd0aW1lJ10vXzB4OTI0OTQ5W18weDEyODAwMigweDFkYSldPDB4NjQ/KF8weDVhNWZiYltfMHg0NzA3OGFdPV8weDkyNDk0OT17J2NvdW50JzoweDAsJ3RpbWUnOjB4MCwndHMnOl8weDJlNDA2Nn0sXzB4NWE1ZmJiW18weDEyODAwMigweDFjYildPXt9KTpfMHgyZTQwNjYtXzB4NWE1ZmJiWydoaXRzJ11bJ3RzJ10+MHgzMiYmXzB4NWE1ZmJiWydoaXRzJ11bJ2NvdW50J10mJl8weDVhNWZiYltfMHgxMjgwMDIoMHgxY2IpXVtfMHgxMjgwMDIoMHgxZWEpXS9fMHg1YTVmYmJbJ2hpdHMnXVsnY291bnQnXTwweDY0JiYoXzB4NWE1ZmJiW18weDEyODAwMigweDFjYildPXt9KTtsZXQgXzB4NDY4ZGFiPVtdLF8weDNkMjIwYT1fMHg5MjQ5NDlbXzB4MTI4MDAyKDB4MjBkKV18fF8weDVhNWZiYlsnaGl0cyddW18weDEyODAwMigweDIwZCldP18weDU0ZGNkYzpfMHgzMzgwNDUsXzB4MzQwYWFlPV8weDIzMzNmMj0+e3ZhciBfMHgyNWZjNmM9XzB4MTI4MDAyO2xldCBfMHgxYTVlYTE9e307cmV0dXJuIF8weDFhNWVhMVtfMHgyNWZjNmMoMHgxNmUpXT1fMHgyMzMzZjJbXzB4MjVmYzZjKDB4MTZlKV0sXzB4MWE1ZWExW18weDI1ZmM2YygweDEzNildPV8weDIzMzNmMltfMHgyNWZjNmMoMHgxMzYpXSxfMHgxYTVlYTFbXzB4MjVmYzZjKDB4MWM5KV09XzB4MjMzM2YyWydzdHJMZW5ndGgnXSxfMHgxYTVlYTFbXzB4MjVmYzZjKDB4MTc1KV09XzB4MjMzM2YyW18weDI1ZmM2YygweDE3NSldLF8weDFhNWVhMVtfMHgyNWZjNmMoMHgxYzQpXT1fMHgyMzMzZjJbJ2F1dG9FeHBhbmRMaW1pdCddLF8weDFhNWVhMVtfMHgyNWZjNmMoMHgxNmYpXT1fMHgyMzMzZjJbXzB4MjVmYzZjKDB4MTZmKV0sXzB4MWE1ZWExW18weDI1ZmM2YygweDIxMCldPSEweDEsXzB4MWE1ZWExWydub0Z1bmN0aW9ucyddPSFfMHg1OWVmMDYsXzB4MWE1ZWExW18weDI1ZmM2YygweDFmOCldPTB4MSxfMHgxYTVlYTFbJ2xldmVsJ109MHgwLF8weDFhNWVhMVtfMHgyNWZjNmMoMHgxOTUpXT1fMHgyNWZjNmMoMHgxMzkpLF8weDFhNWVhMVsncm9vdEV4cHJlc3Npb24nXT1fMHgyNWZjNmMoMHgyMTMpLF8weDFhNWVhMVtfMHgyNWZjNmMoMHgxYWYpXT0hMHgwLF8weDFhNWVhMVtfMHgyNWZjNmMoMHgxNjMpXT1bXSxfMHgxYTVlYTFbXzB4MjVmYzZjKDB4MWUwKV09MHgwLF8weDFhNWVhMVtfMHgyNWZjNmMoMHgxODYpXT0hMHgwLF8weDFhNWVhMVsnYWxsU3RyTGVuZ3RoJ109MHgwLF8weDFhNWVhMVtfMHgyNWZjNmMoMHgxNzIpXT17J2N1cnJlbnQnOnZvaWQgMHgwLCdwYXJlbnQnOnZvaWQgMHgwLCdpbmRleCc6MHgwfSxfMHgxYTVlYTE7fTtmb3IodmFyIF8weDNlOWQ5MD0weDA7XzB4M2U5ZDkwPF8weDIwYmVhN1tfMHgxMjgwMDIoMHgxNGEpXTtfMHgzZTlkOTArKylfMHg0NjhkYWJbXzB4MTI4MDAyKDB4MThlKV0oXzB4M2U5MmFkW18weDEyODAwMigweDEzNyldKHsndGltZU5vZGUnOl8weDQ4NGU5YT09PSd0aW1lJ3x8dm9pZCAweDB9LF8weDIwYmVhN1tfMHgzZTlkOTBdLF8weDM0MGFhZShfMHgzZDIyMGEpLHt9KSk7aWYoXzB4NDg0ZTlhPT09J3RyYWNlJyl7bGV0IF8weDEzOTJhOD1FcnJvcltfMHgxMjgwMDIoMHgxOWUpXTt0cnl7RXJyb3JbXzB4MTI4MDAyKDB4MTllKV09MHgxLzB4MCxfMHg0NjhkYWJbXzB4MTI4MDAyKDB4MThlKV0oXzB4M2U5MmFkW18weDEyODAwMigweDEzNyldKHsnc3RhY2tOb2RlJzohMHgwfSxuZXcgRXJyb3IoKVtfMHgxMjgwMDIoMHgxODApXSxfMHgzNDBhYWUoXzB4M2QyMjBhKSx7J3N0ckxlbmd0aCc6MHgxLzB4MH0pKTt9ZmluYWxseXtFcnJvcltfMHgxMjgwMDIoMHgxOWUpXT1fMHgxMzkyYTg7fX1yZXR1cm57J21ldGhvZCc6XzB4MTI4MDAyKDB4MTgzKSwndmVyc2lvbic6XzB4MjM0NzA1LCdhcmdzJzpbeyd0cyc6XzB4M2VmZmNmLCdzZXNzaW9uJzpfMHgxZmE1YjEsJ2FyZ3MnOl8weDQ2OGRhYiwnaWQnOl8weDQ3MDc4YSwnY29udGV4dCc6XzB4MTYyOTFkfV19O31jYXRjaChfMHg0Y2NmZjgpe3JldHVybnsnbWV0aG9kJzpfMHgxMjgwMDIoMHgxODMpLCd2ZXJzaW9uJzpfMHgyMzQ3MDUsJ2FyZ3MnOlt7J3RzJzpfMHgzZWZmY2YsJ3Nlc3Npb24nOl8weDFmYTViMSwnYXJncyc6W3sndHlwZSc6XzB4MTI4MDAyKDB4MWY5KSwnZXJyb3InOl8weDRjY2ZmOCYmXzB4NGNjZmY4WydtZXNzYWdlJ119XSwnaWQnOl8weDQ3MDc4YSwnY29udGV4dCc6XzB4MTYyOTFkfV19O31maW5hbGx5e3RyeXtpZihfMHg5MjQ5NDkmJl8weDJlNDA2Nil7bGV0IF8weDE3ZTc2MD1fMHgxMDkwOGEoKTtfMHg5MjQ5NDlbXzB4MTI4MDAyKDB4MWRhKV0rKyxfMHg5MjQ5NDlbXzB4MTI4MDAyKDB4MWVhKV0rPV8weDQ2ZGQyNyhfMHgyZTQwNjYsXzB4MTdlNzYwKSxfMHg5MjQ5NDlbJ3RzJ109XzB4MTdlNzYwLF8weDVhNWZiYltfMHgxMjgwMDIoMHgxY2IpXVsnY291bnQnXSsrLF8weDVhNWZiYlsnaGl0cyddWyd0aW1lJ10rPV8weDQ2ZGQyNyhfMHgyZTQwNjYsXzB4MTdlNzYwKSxfMHg1YTVmYmJbXzB4MTI4MDAyKDB4MWNiKV1bJ3RzJ109XzB4MTdlNzYwLChfMHg5MjQ5NDlbXzB4MTI4MDAyKDB4MWRhKV0+MHgzMnx8XzB4OTI0OTQ5W18weDEyODAwMigweDFlYSldPjB4NjQpJiYoXzB4OTI0OTQ5W18weDEyODAwMigweDIwZCldPSEweDApLChfMHg1YTVmYmJbXzB4MTI4MDAyKDB4MWNiKV1bXzB4MTI4MDAyKDB4MWRhKV0+MHgzZTh8fF8weDVhNWZiYltfMHgxMjgwMDIoMHgxY2IpXVtfMHgxMjgwMDIoMHgxZWEpXT4weDEyYykmJihfMHg1YTVmYmJbXzB4MTI4MDAyKDB4MWNiKV1bXzB4MTI4MDAyKDB4MjBkKV09ITB4MCk7fX1jYXRjaHt9fX1yZXR1cm4gXzB4NGRiMGViW18weDE0NzAwNCgweDFhYSldO30pKGdsb2JhbFRoaXMsJzEyNy4wLjAuMScsJzYyMDI0JyxfMHg0ZGMxYTUoMHgxOGQpLF8weDRkYzFhNSgweDFhMCksJzEuMC4wJywnMTY4ODMwMjAzMzE4NCcsW1xcXCJsb2NhbGhvc3RcXFwiLFxcXCIxMjcuMC4wLjFcXFwiLFxcXCJleGFtcGxlLmN5cHJlc3MuaW9cXFwiLFxcXCJERVNLVE9QLVE1N0VHQk1cXFwiLFxcXCIxOTIuMTY4LjEuMlxcXCJdLF8weDRkYzFhNSgweDE0NSkpO1wiKTt9Y2F0Y2goZSl7fX07ZnVuY3Rpb24gb29fb28oaSwuLi52KXt0cnl7b29fY20oKS5jb25zb2xlTG9nKGksIHYpO31jYXRjaChlKXt9IHJldHVybiB2fTtmdW5jdGlvbiBvb190cihpLC4uLnYpe3RyeXtvb19jbSgpLmNvbnNvbGVUcmFjZShpLCB2KTt9Y2F0Y2goZSl7fSByZXR1cm4gdn07ZnVuY3Rpb24gb29fdHMoKXt0cnl7b29fY20oKS5jb25zb2xlVGltZSgpO31jYXRjaChlKXt9fTtmdW5jdGlvbiBvb190ZSgpe3RyeXtvb19jbSgpLmNvbnNvbGVUaW1lRW5kKCk7fWNhdGNoKGUpe319Oy8qZXNsaW50IGVzbGludC1jb21tZW50cy9kaXNhYmxlLWVuYWJsZS1wYWlyOixlc2xpbnQtY29tbWVudHMvbm8tdW5saW1pdGVkLWRpc2FibGU6LGVzbGludC1jb21tZW50cy9uby1hZ2dyZWdhdGluZy1lbmFibGU6LGVzbGludC1jb21tZW50cy9uby1kdXBsaWNhdGUtZGlzYWJsZTosZXNsaW50LWNvbW1lbnRzL25vLXVudXNlZC1kaXNhYmxlOixlc2xpbnQtY29tbWVudHMvbm8tdW51c2VkLWVuYWJsZTosKi8iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVUYXNrKHByb2pOdW1iZXIsIG5hbWUsIGRhdGUsIHByaW9yaXR5KSB7XHJcbiAgICBsZXQgdGFza05hbWUgPSBuYW1lO1xyXG4gICAgbGV0IHRhc2tEdWVEYXRlID0gZGF0ZTtcclxuICAgIGxldCB0YXNrUHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICAgIGxldCBjb21wbGV0ZWQgPSBmYWxzZTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGdldCBuYW1lKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGFza05hbWU7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgc2V0IG5hbWUobmV3TmFtZSkge1xyXG4gICAgICAgICAgICB0YXNrTmFtZSA9IG5ld05hbWU7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgZ2V0IHByaW9yaXR5KCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGFza1ByaW9yaXR5O1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHNldCBwcmlvcml0eShuZXdQcmlvcml0eSkge1xyXG4gICAgICAgICAgICB0YXNrUHJpb3JpdHkgPSBuZXdQcmlvcml0eTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBnZXQgZGVhZGxpbmUoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0YXNrRHVlRGF0ZTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBzZXQgZGVhZGxpbmUobmV3RGF0ZSkge1xyXG4gICAgICAgICAgICB0YXNrRHVlRGF0ZSA9IG5ld0RhdGU7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgc2V0IGNvbXBsZXRlZChzdGF0dXMpIHtcclxuICAgICAgICAgICAgY29tcGxldGVkID0gc3RhdHVzO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGdldCBjb21wbGV0ZWQoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjb21wbGV0ZWQ7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgZ2V0IHByb2pOdW0oKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwcm9qTnVtYmVyO1xyXG4gICAgICAgIH0sXHJcbiAgICB9O1xyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgfSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICB9LCBfdHlwZW9mKG9iaik7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9