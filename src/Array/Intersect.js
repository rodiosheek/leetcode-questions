/**
 * Source:
 *  https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/674/
 *
 * Description:
 *  Given two arrays, write a function to compute their intersection.
 *
 * Example:
 *  Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2, 2].
 *
 * Note:
 *  Each element in the result should appear as many times as it shows in both arrays.
 *  The result can be in any order.
 *
 * Follow up:
 *  What if the given array is already sorted? How would you optimize your algorithm?
 *  What if nums1's size is small compared to nums2's size? Which algorithm is better?
 *  What if elements of nums2 are stored on disk, and the memory is limited such that you cannot
 *  load all elements into the memory at once?
 */

/**
* @param {number[]} nums1
* @param {number[]} nums2
* @return {number[]}
*
* Low: Your runtime beats 27.17 % of javascript submissions.
* Becouse of two sort
*/
var intersect_Slow = function (nums1, nums2) {
    let result = [];

    nums1.sort(sortFn);
    nums2.sort(sortFn);

    let i = 0,
        j = 0,
        nums1Length = nums1.length,
        nums2Length = nums2.length;

    while(i < nums1Length && j < nums2Length) {
        if(nums1[i] < nums2[j]) i++;
        if(nums1[i] > nums2[j]) j++;
        if(nums1[i] == nums2[j]) {
            result.push(nums1[i]);
            j++;
            i++;
        }
    }

    return result;
};

const sortFn = (a,b) => a - b;

/**
* @param {number[]} nums1
* @param {number[]} nums2
* @return {number[]}
*
* Fast: Your runtime beats 89.95 % of javascript submissions.
*/
var intersect = function (nums1, nums2) {
    let result = [],
        store  = {};

    nums1.forEach(el => {
        if(store[el]) {
            store[el]++;
        } else {
            store[el] = 1;
        }
    });

    nums2.forEach(el => {
        if(store[el]) {
            result.push(el);
            store[el]--;
        }
    });

    return result;
};

export default intersect;
