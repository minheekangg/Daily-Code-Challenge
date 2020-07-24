const mergeTwoLists = require('./index');
const Node = require('../../test/linked-list');

test('mergeTwoLists function exists', () => {
    expect(mergeTwoLists).toBeDefined();
});

test('mergeTwoLists handles empty lists as an input', () => {
    expect(mergeTwoLists("", "")).toEqual(null);
});

const list1 = new Node(1);
list1.next = new Node(2);
list1.next.next = new Node(3);

const list2 = new Node(1);
list2.next = new Node(3);
list2.next.next = new Node(5);

const list3 = {
    val: 1, next: {
        val: 1, next: {
            val: 2, next: {
                val: 3, next: {
                    val: 3, next: {
                        val: 5, next: null
                    }
                }
            }
        }
    }
}

test('mergeTwoLists successfully handles merging of 1->2->3 with 1->3->5', () => {
    expect(mergeTwoLists(list1,list2)).toEqual(list3);
});

const longList = new Node(1);
longList.next = new Node(2);
longList.next.next = new Node(3);
longList.next.next.next = new Node(4);
longList.next.next.next.next = new Node(5);

const shortList = new Node(1);
shortList.next = new Node(1);
shortList.next.next = new Node(1);

const combinedList = {
    val: 1, next: {
        val: 1, next: {
            val: 1, next: {
                val: 1, next: {
                    val: 2, next: {
                        val: 3, next: {
                            val: 4, next: {
                                val: 5, next: null
                            }
                        }
                    }
                }
            }
        }
    }
}

test('mergeTwoLists successfully handles merging of long list 1->2->3->4->5 with short list 1->1', () => {
    expect(mergeTwoLists(longList,shortList)).toEqual(combinedList);
});

