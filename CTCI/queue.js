class Node {
  data;
  next;
  constructor(data) {
    this.data = data;
  }
}

class Queue {
  head = new Node();
  tail = new Node();

  isEmpty() {
    return head == null;
  }

  peek() {
    return this.head.data;
  }

  add(data) {
    node = new Node(data);
    if (this.tail != null) {
      this.tail.next = node;
    }
    this.tail = node;
    if (this.head == null) {
      this.head = node;
    }
  }

  remove() {
    data = this.head.data;
    this.head = head.next;
    if (this.head == null) {
      this.ail = null;
    }
    return data;
  }
}
