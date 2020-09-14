const solution = require('./index');
const Node = require('../../test/linked-list');

test('solution function exists', () => {
    expect(solution).toBeDefined();
});

test('solution handles empty lists as an input', () => {
    expect(solution([new Node(1)])).toEqual(false);
});

const list1 = new Node(3);
list1.next = new Node(2);
list1.next.next = new Node(0);
list1.next.next = new Node(-4);
list1.next.next.next = list1.next;

test('solution successfully detects cycled list', () => {
    expect(solution(list1)).toEqual(true);
});

const longList = new Node(1);
longList.next = new Node(2);
longList.next.next = new Node(3);
longList.next.next.next = new Node(4);
longList.next.next.next.next = new Node(5);

test('solution successfully detects linear list', () => {
    expect(solution(longList)).toEqual(false);
});

