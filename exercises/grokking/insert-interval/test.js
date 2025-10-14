
const Solution = require('./index.js');

const sol = new Solution();


test('solution function exists', () => {
    expect(sol).toBeDefined();
});

test('solution handles merge successfully', () => {
// Input: Intervals=[[1,3], [5,7], [8,12]], New Interval=[4,6]
// Output: [[1,3], [4,7], [8,12]]
// Explanation: After insertion, since [4,6] overlaps with [5,7], we merged them into one [4,7].
    expect(sol.insert([{start:1, end:3},{start:5, end:7},{start:8, end:12}], {start:4, end:6})).toEqual([{start:1, end:3}, {start:4, end:7}, {start:8, end:12}]);
});

test('solution handles merge with more than 1 interval successfully', () => {
// Input: Intervals=[[1,3], [5,7], [8,12]], New Interval=[4,10]
// Output: [[1,3], [4,12]]
// Explanation:After insertion, since [4,10] overlaps with [5,7] & [8,12], we merged them into [4,12].
    expect(sol.insert([{start:1, end:3},{start:5, end:7},{start:8, end:12}], {start:4, end:10})).toEqual([{start:1, end:3}, {start:4, end:12}]);
});

test('solution handles merge in the beginning successfully', () => {
// Input: Intervals=[[2,3],[5,7]], New Interval=[1,4]
// Output: [[1,4], [5,7]]
// Explanation: After insertion, since [1,4] overlaps with [2,3], we merged them into one [1,4].
    expect(sol.insert([{start:2, end:3},{start:5, end:7}], {start:1, end:4})).toEqual([{start:1, end:4}, {start:5, end:7}]);
});

test('solution handles no overlap successfully', () => {
// Input: Intervals=[[3,4],[5,7]], New Interval=[1,2]
// Output: [[1,2],[3,4],[5,7]]
    expect(sol.insert([{start:3, end:4},{start:5, end:7}], {start:1, end:2})).toEqual([{start:1, end:2}, {start:3, end:4}, {start:5, end:7}]);
});
