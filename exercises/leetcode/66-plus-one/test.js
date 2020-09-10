const solution = require('./index');

test('solution function exists', () => {
    expect(solution).toBeDefined();
});

test('solution successfully add 1 to the last idx', () => {
    expect(solution([4,3,2,1])).toEqual([4,3,2,2]);
});

test('solution successfully add 1 to the last idx when last digit is 9', () => {
    expect(solution([1,2,3,9])).toEqual([1,2,4,0]);
});

test('solution successfully add 1 to 0', () => {
    expect(solution([0])).toEqual([1]);
});

test('solution successfully add 1 99', () => {
    expect(solution([9,9,9])).toEqual([1,0,0,0]);
});
