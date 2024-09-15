import DoublyLinkedList from "./doublylinkedlist.js";

const testNode = {
  prev: null,
  next: null,
  data: "N",
};

const list = new DoublyLinkedList();
window.list = list; // så man kan skrive list og kalde metoder fra console

list.addLast("C");
list.addLast("A");
list.addLast("T");
list.dumpList();

list.addLast(list.removeLast());
list.dumpList();

list.insertBeforeNode(testNode, list.tail);
list.dumpList();

console.log(list.nodeAt(3));
console.log(list.get(2));
