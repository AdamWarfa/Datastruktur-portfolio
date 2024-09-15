export default class DoublyLinkedList {
  constructor() {
    this.head = null; // NOTE: test-code - change later!
    this.tail = null; // NOTE: test-code - change later!
  }

  addNodeFirst(newNode) {
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
  }

  addNodeLast(newNode) {
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  addFirst(data) {
    const newNode = { prev: null, next: null, data: data };
    this.addNodeFirst(newNode);
  }

  addLast(data) {
    const newNode = { prev: null, next: null, data: data };
    this.addNodeLast(newNode);
  }

  removeFirst() {
    const removedNode = this.head;
    this.head = this.head.next;
    this.head.prev = null;

    return removedNode.data;
  }

  removeLast() {
    const removedNode = this.tail;
    this.tail = this.tail.prev;
    this.tail.next = null;

    return removedNode.data;
  }

  //Tip - du kan altid finde en node i listen ved at gå frem fra head! For eksempel vil list.head.next give den anden (den midterste) node, og list.head.next.next vil give den tredje (og sidste) node.
  removeNode(existingNode) {
    if (existingNode === this.head) {
      return this.removeFirst();
    }
    if (existingNode === this.tail) {
      return this.removeLast();
    }

    existingNode.prev.next = existingNode.next;
    existingNode.next.prev = existingNode.prev;
  }

  insertAfterNode(newNode, existingNode) {
    if (!existingNode.next) {
      this.addNodeLast(newNode);
      console.log("hej");
    } else {
      const afterNewNode = existingNode.next;

      existingNode.next.prev = newNode;
      existingNode.next = newNode;

      newNode.prev = existingNode;
      newNode.next = afterNewNode;
    }
  }

  insertBeforeNode(newNode, existingNode) {
    if (!existingNode.prev) {
      this.addNodeFirst(newNode);
    } else {
      const beforeNewNode = existingNode.prev;

      existingNode.prev.next = newNode;
      existingNode.prev = newNode;

      newNode.next = existingNode;
      newNode.prev = beforeNewNode;
    }
  }

  insertAfter(index, data) {
    const existingNode = this.nodeAt(index);
    const newNode = { prev: null, next: null, data: data };

    this.insertAfterNode(newNode, existingNode);
  }

  insertBefore(index, data) {
    const existingNode = this.nodeAt(index);
    const newNode = { prev: null, next: null, data: data };

    this.insertBeforeNode(newNode, existingNode);
  }

  swapNodes(nodeA, nodeB) {
    const beforeA = nodeA.prev;
    const afterA = nodeA.next;

    const beforeB = nodeB.prev;
    const afterB = nodeB.next;

    if (nodeA === this.head) {
      this.head = nodeB;
    } else if (nodeB === this.head) {
      this.head = nodeA;
    }

    if (nodeA === this.tail) {
      this.tail = nodeB;
    } else if (nodeB === this.tail) {
      this.tail = nodeA;
    }

    nodeA.prev = beforeB;
    nodeA.next = afterB;

    nodeB.prev = beforeA;
    nodeB.next = afterA;

    beforeA.next = nodeB;
    afterA.prev = nodeB;

    beforeB.next = nodeA;
    afterB.prev = nodeA;
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
    return node.data;
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
    return this.head.data;
  }

  last() {
    return this.tail.data;
  }

  dumpList() {
    let node = this.head;
    console.log(`
        
        Linked List
        ============
          head: ${this.head.data}
          tail: ${this.tail.data}
        ============`);

    while (node) {
      console.log(`

        Node: ${node.data}
        ----------------
          prev: ${node.prev?.data}
          next: ${node.next?.data}
        `);
      node = node.next;
    }
  }
}

const node1 = {
  prev: null,
  next: null,
  data: "C",
};

const node2 = {
  prev: null,
  next: null,
  data: "A",
};

const node3 = {
  prev: null,
  next: null,
  data: "T",
};

node1.next = node2;
node2.prev = node1;
node2.next = node3;
node3.prev = node2;
