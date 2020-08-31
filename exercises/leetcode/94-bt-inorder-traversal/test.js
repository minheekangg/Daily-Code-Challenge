const solution = require('./index');
const BinarySearchTree = require('../../test/binary-linked-list');

test('solution function exists', () => {
    expect(solution).toBeDefined();
});

// test('solution handles empty lists as an input', () => {
//     expect(solution([])).toEqual([]);
// });


// const bst = new BinarySearchTree();
// [6, 2, 8, 0, 4, 7, 9, 3, 5].forEach(n => bst.add(n));

// test('solution successfully traverses long tree', () => {
//     expect(solution(bst)).toEqual([3, 0, 5, 2, 4, 6, 7, 8, 9]);
// });

// const bst2 = new BinarySearchTree();
// [1, null, 2, 3].forEach(n => bst.add(n));

// test('solution successfully traverses short tree', () => {
//     expect(solution(bst2)).toEqual([1,3,2]);
// });

