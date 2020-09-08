const solution = require('./index');

test('solution function exists', () => {
    expect(solution).toBeDefined();
});

test('solution successfully removes duplicates', () => {
    expect(solution([1, 1, 2])).toEqual([1, 2].length);
});

test('solution successfully removes longer arrays', () => {
    expect(solution([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])).toEqual(5);
});