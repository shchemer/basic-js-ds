const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

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
class Queue {

  constructor(value = null) {
    this.value = value;
    this.next = null;
    this.tail = this;
  }

  getUnderlyingList() {
    return {value: this.value, next: this.next};
  }

  enqueue(num) {
    if (this.value == null) {this.value = num; return};
    this.tail.next = {
      value: num,
      next: null,
    }
    this.tail = this.tail.next;
  }

  dequeue() {
    let deletedValue = this.value;
    if (this.next === null) {this.value = null; this.next = null; this.tail = this; return deletedValue};
    this.value = this.next.value;
    this.next = this.next.next;
    return deletedValue;
  }
}

module.exports = {
  Queue
};
