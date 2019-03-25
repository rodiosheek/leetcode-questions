/**
 * Source:
 *  https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/578/
 *
 * Description:
 *  Given an array of integers, find if the array contains any duplicates.
 *  Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.
 */

/**
 * Slow - 5% of JS
 *
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate_Slow = function (nums) {
    if (nums.length < 2) return false;

    for (let i = 0; i < nums.length; i++) {
        if (nums.indexOf(nums[i]) != nums.lastIndexOf(nums[i])) return true;
    }

    return false;
};

/**
 * Fast-> Your runtime beats 22.60 % of javascript submissions.
 *
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    let lenght = nums.length;

    if (lenght < 2) return false;

    for (let i = 0; i < lenght; i++) {
        for (let j = i + 1; j < lenght; j++) {
            if (nums[i] == nums[j]) return true;
        }
    }

    return false;
};

export default containsDuplicate;
