const solution = require('./index');
const Node = require('../../test/linked-list');

test('solution function exists', () => {
    expect(solution).toBeDefined();
});

test('solution handles empty lists as an input', () => {
    expect(solution(null)).toEqual(null);
});


const oneToFive = {
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

const fiveToOne = {
    val: 5, next: {
        val: 4, next: {
            val: 3, next: {
                val: 2, next: {
                    val: 1, next: null
                }
            }
        }
    }
}

test('solution successfully reverses 1->2->3->4->5->NULL', () => {
    expect(solution(oneToFive)).toEqual(fiveToOne);
});
