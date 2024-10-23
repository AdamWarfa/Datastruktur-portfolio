export default class Stack {
  constructor() {
    this.tail = null;
    this.count = 0;
  }

  push(data) {
    const newNode = { next: this.tail, data: data };
    this.tail = newNode;

    this.count++;
  }

  pop() {
    if (!this.tail) return null;

    const removedNode = this.tail;
    this.tail = this.tail.next;

    this.count--;

    return removedNode.data;
  }

  size() {
    return this.count;
  }

  nodeAt(index) {
    let count = this.count - 1;
    let currentNode = this.tail;

    while (currentNode) {
      if (count === index) {
        return currentNode;
      }

      count--;
      currentNode = currentNode.next;
    }

    return null;
  }

  get(index) {
    const node = this.nodeAt(index);
    return node ? node.data : null;
  }

  peek() {
    return this.tail ? this.tail.data : null;
  }

  dumpList() {
    let node = this.tail;
    console.log(`
        
        Stack
        ============
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
