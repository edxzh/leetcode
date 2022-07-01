class MyStack {
  constructor() {
    this.queue = [];
    this.tempQueue = [];
  }

  push(x) {
    this.queue.push(x);
  }

  pop() {
    while (this.queue.length > 1) {
      this.tempQueue.push(this.queue.shift());
    }

    let e = this.queue.shift();
    this.queue = this.tempQueue;
    this.tempQueue = [];

    return e;
  }

  top() {
    while (this.queue.length > 1) {
      this.tempQueue.push(this.queue.shift());
    }

    let e = this.queue.shift();
    this.tempQueue.push(e);
    this.queue = this.tempQueue;
    this.tempQueue = [];

    return e;
  }

  empty() {
    return this.queue.length === 0;
  }
}

