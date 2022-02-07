class Node {
  data;
  next = Node();
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
    tail = node;
    if (head == null) {
      head = node;
    }
  }

  remove() {
    data = this.head.data;
    head = head.next;
    if (head == null) {
      tail = null;
    }
    return data;
  }
}
