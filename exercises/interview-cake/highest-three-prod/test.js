const solution = require('./index');

test('solution function exists', () => {
    expect(solution).toBeDefined();
});

test('solution throws error for array < 2', () => {
    expect(solution([2,1])).toEqual(null);
});

test('solution find max prod with all positive numbers', () => {
    expect(solution([1, 2, 3, 4, 5])).toEqual(60);
});

test('solution find max prod with neg numbers', () => {
    expect(solution([-10, -10, 1, 3, 2])).toEqual(300);
});