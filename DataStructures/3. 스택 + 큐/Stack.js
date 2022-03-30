// use arroay
const stackArray = [];
stackArray.push('google');
stackArray.push('insta');
stackArray.push('youtube');

console.log(stackArray);

stackArray.pop();

console.log(stackArray);

// or use unshift() , shift()

// Class
class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}
class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    const newNode = new newNode(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      const temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }
  pop() {
    if (!this.first) return undefined;
    const temp = this.first;
    this.first = temp.next;
    this.size--;
    if (this.size === 0) {
      this.last = null;
    }
    return temp.value;
  }
}
