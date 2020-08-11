/**
 * completed 8/10/2019
 * Leetcode - similar to MEDIUM
 * 
 * Given a 2D grid, each cell is either a zombie 1 or a human 0. Zombies can turn adjacent (up/down/left/right) human beings into zombies every hour. Find out how many hours does it take to infect all humans?

Example:

Input:
[[0, 1, 1, 0, 1],
 [0, 1, 0, 1, 0],
 [0, 0, 0, 0, 1],
 [0, 1, 0, 0, 0]]

Output: 2

Explanation:
At the end of the 1st hour, the status of the grid:
[[1, 1, 1, 1, 1],
 [1, 1, 1, 1, 1],
 [0, 1, 0, 1, 1],
 [1, 1, 1, 0, 1]]

At the end of the 2nd hour, the status of the grid:
[[1, 1, 1, 1, 1],
 [1, 1, 1, 1, 1],
 [1, 1, 1, 1, 1],
 [1, 1, 1, 1, 1]]
 * 
*/

// better solution - BFS
function zombie(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    const dirs = [[1, 0], [0, 1], [0, -1], [-1, 0]];
    const queue = [];

    let hours = 0;
    let population = rows * cols;

    // Find all walkers....
    grid.forEach((row, r) => {
        row.forEach((person, c) => {
            if (person === 1) {
                // Add walker to the queue, so she can infect her next victim
                // when its her turn....
                queue.push([r, c]);
            }
        });
    });

    // If everyone has infected, game-over...
    if (queue.length === population) {
        // hours = 0....
        return hours;
    }

    // Find how many humans left...
    population -= queue.length;

    // We have zombies waiting patiently in the queue...
    while (queue.length) {
        // Sorry, kitchen closed...
        if (!population) {
            break;
        }

        // At this point we are t + 1...
        ++hours;

        // lop through all zombies in the queue at t + 1
        for (let i = queue.length; i > 0; --i) {
            const zombie = queue.shift();

            // Loop through all possible directions
            dirs.forEach(dir => {
                const target = [zombie[0] + dir[0], zombie[1] + dir[1]];

                // If target exists in row and she's a human
                // turn her...
                if (
                    target[0] >= 0 &&
                    target[0] < rows &&
                    target[1] >= 0 &&
                    target[1] < cols &&
                    grid[target[0]][target[1]] === 0
                ) {
                    // Target will try to infect humans at
                    // t + 2
                    queue.push(target);
                    // Mark her as non human
                    ++grid[target[0]][target[1]];
                    // Human population decreased...
                    --population;
                }
            });
        }
    }

    // Congrats, it's zombieland now...
    return hours;
}

//  MY SOLUTION
// function zombie(input, count = 0) {
//     let result = true;
//     const copyInput = JSON.parse(JSON.stringify(input));
//     for (let row = 0; row < input.length; row++) {
//         for (let col = 0; col < input[0].length; col++) {
//             if (input[row][col] === 0) {
//                 result = false;
//             }
//             if (input[row][col] === 1) {
//                 if (row > 0 && row < input.length - 1) {
//                     if (input[row - 1][col] === 0) {
//                         copyInput[row - 1][col] = 1;
//                     }
//                     if (input[row + 1][col] === 0) {
//                         copyInput[row + 1][col] = 1;
//                     }
//                 }
//                 if (col > 0 && col < input[0].length - 1) {
//                     if (input[row][col + 1] === 0) {
//                         copyInput[row][col + 1] = 1;
//                     }
//                     if (input[row][col - 1] === 0) {
//                         copyInput[row][col - 1] = 1;
//                     }
//                 }
//             }
//         }
//     }

//     if (result) {
//         return count
//     } else {
//         return zombie(copyInput, count+1)
//     }
// } 

module.exports = zombie;