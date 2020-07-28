const solution = require('./index');

test('solution function exists', () => {
    expect(solution).toBeDefined();
});

test('solution handles empty array', () => {
    expect(solution([])).toEqual("");
});

test('solution handles only root node available', () => {
    expect(solution([1])).toEqual("");
});


test('solution calculates longer left node', () => {
    expect(solution([3, 6, 2, 9, -1, 10])).toEqual("Left");
});

test('solution calculates longer right node', () => {
    expect(solution([1, 4, 100, 5])).toEqual("Right");
});

test('solution calculates equal branches', () => {
    expect(solution([1, 10, 5, 1, 0, 6])).toEqual("");
});
