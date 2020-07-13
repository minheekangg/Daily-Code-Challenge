/* 
maxSubarraySum - sliding window - udemy
Write a function that takes an array of integers and a number, finds the maximum sum of subarray with the length of the number passed to the function.Note that a subarray must consist of * consecutive * elements from the original array.

    Examples:
maxSubarraySum([100, 200, 300, 400], 2) // 700
maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4) //39
maxSubarraySum([1, 3], 3) //null
*/

// My Solution:
function maxSubarraySum(arr, int){
    if (arr.length < int) return null;
    let subArr = arr.slice(0, int);
    
    let subArrSum = subArr.reduce((acc,cur)=> {
        return acc + cur;
    }, 0);
    
    let maxSum = subArrSum;
    let tempSum = subArrSum;
    for (let i=int; i < arr.length; i++){
        tempSum = tempSum - arr[i-int] + arr[i];
        maxSum = Math.max(tempSum, maxSum);
    }   
    return maxSum;
}
