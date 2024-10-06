export default class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addNodeFirst(newNode) {
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  addNodeLast(newNode) {
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  addFirst(data) {
    const newNode = { next: null, data: data };
    this.addNodeFirst(newNode);
  }

  addLast(data) {
    const newNode = { next: null, data: data };
    this.addNodeLast(newNode);
  }

  removeFirst() {
    if (!this.head) return null;

    const removedNode = this.head;
    this.head = this.head.next;

    if (!this.head) {
      this.tail = null;
    }

    return removedNode.data;
  }

  removeLast() {
    if (!this.head) return null;

    if (this.head === this.tail) {
      const removedNode = this.head;
      this.head = null;
      this.tail = null;
      return removedNode.data;
    }

    let currentNode = this.head;
    while (currentNode.next !== this.tail) {
      currentNode = currentNode.next;
    }

    const removedNode = this.tail;
    this.tail = currentNode;
    this.tail.next = null;

    return removedNode.data;
  }

  removeNode(existingNode) {
    if (existingNode === this.head) {
      return this.removeFirst();
    }

    let currentNode = this.head;
    while (currentNode.next && currentNode.next !== existingNode) {
      currentNode = currentNode.next;
    }

    if (currentNode.next === existingNode) {
      currentNode.next = existingNode.next;
      if (existingNode === this.tail) {
        this.tail = currentNode;
      }
    }
  }

  insertAfter(index, data) {
    const existingNode = this.nodeAt(index);
    const newNode = { next: null, data: data };

    if (existingNode === this.tail) {
      this.addNodeLast(newNode);
    } else {
      newNode.next = existingNode.next;
      existingNode.next = newNode;
    }
  }

  insertBefore(index, data) {
    if (index === 0) {
      this.addFirst(data);
      return;
    }

    const previousNode = this.nodeAt(index - 1);
    const newNode = { next: null, data: data };

    newNode.next = previousNode.next;
    previousNode.next = newNode;
  }

  size() {
    let count = 0;
    let currentNode = this.head;

    while (currentNode) {
      count++;
      currentNode = currentNode.next;
    }

    return count;
  }

  nodeAt(index) {
    let count = 0;
    let currentNode = this.head;

    while (currentNode) {
      if (count === index) {
        return currentNode;
      }

      count++;
      currentNode = currentNode.next;
    }

    return null;
  }

  get(index) {
    const node = this.nodeAt(index);
    return node ? node.data : null;
  }

  indexOf(data) {
    let count = 0;
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.data === data) {
        return count;
      }

      count++;
      currentNode = currentNode.next;
    }

    return -1;
  }

  first() {
    return this.head ? this.head.data : null;
  }

  last() {
    return this.tail ? this.tail.data : null;
  }

  dumpList() {
    let node = this.head;
    console.log(`
        
        Linked List
        ============
          head: ${this.head ? this.head.data : "null"}
          tail: ${this.tail ? this.tail.data : "null"}
        ============
    `);

    while (node) {
      console.log(`

        Node: ${node.data}
        ----------------
          next: ${node.next ? node.next.data : "null"}
        `);
      node = node.next;
    }
  }
}

const node1 = {
  next: null,
  data: "C",
};

const node2 = {
  next: null,
  data: "A",
};

const node3 = {
  next: null,
  data: "T",
};

node1.next = node2;
node2.next = node3;
