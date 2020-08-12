const solution = require('./index');
const Node = require('../../test/binary-linked-list');

test('solution function exists', () => {
    expect(solution).toBeDefined();
});

const bst = new Node(6);
bst.left = new Node(2);
bst.right = new Node(8);

bst.left.left = new Node(0);
bst.left.right = new Node(4);
bst.left.right.left = new Node(3);
bst.left.right.right = new Node(5);

bst.right.left = new Node(7);
bst.right.right = new Node(8);

// [6, 2, 8, 0, 4, 7, 9, null, null, 3, 5]

test('solution successfully detects lower nodes with found siblings', () => {
    expect(solution(bst, 3, 5)).toEqual(4);
});

test('solution successfully detects root as node with found siblings', () => {
    expect(solution(bst, 2, 8)).toEqual(6);
});

test('solution successfully detects found parent node with found child', () => {
    expect(solution(bst, 2, 4)).toEqual(2);
});
