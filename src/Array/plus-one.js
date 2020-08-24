/**
 * Source:
 *  https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/559/
 *
 * Description:
 *  Given a non-empty array of digits representing a non-negative integer, increment one to the integer.
 *  The digits are stored such that the most significant digit is at the head of the list,
 *  and each element in the array contains a single digit.
 *  You may assume the integer does not contain any leading zero, except the number 0 itself.
 *
 * Example:
 *   Input: digits = [1,2,3]
 *   Output: [1,2,4]
 *   Explanation: The array represents the integer 123.
 *
 */

export const plusOne = digits => {
    let i = digits.length - 1;
    let isOk = false;

    while(!isOk) {
        if (digits[i] !== 9) {
            digits[i]++;
            isOk = true;
        } else {
            digits[i] = 0;

            if (i === 0) {
                digits.unshift(1);
            }
        }
        i--;
    }

    return digits;
};

export const plusOneTypeTwo = digits => {
    let i = digits.length - 1;

    while(i >= 0) {
        if (digits[i] !== 9) {
            digits[i]++;
            break;
        } else {
            digits[i] = 0;
            if (!i) {
                digits.unshift(1);
            }
        }
        i--;
    }

    return digits;
}