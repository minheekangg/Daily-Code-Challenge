/**
 * completed 9/8/2020
 * Leetcode - EASY
*/

/**
 *Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

Example 1:

Given nums = [1,1,2],

Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.

It doesn't matter what you leave beyond the returned length.
Example 2:

Given nums = [0,0,1,1,1,2,2,3,3,4],

Your function should return length = 5, with the first five elements of nums being modified to 0, 1, 2, 3, and 4 respectively.

It doesn't matter what values are set beyond the returned length.
 */

var removeDuplicates = function (nums) {
    let idx = 0;

    while (idx < nums.length) {
        if (nums[idx] === nums[idx + 1]) {
            nums.splice(idx + 1, 1);
        } else {
            idx++;
        }
    }

    return nums.length;
};

module.exports = removeDuplicates;