"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.decodeRomanNumber = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var dict = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000
};

var decodeRomanNumber = function decodeRomanNumber(roman) {
  var mappedRoman = _toConsumableArray(roman).map(function (num) {
    return dict[num];
  });

  var lenght = mappedRoman.length;

  var add = function add(a, b) {
    return a + b;
  };

  var sub = function sub(a, b) {
    return a - b;
  };

  var res = 0;

  for (var i = 0; i < lenght; i++) {
    var prev = mappedRoman[i];
    var next = mappedRoman[i + 1] ? mappedRoman[i + 1] : 0;
    var action = prev >= next ? add : sub;
    res = action(res, prev);
  }

  return res;
};

exports.decodeRomanNumber = decodeRomanNumber;