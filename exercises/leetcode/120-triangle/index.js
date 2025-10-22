/**
 * completed 10/22/2025
 * Leetcode - Medium
*/

/**
Given a triangle array, return the minimum path sum from top to bottom.

For each step, you may move to an adjacent number of the row below. More formally, if you are on index i on the current row, you may move to either index i or index i + 1 on the next row.

Example 1:

Input: triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]
Output: 11
Explanation: The triangle looks like:
   2
  3 4
 6 5 7
4 1 8 3
The minimum path sum from top to bottom is 2 + 3 + 5 + 1 = 11 (underlined above).
Example 2:

Input: triangle = [[-10]]
Output: -10



   2
  3 4
 6 5 7 *start here and look at the row below. update the current row with min sum below
4 1 8 3

   2
  3 4
 7 6 10 * updated
4 1 8 3

   2
  3 4. * look here and update with min sum below
 7 6 10 
4 1 8 3

   2
  9 10. * updated. look here and update with min sum below
 7 6 10 
4 1 8 3

   11.    * updated = result
  9 10.
 7 6 10 
4 1 8 3
*/

var minimumTotal = function(triangle) {
    for (let i = triangle.length-2; i >= 0; i--) {
        for (let j=0; j<= i; j++) {
            triangle[i][j] += Math.min(triangle[i+1][j], triangle[i+1][j+1])
        }
    }
    return triangle[0][0]
};

module.exports = minimumTotal;