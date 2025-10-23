const solution = require('./index');

test('solution function exists', () => {
    expect(solution).toBeDefined();
});

test('solution successfully detects correct num of islands', () => {
    expect(solution([["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]])).toEqual(1);
});

test('solution successfully detects correct num of islands', () => {
    expect(solution([["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]])).toEqual(3);
});
