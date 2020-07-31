const solution = require('./index');

test('solution function exists', () => {
    expect(solution).toBeDefined();
});

test('solution handles 0 as an input', () => {
    expect(solution(0)).toEqual([]);
});

const pascal5 = [
    [1],
    [1, 1],
    [1, 2, 1],
    [1, 3, 3, 1],
    [1, 4, 6, 4, 1]
];
test('solution successfully calculates triangle with 5 rows', () => {
    expect(solution(5)).toEqual(pascal5);
});

test('solution successfully calculates triangle with 2 rows', () => {
    expect(solution(2)).toEqual([[1], [1,1]]);
});
