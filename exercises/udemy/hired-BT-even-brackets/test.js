const solution = require('./index');

test('solution function exists', () => {
    expect(solution).toBeDefined();
});

test('solution handles empty input', () => {
    expect(solution("")).toEqual("");
});

test('solution handles one close bracket', () => {
    expect(solution(">")).toEqual("<>");
});


test('solution handles added right brackets', () => {
    expect(solution("<<<<<>")).toEqual("<<<<<>>>>>");
});

test('solution handles adding left + right brackets', () => {
    expect(solution("<><<>>>")).toEqual("<<><<>>>");
});

test('solution handles long input', () => {
    expect(solution(">>>>>>>><<>><><><><<>><<>><><<<><<><<<>>>><<>><><")).toEqual("<<<<<<<<>>>>>>>><<>><><><><<>><<>><><<<><<><<<>>>><<>><><>>>");
});
