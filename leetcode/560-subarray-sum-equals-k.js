/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 
 [1,1,1]
    s
       e
    2 
  1


  *** needs to be done in brute force because the array is not sorted -- can have negative numbers -- so sliding window is no good.
 */
var subarraySum = function (nums, k) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        let sum = 0;
        for (let j = i; j < nums.length; j++) {
            sum += nums[j];
            if (sum === k) {
                count++;
            }
        }
    }
    return count;
};