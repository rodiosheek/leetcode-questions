"use strict";

var _plusOne = require("@/Array/plus-one");

describe('Plus one', function () {
  it('[0] should return [1]', function () {
    var arr = [0];
    expect((0, _plusOne.plusOne)(arr)).to.deep.equal([1]);
  });
  it('[4,3,2,1] should return [4,3,2,2]', function () {
    var arr = [4, 3, 2, 1];
    expect((0, _plusOne.plusOne)(arr)).to.deep.equal([4, 3, 2, 2]);
  });
  it('[9] should return [1,0]', function () {
    var arr = [9];
    expect((0, _plusOne.plusOne)(arr)).to.deep.equal([1, 0]);
  });
  it('[1,2,3] should return [1,2,4]', function () {
    var arr = [1, 2, 3];
    expect((0, _plusOne.plusOne)(arr)).to.deep.equal([1, 2, 4]);
  });
  it('[9,9,9] should return [1,0,0,0]', function () {
    var arr = [9, 9, 9];
    expect((0, _plusOne.plusOne)(arr)).to.deep.equal([1, 0, 0, 0]);
  });
});
describe('Plus one type two', function () {
  it('[0] should return [1]', function () {
    var arr = [0];
    expect((0, _plusOne.plusOneTypeTwo)(arr)).to.deep.equal([1]);
  });
  it('[4,3,2,1] should return [4,3,2,2]', function () {
    var arr = [4, 3, 2, 1];
    expect((0, _plusOne.plusOneTypeTwo)(arr)).to.deep.equal([4, 3, 2, 2]);
  });
  it('[9] should return [1,0]', function () {
    var arr = [9];
    expect((0, _plusOne.plusOneTypeTwo)(arr)).to.deep.equal([1, 0]);
  });
  it('[1,2,3] should return [1,2,4]', function () {
    var arr = [1, 2, 3];
    expect((0, _plusOne.plusOneTypeTwo)(arr)).to.deep.equal([1, 2, 4]);
  });
  it('[9,9,9] should return [1,0,0,0]', function () {
    var arr = [9, 9, 9];
    expect((0, _plusOne.plusOneTypeTwo)(arr)).to.deep.equal([1, 0, 0, 0]);
  });
});