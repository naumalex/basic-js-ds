const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */

class Node {
  constructor (value) {
    this.value = value;
    this.next = null;  
  }
} 


class Stack {
  constructor() {
    this.first = null;
    this.next = null;
    this.size = 0;
  }

  push(element) {
    if (!this.first) {
      this.first = element;
      this.last = element;
    }
    let oldFirst = this.first;
    this.first = new Node(element);
    this.first.next = oldFirst;
    this.size += 1;
    return this.size;
  }

  pop() {
    if (!this.first) {
      return null;
    }
    let node = this.first;
    this.first = this.first.next;
    return node.value;
  }

  peek() {
    return this.first.value;
  }
}

module.exports = {
  Stack
};
