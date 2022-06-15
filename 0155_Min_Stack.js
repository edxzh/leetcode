class MinStack {
  constructor() {
    this.elements = [];
  }

  push(val) {
    this.elements.push({
      value: val,
      min: this.elements.length === 0 ? val : Math.min(val, this.getMin())
    });
  }

  pop() {
    this.elements.pop();
  }

  top() {
    return this.elements[this.elements.length - 1].value;
  }

  getMin() {
    return this.elements[this.elements.length - 1].min;
  }
}
