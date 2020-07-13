/*
### Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Examples
Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
*/


var maxSubArray = function(nums) {
    let sum = nums[0];
    let maxSum = sum;
    
    for (let i=1; i<nums.length; i++) {
        sum = Math.max(sum + nums[i], nums[i]); //either take accumulate sum or start new sum w num[i]
        maxSum = Math.max(sum, maxSum);
    }
    return maxSum;
};