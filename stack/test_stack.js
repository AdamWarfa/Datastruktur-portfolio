import Stack from "./stack.js";

const stack = new Stack();

stack.push("C");
stack.push("A");
stack.push("T");

stack.dumpList();

console.log(stack.peek());
console.log("size", stack.size());

stack.pop();

stack.dumpList();

console.log(stack.peek());

stack.push("P");

console.log("get 0", stack.get(0));
console.log("get 1", stack.get(1));
console.log("get 2", stack.get(2));
console.log("size", stack.size());
