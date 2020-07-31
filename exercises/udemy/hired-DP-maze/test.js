const solution = require('./index');

test('solution function exists', () => {
    expect(solution).toBeDefined();
});

test('solution handles empty input', () => {
    expect(solution([])).toEqual(false);
});

test('solution handles 2x2 square without a way out', () => {
    expect(solution([[1,0], [0,1]])).toEqual(false);
});


test('solution handles 2x2 square with a way out', () => {
    expect(solution([[1,0], [1,0]])).toEqual(true);
});



const maze1 = [[1, 0, 0, 1, 1], [1, 1, 0, 1, 1], [1, 0, 0, 1, 1], [1, 0, 1, 1, 0], [1, 0, 0, 0, 0]];
test('solution handles 5x5 with a way out', () => {
    expect(solution(maze1)).toEqual(true);
});

const maze2 = [[1, 0, 0, 1, 1], [1, 1, 0, 1, 1], [1, 0, 0, 1, 1], [1, 0, 1, 1, 0], [1, 0, 0, 0, 1]];

test('solution handles 5x5 with no way out', () => {
    expect(solution(maze2)).toEqual(false);
});


/**
 * maze with start + end points
 *
    const maze1 = [[1, 0, 0, 1, 1], [1, 1, 0, 1, 1], [1, 0, 0, 1, 1], [1, 0, 1, 1, 0], [1, 0, 0, 0, 0]];
    const test1 = {
        startRow: 0,
        startCol: 1,
        destRow: 3,
        destCol: 4
    }
    //TRUE

    const maze2 = [[1, 0, 0, 1, 1], [1, 1, 0, 1, 1], [1, 0, 0, 1, 1], [1, 0, 1, 1, 0], [1, 0, 0, 0, 1]];
    const test2 = {
        startRow: 0,
        startCol: 1,
        destRow: 3,
        destCol: 4,
    }
    //FALSE
 * 
 */