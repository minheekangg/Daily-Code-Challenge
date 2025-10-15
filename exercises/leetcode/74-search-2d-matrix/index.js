/**
 * completed 10/15/2025
 * Leetcode - MED
*/

/**
74. Search a 2D Matrix
Solved
Medium
Topics
premium lock icon
Companies
You are given an m x n integer matrix matrix with the following two properties:

Each row is sorted in non-decreasing order.
The first integer of each row is greater than the last integer of the previous row.
Given an integer target, return true if target is in matrix or false otherwise.

You must write a solution in O(log(m * n)) time complexity.


BETTER SOLUTION:
var searchMatrix = function(matrix, target) {
    let [rows, cols] = [matrix.length, matrix[0].length];
    let [top, bot] = [0, rows-1];
    
    while(top <= bot){
        let row = Math.floor((top +  bot) / 2);
        if(target > matrix[row][cols-1]) {
            top = row + 1;
        } else if(target < matrix[row][0]) {
            bot = row - 1; 
        } else {
            break;
        }
    }
    
    if(!(top <= bot)) {
        return false;
    }
    
    let row = Math.floor((top + bot) / 2);
    let [left, right] = [0, cols - 1];

    while(left <= right){
        let mid = Math.floor((left + right) / 2);

        if(target > matrix[row][mid]) {
            left = mid + 1;
        } else if(target < matrix[row][mid]) {
            right = mid - 1;
        } else if(target == matrix[row][mid]) {
            return true;
        }
    }

    return false;    
}

*/


/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let row = matrix.length - 1 ;
    let col = matrix[0].length -1;

    while (row >= 0 && col >= 0 ) {
        if (target === matrix[row][col]) return true;
        if (target < matrix[row][0]) {
            row--;
            continue;
        } 
        if (target < matrix[row][col]) {
            col--;
            continue;
        }

        if (target > matrix[row][col]) {
            return false;
        }
        
    }
    return false;
};

module.exports = searchMatrix;