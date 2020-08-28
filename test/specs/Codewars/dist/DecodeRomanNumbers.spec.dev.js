"use strict";

var _DecodeRomanNumbers = require("@/Codewars/DecodeRomanNumbers");

describe.only('Roman numbers decoder', function () {
  it('I => 1', function () {
    expect((0, _DecodeRomanNumbers.decodeRomanNumber)('I')).to.equal(1);
  });
  it('XXI => 21', function () {
    expect((0, _DecodeRomanNumbers.decodeRomanNumber)('XXI')).to.equal(21);
  });
  it('IV => 4', function () {
    expect((0, _DecodeRomanNumbers.decodeRomanNumber)('IV')).to.equal(4);
  });
  it('MMVIII => 2008', function () {
    expect((0, _DecodeRomanNumbers.decodeRomanNumber)('MMVIII')).to.equal(2008);
  });
  it('MDCLXVI => 1666', function () {
    expect((0, _DecodeRomanNumbers.decodeRomanNumber)('MDCLXVI')).to.equal(1666);
  });
  it('MMMCMXCIX => 3999', function () {
    expect((0, _DecodeRomanNumbers.decodeRomanNumber)('MMMCMXCIX')).to.equal(3999);
  });
});