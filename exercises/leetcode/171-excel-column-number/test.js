const titleToNumber = require('./index');

test('titleToNumber function exists', () => {
    expect(titleToNumber).toBeDefined();
});

test('titleToNumber handles empty string as an input', () => {
    expect(titleToNumber("")).toEqual(0);
});

test('titleToNumber successfully converts A', () => {
    expect(titleToNumber("A")).toEqual(1);
});

test('titleToNumber successfully converts a into A', () => {
    expect(titleToNumber("a")).toEqual(1);
});

test('titleToNumber successfully converts AB', () => {
    expect(titleToNumber("AB")).toEqual(28);
});

test('titleToNumber successfully converts ZY', () => {
    expect(titleToNumber("ZY")).toEqual(701);
});
