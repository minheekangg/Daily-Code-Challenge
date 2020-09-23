const solution = require('./index');
const Node = require('../../test/linked-list');

test('solution function exists', () => {
    expect(solution).toBeDefined();
});

test('solution handles empty input', () => {
    expect(solution(null, null)).toEqual(null);
});

const connectNode1 = new Node(8);
connectNode1.next = new Node(4);
connectNode1.next.next = new Node(5);

const list1 = new Node(4);
list1.next = new Node(1);
list1.next.next = connectNode1;

const list2 = new Node(5);
list2.next = new Node(6);
list2.next.next = new Node(1);
list2.next.next.next = connectNode1;


test('solution successfully detects where merge happens', () => {
    expect(solution(list1,list2)).toEqual(connectNode1);
});

const connectNode2 = new Node(3);
connectNode2.next = new Node(2);
connectNode2.next.next = new Node(4);

const longList = new Node(1);
longList.next = new Node(9);
longList.next.next = new Node(1);
longList.next.next.next = connectNode2;

test('solution successfully detects merge point of long and head list', () => {
    expect(solution(longList,connectNode2)).toEqual(connectNode2);
});

const shortList = new Node(8);
shortList.next = connectNode2;

test('solution successfully detects merge point of long and short list', () => {
    expect(solution(longList,shortList)).toEqual(connectNode2);
});

const list3 = new Node(2);
list3.next = new Node(6);
list3.next.next = new Node(4);

const list4 = new Node(1);
list4.next = new Node(4);

test('solution successfully detects not connected lists', () => {
    expect(solution(list3,list4)).toEqual(null);
});

