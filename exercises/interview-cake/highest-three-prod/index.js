/**
 * completed 9/16/2020
 * Greedy Algo
*/

/**
Given an array of integers, find the highest product you can get from three of the integers.
[-10, -10, 1, 3, 2]
 0    1    2  3  4
i =                 undefined;   2;  3;
arr[i]              undefined;   2;  3;
highestProductOf3 = -10 * -10; 100; 300;
lowestProductOf2 = -10 * -10;  -10; -10;
highestProductOf2 = -10 * -10; 100; 100;
lowest = -10;                  -10; -10;
highest = -10;                 100; 100;
*/

function highestProductThree(arr) {
    // edge case: need at least three!
    if (arr.length < 3) return null;

    let lowest = Math.min(arr[0], arr[1]);
    let highest = Math.max(arr[0], arr[1]);
    let lowestProductOf2 = arr[0] * arr[1];
    let highestProductOf2 = arr[0] * arr[1];
    let highestProductOf3 = arr[0] * arr[1];

    for (let i = 2; i < arr.length; i++) {
        //start from the third number in the array;

        // update highestestProduct of 3 with already existing,
        // multiplying current with highest two
        // multiplying current with lowest two (if curr is neg + there was a neg number, the sum might be higher!)
        highestProductOf3 = Math.max(highestProductOf3, highestProductOf2 * arr[i], lowestProductOf2 * arr[i]);

        // IMPORTANT TO UPDATE THIS AFTER PRODUCT OF THREEE TO ENSURE NOT COUNTING CURRENT EL TWICE.
        // update highest product of two with getting highest + current and lowest + current (two neg)
        highestProductOf2 = Math.max(highestProductOf2, highest * arr[i]);
        // update lowest product of two with getting highest + current (one neg) and lowest + current
        lowestProductOf2 = Math.min(lowestProductOf2, lowest * arr[i]);

        //update highest + lowest
        highest = Math.max(highest, arr[i]);
        lowest = Math.min(lowest, arr[i]);
    }

    return highestProductOf3
}

module.exports = highestProductThree;