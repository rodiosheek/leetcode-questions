/**
 * Source:
 *  https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/549/
 *
 * Description:
 *  Given an array of integers, every element appears twice except for one. Find that single one.
 * Note:
 *  Your algorithm should have a linear runtime complexity.
 *  Could you implement it without using extra memory? O(n)
 */

 /**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let length = nums.length;

    if(length < 2) return nums[0];

    let result = 0;

    for(let i = 0; i < length; i++) {
        result ^= nums[i];
    }

    return result;
};

export default singleNumber;
