/*

solved 7/29/2020

leftSum = 3;
rightSum = 3;
leftCounter = 0;
rightCounter = 0;
depthCount = 1;
counter = 1;

   c
[3,6,2,9,-1,10]

1. check if leftCount < depthCount;
      - if true, leftSum+= arr[counter];
      leftCount++;
      counter++;
2. check if rightCounter < depthCount;
		- if true, rightSum+=arr[counter];
    rightCount++;
    counter++;
3. if (leftCount === depthCount && rightCount === depthCount)
	depthounter *= 2;
  check again
*/


const solution = (arr) => {
    let leftSum = arr[0];
    let rightSum = arr[0];

    let leftCount = 0;
    let rightCount = 0;
    let depthCount = 1;

    let counter = 1;

    while (counter < arr.length) {
        if (leftCount < depthCount) {
            if (arr[counter] !== -1) leftSum += arr[counter];
            leftCount++;
            counter++;
        } else if (rightCount < depthCount) {
            if (arr[counter] !== -1) rightSum += arr[counter];
            rightCount++;
            counter++;
        } else {
            depthCount *= 2;
            leftCount = 0;
            rightCount = 0;
        }
    }
    if (leftSum === rightSum) return "";  
    return leftSum > rightSum ? "Left" : "Right";
};

module.exports = solution;