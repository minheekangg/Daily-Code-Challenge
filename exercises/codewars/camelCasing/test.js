const camelCasing = require('./index');

test('camelCasing function exists', () => {
    expect(camelCasing).toBeDefined();
});

test('camelCasing handles empty input as an input', () => {
    expect(camelCasing('')).toEqual('');
});

test('camelCasing successfully separate camelCasing into two words', () => {
    expect(camelCasing('camelCasing')).toEqual('camel Casing');
});


test('camelCasing successfully detects majority from multiple repeated elements', () => {
    expect(camelCasing('camelCasingTest')).toEqual('camel Casing Test');
});
