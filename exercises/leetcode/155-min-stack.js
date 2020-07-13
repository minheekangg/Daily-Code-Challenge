/**
 * initialize your data structure here.
 */

var Node = function (val) {
    this.value = val;
    this.next = null;
    this.prev = null;
}
var MinStack = function () {
    this.head = null;
    this.tail = null;
    this.size = 0;
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
    var node = new Node(x);
    if (!this.size) {
        this.head = node;
        this.tail = node;
    } else {
        var temp = this.tail;
        this.tail = node;
        this.tail.prev = temp;
        temp.next = node;
    }
    this.size++;
    return;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    if (!this.head) return undefined;
    var oldTail = this.tail;
    var newTail = this.tail.prev;
    this.tail = newTail;
    // newTail.next = null;
    // oldTail.prev = null;
    this.size--;
    return;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    if (!this.tail) return undefined;
    return this.tail.value;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    if (!this.head) return undefined;
    var min = this.head.value;
    var current = this.head;
    var counter = 0;
    while (counter < this.size) {
        if (current.value < min) {
            min = current.value;
        }
        counter++;
        current = current.next;
    }
    return min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */