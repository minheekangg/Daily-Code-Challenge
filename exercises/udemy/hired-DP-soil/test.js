const solution = require('./index');

test('solution function exists', () => {
    expect(solution).toBeDefined();
});

test('solution handles empty input', () => {
    expect(solution([])).toEqual(false);
});

test('solution handles 2x2 square without a way out', () => {
    expect(solution([[1,0], [0,1]])).toEqual(false);
});


test('solution handles 2x2 square with a way out', () => {
    expect(solution([1,0], [1,0])).toEqual(true);
});

// test('solution handles adding left + right brackets', () => {
//     expect(solution("<><<>>>")).toEqual("<<><<>>>");
// });

// test('solution handles long input', () => {
//     expect(solution(">>>>>>>><<>><><><><<>><<>><><<<><<><<<>>>><<>><><")).toEqual("<<<<<<<<>>>>>>>><<>><><><><<>><<>><><<<><<><<<>>>><<>><><>>>");
// });
