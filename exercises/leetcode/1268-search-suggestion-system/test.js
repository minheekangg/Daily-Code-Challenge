const solution = require('./index');

test('solution function exists', () => {
    expect(solution).toBeDefined();
});

test('solution handles empty input', () => {
    expect(solution([], "test")).toEqual([[],[],[],[]]);
});

test('solution handles unmatched products', () => {
    expect(solution(["havana"], "tatiana")).toEqual([[], [], [], [], [], [], []]);
});

test('solution handles search + returns sorted answers', () => {
    expect(solution(["bags", "baggage", "banner", "box", "cloths"], "bags")).toEqual([["baggage", "bags", "banner"], ["baggage", "bags", "banner"], ["baggage", "bags"], ["bags"]]);
});

test('solution handles search + returns sorted answers', () => {
    expect(solution(["havana"], "havana")).toEqual([["havana"], ["havana"], ["havana"], ["havana"], ["havana"], ["havana"]]);
});

test('solution handles search + returns sorted answers', () => {
    expect(solution(["mobile", "mouse", "moneypot", "monitor", "mousepad"], "mouse")).toEqual([
        ["mobile", "moneypot", "monitor"],
        ["mobile", "moneypot", "monitor"],
        ["mouse", "mousepad"],
        ["mouse", "mousepad"],
        ["mouse", "mousepad"]
    ]);
});
/**
 * products sorted lexicographically = ["mobile","moneypot","monitor","mouse","mousepad"]
After typing m and mo all products match and we show user ["mobile","moneypot","monitor"]
After typing mou, mous and mouse the system suggests ["mouse","mousepad"]
 */