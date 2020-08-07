const solution = require('./index');

test('solution function exists', () => {
    expect(solution).toBeDefined();
});

// test('solution handles empty string as an input', () => {
//     expect(solution([], null)).toEqual(0);
// });

test('solution successfully detects two indices', () => {
    expect(solution([2, 7, 11, 15], 9)).toEqual([0,1]);
});
