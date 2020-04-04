/*
Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example:

Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
*/

var moveZeroes = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === 0 && nums[j] !== 0) {
                nums[i] = nums[j];
                nums[j] = 0;
            }
        }
    }
    return nums;
};