const majorityElement = require('./index');

test('majorityElement function exists', () => {
    expect(majorityElement).toBeDefined();
});

test('majorityElement handles empty array as an input', () => {
    expect(majorityElement([])).toEqual();
});

test('majorityElement successfully detects majority from 3 elements', () => {
    expect(majorityElement([3, 2, 3])).toEqual(3);
});

test('majorityElement successfully detects majority from multiple repeated elements', () => {
    expect(majorityElement([2, 2, 1, 1, 1, 2, 2])).toEqual(2);
});
