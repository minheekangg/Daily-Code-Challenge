const solution = require('./index');
const Node = require('../../test/linked-list');

test('solution function exists', () => {
    expect(solution).toBeDefined();
});

const list1 = new Node(1);
list1.next = new Node(2);
list1.next.next = new Node(3);
list1.next.next.next = new Node(4);
list1.next.next.next.next = new Node(5);

test('solution successfully handles linear linked list', () => {
    expect(solution(list1)).toEqual(false);
});

const head = new Node(1);
const second = new Node(2);
head.next = second;
second.next = head;

test('solution successfully handles circular linked list', () => {
    expect(solution(head)).toEqual(true);
});

