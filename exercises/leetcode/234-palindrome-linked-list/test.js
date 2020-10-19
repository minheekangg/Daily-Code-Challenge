const solution = require('./index');
const Node = require('../../test/linked-list');

test('solution function exists', () => {
    expect(solution).toBeDefined();
});

test('solution handles empty lists as an input', () => {
    expect(solution([])).toEqual(true);
});

const list1 = new Node(1);
list1.next = new Node(2);
list1.next.next = new Node(3);

test('solution returns false for non-palindrome list', () => {
    expect(solution(list1)).toEqual(false);
});

const list2 = new Node(1);
list2.next = new Node(2);
list2.next.next = new Node(2);
list2.next.next.next = new Node(1);

test('solution returns true for even numbered palindrome list', () => {
    expect(solution(list2)).toEqual(true);
});

const list3 = new Node(1);
list3.next = new Node(0);
list3.next.next = new Node(1);

test('solution returns true for odd numbered palindrome list', () => {
    expect(solution(list3)).toEqual(true);
});