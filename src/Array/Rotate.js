/**
 * Source:
 *  https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/646/
 *
 * Description:
 *  Rotate an array of n elements to the right by k steps.
 *
 * Example:
 *  with n = 7 and k = 3, the array [1,2,3,4,5,6,7] is rotated to [5,6,7,1,2,3,4].
 */


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
   let lenght = nums.length;

   if(lenght < 2) return;

   let delimiter = lenght - k;

   for(let i = delimiter; i < lenght; i++) {
       nums.unshift( nums.pop());
   }
};

export default rotate;
