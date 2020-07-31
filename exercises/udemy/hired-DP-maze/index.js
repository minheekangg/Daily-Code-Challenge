
const solution = (maze) => {
    if (maze.length < 1 ) {
        return false;
    }
    const rowLength = maze.length;
    const colLength = maze[0].length;
    let answer = false;

    function checkSquare(x, y, maze) {
        if (maze[x][y] === 0) {
            maze[x][y] = 'X';

            if (x < rowLength-1) { // go right
                checkSquare(x+1, y, maze);
            }
            if (x > 0 && x < rowLength-1) { //go left
                checkSquare(x-1, y, maze);
            }
            if (y < colLength-1) { //go down
                checkSquare(x, y+1, maze);
            }
            if (y > 0 && y < colLength-1) {
                checkSquare(x, y-1, maze); //go up
            }
            if (x === rowLength-1 && y === colLength-1) {
                answer = true;
                return;
            }
        } else {
            return;
        }
    }
    
    for (let i=0; i < maze.length; i++) {
        for (let j=0; j < maze[0].length; j++) {
            const copyMaze = [...maze];
            checkSquare(i, j, copyMaze)
        }
    }
    return answer;
};

module.exports = solution;


