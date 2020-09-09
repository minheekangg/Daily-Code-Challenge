const solution = require('./index');

test('solution function exists', () => {
    expect(solution).toBeDefined();
});

test('solution throws error for array < 2', () => {
    expect(solution([2])).toEqual(null);
});

test('solution find max profit', () => {
    expect(solution([10, 7, 5, 8, 11, 9])).toEqual(6);
});

test('solution find least loss profit for decreasing stock', () => {
    expect(solution([10, 9, 8, 7, 5, 4, 2])).toEqual(-1);
});