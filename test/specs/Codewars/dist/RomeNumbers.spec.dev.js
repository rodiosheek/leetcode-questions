"use strict";

var _EncodeNumbersToRoman = require("@/Codewars/EncodeNumbersToRoman");

describe('Transform decimal numbers to rome', function () {
  it('10 => X', function () {
    var tmp = (0, _EncodeNumbersToRoman.encodeNumbersToRoman)(10);
    expect(tmp).to.equal('X');
  });
  it('2020 => MMXX', function () {
    var tmp = (0, _EncodeNumbersToRoman.encodeNumbersToRoman)(2020);
    expect(tmp).to.equal('MMXX');
  });
  it('1912 => MCMXII', function () {
    var tmp = (0, _EncodeNumbersToRoman.encodeNumbersToRoman)(1912);
    expect(tmp).to.equal('MCMXII');
  });
  it('2000 => MM', function () {
    var tmp = (0, _EncodeNumbersToRoman.encodeNumbersToRoman)(2000);
    expect(tmp).to.equal('MM');
  });
  it('14 => XIV', function () {
    var tmp = (0, _EncodeNumbersToRoman.encodeNumbersToRoman)(14);
    expect(tmp).to.equal('XIV');
  });
  it('21 => XXI', function () {
    var tmp = (0, _EncodeNumbersToRoman.encodeNumbersToRoman)(21);
    expect(tmp).to.equal('XXI');
  });
  it('1 => I', function () {
    var tmp = (0, _EncodeNumbersToRoman.encodeNumbersToRoman)(1);
    expect(tmp).to.equal('I');
  });
  it('4 => IV', function () {
    var tmp = (0, _EncodeNumbersToRoman.encodeNumbersToRoman)(4);
    expect(tmp).to.equal('IV');
  });
  it('2008 => MMVIII', function () {
    var tmp = (0, _EncodeNumbersToRoman.encodeNumbersToRoman)(2008);
    expect(tmp).to.equal('MMVIII');
  });
  it('1666 => MDCLXVI', function () {
    var tmp = (0, _EncodeNumbersToRoman.encodeNumbersToRoman)(1666);
    expect(tmp).to.equal('MDCLXVI');
  });
});