import {Stack} from '../stack';

class TwoStackQueue {
  stackNewestOnTop = new Stack();
  stackOldestOnTop = new Stack();

  enqueue(val) {
    this.stackNewestOnTop.push(val);
  }

  dequeue() {
    this.shiftStacks();
    return this.stackOldestOnTop.pop();
  }

  peek() {
    this.shiftStacks();
    return this.stackOldestOnTop.peek();
  }

  shiftStacks() {
    if (this.stackOldestOnTop.isEmpty()) {
      while (!this.stackNewestOnTop.isEmpty()) {
        this.stackOldestOnTop.push(this.stackNewestOnTop.pop());
      }
    }
  }
}
