import Queue from "./queue.js";

const queue = new Queue();
window.queue = queue;

queue.enqueue("C");
queue.enqueue("A");
queue.enqueue("T");
queue.dumpList();

queue.enqueue(queue.dequeue());
queue.dumpList();

console.log("Get 2", queue.get(2));
console.log("peek", queue.peek());
console.log("size", queue.size());
