// Here's an implementation of a modified stack that allows you to find the current
// minimum element in the stack by using a main operation algorithm in JavaScript:

// Copy code
class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(value) {
    this.stack.push(value);
    if (this.minStack.length === 0 || value <= this.minStack[this.minStack.length - 1]) {
      this.minStack.push(value);
    }
  }

  pop() {
    if (this.stack.length === 0) {
      return;
    }

    const value = this.stack.pop();
    if (value === this.minStack[this.minStack.length - 1]) {
      this.minStack.pop();
    }
  }

  getMin() {
    if (this.minStack.length === 0) {
      return;
    }
    return this.minStack[this.minStack.length - 1];
  }
}
// This stack class uses two arrays, stack and minStack, to store the elements
//  of the stack and the minimum elements of the stack respectively. The push() method 
//  adds an element to the stack and checks if the element is less than or equal to 
//  the current minimum element. If it is, the element is also added to the minStack. 
//  The pop() method removes the top element from the stack and also removes it from 
//  the minStack if it is the current minimum element. The getMin() method returns 
//  the current minimum element in the stack, which is the top element of the minStack.    