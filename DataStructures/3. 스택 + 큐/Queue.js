// use Array
const queueArray = [];
queueArray.push('f');
queueArray.push('s');
queueArray.push('t');

queueArray.shift();
queueArray.shift();
queueArray.shift();

queueArray.unshift('f');
queueArray.unshift('s');
queueArray.unshift('t');

queueArray.pop();
queueArray.pop();
queueArray.pop();

// use Class
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(val) {
    const newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }

  dequeue() {
    if (!this.first) return undefined;

    const temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = temp.next;
    this.size--;
    return temp.value;
  }
}
