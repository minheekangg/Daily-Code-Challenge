const solution = require('./index');

test('solution function exists', () => {
    expect(solution).toBeDefined();
});

// test('solution handles 0 as an input', () => {
//     expect(solution([[0,1]])).toEqual(1);
// });

const grid = [
    [0, 1, 1, 0, 1],
    [0, 1, 0, 1, 0],
    [0, 0, 0, 0, 1],
    [0, 1, 0, 0, 0]
];

test('solution successfully calculates 4x5 grid', () => {
    expect(solution(grid)).toEqual(2);
});
