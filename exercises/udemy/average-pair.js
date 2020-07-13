/*
    averagePair - multiple pointers - udemy
    Write a function that determine if there is a pair of values in the * sorted * array where the average of the pair equals the target average.

    Examples:
        averagePair([1, 2, 3], 2.5)  //true
        averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8) //true
        averagePair([-1, 0, 3, 4, 5, 6], 4.1) //false
        averagePair([], 4) //false
*/

// My solution:
function averagePair(arr, target){
  let left = 0;
  let right = arr.length -1;
  
  while(left < right) {
      let currentAvg = (arr[left] + arr[right])/2;
    
      if (currentAvg === target) {
          return true;
      } else if (currentAvg < target) {
          left++;
      } else {
          right--;
      }
  }
  return false;
}

// Solution - O(n) Time, O(1) Space
function averagePair(arr, num){
    let start = 0
    let end = arr.length-1;
    while(start < end){
        let avg = (arr[start]+arr[end]) / 2 
        if(avg === num) return true;
        else if(avg < num) start++
        else end--
    }
    return false;
};