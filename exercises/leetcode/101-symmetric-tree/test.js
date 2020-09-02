const solution = require('./index');

test('solution function exists', () => {
    expect(solution).toBeDefined();
});

test('solution successfully handles empty input', () => {
    expect(solution([])).toEqual(true);
});

const symmetricTree = {
    val: 1,
    left: {
        val: 2, 
        left: {
            val: 3,
            left: null,
            right: null,
        },
        right: {
            val: 4,
            left: null,
            right: null,
        }
    },
    right: {
        val: 2,
        left: {
            val: 4,
            left: null,
            right: null
        },
        right: {
            val: 3,
            left: null,
            right: null
        }
    }
}

test('solution successfully handles symmetric tree', () => {
    expect(solution(symmetricTree)).toEqual(true);
});

const asymmetricTree = {
    val: 1,
    left: {
        val: 2,
        left: null,
        right: {
            val: 3,
            left: null,
            right: null,
        }
    },
    right: {
        val: 2,
        left: null,
        right: {
            val: 3,
            left: null,
            right: null,
        }
    }
}

test('solution successfully handles asymmetric tree', () => {
    expect(solution(asymmetricTree)).toEqual(false);
});