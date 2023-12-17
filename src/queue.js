const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

class Node {
  constructor (value) {
    this.value = value;
    this.next = null;  
  }
} 

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  
  getUnderlyingList() {
    return this.first;
  }

  enqueue(value) {
    let node = new Node(value);
    this.size += 1;
    if (!this.first) {
      this.first = node;
      this.last = node;
    }
    else {
      this.last.next = node;
      this.last = node;
    }
    return this.size; 
  }

  dequeue() {
    if (!this.first) {
      return null;
    }
    let node = this.first;
    this.first = this.first.next;
    return node.value;
  }
}

module.exports = {
  Queue
};
