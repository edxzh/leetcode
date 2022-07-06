class MyQueue {
  constructor() {
    this.stack = [];
    this.tempStack = [];
  }

  push(number) {
    this.stack.push(number);
  }

  pop() {
    while (this.stack.length > 1) {
      this.tempStack.push(this.stack.pop());
    }

    let element = this.stack.pop();
    this.stack = this.tempStack.reverse();
    this.tempStack = [];

    return element;
  }

  peek() {
    while (this.stack.length > 1) {
      this.tempStack.push(this.stack.pop());
    }

    let element = this.stack.pop();
    this.tempStack.push(element);
    this.stack = this.tempStack.reverse();
    this.tempStack = [];

    return element;
  }

  empty() {
    return this.stack.length === 0;
  }
}
