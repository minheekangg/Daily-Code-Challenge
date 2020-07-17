// 7/17/2019

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    const hash = {};
    for (let num of nums) {
        hash[num] = hash[num] + 1 || 1;
        console.log('hash', hash);
        if (hash[num] > nums.length / 2) {
            return num
        }
    }
};

module.exports = majorityElement;